import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const __dirname=path.dirname(fileURLToPath(import.meta.url)); const root=path.join(__dirname,'public');
const env={...process.env}; const PORT=Number(env.PORT||3000);
const prices={
  'tacticaltails-doggy-soldier-outfit':3999,
  'tactical-chew-toy':1499,
  'military-glasses':1299
};
const json=(res,code,data)=>{res.writeHead(code,{'content-type':'application/json','cache-control':'no-store'});res.end(JSON.stringify(data))};
const readBody=req=>new Promise((resolve,reject)=>{let b='';req.on('data',d=>{b+=d;if(b.length>1e6)req.destroy()});req.on('end',()=>{try{resolve(JSON.parse(b||'{}'))}catch(e){reject(e)}});req.on('error',reject)});
const contentType=f=>({'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.webp':'image/webp','.svg':'image/svg+xml','.ico':'image/x-icon'}[path.extname(f).toLowerCase()]||'application/octet-stream');

async function chargeSquare(body){if(!env.SQUARE_ACCESS_TOKEN)throw new Error('Square is not configured');const cart=Array.isArray(body.cart)?body.cart:[];let cents=0;for(const item of cart){const unit=prices[item.handle];if(!unit)throw new Error('Unknown product');const qty=Math.max(1,Math.min(20,Number(item.qty)||1));cents+=unit*qty;}if(cents<1)throw new Error('Cart is empty');const base=env.SQUARE_ENVIRONMENT==='production'?'https://connect.squareup.com':'https://connect.squareupsandbox.com';const payload={source_id:body.sourceId,idempotency_key:crypto.randomUUID(),amount_money:{amount:cents,currency:'USD'},autocomplete:true,location_id:env.SQUARE_LOCATION_ID,buyer_email_address:body.customer?.email};const r=await fetch(`${base}/v2/payments`,{method:'POST',headers:{'Authorization':`Bearer ${env.SQUARE_ACCESS_TOKEN}`,'Square-Version':'2026-01-22','Content-Type':'application/json'},body:JSON.stringify(payload)});const data=await r.json();if(!r.ok)throw new Error(data.errors?.[0]?.detail||'Square payment failed');const order={id:data.payment?.id||crypto.randomUUID(),total:cents,cart,customer:body.customer||{},created_at:new Date().toISOString()};await saveOrder(order);return order;}
async function saveOrder(order){const key=env.SUPABASE_SECRET_KEY||env.SUPABASE_SERVICE_ROLE_KEY;if(!env.SUPABASE_URL||!key)return;try{const headers={'apikey':key,'Content-Type':'application/json','Prefer':'return=minimal'};if(key.startsWith('eyJ'))headers.Authorization=`Bearer ${key}`;const r=await fetch(`${env.SUPABASE_URL.replace(/\/$/,'')}/rest/v1/orders`,{method:'POST',headers,body:JSON.stringify(order)});if(!r.ok)throw new Error(`Supabase order save failed: ${r.status} ${await r.text()}`)}catch(e){console.error(e.message||e)}}

const server=http.createServer(async(req,res)=>{try{const u=new URL(req.url,'http://localhost');if(u.pathname==='/api/config'){return json(res,200,{squareApplicationId:env.SQUARE_APPLICATION_ID||'',squareLocationId:env.SQUARE_LOCATION_ID||'',squareEnvironment:env.SQUARE_ENVIRONMENT||'sandbox'})}if(u.pathname==='/api/payments'&&req.method==='POST'){try{const body=await readBody(req);const order=await chargeSquare(body);return json(res,200,{ok:true,orderId:order.id})}catch(e){return json(res,400,{ok:false,error:e.message})}}
let filePath=path.join(root,decodeURIComponent(u.pathname));if(u.pathname==='/'||u.pathname.startsWith('/products/')||u.pathname.startsWith('/collections/')||u.pathname==='/cart'||u.pathname==='/checkout')filePath=path.join(root,'index.html');else{try{const s=await stat(filePath);if(s.isDirectory())filePath=path.join(filePath,'index.html')}catch{filePath=path.join(root,'index.html')}}const buf=await readFile(filePath);res.writeHead(200,{'content-type':contentType(filePath)});res.end(buf)}catch(e){res.writeHead(500);res.end('Server error')}});
server.listen(PORT,()=>console.log(`Tactical Tails running at http://localhost:${PORT}`));

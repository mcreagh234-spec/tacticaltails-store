# Tactical Tails standalone storefront

A standalone rebuild of the Tactical Tails Shrine/Shopify storefront. No Shopify runtime is required.

## Run locally

```bash
node server.mjs
```

Open `http://localhost:3000`.

## Included

- Responsive Tactical Tails storefront
- Collection page and product detail routes
- Doggy Soldier Outfit variants + size selection
- Product gallery/thumbnails
- Sticky Add to Cart
- Cart drawer with reserved-cart timer and free-shipping progress bar
- Local cart persistence
- Responsive mobile navigation/layout
- Checkout page
- Optional Square payment backend
- Optional Supabase order write

## Square setup

Set these environment variables before running:

- `SQUARE_ENVIRONMENT=sandbox` or `production`
- `SQUARE_APPLICATION_ID`
- `SQUARE_LOCATION_ID`
- `SQUARE_ACCESS_TOKEN`

The server exposes only the public application/location IDs to the browser. The access token stays server-side.

## Optional Supabase order storage

Run `supabase-orders.sql` in the Supabase SQL Editor, then set:

- `SUPABASE_URL`
- `SUPABASE_SECRET_KEY`

## Product data

Edit `public/assets/products.js`. The Doggy Soldier Outfit data, pricing, image URLs, variants and sizing are carried from the existing Tactical Tails product export. The two smaller accessory products are isolated in this file so their exact catalog fields can be updated without touching the storefront code.

-- TacticalTails order storage
create table if not exists public.orders (
  id text primary key,
  total integer not null check (total >= 0),
  cart jsonb not null default '[]'::jsonb,
  customer jsonb not null default '{}'::jsonb,
  payment_status text not null default 'paid',
  fulfillment_status text not null default 'unfulfilled',
  tracking_number text,
  created_at timestamptz not null default now()
);

alter table public.orders enable row level security;
revoke all on table public.orders from anon, authenticated;
grant select, insert, update, delete on table public.orders to service_role;

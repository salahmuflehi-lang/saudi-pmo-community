-- Saudi PMO Community — membership requests table
-- Run this once in the Supabase SQL editor (Dashboard → SQL Editor → New query → Run).

create table if not exists public.join_requests (
  id           uuid primary key default gen_random_uuid(),
  created_at   timestamptz not null default now(),
  full_name    text not null,
  email        text not null,
  organization text,
  role         text,
  lang         text
);

alter table public.join_requests enable row level security;

-- The public site may only INSERT. Nobody can read/update/delete
-- through the anon key — view submissions in the Supabase dashboard
-- (Table Editor → join_requests) or with the service-role key.
create policy "public can request to join"
  on public.join_requests
  for insert
  to anon
  with check (true);

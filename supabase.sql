-- Run in Supabase SQL editor before accepting enquiries.
create extension if not exists pgcrypto;
create table if not exists public.appointments (
  id uuid primary key default gen_random_uuid(),
  full_name text not null check (char_length(full_name) between 2 and 100),
  phone text not null, preferred_date date not null, preferred_time time not null,
  category text not null, message text not null default '', consent boolean not null check(consent),
  status text not null default 'new' check(status in ('new','contacted','closed')),
  created_at timestamptz not null default now()
);
create table if not exists public.admin_users (user_id uuid primary key references auth.users(id) on delete cascade);
create table if not exists public.clinic_settings (key text primary key,value jsonb not null,updated_at timestamptz not null default now());
alter table public.appointments enable row level security;
alter table public.admin_users enable row level security;
alter table public.clinic_settings enable row level security;
-- no anonymous insert/select policies; public form inserts only server-side via service-role key
create or replace function public.is_clinic_admin() returns boolean language sql stable security definer set search_path = public as $$ select exists(select 1 from public.admin_users where user_id=auth.uid()); $$;
revoke all on function public.is_clinic_admin() from public;
grant execute on function public.is_clinic_admin() to authenticated;
create policy "approved admins read enquiries" on public.appointments
  for select to authenticated using (public.is_clinic_admin());
create policy "approved admins modify enquiries" on public.appointments
  for update to authenticated using (public.is_clinic_admin());
-- admin_users has no direct user-level access: verified on server using service role
-- Add admins only after creating a Supabase Auth user:
-- insert into public.admin_users(user_id) values ('YOUR-AUTH-USER-UUID');

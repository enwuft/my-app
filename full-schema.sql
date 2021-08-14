-- Custom types
create type public.app_permission as enum ('college.delete', 'users.delete');
create type public.app_role as enum ('admin', 'moderator');
create type public.user_status as enum ('UPCOMMING', 'PROCESS', 'APCEPT');

-- USERS
CREATE TABLE public.users (
  id uuid NOT NULL PRIMARY KEY,
  username varchar(100) not null,
  fristName text,
  lastName text,
  email text,
  create_time timestamptz default now() not null,
  status user_status default 'UPCOMMING'::public.user_status,
  access_token text
);
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow logged-in read access" on public.users FOR SELECT USING ( auth.role() = 'authenticated' );
CREATE POLICY "Allow individual insert access" on public.users FOR INSERT WITH CHECK ( auth.uid() = id );
CREATE POLICY "Allow individual update access" on public.users FOR UPDATE USING ( auth.uid() = id );

CREATE TABLE public.college (
  id bigserial primary key,
  college_name varchar(250),
  email varchar(250),
  detail text
);

-- USER ROLES
CREATE TABLE public.user_roles (
  id        bigint generated by default as identity primary key,
  user_id   uuid references public.users on delete cascade not null,
  role      app_role not null,
  unique (user_id, role)
);
comment on table public.user_roles is 'Application roles for each user.';

-- ROLE PERMISSIONS
create table public.role_permissions (
  id           bigint generated by default as identity primary key,
  role         app_role not null,
  permission   app_permission not null,
  unique (role, permission)
);
comment on table public.role_permissions is 'Application permissions for each role.';

-- authorize with role-based access control (RBAC)
create function public.authorize(
  requested_permission app_permission,
  user_id uuid
)
returns boolean as $$
declare
  bind_permissions int;
begin
  select count(*)
  from public.role_permissions
  inner join public.user_roles on role_permissions.role = user_roles.role
  where role_permissions.permission = authorize.requested_permission
    and user_roles.user_id = authorize.user_id
  into bind_permissions;
  
  return bind_permissions > 0;
end;
$$ language plpgsql security definer;

-- Secure the tables
alter table public.users enable row level security;
alter table public.college enable row level security;
alter table public.user_roles enable row level security;
alter table public.role_permissions enable row level security;

-- inserts a row into public.users and assigns roles
create function public.handle_new_user() 
returns trigger as $$
declare is_admin boolean;
begin
  insert into public.users (id, username)
  values (new.id, new.email);
  
  select count(*) = 1 from auth.users into is_admin;
  
  if position('+supaadmin@' in new.email) > 0 then
    insert into public.user_roles (user_id, role) values (new.id, 'admin');
  elsif position('+supamod@' in new.email) > 0 then
    insert into public.user_roles (user_id, role) values (new.id, 'moderator');
  end if;
  
  return new;
end;
$$ language plpgsql security definer;

-- trigger the function every time a user is created
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();


-- DUMMY DATA
insert into public.users (id, username)
values
    ('8d0fd2b3-9ca7-4d9e-a95f-9e13dded32ee', 'root'),
    ('8d0fd2b3-9ca7-4d9e-a95f-9e13dded323e', 'supabot');

insert into public.college (college_name, email, detail)
values
    ('public', 'rbtech@mail.com', 'Rattanaburi Technical College'),
    ('random', 'rbtech1@mail.com', 'Rattanaburi Technical College');

insert into public.role_permissions (role, permission)
values
    ('admin', 'users.delete'),
    ('admin', 'college.delete'),
    ('moderator', 'users.delete'),
    ('moderator', 'college.delete');
-- GENERATE_RANDOM KEYS
CREATE OR REPLACE FUNCTION generate_uid(size INT) RETURNS TEXT AS $$
DECLARE
  characters TEXT := 'abcdefghijklmnopqrstuvwxyz0123456789';
  bytes BYTEA := gen_random_bytes(size);
  l INT := length(characters);
  i INT := 0;
  output TEXT := '';
BEGIN
  WHILE i < size LOOP
    output := output || substr(characters, get_byte(bytes, i) % l + 1, 1);
    i := i + 1;
  END LOOP;
  RETURN output;
END;
$$ LANGUAGE plpgsql VOLATILE;

-- remove table if already exist
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS colleges;


create type public.contest_status as enum ('UPCOMMING', 'PROCESS', 'APCEPT');
-- create type public.app_role as enum ('admin', 'moderator');

create table users (
  -- UUID from auth.users
  id uuid references auth.users not null primary key,
  full_name text,
  card_id integer unique,
  avatar_url text,
  level_user text,
  detail text
);
create policy "Can view own user data." on users for select using (auth.uid() = id);
create policy "Can update own user data." on users for update using (auth.uid() = id);


CREATE TABLE colleges (
  id uuid not null primary key,
  college_name varchar(255),
  email varchar(100),
  phone varchar(15),
  avatar_url text,
  detail text
);


DROP TABLE IF EXISTS students;
create table students (
  id serial not null primary key,
  card_id integer not null,
  frist_name text not null,
  last_name text not null,
  avatar_url text not null,
  -- college_Id references colleges.id not null,
  education_level text not null,
  created_at timestamptz default now() not null
);


DROP TABLE IF EXISTS contests;
create table contests (
  id uuid not null primary key,
  -- contest_id text default generate_uid(20),
  -- contest_id bigint references students,
  student_id bigint not null references students(card_id),
  title text not null,
  content text,
  document bytea,
  created_at timestamptz default now() not null,
  status contest_status default 'UPCOMMING'::public.contest_status
);


-- Secure the tables
alter table users enable row level security;
alter table contests enable row level security;
alter table colleges enable row level security;
alter table students enable row level security;

-- DUMMY DATA
insert into users (id, full_name, avatar_url, level_user, detail)
values
    ('8d0fd2b3-9ca7-4d9e-a95f-9e13dded32ee', 'root', 'https://gravatar.com/avatar/e9d7c3f1dd6ceb36473329f91f215c38?s=400&d=robohash&r=x', 'วิทยาลัยเทคนิคสุรินทร์', 'เขียนเเบบไฟฟ้าด้วยตอมพิวเตอร์'),
    ('8d0fd2b3-9ca7-4d9e-a95f-9e13dded323e', 'admin', 'https://gravatar.com/avatar/e9d7c3f1dd6ceb36473329f91f215c38?s=400&d=robohash&r=x', 'วิทยาลัยเทคนิคสุรินทร์', 'เขียนเเบบไฟฟ้าด้วยตอมพิวเตอร์');

insert into contests (contest_id, title, content)
values
    ('8d0fd2b3-9ca7-4d9e-a95f-9e13dded323c', 'เขียนเเบบไฟฟ้าด้วยตอมพิวเตอร์', 'เขียนเเบบไฟฟ้าด้วยตอมพิวเตอร์ ทักษะงานออกแบบระบบไฟฟ้าและเขียนแบบไฟฟ้าด้วยคอมพิวเตอร์ ปีการศึกษา 2561'),
    ('8d0fd2b3-9ca7-4d9e-a95f-9e13dded323a', 'เขียนเเบบไฟฟ้าด้วยตอมพิวเตอร์', 'เขียนเเบบไฟฟ้าด้วยตอมพิวเตอร์ ทักษะงานออกแบบระบบไฟฟ้าและเขียนแบบไฟฟ้าด้วยคอมพิวเตอร์ ปีการศึกษา 2561');

insert into students (frist_name, last_name, avatar_url, student_level)
values
  ('Chanthawat', 'Kiriyadee', 'https://gravatar.com/avatar/e9d7c3f1dd6ceb36473329f91f215c38?s=400&d=robohash&r=x', 'ประกาศณียบัตรวิชาชีพ ชั้นสูง'),
  ('Chanthawat', 'Kiriyadee', 'https://gravatar.com/avatar/e9d7c3f1dd6ceb36473329f91f215c38?s=400&d=robohash&r=x', 'ประกาศณียบัตรวิชาชีพ');

insert into colleges (college_name, email, phone, avatar_url, detail)
values
  ('วิทยาลัยเทคนิครัตนบุรี', 'rattanaburi.college@gmail.com', '+023332334', 'https://gravatar.com/avatar/e9d7c3f1dd6ceb36473329f91f215c38?s=400&d=robohash&r=x', 'วิทยาลัยเทคนิครัตนบุรี'),
  ('วิทยาลัยเทคนิค', 'rattanaburi@gmail.com', '+023332334', 'https://gravatar.com/avatar/e9d7c3f1dd6ceb36473329f91f215c38?s=400&d=robohash&r=x', 'วิทยาลัยเทคนิครัตนบุรี');
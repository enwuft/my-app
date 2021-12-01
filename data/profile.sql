create table "public"."profiles" (
  "id" uuid not null,
  "created_at" timestamp with time zone not null,
  "updated_at" timestamp with time zone,
  "username" text not null,
  "avatar_url" text not null,
  "full_name" text not null default '"default"'::text
)

after table "public"."profiles" enable row level security;
create policy "Public profiles are viewable by everyone"
on "public"."profiles"
as permissive
for select
to public
using (true);

create policy "Users can insert their own profile."
on "public"."profiles"
as permissive
for insert
to public
with check (auth.uid() = id);

create policy "Avatar images are publicly accessible."
on "stotage"."objects"
as permissive
for select
to public
using ((bucket_id = "avatars"::text));
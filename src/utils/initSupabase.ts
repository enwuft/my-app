import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export const getUser = async token => {
  const { data, error } = await supabase.auth.api.getUser(token)
  if (error) {
    throw error
  }
  return data
}

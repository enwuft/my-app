import { supabase } from 'utils/initSupabase'

export default function handler(req: any, res: any) {
  supabase.auth.api.setAuthCookie(req, res)
}

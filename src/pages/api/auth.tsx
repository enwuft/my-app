import type { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from 'utils/initSupabase'

export const handler = (req: NextApiRequest, res: NextApiResponse): void => {
  supabase.auth.api.getUserByCookie(req, res)
}

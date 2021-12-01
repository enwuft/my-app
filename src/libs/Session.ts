import { useState, useEffect } from 'react'
import { supabase } from '../utils/initSupabase'

export interface Props {
  session: string
}

export default function SessionAlive() {
  const [session, setSession] = useState()

  useEffect(() => {
    setSession(supabase.auth.session())
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])
}

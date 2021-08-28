import React, { useEffect } from 'react'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { Toaster } from 'react-hot-toast'
import NProgressContainer from '~/components/shared/nprogress'
import '../assets/main.css'
import { supabase } from '~/utils/initSupabase'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        await fetch('/api/cookie', {
          method: 'POST',
          headers: new Headers({ 'Content-Type': 'application/json' }),
          credentials: 'same-origin',
          body: JSON.stringify({ event, session })
        })
        if (event === 'SIGNED_IN') return await router.push('/')
        await router.push('http://localhost:3000/auth')
      }
    )
    return () => authListener?.unsubscribe()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <React.Fragment>
      <NProgressContainer options={{ minimum: 0.1 }} />
      <Toaster position="bottom-right" reverseOrder={false} />
      <Component {...pageProps} />
    </React.Fragment>
  )
}

export default MyApp

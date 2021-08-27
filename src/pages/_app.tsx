import React from 'react'
import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'
import NProgressContainer from '~/components/shared/nprogress'
import '../assets/main.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <NProgressContainer options={{ minimum: 0.1 }} />
      <Toaster position="bottom-right" reverseOrder={false} />
      <Component {...pageProps} />
    </React.Fragment>
  )
}

export default MyApp

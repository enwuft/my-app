import React from 'react'
import type { AppProps } from 'next/app'
import NProgressContainer from '~/components/shared/nprogress'
import '../assets/main.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <NProgressContainer options={2} />
      <Component {...pageProps} />
    </React.Fragment>
  )
}

export default MyApp

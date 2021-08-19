import React from 'react'
import type { AppProps } from 'next/app'
import type { NextPage } from 'next'

import '../assets/main.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp

import React, { ReactNode } from 'react'
import Head from 'next/head'
import { Pane, Heading } from 'evergreen-ui'
import { Link as Linked } from 'evergreen-ui'
import { Navbar } from 'components/widgets'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'default' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <Navbar />
    </header>
    {children}
    <footer>
      <span>I&rsquo;m here to stay (Footer)</span>
    </footer>
  </div>
)

export default Layout

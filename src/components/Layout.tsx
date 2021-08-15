import React, { ReactNode } from 'react'
import Head from 'next/head'
import { Pane, Heading } from 'evergreen-ui'
import Dymanic from 'next/dynamic'
const Navbar = Dymanic(() => import('~/components/widgets/navbar'))
// import { Navbar } from 'components/widgets'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'Dashboard' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <Navbar />
    </header>
    {children}
    <footer>
      <Pane justifyContent="center" display="flex">
        <Heading size={400} color="#666666" justifyContent="space-evenly">
          Made with ♥ by PROGRAMMING.IN.TH team
        </Heading>
      </Pane>
    </footer>
  </div>
)

export default Layout

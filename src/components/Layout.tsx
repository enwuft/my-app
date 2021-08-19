import React, { ReactNode } from 'react'
import Head from 'next/head'
import { Pane, Heading, majorScale } from 'evergreen-ui'
import Dymanic from 'next/dynamic'

const Navbar = Dymanic(() => import('~/components/widgets/navbar'))
import NProgressContainer from '~/components/shared/nprogress'
// import { Navbar } from 'components/widgets'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'Dashboard' }: Props) => {
  return (
    <Pane>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <NProgressContainer options={1} />
      <Navbar />
      <Pane>{children}</Pane>

      <footer>
        <Footer />
      </footer>
    </Pane>
  )
}

export default Layout

const Footer: React.FC = () => {
  return (
    <Pane padding={majorScale(6)} backgroundColor="#101840">
      <Heading size={600} justifyContent="space-evenly" color="#fffaed">
        Made with ♥ by PROGRAMMING.IN.TH team
      </Heading>
    </Pane>
  )
}

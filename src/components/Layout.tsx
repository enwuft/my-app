import React, { ReactNode } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Pane, Heading, majorScale, Tooltip } from 'evergreen-ui'
import { Box } from 'rebass'
import Dymanic from 'next/dynamic'

// import { Navbar } from 'components/widgets'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'Dashboard' }: Props) => {
  const Navbar = Dymanic(() => import('~/components/widgets/navbar'))
  return (
    <Pane>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <header>
        <Navbar />
      </header>

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
    <Pane
      alignItems="center"
      paddingBottom={majorScale(5)}
      paddingTop={majorScale(3)}
      backgroundColor="#101840"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        className="container mx-auto"
        paddingLeft={majorScale(3)}
      >
        <Heading size={600} color="#fffaed">
          Made with ♥ by PROGRAMMING.IN.TH team
        </Heading>

        <Tooltip content="เเสดงความคิดเห็น หรือเพิ่มฟีเจอร์ใหม่ๆได้ที่ Github">
          <Heading justifyContent="right" size={600} color="#fffaed">
            <Link href="https://github.com/enwuft/my-app/issues/new">
              <a target="_blank">Request for Comment</a>
            </Link>
          </Heading>
        </Tooltip>
      </Box>
    </Pane>
  )
}

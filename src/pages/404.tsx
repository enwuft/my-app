import Link from 'next/link'
import type { NextPage } from 'next'
import { Pane } from 'evergreen-ui'
import Layout from '~/components/Layout'

export const FourOhFour: NextPage = () => {
  return (
    <Layout title="Page Not Found!">
      <Pane height="100vh">
        <h1>404 - Page Not Found</h1>
        <Link href="/">
          <a>Go back home</a>
        </Link>
      </Pane>
    </Layout>
  )
}

export default FourOhFour

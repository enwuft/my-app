import React from 'react'
import Link from 'next/link'
import { Pane, Text } from 'evergreen-ui'
import Layout from '~/components/Layout'

function Index() {
  return (
    <>
      <Layout title="Home">
        <Link href="/s/tournaments">
          <a>tournaments</a>
        </Link>
        <Pane backgroundColor="#e8e8e8">
          <Text>tab preview</Text>
        </Pane>
      </Layout>
    </>
  )
}

export default Index

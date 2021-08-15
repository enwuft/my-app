import React from 'react'
import { Pane, Text } from 'evergreen-ui'
import Layout from '../components/Layout'

function Index() {
  return (
    <>
      <Layout title="Home">
        <Pane backgroundColor="#e8e8e8">
          <Text>tab preview</Text>
        </Pane>
      </Layout>
    </>
  )
}

export default Index

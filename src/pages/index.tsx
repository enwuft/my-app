import type { NextPage } from 'next'
import React from 'react'
import Link from 'next/link'
import { Pane, Text, Heading } from 'evergreen-ui'
import { Flex, Box } from 'rebass'
import Layout from '~/components/Layout'
import VLayout from '~/components/VLayout'

export const Index: NextPage = () => {
  return (
    <Layout title="Home">
      <VLayout>
        <Pane paddingTop={20} paddingBottom={20}>
          <Heading size={900}>Upcomming...</Heading>
        </Pane>
        <Pane className={'shadow-md p-1 bg-gray-50 rounded'}>
          <Link href="/tournaments">
            <a>
              s Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam ea
              voluptas amet, labore officiis natus expedita veniam illo?
              Provident asperiores debitis reprehenderit dolorem temporibus
              magni officia aspernatur dolor hic repudiandae.
            </a>
          </Link>
        </Pane>
        <Pane marginTop={10} className={'shadow-md p-1 bg-gray-50 rounded'}>
          <Text>tab preview</Text>
        </Pane>
      </VLayout>
    </Layout>
  )
}

export default Index

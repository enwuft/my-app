import type { NextPage } from 'next'
import React from 'react'
import Link from 'next/link'
import { Pane, Text, Heading } from 'evergreen-ui'
import { Flex, Box } from 'reflexbox'
import Layout from '~/components/Layout'
import VLayout from '~/components/VLayout'

export const Index: NextPage = () => {
  return (
    <Layout title="Home">
      <VLayout>
        <Pane paddingTop={20} paddingBottom={20}>
          <Heading size={900}>รายการเเข่งขัน</Heading>
        </Pane>
        <Pane className={'border p-2'}>
          <Link href="/tournament">
            <a>
              s Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam ea
              voluptas amet, labore officiis natus expedita veniam illo?
              Provident asperiores debitis reprehenderit dolorem temporibus
              magni officia aspernatur dolor hic repudiandae.
            </a>
          </Link>
        </Pane>
        <Pane marginTop={10} className={'border p-2'}>
          <Text>tab preview</Text>
        </Pane>
      </VLayout>
    </Layout>
  )
}

export default Index

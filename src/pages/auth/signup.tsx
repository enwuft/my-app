import React from 'react'
import Link from 'next/link'
import { Box, Flex } from 'rebass'
import { Pane, Heading, TextInputField, Button, Text } from 'evergreen-ui'
import Layout from '~/components/Layout'

export default function Signup() {
  return (
    <Layout>
      <Flex justifyContent="center">
        <Box width={[2, 2 / 1, 1 / 2]}>
          <Pane
            background="tint2"
            display="flex"
            flexWrap="wrap"
            justifyContent="center"
            flexDirection="column"
            padding={20}
          >
            <Heading size={700} textAlign="center" paddingBottom="2rem">
              Log in
            </Heading>
          </Pane>
        </Box>
      </Flex>
    </Layout>
  )
}

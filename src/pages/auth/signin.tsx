import React from 'react'
import Link from 'next/link'
import {
  Pane,
  Heading,
  TextInputField,
  Button,
  Text,
  Checkbox
} from 'evergreen-ui'
import { Box, Flex } from 'rebass'

import Layout from '~/components/Layout'

function Checkboxed() {
  const [checked, setChecked] = React.useState(true)
  return (
    <Checkbox
      label="Recived the newslater."
      checked={checked}
      onChange={e => setChecked(e.target.checked)}
    />
  )
}

const Signin = () => {
  return (
    <Layout>
      <Flex justifyContent="space-evenly" height="100w" margin="3.5rem">
        <Box width={[1, 1 / 2, 1 / 2.5]}>
          <Pane
            background="tint2"
            display="flex"
            flexWrap="wrap"
            justifyContent="center"
            flexDirection="column"
            padding={40}
          >
            <Heading size={700} textAlign="center" paddingBottom="2rem">
              Log in
            </Heading>
            <TextInputField
              required
              type="text"
              label="Email"
              validationMessage="This field is required"
            />
            <TextInputField
              required
              type="password"
              label="Password"
              validationMessage="This field is required"
            />
            <Button appearance="primary" justifyContent="center">
              Log in
            </Button>
            <Text textAlign="center" marginTop="2rem">
              Forgot your password?{' '}
              <Link href="/auth/reset"> Reset your password</Link>
            </Text>
            <Text textAlign="center">
              Don&rsquo;t have an account?{' '}
              <Link href="/auth/signup">Sign up</Link>
            </Text>
          </Pane>
        </Box>
      </Flex>
    </Layout>
  )
}

export default Signin

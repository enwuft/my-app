import React from 'react'
import Link from 'next/link'
import { Box, Flex } from 'rebass'
import { Pane, Heading, TextInputField, Button, Text } from 'evergreen-ui'

export default function SignIn() {
  const [value, setValue] = React.useState('')
  return (
    <Box>
      <Flex justifyContent="center">
        <Box width={[1, 1 / 2, 1 / 3]}>
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
              Forgot your password? <Link href="/a"> Reset your password</Link>
            </Text>
            <Text textAlign="center">
              Don&rsquo;t have an account? <Link href="/s">Sign up</Link>
            </Text>
          </Pane>
        </Box>
      </Flex>
    </Box>
  )
}

import { Auth, Typography, Button } from '@supabase/ui'
import { Pane, majorScale } from 'evergreen-ui'
import { Box, Flex } from 'rebass'
import Layout from '~/components/Layout'
import { supabase } from '~/utils/initSupabase'

const Container = props => {
  const { user } = Auth.useUser()
  if (user)
    return (
      <>
        <Typography.Text>Signed in: {user.email}</Typography.Text>
        <Button block onClick={() => props.supabaseClient.auth.signOut()}>
          Sign out
        </Button>
      </>
    )
  return props.children
}

export default function Authentication() {
  return (
    <Layout title="Authentication">
      <Flex justifyContent="center" className={'h-screen'}>
        <Box width={[1, 1 / 2, 1 / 2.5]} margin="2rem" height="full">
          <Container supabaseClient={supabase}>
            <Auth
              supabaseClient={supabase}
              providers={['google', 'facebook']}
            />
          </Container>
        </Box>
      </Flex>
    </Layout>
  )
}

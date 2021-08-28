import type { NextPage, GetServerSideProps } from 'next'
import React, { useRef } from 'react'
import { Heading, Pane } from 'evergreen-ui'
import { Flex, Box } from 'rebass'

import Layout from '~/components/Layout'
import { supabase } from '~/utils/initSupabase'

const Authentication: NextPage = () => {
  const ref = useRef(null)
  React.useEffect(() => {
    import('@lottiefiles/lottie-player')
  })
  return (
    <Layout title="Authentication">
      <Flex justifyContent="center" padding={80} className={'h-screen'}>
        <Box width={[1, 1 / 2, 1 / 2.5]} marginTop="4rem">
          <Heading size={900}>
            If you need to login. Request an magic link from contributor.
          </Heading>
        </Box>
        <Box>
          <lottie-player
            id="firstLottie"
            ref={ref}
            autoplay
            loop
            mode="normal"
            src="https://assets5.lottiefiles.com/packages/lf20_4eynavd0.json"
            style={{ width: '450px', height: '450px' }}
          ></lottie-player>
        </Box>
      </Flex>
    </Layout>
  )
}

export default Authentication

export const getServerSideProps: GetServerSideProps = async context => {
  const { user } = await supabase.auth.api.getUserByCookie(context.req)

  if (user)
    return { props: {}, redirect: { destination: '/', permanent: false } }
  return { props: {} }
}

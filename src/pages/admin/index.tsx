import type { NextPage } from 'next'
import { useState, useEffect, ChangeEvent } from 'react'
import toast from 'react-hot-toast'
import { Pane, Avatar } from 'evergreen-ui'
import { Flex, Box } from 'rebass'

import { supabase } from '~/utils/initSupabase'
import { AuthSession } from '@supabase/supabase-js'
import { DEFAULT_AVATARS_BUCKET, Profile } from '~/interfaces'
import Layout from '~/components/Layout'

export default function Account({ session }: { session: AuthSession }) {
  const [loading, setLoading] = useState<boolean>(true)
  const [uploading, setUploading] = useState<boolean>(false)
  const [avatar, setAvatar] = useState<string | null>(null)
  const [username, setUsername] = useState<string | null>(null)

  // user control
  async function SignOut() {
    const { error } = await supabase.auth.signOut()
    if (error) {
      return toast.success('Error Sign Out')
    }
  }

  return (
    <Layout>
      <Flex
        sx={{
          // maxWidth: 1024,
          maxWidth: 1100,
          mx: 'auto',
          px: 3
        }}
      >
        <Box className={'border p-2'}>
          <span>ssdf</span>
        </Box>
      </Flex>
    </Layout>
  )
}

import type { NextPage } from 'next'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Pane, Text, Heading } from 'evergreen-ui'
import { AuthSession } from '@supabase/supabase-js'
import { supabase } from '~/utils/initSupabase'
import { Profile } from '~/interfaces'

import Layout from '~/components/Layout'
import VLayout from '~/components/VLayout'
import Account from '~/components/Account'

export const Index: NextPage = () => {
  const [session, setSession] = useState<AuthSession | null>(null)
  const [profiles, setProfiles] = useState<Profile[]>([])

  useEffect(() => {
    setSession(supabase.auth.session())

    supabase.auth.onAuthStateChange(
      (_event: string, session: AuthSession | null) => {
        setSession(session)
      }
    )
  }, [])

  useEffect(() => {
    getPublicProfiles()
  }, [])

  async function getPublicProfiles() {
    try {
      const { data, error } = await supabase
        .from<Profile>('profiles')
        .select('id, username, avatar_url, website, updated_at')
        .order('updated_at', { ascending: false })

      if (error || !data) {
        throw error || new Error('No data')
      }
      console.log('Public profiles:', data)
      setProfiles(data)
    } catch (error) {
      console.log('error', error.message)
    }
  }

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
          {!session ? (
            <Heading>Login pls</Heading>
          ) : (
            <div>
              <h3>Public Profiles</h3>
              <Account key={session.user.id} session={session} />
            </div>
          )}
        </Pane>
      </VLayout>
    </Layout>
  )
}

export default Index

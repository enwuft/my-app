import type { NextPage } from 'next'
import { useState } from 'react'
import { Pane, toaster, Button, EditIcon } from 'evergreen-ui'

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
      return toaster.success('Error Sign Out')
    }
  }

  return (
    <Layout>
      <Pane className={'flex pl-4 pt-10'}>
        <div className="text-3xl font-sans font-semibold">Dashboard</div>
      </Pane>
      <Pane className={''}>
        <SideBar />
      </Pane>
    </Layout>
  )
}

const SideBar = () => {
  const List = {
    id: 1,
    title: 'Profile'
  }
  return (
    <Pane className={'font-medium m-3 block space-x-5'}>
      <Pane className={'hover:bg-gray-200 p-2 inline-block cursor-pointer'}>
        Profile
        <Profile />
      </Pane>
      <Pane className={'hover:bg-gray-200 p-2 inline-block cursor-pointer'}>
        Setting
        <UserSetting />
      </Pane>
      <Pane className={'hover:bg-gray-200 p-2 inline-block cursor-pointer'}>
        Permission
      </Pane>
    </Pane>
  )
}

const Profile = () => {
  const userProfile = {
    id: 1,
    name: 'admin'
  }
  return (
    <Pane>
      <div className={'text-red-400'}>{userProfile.name}</div>
    </Pane>
  )
}

const UserSetting = () => {
  const options = {
    id: 1,
    level: 'กรรมการ',
    title: 'Upload Profile'
  }
  return (
    <Pane>
      <div className={'text-red-400'}>User Setting</div>
      <Button marginY={8} marginRight={12} iconBefore={EditIcon}>
        <span>{options.title}</span>
      </Button>
    </Pane>
  )
}

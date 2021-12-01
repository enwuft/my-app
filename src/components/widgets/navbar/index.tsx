/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import { Fragment, useEffect, useState } from 'react'
import type { GetServerSideProps } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { AuthSession } from '@supabase/supabase-js'
import { Pane, majorScale, UserIcon, Popover, Menu } from 'evergreen-ui'
import { supabase } from '~/utils/initSupabase'

export default function Navbar() {
  const router = useRouter()
  const [session, setSession] = useState<AuthSession | null>(null)
  useEffect(() => {
    setSession(supabase.auth.session())
    supabase.auth.onAuthStateChange(
      (_event: string, session: AuthSession | null) => {
        setSession(session)
      }
    )
  }, [])
  return (
    <Fragment>
      <Pane
        display="flex"
        alignItems="center"
        padding={majorScale(1)}
        backgroundColor="#101840"
      >
        <Pane paddingLeft={majorScale(1)} className={'container mx-auto'}>
          <Link href="/">
            <img
              src="https://res.cloudinary.com/enwuft/image/upload/v1629014172/vecskills_bw_logo_al2ukr.png"
              className="bg-cover h-8 cursor-pointer"
              alt="Logo"
            />
          </Link>
        </Pane>

        <Pane
          className={'mx-auto cursor-pointer'}
          display="flex"
          paddingRight={majorScale(2)}
          alignItems="center"
        >
          <Popover
            // position={Position.BOTTOM_LEFT}
            content={
              <Menu>
                <Menu.Group>
                  <Menu.Item onSelect={() => router.push('/admin')}>
                    Profile
                  </Menu.Item>
                </Menu.Group>
                <Menu.Divider />
                <Menu.Group>
                  <Menu.Item
                    onSelect={() => router.push('/auth')}
                    intent="danger"
                  >
                    Sign Out
                  </Menu.Item>
                </Menu.Group>
              </Menu>
            }
          >
            <button>
              <UserIcon color="#fff" size={24} />
              {session?.user}
            </button>
          </Popover>
        </Pane>
      </Pane>
    </Fragment>
  )
}

export const getServerSideProps: GetServerSideProps = async context => {
  const { user } = await supabase.auth.api.getUserByCookie(context.req)

  if (user)
    return { props: {}, redirect: { destination: '/auth', permanent: false } }
  return { props: { user } }
}

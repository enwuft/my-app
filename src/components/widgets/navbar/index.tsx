/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import React, { Fragment } from 'react'
import Link from 'next/link'
import {
  Pane,
  majorScale,
  UserIcon,
  Popover,
  Menu,
  toaster,
  Button
} from 'evergreen-ui'
import toast, { Toaster } from 'react-hot-toast'

export default function Navbar() {
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
                  <Menu.Item onSelect={() => toast.success('Share')}>
                    Profile
                  </Menu.Item>
                  <Menu.Item onSelect={() => toast.success('User')}>
                    User
                  </Menu.Item>
                  <Menu.Item onSelect={() => toast.success('Setting')}>
                    Setting
                  </Menu.Item>
                </Menu.Group>
                <Menu.Divider />
                <Menu.Group>
                  <Menu.Item
                    onSelect={() => toast.success('Sign Out')}
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
            </button>
          </Popover>
        </Pane>
      </Pane>
    </Fragment>
  )
}

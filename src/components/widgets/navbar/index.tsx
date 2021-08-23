/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import React, { Fragment } from 'react'
import Link from 'next/link'
import { Pane, majorScale, UserIcon, Tooltip } from 'evergreen-ui'

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
        <Tooltip content="Authenticaion as admin">
          <Pane
            className={'mx-auto cursor-pointer'}
            display="flex"
            paddingRight={majorScale(1)}
            alignItems="center"
          >
            <Link href="/auth">
              <UserIcon color="#fff" size={20} />
            </Link>
          </Pane>
        </Tooltip>
      </Pane>
    </Fragment>
  )
}

/* eslint-disable @next/next/no-img-element */
import React, { Fragment } from 'react'
import Link from 'next/link'
import { Pane, majorScale } from 'evergreen-ui'

export default function Navbar() {
  return (
    <Fragment>
      <Pane
        display="flex"
        alignItems="center"
        padding={majorScale(1)}
        backgroundColor="#101840"
      >
        <Pane>
          <img
            src="https://res.cloudinary.com/enwuft/image/upload/v1629014172/vecskills_bw_logo_al2ukr.png"
            className="bg-cover h-8"
            alt="Logo"
          />
        </Pane>
        <Pane display="flex" float="right">
          <Link href="/auth/">
            <a>Auth</a>
          </Link>
        </Pane>
      </Pane>
    </Fragment>
  )
}

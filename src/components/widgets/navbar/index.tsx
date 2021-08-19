/* eslint-disable @next/next/no-img-element */
import React, { Fragment } from 'react'
import { Pane, majorScale } from 'evergreen-ui'
import { Flex } from 'rebass'

export default function Navbar() {
  return (
    <Fragment>
      <Pane padding={majorScale(1)} backgroundColor="#101840">
        <img
          src="https://res.cloudinary.com/enwuft/image/upload/v1629014172/vecskills_bw_logo_al2ukr.png"
          className="bg-cover h-8"
          alt="Logo"
        />
      </Pane>
    </Fragment>
  )
}

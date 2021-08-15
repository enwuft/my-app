import React from 'react'
import { Pane } from 'evergreen-ui'
import Image from 'next/image'

export const Navbar = () => {
  return (
    <>
      <Pane display="flex" padding={1} width="100%" backgroundColor="#101840">
        <Pane className="container mx-auto">
          <Image
            src="https://res.cloudinary.com/enwuft/image/upload/v1629014172/vecskills_bw_logo_al2ukr.png"
            className="bg-cover"
            alt="Logo"
            width={40}
            height={35}
          />
        </Pane>
      </Pane>
    </>
  )
}

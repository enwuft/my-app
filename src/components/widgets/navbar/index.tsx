import React from 'react'
import { Pane } from 'evergreen-ui'
import Image from 'next/image'

export const Navbar = () => {
  return (
    <>
      <Pane display="flex" padding={2} width="100%" backgroundColor="#101840">
        <Pane className="container mx-auto">
          <Image
            src="/vecskills_bw_logo.png"
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

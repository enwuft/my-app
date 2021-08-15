import React from 'react'
import { Pane } from 'evergreen-ui'

export const Navbar = () => {
  return (
    <>
      <Pane display="flex" padding={2} width="100%" backgroundColor="#101840">
        <Pane className="container mx-auto">
          <img
            src="/vecskills_bw_logo.png"
            className="bg-cover w-14 p-1"
            alt="Logo"
          />
        </Pane>
      </Pane>
    </>
  )
}

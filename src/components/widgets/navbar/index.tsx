import React from 'react'
import { Pane, Heading } from 'evergreen-ui'
import Box from 'rebass'
import List from './List'

export const Navbar = () => {
  return (
    <>
      <Pane
        fontFamily="sans-serif"
        display="flex"
        padding={2}
        backgroundColor="#101840"
      >
        <Pane className="container mx-auto">
          <img
            src="http://www2.chainat.ac.th/vecskills/images/vecskills_bw_logo.png"
            className="bg-cover w-16 p-1"
          />
          {/* <Heading size={500}>VEC Skill</Heading> */}
        </Pane>
      </Pane>
      <Pane
        fontFamily="sans-serif"
        display="flex"
        padding={4}
        backgroundColor="#ebedf5"
      >
        <List />
      </Pane>
    </>
  )
}

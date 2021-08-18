import React from 'react'
import { Pane, Heading, Text } from 'evergreen-ui'
import { Box } from 'rebass'
import Image from 'next/image'

export const Header: React.FC = () => {
  return (
    <React.Fragment>
      <Pane>
        <Image
          src="https://res.cloudinary.com/enwuft/image/upload/v1628959441/cad_wv2imb.png"
          className="bg-cover w-full"
          alt="logo"
        />
        <Box padding={2}>
          <Heading size={700}>เขียนเเบบไฟฟ้าด้วยคอมพิวเตอร์</Heading>
          <Text>ประกาศณียบัตรวิชาชีพชั้นสูง</Text>
        </Box>
      </Pane>
    </React.Fragment>
  )
}

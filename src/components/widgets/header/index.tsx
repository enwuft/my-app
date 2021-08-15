import React from 'react'
import { Pane, Heading, Text } from 'evergreen-ui'
import { Box } from 'rebass'
import Image from 'next/image'

export const Header: React.FC = () => {
  return (
    <React.Fragment>
      <Pane margin={20} display="flex">
        <Image
          src="https://res.cloudinary.com/enwuft/image/upload/v1628959441/cad_wv2imb.png"
          width="100"
          height="100"
          alt="logo"
        />
        <Pane padding={15} flex={1}>
          <Heading size={700}>เขียนเเบไฟฟ้าด้วยคอมพิวเตอร์</Heading>
          <Text>ประกาศณียบัตรวิชาชีพชั้นสูง</Text>
        </Pane>
      </Pane>
    </React.Fragment>
  )
}

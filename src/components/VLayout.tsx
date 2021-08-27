import React, { ReactNode } from 'react'
import { Pane, Heading } from 'evergreen-ui'
import { Flex, Box } from 'rebass'

type Props = {
  children?: ReactNode
  title?: string
}

const VLayout = ({ children, title = 'Dashboard' }: Props) => {
  return (
    <Flex
      sx={{
        // maxWidth: 1024,
        maxWidth: 1100,
        mx: 'auto',
        px: 3
      }}
    >
      <Box>
        <Pane paddingTop={20} paddingBottom={20}>
          <Heading size={900}>รายการเเข่งขัน</Heading>
        </Pane>
        <Pane className={'border p-2'}>
          <Heading>
            {' '}
            งานประชุมวิชาการองค์การ และ การแข่งขันทักษะวิชาชีพ
            ผู้เข้าแข่งขันกว่า 8,000 คน จาก 903 สถานศึกษา
            เพื่อค้นหาเพชรเม็ดงามของอาชีวศึกษา
          </Heading>
        </Pane>
        {children}
      </Box>
    </Flex>
  )
}

export default VLayout

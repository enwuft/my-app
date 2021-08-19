import React, { ReactNode } from 'react'
import { Flex, Box } from 'rebass'
type Props = {
  children?: ReactNode
  title?: string
}

const VLayout = ({ children, title = 'Dashboard' }: Props) => {
  return (
    <Flex
      sx={{
        maxWidth: 1024,
        mx: 'auto',
        px: 3
      }}
    >
      <Box>{children}</Box>
    </Flex>
  )
}

export default VLayout

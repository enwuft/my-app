import React from 'react'
import { Flex, Box } from 'rebass'
import { Pane } from 'evergreen-ui'
import { Header } from '~/components/widgets/header'
import Layout from '~/components/Layout'
// import NavList from '~/components/widgets/navbar/List'

const Tournament: React.FC = () => {
  return (
    <Layout>
      <Pane>{/* <NavList /> */}</Pane>
      <Flex className="flex bg-gray-50" justifyContent="center">
        <Box width={[2 / 3]}>
          <Header />
        </Box>
      </Flex>
    </Layout>
  )
}

export default Tournament

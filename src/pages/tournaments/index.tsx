import React, { Fragment, useState } from 'react'
import { Flex, Box } from 'rebass'
import { Pane, Tab, Paragraph, Tablist, Heading } from 'evergreen-ui'
import { Header } from '~/components/widgets'
import Layout from '~/components/Layout'
// import NavList from '~/components/widgets/navbar/List'

const tabs = ['ระดับจังหวัด', 'ระดับภาค', 'ระดับประเทศ']

const Tournament: React.FC = () => {
  return (
    <Layout>
      <Pane>
        <NavList />
      </Pane>
      <Flex className="flex bg-gray-50" justifyContent="center">
        <Box width={[2 / 3]}>
          <Header />
        </Box>
      </Flex>
    </Layout>
  )
}

export default Tournament

function NavList() {
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  return (
    <Fragment>
      <Flex justifyContent="center" fontFamily="Boon">
        <Pane display="flex" padding={4}>
          <Tablist flexBasis={440}>
            {tabs.map((tab, index) => (
              <Tab
                key={tab}
                id={tab}
                onSelect={() => setSelectedIndex(index)}
                isSelected={index === selectedIndex}
                aria-controls={`panel-${tab}`}
              >
                <Heading size={400}>{tab}</Heading>
              </Tab>
            ))}
          </Tablist>
        </Pane>
      </Flex>
    </Fragment>
  )
}

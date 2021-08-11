import React, { Fragment, FC } from 'react'
import { Pane, Heading, Tablist, Tab, Paragraph } from 'evergreen-ui'
import { Box, Flex } from 'rebass'

function NavList() {
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [tabs] = React.useState([
    'ระดับจังหวัด',
    'ระดับจังภาค',
    'ระดับจังประเทศ'
  ])
  return (
    <Box>
      <Flex justifyContent="center">
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
      <Box>
        <Pane padding={16} background="tint1" flex={1}>
          {tabs.map((tab, index) => (
            <Pane
              key={tab}
              id={`panel-${tab}`}
              role="tabpanel"
              aria-labelledby={tab}
              aria-hidden={index !== selectedIndex}
              display={index === selectedIndex ? 'block' : 'none'}
            >
              <Paragraph>Panel {tab}</Paragraph>
            </Pane>
          ))}
        </Pane>
      </Box>
    </Box>
  )
}

export default NavList

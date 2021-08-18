import React from 'react'
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
    </Box>
  )
}

export default NavList

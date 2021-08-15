import React, { Fragment } from 'react'
import { Pane, Heading, Tablist, Tab, Paragraph } from 'evergreen-ui'
import { Box, Flex } from 'rebass'
import Image from 'next/image'

export default function Navbar() {
  return (
    <Fragment>
      <Pane display="flex" padding={1} width="100%" backgroundColor="#101840">
        <Pane className="container mx-auto">
          <Image
            src="https://res.cloudinary.com/enwuft/image/upload/v1629014172/vecskills_bw_logo_al2ukr.png"
            className="bg-cover"
            alt="Logo"
            width={40}
            height={35}
          />
        </Pane>
      </Pane>

      <Box>
        <NavList />
      </Box>
    </Fragment>
  )
}

function NavList() {
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [tabs] = React.useState([
    'ระดับจังหวัด',
    'ระดับจังภาค',
    'ระดับจังประเทศ'
  ])
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
      <Pane>
        <Flex className="flex bg-gray-50" justifyContent="center">
          <Box width={[2 / 3]}>
            <Header />
            <Pane>
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
        </Flex>
      </Pane>
    </Fragment>
  )
}

const Header: React.FC = () => {
  return (
    <Fragment>
      <Pane margin={20} display="flex">
        <Image
          src="https://res.cloudinary.com/enwuft/image/upload/v1628959441/cad_wv2imb.png"
          width="100"
          height="100"
          alt="logo"
        />
        <Box display="flex">
          <Pane marginTop={10} flexBasis={550}>
            <Heading size={800}>เขียนเเบบไฟฟ้าด้วยคอมพิวเตอร์</Heading>
            <Heading size={400} marginTop={5}>
              ประกาศณียบัตรวิชาชีพชั้นสูง
            </Heading>
          </Pane>
        </Box>
      </Pane>
    </Fragment>
  )
}

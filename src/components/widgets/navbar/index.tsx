import React, { Fragment } from 'react'
import { Pane, Heading, Tablist, Tab, Paragraph } from 'evergreen-ui'
import { Box, Flex } from 'rebass'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <Fragment>
      <Pane display="flex" padding={4} width="100%" backgroundColor="#101840">
        <Image
          src="https://res.cloudinary.com/enwuft/image/upload/v1629014172/vecskills_bw_logo_al2ukr.png"
          className="bg-cover w-full"
          alt="Logo"
          width={40}
          height={35}
        />
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
      <Pane paddingTop={16} display="flex">
        <img
          src="https://res.cloudinary.com/enwuft/image/upload/v1628959441/cad_wv2imb.png"
          alt="logo"
          className="object-cover lg:w-16 h-24"
        />
        <Link className="p-1 ml-3" href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            />
          </svg>
        </Link>
        <Pane flex={1}>
          <Heading display="flex" size={800}>
            เขียนเเบบไฟฟ้าด้วยคอมพิวเตอร์
          </Heading>
          <Heading size={400} marginTop={5}>
            ประกาศณียบัตรวิชาชีพชั้นสูง
          </Heading>
        </Pane>
      </Pane>
    </Fragment>
  )
}

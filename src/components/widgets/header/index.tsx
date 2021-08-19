/* eslint-disable @next/next/no-img-element */
import React, { Fragment } from 'react'
import Link from 'next/link'
import { Pane, Heading, Tablist, Paragraph, Tab } from 'evergreen-ui'
import { Box, Flex } from 'rebass'

export const Header: React.FC = () => {
  return (
    <React.Fragment>
      <Pane padding={16} display="flex">
        <img
          src="https://res.cloudinary.com/enwuft/image/upload/v1628959441/cad_wv2imb.png"
          alt="logo"
          className="object-cover lg:w-16 h-24"
        />
        <Link href="/">
          <a className="pl-2 md:-ml-2 lg:ml-2 ml-0">
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
          </a>
        </Link>
        <Pane display="block" paddingLeft={12}>
          <Heading display="flex" size={800}>
            เขียนเเบบไฟฟ้าด้วยคอมพิวเตอร์
          </Heading>
          <Heading size={400} marginTop={5}>
            ประกาศณียบัตรวิชาชีพชั้นสูง
          </Heading>
        </Pane>
      </Pane>
    </React.Fragment>
  )
}

function NavList() {
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [tabs] = React.useState(['ระดับจังหวัด', 'ระดับภาค', 'ระดับประเทศ'])
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

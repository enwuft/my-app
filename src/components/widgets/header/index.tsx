/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import { Pane, Heading } from 'evergreen-ui'

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

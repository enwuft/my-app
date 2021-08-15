import React from 'react'
import { Pane, Heading } from 'evergreen-ui'
import Image from 'next/image'
import Lists from './list.json'

interface List {
  id: number
  image: string
  level: string
}

export const Header: React.FC<List> = ({ Lists }) => {
  return (
    <div>
      <span>test</span>
      <Pane>
        {Lists.map((key, index) => (
          <Pane key={key.id}>
            <span>{index.name}</span>
          </Pane>
        ))}
      </Pane>
    </div>
  )
}

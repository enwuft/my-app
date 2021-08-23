import React from 'react'
import { Table, Tooltip, Badge, MoreIcon, toaster } from 'evergreen-ui'
import profiles from './data.json'

export const Task = () => {
  const status = ['UP COMMING', 'IN PROGRESS', 'SUCCESS']
  console.log(status.map(i => console.log(i)))
  return (
    <Table>
      <Table.Head>
        <Table.SearchHeaderCell value={''} placeholder="Search " />
      </Table.Head>
      <Table.Head>
        <Table.TextHeaderCell flexBasis={320} flexShrink={0} flexGrow={0}>
          รายการ
        </Table.TextHeaderCell>
        <Table.TextHeaderCell alignContent="center">
          วันเเข่งขัน
        </Table.TextHeaderCell>

        <Table.TextHeaderCell>จำนวนทีม</Table.TextHeaderCell>

        <Table.TextHeaderCell>ระดับ</Table.TextHeaderCell>
        <Table.TextHeaderCell>สถานะ</Table.TextHeaderCell>
        <Table.TextHeaderCell>เเผนก</Table.TextHeaderCell>
      </Table.Head>
      <Table.Body height={540}>
        {profiles.map(profile => (
          <Table.Row key={profile.id} isSelectable>
            <Table.TextCell
              flexBasis={320}
              flexShrink={0}
              flexGrow={0}
              textProps={{ size: 400 }}
            >
              {profile.name}
            </Table.TextCell>

            <Table.TextCell alignItems="center" color="red">
              12/05/65
            </Table.TextCell>
            <Table.TextCell isNumber>{profile.total}</Table.TextCell>
            <Table.TextCell>{profile.level}</Table.TextCell>
            <Table.TextCell>ไฟฟ้ากำลัง</Table.TextCell>
            <Table.TextCell alignItems="center">
              <Badge color="green">SUCCESS</Badge>
            </Table.TextCell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}

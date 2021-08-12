import React, { useState } from 'react'
import Layout from '../components/Layout'
import Signup from './auth/signup'
import NavList from '~/components/widgets/navbar/List'
import {
  Button,
  Pane,
  Text,
  majorScale,
  Autocomplete,
  TextInput,
  CornerDialog
} from 'evergreen-ui'
import { Navbar } from 'components/widgets'

function Index() {
  let state = {
    isShown: true,
    selectedIndex: 0,
    tabs: ['Traits', 'Event History', 'Identities']
  }
  const isShown = React.useState(false)
  return (
    <React.Fragment>
      <Layout title="Home">
        <Pane fontFamily="sans-serif" backgroundColor="#e8e8e8">
          <NavList />
        </Pane>
        <Pane display="flex" marginX={majorScale(2)}>
          <CornerDialog
            title="We’d love to hear from you!"
            isShown={state.isShown}
            onCloseComplete={() => this.useState({ isShown: false })}
            confirmLabel="Accept"
            onConfirm={close => close()}
          >
            Help shape Segment’s data governance product roadmap. If you’re
            willing to provide feedback, let’s chat.
          </CornerDialog>
        </Pane>
      </Layout>
    </React.Fragment>
  )
}

export default Index

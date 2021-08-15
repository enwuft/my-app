import React from 'react';
import { Pane } from 'evergreen-ui';
import Layout from '../components/Layout';
import NavList from '~/components/widgets/navbar/List';

function Index() {
  return (
    <>
      <Layout title="Home">
        <Pane backgroundColor="#e8e8e8">
          <NavList />
        </Pane>
      </Layout>
    </>
  );
}

export default Index;

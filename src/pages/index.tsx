import type { NextPage, GetServerSideProps } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Pane } from 'evergreen-ui'

import Layout from '~/components/Layout'
import VLayout from '~/components/VLayout'

import { Task } from '~/components/widgets'

const Index: NextPage = () => {
  const router = useRouter()
  useEffect(() => {
    // Prefetch the dashboard page
    router.prefetch('/auth')
  }, [])
  return (
    <Layout title="Home">
      <VLayout>
        {/* <Pane marginTop={10} paddingBottom={20} className={'p-2'}></Pane> */}
        <Pane marginTop={20} className={'border'}>
          <Task />
        </Pane>
        <Pane paddingTop={20} paddingBottom={20}>
          <Link href="/tournament">
            <a>
              s Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam ea
              voluptas amet, labore officiis natus expedita veniam illo?
              Provident asperiores debitis reprehenderit dolorem temporibus
              magni officia aspernatur dolor hic repudiandae.
            </a>
          </Link>
        </Pane>
      </VLayout>
    </Layout>
  )
}

export default Index

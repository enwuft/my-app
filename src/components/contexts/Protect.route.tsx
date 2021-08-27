import React, {Suspense} from 'react'
import Router, { useRouter } from 'next/router'
import { Spinner } from 'evergreen-ui'
import { supabase } from '~/utils/initSupabase'

const PUBLIC_PATHS = ['/auth', '404']

interface Props {
  children: React.ReactElement
}

const ProtectedPage = ({ children }: Props) => {
  return (
    <Suspense fallback={<Spinner />}>
      <span>sdf</span>
    </Suspense>
  )
export default ProtectedPage
import { RootPage } from '@payloadcms/next/views'
import config from '../../../../payload.config'

const Page = ({ params, searchParams }: any) => 
  RootPage({ 
    config, 
    params, 
    searchParams,
    importMap: {} as any
  })

export default Page

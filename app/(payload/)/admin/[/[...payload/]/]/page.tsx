import config from '@/payload.config'
import { RootPage } from '@payloadcms/next/views'

type Args = {
  params: Promise<{
    payload: string[]
  }>
}

const Page = ({ params }: Args) => <RootPage config={config} params={params} />

export default Page

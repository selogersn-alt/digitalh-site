import { RootPage } from '@payloadcms/next/views'
import config from '../../../../payload.config'

const Page = ({ params, searchParams }: any) => RootPage({ config, params, searchParams })

export default Page

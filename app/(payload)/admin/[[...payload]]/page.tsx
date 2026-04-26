import { RootPage } from '@payloadcms/next/layouts'
import config from '../../../../payload.config'

const Page = ({ params, searchParams }: any) => RootPage({ config, params, searchParams })

export default Page

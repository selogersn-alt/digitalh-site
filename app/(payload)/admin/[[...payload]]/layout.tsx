import { RootLayout } from '@payloadcms/next/layouts'
import config from '../../../../payload.config'
import './custom.css'

const Layout = ({ children }: { children: React.ReactNode }) => RootLayout({ config, children })

export default Layout

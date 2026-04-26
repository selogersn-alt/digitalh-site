import { RootLayout, handleServerFunctions } from '@payloadcms/next/layouts'
import config from '../../../../payload.config'
import React from 'react'
import './custom.css'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <RootLayout
      config={config}
      importMap={{} as any}
      serverFunction={handleServerFunctions as any}
    >
      {children}
    </RootLayout>
  )
}

export default Layout

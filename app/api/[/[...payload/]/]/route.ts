import { handleRequests } from '@payloadcms/next/routes'
import config from '../../payload.config'

export const { GET, POST, PATCH, PUT, DELETE, OPTIONS } = handleRequests({ config })

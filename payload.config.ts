import { buildConfig } from 'payload'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { fileURLToPath } from 'url'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: 'users',
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    {
      slug: 'users',
      auth: true,
      access: {
        delete: () => false,
        update: ({ req: { user } }) => {
          if (user?.collection === 'users') {
            return {
              id: {
                equals: user.id,
              },
            }
          }
          return false
        },
      },
      fields: [],
    },
    {
      slug: 'services',
      admin: {
        useAsTitle: 'title',
      },
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'slug', type: 'text', required: true, unique: true },
        { name: 'description', type: 'textarea' },
        { name: 'icon', type: 'text', admin: { description: 'Lucide icon name (ex: Globe, Smartphone, BarChart)' } },
        { name: 'content', type: 'richText', required: true },
        { name: 'featuredImage', type: 'upload', relationTo: 'media' },
      ],
    },
    {
      slug: 'media',
      upload: true,
      fields: [
        { name: 'alt', type: 'text' },
      ],
    },
  ],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || 'digitalh-secret-123',
  db: sqliteAdapter({
    client: {
      url: 'file:./payload.db',
    },
  }),
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
})

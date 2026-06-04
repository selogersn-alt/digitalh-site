import { buildConfig } from 'payload'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { fileURLToPath } from 'url'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

// Select DB adapter: PostgreSQL in production (Vercel), SQLite locally
const databaseUri = process.env.DATABASE_URI

let dbAdapter: any
if (databaseUri && databaseUri.startsWith('postgresql')) {
  // Dynamically import postgres adapter only when needed
  const { postgresAdapter } = await import('@payloadcms/db-postgres')
  dbAdapter = postgresAdapter({ pool: { connectionString: databaseUri } })
} else {
  dbAdapter = sqliteAdapter({ client: { url: 'file:./payload.db' } })
}

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
            return { id: { equals: user.id } }
          }
          return false
        },
      },
      fields: [],
    },
    {
      slug: 'services',
      admin: { useAsTitle: 'title' },
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'slug', type: 'text', required: true, unique: true },
        { name: 'shortDesc', type: 'textarea', required: true },
        { name: 'icon', type: 'text', admin: { description: 'Lucide icon name (ex: Globe, Smartphone, LineChart)' } },
        { name: 'content', type: 'richText', required: true },
        { name: 'featuredImage', type: 'upload', relationTo: 'media' },
      ],
    },
    {
      slug: 'posts',
      admin: { useAsTitle: 'title' },
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'slug', type: 'text', required: true, unique: true },
        { name: 'category', type: 'select', options: ['Technologie', 'Marketing', 'Design', 'Business'] },
        { name: 'date', type: 'date', required: true },
        { name: 'author', type: 'text' },
        { name: 'excerpt', type: 'textarea' },
        { name: 'content', type: 'richText', required: true },
        { name: 'featuredImage', type: 'upload', relationTo: 'media' },
      ],
    },
    {
      slug: 'media',
      upload: true,
      fields: [{ name: 'alt', type: 'text' }],
    },
    {
      slug: 'leads',
      admin: {
        useAsTitle: 'name',
        description: 'Demandes de contact reçues depuis le site web',
      },
      fields: [
        { name: 'name', type: 'text', required: true, label: 'Nom Complet' },
        { name: 'email', type: 'email', required: true, label: 'Email' },
        { name: 'service', type: 'text', label: 'Service Souhaité' },
        { name: 'message', type: 'textarea', required: true, label: 'Message' },
        {
          name: 'status',
          type: 'select',
          defaultValue: 'nouveau',
          options: [
            { label: 'Nouveau', value: 'nouveau' },
            { label: 'Contacté', value: 'contacte' },
            { label: 'Clos', value: 'clos' },
          ],
        },
      ],
    },
  ],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || 'digitalh-secret-123',
  db: dbAdapter,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
})

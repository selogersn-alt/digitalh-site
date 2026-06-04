import { getPayload } from 'payload'
import configPromise from '../payload.config'
import { services } from '../data/services'
import { posts } from '../data/posts'

async function importData() {
  const payload = await getPayload({ config: await configPromise })

  console.log('--- Starting Migration ---')

  // 1. Import Services
  console.log('Importing Services...')
  for (const service of services) {
    try {
      await payload.create({
        collection: 'services',
        data: {
          title: service.title,
          slug: service.slug,
          shortDesc: service.shortDesc,
          icon: (service.icon as any).name || 'Globe', // Fallback to icon name string
          content: {
            root: {
              type: 'root',
              format: '',
              indent: 0,
              version: 1,
              children: [
                {
                  type: 'paragraph',
                  format: '',
                  indent: 0,
                  version: 1,
                  children: [{ type: 'text', text: service.fullDesc, version: 1 }],
                },
              ],
            },
          },
        },
      })
      console.log(`✅ Service imported: ${service.slug}`)
    } catch (err: any) {
      console.error(`❌ Error importing service ${service.slug}:`, err.message)
    }
  }

  // 2. Import Posts
  console.log('Importing Posts...')
  for (const post of posts) {
    try {
      await payload.create({
        collection: 'posts',
        data: {
          title: post.title,
          slug: post.slug,
          category: post.category as any,
          date: new Date(), // Using current date for demo
          author: post.author,
          excerpt: post.excerpt,
          content: {
            root: {
              type: 'root',
              format: '',
              indent: 0,
              version: 1,
              children: [
                {
                  type: 'paragraph',
                  format: '',
                  indent: 0,
                  version: 1,
                  children: [{ type: 'text', text: post.content, version: 1 }],
                },
              ],
            },
          },
        },
      })
      console.log(`✅ Post imported: ${post.slug}`)
    } catch (err: any) {
      console.error(`❌ Error importing post ${post.slug}:`, err.message)
    }
  }

  console.log('--- Migration Finished ---')
  process.exit(0)
}

importData()

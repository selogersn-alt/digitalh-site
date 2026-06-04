import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import { services } from '@/data/services'
import { posts } from '@/data/posts'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const payload = await getPayload({ config: await configPromise })

    console.log('--- Starting Migration via API ---')

    // Import Services
    for (const service of services) {
      const existing = await payload.find({
        collection: 'services',
        where: { slug: { equals: service.slug } }
      })
      if (existing.docs.length > 0) {
        console.log(`Service ${service.slug} already exists, skipping`)
        continue
      }
      await payload.create({
        collection: 'services',
        data: {
          title: service.title,
          slug: service.slug,
          shortDesc: service.shortDesc,
          icon: (service.icon as any).name || 'Globe',
          content: {
            root: {
              type: 'root',
              children: [
                {
                  type: 'paragraph',
                  children: [{ type: 'text', text: service.fullDesc }],
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              version: 1,
            },
          } as any,
        },
      })
    }

    // Import Posts
    for (const post of posts) {
      const existing = await payload.find({
        collection: 'posts',
        where: { slug: { equals: post.slug } }
      })
      if (existing.docs.length > 0) {
        console.log(`Post ${post.slug} already exists, skipping`)
        continue
      }
      await payload.create({
        collection: 'posts',
        data: {
          title: post.title,
          slug: post.slug,
          category: post.category as any,
          date: new Date().toISOString(),
          author: post.author,
          excerpt: post.excerpt,
          content: {
            root: {
              type: 'root',
              children: [
                {
                  type: 'paragraph',
                  children: [{ type: 'text', text: post.content }],
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              version: 1,
            },
          } as any,
        },
      })
    }

    return NextResponse.json({ message: 'Migration successful' })
  } catch (error: any) {
    console.error('Migration failed:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

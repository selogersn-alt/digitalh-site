import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import BlogList from '@/components/BlogList'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | DigitalH',
  description: 'Actualités, tutoriels et insights sur le monde du digital, de la technologie, du SEO et du marketing par l\'équipe DigitalH.',
}

export default async function BlogPage() {
  const payload = await getPayload({ config: await configPromise })
  const { docs: posts } = await payload.find({
    collection: 'posts',
    sort: '-date',
  })

  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl font-black mb-6">Notre <span className="text-gradient">Blog</span></h1>
          <p className="text-xl text-muted">
            Actualités, tutoriels et insights sur le monde du digital et de la technologie.
          </p>
        </div>

        <BlogList posts={posts} />
      </div>
    </main>
  )
}

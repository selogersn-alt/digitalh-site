import { MetadataRoute } from 'next'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://digitalh.net'
  
  const payload = await getPayload({ config: await configPromise })
  
  const { docs: services } = await payload.find({
    collection: 'services',
    limit: 100,
  })
  
  const { docs: posts } = await payload.find({
    collection: 'posts',
    limit: 100,
  })

  const serviceUrls = services.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: new Date(),
  }))

  const blogUrls = posts.map((p) => ({
    url: `${baseUrl}/blog/${p.slug}`,
    lastModified: new Date(p.date || new Date()),
  }))

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    ...serviceUrls.map(s => ({ ...s, changeFrequency: 'monthly' as const, priority: 0.7 })),
    ...blogUrls.map(b => ({ ...b, changeFrequency: 'weekly' as const, priority: 0.7 })),
  ]
}

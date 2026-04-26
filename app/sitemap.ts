import { MetadataRoute } from 'next'
import { services } from '@/data/services'
import { posts } from '@/data/posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://digitalh.net'

  const serviceUrls = services.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: new Date(),
  }))

  const blogUrls = posts.map((p) => ({
    url: `${baseUrl}/blog/${p.slug}`,
    lastModified: new Date(),
  }))

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/services`, lastModified: new Date() },
    { url: `${baseUrl}/blog`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
    ...serviceUrls,
    ...blogUrls,
  ]
}

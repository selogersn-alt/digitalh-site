import React from 'react'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import { Calendar, User, ArrowLeft, Share2 } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import RichText from '@/components/RichText'
import { ServiceClientWrapper as BlogClientWrapper } from '@/components/ServiceClientWrapper'

export const dynamic = 'force-dynamic'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const payload = await getPayload({ config: await configPromise })

  const { docs } = await payload.find({
    collection: 'posts',
    where: { slug: { equals: slug } },
  })

  const post = docs[0]

  if (!post) {
    return { title: 'Article non trouvé' }
  }

  return {
    title: `${post.title} | DigitalH Blog`,
    description: post.excerpt || `Lisez notre article: ${post.title}`,
    openGraph: {
      title: post.title,
      description: post.excerpt || `Lisez notre article: ${post.title}`,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const payload = await getPayload({ config: await configPromise })

  const { docs } = await payload.find({
    collection: 'posts',
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  const post = docs[0]

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen pt-32 pb-20 bg-background">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <Breadcrumbs />
        <Link href="/blog" className="inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors mb-12 group">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Retour au blog
        </Link>

        <BlogClientWrapper>
          <div className="flex items-center gap-4 text-sm text-primary font-bold mb-6 uppercase tracking-widest">
            {post.category}
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight text-foreground">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-muted mb-8 pb-8 border-b border-border">
            <span className="flex items-center gap-2"><Calendar size={18}/> {new Date(post.date).toLocaleDateString('fr-FR')}</span>
            <span className="flex items-center gap-2"><User size={18}/> Par {post.author}</span>
            <button className="flex items-center gap-2 hover:text-primary transition-colors ml-auto">
              <Share2 size={18}/> Partager
            </button>
          </div>

          {post.featuredImage && typeof post.featuredImage !== 'string' && (
            <div className="mb-12 rounded-[32px] overflow-hidden w-full h-[400px] relative">
              <img src={post.featuredImage.url} alt={post.title} className="w-full h-full object-cover" />
            </div>
          )}

          <article className="prose max-w-none">
            <p className="text-2xl text-foreground leading-relaxed mb-10 font-medium border-l-4 border-primary pl-6 py-2">
              {post.excerpt}
            </p>
            <RichText content={post.content} />
          </article>

          {/* Call to Action */}
          <div className="mt-20 p-12 bg-background/80 backdrop-blur-xl rounded-[40px] border border-border text-center relative overflow-hidden group shadow-xl">
             <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl -z-10" />
            <h3 className="text-3xl font-bold mb-4 text-foreground">Besoin d'expertise pour votre projet ?</h3>
            <p className="text-muted mb-8 max-w-xl mx-auto">
              Que ce soit pour du SEO, de l'infrastructure Starlink ou du développement sur mesure, nos experts vous accompagnent.
            </p>
            <Link href="/contact" className="inline-flex px-12 py-5 bg-primary text-white rounded-full font-bold shadow-[0_0_30px_rgba(255,92,0,0.4)] hover:scale-105 transition-all">
              Prendre rendez-vous <ArrowLeft className="rotate-180 ml-2" size={20} />
            </Link>
          </div>
        </BlogClientWrapper>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": post.title,
              "datePublished": post.date,
              "author": {
                "@type": "Person",
                "name": post.author
              },
              "description": post.excerpt || post.title
            })
          }}
        />
      </div>
    </main>
  )
}

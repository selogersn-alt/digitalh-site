'use client'

import { use } from 'react'
import { posts } from '@/data/posts'
import { motion } from 'framer-motion'
import { Calendar, User, ArrowLeft, Share2 } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export default function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const post = posts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link href="/blog" className="flex items-center gap-2 text-muted hover:text-white transition-colors mb-12">
          <ArrowLeft size={18} /> Retour au blog
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 text-sm text-primary font-bold mb-6 uppercase tracking-widest">
            {post.category}
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-muted mb-12 pb-12 border-b border-white/5">
            <span className="flex items-center gap-2"><Calendar size={18}/> {post.date}</span>
            <span className="flex items-center gap-2"><User size={18}/> Par {post.author}</span>
            <button className="flex items-center gap-2 hover:text-primary transition-colors ml-auto">
              <Share2 size={18}/> Partager
            </button>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed mb-8 font-medium">
              {post.excerpt}
            </p>
            <div className="text-lg text-gray-400 leading-relaxed space-y-6">
              {post.content}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-20 p-10 glass rounded-[40px] text-center">
            <h3 className="text-3xl font-bold mb-4">Prêt à booster votre présence digitale ?</h3>
            <p className="text-muted mb-8 max-w-xl mx-auto">
              Contactez nos experts pour une consultation gratuite et découvrez comment nous pouvons vous aider.
            </p>
            <Link href="/contact" className="inline-flex px-8 py-4 bg-primary text-white rounded-full font-bold glow">
              Discuter avec nous
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}

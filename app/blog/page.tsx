'use client'

import { posts } from '@/data/posts'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, User, ArrowRight } from 'lucide-react'

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl font-black mb-6">Notre <span className="text-gradient">Blog</span></h1>
          <p className="text-xl text-muted">
            Actualités, tutoriels et insights sur le monde du digital et de la technologie.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-[32px] overflow-hidden group hover:glow transition-all"
            >
              {/* Image Placeholder */}
              <div className="h-60 bg-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
                <div className="absolute top-4 left-4 px-4 py-1 bg-primary/20 backdrop-blur-md rounded-full text-xs font-bold text-accent border border-primary/30">
                  {post.category}
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-4 text-xs text-muted mb-4">
                  <span className="flex items-center gap-1"><Calendar size={14}/> {post.date}</span>
                  <span className="flex items-center gap-1"><User size={14}/> Par {post.author}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="text-muted text-sm mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                <Link 
                  href={`/blog/${post.slug}`} 
                  className="flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all"
                >
                  Lire l'article <ArrowRight size={20} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  )
}

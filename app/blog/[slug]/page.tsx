'use client'

import React, { use } from 'react'
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
    <main className="min-h-screen pt-32 pb-20 bg-[#050505]">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12 group">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Retour au blog
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 text-sm text-blue-500 font-bold mb-6 uppercase tracking-widest">
            {post.category}
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight text-white">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-500 mb-12 pb-12 border-b border-white/5">
            <span className="flex items-center gap-2"><Calendar size={18}/> {post.date}</span>
            <span className="flex items-center gap-2"><User size={18}/> Par {post.author}</span>
            <button className="flex items-center gap-2 hover:text-blue-500 transition-colors ml-auto">
              <Share2 size={18}/> Partager
            </button>
          </div>

          <article className="prose prose-invert max-w-none">
            <p className="text-2xl text-gray-200 leading-relaxed mb-10 font-medium border-l-4 border-blue-600 pl-6 py-2">
              {post.excerpt}
            </p>
            <div className="text-lg text-gray-400 leading-relaxed space-y-8">
              <p>
                {post.content}
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <h2 className="text-3xl font-bold text-white mt-12 mb-6">Le futur de la technologie chez DigitalH</h2>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </article>

          {/* Call to Action */}
          <div className="mt-20 p-12 bg-white/5 backdrop-blur-xl rounded-[40px] border border-white/10 text-center relative overflow-hidden group">
             <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-3xl -z-10" />
            <h3 className="text-3xl font-bold mb-4 text-white">Prêt à propulser votre business ?</h3>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Nos experts sont prêts à vous accompagner. Discutons de vos besoins dès aujourd'hui.
            </p>
            <Link href="/contact" className="inline-flex px-10 py-5 bg-blue-600 text-white rounded-full font-bold shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:scale-105 transition-all">
              Discuter avec un expert
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}

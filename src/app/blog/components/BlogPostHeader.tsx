"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, ChevronLeft, User } from 'lucide-react'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  author: string
  authorPosition?: string
  authorImage?: string
  date: string
  category: string
  image: string
  slug: string
  content?: string
}

interface BlogPostHeaderProps {
  post: BlogPost
}

const BlogPostHeader = ({ post }: BlogPostHeaderProps) => {
  return (
    <section className="relative">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 h-[500px] w-full">
        <div className="relative h-full w-full">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            crossOrigin="anonymous"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bizflow-blue-900/70 to-bizflow-blue-900/90"></div>
        </div>
      </div>
      
      {/* Contenido */}
      <div className="relative pt-32 pb-16 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center text-white"
        >
          <Link 
            href="/blog" 
            className="inline-flex items-center text-bizflow-blue-100 hover:text-white transition-colors mb-6"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Volver al blog
          </Link>
          
          <div className="bg-bizflow-blue-600 text-white text-sm font-medium px-3 py-1 rounded inline-block mb-6">
            {post.category}
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            {post.title}
          </h1>
          
          <p className="text-xl text-bizflow-blue-100 mb-8 max-w-3xl mx-auto">
            {post.excerpt}
          </p>
          
          <div className="flex items-center justify-center space-x-6">
            <div className="flex items-center">
              {post.authorImage ? (
                <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3">
                  <Image
                    src={post.authorImage}
                    alt={post.author}
                    fill
                    className="object-cover"
                    crossOrigin="anonymous"
                  />
                </div>
              ) : (
                <User className="h-5 w-5 mr-2" />
              )}
              <div className="text-left">
                <div className="font-medium">{post.author}</div>
                {post.authorPosition && (
                  <div className="text-sm text-bizflow-blue-100">{post.authorPosition}</div>
                )}
              </div>
            </div>
            
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              <span>{post.date}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default BlogPostHeader 
"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  author: string
  date: string
  category: string
  image: string
  slug: string
}

interface BlogRelatedPostsProps {
  posts: BlogPost[]
}

const BlogRelatedPosts = ({ posts }: BlogRelatedPostsProps) => {
  return (
    <section className="mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold text-bizflow-gray-900 mb-8">
          Artículos Relacionados
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    crossOrigin="anonymous"
                  />
                  <div className="absolute top-4 left-4 bg-bizflow-blue-600 text-white text-xs font-medium px-2 py-1 rounded">
                    {post.category}
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <Link href={`/blog/${post.slug}`} className="group">
                    <h3 className="text-lg font-bold text-bizflow-gray-900 group-hover:text-bizflow-blue-600 transition-colors">
                      {post.title}
                    </h3>
                  </Link>
                </CardHeader>
                <CardContent className="pb-4 flex-grow">
                  <p className="text-bizflow-gray-600 text-sm line-clamp-3">
                    {post.excerpt}
                  </p>
                </CardContent>
                <CardFooter className="pt-0">
                  <Link href={`/blog/${post.slug}`} className="text-bizflow-blue-600 font-medium flex items-center text-sm hover:text-bizflow-blue-700 transition-colors">
                    Leer más <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default BlogRelatedPosts 
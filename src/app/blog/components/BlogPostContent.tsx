"use client"

import React from 'react'
import { motion } from 'framer-motion'

interface BlogPostContentProps {
  content: string
}

const BlogPostContent = ({ content }: BlogPostContentProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-lg shadow-sm p-8"
    >
      <div 
        className="prose prose-lg max-w-none prose-headings:text-bizflow-gray-900 prose-p:text-bizflow-gray-700 prose-a:text-bizflow-blue-600 prose-a:no-underline hover:prose-a:text-bizflow-blue-700 prose-img:rounded-lg"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </motion.article>
  )
}

export default BlogPostContent 
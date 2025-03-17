"use client"

import React from 'react'
import { motion } from 'framer-motion'

const BlogHeader = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-bizflow-blue-900 via-bizflow-blue-800 to-bizflow-purple-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-20"></div>
      
      {/* Abstract shapes */}
      <motion.div 
        className="absolute top-20 right-20 w-64 h-64 rounded-full bg-bizflow-purple-600 mix-blend-overlay opacity-20 blur-2xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2] 
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-10 left-20 w-80 h-80 rounded-full bg-bizflow-blue-400 mix-blend-overlay opacity-20 blur-2xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.25, 0.2] 
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Blog de Bizflow
          </h1>
          <p className="text-xl text-bizflow-blue-100">
            Conocimiento, tendencias y mejores prácticas en tecnología industrial
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default BlogHeader 
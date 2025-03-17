"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface CtaSectionProps {
  title: string
  description: string
  primaryButtonText: string
  primaryButtonHref: string
  secondaryButtonText?: string
  secondaryButtonHref?: string
  withPattern?: boolean
}

export const CtaSection = ({ 
  title, 
  description, 
  primaryButtonText, 
  primaryButtonHref,
  secondaryButtonText,
  secondaryButtonHref,
  withPattern = false
}: CtaSectionProps) => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-bizflow-blue-900 via-bizflow-blue-800 to-bizflow-purple-900 z-0">
        {withPattern && <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-20"></div>}
      </div>

      {/* Abstract shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <motion.div 
          className="absolute top-10 right-10 w-64 h-64 rounded-full bg-bizflow-purple-600 mix-blend-overlay opacity-20 blur-2xl"
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
          className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-bizflow-blue-400 mix-blend-overlay opacity-20 blur-2xl"
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
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white"
          >
            {title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-bizflow-blue-100 mb-10 max-w-3xl mx-auto"
          >
            {description}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button 
              size="lg" 
              className="bg-white hover:bg-bizflow-blue-50 text-bizflow-blue-900 font-medium"
              asChild
            >
              <Link href={primaryButtonHref}>
                <MessageSquare className="mr-2 h-4 w-4" />
                {primaryButtonText}
              </Link>
            </Button>
            
            {secondaryButtonText && secondaryButtonHref && (
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
                asChild
              >
                <Link href={secondaryButtonHref}>
                  {secondaryButtonText}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
} 
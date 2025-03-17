"use client"

import React, { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { ArrowRight, Calendar, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'

// Datos de ejemplo para los artículos del blog
const blogPosts = [
  {
    id: 1,
    title: 'Transformación Digital en la Industria 4.0',
    excerpt: 'Descubra cómo la transformación digital está revolucionando los procesos industriales y mejorando la eficiencia operativa.',
    author: 'Carlos Rodríguez',
    date: '15 Mar 2023',
    category: 'Transformación Digital',
    image: '/images/blog/digital-transformation.svg',
    slug: 'transformacion-digital-industria-4-0'
  },
  {
    id: 2,
    title: 'Implementación de IoT en Entornos Industriales',
    excerpt: 'Estrategias efectivas para implementar soluciones IoT que optimicen sus operaciones y reduzcan costos operativos.',
    author: 'María González',
    date: '28 Feb 2023',
    category: 'IoT Industrial',
    image: '/images/blog/industrial-iot.svg',
    slug: 'implementacion-iot-entornos-industriales'
  },
  {
    id: 3,
    title: 'Mantenimiento Predictivo: El Futuro de la Industria',
    excerpt: 'Cómo el mantenimiento predictivo basado en datos está transformando la gestión de activos industriales.',
    author: 'Javier Méndez',
    date: '10 Feb 2023',
    category: 'Mantenimiento',
    image: '/images/blog/predictive-maintenance.svg',
    slug: 'mantenimiento-predictivo-futuro-industria'
  }
]

const BlogSection = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  
  const titleY = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [50, 0, 0, -50])
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  
  // Parallax para elementos decorativos
  const rightBlobX = useTransform(scrollYProgress, [0, 1], [0, 100])
  const leftBlobX = useTransform(scrollYProgress, [0, 1], [0, -100])
  const rightBlobOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.3, 0])
  const leftBlobOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.3, 0])
  
  return (
    <section className="py-24 bg-gradient-to-br from-bizflow-gray-50 to-bizflow-blue-50 relative overflow-hidden" ref={sectionRef}>
      {/* Patrones de fondo */}
      <motion.div 
        className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"
        style={{ 
          opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.05, 0.1, 0.05])
        }}
      />
      
      {/* Formas decorativas con parallax */}
      <motion.div 
        className="absolute top-20 right-10 w-64 h-64 rounded-full bg-bizflow-blue-200 opacity-20 blur-3xl"
        style={{ 
          x: rightBlobX,
          opacity: rightBlobOpacity
        }}
      />
      <motion.div 
        className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-bizflow-purple-200 opacity-20 blur-3xl"
        style={{ 
          x: leftBlobX,
          opacity: leftBlobOpacity
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          style={{ y: titleY, opacity: titleOpacity }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-bizflow-gray-900 mb-6">
            Últimos Artículos del Blog
          </h2>
          <p className="text-lg text-bizflow-gray-600">
            Manténgase actualizado con las últimas tendencias y conocimientos en tecnología industrial
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => {
            const cardRef = useRef<HTMLDivElement>(null)
            const { scrollYProgress: cardScrollProgress } = useScroll({
              target: cardRef,
              offset: ["start end", "end start"]
            })
            
            const cardY = useTransform(cardScrollProgress, [0, 1], [50, -50])
            const cardScale = useTransform(cardScrollProgress, [0, 0.5, 1], [0.95, 1.02, 0.95])
            
            return (
              <motion.div
                key={post.id}
                ref={cardRef}
                style={{ 
                  y: cardY,
                  scale: cardScale
                }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow border-none shadow-md bg-white">
                  <div className="relative h-48 w-full overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      className="h-full w-full"
                    >
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform"
                        crossOrigin="anonymous"
                      />
                    </motion.div>
                    <motion.div 
                      className="absolute top-4 left-4 bg-bizflow-blue-600 text-white text-xs font-medium px-2 py-1 rounded"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.2 + (index * 0.1) }}
                    >
                      {post.category}
                    </motion.div>
                  </div>
                  <CardHeader className="pb-2">
                    <Link href={`/blog/${post.slug}`} className="group">
                      <h3 className="text-xl font-bold text-bizflow-gray-900 group-hover:text-bizflow-blue-600 transition-colors">
                        {post.title}
                      </h3>
                    </Link>
                  </CardHeader>
                  <CardContent className="pb-4 flex-grow">
                    <p className="text-bizflow-gray-600 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-sm text-bizflow-gray-500 space-x-4">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link href={`/blog/${post.slug}`} className="text-bizflow-blue-600 font-medium flex items-center hover:text-bizflow-blue-700 transition-colors">
                        Leer más <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </motion.div>
                  </CardFooter>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
        >
          <Button asChild className="bg-bizflow-blue-600 hover:bg-bizflow-blue-700 text-white">
            <Link href="/blog">Ver Todo el Blog</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default BlogSection 
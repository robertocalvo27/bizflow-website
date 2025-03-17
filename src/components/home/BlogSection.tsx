"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
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
    image: '/images/blog/digital-transformation.jpg',
    slug: 'transformacion-digital-industria-4-0'
  },
  {
    id: 2,
    title: 'Implementación de IoT en Entornos Industriales',
    excerpt: 'Estrategias efectivas para implementar soluciones IoT que optimicen sus operaciones y reduzcan costos operativos.',
    author: 'María González',
    date: '28 Feb 2023',
    category: 'IoT Industrial',
    image: '/images/blog/industrial-iot.jpg',
    slug: 'implementacion-iot-entornos-industriales'
  },
  {
    id: 3,
    title: 'Mantenimiento Predictivo: El Futuro de la Industria',
    excerpt: 'Cómo el mantenimiento predictivo basado en datos está transformando la gestión de activos industriales.',
    author: 'Javier Méndez',
    date: '10 Feb 2023',
    category: 'Mantenimiento',
    image: '/images/blog/predictive-maintenance.jpg',
    slug: 'mantenimiento-predictivo-futuro-industria'
  }
]

const BlogSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-bizflow-gray-900 mb-6">
            Últimos Artículos del Blog
          </h2>
          <p className="text-lg text-bizflow-gray-600">
            Manténgase actualizado con las últimas tendencias y conocimientos en tecnología industrial
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
                  <Link href={`/blog/${post.slug}`} className="text-bizflow-blue-600 font-medium flex items-center hover:text-bizflow-blue-700 transition-colors">
                    Leer más <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
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
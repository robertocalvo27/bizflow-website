"use client"

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Card } from '@/components/ui/card'

interface ServicioRelacionado {
  titulo: string
  descripcion: string
  href: string
}

interface CrossSellingProps {
  titulo: string
  descripcion: string
  servicios: ServicioRelacionado[]
}

const CrossSelling = ({ titulo, descripcion, servicios }: CrossSellingProps) => {
  return (
    <section className="py-24 bg-bizflow-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-bizflow-blue-900 mb-6">
            {titulo}
          </h2>
          <p className="text-lg text-bizflow-gray-600">
            {descripcion}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicios.map((servicio, index) => (
            <motion.div
              key={servicio.titulo}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Link href={servicio.href}>
                <Card className="p-6 hover:shadow-lg transition-all h-full flex flex-col justify-between group">
                  <div>
                    <h3 className="text-xl font-bold text-bizflow-blue-800 mb-3 group-hover:text-bizflow-blue-600 transition-colors">
                      {servicio.titulo}
                    </h3>
                    <p className="text-bizflow-gray-600 mb-4">
                      {servicio.descripcion}
                    </p>
                  </div>
                  <div className="flex items-center text-bizflow-blue-600 font-medium">
                    Conocer más
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CrossSelling 
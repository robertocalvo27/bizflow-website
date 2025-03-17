"use client"

import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-bizflow-blue-50 to-white py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl lg:text-5xl font-bold text-bizflow-gray-900 leading-tight">
                Optimice su Cadena de Suministro con Tecnología Inteligente
              </h1>
              <p className="mt-6 text-lg text-bizflow-gray-600">
                Soluciones digitales que transforman su logística, mejoran la visibilidad de la cadena de suministro y optimizan sus operaciones en tiempo real.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <Button asChild size="lg" className="bg-bizflow-blue-600 hover:bg-bizflow-blue-700">
                <Link href="/contacto">
                  Optimizar Logística
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-bizflow-blue-600 text-bizflow-blue-600 hover:bg-bizflow-blue-50">
                <Link href="/demo">
                  Ver Demo
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {[
                { title: "Trazabilidad", value: "En Tiempo Real" },
                { title: "Costos Logísticos", value: "Optimizados" },
                { title: "Gestión de Stock", value: "Automatizada" },
                { title: "Entregas a Tiempo", value: "98%" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-bizflow-blue-600 font-semibold">{stat.value}</div>
                  <div className="text-sm text-bizflow-gray-600">{stat.title}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative lg:h-[600px] h-[400px]"
          >
            <Image
              src="/images/logistica-dashboard.png"
              alt="Dashboard de Logística"
              fill
              className="object-contain"
              priority
            />
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-xl p-6 max-w-[280px]">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-full bg-bizflow-blue-100 flex items-center justify-center">
                  <svg className="h-6 w-6 text-bizflow-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-bizflow-gray-900">Control Total</h3>
                  <p className="text-sm text-bizflow-gray-600">Visibilidad completa de su cadena de suministro</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero 
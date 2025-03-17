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
                Transforme su Gestión de Recursos Humanos con Tecnología Inteligente
              </h1>
              <p className="mt-6 text-lg text-bizflow-gray-600">
                Soluciones digitales que optimizan procesos de RRHH, mejoran la experiencia del empleado y potencian el desarrollo del talento en su organización.
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
                  Modernizar RRHH
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
                { title: "Gestión de Personal", value: "Simplificada" },
                { title: "Procesos de RRHH", value: "Automatizados" },
                { title: "Experiencia Empleado", value: "Mejorada" },
                { title: "Análisis de Datos", value: "En Tiempo Real" },
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
              src="/images/rrhh-dashboard.png"
              alt="Dashboard de Recursos Humanos"
              fill
              className="object-contain"
              priority
            />
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-xl p-6 max-w-[280px]">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-full bg-bizflow-blue-100 flex items-center justify-center">
                  <svg className="h-6 w-6 text-bizflow-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-bizflow-gray-900">Gestión Integral</h3>
                  <p className="text-sm text-bizflow-gray-600">Todos sus procesos de RRHH en una sola plataforma</p>
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
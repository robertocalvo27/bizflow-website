"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ScheduleMeetingModal from '@/components/modals/ScheduleMeetingModal'

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-bizflow-gray-50 to-white pt-16 md:pt-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-bizflow-gray-900 mb-6">
              Farmacéutica <br />
              <span className="text-bizflow-blue-600">Digital y Regulada</span>
            </h1>
            <p className="text-lg text-bizflow-gray-600 mb-8 lg:mb-12">
              Transforme sus operaciones farmacéuticas con soluciones digitales que garantizan 
              cumplimiento regulatorio, trazabilidad y eficiencia en la producción de medicamentos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <ScheduleMeetingModal>
                <Button size="lg" className="w-full sm:w-auto">
                  Optimizar mi Laboratorio
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </ScheduleMeetingModal>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Ver Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div className="flex items-center gap-4">
                <div className="bg-bizflow-blue-50 rounded-2xl p-3">
                  <ShieldCheck className="h-6 w-6 text-bizflow-blue-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-bizflow-gray-900">99.9%</div>
                  <div className="text-sm text-bizflow-gray-600">Cumplimiento GMP</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-bizflow-green-50 rounded-2xl p-3">
                  <svg
                    className="h-6 w-6 text-bizflow-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-bizflow-gray-900">100%</div>
                  <div className="text-sm text-bizflow-gray-600">Trazabilidad</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] lg:aspect-[16/12]">
              <Image
                src="/images/farmaceutica-dashboard.webp"
                alt="Dashboard de Laboratorio Farmacéutico Digital"
                fill
                className="object-cover rounded-2xl shadow-2xl"
                priority
              />
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-[280px]"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-bizflow-purple-50 rounded-xl p-2">
                  <svg
                    className="h-6 w-6 text-bizflow-purple-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="font-semibold text-bizflow-gray-900">Validación Digital</div>
              </div>
              <p className="text-sm text-bizflow-gray-600">
                Monitoreo y validación en tiempo real de procesos críticos GMP
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero 
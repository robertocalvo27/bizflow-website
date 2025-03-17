"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const HeroSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-bizflow-blue-900 via-bizflow-blue-800 to-bizflow-purple-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-20"></div>
      
      {/* Abstract shapes */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-bizflow-purple-600 mix-blend-overlay opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-bizflow-blue-400 mix-blend-overlay opacity-20 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Únete a la revolución <span className="text-bizflow-blue-300">industrial digital</span>
            </h1>
            <p className="text-xl text-bizflow-blue-100 mb-8">
              En Bizflow no solo desarrollamos software: transformamos industrias enteras con soluciones tecnológicas que resuelven problemas reales.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-white text-bizflow-blue-600 hover:bg-bizflow-gray-100"
              >
                Ver vacantes disponibles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
              >
                Conoce nuestra cultura
              </Button>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-white">+200</div>
                <div className="text-sm text-bizflow-blue-200">Profesionales</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-white">8</div>
                <div className="text-sm text-bizflow-blue-200">Países</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-white">+50</div>
                <div className="text-sm text-bizflow-blue-200">Proyectos activos</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[500px] w-full rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/careers/team-hero.jpg"
                alt="Equipo de Bizflow trabajando en soluciones industriales"
                fill
                className="object-cover"
                crossOrigin="anonymous"
              />
            </div>
            
            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl max-w-xs"
            >
              <div className="flex items-center mb-3">
                <div className="h-10 w-10 rounded-full bg-bizflow-blue-100 flex items-center justify-center mr-3">
                  <span className="text-bizflow-blue-600 font-bold">4.8</span>
                </div>
                <div>
                  <div className="font-bold text-bizflow-gray-900">Excelente lugar para trabajar</div>
                  <div className="text-sm text-bizflow-gray-600">Basado en +150 reseñas</div>
                </div>
              </div>
              <p className="text-bizflow-gray-700 text-sm">
                "Bizflow combina el desafío técnico con el impacto real en industrias críticas. No hay mejor lugar para crecer profesionalmente."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection 
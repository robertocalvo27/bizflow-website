"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { motion, AnimatePresence } from 'framer-motion'

const RotatingWords = () => {
  const words = ["ágiles", "inteligentes", "robustas"]
  const [currentIndex, setCurrentIndex] = useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-[40px] inline-block">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[currentIndex]}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute text-bizflow-purple-600"
        >
          {words[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}

const AIConsultaModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-bizflow-purple-600 hover:bg-bizflow-purple-700 text-white">
          Solicitar Consulta <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-gradient-to-br from-bizflow-blue-900 to-bizflow-purple-900 text-white p-8">
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-bizflow-purple-500 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold">Cuéntanos tu Desafío Digital</h2>
          </div>
          
          <p className="text-bizflow-blue-100">
            Nuestro asistente de IA está listo para entender tus necesidades específicas y proponer soluciones personalizadas.
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 space-y-4">
            <p className="text-sm text-bizflow-blue-200">Ejemplo de lo que puedes contarnos:</p>
            <p className="italic text-bizflow-blue-100">
              "Necesitamos digitalizar nuestro proceso de control de calidad. Actualmente usamos Excel y papel, lo que causa demoras y errores..."
            </p>
          </div>

          <textarea
            className="w-full h-32 bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white placeholder-bizflow-blue-300 border border-bizflow-purple-500/30 focus:border-bizflow-purple-500 focus:ring-1 focus:ring-bizflow-purple-500 transition-all"
            placeholder="Describe tu situación actual y los desafíos que enfrentas..."
          />

          <div className="flex justify-end space-x-4">
            <Button variant="outline" className="border-bizflow-purple-400 text-bizflow-purple-400 hover:bg-bizflow-purple-400/10">
              Programar llamada
            </Button>
            <Button className="bg-bizflow-purple-600 hover:bg-bizflow-purple-700">
              Enviar <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-bizflow-blue-50 to-white z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-bizflow-blue-900 mb-6">
              Operaciones industriales más{" "}
              <br className="hidden lg:block" />
              <RotatingWords />
            </h1>
            <p className="text-lg md:text-xl text-bizflow-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Transformamos procesos industriales complejos en soluciones digitales ágiles. 
              Implementación en semanas, no años.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <AIConsultaModal />
              <Button asChild variant="outline" className="border-bizflow-blue-600 text-bizflow-blue-600 hover:bg-bizflow-blue-50">
                <Link href="/servicios">
                  Explorar Soluciones <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative h-[400px] lg:h-[600px]">
            <Image
              src="/images/hero-industrial-automation.jpg"
              alt="Transformación digital industrial"
              fill
              className="object-cover rounded-2xl shadow-2xl"
              priority
              crossOrigin="anonymous"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bizflow-blue-900/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

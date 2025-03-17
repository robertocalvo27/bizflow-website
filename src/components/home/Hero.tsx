"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from '@/components/ui/dialog'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'

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
        <DialogTitle className="sr-only">Formulario de Consulta Digital</DialogTitle>
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
  const { scrollY } = useScroll()
  
  // Parallax transformations
  const y1 = useTransform(scrollY, [0, 500], [0, -150])
  const y2 = useTransform(scrollY, [0, 500], [0, -100])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const scale = useTransform(scrollY, [0, 300], [1, 0.9])
  const textY = useTransform(scrollY, [0, 300], [0, -50])
  const imageScale = useTransform(scrollY, [0, 300], [1, 1.1])
  const imageY = useTransform(scrollY, [0, 300], [0, 30])

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-bizflow-blue-50 to-white z-0"></div>

      {/* Decorative elements with parallax */}
      <motion.div 
        className="absolute top-20 right-10 w-64 h-64 rounded-full bg-bizflow-purple-200/30 blur-3xl z-0"
        style={{ y: y1, opacity }}
      />
      <motion.div 
        className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-bizflow-blue-200/20 blur-3xl z-0"
        style={{ y: y2, opacity }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="text-center lg:text-left"
            style={{ y: textY }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-bizflow-blue-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Operaciones industriales más{" "}
              <br className="hidden lg:block" />
              <RotatingWords />
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-bizflow-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Transformamos procesos industriales complejos en soluciones digitales ágiles. 
              Implementación en semanas, no años.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <AIConsultaModal />
              <Button asChild variant="outline" className="border-bizflow-blue-600 text-bizflow-blue-600 hover:bg-bizflow-blue-50">
                <Link href="/servicios">
                  Explorar Soluciones <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative h-[400px] lg:h-[600px]"
            style={{ scale: imageScale, y: imageY }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Image
              src="/images/hero-industrial-automation.jpg"
              alt="Transformación digital industrial"
              fill
              className="object-cover rounded-2xl shadow-2xl"
              priority
              crossOrigin="anonymous"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bizflow-blue-900/20 to-transparent rounded-2xl"></div>
            
            {/* Floating card with parallax */}
            <motion.div 
              className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-xl max-w-xs"
              style={{ y: useTransform(scrollY, [0, 300], [0, -20]) }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="flex items-start space-x-4">
                <div className="bg-bizflow-green-100 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-bizflow-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-bizflow-blue-900 mb-1">Implementación en 4-6 semanas</h3>
                  <p className="text-sm text-bizflow-gray-600">
                    Resultados tangibles en tiempo récord
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero

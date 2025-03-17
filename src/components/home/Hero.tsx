"use client"

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from '@/components/ui/dialog'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'

// Definición de los slides
const heroSlides = [
  {
    id: 1,
    image: '/images/hero-industrial-automation.jpg',
    preTitle: 'Operaciones industriales más',
    rotatingWords: ["ágiles", "inteligentes", "robustas"],
    description: 'Transformamos procesos industriales complejos en soluciones digitales ágiles. Implementación en semanas, no años.',
    stats: {
      text: 'Implementación en 4-6 semanas',
      subtext: 'Resultados tangibles en tiempo récord'
    }
  },
  {
    id: 2,
    image: '/images/digital-transformation-process.jpg',
    preTitle: 'Lo que imaginas,',
    rotatingWords: ["lo construimos", "lo optimizamos", "lo digitalizamos"],
    description: 'Convertimos tus ideas en soluciones de software industrial a medida. Del concepto a la realidad en tiempo récord.',
    stats: {
      text: '+50 proyectos exitosos',
      subtext: 'En diferentes industrias'
    }
  },
  {
    id: 3,
    image: '/images/agile-implementation.jpg',
    preTitle: 'Potenciado por',
    rotatingWords: ["Inteligencia Artificial", "Machine Learning", "Automatización"],
    description: 'Soluciones industriales inteligentes que aprenden y mejoran continuamente, maximizando la eficiencia operativa.',
    stats: {
      text: '30% más eficiencia',
      subtext: 'Con IA y automatización'
    }
  }
]

const RotatingWords = ({ words }: { words: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [words])

  return (
    <div className="relative h-[60px] md:h-[80px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={words[currentIndex]}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ 
            duration: 0.5,
            ease: "easeInOut"
          }}
          className="text-bizflow-purple-600 text-4xl md:text-5xl lg:text-6xl font-bold absolute w-full"
        >
          {words[currentIndex]}
        </motion.div>
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
  const [currentSlide, setCurrentSlide] = useState(0)
  const { scrollY } = useScroll()
  
  // Parallax transformations
  const y1 = useTransform(scrollY, [0, 500], [0, -150])
  const y2 = useTransform(scrollY, [0, 500], [0, -100])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const scale = useTransform(scrollY, [0, 300], [1, 0.9])
  const textY = useTransform(scrollY, [0, 300], [0, -50])
  const imageScale = useTransform(scrollY, [0, 300], [1, 1.1])
  const imageY = useTransform(scrollY, [0, 300], [0, 30])

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

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
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
              className="space-y-2"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-bizflow-blue-900">
                {heroSlides[currentSlide].preTitle}
              </h1>
              <RotatingWords words={heroSlides[currentSlide].rotatingWords} />
              <div className="space-y-12">
                <p className="text-lg md:text-xl text-bizflow-gray-600 max-w-2xl mx-auto lg:mx-0 mt-6">
                  {heroSlides[currentSlide].description}
                </p>
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
              </div>
            </motion.div>
          </motion.div>

          <div className="relative h-[400px] lg:h-[600px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.7 }}
              >
                <Image
                  src={heroSlides[currentSlide].image}
                  alt="Transformación digital industrial"
                  fill
                  className="object-cover rounded-2xl shadow-2xl"
                  priority
                  crossOrigin="anonymous"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bizflow-blue-900/20 to-transparent rounded-2xl"></div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
            <div className="absolute left-4 right-4 top-1/2 -translate-y-1/2 flex justify-between z-20">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full bg-white/80 hover:bg-white text-bizflow-blue-900 transition-all transform hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full bg-white/80 hover:bg-white text-bizflow-blue-900 transition-all transform hover:scale-110"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
            
            {/* Slide indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentSlide
                      ? 'bg-white w-6'
                      : 'bg-white/50 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
            
            {/* Stats card */}
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
                  <h3 className="font-bold text-bizflow-blue-900 mb-1">{heroSlides[currentSlide].stats.text}</h3>
                  <p className="text-sm text-bizflow-gray-600">
                    {heroSlides[currentSlide].stats.subtext}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

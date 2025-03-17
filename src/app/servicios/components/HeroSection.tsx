'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import ScheduleMeetingModal from '@/components/modals/ScheduleMeetingModal'

const solutions = [
  {
    title: 'Software Operativo',
    description: 'Automatización y control de procesos industriales'
  },
  {
    title: 'Analítica Avanzada',
    description: 'Insights basados en datos en tiempo real'
  },
  {
    title: 'Integración de Sistemas',
    description: 'Conexión perfecta entre sus plataformas'
  },
  {
    title: 'Consultoría Especializada',
    description: 'Asesoramiento experto en transformación digital'
  }
]

const HeroSection = () => {
  const [hoveredSolution, setHoveredSolution] = React.useState<number | null>(null)
  const [isImageHovered, setIsImageHovered] = React.useState(false)

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-bizflow-blue-50 to-bizflow-blue-100 py-20 md:py-32">
      {/* Fondo con patrón de grid más sutil */}
      <div 
        className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"
        style={{ opacity: 0.05 }}
      />

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-bizflow-blue-900 mb-6">
              Soluciones integrales para la{' '}
              <span className="text-bizflow-purple-600">industria del futuro</span>
            </h1>
            <p className="text-xl text-bizflow-blue-700 mb-12">
              Transformamos su operación con un ecosistema completo de soluciones digitales que impulsan la eficiencia, innovación y crecimiento sostenible.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  className="p-6 rounded-xl transition-all duration-300 cursor-pointer"
                  style={{
                    backgroundColor: hoveredSolution === index ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.5)',
                    boxShadow: hoveredSolution === index ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' : 'none'
                  }}
                  onMouseEnter={() => setHoveredSolution(index)}
                  onMouseLeave={() => setHoveredSolution(null)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-lg font-semibold text-bizflow-blue-900 mb-2">{solution.title}</h3>
                  <p className="text-bizflow-blue-600">{solution.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <ScheduleMeetingModal>
                <Button 
                  size="lg"
                  className="bg-bizflow-purple-600 hover:bg-bizflow-purple-700 text-white transition-transform hover:scale-105"
                >
                  Solicitar demostración
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </ScheduleMeetingModal>
              <Button 
                size="lg"
                variant="outline"
                className="border-bizflow-purple-600 text-bizflow-purple-600 hover:bg-bizflow-purple-50 transition-transform hover:scale-105"
              >
                Ver casos de éxito
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="relative aspect-square rounded-2xl overflow-hidden shadow-xl transition-all duration-500"
              style={{
                boxShadow: isImageHovered 
                  ? '0 25px 50px -12px rgba(0, 0, 0, 0.35)'
                  : '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                transform: isImageHovered ? 'translateY(-8px)' : 'translateY(0)'
              }}
              onMouseEnter={() => setIsImageHovered(true)}
              onMouseLeave={() => setIsImageHovered(false)}
            >
              <Image
                src="/images/digital-transformation-process.jpg"
                alt="Transformación digital en la industria"
                fill
                className="object-cover transition-transform duration-700"
                style={{
                  transform: isImageHovered ? 'scale(1.05)' : 'scale(1)'
                }}
                priority
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-tr from-bizflow-blue-900/30 to-transparent"
                animate={{
                  opacity: isImageHovered ? 0.2 : 0.3
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Elementos decorativos flotantes más sutiles */}
            <motion.div 
              className="absolute -top-4 -right-4 w-24 h-24 bg-bizflow-purple-400/10 rounded-full blur-2xl"
              animate={{
                scale: isImageHovered ? 1.2 : 1,
                opacity: isImageHovered ? 0.15 : 0.1
              }}
              transition={{ duration: 0.5 }}
            />
            <motion.div 
              className="absolute -bottom-8 -left-8 w-32 h-32 bg-bizflow-blue-400/10 rounded-full blur-2xl"
              animate={{
                scale: isImageHovered ? 1.2 : 1,
                opacity: isImageHovered ? 0.15 : 0.1
              }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection 
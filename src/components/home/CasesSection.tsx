"use client"

import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, ChevronRight, Quote } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'

const CasesSection = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  
  const titleY = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [50, 0, 0, -50])
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  
  const featuredCaseRef = useRef<HTMLDivElement>(null)
  const isFeaturedCaseInView = useInView(featuredCaseRef, { once: false, amount: 0.3 })
  
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden" ref={sectionRef}>
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-20 right-10 w-64 h-64 rounded-full bg-bizflow-blue-100 opacity-20 blur-3xl"
        style={{ 
          x: useTransform(scrollYProgress, [0, 1], [100, -100]),
          opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.2, 0])
        }}
      />
      <motion.div 
        className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-bizflow-purple-100 opacity-20 blur-3xl"
        style={{ 
          x: useTransform(scrollYProgress, [0, 1], [-100, 100]),
          opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.2, 0])
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          style={{ y: titleY, opacity: titleOpacity }}
        >
          <h2 className="section-title">
            Historias de éxito que transforman industrias
          </h2>
          <p className="paragraph max-w-2xl mx-auto">
            Descubre cómo nuestras soluciones han ayudado a empresas líderes a resolver desafíos operativos complejos y alcanzar resultados medibles en tiempo récord.
          </p>
        </motion.div>

        {/* Featured Case Study */}
        <motion.div 
          ref={featuredCaseRef}
          className="mb-16 bg-bizflow-gray-50 rounded-xl overflow-hidden shadow-md"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <motion.div 
              className="relative h-64 md:h-96 lg:h-full"
              style={{ 
                scale: useTransform(scrollYProgress, [0.3, 0.6], [1, 1.05]),
              }}
            >
              <Image
                src="/images/smith-nephew-medical.jpg"
                alt="Smith & Nephew - Optimización de operaciones médicas"
                fill
                className="object-cover"
                crossOrigin="anonymous"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-bizflow-blue-900/50 to-transparent"></div>
              <motion.div 
                className="absolute top-6 left-6 flex flex-col gap-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <span className="bg-white/90 text-bizflow-blue-900 text-sm px-2 py-1 rounded">
                  Costa Rica
                </span>
              </motion.div>
            </motion.div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <motion.h3 
                className="text-2xl md:text-3xl font-bold text-bizflow-blue-900 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Smith & Nephew transforma su gestión de calidad
              </motion.h3>
              <motion.ul 
                className="mb-6 space-y-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {[
                  "Reducción de 75% en tiempo de captura de datos de inspección",
                  "Eliminación de 100% de registros en papel y archivos Excel",
                  "Implementación completa en 8 semanas con integración SAP"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + (index * 0.1) }}
                  >
                    <ChevronRight className="h-5 w-5 text-bizflow-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-bizflow-gray-700">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
              <motion.div 
                className="mb-6 bg-white p-4 rounded-lg border-l-4 border-bizflow-purple-500 shadow-sm"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="flex items-start">
                  <Quote className="h-8 w-8 text-bizflow-purple-400 mr-3 flex-shrink-0" />
                  <div>
                    <p className="italic text-bizflow-gray-700 mb-2">
                      "Bizflow no solo entendió nuestros procesos industriales, sino que implementó una solución que en menos de 2 meses ya estaba generando resultados. Su experiencia en planta fue clave."
                    </p>
                    <p className="font-semibold text-bizflow-blue-800">
                      Carlos Moreno, Director de Operaciones
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <Button asChild className="inline-flex self-start bizflow-button">
                  <Link href="/casos-exito/smith-nephew">
                    Ver caso completo <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* More Case Studies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <Tabs defaultValue="manufactura" className="w-full">
            <div className="text-center mb-8">
              <TabsList className="inline-flex">
                <TabsTrigger value="manufactura" className="px-4 py-2">Manufactura</TabsTrigger>
                <TabsTrigger value="mineria" className="px-4 py-2">Minería</TabsTrigger>
                <TabsTrigger value="farmaceutica" className="px-4 py-2">Farmacéutica</TabsTrigger>
                <TabsTrigger value="alimentos" className="px-4 py-2">Alimentos y Bebidas</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="manufactura" className="space-y-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    image: "/images/kimberly-clark-production.jpg",
                    alt: "Planta de producción Kimberly Clark Costa Rica",
                    company: "Kimberly Clark",
                    location: "Perú",
                    industry: "Manufactura",
                    title: "Transformación digital en líneas de producción",
                    description: "Implementamos un sistema de registro OEE digital que elevó la eficiencia global en 15% en solo 3 meses.",
                    link: "/casos-exito/kimberly-clark",
                    delay: 0
                  },
                  {
                    image: "/images/ferreyros-cat-trucks.jpg",
                    alt: "Camiones mineros Caterpillar distribuidos por Ferreyros",
                    company: "Ferreyros",
                    location: "Perú",
                    industry: "Manufactura",
                    title: "Sistema de gestión de mantenimiento",
                    description: "Solución móvil para técnicos que redujo tiempos administrativos en 40% y mejoró precisión de datos.",
                    link: "/casos-exito/ferreyros",
                    delay: 0.1
                  },
                  {
                    image: "/images/aceros-arequipa-foundry.jpg",
                    alt: "Planta siderúrgica de Aceros Arequipa",
                    company: "Aceros Arequipa",
                    location: "Perú",
                    industry: "Manufactura",
                    title: "Control de inventario industrial",
                    description: "Implementamos un sistema con código QR que redujo errores de inventario en 90% e integró con SAP.",
                    link: "/casos-exito/aceros-arequipa",
                    delay: 0.2
                  }
                ].map((caseStudy, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: caseStudy.delay }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <Card className="overflow-hidden hover:shadow-lg transition-all h-full flex flex-col">
                      <div className="relative h-48">
                        <Image
                          src={caseStudy.image}
                          alt={caseStudy.alt}
                          fill
                          className="object-cover"
                          crossOrigin="anonymous"
                        />
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h4 className="text-xl font-bold text-bizflow-blue-800">{caseStudy.company}</h4>
                            <span className="text-sm text-bizflow-gray-600">{caseStudy.location}</span>
                          </div>
                          <span className="bg-bizflow-blue-100 text-bizflow-blue-700 text-xs px-2.5 py-1 rounded">
                            {caseStudy.industry}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold mb-3 text-bizflow-gray-800">
                          {caseStudy.title}
                        </h3>
                        <p className="text-bizflow-gray-600 text-sm mb-4 flex-grow">
                          {caseStudy.description}
                        </p>
                        <Link href={caseStudy.link} className="text-bizflow-blue-600 font-medium inline-flex items-center group text-sm mt-auto">
                          Leer más <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="mineria" className="space-y-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-all">
                    <div className="relative h-48">
                      <Image
                        src="/images/antamina-operations.jpg"
                        alt="Operaciones mineras a tajo abierto de Antamina"
                        fill
                        className="object-cover"
                        crossOrigin="anonymous"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-bizflow-blue-800">Antamina</h4>
                          <span className="text-sm text-bizflow-gray-600">Perú</span>
                        </div>
                        <span className="bg-bizflow-blue-100 text-bizflow-blue-700 text-xs px-2.5 py-1 rounded">
                          Minería
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold mb-3 text-bizflow-gray-800">
                        Sistema de gestión de seguridad
                      </h3>
                      <p className="text-bizflow-gray-600 text-sm mb-4">
                        Solución digital para reportes de seguridad que elevó reportes preventivos en 300% en 2 meses.
                      </p>
                      <Link href="/casos-exito/antamina" className="text-bizflow-blue-600 font-medium inline-flex items-center group text-sm">
                        Leer más <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </Card>
                </motion.div>

                {/* Añadir más casos de minería aquí */}
              </div>
            </TabsContent>

            {/* Contenido para otras pestañas */}
            <TabsContent value="farmaceutica" className="space-y-0">
              {/* Contenido para Farmacéutica */}
            </TabsContent>

            <TabsContent value="alimentos" className="space-y-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-all">
                    <div className="relative h-48">
                      <Image
                        src="/images/fifco-beverages.jpg"
                        alt="Optimización de procesos FIFCO"
                        fill
                        className="object-cover"
                        crossOrigin="anonymous"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-bizflow-blue-800">FIFCO</h4>
                          <span className="text-sm text-bizflow-gray-600">Costa Rica</span>
                        </div>
                        <span className="bg-bizflow-blue-100 text-bizflow-blue-700 text-xs px-2.5 py-1 rounded">
                          Alimentos y Bebidas
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold mb-3 text-bizflow-gray-800">
                        Digitalización de control de calidad
                      </h3>
                      <p className="text-bizflow-gray-600 text-sm mb-4">
                        Implementación de sistema digital que redujo tiempo de análisis en 60% y mejoró trazabilidad.
                      </p>
                      <Link href="/casos-exito/fifco" className="text-bizflow-blue-600 font-medium inline-flex items-center group text-sm">
                        Leer más <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </Card>
                </motion.div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button asChild variant="outline" className="bizflow-button-outline">
            <Link href="/casos-exito">
              Ver todos los casos de éxito <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default CasesSection

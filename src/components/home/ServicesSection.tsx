"use client"

import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, BarChart3, Clock, Database, LayoutDashboard, Zap, Smartphone, Cloud, Server, Code2, Laptop, Settings } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'

interface Service {
  icon: React.ReactNode
  title: string
  description: string
  link: string
}

interface ServiceCardProps {
  service: Service
  index: number
}

interface ServicesSectionProps {
  showAllServices?: boolean
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: false, amount: 0.3 })
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1.05, 0.95])

  return (
    <motion.div
      ref={cardRef}
      style={{ 
        y, 
        opacity,
        scale,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
      }}
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
    >
      <Card className="p-6 hover:shadow-lg transition-shadow border-t-4 border-t-bizflow-blue-600 h-full flex flex-col">
        <div className="flex items-center mb-4">
          <div className="bg-bizflow-blue-100 p-3 rounded-full mr-3">
            {service.icon}
          </div>
          <h3 className="text-xl font-bold text-bizflow-blue-800">{service.title}</h3>
        </div>
        <p className="text-bizflow-gray-600 mb-4 flex-grow">{service.description}</p>
        <Link href={service.link} className="text-bizflow-blue-600 font-medium inline-flex items-center group">
          Saber más
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </Card>
    </motion.div>
  )
}

const ServicesSection = ({ showAllServices = false }: ServicesSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 })
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const titleY = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [50, 0, 0, -50])
  
  const services: Service[] = [
    {
      icon: <Database className="h-6 w-6 text-bizflow-blue-600" />,
      title: "Software Operativo",
      description: "Reemplazamos Excel y sistemas heredados con soluciones modernas para gestión de operaciones, mantenimiento y calidad.",
      link: "/servicios/software-operativo"
    },
    {
      icon: <Smartphone className="h-6 w-6 text-bizflow-blue-600" />,
      title: "Apps para su Empresa",
      description: "Desarrollamos aplicaciones personalizadas para resolver necesidades únicas de su operación, desde control de inventario hasta gestión de turnos, accesibles en cualquier dispositivo.",
      link: "/servicios/apps-empresariales"
    },
    {
      icon: <Cloud className="h-6 w-6 text-bizflow-blue-600" />,
      title: "SaaS (Software as a Service)",
      description: "Personalizamos nuestras soluciones bajo sus necesidades: escalables, en la nube y listas para usar. Ejemplos: control de producción, gestión de calidad o seguimiento de mantenimiento.",
      link: "/servicios/software-as-a-service"
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-bizflow-blue-600" />,
      title: "Analítica Industrial",
      description: "Transformamos datos operativos en insights accionables con dashboards en tiempo real y reportes automatizados.",
      link: "/servicios/analitica-industrial"
    },
    {
      icon: <Zap className="h-6 w-6 text-bizflow-blue-600" />,
      title: "Automatización",
      description: "Automatizamos flujos de trabajo manual con interfaces amigables para operarios y gestores.",
      link: "/servicios/automatizacion"
    },
    {
      icon: <LayoutDashboard className="h-6 w-6 text-bizflow-blue-600" />,
      title: "Integración de Sistemas",
      description: "Conectamos sistemas aislados como SAP, SCADA y MES para crear una vista unificada de sus operaciones.",
      link: "/servicios/integracion"
    },
    {
      icon: <Server className="h-6 w-6 text-bizflow-blue-600" />,
      title: "Infraestructura y Soporte Remoto",
      description: "Implementamos servidores en la nube segura, garantizando disponibilidad y cumplimiento. Soporte técnico remoto 24/7 para resolver incidencias en tiempo real.",
      link: "/servicios/infraestructura-soporte"
    }
  ]

  const implementationRef = useRef<HTMLDivElement>(null)
  const isImplementationInView = useInView(implementationRef, { once: false, amount: 0.3 })
  
  const { scrollYProgress: implementationScrollProgress } = useScroll({
    target: implementationRef,
    offset: ["start end", "end start"]
  })
  
  const implementationOpacity = useTransform(implementationScrollProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const implementationScale = useTransform(implementationScrollProgress, [0, 0.5, 1], [0.95, 1.02, 0.95])

  return (
    <section className="py-16 md:py-24" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          style={{ opacity: titleOpacity, y: titleY }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-bizflow-blue-900 mb-6">
            Soluciones que transforman operaciones industriales
          </h2>
          <p className="text-lg text-bizflow-gray-600 max-w-2xl mx-auto">
            Ayudamos a las empresas a abandonar Excel y sistemas heredados complejos por soluciones digitales ágiles que agilizan las operaciones y mejoran la toma de decisiones.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services
            .slice(0, showAllServices ? undefined : 3)
            .map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* Implementación Rápida */}
        <motion.div 
          ref={implementationRef}
          className="bg-gradient-to-r from-bizflow-blue-900 to-bizflow-blue-800 rounded-xl overflow-hidden shadow-xl"
          style={{ 
            opacity: implementationOpacity,
            scale: implementationScale
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <motion.h3 
                className="text-2xl md:text-3xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isImplementationInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
              >
                Implementación en semanas, no años
              </motion.h3>
              <motion.p 
                className="text-bizflow-blue-100 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isImplementationInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Nuestro enfoque ágil nos permite implementar soluciones en producción en semanas, no meses o años. Trabajamos con metodologías probadas para entregar valor de manera incremental, minimizando riesgos y maximizando el retorno de inversión.
              </motion.p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <motion.div 
                  className="bg-bizflow-blue-800/70 p-4 rounded-lg flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isImplementationInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Clock className="h-6 w-6 text-bizflow-blue-200 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-medium mb-1">MVP en 4-6 semanas</h4>
                    <p className="text-bizflow-blue-200 text-sm">Primeros resultados tangibles rápidamente</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="bg-bizflow-blue-800/70 p-4 rounded-lg flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isImplementationInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <Clock className="h-6 w-6 text-bizflow-blue-200 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-medium mb-1">ROI en 1-3 meses</h4>
                    <p className="text-bizflow-blue-200 text-sm">Retorno de inversión medible a corto plazo</p>
                  </div>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isImplementationInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Button asChild className="bg-bizflow-purple-600 hover:bg-bizflow-purple-700 text-white inline-flex self-start">
                  <Link href="/metodologia">
                    Conocer nuestra metodología <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>
            <motion.div 
              className="relative lg:h-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isImplementationInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Image
                src="/images/agile-implementation.jpg"
                alt="Proceso de implementación ágil y transformación digital"
                width={600}
                height={600}
                className="w-full h-full object-cover"
                crossOrigin="anonymous"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-bizflow-blue-900/50 lg:bg-gradient-to-r"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection

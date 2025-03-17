"use client"

import React, { useRef } from 'react'
import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { CheckCircle, Shield } from 'lucide-react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'

const TrustSection = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  
  const titleY = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [50, 0, 0, -50])
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  
  return (
    <section className="py-16 md:py-24 bg-bizflow-gray-50 relative overflow-hidden" ref={sectionRef}>
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-20 right-10 w-64 h-64 rounded-full bg-bizflow-blue-200 opacity-20 blur-3xl"
        style={{ 
          x: useTransform(scrollYProgress, [0, 1], [100, -100]),
          opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.2, 0])
        }}
      />
      <motion.div 
        className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-bizflow-purple-200 opacity-20 blur-3xl"
        style={{ 
          x: useTransform(scrollYProgress, [0, 1], [-100, 100]),
          opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.2, 0])
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          style={{ y: titleY, opacity: titleOpacity }}
        >
          <h2 className="section-title">
            Plataforma confiable para operaciones críticas
          </h2>
          <p className="paragraph max-w-2xl mx-auto">
            Nuestras certificaciones y alianzas estratégicas nos permiten ofrecer soluciones seguras, escalables y de alto rendimiento para las empresas más exigentes de Latinoamérica.
          </p>
        </motion.div>

        {/* Certificaciones */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <Shield className="h-8 w-8 text-bizflow-blue-600" />,
              title: "ISO 27001",
              description: "Certificación internacional en seguridad de la información, garantizando la protección de sus datos críticos.",
              color: "bizflow-blue",
              delay: 0
            },
            {
              icon: <CheckCircle className="h-8 w-8 text-bizflow-purple-600" />,
              title: "ISO 9001",
              description: "Sistema de gestión de calidad certificado, asegurando procesos consistentes y mejora continua.",
              color: "bizflow-purple",
              delay: 0.1
            },
            {
              icon: <Image
                src="/images/aws-partner-icon.svg"
                alt="AWS Partner"
                width={32}
                height={32}
                crossOrigin="anonymous"
              />,
              title: "AWS Partner",
              description: "Partner oficial de Amazon Web Services con especialización en IoT y analítica industrial.",
              color: "bizflow-blue",
              delay: 0.2
            }
          ].map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: cert.delay }}
            >
              <Card className={`p-6 text-center flex flex-col items-center hover:shadow-lg transition-shadow border-t-4 border-t-${cert.color}-600`}>
                <div className={`bg-${cert.color}-100 p-3 rounded-full mb-4`}>
                  {cert.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-bizflow-blue-800">{cert.title}</h3>
                <p className="text-bizflow-gray-600">
                  {cert.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Estadísticas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { value: "+50", label: "Clientes activos", delay: 0 },
            { value: "98%", label: "Tasa de retención", delay: 0.1 },
            { value: "+200", label: "Proyectos completados", delay: 0.2 },
            { value: "3", label: "Países con oficinas", delay: 0.3 }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: stat.delay }}
            >
              <motion.p 
                className="text-4xl md:text-5xl font-bold text-bizflow-blue-600 mb-2"
                whileInView={{ 
                  scale: [1, 1.1, 1],
                  transition: { duration: 0.8, delay: stat.delay + 0.3 }
                }}
              >
                {stat.value}
              </motion.p>
              <p className="text-sm text-bizflow-gray-700">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Clientes y sectores */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-center text-xl font-semibold mb-8 text-bizflow-gray-700">
            Empresas líderes en diversos sectores confían en Bizflow
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {[
              { name: "Smith & Nephew", src: "/images/cliente-smith-nephew.svg", delay: 0 },
              { name: "FIFCO", src: "/images/cliente-fifco.svg", delay: 0.1 },
              { name: "Lindley", src: "/images/cliente-lindley.svg", delay: 0.2 },
              { name: "Ferreyros", src: "/images/cliente-ferreyros.svg", delay: 0.3 },
              { name: "Kimberly Clark", src: "/images/cliente-kimberly.svg", delay: 0.4 },
              { name: "Antamina", src: "/images/cliente-antamina.svg", delay: 0.5 }
            ].map((client, index) => (
              <motion.div
                key={index}
                className="flex justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: client.delay }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <Image
                  src={client.src}
                  alt={client.name}
                  width={120}
                  height={60}
                  className="object-contain grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
                  crossOrigin="anonymous"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TrustSection

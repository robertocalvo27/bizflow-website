"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Search, ArrowRight, Filter } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

// Tipos
interface CaseStudy {
  id: string
  title: string
  company: string
  location: string
  industry: string
  functionalArea: string[]  // Cambiado a array para permitir múltiples áreas
  description: string
  results: string[]
  image: string
  link: string
}

// Lista completa de áreas funcionales
const allFunctionalAreas = [
  "Recursos Humanos",
  "Logística",
  "Seguridad Industrial",
  "Producción",
  "Mantenimiento",
  "Calidad",
  "Almacén",
  "Planificación",
  "Control de Procesos",
  "Gestión de Activos"
]

// Datos de ejemplo actualizados
const caseStudies: CaseStudy[] = [
  {
    id: "smith-nephew",
    title: "Transformación de gestión de calidad",
    company: "Smith & Nephew",
    location: "Costa Rica",
    industry: "Manufactura Médica",
    functionalArea: ["Calidad", "Producción", "Control de Procesos"],
    description: "Implementación de sistema digital que redujo tiempo de inspección y eliminó registros en papel.",
    results: [
      "Reducción de 75% en tiempo de captura de datos",
      "Eliminación de 100% de registros en papel",
      "Implementación en 8 semanas"
    ],
    image: "/images/smith-nephew-medical.jpg",
    link: "/casos-exito/smith-nephew"
  },
  {
    id: "kimberly-clark",
    title: "Transformación digital en líneas de producción",
    company: "Kimberly Clark",
    location: "Perú",
    industry: "Manufactura",
    functionalArea: ["Producción", "Mantenimiento", "Control de Procesos"],
    description: "Sistema de registro OEE digital que elevó la eficiencia global en líneas de producción.",
    results: [
      "Aumento de 15% en eficiencia global",
      "Implementación en 3 meses",
      "ROI en primer trimestre"
    ],
    image: "/images/kimberly-clark-production.jpg",
    link: "/casos-exito/kimberly-clark"
  },
  {
    id: "antamina",
    title: "Sistema de gestión de seguridad",
    company: "Antamina",
    location: "Perú",
    industry: "Minería",
    functionalArea: ["Seguridad Industrial", "Recursos Humanos"],
    description: "Solución digital para reportes de seguridad que elevó reportes preventivos significativamente.",
    results: [
      "Aumento de 300% en reportes preventivos",
      "Implementación en 2 meses",
      "Mejora en cultura de seguridad"
    ],
    image: "/images/antamina-operations.jpg",
    link: "/casos-exito/antamina"
  },
  {
    id: "fifco",
    title: "Digitalización de control de calidad",
    company: "FIFCO",
    location: "Costa Rica",
    industry: "Alimentos y Bebidas",
    functionalArea: ["Calidad", "Producción", "Logística"],
    description: "Implementación de sistema digital que redujo tiempo de análisis y mejoró trazabilidad.",
    results: [
      "Reducción de 60% en tiempo de análisis",
      "Mejora en trazabilidad",
      "Eliminación de papel"
    ],
    image: "/images/fifco-beverages.jpg",
    link: "/casos-exito/fifco"
  }
]

// Obtener industrias únicas
const industries = Array.from(new Set(caseStudies.map(cs => cs.industry)))

export default function CasosExitoContent() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null)
  const [selectedArea, setSelectedArea] = useState<string | null>(null)

  // Filtrar casos de éxito
  const filteredCases = caseStudies.filter(cs => {
    const matchesSearch = cs.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cs.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cs.description.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesIndustry = !selectedIndustry || cs.industry === selectedIndustry
    const matchesArea = !selectedArea || cs.functionalArea.includes(selectedArea)

    return matchesSearch && matchesIndustry && matchesArea
  })

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 md:py-40 pb-16 md:pb-20 overflow-hidden bg-white">
        {/* Decorative elements */}
        <motion.div 
          className="absolute top-20 right-10 w-64 h-64 rounded-full bg-bizflow-blue-100 opacity-20 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2] 
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-bizflow-purple-100 opacity-20 blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.25, 0.2] 
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="container relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-bizflow-blue-900 to-bizflow-purple-900 bg-clip-text text-transparent">
              Historias de Éxito que Transforman Industrias
            </h1>
            <p className="text-xl text-bizflow-gray-600">
              Descubre cómo empresas líderes han transformado sus operaciones con nuestras soluciones de software industrial
            </p>
          </div>
        </motion.div>
      </section>

      {/* Filters Section */}
      <section className="py-6 bg-white border-b">
        <div className="container">
          <div className="flex flex-col gap-6">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-bizflow-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Buscar por empresa o solución..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            {/* Filters */}
            <div className="flex flex-col gap-4">
              {/* Industries */}
              <div className="flex flex-wrap gap-2">
                <span className="text-sm font-medium text-bizflow-gray-600 mr-2">Industrias:</span>
                {industries.map(industry => (
                  <Badge
                    key={industry}
                    variant={selectedIndustry === industry ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => setSelectedIndustry(selectedIndustry === industry ? null : industry)}
                  >
                    {industry}
                  </Badge>
                ))}
              </div>

              {/* Functional Areas */}
              <div className="flex flex-wrap gap-2">
                <span className="text-sm font-medium text-bizflow-gray-600 mr-2">Áreas Funcionales:</span>
                {allFunctionalAreas.map(area => (
                  <Badge
                    key={area}
                    variant={selectedArea === area ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => setSelectedArea(selectedArea === area ? null : area)}
                  >
                    {area}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-16 bg-bizflow-gray-50">
        <div className="container">
          {filteredCases.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-bizflow-gray-600">
                No se encontraron casos de éxito que coincidan con los filtros seleccionados.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCases.map((caseStudy, index) => (
                <motion.div
                  key={caseStudy.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-all h-full flex flex-col">
                    <div className="relative h-48">
                      <Image
                        src={caseStudy.image}
                        alt={`${caseStudy.company} - ${caseStudy.title}`}
                        fill
                        className="object-cover"
                        crossOrigin="anonymous"
                      />
                      <div className="absolute top-4 left-4 flex gap-2">
                        <Badge className="bg-white/90 text-bizflow-blue-900">
                          {caseStudy.location}
                        </Badge>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-bizflow-blue-800">
                            {caseStudy.company}
                          </h3>
                          <span className="text-sm text-bizflow-gray-600">
                            {caseStudy.industry}
                          </span>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {caseStudy.functionalArea.join(", ")}
                        </Badge>
                      </div>
                      <h4 className="text-lg font-semibold mb-3 text-bizflow-gray-800">
                        {caseStudy.title}
                      </h4>
                      <p className="text-bizflow-gray-600 text-sm mb-4">
                        {caseStudy.description}
                      </p>
                      <ul className="space-y-2 mb-4 flex-grow">
                        {caseStudy.results.map((result, idx) => (
                          <li key={idx} className="text-sm text-bizflow-gray-600 flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-bizflow-blue-500" />
                            {result}
                          </li>
                        ))}
                      </ul>
                      <Link 
                        href={caseStudy.link}
                        className="text-bizflow-blue-600 font-medium inline-flex items-center group text-sm mt-auto"
                      >
                        Ver caso completo
                        <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
} 
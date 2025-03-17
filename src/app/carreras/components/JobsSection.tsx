"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Briefcase, Filter, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'

// Datos de ejemplo para las vacantes
const jobOpenings = [
  {
    id: 1,
    title: "Ingeniero Full-Stack para Sector Salud",
    description: "Desarrolla apps de trazabilidad médica integradas con SAP. Requisito: Curiosidad por aprender normas FDA.",
    location: "Lima, Perú (Híbrido)",
    department: "Desarrollo",
    industry: "Salud",
    technologies: ["React", "Node.js", "SAP", "TypeScript"],
    type: "Tiempo completo",
    remote: "Híbrido",
    slug: "ingeniero-full-stack-salud"
  },
  {
    id: 2,
    title: "Especialista en IoT para Minería",
    description: "Diseña soluciones de monitoreo predictivo para maquinaria pesada. Experiencia en Python + ganas de visitar minas.",
    location: "Santiago, Chile (Híbrido)",
    department: "IoT",
    industry: "Minería",
    technologies: ["Python", "AWS IoT", "MQTT", "TensorFlow"],
    type: "Tiempo completo",
    remote: "Híbrido",
    slug: "especialista-iot-mineria"
  },
  {
    id: 3,
    title: "Project Manager con Experiencia Operativa",
    description: "Gestiona implementaciones en plantas de energía. Ideal si has trabajado en mantenimiento o producción.",
    location: "Ciudad de México (Híbrido)",
    department: "Gestión de Proyectos",
    industry: "Energía",
    technologies: ["JIRA", "MS Project", "Agile", "Scrum"],
    type: "Tiempo completo",
    remote: "Híbrido",
    slug: "project-manager-energia"
  },
  {
    id: 4,
    title: "Desarrollador Frontend React",
    description: "Crea interfaces de usuario para aplicaciones de monitoreo industrial. Experiencia en visualización de datos en tiempo real.",
    location: "Remoto (LATAM)",
    department: "Desarrollo",
    industry: "Múltiples",
    technologies: ["React", "TypeScript", "D3.js", "Tailwind CSS"],
    type: "Tiempo completo",
    remote: "Remoto",
    slug: "desarrollador-frontend-react"
  },
  {
    id: 5,
    title: "Ingeniero DevOps",
    description: "Implementa y mantén infraestructura para aplicaciones críticas en entornos industriales. Experiencia en CI/CD y cloud.",
    location: "Bogotá, Colombia (Híbrido)",
    department: "Infraestructura",
    industry: "Múltiples",
    technologies: ["AWS", "Kubernetes", "Docker", "Terraform"],
    type: "Tiempo completo",
    remote: "Híbrido",
    slug: "ingeniero-devops"
  },
  {
    id: 6,
    title: "Analista de Datos para Logística",
    description: "Desarrolla modelos predictivos para optimizar cadenas de suministro en industrias pesadas.",
    location: "Buenos Aires, Argentina (Híbrido)",
    department: "Analítica",
    industry: "Logística",
    technologies: ["Python", "SQL", "Power BI", "Machine Learning"],
    type: "Tiempo completo",
    remote: "Híbrido",
    slug: "analista-datos-logistica"
  }
]

const JobsSection = () => {
  const [activeTab, setActiveTab] = useState("all")
  const [activeFilter, setActiveFilter] = useState("all")
  
  // Filtrar trabajos según la pestaña y filtro activos
  const filteredJobs = jobOpenings.filter(job => {
    if (activeTab !== "all" && job.department !== activeTab) return false
    if (activeFilter !== "all" && job.industry !== activeFilter) return false
    return true
  })

  return (
    <section id="oportunidades" className="py-20 bg-bizflow-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-bizflow-gray-900 mb-6">
            Busca tu rol: ¿Eres más de código, de campo o de ambos?
          </h2>
          <p className="text-lg text-bizflow-gray-600">
            Explora nuestras oportunidades actuales y encuentra el rol que mejor se adapte a tus habilidades y aspiraciones.
          </p>
        </motion.div>

        <div className="mb-8">
          <Tabs defaultValue="all" onValueChange={setActiveTab}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <TabsList className="bg-white">
                <TabsTrigger value="all">Todos</TabsTrigger>
                <TabsTrigger value="Desarrollo">Desarrollo</TabsTrigger>
                <TabsTrigger value="IoT">IoT</TabsTrigger>
                <TabsTrigger value="Gestión de Proyectos">Gestión</TabsTrigger>
                <TabsTrigger value="Analítica">Analítica</TabsTrigger>
              </TabsList>
              
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-bizflow-gray-500" />
                <select 
                  className="bg-white border border-bizflow-gray-200 rounded-md px-3 py-2 text-sm"
                  value={activeFilter}
                  onChange={(e) => setActiveFilter(e.target.value)}
                >
                  <option value="all">Todas las industrias</option>
                  <option value="Minería">Minería</option>
                  <option value="Salud">Salud</option>
                  <option value="Energía">Energía</option>
                  <option value="Logística">Logística</option>
                  <option value="Múltiples">Múltiples</option>
                </select>
              </div>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredJobs.map((job, index) => (
                  <JobCard key={job.id} job={job} index={index} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="Desarrollo" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredJobs.map((job, index) => (
                  <JobCard key={job.id} job={job} index={index} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="IoT" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredJobs.map((job, index) => (
                  <JobCard key={job.id} job={job} index={index} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="Gestión de Proyectos" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredJobs.map((job, index) => (
                  <JobCard key={job.id} job={job} index={index} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="Analítica" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredJobs.map((job, index) => (
                  <JobCard key={job.id} job={job} index={index} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-bizflow-gray-600 mb-6">
            ¿No encuentras el rol perfecto? Envíanos tu CV y te contactaremos cuando surja una oportunidad que se ajuste a tu perfil.
          </p>
          <Button asChild className="bg-bizflow-blue-600 hover:bg-bizflow-blue-700 text-white">
            <Link href="#contact-form">Enviar CV espontáneo</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

// Componente para mostrar una tarjeta de trabajo
const JobCard = ({ job, index }: { job: any, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full flex flex-col hover:shadow-md transition-shadow">
        <CardHeader className="pb-3">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-bold text-bizflow-gray-900">
                {job.title}
              </h3>
              <div className="flex items-center text-sm text-bizflow-gray-500 mt-1">
                <MapPin className="h-4 w-4 mr-1" />
                {job.location}
              </div>
            </div>
            <Badge variant="outline" className="bg-bizflow-blue-50 text-bizflow-blue-700 border-bizflow-blue-200">
              {job.industry}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="pb-4 flex-grow">
          <p className="text-bizflow-gray-600 mb-4">
            {job.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {job.technologies.map((tech: string, i: number) => (
              <Badge key={i} variant="secondary" className="bg-bizflow-gray-100">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="pt-0 flex justify-between items-center">
          <div className="flex items-center">
            <Briefcase className="h-4 w-4 text-bizflow-gray-500 mr-2" />
            <span className="text-sm text-bizflow-gray-500">{job.remote}</span>
          </div>
          <Link 
            href={`/carreras/${job.slug}`}
            className="text-bizflow-blue-600 font-medium flex items-center hover:text-bizflow-blue-700 transition-colors"
          >
            Ver detalles <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

export default JobsSection 
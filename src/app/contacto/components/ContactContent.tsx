"use client"

import { motion } from 'framer-motion'
import { MapPin, Mail, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'

interface OfficeLocation {
  region: string
  countries: {
    name: string
    city: string
    address: string
    phone: string
    email: string
  }[]
  description: string
}

const officeLocations: OfficeLocation[] = [
  {
    region: "Norteamérica",
    countries: [
      {
        name: "Estados Unidos",
        city: "Miami, FL",
        address: "1001 Brickell Bay Drive, Suite 2700",
        phone: "+1 (305) 555-0123",
        email: "us@bizflow.com"
      },
      {
        name: "Canadá",
        city: "Toronto, ON",
        address: "40 King Street West, Suite 2700",
        phone: "+1 (416) 555-0123",
        email: "canada@bizflow.com"
      }
    ],
    description: "Centro de innovación y desarrollo de soluciones industriales para Norte América"
  },
  {
    region: "Centroamérica",
    countries: [
      {
        name: "Costa Rica",
        city: "San José",
        address: "Santa Ana, Forum 2, Edificio F",
        phone: "+506 2203-5959",
        email: "cr@bizflow.com"
      }
    ],
    description: "Hub tecnológico para la región centroamericana"
  },
  {
    region: "Sudamérica",
    countries: [
      {
        name: "Perú",
        city: "Lima",
        address: "Av. El Derby 055, Torre 1, Piso 7, Santiago de Surco",
        phone: "+51 (1) 555-0123",
        email: "peru@bizflow.com"
      },
      {
        name: "Chile",
        city: "Santiago",
        address: "Av. Apoquindo 4700, Piso 11, Las Condes",
        phone: "+56 (2) 555-0123",
        email: "chile@bizflow.com"
      },
      {
        name: "Colombia",
        city: "Bogotá",
        address: "Cra. 7 #71-21, Torre B, Piso 10",
        phone: "+57 (1) 555-0123",
        email: "colombia@bizflow.com"
      }
    ],
    description: "Presencia estratégica en los principales mercados industriales de Sudamérica"
  }
]

export default function ContactContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 md:py-40 pb-16 md:pb-20 overflow-hidden bg-white">
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-bizflow-primary mb-6">
              Presencia Internacional
            </h1>
            <p className="text-xl text-bizflow-gray-600">
              Estamos presentes en las principales regiones industriales de América, 
              brindando soluciones de transformación digital a empresas líderes.
            </p>
          </motion.div>
        </div>
        
        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 0.5 }}
          className="absolute top-0 left-0 w-full h-full"
        >
          <div className="absolute top-10 left-10 w-72 h-72 bg-bizflow-primary rounded-full filter blur-3xl opacity-20" />
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-bizflow-secondary rounded-full filter blur-3xl opacity-20" />
        </motion.div>
      </section>

      {/* Locations Grid */}
      <section className="py-16 bg-bizflow-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {officeLocations.map((location, index) => (
              <motion.div
                key={location.region}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="p-6 h-full">
                  <div className="flex flex-col h-full">
                    <h2 className="text-2xl font-bold text-bizflow-primary mb-4">
                      {location.region}
                    </h2>
                    <p className="text-bizflow-gray-600 mb-6">
                      {location.description}
                    </p>
                    <div className="space-y-6 flex-grow">
                      {location.countries.map((country) => (
                        <div key={country.name} className="border-t pt-4">
                          <h3 className="font-semibold text-lg mb-2">{country.name}</h3>
                          <div className="space-y-2 text-sm text-bizflow-gray-600">
                            <div className="flex items-start gap-2">
                              <MapPin className="w-5 h-5 text-bizflow-primary shrink-0 mt-1" />
                              <div>
                                <p>{country.city}</p>
                                <p>{country.address}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Phone className="w-4 h-4 text-bizflow-primary" />
                              <p>{country.phone}</p>
                            </div>
                            <div className="flex items-center gap-2">
                              <Mail className="w-4 h-4 text-bizflow-primary" />
                              <p>{country.email}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">
              ¿Listo para transformar tu industria?
            </h2>
            <p className="text-lg text-bizflow-gray-600 mb-8">
              Nuestro equipo de expertos está disponible para ayudarte en tu proceso de transformación digital.
            </p>
            <div className="flex justify-center gap-4">
              <Button 
                size="lg" 
                variant="default"
                className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white"
                asChild
              >
                <Link href="/demo">
                  Solicitar Demo
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb]/10"
                asChild
              >
                <Link href="/contacto/agendar">
                  Agendar Llamada
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
} 
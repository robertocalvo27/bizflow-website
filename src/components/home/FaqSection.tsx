"use client"

import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { AlertTriangle, CheckCircle2 } from 'lucide-react'

const faqs = [
  {
    question: "Nuestros reportes se hacen en Excel y es imposible mantenerlos actualizados. ¿Cómo pueden ayudarnos?",
    answer: (
      <div className="space-y-4">
        <p>Reemplazamos sus hojas de cálculo con software operativo en tiempo real.</p>
        <div className="flex items-start gap-2">
          <CheckCircle2 className="h-5 w-5 text-bizflow-purple-400 shrink-0 mt-1" />
          <p>En Smith & Nephew, automatizamos el control de producción hora x hora, eliminando errores y reduciendo un 30% el tiempo de reportes.</p>
        </div>
        <div className="flex items-start gap-2">
          <CheckCircle2 className="h-5 w-5 text-bizflow-purple-400 shrink-0 mt-1" />
          <p>No necesita conocimientos técnicos: nosotros lo implementamos y su equipo solo usará una interfaz sencilla.</p>
        </div>
      </div>
    )
  },
  {
    question: "Nuestra área de TI está saturada y no prioriza nuestras necesidades. ¿Podemos avanzar sin depender de ellos?",
    answer: (
      <div className="space-y-4">
        <p>Sí. Somos su equipo externo especializado en operaciones.</p>
        <div className="flex items-start gap-2">
          <CheckCircle2 className="h-5 w-5 text-bizflow-purple-400 shrink-0 mt-1" />
          <p>En Ferreyros, el departamento de mantenimiento implementó un sistema de gestión de activos críticos sin involucrar a TI, usando nuestra plataforma en la nube.</p>
        </div>
        <div className="flex items-start gap-2">
          <CheckCircle2 className="h-5 w-5 text-bizflow-purple-400 shrink-0 mt-1" />
          <p>Nosotros nos encargamos de la infraestructura, seguridad y soporte.</p>
        </div>
      </div>
    )
  },
  {
    question: "Tenemos sistemas como SAP, pero seguimos usando Excel para procesos clave. ¿Es posible integrarlos?",
    answer: (
      <div className="space-y-4">
        <p>Absolutamente. Conectamos sus herramientas actuales (SAP, Oracle, MES) con soluciones personalizadas.</p>
        <div className="flex items-start gap-2">
          <CheckCircle2 className="h-5 w-5 text-bizflow-purple-400 shrink-0 mt-1" />
          <p>En Smith & Nephew, integramos SAP con un módulo de trazabilidad médica que antes manejaban en Excel, cumpliendo FDA y ahorrando 15 horas semanales en auditorías.</p>
        </div>
      </div>
    )
  },
  {
    question: "¿Qué pasa con áreas como RRHH o Seguridad, que no son prioridad para desarrollo de software?",
    answer: (
      <div className="space-y-4">
        <p>Las digitalizamos en semanas, sin burocracia.</p>
        <div className="flex items-start gap-2">
          <CheckCircle2 className="h-5 w-5 text-bizflow-purple-400 shrink-0 mt-1" />
          <p>Automatizamos informes de seguridad ocupacional para Antamina, reduciendo incidentes en un 40%.</p>
        </div>
        <div className="flex items-start gap-2">
          <CheckCircle2 className="h-5 w-5 text-bizflow-purple-400 shrink-0 mt-1" />
          <p>Implementamos un portal de RRHH para gestionar turnos en plantas médicas, validado por compliance.</p>
        </div>
        <div className="flex items-start gap-2">
          <CheckCircle2 className="h-5 w-5 text-bizflow-purple-400 shrink-0 mt-1" />
          <p>No necesitamos presupuestos millonarios: entregamos valor desde el primer sprint.</p>
        </div>
      </div>
    )
  },
  {
    question: "Temo que la implementación sea larga y paralice nuestra operación.",
    answer: (
      <div className="space-y-4">
        <p>Entregamos prototipos funcionales en 5 días y hacemos implementaciones graduales.</p>
        <div className="flex items-start gap-2">
          <CheckCircle2 className="h-5 w-5 text-bizflow-purple-400 shrink-0 mt-1" />
          <p>En FIFCO, migramos su control de producción a una app móvil sin detener la planta.</p>
        </div>
        <div className="flex items-start gap-2">
          <CheckCircle2 className="h-5 w-5 text-bizflow-purple-400 shrink-0 mt-1" />
          <p>Su operación sigue funcionando... pero sin Excel.</p>
        </div>
      </div>
    )
  },
  {
    question: "¿Cómo garantizan que entenderán nuestra industria?",
    answer: (
      <div className="space-y-4">
        <p>Porque hemos trabajado en ella. Nuestro equipo incluye:</p>
        <div className="flex items-start gap-2">
          <CheckCircle2 className="h-5 w-5 text-bizflow-purple-400 shrink-0 mt-1" />
          <p>Ingenieros con experiencia en minas subterráneas.</p>
        </div>
        <div className="flex items-start gap-2">
          <CheckCircle2 className="h-5 w-5 text-bizflow-purple-400 shrink-0 mt-1" />
          <p>Expertos en compliance médico (FDA 21 CFR Part 11).</p>
        </div>
        <div className="flex items-start gap-2">
          <CheckCircle2 className="h-5 w-5 text-bizflow-purple-400 shrink-0 mt-1" />
          <p>Especialistas en logística de alta tecnología.</p>
        </div>
        <p className="text-bizflow-blue-100">No le pediremos que nos explique su operación: ya la conocemos.</p>
      </div>
    )
  }
]

const FaqSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-bizflow-blue-900 to-bizflow-purple-900 bg-clip-text text-transparent">
              ¿Tiene estos desafíos en su operación?
            </h2>
            <p className="text-lg md:text-xl text-bizflow-blue-700">
              Nosotros los resolvemos
            </p>
          </div>

          <div className="rounded-2xl">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`} 
                  className="border border-bizflow-blue-100 rounded-lg mb-4 overflow-hidden hover:border-bizflow-purple-400 transition-colors"
                >
                  <AccordionTrigger className="text-left px-6 py-4 hover:bg-bizflow-purple-50">
                    <div className="flex items-start gap-3 pr-8">
                      <AlertTriangle className="h-5 w-5 text-bizflow-purple-500 shrink-0 mt-1" />
                      <span className="text-bizflow-blue-900 font-medium">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-bizflow-blue-700 px-6 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FaqSection 
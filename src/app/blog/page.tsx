import { Metadata } from 'next'
import BlogHeader from './components/BlogHeader'
import BlogSearch from './components/BlogSearch'
import BlogCategories from './components/BlogCategories'
import BlogList from './components/BlogList'

// JSON-LD Schema Component para el listado del blog
function BlogListJsonLd() {
  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    'headline': 'Blog | Bizflow - Conocimiento y Tendencias en Tecnología Industrial',
    'description': 'Explore nuestros artículos sobre transformación digital, IoT industrial, automatización y las últimas tendencias en tecnología para la industria.',
    'url': 'https://bizflow.pe/blog',
    'publisher': {
      '@type': 'Organization',
      'name': 'Bizflow',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://bizflow.pe/images/logo.svg'
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
    />
  );
}

export const metadata: Metadata = {
  title: 'Blog | Bizflow - Conocimiento y Tendencias en Tecnología Industrial',
  description: 'Explore nuestros artículos sobre transformación digital, IoT industrial, automatización y las últimas tendencias en tecnología para la industria.',
}

// Datos de ejemplo para los artículos del blog
const blogPosts = [
  {
    id: 1,
    title: 'Transformación Digital en la Industria 4.0',
    excerpt: 'Descubra cómo la transformación digital está revolucionando los procesos industriales y mejorando la eficiencia operativa.',
    author: 'Carlos Rodríguez',
    date: '15 Mar 2023',
    category: 'Transformación Digital',
    image: '/images/blog/digital-transformation.svg',
    slug: 'transformacion-digital-industria-4-0'
  },
  {
    id: 2,
    title: 'Implementación de IoT en Entornos Industriales',
    excerpt: 'Estrategias efectivas para implementar soluciones IoT que optimicen sus operaciones y reduzcan costos operativos.',
    author: 'María González',
    date: '28 Feb 2023',
    category: 'IoT Industrial',
    image: '/images/blog/industrial-iot.svg',
    slug: 'implementacion-iot-entornos-industriales'
  },
  {
    id: 3,
    title: 'Mantenimiento Predictivo: El Futuro de la Industria',
    excerpt: 'Cómo el mantenimiento predictivo basado en datos está transformando la gestión de activos industriales.',
    author: 'Javier Méndez',
    date: '10 Feb 2023',
    category: 'Mantenimiento',
    image: '/images/blog/predictive-maintenance.svg',
    slug: 'mantenimiento-predictivo-futuro-industria'
  },
  {
    id: 4,
    title: 'Automatización de Procesos Industriales',
    excerpt: 'Guía completa para implementar soluciones de automatización que mejoren la productividad y reduzcan errores.',
    author: 'Ana Martínez',
    date: '5 Feb 2023',
    category: 'Automatización',
    image: '/images/blog/automation.svg',
    slug: 'automatizacion-procesos-industriales'
  },
  {
    id: 5,
    title: 'Ciberseguridad en Entornos Industriales',
    excerpt: 'Proteja sus operaciones industriales contra amenazas cibernéticas con estas estrategias efectivas.',
    author: 'Roberto Sánchez',
    date: '20 Ene 2023',
    category: 'Ciberseguridad',
    image: '/images/blog/cybersecurity.svg',
    slug: 'ciberseguridad-entornos-industriales'
  },
  {
    id: 6,
    title: 'Analítica de Datos para Optimizar Operaciones',
    excerpt: 'Cómo utilizar la analítica de datos para identificar oportunidades de mejora en sus procesos industriales.',
    author: 'Laura Gómez',
    date: '10 Ene 2023',
    category: 'Analítica',
    image: '/images/blog/data-analytics.svg',
    slug: 'analitica-datos-optimizar-operaciones'
  }
]

// Categorías para el filtrado
const categories = [
  { id: 1, name: 'Transformación Digital', count: 8 },
  { id: 2, name: 'IoT Industrial', count: 5 },
  { id: 3, name: 'Mantenimiento', count: 4 },
  { id: 4, name: 'Automatización', count: 7 },
  { id: 5, name: 'Ciberseguridad', count: 3 },
  { id: 6, name: 'Analítica', count: 6 }
]

export default function BlogPage() {
  return (
    <>
      <BlogListJsonLd />
      <main className="min-h-screen pt-24">
        <BlogHeader />
        
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar con búsqueda y categorías */}
            <div className="lg:col-span-1 space-y-8">
              <BlogSearch />
              <BlogCategories categories={categories} />
            </div>
            
            {/* Lista de artículos */}
            <div className="lg:col-span-3">
              <BlogList posts={blogPosts} />
            </div>
          </div>
        </div>
      </main>
    </>
  )
} 
import { Metadata } from 'next'
import BlogPostHeader from '../components/BlogPostHeader'
import BlogPostContent from '../components/BlogPostContent'
import BlogRelatedPosts from '../components/BlogRelatedPosts'

// Datos de ejemplo para los artículos del blog
const blogPosts = [
  {
    id: 1,
    title: 'Transformación Digital en la Industria 4.0',
    excerpt: 'Descubra cómo la transformación digital está revolucionando los procesos industriales y mejorando la eficiencia operativa.',
    content: `
      <p>La transformación digital en la industria 4.0 representa un cambio fundamental en la forma en que las empresas manufactureras operan y entregan valor a sus clientes. Esta revolución industrial, impulsada por tecnologías como la inteligencia artificial, el Internet de las Cosas (IoT), la computación en la nube y los sistemas ciberfísicos, está redefiniendo los procesos de producción y las cadenas de suministro en todo el mundo.</p>
      
      <h2>¿Qué es la Industria 4.0?</h2>
      
      <p>La Industria 4.0, también conocida como la cuarta revolución industrial, se refiere a la tendencia actual de automatización e intercambio de datos en tecnologías de fabricación. Incluye sistemas ciberfísicos, Internet de las Cosas, computación en la nube y computación cognitiva, creando lo que se ha llamado una "fábrica inteligente".</p>
      
      <p>En el núcleo de la Industria 4.0 está la idea de que las máquinas y los sistemas pueden comunicarse entre sí y con los humanos en tiempo real, permitiendo una toma de decisiones más informada y eficiente.</p>
      
      <h2>Beneficios de la Transformación Digital en la Industria</h2>
      
      <p>La implementación de tecnologías digitales en entornos industriales ofrece numerosos beneficios:</p>
      
      <ul>
        <li><strong>Mayor eficiencia operativa:</strong> La automatización y optimización de procesos reduce los tiempos de inactividad y aumenta la productividad.</li>
        <li><strong>Mejora de la calidad:</strong> Los sistemas de control de calidad basados en datos pueden identificar y corregir problemas antes de que afecten al producto final.</li>
        <li><strong>Reducción de costos:</strong> La optimización de recursos y la prevención de fallos conducen a importantes ahorros de costos.</li>
        <li><strong>Mayor flexibilidad:</strong> Las fábricas inteligentes pueden adaptarse rápidamente a cambios en la demanda o en las especificaciones del producto.</li>
        <li><strong>Sostenibilidad mejorada:</strong> La optimización de procesos conduce a un menor consumo de energía y recursos.</li>
      </ul>
      
      <h2>Tecnologías Clave en la Transformación Digital Industrial</h2>
      
      <p>Varias tecnologías están impulsando la transformación digital en la industria:</p>
      
      <h3>1. Internet de las Cosas Industrial (IIoT)</h3>
      
      <p>El IIoT implica conectar máquinas, dispositivos y sensores a Internet, permitiendo la recopilación y el análisis de datos en tiempo real. Esto facilita el monitoreo remoto, el mantenimiento predictivo y la optimización de procesos.</p>
      
      <h3>2. Inteligencia Artificial y Machine Learning</h3>
      
      <p>Los algoritmos de IA pueden analizar grandes cantidades de datos para identificar patrones, predecir fallos y optimizar procesos. El machine learning permite que los sistemas mejoren continuamente sin intervención humana.</p>
      
      <h3>3. Gemelos Digitales</h3>
      
      <p>Un gemelo digital es una réplica virtual de un objeto o sistema físico. Permite simular y probar cambios en un entorno virtual antes de implementarlos en el mundo real, reduciendo riesgos y costos.</p>
      
      <h3>4. Robótica Avanzada</h3>
      
      <p>Los robots colaborativos (cobots) y los sistemas autónomos están transformando las líneas de producción, trabajando junto a humanos o realizando tareas peligrosas o repetitivas.</p>
      
      <h2>Desafíos en la Implementación</h2>
      
      <p>A pesar de sus beneficios, la transformación digital en la industria presenta varios desafíos:</p>
      
      <ul>
        <li><strong>Inversión inicial:</strong> La implementación de nuevas tecnologías puede requerir una inversión significativa.</li>
        <li><strong>Resistencia al cambio:</strong> Los empleados pueden resistirse a nuevos procesos o temer por sus trabajos.</li>
        <li><strong>Seguridad cibernética:</strong> La conectividad aumentada crea nuevas vulnerabilidades que deben abordarse.</li>
        <li><strong>Integración de sistemas:</strong> Conectar sistemas nuevos con infraestructura existente puede ser complejo.</li>
        <li><strong>Escasez de habilidades:</strong> Puede ser difícil encontrar personal con las habilidades necesarias para implementar y gestionar nuevas tecnologías.</li>
      </ul>
      
      <h2>Conclusión</h2>
      
      <p>La transformación digital en la industria 4.0 representa una oportunidad sin precedentes para las empresas manufactureras para mejorar su eficiencia, calidad y competitividad. Aunque la implementación puede presentar desafíos, los beneficios potenciales son enormes.</p>
      
      <p>Las empresas que adopten estas tecnologías y se adapten a este nuevo paradigma estarán mejor posicionadas para prosperar en el futuro de la fabricación. La clave está en desarrollar una estrategia clara, invertir en las tecnologías adecuadas y asegurarse de que su fuerza laboral esté preparada para el cambio.</p>
    `,
    author: 'Carlos Rodríguez',
    authorPosition: 'Director de Transformación Digital',
    authorImage: '/images/team/carlos-rodriguez.jpg',
    date: '15 Mar 2023',
    category: 'Transformación Digital',
    image: '/images/blog/digital-transformation.jpg',
    slug: 'transformacion-digital-industria-4-0'
  }
]

// Datos de ejemplo para artículos relacionados
const relatedPosts = [
  {
    id: 2,
    title: 'Implementación de IoT en Entornos Industriales',
    excerpt: 'Estrategias efectivas para implementar soluciones IoT que optimicen sus operaciones y reduzcan costos operativos.',
    author: 'María González',
    date: '28 Feb 2023',
    category: 'IoT Industrial',
    image: '/images/blog/industrial-iot.jpg',
    slug: 'implementacion-iot-entornos-industriales'
  },
  {
    id: 4,
    title: 'Automatización de Procesos Industriales',
    excerpt: 'Guía completa para implementar soluciones de automatización que mejoren la productividad y reduzcan errores.',
    author: 'Ana Martínez',
    date: '5 Feb 2023',
    category: 'Automatización',
    image: '/images/blog/automation.jpg',
    slug: 'automatizacion-procesos-industriales'
  },
  {
    id: 6,
    title: 'Analítica de Datos para Optimizar Operaciones',
    excerpt: 'Cómo utilizar la analítica de datos para identificar oportunidades de mejora en sus procesos industriales.',
    author: 'Laura Gómez',
    date: '10 Ene 2023',
    category: 'Analítica',
    image: '/images/blog/data-analytics.jpg',
    slug: 'analitica-datos-optimizar-operaciones'
  }
]

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  // En un caso real, aquí buscaríamos el artículo en la base de datos o API
  const post = blogPosts.find(post => post.slug === params.slug)
  
  if (!post) {
    return {
      title: 'Artículo no encontrado | Blog Bizflow',
      description: 'El artículo que busca no se encuentra disponible.'
    }
  }
  
  return {
    title: `${post.title} | Blog Bizflow`,
    description: post.excerpt
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // En un caso real, aquí buscaríamos el artículo en la base de datos o API
  const post = blogPosts.find(post => post.slug === params.slug)
  
  if (!post) {
    return (
      <main className="min-h-screen pt-24">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold text-bizflow-gray-900">
            Artículo no encontrado
          </h1>
          <p className="text-bizflow-gray-600 mt-4">
            El artículo que busca no se encuentra disponible.
          </p>
        </div>
      </main>
    )
  }
  
  return (
    <main className="min-h-screen pt-24">
      <BlogPostHeader post={post} />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Contenido principal */}
          <div className="lg:col-span-3">
            <BlogPostContent content={post.content} />
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Aquí podrían ir widgets como categorías populares, newsletter, etc. */}
          </div>
        </div>
        
        {/* Artículos relacionados */}
        <BlogRelatedPosts posts={relatedPosts} />
      </div>
    </main>
  )
} 
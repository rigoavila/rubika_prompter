/*
* =================================================================================================
* INSTRUCTIONS FOR EDITING
* =================================================================================================
*
* ¡Hola! Este archivo centraliza todo el contenido de la landing page.
* Para editar cualquier texto, simplemente modifica el valor de la constante correspondiente.
*
* - `META_DATA`: Controla el título y la descripción que aparecen en Google y al compartir en redes.
* - `SOCIAL_LINKS`: Contiene los enlaces a las redes sociales del footer.
* - `NAV_LINKS`: Define los enlaces de anclaje en la barra de navegación.
* - `HERO_COPY`: Textos para la sección principal (título, subtítulo, botones).
* - `BENEFITS_COPY`: Lista de beneficios. Cada objeto es una tarjeta.
* - `HOW_IT_WORKS_COPY`: Pasos del proceso "Cómo funciona".
* - `TESTIMONIALS_COPY`: Testimonios de clientes.
* - `PACKS_GRID_COPY`: Módulos o packs destacados.
* - `FAQ_COPY`: Preguntas y respuestas frecuentes.
* - `FINAL_CTA_COPY`: Textos para la llamada a la acción final.
* - `FOOTER_COPY`: Texto legal del pie de página.
*
* ¡No necesitas tocar el código de los componentes para cambiar los textos!
*
*/

// SEO & METADATA
export const META_DATA = {
  title: "Prompt Architect — Rubika Learning Tools",
  description: "Set de prompts listos para vender, validar y escalar tu emprendimiento. No alcanza solo con pagar IA; hay que saber usarla también.",
  ogImage: "https://example.com/og-image-rubika.jpg" // Placeholder OG image
};

// SOCIAL LINKS
export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/company/rubika-networking",
  instagram: "https://www.instagram.com/rubikaia",
  youtube: "https://www.youtube.com/channel/UCRUzuodhlDoFVYtB"
};

// NAVIGATION
export const NAV_LINKS = [
  { name: "Beneficios", href: "#beneficios" },
  { name: "Cómo funciona", href: "#como-funciona" },
  { name: "Testimonios", href: "#testimonios" },
  { name: "FAQ", href: "#faq" },
];

// HERO SECTION
export const HERO_COPY = {
  h1: "Prompt Architect: domina la IA con prompts listos para convertir",
  subtitle: "No alcanza solo con pagar IA; hay que saber usarla también. Plantillas prácticas para vender, validar y escalar tu negocio digital.",
  ctaPrimary: "Empezar a utilizar",
  ctaSecondary: "Ver demo"
};

// BENEFITS SECTION
export const BENEFITS_COPY = [
  {
    title: "Velocidad y claridad",
    description: "Briefs y prompts listos para usar, sin humo. Directo a la ejecución.",
    icon: "Rocket" // Icon name from lucide-react
  },
  {
    title: "Cobertura 360°",
    description: "Marketing, ventas, producto, contenidos y automatizaciones. Todo en un solo lugar.",
    icon: "Orbit"
  },
  {
    title: "Resultados medibles",
    description: "Enfoque total en objetivos de negocio, métricas y KPIs para optimizar.",
    icon: "Target"
  },
  {
    title: "Ahorro de tiempo y dinero",
    description: "Menos iteraciones, menos curvas de aprendizaje, más ejecución efectiva.",
    icon: "Timer"
  },
  {
    title: "Escalable y actualizable",
    description: "Pensado para crecer desde una idea hasta equipos, con nuevos packs de prompts.",
    icon: "TrendingUp"
  },
    {
    title: "Contenido que vende",
    description: "Genera anuncios, emails, páginas de venta y más, con foco en la conversión.",
    icon: "ShoppingCart"
  }
];

// HOW IT WORKS SECTION
export const HOW_IT_WORKS_COPY = {
    title: "Cómo funciona",
    steps: [
        {
            name: "Elige tu objetivo",
            description: "Define qué quieres lograr: vender, validar, lanzar, escalar, etc."
        },
        {
            name: "Personaliza con inputs",
            description: "Completa 3-5 campos clave sobre tu negocio, producto o cliente."
        },
        {
            name: "Ejecuta y Mide",
            description: "Copia el prompt, úsalo en tu IA de preferencia y mide los resultados."
        }
    ]
};

// TESTIMONIALS SECTION
export const TESTIMONIALS_COPY = [
  {
    quote: "En 10 días armé mi MVP y validé la idea con los primeros 50 leads cualificados. Impresionante.",
    name: "Sofía G.",
    role: "Fundadora, E-commerce de Moda",
    result: "+35% leads en 2 semanas"
  },
  {
    quote: "Duplicamos la tasa de respuesta en nuestra prospección en frío. Los prompts para ventas son oro puro.",
    name: "Nicolás R.",
    role: "Head of Sales, B2B SaaS",
    result: "2x tasa de respuesta"
  },
  {
    quote: "Dejamos de improvisar en la creación de contenido. Ahora tenemos un flujo de trabajo claro y los resultados de SEO lo demuestran.",
    name: "Ana L.",
    role: "Marketing Manager, Startup EdTech",
    result: "+50% tráfico orgánico"
  }
];

// PACKS GRID SECTION
export const PACKS_GRID_COPY = {
  title: "Módulos y Packs Destacados",
  packs: [
    { name: "Buyer Persona & Propuesta de Valor", description: "Define a tu cliente y tu mensaje central.", cta: "Ver prompts" },
    { name: "Campañas y Anuncios", description: "Crea copys para Meta, Google y LinkedIn.", cta: "Ver prompts" },
    { name: "Contenido y SEO", description: "Artículos de blog, guiones y optimización.", cta: "Ver prompts" },
    { name: "Validación y Research", description: "Investiga tu mercado y valida hipótesis.", cta: "Ver prompts" },
    { name: "Producto y Roadmap", description: "Define features y la estrategia de producto.", cta: "Ver prompts" },
    { name: "Ventas y Prospección", description: "Emails en frío, guiones y seguimiento.", cta: "Ver prompts" },
  ]
};

// FAQ SECTION
export const FAQ_COPY = {
  title: "Preguntas Frecuentes",
  questions: [
    {
      question: "¿Qué incluye exactamente Prompt Architect?",
      answer: "Incluye una librería de más de 100 prompts listos para usar, organizados por objetivos de negocio (marketing, ventas, producto, etc.), guías de personalización y acceso a futuras actualizaciones y packs."
    },
    {
      question: "¿Necesito tener experiencia previa en IA o en 'prompting'?",
      answer: "No. Los prompts están diseñados para ser usados directamente. Solo necesitas reemplazar las variables con la información de tu negocio. Es una solución 'copiar y pegar' para obtener resultados rápidos."
    },
    {
      question: "¿Puedo usarlo con cualquier IA como ChatGPT, Claude o Gemini?",
      answer: "Sí. Los prompts son universalmente compatibles con los principales modelos de lenguaje (LLMs). Están probados en ChatGPT (3.5 y 4), Claude 3 y Google Gemini para asegurar su efectividad."
    },
    {
      question: "¿Es adaptable a cualquier industria o tipo de negocio?",
      answer: "Absolutamente. La estructura de los prompts se basa en fundamentos de negocio (problema, solución, cliente, oferta). Al personalizar las variables, los adaptas perfectamente a tu nicho, ya sea B2B, B2C, servicios, software o e-commerce."
    }
  ]
};

// FINAL CTA SECTION
export const FINAL_CTA_COPY = {
  title: "Listo para construir con IA de verdad?",
  cta: "Empezar a utilizar"
};

// FOOTER
export const FOOTER_COPY = {
  legal: "todos los derechos reservados rubika networking 2025"
};

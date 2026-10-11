export interface ServiceItem {
  id: string;
  title: string;
  categoryId: 'software' | 'marketing' | 'sublimacion' | 'formacion';
  shortDescription: string;
  detailedDescription: string;
  iconName: string;
  deliverables: string[];
  kpi: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  industry: string;
  category: string;
  categorySlug: 'software' | 'marketing' | 'sublimacion' | 'formacion';
  image: string;
  summary: string;
  objectives: string[];
  strategies: string[];
  results: {
    value: string;
    label: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  duration: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  industry: string;
  quote: string;
  highlightMetric: string;
  avatarUrl?: string;
  initials: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: 'general' | 'software' | 'marketing' | 'sublimacion' | 'formacion';
  tag?: string;
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'all',
    name: 'Todos los Servicios',
    description: 'Ecosistema integral de creación, ingeniería, producción y formación.',
  },
  {
    id: 'software',
    name: 'Desarrollo de Software',
    description: 'Plataformas web, aplicaciones a medida y automatizaciones escalables.',
  },
  {
    id: 'marketing',
    name: 'Marketing Digital',
    description: 'Estrategias de captación, anuncios de alto rendimiento y redes sociales.',
  },
  {
    id: 'sublimacion',
    name: 'Sublimación & Merchandising',
    description: 'Estampado textil de alta definición, uniformes corporativos y artículos promocionales.',
  },
  {
    id: 'formacion',
    name: 'Formación Académica',
    description: 'Cursos prácticos, bootcamps y talleres presenciales/online para potenciar habilidades.',
  },
];

export const SERVICES: ServiceItem[] = [
  // 1. DESARROLLO DE SOFTWARE
  {
    id: 'software-web',
    title: 'Desarrollo Web & Plataformas a Medida',
    categoryId: 'software',
    shortDescription: 'Aplicaciones web modernas con React, Next.js y arquitecturas seguras y ultrarrápidas pensadas para crecer.',
    detailedDescription: 'Construimos sistemas web escalables desde cero: portales de clientes, paneles de administración, intranets y plataformas SaaS. Priorizamos código limpio, velocidad de carga óptima y diseño responsivo.',
    iconName: 'Code',
    deliverables: [
      'Arquitectura full-stack y diseño de base de datos',
      'Desarrollo frontend en React / TypeScript',
      'Integración con pasarelas de pago y sistemas ERP/CRM',
      'Despliegue en la nube con monitoreo de rendimiento',
    ],
    kpi: '99.9% Disponibilidad y <1s tiempo de carga',
  },
  {
    id: 'software-ecommerce',
    title: 'E-commerce Avanzado & Apps Móviles',
    categoryId: 'software',
    shortDescription: 'Tiendas online personalizadas con flujos de compra sin fricción y aplicaciones móviles para iOS y Android.',
    detailedDescription: 'Desarrollamos tiendas online de alto volumen en Shopify, WooCommerce o soluciones a medida con checkout optimizado, sincronización de inventario en tiempo real y aplicaciones móviles interactivas.',
    iconName: 'Smartphone',
    deliverables: [
      'Desarrollo de tiendas online y catálogos interactivos',
      'Aplicaciones móviles multiplataforma nativas o híbridas',
      'Integración con inventarios y logística en tiempo real',
      'Optimización de pasarelas de pago locales e internacionales',
    ],
    kpi: '+45% Incremento en tasa de conversión técnica',
  },

  // 2. MARKETING DIGITAL
  {
    id: 'marketing-paid',
    title: 'Publicidad Digital & Paid Media (Google & Meta)',
    categoryId: 'marketing',
    shortDescription: 'Campañas de adquisición en Google Ads, Meta Ads y TikTok orientadas a ventas reales y retorno de inversión medible.',
    detailedDescription: 'Diseñamos estrategias de tráfico pago basadas en intención real de compra. Creamos matrices creativas semanales, optimizamos pujas inteligentes y configuramos medición server-side para escalar presupuestos con rentabilidad.',
    iconName: 'TrendingUp',
    deliverables: [
      'Gestión y auditoría de Google Ads (Búsqueda, Shopping, PMax)',
      'Campañas de escala en Meta Ads, Instagram y TikTok',
      'Medición de conversiones server-side y modelos de atribución',
      'Informes transparentes en tiempo real',
    ],
    kpi: '3.8x a 5.2x ROAS promedio sostenido',
  },
  {
    id: 'marketing-social-seo',
    title: 'Redes Sociales, Contenido & SEO',
    categoryId: 'marketing',
    shortDescription: 'Estrategia de contenidos, diseño visual para marcas y posicionamiento orgánico en Google para atraer clientes calificados.',
    detailedDescription: 'Gestionamos la presencia digital de tu negocio con narrativa visual consistente, guiones de vídeo de alto impacto para Reels/TikTok y optimización SEO técnica para que tu web aparezca en los primeros lugares de búsqueda.',
    iconName: 'Sparkles',
    deliverables: [
      'Calendario editorial mensual y diseño de piezas gráficas',
      'Producción y guionizado de vídeos de formato corto',
      'SEO on-page y arquitectura de palabras clave comerciales',
      'Gestión de comunidad y respuesta a prospectos',
    ],
    kpi: '+180% Alcance orgánico calificado',
  },

  // 3. SUBLIMACIÓN & PRODUCCIÓN
  {
    id: 'sublimacion-textil',
    title: 'Sublimación Textil & Uniformes Corporativos',
    categoryId: 'sublimacion',
    shortDescription: 'Estampado textil de alta definición en camisetas, sudaderas, polos y uniformes para empresas y colectivos.',
    detailedDescription: 'Contamos con taller de producción propio equipado con tecnología de sublimación y transfer digital de última generación. Garantizamos fidelidad cromática exacta a tu paleta de marca y resistencia prolongada al lavado.',
    iconName: 'Printer',
    deliverables: [
      'Sublimación full print y estampados localizados de alta resolución',
      'Uniformes corporativos, deportivos y dotaciones para empresas',
      'Selección de textiles técnicos y algodones de alta densidad',
      'Control de calidad pieza por pieza y empaque individual',
    ],
    kpi: '+15,000 Piezas fabricadas sin merma de color',
  },
  {
    id: 'sublimacion-merch',
    title: 'Merchandising & Artículos Promocionales',
    categoryId: 'sublimacion',
    shortDescription: 'Tazas cerámicas, termos, gorras, botellas, lanyards y kits de bienvenida personalizados para eventos y clientes.',
    detailedDescription: 'Materializamos la identidad de tu marca en productos físicos tangibles. Ya sea para regalar a tus clientes, un evento corporativo o comercializar productos de tu propia marca, producimos desde pequeñas tiradas hasta pedidos masivos.',
    iconName: 'Box',
    deliverables: [
      'Tazas, botellas térmicas, termos de acero inoxidable y vasos',
      'Gorras, bolsas tote bag de tela ecológica y llaveros',
      'Kits de bienvenida personalizados para empleados (Welcome Packs)',
      'Asesoramiento en selección de materiales y muestras previas',
    ],
    kpi: 'Tiempos de entrega ágiles desde 48h en pedidos express',
  },

  // 4. FORMACIÓN ACADÉMICA
  {
    id: 'formacion-talleres',
    title: 'Talleres Prácticos de Sublimación & Estampado',
    categoryId: 'formacion',
    shortDescription: 'Aprende la técnica de sublimación desde cero: calibración de planchas térmicas, perfiles de color y cómo crear tu negocio.',
    detailedDescription: 'Capacitaciones 100% prácticas en nuestro taller o en formato virtual. Diseñadas para emprendedores y creadores que desean dominar el uso de prensas térmicas, tintas especiales, software de diseño y costeo de productos.',
    iconName: 'GraduationCap',
    deliverables: [
      'Formación paso a paso con maquinaria y materiales reales',
      'Guía de perfiles de color y resolución óptima de impresión',
      'Plantillas editables de diseño y calculadoras de costes y precios',
      'Certificado de finalización y soporte para resolver dudas',
    ],
    kpi: '+850 Emprendedores formados con taller propio',
  },
  {
    id: 'formacion-digital',
    title: 'Cursos de Marketing Digital, Diseño & Software',
    categoryId: 'formacion',
    shortDescription: 'Programas de capacitación en herramientas digitales, creación de campañas en Meta/Google y diseño con enfoque comercial.',
    detailedDescription: 'Impartimos programas estructurados tanto para particulares como para equipos empresariales in-company. Metodología basada en proyectos reales donde cada participante aprende haciendo y aplicando directamente.',
    iconName: 'BookOpen',
    deliverables: [
      'Módulos de configuración de cuentas publicitarias y públicos',
      'Técnicas de diseño para piezas comerciales de alta conversión',
      'Capacitación in-company personalizada para equipos corporativos',
      'Acceso a grabaciones, materiales y recursos descargables',
    ],
    kpi: '98% Tasa de satisfacción estudiantil',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'velocity-merch',
    title: 'Producción de Merchandising Corporativo & Uniformes',
    client: 'Velocity Solutions',
    industry: 'Empresa Tecnológica & Consultoría',
    category: 'Sublimación & Merchandising',
    categorySlug: 'sublimacion',
    image: '/src/assets/images/case_study_sublimation_1791739628959.jpg',
    duration: '2 semanas',
    summary: 'Diseño y producción en taller de 450 kits corporativos completos (sudaderas, tazas de cerámica, tote bags y botellas térmicas) para su convención anual.',
    objectives: [
      'Garantizar consistencia cromática exacta con el pantone de identidad de Velocity.',
      'Fabricar y despachar 450 lotes en un plazo estricto de 10 días laborables.',
      'Ofrecer materiales con durabilidad superior y acabados de tacto suave.',
    ],
    strategies: [
      'Pruebas previas de colorimetría en tela y cerámica para aprobación formal de dirección.',
      'Proceso de sublimación térmica de alta presión con tintas certificadas anti-decoloración.',
      'Empaque individual con etiquetas personalizadas listas para distribución en el evento.',
      'Control de calidad al 100% de cada prenda y producto final.',
    ],
    results: [
      { value: '450', label: 'Kits completos entregados a tiempo' },
      { value: '100%', label: 'Conformidad de color de marca' },
      { value: '0%', label: 'Tasa de devoluciones o defectos' },
      { value: '48h', label: 'Tiempo de fabricación del lote adicional' },
    ],
    testimonial: {
      quote: 'La calidad del estampado y el acabado de las sudaderas y tazas superó cualquier expectativa. KB Taller Creativo resolvió todo en tiempo récord.',
      author: 'Rodrigo Méndez',
      role: 'Director de Personas en Velocity Solutions',
    },
  },
  {
    id: 'finvantage-software',
    title: 'Plataforma Web a Medida & Portal de Clientes',
    client: 'FinVantage Software',
    industry: 'Fintech & Tecnología B2B',
    category: 'Desarrollo de Software',
    categorySlug: 'software',
    image: '/src/assets/images/case_study_analytics_1791738081226.jpg',
    duration: '3 meses',
    summary: 'Diseño y desarrollo de una plataforma web interactiva con autenticación de usuarios, cuadro de mando financiero en tiempo real y portal de demostraciones.',
    objectives: [
      'Crear un portal moderno y seguro para clientes con tiempo de carga inferior a 1 segundo.',
      'Integrar calculadora financiera y panel de métricas en tiempo real.',
      'Automatizar el registro de prospectos hacia el CRM empresarial.',
    ],
    strategies: [
      'Desarrollo con React, TypeScript y Tailwind CSS con arquitectura de componentes limpia.',
      'Implementación de endpoints REST y seguridad de nivel empresarial.',
      'Diseño UI/UX minimalista enfocado en la simplicidad de uso.',
      'Optimización de infraestructura en la nube para alta disponibilidad.',
    ],
    results: [
      { value: '<0.8s', label: 'Tiempo de carga promedio' },
      { value: '+340%', label: 'Incremento en usuarios registrados' },
      { value: '99.9%', label: 'Disponibilidad operativa continua' },
      { value: '100%', label: 'Integración automática con CRM' },
    ],
    testimonial: {
      quote: 'El equipo de software de KB Taller Creativo entendió exactamente lo que necesitábamos. Entregaron la plataforma antes del plazo acordado y sin errores.',
      author: 'Marcos Valdés',
      role: 'Co-fundador & CEO en FinVantage',
    },
  },
  {
    id: 'leger-marketing',
    title: 'Estrategia de Crecimiento & Campañas Paid Media',
    client: 'Léger Cosméticos',
    industry: 'Comercio Electrónico D2C',
    category: 'Marketing Digital',
    categorySlug: 'marketing',
    image: '/src/assets/images/case_study_branding_1791738090225.jpg',
    duration: '6 meses',
    summary: 'Estrategia integral de marketing digital con campañas publicitarias en Meta Ads y Google Shopping, acompañada de optimización de tasa de conversión.',
    objectives: [
      'Escalar las ventas online manteniendo un retorno publicitario superior a 4x.',
      'Abrir nuevos canales de captación y optimizar el proceso de compra móvil.',
      'Reducir el coste de adquisición de clientes mediante creatividades atractivas.',
    ],
    strategies: [
      'Estructuración de campañas de alta intención en Google y Meta Ads.',
      'Creación de vídeos y piezas gráficas orientadas a destacar beneficios del producto.',
      'Rediseño simplificado del checkout en la tienda online.',
      'Flujos automáticos de email marketing para carritos abandonados.',
    ],
    results: [
      { value: '+214%', label: 'Crecimiento de facturación online' },
      { value: '4.6x', label: 'ROAS sostenido en campañas' },
      { value: '-38%', label: 'Reducción en el Coste por Adquisición' },
      { value: '3.9%', label: 'Tasa final de conversión móvil' },
    ],
    testimonial: {
      quote: 'KB Taller Creativo no solo maneja anuncios; entienden el negocio completo. Su visión estratégica nos permitió triplicar nuestros ingresos.',
      author: 'Elena Morales',
      role: 'Directora de Operaciones en Léger Cosméticos',
    },
  },
  {
    id: 'academia-bootcamp',
    title: 'Bootcamp de Sublimación & Negocios Creativos',
    client: 'Programa Emprende Creativo',
    industry: 'Formación Académica & Emprendimiento',
    category: 'Formación Académica',
    categorySlug: 'formacion',
    image: '/src/assets/images/hero_agency_workspace_1791738071569.jpg',
    duration: '4 semanas (Edición Trimestral)',
    summary: 'Programa intensivo teórico-práctico donde capacitamos a más de 60 emprendedores en el dominio de prensas térmicas, sublimación de textiles y venta digital.',
    objectives: [
      'Enseñar desde cero el manejo técnico de prensas, plotters e insumos de sublimación.',
      'Aprender a calcular costes de producción, mermas y precios de venta competitivos.',
      'Capacitar en creación de catálogos y captación de clientes por redes sociales.',
    ],
    strategies: [
      'Clases prácticas en las estaciones de trabajo de nuestro taller.',
      'Kits de materiales entregados a cada alumno para prácticas directas.',
      'Asesoría individualizada en la creación de marca y catálogo de cada participante.',
      'Comunidad privada de egresados para soporte continuo de proveedores e insumos.',
    ],
    results: [
      { value: '98%', label: 'Tasa de satisfacción del alumnado' },
      { value: '82%', label: 'Alumnos que iniciaron su taller propio' },
      { value: '+60', label: 'Egresados certificados por edición' },
      { value: '100%', label: 'Acceso a red de proveedores verificados' },
    ],
    testimonial: {
      quote: 'Hacer el taller en KB Taller Creativo fue el mejor paso para iniciar mi propio negocio de regalos y uniformes. Enseñas con total honestidad y práctica real.',
      author: 'Carolina Domínguez',
      role: 'Egresada & Fundadora de TextilArt',
    },
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: '1',
    name: 'Rodrigo Méndez',
    role: 'Director de Personas',
    company: 'Velocity Solutions',
    industry: 'Sublimación & Merch',
    quote: 'La calidad del estampado y el acabado de los uniformes y artículos de merchandising superó lo que habíamos visto con otros proveedores. KB Taller Creativo resolvió nuestro evento corporativo con puntualidad y rigor.',
    highlightMetric: '450 Kits corporativos entregados',
    initials: 'RM',
  },
  {
    id: '2',
    name: 'Marcos Valdés',
    role: 'Co-fundador & CEO',
    company: 'FinVantage Solutions',
    industry: 'Desarrollo de Software',
    quote: 'Desarrollaron nuestra plataforma web empresarial en React con una arquitectura limpia y rápida. Entienden tanto la parte técnica como la experiencia visual del usuario.',
    highlightMetric: '<0.8s Carga y 99.9% uptime',
    initials: 'MV',
  },
  {
    id: '3',
    name: 'Elena Morales',
    role: 'Directora de Operaciones',
    company: 'Léger Cosméticos',
    industry: 'Marketing Digital',
    quote: 'Reestructuraron nuestras campañas de anuncios digitales logrando un ROAS de 4.6x sostenido. Su visión multidisciplinar entre diseño, estrategia y conversión es fantástica.',
    highlightMetric: '4.6x ROAS en campañas',
    initials: 'EM',
  },
  {
    id: '4',
    name: 'Carolina Domínguez',
    role: 'Emprendedora & Egresada',
    company: 'TextilArt Studio',
    industry: 'Formación Académica',
    quote: 'El taller práctico de sublimación me dio las herramientas y la confianza para montar mi propio negocio. Te enseñan los secretos reales de la técnica, temperaturas y costes.',
    highlightMetric: 'Taller propio activo en 30 días',
    initials: 'CD',
  },
];

export const FAQS: FaqItem[] = [
  {
    question: '¿Qué servicios integrales ofrece KB Taller Creativo?',
    answer: 'Somos un taller integral multidisciplinar con 4 unidades especializadas: Desarrollo de Software a medida (páginas web, plataformas y apps), Marketing Digital de alto rendimiento (Paid Media en Meta/Google, SEO y embudos), Sublimación & Merchandising físico (estampado textil, uniformes corporativos y artículos promocionales) y Formación Académica (cursos prácticos presenciales y online con maquinaria real).',
    category: 'general',
    tag: 'Ecosistema',
  },
  {
    question: '¿Puedo contratar una solución combinada (ej. Web + Marketing + Uniformes corporativos)?',
    answer: '¡Totalmente! Es nuestra mayor ventaja competitiva. Centralizamos todo en un único equipo de confianza: diseñamos y programamos tu plataforma web o eCommerce, gestionamos las campañas publicitarias para generar clientes y producimos en nuestro taller propio las prendas y merchandising de tu marca sin intermediarios.',
    category: 'general',
    tag: 'Servicios 360°',
  },
  {
    question: '¿Qué tecnologías utilizan en Desarrollo de Software y quién es dueño del código?',
    answer: 'Construimos con estándares modernos como React, TypeScript, Next.js, Node.js y Tailwind CSS, garantizando velocidad de carga ultrarrápida (menos de 1 segundo) y seguridad de nivel bancario. Al finalizar el proyecto, el código fuente y todos los accesos son 100% de tu propiedad, sin bloqueos técnicos.',
    category: 'software',
    tag: 'Desarrollo Web',
  },
  {
    question: '¿Cómo garantizan el retorno y la optimización en Marketing Digital?',
    answer: 'Trabajamos con paneles de métricas transparentes en tiempo real y atribución avanzada. No medimos "likes" vacíos, sino coste por lead calificado, retorno sobre inversión publicitaria (ROAS objetivo de 3.5x a 6x) y tasa de conversión real en tu pasarela de pago o WhatsApp.',
    category: 'marketing',
    tag: 'Paid Media & ROAS',
  },
  {
    question: '¿Existen cantidades mínimas o tiempos de entrega para pedidos de Sublimación?',
    answer: 'Ofrecemos tiradas cortas a partir de 12 unidades para emprendedores y lanzamientos boutique, así como producción a escala de cientos o miles de prendas para eventos y corporativos. Contamos con entregas exprés en 48h a 72h y calibración de color Pantone para máxima fidelidad textil.',
    category: 'sublimacion',
    tag: 'Taller Textil',
  },
  {
    question: '¿Cómo son los cursos y talleres de Formación Académica?',
    answer: 'Nuestros programas son 80% prácticos en grupos reducidos. Aprenderás operando maquinaria real de sublimación, software de diseño, programación o creación de campañas con profesores activos en la industria. Incluyen insumos, guías de proveedores recomendados y certificación oficial.',
    category: 'formacion',
    tag: 'Talleres Prácticos',
  },
  {
    question: '¿Cómo se inician los proyectos y cuáles son los métodos de pago?',
    answer: 'El primer paso es una sesión exploratoria por WhatsApp o videollamada para definir el alcance exacto. Trabajamos con contrato formal, cronograma de entregas por fases y facilidades de pago (50% anticipo y 50% contra entrega validada, transferencias bancarias y pasarelas seguras).',
    category: 'general',
    tag: 'Procesos & Pagos',
  },
];

export const AGENCY_STATS = [
  { value: '+120', label: 'Proyectos de software y plataformas desarrolladas' },
  { value: '+15,000', label: 'Prendas y piezas sublimadas en nuestro taller' },
  { value: '+850', label: 'Alumnos y profesionales formados en talleres' },
  { value: '3.8x', label: 'Retorno promedio en campañas de marketing' },
];

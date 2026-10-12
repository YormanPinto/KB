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
  // 1. SUBLIMACIÓN & MERCHANDISING
  {
    id: 'velocity-merch',
    title: 'Producción de Merchandising Corporativo & Uniformes',
    client: 'Apex Solutions & Corp',
    industry: 'Empresa Tecnológica & Consultoría B2B',
    category: 'Sublimación & Merchandising',
    categorySlug: 'sublimacion',
    image: '/src/assets/images/portfolio_textile_merch_1791837830911.jpg',
    duration: '2 semanas',
    summary: 'Diseño y confección en taller de 450 kits corporativos completos (sudaderas con capucha bordadas/estampadas, polos técnicos, tazas de cerámica mate y libretas ejecutivas) para convención anual.',
    objectives: [
      'Garantizar consistencia cromática exacta con el pantone corporativo de la marca.',
      'Fabricar y despachar 450 lotes en un plazo estricto de 10 días laborables.',
      'Ofrecer materiales textiles de alto gramaje con durabilidad superior anti-pilling.',
    ],
    strategies: [
      'Pruebas previas de colorimetría en tela y cerámica para aprobación formal con muestras físicas.',
      'Sublimación y transfer textil de alta fijación con tintas certificadas anti-decoloración al lavado.',
      'Empaque individual con etiquetas personalizadas listas para distribución en el evento.',
      'Control de calidad al 100% de cada prenda y producto final.',
    ],
    results: [
      { value: '450', label: 'Kits completos entregados a tiempo' },
      { value: '100%', label: 'Conformidad de color corporativo' },
      { value: '0%', label: 'Tasa de devoluciones o defectos' },
      { value: '48h', label: 'Tiempo récord de reposición' },
    ],
    testimonial: {
      quote: 'La calidad del estampado y el tacto de las sudaderas y tazas superó cualquier expectativa previa. KB Taller Creativo resolvió todo en tiempo récord.',
      author: 'Rodrigo Méndez',
      role: 'Director de Personas en Apex Solutions',
    },
  },
  {
    id: 'drinkware-merch-pack',
    title: 'Línea de Drinkware Térmico & Botellas Acero Inox',
    client: 'Velocity Outdoors & Daily Grind',
    industry: 'Marcas de Café de Especialidad & Outdoor',
    category: 'Sublimación & Merchandising',
    categorySlug: 'sublimacion',
    image: '/src/assets/images/portfolio_cups_bottles_1791837879499.jpg',
    duration: '10 días',
    summary: 'Personalización de alta precisión en vasos térmicos de doble pared al vacío, botellas deportivas de acero inoxidable y tazas de cerámica artesanal con acabado mate micro-texturizado.',
    objectives: [
      'Fabricar vasos térmicos y tazas con grabado y sublimación apta para lavavajillas.',
      'Desarrollar una línea de producto con estética premium para venta directa en cafeterías.',
      'Garantizar empaques cilíndricos protectores personalizados listos para retail.',
    ],
    strategies: [
      'Aplicación de recubrimiento polimérico especial para fijación permanente de grafismos.',
      'Horneado térmico de precisión con perfiles de calor controlados por infrarrojos.',
      'Muestreo previo de calibración térmica para evitar aberraciones de color en bordes curvados.',
      'Inspección individual de hermeticidad y acabado de boquillas.',
    ],
    results: [
      { value: '+1,200', label: 'Unidades producidas' },
      { value: '12h/24h', label: 'Aislamiento térmico verificado' },
      { value: '99.4%', label: 'Satisfacción en punto de venta' },
      { value: '3x', label: 'Rotación de stock en cafeterías' },
    ],
    testimonial: {
      quote: 'Nuestros clientes adoran los vasos y termos térmicos. Tienen un tacto sumamente elegante y la impresión no se desgasta con el uso diario.',
      author: 'Camila Rossi',
      role: 'Brand Manager en Daily Grind Coffee',
    },
  },

  // 2. DESARROLLO DE SOFTWARE
  {
    id: 'aurora-ecommerce-app',
    title: 'E-Commerce Headless & Aplicación Web Progresiva (PWA)',
    client: 'Aurora Artisan Ceramics',
    industry: 'Diseño, Artesanía Contemporánea & Retail',
    category: 'Desarrollo de Software',
    categorySlug: 'software',
    image: '/src/assets/images/portfolio_ecommerce_app_1791837821275.jpg',
    duration: '6 semanas',
    summary: 'Desarrollo de tienda online moderna con catálogo dinámico de productos, pasarela de pago ultrarrápida Stripe/Apple Pay, experiencia móvil tipo app nativa y panel de inventario en tiempo real.',
    objectives: [
      'Optimizar la velocidad de carga móvil a menos de 0.8 segundos con 100/100 en Google Lighthouse.',
      'Reducir la fricción en el checkout aumentando la tasa de compra móvil en un 40%.',
      'Integrar sincronización automática con almacén y logística de envíos internacionales.',
    ],
    strategies: [
      'Arquitectura React + Vite + TypeScript con renderizado ultra optimizado y lazy loading de imágenes.',
      'Diseño UI/UX minimalista dark-mode editorial enfocado en fotografía de producto y tipografía refinada.',
      'Checkout de 1 solo paso con autocompletado inteligente de direcciones.',
      'Sincronización de pedidos en tiempo real con notificaciones directas por WhatsApp y email.',
    ],
    results: [
      { value: '0.6s', label: 'Tiempo de carga en móviles' },
      { value: '+265%', label: 'Crecimiento de ventas online' },
      { value: '4.8%', label: 'Tasa final de conversión' },
      { value: '100%', label: 'Score Core Web Vitals' },
    ],
    testimonial: {
      quote: 'Nuestra tienda online pasó de sentirse lenta a ser una de las mejores experiencias visuales del sector. Las ventas crecieron desde el primer fin de semana.',
      author: 'Sofía Valenzuela',
      role: 'Fundadora & Directora Creativa en Aurora',
    },
  },
  {
    id: 'nexus-crm-platform',
    title: 'Plataforma SaaS & Dashboard de Métricas en Tiempo Real',
    client: 'Nexus Analytics & CRM',
    industry: 'Plataformas B2B & Fintech',
    category: 'Desarrollo de Software',
    categorySlug: 'software',
    image: '/src/assets/images/portfolio_saas_crm_1791837870570.jpg',
    duration: '8 semanas',
    summary: 'Ingeniería de software completa para cuadro de mando corporativo: gestión de pipelines comerciales, gráficos analíticos reactivos, roles de permisos RBAC y exportación automatizada de informes.',
    objectives: [
      'Centralizar el embudo de ventas y métricas de ingresos mensuales en un solo panel.',
      'Proporcionar respuestas en menos de 200ms al filtrar más de 50,000 registros de clientes.',
      'Garantizar cifrado de datos de extremo a extremo y diseño responsive para ejecutivos.',
    ],
    strategies: [
      'Stack tecnológico modular con React, Tailwind CSS, charts interactivos y TypeScript.',
      'Implementación de caching inteligente en cliente para navegación instantánea sin recargas.',
      'Diseño visual de interfaz oscuro con códigos de color de alto contraste para análisis rápido.',
      'Auditoría continua de seguridad y rendimiento en servidores cloud.',
    ],
    results: [
      { value: '180ms', label: 'Latencia en consultas complejas' },
      { value: '1,842', label: 'Usuarios concurrentes activos' },
      { value: '99.98%', label: 'Uptime operacional continuo' },
      { value: '-65%', label: 'Tiempo administrativo ahorrado' },
    ],
    testimonial: {
      quote: 'El nivel de ejecución del equipo de software de KB Taller Creativo fue impecable. Construyeron una interfaz rápida, intuitiva y robusta.',
      author: 'Marcos Valdés',
      role: 'Co-fundador & CTO en Nexus',
    },
  },

  // 3. MARKETING DIGITAL
  {
    id: 'aura-marketing-campaigns',
    title: 'Campañas de Captación Multicanal & Paid Media Scaling',
    client: 'Aura Luxury Group',
    industry: 'Moda & Accesorios Premium',
    category: 'Marketing Digital',
    categorySlug: 'marketing',
    image: '/src/assets/images/portfolio_social_campaign_1791837844540.jpg',
    duration: '4 meses',
    summary: 'Planificación estratégica y ejecución de pauta publicitaria en Meta Ads (Instagram/Facebook) y Google Search/Shopping, combinando creatividades de alto impacto y pruebas A/B continuas.',
    objectives: [
      'Escalar el retorno publicitario a más de 4.5x ROAS durante las temporadas de lanzamiento.',
      'Reducir el Coste por Adquisición (CPA) optimizando las audiencias frías y de retargeting.',
      'Desarrollar piezas de contenido visual cinematográfico adaptadas a formatos verticales.',
    ],
    strategies: [
      'Segmentación avanzada de audiencias por valor de ticket promedio e intereses de alto poder adquisitivo.',
      'Generación de más de 30 variantes de creatividades con pruebas dinámicas de copies y llamadas a la acción.',
      'Instalación y calibración de API de Conversiones de Meta (CAPI) para medición sin pérdida de datos.',
      'Estrategia de retargeting omnicanal para recuperación de carritos abandonados.',
    ],
    results: [
      { value: '4.8x', label: 'ROAS sostenido en campañas' },
      { value: '$697K', label: 'Facturación directa generada' },
      { value: '-42%', label: 'Reducción en Coste por Lead/Venta' },
      { value: '+310K', label: 'Impactos orgánicos y virales' },
    ],
    testimonial: {
      quote: 'KB Taller Creativo logró convertir nuestra inversión publicitaria en una máquina predecible de ingresos con un retorno que nunca antes habíamos conseguido.',
      author: 'Elena Morales',
      role: 'Directora de Crecimiento en Aura Paris',
    },
  },
  {
    id: 'leger-marketing',
    title: 'Estrategia de Rebranding, Contenidos & Performance',
    client: 'Léger Cosméticos',
    industry: 'Cosmética Natural D2C',
    category: 'Marketing Digital',
    categorySlug: 'marketing',
    image: '/src/assets/images/case_study_branding_1791738090225.jpg',
    duration: '3 meses',
    summary: 'Renovación de identidad visual digital, producción de piezas audiovisuales para redes sociales y embudos de prospección automatizada para ecommerce de belleza.',
    objectives: [
      'Reposicionar la percepción de valor de la marca en canales digitales.',
      'Aumentar la tasa de retención y recurrencia de compra mensual al 35%.',
      'Construir un flujo constante de leads calificados para distribuidores locales.',
    ],
    strategies: [
      'Manual de estilo digital con fotografía estética, paleta de colores armónica y tipografía cuidada.',
      'Calendario editorial con contenido educativo sobre cuidado de la piel y testimonios de clientas.',
      'Campañas de micro-influencers orientadas a reseñas reales del producto.',
      'Automatización de secuencias de bienvenida y fidelización por correo y mensajería.',
    ],
    results: [
      { value: '+185%', label: 'Engagement en redes sociales' },
      { value: '38%', label: 'Tasa de recompra de clientes' },
      { value: '+4,500', label: 'Nuevos suscriptores VIP' },
      { value: '5.2x', label: 'Retorno en promociones clave' },
    ],
    testimonial: {
      quote: 'Entendieron el alma de nuestra marca desde el minuto uno. Cada pieza gráfica y anuncio comunica exactamente lo que queremos transmitir.',
      author: 'Beatriz Luján',
      role: 'Fundadora en Léger Cosméticos',
    },
  },

  // 4. FORMACIÓN ACADÉMICA
  {
    id: 'masterclass-taller-sublimacion',
    title: 'Masterclass Práctica: Taller de Sublimación & Estampado Textil',
    client: 'Academia KB & Red Emprende Creativo',
    industry: 'Formación Técnica & Emprendimiento',
    category: 'Formación Académica',
    categorySlug: 'formacion',
    image: '/src/assets/images/portfolio_workshop_session_1791837853064.jpg',
    duration: 'Talleres Intensivos Presenciales & Online',
    summary: 'Capacitación integral donde los estudiantes operan maquinaria real: calibración de prensas térmicas de tazas y textiles, perfiles de color ICC en Photoshop/Illustrator y costeo comercial de productos.',
    objectives: [
      'Capacitar a personas sin experiencia previa para montar su propio taller de personalización.',
      'Enseñar a evitar mermas de color, impresiones borrosas o telas quemadas con protocolos profesionales.',
      'Brindar herramientas de pricing, cotización rápida y selección de proveedores directos.',
    ],
    strategies: [
      'Estaciones de trabajo individuales con planchas planas, de gorras y prensas para tazas cilíndricas.',
      'Pruebas con diferentes composiciones textiles (poliéster, modal, mezclas y vinil textil de apoyo).',
      'Entrega de pack de plantillas editables listas para imprimir y hojas de cálculo de amortización.',
      'Soporte continuo y resolución de problemas vía grupo privado de WhatsApp.',
    ],
    results: [
      { value: '+850', label: 'Emprendedores graduados' },
      { value: '99%', label: 'Calificación de satisfacción' },
      { value: '78%', label: 'Alumnos con taller en activo' },
      { value: '100%', label: 'Materiales y manuales incluidos' },
    ],
    testimonial: {
      quote: 'Tomar este curso fue la mejor inversión. En solo dos semanas de práctica ya tenía mis primeros pedidos de uniformes para empresas locales.',
      author: 'Carlos Santana',
      role: 'Emprendedor & Propietario de PrintZone',
    },
  },
  {
    id: 'bootcamp-marketing-software',
    title: 'Programa Avanzado: Herramientas Digitales & Creación Web',
    client: 'Escuela de Capacitación Técnica',
    industry: 'Educación Superior & Habilidades Digitales',
    category: 'Formación Académica',
    categorySlug: 'formacion',
    image: '/src/assets/images/hero_formacion_academica_1791750085127.jpg',
    duration: '8 semanas (Certificado Técnico)',
    summary: 'Programa formativo estructurado para dueños de negocios y profesionales que necesitan aprender a crear páginas web efectivas, gestionar publicidad digital y automatizar procesos con software.',
    objectives: [
      'Dominar los fundamentos de diseño web moderno, estructura de conversión y optimización SEO.',
      'Aprender a pautar campañas con presupuesto controlado en Meta Business Suite y Google Ads.',
      'Dotar a cada estudiante de un proyecto real terminado y publicado al finalizar el curso.',
    ],
    strategies: [
      'Metodología práctica con tutorías en vivo y revisión personalizada de cada proyecto semanal.',
      'Módulos progresivos: desde arquitectura de la información hasta copywriting comercial.',
      'Simulaciones de presupuestos publicitarios reales y lectura analítica de estadísticas.',
      'Acceso vitalicio a grabaciones y biblioteca de recursos descargables.',
    ],
    results: [
      { value: '+420', label: 'Profesionales capacitados' },
      { value: '94%', label: 'Tasa de finalización de proyectos' },
      { value: '4.9/5', label: 'Valoración media de estudiantes' },
      { value: '1 a 1', label: 'Mentoría técnica personalizada' },
    ],
    testimonial: {
      quote: 'Explicaciones claras, directas y sin tecnicismos innecesarios. Ahora gestiono la web y los anuncios de mi negocio sin depender de agencias externas.',
      author: 'Mariana Duarte',
      role: 'Directora Comercial en Insumos del Norte',
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

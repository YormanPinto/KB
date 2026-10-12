import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  ArrowUpRight, 
  ChevronLeft, 
  ChevronRight, 
  Code,
  Printer,
  TrendingUp,
  GraduationCap,
  Sparkles,
  Zap,
  CheckCircle2,
  Layers
} from 'lucide-react';
import { Logo } from './Logo.tsx';

interface HeroProps {
  onOpenProjectModal: () => void;
  onSelectCategory?: (category: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenProjectModal, onSelectCategory }) => {
  // Mini carousel state for bottom strip
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isCarouselHovered, setIsCarouselHovered] = useState(false);

  // Main card mouse spotlight position
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isMainHovered, setIsMainHovered] = useState(false);

  const previewItems = [
    {
      id: 'studio',
      type: 'image',
      image: '/src/assets/images/hero_agency_workspace_1791738071569.jpg',
      alt: 'Taller creativo y estudio de trabajo KB',
      label: 'Taller Creativo',
      meta: 'Instalaciones y equipo propio',
    },
    {
      id: 'strategy',
      type: 'text',
      tag: 'ESTRATEGIA 2026',
      title: 'Estrategia 2026',
      description: 'Ingeniería tecnológica, marketing y producción física integral en una sola agencia.',
    },
    {
      id: 'software',
      type: 'image',
      image: '/src/assets/images/case_study_analytics_1791738081226.jpg',
      alt: 'Desarrollo de software y plataformas analíticas',
      label: 'Software & Métricas',
      meta: 'Next.js, Node & Postgres',
    },
    {
      id: 'sublimacion',
      type: 'image',
      image: '/src/assets/images/case_study_sublimation_1791739628959.jpg',
      alt: 'Sublimación textil y merchandising corporativo',
      label: 'Sublimación & Merch',
      meta: 'DTF, transfer & bordados',
    },
    {
      id: 'branding',
      type: 'image',
      image: '/src/assets/images/case_study_branding_1791738090225.jpg',
      alt: 'Branding y diseño de packaging',
      label: 'Diseño & Marca',
      meta: 'Identidad visual y packaging',
    },
  ];

  // Auto advance carousel with pause on hover
  useEffect(() => {
    if (isCarouselHovered) return;
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev >= previewItems.length - 3 ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(interval);
  }, [isCarouselHovered, previewItems.length]);

  const handlePrev = () => {
    setCarouselIndex((prev) => (prev === 0 ? previewItems.length - 3 : prev - 1));
  };

  const handleNext = () => {
    setCarouselIndex((prev) => (prev >= previewItems.length - 3 ? 0 : prev + 1));
  };

  const handleCategoryClick = (categoryId: string) => {
    if (onSelectCategory) {
      onSelectCategory(categoryId);
    }
    const elem = document.getElementById('servicios');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.round(((e.clientX - rect.left) / rect.width) * 100);
    const y = Math.round(((e.clientY - rect.top) / rect.height) * 100);
    setMousePos({ x, y });
  };

  // Get current 3 visible items
  const visibleItems = [
    previewItems[(carouselIndex) % previewItems.length],
    previewItems[(carouselIndex + 1) % previewItems.length],
    previewItems[(carouselIndex + 2) % previewItems.length],
  ];

  return (
    <section id="inicio" className="relative pt-6 pb-12 md:pt-8 md:pb-16 bg-[#FAFAFA] border-b border-neutral-200 overflow-hidden">
      
      {/* Ambient background light orbs */}
      <div className="absolute top-12 left-10 w-96 h-96 bg-[#E11D74]/5 rounded-full blur-[100px] pointer-events-none animate-soft-pulse-glow" aria-hidden="true" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#38BDF8]/5 rounded-full blur-[120px] pointer-events-none animate-soft-pulse-glow" aria-hidden="true" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Bento Grid layout matching reference structure with enriched animation */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 lg:gap-4 items-stretch">
          
          {/* LEFT COLUMN: 2 Vertical Category Blocks with Photographic Backgrounds */}
          <div className="order-2 md:order-1 md:col-span-3 flex flex-col gap-3.5 lg:gap-4">
            
            {/* Block 1: Desarrollo de Software */}
            <button
              onClick={() => handleCategoryClick('software')}
              className="relative flex-1 min-h-[190px] md:min-h-[265px] rounded-3xl p-5 lg:p-7 flex flex-col justify-between text-left overflow-hidden border border-neutral-200/90 hover:border-[#FFA07A]/80 transition-all duration-500 group shadow-xs hover:shadow-2xl cursor-pointer transform hover:-translate-y-1"
            >
              {/* Photographic Background */}
              <img
                src="/src/assets/images/hero_software_dev_1791750101061.jpg"
                alt="Desarrollo de Software"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 filter saturate-[1.1]"
              />

              {/* Scrim Overlay */}
              <div 
                className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/35 group-hover:from-black/95 group-hover:via-black/60 transition-colors duration-500"
                aria-hidden="true" 
              />

              {/* Hover Light Sheen Sweep Effect */}
              <div 
                className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" 
                aria-hidden="true"
              />

              {/* Top Pill & Arrow */}
              <div className="relative z-10 flex items-center justify-between w-full">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/25 text-white text-[11px] font-semibold tracking-wide shadow-xs group-hover:bg-white/25 transition-all">
                  <Code className="w-3.5 h-3.5 text-[#FFA07A]" />
                  <span>Webs & Apps</span>
                </span>
                <span className="w-8 h-8 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center text-white opacity-80 group-hover:opacity-100 group-hover:bg-[#E11D74] group-hover:rotate-12 transition-all duration-300 shadow-xs">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>

              {/* Title & Micro-badge */}
              <div className="relative z-10 space-y-1.5">
                <div className="flex items-center gap-1.5 text-[10px] text-orange-200/90 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-ping inline-block" />
                  <span>React · Node · Cloud</span>
                </div>
                <span className="block text-xl lg:text-2xl font-extrabold tracking-tight text-white group-hover:text-orange-100 transition-colors leading-tight drop-shadow-sm">
                  Desarrollo de<br />Software
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-white/75 font-medium group-hover:text-white transition-colors">
                  <span>Ver plataformas y código</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </div>
            </button>

            {/* Block 2: Sublimación */}
            <button
              onClick={() => handleCategoryClick('sublimacion')}
              className="relative flex-1 min-h-[190px] md:min-h-[265px] rounded-3xl p-5 lg:p-7 flex flex-col justify-between text-left overflow-hidden border border-neutral-200/90 hover:border-[#E11D74]/80 transition-all duration-500 group shadow-xs hover:shadow-2xl cursor-pointer transform hover:-translate-y-1"
            >
              {/* Photographic Background */}
              <img
                src="/src/assets/images/hero_sublimacion_textil_1791750133160.jpg"
                alt="Sublimación y Merchandising"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 filter saturate-[1.1]"
              />

              {/* Scrim Overlay */}
              <div 
                className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/35 group-hover:from-black/95 group-hover:via-black/60 transition-colors duration-500"
                aria-hidden="true" 
              />

              {/* Hover Light Sheen Sweep Effect */}
              <div 
                className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" 
                aria-hidden="true"
              />

              {/* Top Pill & Arrow */}
              <div className="relative z-10 flex items-center justify-between w-full">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/25 text-white text-[11px] font-semibold tracking-wide shadow-xs group-hover:bg-white/25 transition-all">
                  <Printer className="w-3.5 h-3.5 text-[#E11D74]" />
                  <span>Taller Propio</span>
                </span>
                <span className="w-8 h-8 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center text-white opacity-80 group-hover:opacity-100 group-hover:bg-[#E11D74] group-hover:rotate-12 transition-all duration-300 shadow-xs">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>

              {/* Title & Micro-badge */}
              <div className="relative z-10 space-y-1.5">
                <div className="flex items-center gap-1.5 text-[10px] text-pink-200/90 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-ping inline-block" />
                  <span>DTF · Transfer · Merch</span>
                </div>
                <span className="block text-xl lg:text-2xl font-extrabold tracking-tight text-white group-hover:text-pink-100 transition-colors leading-tight drop-shadow-sm">
                  Sublimación &<br />Merchandising
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-white/75 font-medium group-hover:text-white transition-colors">
                  <span>Ver prendas y artículos</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </div>
            </button>
          </div>

          {/* CENTER COLUMN: Main Content Card + Bottom 3-Card Carousel */}
          <div className="order-1 md:order-2 md:col-span-6 flex flex-col gap-3.5 lg:gap-4">
            
            {/* MAIN HERO CARD with Interactive Cursor Spotlight & Animated Blueprint */}
            <div 
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsMainHovered(true)}
              onMouseLeave={() => setIsMainHovered(false)}
              className="relative bg-white rounded-3xl p-6 sm:p-9 lg:p-11 border border-neutral-200/90 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col items-center text-center overflow-hidden group"
            >
              
              {/* Dynamic Mouse Spotlight Glow */}
              <div 
                className="absolute inset-0 pointer-events-none transition-opacity duration-500 ease-out"
                style={{
                  opacity: isMainHovered ? 1 : 0.4,
                  background: `radial-gradient(600px circle at ${mousePos.x}% ${mousePos.y}%, rgba(225, 29, 116, 0.08), rgba(244, 63, 94, 0.03) 40%, transparent 80%)`,
                }}
                aria-hidden="true"
              />

              {/* Subtle Creative Blueprint / Geometry background illustration with slow rotation */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-[0.06] flex items-center justify-center overflow-hidden"
                aria-hidden="true"
              >
                <svg viewBox="0 0 800 600" className="w-[120%] h-[120%] text-neutral-900" fill="none" stroke="currentColor" strokeWidth="1">
                  <g className="animate-slow-spin origin-center">
                    <circle cx="400" cy="300" r="220" strokeDasharray="6 6" />
                    <circle cx="400" cy="300" r="140" />
                    <line x1="180" y1="300" x2="620" y2="300" strokeWidth="0.5" />
                    <line x1="400" y1="80" x2="400" y2="520" strokeWidth="0.5" />
                  </g>
                  <g className="animate-reverse-slow-spin origin-center">
                    <circle cx="400" cy="300" r="320" strokeDasharray="3 8" />
                    <rect x="260" y="160" width="280" height="280" strokeWidth="0.5" strokeDasharray="4 4" />
                  </g>
                </svg>
              </div>

              {/* Top Centered Brand Logo with Soft Glow Ring */}
              <div className="relative z-10 flex flex-col items-center mb-3">
                <div className="relative group-hover:scale-105 transition-transform duration-300">
                  <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-[#E11D74]/20 via-[#FFA07A]/20 to-[#E11D74]/20 blur-sm opacity-70 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <Logo size={44} showWordmark={false} />
                  </div>
                </div>
                <span className="text-base sm:text-lg font-bold tracking-tight text-[#121212] mt-2">
                  KB Taller Creativo
                </span>
              </div>

              {/* Kicker badge requested by user */}
              <div className="relative z-10 flex items-center justify-center mb-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100/90 border border-neutral-200/90 text-[10px] sm:text-[11px] font-bold text-neutral-800 uppercase tracking-wider shadow-2xs hover:border-[#E11D74]/40 hover:bg-neutral-50 transition-all cursor-default">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E11D74] animate-pulse" />
                  <span>SOFTWARE, MARKETING DIGITAL & DISEÑO ESTRATÉGICO</span>
                </div>
              </div>

              {/* Headline */}
              <h1 className="relative z-10 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#121212] leading-[1.18] mb-4 [text-wrap:balance]">
                Desarrollo de software, marketing digital, sublimación y formación académica.
              </h1>

              {/* Subhead */}
              <p className="relative z-10 text-xs sm:text-sm text-neutral-600 max-w-xl leading-relaxed mb-6 sm:mb-7">
                Transformamos ideas en resultados: integramos desarrollo tecnológico, estrategias de captación digital, personalización de marca y formación técnica avanzada.
              </p>

              {/* Buttons with micro-interactions */}
              <div className="relative z-10 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 mb-6">
                <button
                  onClick={onOpenProjectModal}
                  className="relative group/btn overflow-hidden inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#D91B74] to-[#C2185B] hover:from-[#E11D74] hover:to-[#AD1457] rounded-xl shadow-md hover:shadow-xl hover:shadow-pink-500/20 transition-all duration-300 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  {/* Subtle shine sweep inside button */}
                  <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />
                  <span className="relative z-10">Solicitar Propuesta</span>
                  <ArrowRight className="w-4 h-4 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                </button>
                
                <a
                  href="#portafolio"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-neutral-800 hover:text-[#E11D74] px-4 py-3 rounded-xl border border-neutral-200/80 hover:border-neutral-300 bg-neutral-50/60 hover:bg-white transition-all cursor-pointer shadow-2xs"
                >
                  <span>Ver Casos de Éxito</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#E11D74]" />
                </a>
              </div>

              {/* Bottom Interactive Trust & Metric Strip inside Main Card */}
              <div className="relative z-10 pt-5 border-t border-neutral-100 w-full grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 text-center">
                <div className="p-2 rounded-xl bg-neutral-50/70 hover:bg-neutral-100/80 transition-colors border border-neutral-100">
                  <div className="text-xs sm:text-sm font-extrabold text-[#121212] font-mono">+120</div>
                  <div className="text-[10px] text-neutral-500 font-medium">Proyectos activos</div>
                </div>
                <div className="p-2 rounded-xl bg-neutral-50/70 hover:bg-neutral-100/80 transition-colors border border-neutral-100">
                  <div className="text-xs sm:text-sm font-extrabold text-[#E11D74] font-mono">100%</div>
                  <div className="text-[10px] text-neutral-500 font-medium">Taller & código propio</div>
                </div>
                <div className="p-2 rounded-xl bg-neutral-50/70 hover:bg-neutral-100/80 transition-colors border border-neutral-100">
                  <div className="text-xs sm:text-sm font-extrabold text-[#121212] font-mono">4.9/5</div>
                  <div className="text-[10px] text-neutral-500 font-medium">Satisfacción cliente</div>
                </div>
                <div className="p-2 rounded-xl bg-neutral-50/70 hover:bg-neutral-100/80 transition-colors border border-neutral-100">
                  <div className="text-xs sm:text-sm font-extrabold text-emerald-600 font-mono">24/48h</div>
                  <div className="text-[10px] text-neutral-500 font-medium">Tiempo de respuesta</div>
                </div>
              </div>

            </div>

            {/* BOTTOM PREVIEW STRIP / CAROUSEL WITH 3 ITEMS & AUTO-PLAY */}
            <div 
              onMouseEnter={() => setIsCarouselHovered(true)}
              onMouseLeave={() => setIsCarouselHovered(false)}
              className="relative flex flex-col gap-2"
            >
              <div className="relative flex items-center">
                
                {/* Prev Button */}
                <button
                  onClick={handlePrev}
                  className="absolute -left-3 sm:-left-4 z-20 w-8 h-8 rounded-full bg-white border border-neutral-200/90 shadow-md flex items-center justify-center text-neutral-700 hover:text-[#E11D74] hover:scale-110 active:scale-95 transition-all cursor-pointer"
                  aria-label="Ver anterior"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                {/* 3 Visible Cards */}
                <div className="grid grid-cols-3 gap-2.5 sm:gap-3 w-full">
                  {visibleItems.map((item, idx) => (
                    <div
                      key={`${item.id}-${idx}`}
                      className="group/card bg-white rounded-2xl border border-neutral-200/90 overflow-hidden h-[125px] sm:h-[138px] shadow-2xs flex flex-col transition-all duration-300 hover:border-[#E11D74]/50 hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
                      onClick={() => {
                        const elem = document.getElementById('servicios');
                        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      {item.type === 'image' ? (
                        <div className="relative w-full h-full overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.alt || ''}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent flex flex-col justify-end p-2 sm:p-2.5">
                            <span className="text-[10px] sm:text-xs font-bold text-white truncate drop-shadow-xs">
                              {item.label}
                            </span>
                            {item.meta && (
                              <span className="text-[9px] text-white/70 truncate hidden sm:block">
                                {item.meta}
                              </span>
                            )}
                          </div>
                        </div>
                      ) : (
                        <div className="p-3 sm:p-3.5 flex flex-col justify-center h-full text-left bg-gradient-to-br from-neutral-50 to-white">
                          <div className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider text-[#E11D74] mb-0.5">
                            <span className="w-1 h-1 rounded-full bg-[#E11D74]" />
                            <span>{item.tag}</span>
                          </div>
                          <h2 className="text-xs sm:text-sm font-bold text-[#121212] leading-tight mb-1 group-hover/card:text-[#E11D74] transition-colors">
                            {item.title}
                          </h2>
                          <p className="text-[9px] sm:text-[10px] text-neutral-500 line-clamp-2 leading-snug">
                            {item.description}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Next Button */}
                <button
                  onClick={handleNext}
                  className="absolute -right-3 sm:-right-4 z-20 w-8 h-8 rounded-full bg-white border border-neutral-200/90 shadow-md flex items-center justify-center text-neutral-700 hover:text-[#E11D74] hover:scale-110 active:scale-95 transition-all cursor-pointer"
                  aria-label="Ver siguiente"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Mini Pagination Indicator Dots */}
              <div className="flex items-center justify-center gap-1.5 pt-0.5">
                {Array.from({ length: previewItems.length - 2 }).map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => setCarouselIndex(dotIdx)}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      carouselIndex === dotIdx ? 'w-5 bg-[#E11D74]' : 'w-1.5 bg-neutral-300 hover:bg-neutral-400'
                    }`}
                    aria-label={`Ir al elemento ${dotIdx + 1}`}
                  />
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: 2 Vertical Category Blocks with Photographic Backgrounds */}
          <div className="order-3 md:order-3 md:col-span-3 flex flex-col gap-3.5 lg:gap-4">
            
            {/* Block 3: Marketing Digital */}
            <button
              onClick={() => handleCategoryClick('marketing')}
              className="relative flex-1 min-h-[190px] md:min-h-[265px] rounded-3xl p-5 lg:p-7 flex flex-col justify-between text-left overflow-hidden border border-neutral-200/90 hover:border-[#25D366]/80 transition-all duration-500 group shadow-xs hover:shadow-2xl cursor-pointer transform hover:-translate-y-1"
            >
              {/* Photographic Background */}
              <img
                src="/src/assets/images/hero_marketing_digital_1791750116471.jpg"
                alt="Marketing Digital & Crecimiento"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 filter saturate-[1.1]"
              />

              {/* Scrim Overlay */}
              <div 
                className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/35 group-hover:from-black/95 group-hover:via-black/60 transition-colors duration-500"
                aria-hidden="true" 
              />

              {/* Hover Light Sheen Sweep Effect */}
              <div 
                className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" 
                aria-hidden="true"
              />

              {/* Top Pill & Arrow */}
              <div className="relative z-10 flex items-center justify-between w-full">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/25 text-white text-[11px] font-semibold tracking-wide shadow-xs group-hover:bg-white/25 transition-all">
                  <TrendingUp className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>Paid Media & Ads</span>
                </span>
                <span className="w-8 h-8 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center text-white opacity-80 group-hover:opacity-100 group-hover:bg-[#E11D74] group-hover:rotate-12 transition-all duration-300 shadow-xs">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>

              {/* Title & Micro-badge */}
              <div className="relative z-10 space-y-1.5">
                <div className="flex items-center gap-1.5 text-[10px] text-emerald-200/90 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
                  <span>Meta · Google · ROAS +3.8x</span>
                </div>
                <span className="block text-xl lg:text-2xl font-extrabold tracking-tight text-white group-hover:text-emerald-100 transition-colors leading-tight drop-shadow-sm">
                  Marketing<br />Digital
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-white/75 font-medium group-hover:text-white transition-colors">
                  <span>Ver campañas y ROAS</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </div>
            </button>

            {/* Block 4: Formación Académica */}
            <button
              onClick={() => handleCategoryClick('formacion')}
              className="relative flex-1 min-h-[190px] md:min-h-[265px] rounded-3xl p-5 lg:p-7 flex flex-col justify-between text-left overflow-hidden border border-neutral-200/90 hover:border-[#38BDF8]/80 transition-all duration-500 group shadow-xs hover:shadow-2xl cursor-pointer transform hover:-translate-y-1"
            >
              {/* Photographic Background */}
              <img
                src="/src/assets/images/hero_formacion_academica_1791750085127.jpg"
                alt="Formación Académica y Talleres Prácticos"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 filter saturate-[1.1]"
              />

              {/* Scrim Overlay */}
              <div 
                className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/35 group-hover:from-black/95 group-hover:via-black/60 transition-colors duration-500"
                aria-hidden="true" 
              />

              {/* Hover Light Sheen Sweep Effect */}
              <div 
                className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" 
                aria-hidden="true"
              />

              {/* Top Pill & Arrow */}
              <div className="relative z-10 flex items-center justify-between w-full">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/25 text-white text-[11px] font-semibold tracking-wide shadow-xs group-hover:bg-white/25 transition-all">
                  <GraduationCap className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>Talleres Prácticos</span>
                </span>
                <span className="w-8 h-8 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center text-white opacity-80 group-hover:opacity-100 group-hover:bg-[#E11D74] group-hover:rotate-12 transition-all duration-300 shadow-xs">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>

              {/* Title & Micro-badge */}
              <div className="relative z-10 space-y-1.5">
                <div className="flex items-center gap-1.5 text-[10px] text-sky-200/90 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping inline-block" />
                  <span>Cursos 2026 · Certificación</span>
                </div>
                <span className="block text-xl lg:text-2xl font-extrabold tracking-tight text-white group-hover:text-sky-100 transition-colors leading-tight drop-shadow-sm">
                  Formación<br />Académica
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-white/75 font-medium group-hover:text-white transition-colors">
                  <span>Ver cursos y fechas</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </div>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

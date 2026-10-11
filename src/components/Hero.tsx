import React, { useState } from 'react';
import { 
  ArrowRight, 
  ArrowUpRight, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles,
  Code,
  Printer,
  TrendingUp,
  GraduationCap
} from 'lucide-react';
import { Logo } from './Logo.tsx';

interface HeroProps {
  onOpenProjectModal: () => void;
  onSelectCategory?: (category: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenProjectModal, onSelectCategory }) => {
  // Mini carousel state for bottom strip
  const [carouselIndex, setCarouselIndex] = useState(0);

  const previewItems = [
    {
      id: 'studio',
      type: 'image',
      image: '/src/assets/images/hero_agency_workspace_1791738071569.jpg',
      alt: 'Taller creativo y estudio de trabajo KB',
      label: 'Taller Creativo',
    },
    {
      id: 'strategy',
      type: 'text',
      tag: 'ESTRATEGIA 2026',
      title: 'Estrategia 2026',
      description: 'Ingeniería tecnológica, marketing y producción física integral.',
    },
    {
      id: 'software',
      type: 'image',
      image: '/src/assets/images/case_study_analytics_1791738081226.jpg',
      alt: 'Desarrollo de software y plataformas analíticas',
      label: 'Software & Métricas',
    },
    {
      id: 'sublimacion',
      type: 'image',
      image: '/src/assets/images/case_study_sublimation_1791739628959.jpg',
      alt: 'Sublimación textil y merchandising corporativo',
      label: 'Sublimación & Merch',
    },
    {
      id: 'branding',
      type: 'image',
      image: '/src/assets/images/case_study_branding_1791738090225.jpg',
      alt: 'Branding y diseño de packaging',
      label: 'Diseño & Marca',
    },
  ];

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

  // Get current 3 visible items
  const visibleItems = [
    previewItems[(carouselIndex) % previewItems.length],
    previewItems[(carouselIndex + 1) % previewItems.length],
    previewItems[(carouselIndex + 2) % previewItems.length],
  ];

  return (
    <section id="inicio" className="pt-6 pb-12 md:pt-8 md:pb-16 bg-[#FAFAFA] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Bento Grid layout matching reference image */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 lg:gap-4 items-stretch">
          
          {/* LEFT COLUMN: 2 Vertical Category Blocks with Photographic Backgrounds */}
          <div className="order-2 md:order-1 md:col-span-3 flex flex-col gap-3.5 lg:gap-4">
            
            {/* Block 1: Desarrollo de Software */}
            <button
              onClick={() => handleCategoryClick('software')}
              className="relative flex-1 min-h-[180px] md:min-h-[260px] rounded-3xl p-5 lg:p-7 flex flex-col justify-between text-left overflow-hidden border border-neutral-200/90 hover:border-[#E11D74] transition-all duration-500 group shadow-xs hover:shadow-xl cursor-pointer"
            >
              {/* Photographic Background */}
              <img
                src="/src/assets/images/hero_software_dev_1791750101061.jpg"
                alt="Desarrollo de Software"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Scrim Overlay */}
              <div 
                className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30 group-hover:from-black/95 group-hover:via-black/60 transition-colors duration-500"
                aria-hidden="true" 
              />

              {/* Top Pill & Arrow */}
              <div className="relative z-10 flex items-center justify-between w-full">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/25 text-white text-[11px] font-semibold tracking-wide shadow-xs">
                  <Code className="w-3.5 h-3.5 text-[#FFA07A]" />
                  <span>Webs & Apps</span>
                </span>
                <span className="w-7 h-7 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>

              {/* Title & Prompt */}
              <div className="relative z-10 space-y-1">
                <span className="block text-xl lg:text-2xl font-extrabold tracking-tight text-white group-hover:text-pink-200 transition-colors leading-tight drop-shadow-sm">
                  Desarrollo de<br />Software
                </span>
                <span className="block text-xs text-white/70 font-medium group-hover:text-white transition-colors">
                  Ver plataformas y código →
                </span>
              </div>
            </button>

            {/* Block 2: Sublimación */}
            <button
              onClick={() => handleCategoryClick('sublimacion')}
              className="relative flex-1 min-h-[180px] md:min-h-[260px] rounded-3xl p-5 lg:p-7 flex flex-col justify-between text-left overflow-hidden border border-neutral-200/90 hover:border-[#E11D74] transition-all duration-500 group shadow-xs hover:shadow-xl cursor-pointer"
            >
              {/* Photographic Background */}
              <img
                src="/src/assets/images/hero_sublimacion_textil_1791750133160.jpg"
                alt="Sublimación y Merchandising"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Scrim Overlay */}
              <div 
                className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30 group-hover:from-black/95 group-hover:via-black/60 transition-colors duration-500"
                aria-hidden="true" 
              />

              {/* Top Pill & Arrow */}
              <div className="relative z-10 flex items-center justify-between w-full">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/25 text-white text-[11px] font-semibold tracking-wide shadow-xs">
                  <Printer className="w-3.5 h-3.5 text-[#E11D74]" />
                  <span>Taller Propio</span>
                </span>
                <span className="w-7 h-7 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>

              {/* Title & Prompt */}
              <div className="relative z-10 space-y-1">
                <span className="block text-xl lg:text-2xl font-extrabold tracking-tight text-white group-hover:text-pink-200 transition-colors leading-tight drop-shadow-sm">
                  Sublimación &<br />Merchandising
                </span>
                <span className="block text-xs text-white/70 font-medium group-hover:text-white transition-colors">
                  Ver prendas y artículos →
                </span>
              </div>
            </button>
          </div>

          {/* CENTER COLUMN: Main Content Card + Bottom 3-Card Carousel */}
          <div className="order-1 md:order-2 md:col-span-6 flex flex-col gap-3.5 lg:gap-4">
            
            {/* MAIN HERO CARD */}
            <div className="relative bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-neutral-200/90 shadow-xs flex flex-col items-center text-center overflow-hidden">
              
              {/* Subtle Creative Blueprint / Geometry background illustration */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-[0.06] flex items-center justify-center"
                aria-hidden="true"
              >
                <svg viewBox="0 0 800 600" className="w-full h-full text-black" fill="none" stroke="currentColor" strokeWidth="1">
                  <circle cx="200" cy="200" r="160" />
                  <circle cx="200" cy="200" r="100" strokeDasharray="4 4" />
                  <circle cx="600" cy="350" r="140" />
                  <circle cx="600" cy="350" r="80" strokeDasharray="6 6" />
                  <line x1="100" y1="50" x2="700" y2="550" strokeWidth="0.5" />
                  <line x1="50" y1="400" x2="750" y2="200" strokeWidth="0.5" />
                  <path d="M 500,100 L 650,250 L 500,400 Z" />
                </svg>
              </div>

              {/* Top Centered Brand Logo */}
              <div className="relative z-10 flex flex-col items-center mb-4">
                <Logo size={42} showWordmark={false} />
                <span className="text-base sm:text-lg font-bold tracking-tight text-[#121212] mt-2">
                  KB Taller Creativo
                </span>
              </div>

              {/* Kicker */}
              <div className="relative z-10 flex items-center justify-center flex-wrap gap-1.5 text-[10px] sm:text-[11px] font-semibold text-neutral-500 uppercase tracking-wider mb-5">
                <span className="text-[#E11D74]">KB TALLER CREATIVO</span>
                <span aria-hidden="true" className="text-neutral-300">·</span>
                <span>MARKETING DIGITAL & DISEÑO ESTRATÉGICO</span>
                <span aria-hidden="true" className="text-neutral-300">·</span>
                <span>ESTRATEGIA 2026</span>
              </div>

              {/* Headline */}
              <h1 className="relative z-10 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#121212] leading-[1.15] mb-4 [text-wrap:balance]">
                Desarrollo de software, marketing digital, sublimación y formación académica.
              </h1>

              {/* Subhead */}
              <p className="relative z-10 text-xs sm:text-sm text-neutral-600 max-w-xl leading-relaxed mb-7">
                En KB Taller Creativo unimos ingeniería tecnológica, estrategias de captación digital, taller de estampado y merchandising físico y programas de capacitación práctica.
              </p>

              {/* Buttons */}
              <div className="relative z-10 flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={onOpenProjectModal}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#D91B74] to-[#C2185B] hover:opacity-95 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  <span>Solicitar Propuesta</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="#portafolio"
                  className="text-xs sm:text-sm font-semibold text-[#121212] hover:text-[#E11D74] transition-colors py-2 px-2"
                >
                  Ver Casos de Éxito
                </a>
              </div>
            </div>

            {/* BOTTOM PREVIEW STRIP / CAROUSEL WITH 3 ITEMS */}
            <div className="relative flex items-center">
              
              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="absolute -left-3 sm:-left-4 z-20 w-8 h-8 rounded-full bg-white border border-neutral-200/90 shadow-md flex items-center justify-center text-neutral-700 hover:text-[#E11D74] hover:scale-105 transition-all cursor-pointer"
                aria-label="Ver anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* 3 Visible Cards */}
              <div className="grid grid-cols-3 gap-2.5 sm:gap-3 w-full">
                {visibleItems.map((item, idx) => (
                  <div
                    key={`${item.id}-${idx}`}
                    className="bg-white rounded-2xl border border-neutral-200/90 overflow-hidden h-[120px] sm:h-[135px] shadow-xs flex flex-col transition-all hover:border-[#E11D74]/40"
                  >
                    {item.type === 'image' ? (
                      <div className="relative w-full h-full overflow-hidden group">
                        <img
                          src={item.image}
                          alt={item.alt || ''}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-2 sm:p-2.5">
                          <span className="text-[10px] sm:text-xs font-semibold text-white truncate">
                            {item.label}
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="p-3 sm:p-4 flex flex-col justify-center h-full text-left bg-neutral-50/60">
                        <span className="text-[9px] font-bold uppercase tracking-wider text-neutral-400 mb-0.5">
                          {item.tag}
                        </span>
                        <h2 className="text-xs sm:text-sm font-bold text-[#121212] leading-tight mb-1">
                          {item.title}
                        </h2>
                        <p className="text-[10px] text-neutral-500 line-clamp-2 leading-snug">
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
                className="absolute -right-3 sm:-right-4 z-20 w-8 h-8 rounded-full bg-white border border-neutral-200/90 shadow-md flex items-center justify-center text-neutral-700 hover:text-[#E11D74] hover:scale-105 transition-all cursor-pointer"
                aria-label="Ver siguiente"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: 2 Vertical Category Blocks with Photographic Backgrounds */}
          <div className="order-3 md:order-3 md:col-span-3 flex flex-col gap-3.5 lg:gap-4">
            
            {/* Block 3: Marketing Digital */}
            <button
              onClick={() => handleCategoryClick('marketing')}
              className="relative flex-1 min-h-[180px] md:min-h-[260px] rounded-3xl p-5 lg:p-7 flex flex-col justify-between text-left overflow-hidden border border-neutral-200/90 hover:border-[#E11D74] transition-all duration-500 group shadow-xs hover:shadow-xl cursor-pointer"
            >
              {/* Photographic Background */}
              <img
                src="/src/assets/images/hero_marketing_digital_1791750116471.jpg"
                alt="Marketing Digital & Crecimiento"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Scrim Overlay */}
              <div 
                className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30 group-hover:from-black/95 group-hover:via-black/60 transition-colors duration-500"
                aria-hidden="true" 
              />

              {/* Top Pill & Arrow */}
              <div className="relative z-10 flex items-center justify-between w-full">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/25 text-white text-[11px] font-semibold tracking-wide shadow-xs">
                  <TrendingUp className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>Paid Media & Ads</span>
                </span>
                <span className="w-7 h-7 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>

              {/* Title & Prompt */}
              <div className="relative z-10 space-y-1">
                <span className="block text-xl lg:text-2xl font-extrabold tracking-tight text-white group-hover:text-pink-200 transition-colors leading-tight drop-shadow-sm">
                  Marketing<br />Digital
                </span>
                <span className="block text-xs text-white/70 font-medium group-hover:text-white transition-colors">
                  Ver campañas y ROAS →
                </span>
              </div>
            </button>

            {/* Block 4: Formación Académica */}
            <button
              onClick={() => handleCategoryClick('formacion')}
              className="relative flex-1 min-h-[180px] md:min-h-[260px] rounded-3xl p-5 lg:p-7 flex flex-col justify-between text-left overflow-hidden border border-neutral-200/90 hover:border-[#E11D74] transition-all duration-500 group shadow-xs hover:shadow-xl cursor-pointer"
            >
              {/* Photographic Background */}
              <img
                src="/src/assets/images/hero_formacion_academica_1791750085127.jpg"
                alt="Formación Académica y Talleres Prácticos"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Scrim Overlay */}
              <div 
                className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30 group-hover:from-black/95 group-hover:via-black/60 transition-colors duration-500"
                aria-hidden="true" 
              />

              {/* Top Pill & Arrow */}
              <div className="relative z-10 flex items-center justify-between w-full">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/25 text-white text-[11px] font-semibold tracking-wide shadow-xs">
                  <GraduationCap className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>Talleres Prácticos</span>
                </span>
                <span className="w-7 h-7 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>

              {/* Title & Prompt */}
              <div className="relative z-10 space-y-1">
                <span className="block text-xl lg:text-2xl font-extrabold tracking-tight text-white group-hover:text-pink-200 transition-colors leading-tight drop-shadow-sm">
                  Formación<br />Académica
                </span>
                <span className="block text-xs text-white/70 font-medium group-hover:text-white transition-colors">
                  Ver cursos y fechas →
                </span>
              </div>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

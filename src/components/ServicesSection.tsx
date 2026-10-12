import React, { useState, useMemo } from 'react';
import { 
  Code,
  Smartphone,
  TrendingUp, 
  Sparkles,
  Printer,
  Box,
  GraduationCap,
  BookOpen,
  ArrowRight,
  ArrowUpRight,
  Check,
  Search,
  MessageCircle,
  Layers,
  Zap,
  ShieldCheck,
  SlidersHorizontal,
  ChevronRight,
  X,
  ExternalLink,
  Cpu,
  BarChart3,
  Shirt,
  Award
} from 'lucide-react';
import { SERVICES, SERVICE_CATEGORIES, ServiceItem } from '../data/agencyData.ts';

// High-resolution photography mapping for each category banner
const CATEGORY_BACKGROUNDS: Record<string, string> = {
  software: '/src/assets/images/hero_software_dev_1791750101061.jpg',
  marketing: '/src/assets/images/hero_marketing_digital_1791750117072.jpg',
  sublimacion: '/src/assets/images/hero_sublimacion_textil_1791750133160.jpg',
  formacion: '/src/assets/images/hero_formacion_academica_1791750085449.jpg',
};

// Distinctive color and styling configurations for each discipline
const CATEGORY_THEMES: Record<string, {
  name: string;
  badge: string;
  dotColor: string;
  accentBorder: string;
  accentGradient: string;
  iconBg: string;
  glowColor: string;
}> = {
  software: {
    name: 'Software',
    badge: 'bg-blue-50 text-blue-700 border-blue-200/70',
    dotColor: 'bg-blue-500',
    accentBorder: 'group-hover:border-blue-500/40',
    accentGradient: 'from-blue-600 via-indigo-500 to-cyan-400',
    iconBg: 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white',
    glowColor: 'rgba(59, 130, 246, 0.08)',
  },
  marketing: {
    name: 'Marketing',
    badge: 'bg-emerald-50 text-emerald-700 border-emerald-200/70',
    dotColor: 'bg-emerald-500',
    accentBorder: 'group-hover:border-emerald-500/40',
    accentGradient: 'from-emerald-600 via-teal-500 to-emerald-400',
    iconBg: 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white',
    glowColor: 'rgba(16, 185, 129, 0.08)',
  },
  sublimacion: {
    name: 'Sublimación',
    badge: 'bg-pink-50 text-[#E11D74] border-pink-200/70',
    dotColor: 'bg-[#E11D74]',
    accentBorder: 'group-hover:border-[#E11D74]/40',
    accentGradient: 'from-[#E11D74] via-fuchsia-500 to-pink-400',
    iconBg: 'bg-pink-50 text-[#E11D74] group-hover:bg-[#E11D74] group-hover:text-white',
    glowColor: 'rgba(225, 29, 116, 0.09)',
  },
  formacion: {
    name: 'Formación',
    badge: 'bg-amber-50 text-amber-800 border-amber-200/70',
    dotColor: 'bg-amber-500',
    accentBorder: 'group-hover:border-amber-500/40',
    accentGradient: 'from-amber-500 via-orange-500 to-yellow-400',
    iconBg: 'bg-amber-50 text-amber-600 group-hover:bg-amber-600 group-hover:text-white',
    glowColor: 'rgba(245, 158, 11, 0.08)',
  },
};

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  selectedCategory?: string;
  onCategoryChange?: (category: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ 
  onSelectService,
  selectedCategory,
  onCategoryChange 
}) => {
  const [internalCategory, setInternalCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'grid' | 'detailed'>('grid');
  const [mousePositions, setMousePositions] = useState<{ [key: string]: { x: number; y: number } }>({});

  const activeCategory = selectedCategory !== undefined ? selectedCategory : internalCategory;

  const handleCategoryClick = (id: string) => {
    if (onCategoryChange) {
      onCategoryChange(id);
    } else {
      setInternalCategory(id);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, id: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePositions(prev => ({
      ...prev,
      [id]: {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }
    }));
  };

  const filteredServices = useMemo(() => {
    return SERVICES.filter((service) => {
      const matchesCategory = activeCategory === 'all' || service.categoryId === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesQuery = !q || 
        service.title.toLowerCase().includes(q) || 
        service.shortDescription.toLowerCase().includes(q) ||
        service.deliverables.some(d => d.toLowerCase().includes(q)) ||
        service.kpi.toLowerCase().includes(q);

      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, searchQuery]);

  const getCategoryCount = (categoryId: string) => {
    if (categoryId === 'all') return SERVICES.length;
    return SERVICES.filter(s => s.categoryId === categoryId).length;
  };

  const getCategoryIcon = (id: string) => {
    const props = { className: "w-3.5 h-3.5 shrink-0" };
    switch (id) {
      case 'all': return <Layers {...props} />;
      case 'software': return <Code {...props} />;
      case 'marketing': return <TrendingUp {...props} />;
      case 'sublimacion': return <Printer {...props} />;
      case 'formacion': return <GraduationCap {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  const getServiceIcon = (iconName: string) => {
    const props = { className: "w-5 h-5 transition-transform duration-300 group-hover:scale-110" };
    switch (iconName) {
      case 'Code': return <Code {...props} />;
      case 'Smartphone': return <Smartphone {...props} />;
      case 'TrendingUp': return <TrendingUp {...props} />;
      case 'Sparkles': return <Sparkles {...props} />;
      case 'Printer': return <Printer {...props} />;
      case 'Box': return <Box {...props} />;
      case 'GraduationCap': return <GraduationCap {...props} />;
      case 'BookOpen': return <BookOpen {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  // WhatsApp quick action URL generator
  const getWhatsAppServiceLink = (serviceTitle: string) => {
    const phone = '34653556066';
    const message = `Hola KB Taller Creativo 👋 Me gustaría solicitar información y cotización sobre el servicio: "${serviceTitle}". ¿Podríamos coordinar detalles?`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  const currentCategoryMeta = SERVICE_CATEGORIES.find(c => c.id === activeCategory);

  return (
    <section id="servicios" className="relative py-24 md:py-32 border-b border-neutral-200 overflow-hidden bg-[#FAFAFA]">
      {/* Ambient background glow accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-pink-500/5 via-neutral-100/20 to-transparent pointer-events-none blur-3xl -z-10" />
      <div className="absolute top-1/3 -right-24 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 -left-24 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            {/* Live Indicator Kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-neutral-200/80 shadow-xs text-xs font-medium text-neutral-600 mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E11D74] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E11D74]"></span>
              </span>
              <span className="tracking-wide uppercase text-[11px] font-semibold text-neutral-500">Disciplinas & Capacidades</span>
              <span className="text-neutral-300" aria-hidden="true">|</span>
              <span className="text-[#E11D74] font-semibold">Taller Multidisciplinar</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#121212] [text-wrap:balance] leading-[1.15]">
              Cuatro pilares creativos y técnicos bajo un mismo techo.
            </h2>
          </div>

          <div className="lg:max-w-sm flex flex-col gap-3">
            <p className="text-sm text-neutral-600 leading-relaxed">
              Combinamos ingeniería de software robusta, estrategias de adquisición digital, confección y estampación física de alta gama, y formación práctica para proyectos con visión de futuro.
            </p>
            <div className="flex items-center gap-4 text-xs font-medium text-neutral-500">
              <span className="inline-flex items-center gap-1.5 text-neutral-800">
                <ShieldCheck className="w-4 h-4 text-[#E11D74]" />
                Garantía técnica
              </span>
              <span className="inline-flex items-center gap-1.5 text-neutral-800">
                <Zap className="w-4 h-4 text-amber-500" />
                Entrega ágil
              </span>
            </div>
          </div>
        </div>

        {/* Dynamic Category Showcase Banner (changes smoothly per category) */}
        {activeCategory !== 'all' && currentCategoryMeta && (
          <div className="mb-8 relative overflow-hidden rounded-2xl border border-neutral-200/80 bg-white shadow-sm transition-all duration-500">
            <div className="grid grid-cols-1 md:grid-cols-12 items-center">
              
              {/* Category Info */}
              <div className="p-6 md:p-8 md:col-span-8 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider rounded-md border ${
                    CATEGORY_THEMES[activeCategory]?.badge || 'bg-neutral-100 text-neutral-700'
                  }`}>
                    Unidad Especializada
                  </span>
                  <span className="text-xs font-mono text-neutral-400">
                    {filteredServices.length} servicios disponibles
                  </span>
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-[#121212] mb-2 tracking-tight">
                  {currentCategoryMeta.name}
                </h3>
                
                <p className="text-sm text-neutral-600 leading-relaxed max-w-xl">
                  {currentCategoryMeta.description}
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
                  <span className="text-neutral-500">Beneficios clave:</span>
                  <span className="px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-700 font-medium">Asesoría directa</span>
                  <span className="px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-700 font-medium">Cotización express</span>
                  <span className="px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-700 font-medium">Garantía de taller</span>
                </div>
              </div>

              {/* Category Visual Thumbnail */}
              <div className="md:col-span-4 h-40 md:h-full min-h-[160px] relative overflow-hidden border-t md:border-t-0 md:border-l border-neutral-100">
                <img 
                  src={CATEGORY_BACKGROUNDS[activeCategory] || '/src/assets/images/hero_agency_workspace_1791738071569.jpg'}
                  alt={currentCategoryMeta.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        )}

        {/* Interactive Controls Bar: Segmented Filters + Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-4 border-b border-neutral-200">
          
          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {SERVICE_CATEGORIES.map((category) => {
              const isActive = activeCategory === category.id;
              const count = getCategoryCount(category.id);
              return (
                <button
                  key={category.id}
                  onClick={() => handleCategoryClick(category.id)}
                  className={`group relative px-4 py-2 text-xs font-semibold whitespace-nowrap shrink-0 rounded-xl transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? 'bg-[#121212] text-white shadow-md shadow-neutral-900/10'
                      : 'bg-white hover:bg-neutral-100 text-neutral-600 hover:text-black border border-neutral-200/70'
                  }`}
                >
                  <span className={`transition-colors ${isActive ? 'text-[#E11D74]' : 'text-neutral-400 group-hover:text-neutral-700'}`}>
                    {getCategoryIcon(category.id)}
                  </span>
                  <span>{category.name}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono transition-colors ${
                    isActive 
                      ? 'bg-neutral-800 text-neutral-300' 
                      : 'bg-neutral-100 text-neutral-500 group-hover:bg-neutral-200'
                  }`}>
                    {count}
                  </span>

                  {/* Active bottom accent micro-line */}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#E11D74] rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Quick Search & View Toggle */}
          <div className="flex items-center gap-2.5 shrink-0">
            {/* Search Input */}
            <div className="relative flex-1 sm:w-64">
              <Search className="w-3.5 h-3.5 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Filtrar por tecnología o servicio..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-7 py-2 text-xs bg-white border border-neutral-200/80 rounded-xl focus:outline-none focus:border-[#E11D74] focus:ring-2 focus:ring-[#E11D74]/15 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700"
                  aria-label="Limpiar búsqueda"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Results Counter if searching */}
        {searchQuery && (
          <div className="mb-6 flex items-center justify-between text-xs text-neutral-500">
            <span>Resultados para <strong className="text-neutral-800 font-semibold">"{searchQuery}"</strong> ({filteredServices.length})</span>
            <button
              onClick={() => setSearchQuery('')}
              className="text-[#E11D74] font-medium hover:underline cursor-pointer"
            >
              Restablecer filtros
            </button>
          </div>
        )}

        {/* Services Grid with Spotlight & Glow Effects */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {filteredServices.map((service, index) => {
              const theme = CATEGORY_THEMES[service.categoryId] || CATEGORY_THEMES.software;
              const pos = mousePositions[service.id];

              return (
                <div
                  key={service.id}
                  onMouseMove={(e) => handleMouseMove(e, service.id)}
                  className={`shine-hover-effect group relative p-6 sm:p-7 bg-white border border-neutral-200/90 rounded-2xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/5 ${theme.accentBorder} overflow-hidden`}
                >
                  {/* Spotlight Radial Glow Following Cursor */}
                  {pos && (
                    <div 
                      className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                      style={{
                        background: `radial-gradient(350px circle at ${pos.x}px ${pos.y}px, ${theme.glowColor}, transparent 70%)`
                      }}
                    />
                  )}

                  {/* Top Expanding Accent Gradient Line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r ${theme.accentGradient}`} />

                  {/* Top Floating Badge & Icon */}
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      {/* Icon with Micro-bounce & Color Shift */}
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 shadow-xs border border-neutral-200/60 ${theme.iconBg}`}>
                        {getServiceIcon(service.iconName)}
                      </div>

                      {/* Department Tag & Watermark Number */}
                      <div className="flex items-center gap-2">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${theme.badge}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${theme.dotColor} animate-pulse`} />
                          {theme.name}
                        </span>
                        <span className="text-xs font-mono font-bold text-neutral-300 group-hover:text-neutral-500 transition-colors">
                          0{index + 1}
                        </span>
                      </div>
                    </div>

                    {/* Title with Smooth Hover Tint */}
                    <h3 className="text-lg font-bold text-[#121212] tracking-tight mb-2.5 leading-snug group-hover:text-[#121212] transition-colors">
                      {service.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs text-neutral-600 leading-relaxed mb-6 font-normal">
                      {service.shortDescription}
                    </p>

                    {/* Key Deliverables Checklist with Micro-interactions */}
                    <div className="space-y-2 mb-6 border-t border-neutral-100 pt-4">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-2">
                        Entregables Clave
                      </div>
                      {service.deliverables.slice(0, 3).map((item, idx) => (
                        <div 
                          key={idx} 
                          className="flex items-start gap-2.5 text-xs text-neutral-600 group/item hover:text-neutral-900 transition-colors"
                        >
                          <div className="w-4 h-4 rounded-full bg-pink-50 text-[#E11D74] flex items-center justify-center shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform">
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </div>
                          <span className="leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom KPIs & Dual Action Buttons */}
                  <div className="pt-4 border-t border-neutral-100">
                    {/* Impact KPI Tag */}
                    <div className="mb-4 flex items-center justify-between bg-neutral-50 group-hover:bg-pink-50/40 p-2.5 rounded-xl border border-neutral-100 group-hover:border-pink-100 transition-colors">
                      <div className="flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5 text-[#E11D74] shrink-0" />
                        <span className="text-[11px] font-medium text-neutral-500">Métrica:</span>
                      </div>
                      <span className="text-[11px] font-bold text-[#121212] group-hover:text-[#E11D74] transition-colors truncate max-w-[190px]">
                        {service.kpi}
                      </span>
                    </div>

                    {/* Actions: Direct WhatsApp Query + Scope Modal */}
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => onSelectService(service)}
                        className="py-2.5 px-3 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-semibold rounded-xl inline-flex items-center justify-center gap-1.5 transition-all cursor-pointer group/btn"
                      >
                        <span>Ver alcance</span>
                        <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                      </button>

                      <a
                        href={getWhatsAppServiceLink(service.title)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2.5 px-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200/80 text-xs font-semibold rounded-xl inline-flex items-center justify-center gap-1.5 transition-all cursor-pointer hover:shadow-xs group/wa"
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-emerald-600 group-hover/wa:scale-110 transition-transform" />
                        <span>Cotizar</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="p-12 text-center bg-white rounded-2xl border border-neutral-200">
            <Search className="w-8 h-8 text-neutral-300 mx-auto mb-3" />
            <h3 className="text-base font-semibold text-neutral-800 mb-1">No se encontraron servicios</h3>
            <p className="text-xs text-neutral-500 mb-4">Intenta ajustar tu búsqueda o selecciona otra categoría.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                handleCategoryClick('all');
              }}
              className="px-4 py-2 bg-[#121212] text-white text-xs font-semibold rounded-xl hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              Ver todos los servicios
            </button>
          </div>
        )}

        {/* Bottom Operational Guarantees Banner */}
        <div className="mt-16 pt-12 border-t border-neutral-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div className="p-4 rounded-xl bg-white border border-neutral-200/80 flex items-start gap-3.5 hover:border-neutral-300 transition-colors">
              <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <Cpu className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-neutral-900 mb-0.5">Código Limpio</h4>
                <p className="text-[11px] text-neutral-500 leading-relaxed">Arquitecturas modernas sin deuda técnica ni dependencias obsoletas.</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-neutral-200/80 flex items-start gap-3.5 hover:border-neutral-300 transition-colors">
              <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <BarChart3 className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-neutral-900 mb-0.5">Retorno Medible</h4>
                <p className="text-[11px] text-neutral-500 leading-relaxed">Métricas transparentes y modelos de atribución claros en cada campaña.</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-neutral-200/80 flex items-start gap-3.5 hover:border-neutral-300 transition-colors">
              <div className="w-9 h-9 rounded-lg bg-pink-50 text-[#E11D74] flex items-center justify-center shrink-0">
                <Shirt className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-neutral-900 mb-0.5">Fidelidad Textil</h4>
                <p className="text-[11px] text-neutral-500 leading-relaxed">Calibración cromática y estampados de alta durabilidad en lavados.</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-neutral-200/80 flex items-start gap-3.5 hover:border-neutral-300 transition-colors">
              <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-neutral-900 mb-0.5">Formación Real</h4>
                <p className="text-[11px] text-neutral-500 leading-relaxed">Metodología 100% práctica con maquinaria y casos comerciales reales.</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

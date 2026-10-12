import React, { useState, useMemo } from 'react';
import { 
  ArrowUpRight, 
  TrendingUp, 
  CheckCircle2, 
  ChevronRight, 
  LayoutGrid, 
  List, 
  Search, 
  Eye, 
  Layers,
  Sparkles,
  Award,
  Clock,
  Building2
} from 'lucide-react';
import { PROJECTS, ProjectItem } from '../data/agencyData.ts';

interface PortfolioSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'editorial' | 'grid'>('editorial');
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const filterTabs = [
    { id: 'all', label: 'Todos los Trabajos', count: PROJECTS.length },
    { id: 'software', label: 'Desarrollo de Software', count: PROJECTS.filter(p => p.categorySlug === 'software').length },
    { id: 'marketing', label: 'Marketing Digital', count: PROJECTS.filter(p => p.categorySlug === 'marketing').length },
    { id: 'sublimacion', label: 'Sublimación & Merch', count: PROJECTS.filter(p => p.categorySlug === 'sublimacion').length },
    { id: 'formacion', label: 'Formación Académica', count: PROJECTS.filter(p => p.categorySlug === 'formacion').length },
  ];

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((p) => {
      const matchesCategory = activeFilter === 'all' || p.categorySlug === activeFilter;
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch = !query || 
        p.title.toLowerCase().includes(query) ||
        p.client.toLowerCase().includes(query) ||
        p.industry.toLowerCase().includes(query) ||
        p.summary.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="portafolio" className="py-20 md:py-28 border-b border-neutral-200 bg-white relative overflow-hidden">
      {/* Subtle ambient blur background accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#E11D74]/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-semibold text-neutral-800 mb-3 tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#E11D74] animate-pulse" />
              <span>Trabajos Realizados</span>
              <span aria-hidden="true">·</span>
              <span className="text-neutral-500">Casos Reales con Resultados</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#121212] [text-wrap:balance]">
              Nuestros trabajos realizados: calidad comprobable en cada disciplina.
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-3 max-w-xl leading-relaxed">
              Descubre proyectos reales donde integramos ingeniería de software, producción física de merchandising, campañas de adquisición y formación técnica.
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="flex items-center gap-4 p-3 bg-neutral-50 border border-neutral-200/90 rounded-2xl shadow-xs self-start md:self-end">
            <div className="text-left px-2">
              <div className="text-lg font-bold font-mono text-[#121212]">100%</div>
              <div className="text-[10px] text-neutral-500 font-medium">Entregas a tiempo</div>
            </div>
            <div className="w-px h-8 bg-neutral-200" />
            <div className="text-left px-2">
              <div className="text-lg font-bold font-mono text-[#E11D74]">+8</div>
              <div className="text-[10px] text-neutral-500 font-medium">Casos detallados</div>
            </div>
            <div className="w-px h-8 bg-neutral-200" />
            <div className="text-left px-2">
              <div className="text-lg font-bold font-mono text-[#121212]">4.9/5</div>
              <div className="text-[10px] text-neutral-500 font-medium">Calificación clientes</div>
            </div>
          </div>
        </div>

        {/* Toolbar: Category Filters, Search Input & Layout Mode Toggles */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-8 sm:mb-10 pb-4 sm:pb-5 border-b border-neutral-200">
          {/* Category Tabs: Fluid wrap & responsive sizing */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-3 sm:px-4 py-2 sm:py-2.5 text-xs font-medium rounded-xl transition-all duration-200 cursor-pointer flex items-center gap-1.5 sm:gap-2 ${
                    isActive
                      ? 'bg-[#121212] text-white shadow-md shadow-black/15 scale-[1.02]'
                      : 'text-neutral-700 hover:text-black bg-neutral-100/80 hover:bg-neutral-200/90'
                  }`}
                >
                  <span className="font-semibold">{tab.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono transition-colors ${
                      isActive ? 'bg-[#E11D74] text-white' : 'bg-neutral-200/90 text-neutral-600'
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search + View Toggle */}
          <div className="flex items-center gap-2 sm:gap-3 w-full lg:w-auto">
            {/* Search input */}
            <div className="relative flex-1 sm:w-64">
              <Search className="w-3.5 h-3.5 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar cliente, tecnología..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-7 py-2 text-xs bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:border-[#E11D74] focus:bg-white transition-colors placeholder:text-neutral-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-neutral-400 hover:text-neutral-700 cursor-pointer p-0.5"
                  aria-label="Limpiar búsqueda"
                >
                  ✕
                </button>
              )}
            </div>

            {/* View Mode Toggle Buttons */}
            <div className="flex items-center p-1 bg-neutral-100 rounded-xl border border-neutral-200/80 shrink-0">
              <button
                onClick={() => setViewMode('editorial')}
                className={`p-1.5 sm:p-2 rounded-lg transition-colors cursor-pointer flex items-center gap-1 text-xs ${
                  viewMode === 'editorial' ? 'bg-white text-black shadow-xs font-medium' : 'text-neutral-500 hover:text-black'
                }`}
                title="Vista Editorial Desglosada"
              >
                <List className="w-4 h-4" />
                <span className="hidden xl:inline text-[11px]">Detallado</span>
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 sm:p-2 rounded-lg transition-colors cursor-pointer flex items-center gap-1 text-xs ${
                  viewMode === 'grid' ? 'bg-white text-black shadow-xs font-medium' : 'text-neutral-500 hover:text-black'
                }`}
                title="Vista de Galería en Cuadrícula"
              >
                <LayoutGrid className="w-4 h-4" />
                <span className="hidden xl:inline text-[11px]">Cuadrícula</span>
              </button>
            </div>
          </div>
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-neutral-50 rounded-2xl border border-dashed border-neutral-300">
            <p className="text-neutral-500 text-sm">No se encontraron proyectos con el criterio seleccionado.</p>
            <button
              onClick={() => { setActiveFilter('all'); setSearchQuery(''); }}
              className="mt-3 px-4 py-2 text-xs font-semibold text-[#E11D74] hover:underline cursor-pointer"
            >
              Restablecer filtros
            </button>
          </div>
        )}

        {/* 1. EDITORIAL DETAILED VIEW */}
        {viewMode === 'editorial' ? (
          <div className="space-y-12">
            {filteredProjects.map((project, index) => {
              const isReversed = index % 2 === 1;
              return (
                <article
                  key={project.id}
                  className="group shine-hover-effect grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-8 bg-[#FAFAFA] rounded-2xl border border-neutral-200/90 hover:border-[#E11D74]/40 hover:shadow-xl hover:shadow-[#E11D74]/5 transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Visual Thumbnail */}
                  <div
                    className={`lg:col-span-6 overflow-hidden rounded-xl border border-neutral-200/80 bg-neutral-100 aspect-[4/3] relative group ${
                      isReversed ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    {!imageErrors[project.id] ? (
                      <img
                        src={project.image}
                        alt={`Caso de estudio ${project.client} - ${project.title}`}
                        referrerPolicy="no-referrer"
                        onError={() => handleImageError(project.id)}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106 group-hover:rotate-0.5"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col justify-center items-center p-8 bg-neutral-900 text-white">
                        <span className="text-xs uppercase tracking-widest text-[#E11D74] mb-2">{project.client}</span>
                        <p className="text-base font-medium text-center">{project.title}</p>
                      </div>
                    )}

                    {/* Category Badge with subtle pulse indicator */}
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full text-[11px] font-semibold text-neutral-800 border border-neutral-200/90 shadow-sm flex items-center gap-2 group-hover:border-[#E11D74]/40 transition-colors">
                      <span className="w-2 h-2 rounded-full bg-[#E11D74] animate-pulse" />
                      <span>{project.category}</span>
                    </div>

                    {/* Quick zoom tag */}
                    <div className="absolute bottom-4 right-4 bg-black/75 backdrop-blur-sm px-2.5 py-1 rounded-md text-[10px] text-white font-mono flex items-center gap-1.5">
                      <Clock className="w-3 h-3 text-[#E11D74]" />
                      <span>{project.duration}</span>
                    </div>

                    {/* Hover Quick Action Overlay */}
                    <div 
                      onClick={() => onSelectProject(project)}
                      className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5 cursor-pointer"
                    >
                      <span className="text-white text-xs font-semibold flex items-center gap-1.5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        Ver auditoría completa y desglose de trabajo
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#E11D74]" />
                      </span>
                    </div>
                  </div>

                  {/* Content & Details */}
                  <div className={`lg:col-span-6 space-y-5 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                    {/* Metadata */}
                    <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-500">
                      <span className="font-semibold text-neutral-900 px-2.5 py-0.5 rounded-md bg-neutral-100 border border-neutral-200/80 inline-flex items-center gap-1.5">
                        <Building2 className="w-3 h-3 text-neutral-500" />
                        {project.client}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="text-neutral-600">{project.industry}</span>
                    </div>

                    {/* Title & Summary */}
                    <div>
                      <h3 className="text-2xl sm:text-2xl font-bold tracking-tight text-[#121212] mb-2 leading-snug group-hover:text-[#E11D74] transition-colors duration-200">
                        {project.title}
                      </h3>
                      <p className="text-sm text-neutral-600 leading-relaxed">
                        {project.summary}
                      </p>
                    </div>

                    {/* Objectives vs Strategies Preview */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-neutral-200 text-xs">
                      <div className="p-3 rounded-xl bg-white border border-neutral-200/80 transition-transform duration-200 group-hover:translate-x-0.5 shadow-2xs">
                        <p className="font-semibold text-neutral-900 mb-1 uppercase tracking-wider text-[10px] flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                          Objetivo del Trabajo:
                        </p>
                        <p className="text-neutral-600 leading-relaxed line-clamp-2">
                          {project.objectives[0]}
                        </p>
                      </div>
                      <div className="p-3 rounded-xl bg-white border border-neutral-200/80 transition-transform duration-200 group-hover:translate-x-0.5 shadow-2xs">
                        <p className="font-semibold text-neutral-900 mb-1 uppercase tracking-wider text-[10px] flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#E11D74]" />
                          Metodología Aplicada:
                        </p>
                        <p className="text-neutral-600 leading-relaxed line-clamp-2">
                          {project.strategies[0]}
                        </p>
                      </div>
                    </div>

                    {/* Key Quantitative Metrics */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-3 border-t border-neutral-200">
                      {project.results.map((res, rIdx) => (
                        <div 
                          key={rIdx} 
                          className="p-2.5 rounded-xl bg-white border border-neutral-200/70 hover:border-[#E11D74]/40 hover:bg-neutral-50 transition-all duration-200 shadow-2xs"
                        >
                          <div className="text-lg sm:text-xl font-bold font-mono tabular-nums text-[#121212] group-hover:text-[#E11D74] transition-colors">
                            {res.value}
                          </div>
                          <div className="text-[10px] text-neutral-500 leading-tight mt-0.5 font-medium">
                            {res.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Interactive Button to Open Full Case Details */}
                    <div className="pt-2 flex items-center gap-3">
                      <button
                        onClick={() => onSelectProject(project)}
                        className="group/btn inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#121212] hover:bg-[#E11D74] rounded-xl transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md hover:shadow-[#E11D74]/20 hover:scale-102 active:scale-98"
                      >
                        <span>Ver informe de trabajo completo</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
                      </button>

                      <span className="text-[11px] text-neutral-400 italic">
                        {project.results[0].label}: {project.results[0].value}
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          /* 2. GRID GALLERY VIEW (VISUAL SHOWCASE) */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group shine-hover-effect bg-[#FAFAFA] rounded-2xl border border-neutral-200/90 hover:border-[#E11D74]/40 hover:shadow-xl hover:shadow-[#E11D74]/5 transition-all duration-300 overflow-hidden flex flex-col cursor-pointer hover:-translate-y-1.5"
              >
                {/* Media banner */}
                <div className="aspect-[16/10] overflow-hidden relative bg-neutral-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    onError={() => handleImageError(project.id)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-semibold text-neutral-900 border border-neutral-200/90 shadow-2xs flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E11D74]" />
                    <span>{project.category}</span>
                  </div>
                  <div className="absolute bottom-2.5 right-2.5 bg-black/75 px-2 py-0.5 rounded text-[10px] text-white font-mono">
                    {project.duration}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] font-medium text-neutral-500 mb-1">
                      {project.client} · <span className="text-neutral-400">{project.industry}</span>
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-neutral-900 group-hover:text-[#E11D74] transition-colors leading-snug line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-xs text-neutral-600 mt-2 line-clamp-2 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>

                  {/* Highlights Bar */}
                  <div className="pt-3.5 mt-3.5 border-t border-neutral-200/80 flex items-center justify-between gap-2">
                    <div className="min-w-0">
                      <div className="text-base font-bold font-mono text-[#121212] group-hover:text-[#E11D74] transition-colors">
                        {project.results[0].value}
                      </div>
                      <div className="text-[10px] text-neutral-500 truncate max-w-[130px] sm:max-w-[150px]">
                        {project.results[0].label}
                      </div>
                    </div>
                    <span className="shrink-0 inline-flex items-center gap-1 text-xs font-semibold text-[#121212] group-hover:text-[#E11D74] group-hover:translate-x-0.5 transition-all">
                      Ver trabajo
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Guarantee Banner */}
        <div className="mt-16 p-6 sm:p-8 bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 text-white rounded-3xl border border-neutral-800 shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="relative z-10 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[11px] font-medium text-[#E11D74] mb-3">
              <Award className="w-3.5 h-3.5 text-[#E11D74]" />
              <span>Garantía KB Taller Creativo</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
              ¿Tienes en mente un proyecto similar para tu marca?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 mt-2 leading-relaxed">
              Desarrollamos soluciones personalizadas: desde muestras previas sin compromiso en merchandising y prototipos web, hasta diagnósticos de campañas digitales.
            </p>
          </div>

          <div className="relative z-10 shrink-0 w-full sm:w-auto">
            <a
              href="#servicios"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-black bg-white hover:bg-neutral-100 rounded-xl transition-all shadow-md hover:scale-102 active:scale-98"
            >
              <span>Explorar servicios y cotizar</span>
              <ChevronRight className="w-4 h-4 text-[#E11D74]" />
            </a>
          </div>

          {/* Ambient Glow */}
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#E11D74]/20 rounded-full blur-3xl pointer-events-none" />
        </div>
      </div>
    </section>
  );
};


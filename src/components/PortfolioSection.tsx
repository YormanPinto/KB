import React, { useState } from 'react';
import { ArrowUpRight, TrendingUp, CheckCircle2, ChevronRight } from 'lucide-react';
import { PROJECTS, ProjectItem } from '../data/agencyData.ts';

interface PortfolioSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const filterTabs = [
    { id: 'all', label: 'Todos los Proyectos' },
    { id: 'software', label: 'Desarrollo de Software' },
    { id: 'marketing', label: 'Marketing Digital' },
    { id: 'sublimacion', label: 'Sublimación & Merch' },
    { id: 'formacion', label: 'Formación Académica' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.categorySlug === activeFilter);

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="portafolio" className="py-20 md:py-28 border-b border-neutral-200 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-xs font-medium text-neutral-500 mb-3 tracking-wide uppercase">
              <span>Casos de Estudio</span>
              <span aria-hidden="true">·</span>
              <span>Resultados Verificados</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#121212] [text-wrap:balance]">
              Portafolio de casos con retorno de inversión comprobable.
            </h2>
          </div>
          <p className="text-sm text-neutral-600 max-w-sm leading-relaxed">
            Explora proyectos reales donde aplicamos nuestra metodología científica de adquisición y optimización de conversión.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-12 border-b border-neutral-200">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3.5 py-1.5 text-xs font-medium whitespace-nowrap shrink-0 rounded-md transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-[#121212] text-white shadow-xs'
                    : 'text-neutral-600 hover:text-black hover:bg-neutral-100'
                }`}
              >
                <span>{tab.label}</span>
                {isActive && <span className="ml-1.5 text-[#E11D74]">●</span>}
              </button>
            );
          })}
        </div>

        {/* Projects List */}
        <div className="space-y-16">
          {filteredProjects.map((project, index) => {
            const isReversed = index % 2 === 1;
            return (
              <article
                key={project.id}
                className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 md:p-8 bg-[#FAFAFA] rounded-2xl border border-neutral-200 hover:border-[#E11D74]/30 transition-colors"
              >
                {/* Visual Thumbnail */}
                <div
                  className={`lg:col-span-6 overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100 aspect-[4/3] relative group ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  {!imageErrors[project.id] ? (
                    <img
                      src={project.image}
                      alt={`Caso de estudio ${project.client} - ${project.title}`}
                      referrerPolicy="no-referrer"
                      onError={() => handleImageError(project.id)}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col justify-center items-center p-8 bg-neutral-900 text-white">
                      <span className="text-xs uppercase tracking-widest text-[#E11D74] mb-2">{project.client}</span>
                      <p className="text-base font-medium text-center">{project.title}</p>
                    </div>
                  )}

                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded text-[11px] font-semibold text-neutral-800 border border-neutral-200 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E11D74]" />
                    <span>{project.category}</span>
                  </div>
                </div>

                {/* Content & Details */}
                <div className={`lg:col-span-6 space-y-6 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                  {/* Metadata */}
                  <div className="flex items-center gap-2 text-xs text-neutral-500">
                    <span className="font-semibold text-neutral-900">{project.client}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.industry}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.duration}</span>
                  </div>

                  {/* Title & Summary */}
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight text-[#121212] mb-2 leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>

                  {/* Objectives vs Strategies Preview */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-neutral-200 text-xs">
                    <div>
                      <p className="font-semibold text-neutral-900 mb-1.5 uppercase tracking-wider text-[10px]">
                        Objetivo Principal:
                      </p>
                      <p className="text-neutral-600 leading-relaxed">
                        {project.objectives[0]}
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-900 mb-1.5 uppercase tracking-wider text-[10px]">
                        Estrategia Clave:
                      </p>
                      <p className="text-neutral-600 leading-relaxed">
                        {project.strategies[0]}
                      </p>
                    </div>
                  </div>

                  {/* Key Quantitative Metrics */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-neutral-200">
                    {project.results.map((res, rIdx) => (
                      <div key={rIdx}>
                        <div className="text-lg sm:text-xl font-bold font-mono tabular-nums text-[#121212] group-hover:text-[#E11D74] transition-colors">
                          {res.value}
                        </div>
                        <div className="text-[11px] text-neutral-500 leading-tight">
                          {res.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Interactive Button to Open Full Case Details */}
                  <div className="pt-2">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#121212] hover:bg-[#E11D74] rounded-lg transition-colors cursor-pointer shadow-xs"
                    >
                      <span>Ver desglose completo de estrategia</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

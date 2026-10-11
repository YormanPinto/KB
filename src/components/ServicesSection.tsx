import React, { useState } from 'react';
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
  Check
} from 'lucide-react';
import { SERVICES, SERVICE_CATEGORIES, ServiceItem } from '../data/agencyData.ts';

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

  const activeCategory = selectedCategory !== undefined ? selectedCategory : internalCategory;

  const handleCategoryClick = (id: string) => {
    if (onCategoryChange) {
      onCategoryChange(id);
    } else {
      setInternalCategory(id);
    }
  };

  const filteredServices = activeCategory === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.categoryId === activeCategory);

  const getIcon = (iconName: string) => {
    const props = { className: "w-5 h-5 text-neutral-800" };
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

  return (
    <section id="servicios" className="py-20 md:py-28 border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-xs font-medium text-neutral-500 mb-3 tracking-wide uppercase">
              <span>Disciplinas & Capacidades</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#E11D74] font-semibold">Taller Multidisciplinar</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#121212] [text-wrap:balance]">
              Cuatro pilares creativos y técnicos bajo un mismo techo.
            </h2>
          </div>
          <p className="text-sm text-neutral-600 max-w-sm leading-relaxed">
            Desde la ingeniería de software y el marketing digital hasta la producción de artículos físicos y la formación práctica para creadores.
          </p>
        </div>

        {/* Category Filter - Segmented Control */}
        <div className="flex items-center gap-1 overflow-x-auto pb-2 mb-10 border-b border-neutral-200">
          {SERVICE_CATEGORIES.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className={`px-3.5 py-2 text-xs font-medium whitespace-nowrap shrink-0 rounded-md transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-[#121212] text-white shadow-xs'
                    : 'text-neutral-600 hover:text-black hover:bg-neutral-100'
                }`}
              >
                <span>{category.name}</span>
                {isActive && <span className="ml-1.5 text-[#E11D74]">●</span>}
              </button>
            );
          })}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className="group p-6 bg-white border border-neutral-200 rounded-xl flex flex-col justify-between hover:border-[#E11D74]/40 transition-colors"
            >
              <div>
                {/* Header with icon & editorial numbering */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-lg bg-neutral-100 border border-neutral-200 flex items-center justify-center group-hover:bg-pink-50/60 group-hover:border-[#E11D74]/30 transition-colors">
                    <div className="group-hover:text-[#E11D74] transition-colors">
                      {getIcon(service.iconName)}
                    </div>
                  </div>
                  <span className="text-xs font-mono text-neutral-400 group-hover:text-[#E11D74] transition-colors">
                    0{index + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-[#121212] tracking-tight mb-2 group-hover:text-[#121212]">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-xs text-neutral-600 leading-relaxed mb-5">
                  {service.shortDescription}
                </p>

                {/* Key Deliverables */}
                <div className="space-y-2 mb-6 border-t border-neutral-100 pt-4">
                  {service.deliverables.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-neutral-500">
                      <Check className="w-3.5 h-3.5 text-[#E11D74] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Outcome & Action */}
              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                <div className="text-[11px] font-medium text-neutral-700">
                  <span className="text-neutral-400">Impacto: </span>
                  <span className="font-semibold text-[#E11D74]">{service.kpi}</span>
                </div>
                <button
                  onClick={() => onSelectService(service)}
                  className="text-xs font-semibold text-neutral-900 inline-flex items-center gap-1 hover:text-[#E11D74] transition-colors cursor-pointer"
                >
                  <span>Ver alcance</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

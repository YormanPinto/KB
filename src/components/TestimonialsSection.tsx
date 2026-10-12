import React, { useState } from 'react';
import { Quote, Building2, TrendingUp } from 'lucide-react';
import { TESTIMONIALS, TestimonialItem } from '../data/agencyData.ts';

export const TestimonialsSection: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');

  const industries = ['all', 'D2C E-commerce', 'Fintech B2B', 'Movilidad & Apps', 'Retail & Diseño'];

  const filteredTestimonials = selectedIndustry === 'all'
    ? TESTIMONIALS
    : TESTIMONIALS.filter((t) => t.industry === selectedIndustry);

  return (
    <section id="testimonios" className="py-20 md:py-28 border-b border-neutral-200 bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-xs font-medium text-neutral-500 mb-3 tracking-wide uppercase">
              <span>Evidencia & Confianza</span>
              <span aria-hidden="true">·</span>
              <span>Líderes de Crecimiento</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#121212] [text-wrap:balance]">
              Testimonios de fundadores y directores de marketing.
            </h2>
          </div>
          <p className="text-sm text-neutral-600 max-w-sm leading-relaxed">
            Opiniones contrastables de equipos directivos que confiaron en Kroma para sus fases críticas de escalado y captación.
          </p>
        </div>

        {/* Filter by Industry (Minimalist text pills / tabs) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-10 border-b border-neutral-200">
          {industries.map((ind) => (
            <button
              key={ind}
              onClick={() => setSelectedIndustry(ind)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                selectedIndustry === ind
                  ? 'bg-[#121212] text-white shadow-xs'
                  : 'text-neutral-600 hover:text-black hover:bg-neutral-100'
              }`}
            >
              <span>{ind === 'all' ? 'Todos los Sectores' : ind}</span>
              {selectedIndustry === ind && <span className="ml-1.5 text-[#E11D74]">●</span>}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="shine-hover-effect group p-8 bg-white rounded-2xl border border-neutral-200/90 flex flex-col justify-between hover:border-[#E11D74]/40 hover:shadow-xl hover:shadow-[#E11D74]/5 transition-all duration-300 hover:-translate-y-1.5"
            >
              <div>
                {/* Metric Highlight unboxed tag */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-neutral-100">
                  <div className="flex items-center gap-2 text-xs font-medium text-neutral-500">
                    <div className="p-1.5 rounded-md bg-neutral-100 group-hover:bg-neutral-200/80 transition-colors">
                      <Building2 className="w-3.5 h-3.5 text-neutral-600 group-hover:text-black transition-colors" />
                    </div>
                    <span className="font-semibold text-neutral-800">{testimonial.company}</span>
                    <span aria-hidden="true" className="text-neutral-300">·</span>
                    <span className="text-neutral-500">{testimonial.industry}</span>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-pink-50 border border-[#E11D74]/20 text-xs font-bold text-[#E11D74] font-mono group-hover:scale-105 group-hover:shadow-xs transition-transform duration-200">
                    {testimonial.highlightMetric}
                  </div>
                </div>

                {/* Quote Text */}
                <div className="relative mb-8">
                  <span className="text-4xl leading-none text-[#E11D74]/20 font-serif absolute -top-4 -left-2 select-none pointer-events-none group-hover:text-[#E11D74]/40 transition-colors">
                    “
                  </span>
                  <p className="relative z-10 text-base text-neutral-800 leading-relaxed font-normal [text-wrap:pretty] pl-3 border-l-2 border-transparent group-hover:border-[#E11D74]/50 transition-colors">
                    "{testimonial.quote}"
                  </p>
                </div>
              </div>

              {/* Author Info & Photo/Avatar */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-neutral-100">
                {/* Clean avatar with initials or photo */}
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-pink-50 to-pink-100 border border-[#E11D74]/30 flex items-center justify-center font-bold text-xs text-[#E11D74] shrink-0 group-hover:scale-110 group-hover:border-[#E11D74] transition-all duration-300 shadow-xs">
                  {testimonial.initials}
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-[#121212] leading-tight group-hover:text-[#E11D74] transition-colors">
                    {testimonial.name}
                  </h3>
                  <p className="text-xs text-neutral-500 leading-tight mt-0.5">
                    {testimonial.role} en <span className="text-neutral-800 font-medium">{testimonial.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

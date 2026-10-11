import React from 'react';
import { X, CheckCircle2, ArrowRight, TrendingUp } from 'lucide-react';
import { ProjectItem } from '../data/agencyData.ts';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onSelectForProposal: (project: ProjectItem) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ 
  project, 
  onClose,
  onSelectForProposal 
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div 
        className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-neutral-200 shadow-xl relative animate-fadeIn"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-black hover:bg-neutral-100 transition-colors z-10 cursor-pointer"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header Media */}
        <div className="relative aspect-[16/9] max-h-[300px] w-full bg-neutral-100 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-6 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-md text-xs font-semibold text-neutral-900 border border-neutral-200">
            {project.category}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-8">
          <div>
            <div className="flex items-center gap-2 text-xs text-neutral-500 mb-2">
              <span className="font-semibold text-neutral-800">{project.client}</span>
              <span aria-hidden="true">·</span>
              <span>{project.industry}</span>
              <span aria-hidden="true">·</span>
              <span>Duración: {project.duration}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#121212] tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm text-neutral-600 mt-3 leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Results Strip */}
          <div className="bg-[#FAFAFA] border border-neutral-200 rounded-xl p-5">
            <h3 className="text-xs font-semibold text-neutral-900 uppercase tracking-wider mb-4">
              Resultados Obtenidos Verificables
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {project.results.map((res, idx) => (
                <div key={idx}>
                  <div className="text-2xl font-bold font-mono text-[#121212] tabular-nums">
                    {res.value}
                  </div>
                  <div className="text-xs text-neutral-500 leading-tight mt-1">
                    {res.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Objectives & Strategy Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 bg-white border border-neutral-200 rounded-xl space-y-3">
              <h3 className="text-sm font-semibold text-[#121212]">
                1. Objetivos del Proyecto
              </h3>
              <ul className="space-y-2 text-xs text-neutral-600">
                {project.objectives.map((obj, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-neutral-900 font-bold shrink-0">•</span>
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 bg-white border border-neutral-200 rounded-xl space-y-3">
              <h3 className="text-sm font-semibold text-[#121212]">
                2. Estrategias Implementadas
              </h3>
              <ul className="space-y-2 text-xs text-neutral-600">
                {project.strategies.map((strat, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-neutral-800 shrink-0 mt-0.5" />
                    <span>{strat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Testimonial if present */}
          {project.testimonial && (
            <div className="p-5 bg-neutral-50 rounded-xl border border-neutral-200 text-xs">
              <p className="italic text-neutral-700 leading-relaxed mb-3">
                "{project.testimonial.quote}"
              </p>
              <div className="font-semibold text-neutral-900">
                {project.testimonial.author} — <span className="text-neutral-500 font-normal">{project.testimonial.role}</span>
              </div>
            </div>
          )}

          {/* Modal Footer Actions */}
          <div className="pt-4 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={onClose}
              className="text-xs font-medium text-neutral-600 hover:text-black order-2 sm:order-1 cursor-pointer"
            >
              Cerrar detalle
            </button>
            <button
              onClick={() => onSelectForProposal(project)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#E11D74] hover:bg-[#C2185B] rounded-lg transition-colors order-1 sm:order-2 cursor-pointer shadow-xs"
            >
              <span>Solicitar un plan similar para mi marca</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

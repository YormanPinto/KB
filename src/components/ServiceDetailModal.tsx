import React from 'react';
import { X, Check, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { ServiceItem } from '../data/agencyData.ts';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectServiceForContact: (service: ServiceItem) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onSelectServiceForContact,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div 
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-neutral-200 shadow-xl relative animate-fadeIn"
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

        <div className="p-6 sm:p-8 space-y-7">
          {/* Header */}
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">
              <span>Metodología & Alcance</span>
              <span aria-hidden="true">·</span>
              <span className="text-neutral-900">{service.kpi}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#121212] tracking-tight">
              {service.title}
            </h2>
            <p className="text-sm text-neutral-600 mt-3 leading-relaxed">
              {service.detailedDescription}
            </p>
          </div>

          {/* Deliverables List */}
          <div className="bg-[#FAFAFA] border border-neutral-200 rounded-xl p-5 space-y-4">
            <h3 className="text-xs font-semibold text-neutral-900 uppercase tracking-wider">
              Entregables & Componentes Incluidos
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-700">
                  <div className="w-4 h-4 rounded-full bg-neutral-200 text-neutral-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Phased Workflow */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-neutral-900 uppercase tracking-wider">
              Flujo de Ejecución Típico
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3.5 border border-neutral-200 rounded-lg">
                <span className="text-[10px] font-mono text-neutral-400 block mb-1">FASE 1</span>
                <strong className="block text-neutral-900 mb-1">Auditoría & Setup</strong>
                <p className="text-neutral-500 text-[11px]">Revisión de píxeles, tracking server-side y análisis de cuentas anteriores.</p>
              </div>
              <div className="p-3.5 border border-neutral-200 rounded-lg">
                <span className="text-[10px] font-mono text-neutral-400 block mb-1">FASE 2</span>
                <strong className="block text-neutral-900 mb-1">Experimentación</strong>
                <p className="text-neutral-500 text-[11px]">Lanzamiento de matrices creativas y tests controlados de audiencia.</p>
              </div>
              <div className="p-3.5 border border-neutral-200 rounded-lg">
                <span className="text-[10px] font-mono text-neutral-400 block mb-1">FASE 3</span>
                <strong className="block text-neutral-900 mb-1">Escalado</strong>
                <p className="text-neutral-500 text-[11px]">Incremento de inversión sobre los ganchos y canales ganadores sin perder ROAS.</p>
              </div>
            </div>
          </div>

          {/* Modal Actions */}
          <div className="pt-4 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={onClose}
              className="text-xs font-medium text-neutral-600 hover:text-black order-2 sm:order-1 cursor-pointer"
            >
              Volver a servicios
            </button>
            <button
              onClick={() => onSelectServiceForContact(service)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#E11D74] hover:bg-[#C2185B] rounded-lg transition-colors order-1 sm:order-2 cursor-pointer shadow-xs"
            >
              <span>Cotizar este servicio</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

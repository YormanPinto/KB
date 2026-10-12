import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Sparkles, Clock, CheckCheck, ChevronRight } from 'lucide-react';

interface WhatsAppFloatingButtonProps {
  customMessage?: string;
  onClearCustomMessage?: () => void;
}

export const WhatsAppFloatingButton: React.FC<WhatsAppFloatingButtonProps> = ({
  customMessage,
  onClearCustomMessage
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showGreetingBubble, setShowGreetingBubble] = useState(true);
  const [message, setMessage] = useState(
    '¡Hola KB Taller Creativo! Quisiera más información sobre sus servicios.'
  );
  const popoverRef = useRef<HTMLDivElement>(null);

  const phoneRaw = '34932401892'; // +34 932 401 892

  // Quick prompt presets
  const quickPrompts = [
    { label: '💻 Cotizar Software o Web', text: '¡Hola! Me gustaría cotizar un desarrollo de software o plataforma web para mi negocio.' },
    { label: '📈 Marketing & Captación', text: '¡Hola! Quisiera información y estrategia sobre sus servicios de Marketing Digital y captación.' },
    { label: '👕 Sublimación & Merchandising', text: '¡Hola! Tengo interés en personalización textil, sublimación o merchandising corporativo.' },
    { label: '🎓 Formación & Talleres', text: '¡Hola! Quisiera información sobre sus programas y talleres de formación técnica.' },
    { label: '📋 Propuesta Personalizada', text: '¡Hola! Necesito una propuesta integral adaptada a los objetivos de mi empresa.' },
  ];

  // If a custom message arrives from App (e.g. clicking a project or service), update and auto-open
  useEffect(() => {
    if (customMessage) {
      setMessage(customMessage);
      setIsOpen(true);
      setShowGreetingBubble(false);
    }
  }, [customMessage]);

  // Hide greeting bubble automatically after 12 seconds or on interaction
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGreetingBubble(false);
    }, 12000);
    return () => clearTimeout(timer);
  }, []);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const targetWhatsAppUrl = `https://wa.me/${phoneRaw}?text=${encodeURIComponent(message.trim() || '¡Hola KB Taller Creativo!')}`;

  const handleSelectPrompt = (promptText: string) => {
    setMessage(promptText);
  };

  const handleClose = () => {
    setIsOpen(false);
    if (onClearCustomMessage) {
      onClearCustomMessage();
    }
  };

  return (
    <div ref={popoverRef} className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* GREETING TOAST BUBBLE (Visible initially or on hover when widget is closed) */}
      {!isOpen && showGreetingBubble && (
        <div className="mb-3 mr-1 bg-white border border-neutral-200/90 shadow-xl rounded-2xl p-3.5 max-w-[270px] animate-fadeIn transition-all duration-300 relative group">
          <button
            onClick={() => setShowGreetingBubble(false)}
            className="absolute top-2 right-2 text-neutral-400 hover:text-neutral-700 p-1 rounded-full hover:bg-neutral-100 transition-colors cursor-pointer"
            aria-label="Cerrar notificación"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          
          <div className="flex items-start gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#25D366]/15 border border-[#25D366]/30 flex items-center justify-center shrink-0 text-[#25D366]">
              <MessageCircle className="w-4 h-4 fill-[#25D366]/20" />
            </div>
            <div className="pr-4">
              <div className="flex items-center gap-1.5 mb-0.5">
                <span className="text-[11px] font-bold text-neutral-900">KB Taller Creativo</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
              </div>
              <p className="text-xs text-neutral-600 leading-snug">
                ¿Tienes alguna consulta? Escríbenos directamente a WhatsApp.
              </p>
              <span className="inline-block mt-1 text-[10px] font-semibold text-[#128C7E]">
                Respuesta en ~10 min
              </span>
            </div>
          </div>
          
          {/* Speech bubble pointer */}
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white border-b border-r border-neutral-200/90 transform rotate-45" />
        </div>
      )}

      {/* EXPANDED INTERACTIVE WHATSAPP DRAWER / POPOVER */}
      {isOpen && (
        <div 
          className="mb-4 bg-white border border-neutral-200/90 rounded-3xl shadow-2xl w-[92vw] sm:w-[380px] overflow-hidden flex flex-col transition-all duration-300 animate-fadeIn"
          style={{ maxHeight: '82vh' }}
        >
          {/* Header styled like modern WhatsApp agency direct line */}
          <div className="bg-gradient-to-r from-[#075E54] via-[#128C7E] to-[#25D366] p-4 text-white relative">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white font-extrabold text-sm shadow-inner">
                    KB
                  </div>
                  {/* Online live ping indicator */}
                  <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[#25D366] border-2 border-[#128C7E]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold tracking-tight text-white flex items-center gap-1.5">
                    KB Taller Creativo
                    <span className="text-[10px] font-medium bg-white/20 px-2 py-0.5 rounded-full backdrop-blur-xs">
                      Oficial
                    </span>
                  </h3>
                  <div className="flex items-center gap-1.5 text-[11px] text-white/90">
                    <Clock className="w-3 h-3 text-emerald-200" />
                    <span>En línea · Respuesta habitual &lt;15 min</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleClose}
                className="w-8 h-8 rounded-full bg-black/15 hover:bg-black/30 flex items-center justify-center text-white/90 hover:text-white transition-colors cursor-pointer"
                aria-label="Cerrar ventana de WhatsApp"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Chat Preview Body */}
          <div className="p-4 bg-[#ECE5DD]/40 flex-1 overflow-y-auto space-y-3.5 text-xs">
            {/* Agency incoming welcome message */}
            <div className="flex items-start gap-2">
              <div className="bg-white rounded-2xl rounded-tl-xs p-3 shadow-sm border border-neutral-200/60 max-w-[88%] text-neutral-800 leading-relaxed">
                <p className="font-semibold text-neutral-900 mb-1 text-xs">
                  ¡Hola! Bienvenido a KB Taller Creativo 👋
                </p>
                <p className="text-neutral-600 text-[11px]">
                  Somos especialistas en <strong>Software</strong>, <strong>Marketing Digital</strong>, <strong>Sublimación Textil</strong> y <strong>Formación</strong>.
                </p>
                <p className="text-neutral-600 text-[11px] mt-1.5">
                  Elige un motivo o personaliza tu mensaje para iniciar la conversación por WhatsApp:
                </p>
                <div className="mt-2 flex items-center justify-end gap-1 text-[9px] text-neutral-400">
                  <span>Estudio KB</span>
                  <CheckCheck className="w-3 h-3 text-[#128C7E]" />
                </div>
              </div>
            </div>

            {/* Quick Chips Selection */}
            <div className="space-y-1.5 pt-1">
              <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider block px-1">
                Respuestas rápidas:
              </span>
              <div className="flex flex-col gap-1.5">
                {quickPrompts.map((p, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelectPrompt(p.text)}
                    className="w-full text-left px-3 py-2 rounded-xl bg-white hover:bg-emerald-50 border border-neutral-200/80 hover:border-[#25D366]/60 text-[11px] font-medium text-neutral-700 hover:text-[#075E54] transition-all flex items-center justify-between group shadow-2xs cursor-pointer"
                  >
                    <span>{p.label}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#25D366] transition-transform group-hover:translate-x-0.5" />
                  </button>
                ))}
              </div>
            </div>

            {/* Draft message editing area */}
            <div className="pt-2">
              <label 
                htmlFor="whatsapp-draft"
                className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider block mb-1 px-1"
              >
                Tu mensaje a enviar:
              </label>
              <textarea
                id="whatsapp-draft"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Escribe tu mensaje para WhatsApp..."
                className="w-full p-2.5 rounded-xl bg-white border border-neutral-300 text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:border-transparent resize-none shadow-inner"
              />
            </div>
          </div>

          {/* Action Footer with direct CTA anchor */}
          <div className="p-3 bg-white border-t border-neutral-100 flex items-center justify-between gap-2">
            <div className="text-[10px] text-neutral-400 flex items-center gap-1 pl-1">
              <Sparkles className="w-3 h-3 text-[#25D366]" />
              <span>Abre chat directo</span>
            </div>

            <a
              href={targetWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClose}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#1EBE5D] hover:to-[#0E7A6E] text-white font-bold text-xs shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer group"
            >
              <span>Abrir WhatsApp</span>
              <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      )}

      {/* FLOATING ACTION BUTTON */}
      <div className="relative group">
        {/* Subtle pulsating waves behind the button */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none group-hover:opacity-60" />
        <span className="absolute -inset-2 rounded-full bg-[#25D366]/20 blur-md pointer-events-none" />

        <button
          onClick={() => {
            setIsOpen(!isOpen);
            setShowGreetingBubble(false);
          }}
          className={`relative z-10 w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-300 transform group-hover:scale-108 cursor-pointer ${
            isOpen
              ? 'bg-neutral-900 hover:bg-black rotate-90'
              : 'bg-gradient-to-tr from-[#128C7E] via-[#25D366] to-[#25D366] hover:brightness-105'
          }`}
          aria-label={isOpen ? 'Cerrar chat de WhatsApp' : 'Abrir chat de WhatsApp'}
          title="Contactar por WhatsApp"
        >
          {isOpen ? (
            <X className="w-6 h-6 transform -rotate-90" />
          ) : (
            <svg
              className="w-7 h-7 fill-current drop-shadow-xs"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.507 14.307l-.009.075c-2.399-1.2-2.823-1.077-3.235-.494-.282.404-.75 1.01-1.002 1.054-.319.056-.706-.11-1.391-.494-1.36-.763-2.316-2.072-2.894-3.08-.22-.387-.042-.628.163-.895.163-.213.352-.455.528-.683.176-.228.235-.387.352-.647.118-.26.059-.487-.03-.676-.089-.19-.794-1.916-1.089-2.628-.287-.695-.581-.599-.794-.611l-.676-.012c-.235 0-.617.088-.941.44-.323.353-1.234 1.206-1.234 2.94 0 1.735 1.264 3.411 1.44 3.646.177.235 2.477 3.782 6.002 5.303 2.923 1.262 3.518 1.011 4.149.952.631-.059 2.03-1.042 2.316-1.789.286-.748.286-1.389.201-1.523-.085-.133-.314-.213-.676-.395l-.234-.085zM12 2C6.477 2 2 6.477 2 12c0 1.892.524 3.662 1.433 5.178L2 22l4.981-1.402C8.423 21.492 10.155 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2c-1.636 0-3.155-.477-4.436-1.3l-.318-.206-3.292.926.927-3.212-.206-.328C3.847 14.801 3.8 13.42 3.8 12c0-4.521 3.679-8.2 8.2-8.2 4.521 0 8.2 3.679 8.2 8.2 0 4.521-3.679 8.2-8.2 8.2z" />
            </svg>
          )}

          {/* Unread badge dot */}
          {!isOpen && (
            <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-rose-500 border-2 border-white flex items-center justify-center text-[9px] font-bold text-white shadow-xs">
              1
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

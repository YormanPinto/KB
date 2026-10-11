import React, { useState, useEffect } from 'react';
import { 
  MessageCircle, 
  ArrowUpRight, 
  Clock, 
  Phone, 
  Mail, 
  MapPin, 
  Check, 
  Copy,
  Code,
  TrendingUp,
  Printer,
  GraduationCap,
  CornerDownLeft,
  QrCode,
  Edit3
} from 'lucide-react';

interface ContactSectionProps {
  initialNotes?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialNotes }) => {
  const [copied, setCopied] = useState(false);
  const [showQrModal, setShowQrModal] = useState(false);
  const [isEditingMessage, setIsEditingMessage] = useState(false);
  const phoneNumber = '+34 932 401 892';
  const whatsappRaw = '34932401892';

  const defaultText = '¡Hola KB Taller Creativo! Me gustaría consultar sobre sus servicios para mi proyecto.';

  const topics = [
    {
      id: 'software',
      icon: Code,
      title: 'Desarrollo de Software',
      subtitle: 'Consulta rápida',
      message: '¡Hola KB Taller Creativo! Quisiera cotizar un proyecto de desarrollo de software / plataforma web a medida.',
    },
    {
      id: 'marketing',
      icon: TrendingUp,
      title: 'Marketing Digital',
      subtitle: 'Consulta rápida',
      message: '¡Hola KB Taller Creativo! Me interesa potenciar las ventas de mi negocio con marketing digital y publicidad.',
    },
    {
      id: 'sublimacion',
      icon: Printer,
      title: 'Sublimación & Merch',
      subtitle: 'Consulta rápida',
      message: '¡Hola KB Taller Creativo! Deseo solicitar presupuesto para sublimación textil, uniformes o artículos personalizados.',
    },
    {
      id: 'formacion',
      icon: GraduationCap,
      title: 'Formación Académica',
      subtitle: 'Consulta rápida',
      message: '¡Hola KB Taller Creativo! Quisiera información y fechas de los próximos cursos y talleres prácticos.',
    },
  ];

  const [selectedTopic, setSelectedTopic] = useState<string>(
    initialNotes ? 'custom' : 'software'
  );
  const [customText, setCustomText] = useState<string>(initialNotes || defaultText);

  // Synchronize when initialNotes changes from external actions (modals, buttons)
  useEffect(() => {
    if (initialNotes) {
      setCustomText(initialNotes);
      setSelectedTopic('custom');
    }
  }, [initialNotes]);

  const handleSelectTopic = (topicId: string) => {
    setSelectedTopic(topicId);
    const found = topics.find((t) => t.id === topicId);
    if (found) {
      setCustomText(found.message);
    }
  };

  const currentMessage = customText;
  const whatsappUrl = `https://wa.me/${whatsappRaw}?text=${encodeURIComponent(currentMessage)}`;
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(whatsappUrl)}&margin=10`;

  const handleCopyNumber = () => {
    navigator.clipboard.writeText(phoneNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contacto" className="relative pt-24 pb-20 overflow-hidden bg-[#0A0C10]">
      
      {/* ATMOSPHERIC BACKGROUND WITH GLOWING ORBS AND CODE WATERMARK */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Ambient Top Glow Orbs */}
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#E11D74]/20 rounded-full blur-[120px]" />
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-[#25D366]/15 rounded-full blur-[140px]" />
        <div className="absolute top-40 left-10 w-24 h-24 bg-[#E11D74]/30 rounded-full blur-[60px]" />

        {/* Code Syntax Ghost Text in Top-Right Background */}
        <div className="absolute top-6 right-10 opacity-[0.08] text-xs font-mono text-white leading-relaxed select-none hidden lg:block">
          <pre>{`return 'aesthetic';
};
function activate() {
  const descriptor = 'ecommerce_ready';
  connect('whatsapp');
  if (isImmediateContact) {
    launchConversation(phoneNumber);
  }
}`}</pre>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* TOP GLOWING BADGE & HEADLINE */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          
          {/* Glowing Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900/90 border border-emerald-400/50 shadow-[0_0_15px_rgba(37,211,102,0.25)] text-white text-xs font-medium mb-6 backdrop-blur-md">
            <span className="w-4 h-4 rounded-full border border-emerald-400 flex items-center justify-center text-[10px] text-emerald-400">
              💬
            </span>
            <span className="tracking-wide">Canal de Atención Directa</span>
          </div>

          {/* Gradient Headline matching reference image */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 [text-wrap:balance] bg-gradient-to-r from-[#FF3399] via-[#E11D74] to-[#FFA07A] bg-clip-text text-transparent">
            Hablemos directamente por WhatsApp
          </h2>

          <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Sin formularios extensos ni esperas. Escríbenos directamente a nuestro WhatsApp oficial, un miembro de nuestro equipo te atenderá de forma personalizada.
          </p>
        </div>

        {/* FLOATING GLASS CONTAINER */}
        <div className="relative bg-white/95 rounded-[32px] border border-neutral-200/80 shadow-2xl p-6 sm:p-10 lg:p-12 overflow-hidden backdrop-blur-sm">
          
          {/* Glowing top neon edge line */}
          <div 
            className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E11D74] via-[#A855F7] to-[#25D366]" 
            aria-hidden="true" 
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            
            {/* LEFT COLUMN: 2x2 SELECTION GRID + SPEECH BUBBLE */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 block mb-1">
                  PASO 1: SELECCIONA TU MOTIVO DE CONSULTA
                </span>
                <p className="text-xs text-neutral-500 mb-5">
                  Elige un área para preparar el mensaje con un solo clic:
                </p>

                {/* 2x2 Selection Grid with White Floating Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {topics.map((t) => {
                    const Icon = t.icon;
                    const isSelected = selectedTopic === t.id;
                    return (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => handleSelectTopic(t.id)}
                        className={`p-4 rounded-2xl border text-left flex items-center justify-between gap-3 transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer ${
                          isSelected
                            ? 'bg-white border-[#E11D74] ring-2 ring-[#E11D74]/20'
                            : 'bg-white border-neutral-200/80 hover:border-neutral-300'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border ${
                            isSelected 
                              ? 'bg-pink-50 border-[#E11D74]/30 text-[#E11D74]' 
                              : 'bg-neutral-50 border-neutral-200 text-neutral-700'
                          }`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <strong className="block text-xs font-bold text-neutral-900 leading-snug">
                              {t.title}
                            </strong>
                            <span className="text-[11px] text-neutral-400">
                              {t.subtitle}
                            </span>
                          </div>
                        </div>

                        {/* Curved Arrow icon */}
                        <div className="text-neutral-400 shrink-0">
                          <CornerDownLeft className="w-3.5 h-3.5" />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* SPEECH BUBBLE PREVIEW WITH CHAT TAIL */}
              <div className="relative mt-4">
                <div className="relative p-5 bg-[#FBFBFA] rounded-2xl border border-neutral-200 shadow-xs">
                  
                  {/* Action buttons header */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-neutral-400">
                      MENSAJE QUE SE ABRIRÁ EN WHATSAPP:
                    </span>
                    <button
                      type="button"
                      onClick={() => setIsEditingMessage(!isEditingMessage)}
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#E11D74] hover:underline cursor-pointer"
                    >
                      <Edit3 className="w-3 h-3" />
                      <span>{isEditingMessage ? 'Listo' : 'Personalizar texto'}</span>
                    </button>
                  </div>

                  {isEditingMessage ? (
                    <div className="space-y-2">
                      <textarea
                        value={customText}
                        onChange={(e) => {
                          setCustomText(e.target.value);
                          setSelectedTopic('custom');
                        }}
                        rows={3}
                        className="w-full text-xs sm:text-sm font-medium text-neutral-800 p-2.5 bg-white border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E11D74]/30"
                        placeholder="Escribe tu mensaje personalizado para WhatsApp..."
                      />
                      <span className="text-[10px] text-neutral-400 block">
                        Este texto se enviará automáticamente como borrador al abrir WhatsApp.
                      </span>
                    </div>
                  ) : (
                    <p className="text-xs sm:text-sm font-medium italic text-neutral-800 pr-8 leading-relaxed">
                      "{currentMessage}"
                    </p>
                  )}
                </div>

                {/* Speech Bubble Tail at bottom-left */}
                <div 
                  className="w-4 h-4 bg-[#FBFBFA] border-b border-l border-neutral-200 transform -rotate-45 ml-8 -mt-2"
                  aria-hidden="true" 
                />
              </div>

            </div>

            {/* RIGHT COLUMN: WHATSAPP CARD WITH 3D ICON & MULTI-GRADIENT BUTTON */}
            <div className="lg:col-span-5 flex flex-col items-center justify-between p-6 sm:p-8 bg-gradient-to-b from-white to-neutral-50/70 rounded-3xl border border-neutral-200/90 shadow-sm text-center">
              
              {/* Sleek 3D Metallic Glass WhatsApp App Icon */}
              <div className="relative mb-3">
                <div className="w-20 h-20 rounded-[22px] bg-gradient-to-b from-neutral-200 via-neutral-300 to-neutral-400 p-[2px] shadow-xl shadow-neutral-400/30">
                  <div className="w-full h-full rounded-[20px] bg-gradient-to-b from-[#1C2321] to-[#0D1311] flex items-center justify-center relative overflow-hidden">
                    {/* Top glossy glass highlight */}
                    <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent pointer-events-none rounded-t-[20px]" />
                    {/* Glowing WhatsApp icon */}
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#25D366] to-[#4ADE80] text-white flex items-center justify-center shadow-lg shadow-emerald-500/50">
                      <MessageCircle className="w-7 h-7 fill-white/10" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Title & Status */}
              <div className="space-y-2 mb-4">
                <h3 className="text-base sm:text-lg font-bold text-[#121212]">
                  WhatsApp KB Taller Creativo
                </h3>
                
                {/* Active Status Badge with Pulsing Live Dot */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/70 text-emerald-700 text-[11px] font-semibold">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span>Respuesta rápida en horario laboral</span>
                </div>
              </div>

              {/* Multi-Gradient Vibrant CTA Button matching reference */}
              <div className="w-full space-y-2.5 mb-5">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-between px-6 py-4 rounded-2xl bg-gradient-to-r from-[#25D366] via-[#9333EA] to-[#E11D74] hover:opacity-95 text-white font-bold text-sm sm:text-base shadow-xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                      <MessageCircle className="w-4 h-4 fill-white/20" />
                    </div>
                    <span>Escribirnos por WhatsApp</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {/* Secondary QR code scanner button for desktop ease */}
                <button
                  type="button"
                  onClick={() => setShowQrModal(true)}
                  className="w-full py-2 px-3 rounded-xl border border-neutral-200/80 bg-neutral-50/80 hover:bg-neutral-100 text-neutral-600 hover:text-black text-xs font-medium flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <QrCode className="w-3.5 h-3.5 text-neutral-500" />
                  <span>Escanear código QR desde el móvil</span>
                </button>
              </div>

              {/* Number and Copy Button */}
              <div className="w-full pt-3 border-t border-neutral-200/70 flex items-center justify-between text-xs text-neutral-600">
                <span className="font-mono text-neutral-900 font-bold text-xs sm:text-sm">
                  {phoneNumber}
                </span>

                <button
                  type="button"
                  onClick={handleCopyNumber}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-600 hover:text-black py-1 px-2.5 rounded-lg hover:bg-neutral-200/60 transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Copiado</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar número</span>
                    </>
                  )}
                </button>
              </div>

            </div>

          </div>

          {/* BOTTOM STRIP: 3 METADATA COORDINATES */}
          <div className="mt-10 pt-8 border-t border-neutral-200/70 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-neutral-600">
            
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-700 shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="block text-[10px] uppercase font-bold text-neutral-400">CORREO</span>
                <a href="mailto:hola@kbtallercreativo.com" className="font-semibold text-neutral-900 hover:text-[#E11D74] transition-colors truncate block">
                  hola@kbtallercreativo.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-700 shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="block text-[10px] uppercase font-bold text-neutral-400">TELÉFONO</span>
                <span className="font-semibold text-neutral-900">
                  +34 932 401 892
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-700 shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="block text-[10px] uppercase font-bold text-neutral-400">UBICACIÓN</span>
                <span className="font-semibold text-neutral-900">
                  Passeig de Gràcia 48, Barcelona
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* QR SCAN MODAL */}
      {showQrModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="relative bg-white rounded-3xl p-6 sm:p-8 max-w-sm w-full text-center shadow-2xl border border-neutral-100">
            <h3 className="text-lg font-bold text-[#121212] mb-1">
              Escanea con tu cámara móvil
            </h3>
            <p className="text-xs text-neutral-500 mb-5">
              Apunta la cámara de tu móvil para iniciar el chat de WhatsApp instantáneamente.
            </p>

            <div className="p-3 bg-neutral-50 rounded-2xl border border-neutral-200 inline-block mb-5">
              <img 
                src={qrCodeUrl} 
                alt="Código QR de WhatsApp" 
                className="w-48 h-48 mx-auto rounded-lg"
              />
            </div>

            <p className="text-[11px] font-mono text-neutral-600 mb-5">
              {phoneNumber}
            </p>

            <div className="flex gap-2.5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-xs rounded-xl shadow-sm transition-colors"
              >
                Abrir WhatsApp Web
              </a>
              <button
                type="button"
                onClick={() => setShowQrModal(false)}
                className="py-2.5 px-4 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-semibold text-xs rounded-xl transition-colors cursor-pointer"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

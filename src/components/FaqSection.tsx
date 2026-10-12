import React, { useState, useMemo } from 'react';
import { 
  Plus, 
  Minus, 
  HelpCircle, 
  Sparkles, 
  Search, 
  MessageCircle, 
  ArrowUpRight,
  Code,
  TrendingUp,
  Printer,
  GraduationCap,
  Layers,
  ChevronDown
} from 'lucide-react';
import { FAQS, FaqItem } from '../data/agencyData.ts';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'Todas las preguntas', icon: Layers },
    { id: 'general', label: 'Ecosistema & Pagos', icon: Sparkles },
    { id: 'software', label: 'Software', icon: Code },
    { id: 'marketing', label: 'Marketing', icon: TrendingUp },
    { id: 'sublimacion', label: 'Sublimación', icon: Printer },
    { id: 'formacion', label: 'Formación', icon: GraduationCap },
  ];

  const filteredFaqs = useMemo(() => {
    return FAQS.filter((faq) => {
      const matchesCategory = 
        selectedCategory === 'all' || faq.category === selectedCategory;
      const matchesSearch = 
        searchQuery.trim() === '' ||
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (faq.tag && faq.tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#FAFAFA] border-b border-neutral-200 relative overflow-hidden">
      
      {/* Subtle Creative Background Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 -right-24 w-96 h-96 bg-[#E11D74]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 -left-20 w-80 h-80 bg-neutral-200/50 rounded-full blur-2xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200/90 shadow-2xs text-xs font-semibold text-neutral-700 mb-5">
            <span className="w-2 h-2 rounded-full bg-[#E11D74]" />
            <span className="text-neutral-500 uppercase tracking-wider text-[11px]">Preguntas Frecuentes</span>
            <span aria-hidden="true" className="text-neutral-300">·</span>
            <span className="text-[#E11D74] font-bold">Transparencia Total</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#121212] mb-4 [text-wrap:balance]">
            Respuestas claras para tomar <span className="bg-gradient-to-r from-[#E11D74] to-[#FFA07A] bg-clip-text text-transparent">decisiones inteligentes.</span>
          </h2>

          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-xl mx-auto">
            Resolvemos de forma directa las inquietudes habituales sobre nuestras cuatro disciplinas, tiempos de entrega y metodología de trabajo.
          </p>
        </div>

        {/* Search Bar & Category Filter Strip */}
        <div className="mb-10 space-y-4">
          
          {/* Minimalist Search Input */}
          <div className="relative max-w-md mx-auto">
            <Search className="w-4 h-4 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por palabra clave (ej. software, sublimación, tiempos)..."
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white border border-neutral-200 text-xs sm:text-sm text-[#121212] placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#E11D74]/20 focus:border-[#E11D74] transition-all shadow-2xs"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-neutral-400 hover:text-black"
              >
                ✕
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center justify-center flex-wrap gap-2 pt-2">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setOpenIndex(0); // open first result
                  }}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-[#121212] text-white shadow-sm ring-2 ring-neutral-900/10'
                      : 'bg-white text-neutral-600 border border-neutral-200/80 hover:bg-neutral-100 hover:text-[#121212]'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-[#E11D74]' : 'text-neutral-400'}`} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

        </div>

        {/* FAQ Accordion Cards with Creative Micro-Interactions */}
        {filteredFaqs.length === 0 ? (
          <div className="p-12 text-center bg-white rounded-3xl border border-neutral-200/80 max-w-lg mx-auto">
            <HelpCircle className="w-10 h-10 text-neutral-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-neutral-800 mb-1">
              No encontramos preguntas con esa búsqueda
            </h3>
            <p className="text-xs text-neutral-500 mb-4">
              Intenta con otra palabra clave o pregúntanos directamente por WhatsApp.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="text-xs font-semibold text-[#E11D74] hover:underline"
            >
              Restablecer filtros
            </button>
          </div>
        ) : (
          <div className="space-y-3.5">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const padNumber = String(index + 1).padStart(2, '0');

              return (
                <div
                  key={`${faq.question}-${index}`}
                  className={`rounded-2xl transition-all duration-300 border overflow-hidden ${
                    isOpen
                      ? 'bg-white border-[#E11D74]/40 shadow-lg shadow-pink-500/5 ring-1 ring-[#E11D74]/20'
                      : 'bg-white border-neutral-200/90 hover:border-neutral-300 hover:shadow-xs'
                  }`}
                >
                  {/* Question Header Button */}
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full p-5 sm:p-6 flex items-start sm:items-center justify-between gap-4 text-left cursor-pointer group focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start sm:items-center gap-3.5 sm:gap-4 flex-1">
                      
                      {/* Monospace Index Badge */}
                      <span className={`font-mono text-xs font-bold px-2 py-1 rounded-md transition-colors shrink-0 ${
                        isOpen 
                          ? 'bg-pink-50 text-[#E11D74]' 
                          : 'bg-neutral-100 text-neutral-500 group-hover:text-black'
                      }`}>
                        {padNumber}
                      </span>

                      {/* Question and Tag */}
                      <div className="space-y-1">
                        {faq.tag && (
                          <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#E11D74] mr-2">
                            {faq.tag}
                          </span>
                        )}
                        <h3 className={`text-sm sm:text-base font-bold transition-colors leading-snug ${
                          isOpen ? 'text-[#121212]' : 'text-neutral-800 group-hover:text-[#E11D74]'
                        }`}>
                          {faq.question}
                        </h3>
                      </div>
                    </div>

                    {/* Interactive Animated Action Pill / Chevron */}
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen 
                        ? 'bg-[#E11D74] text-white rotate-180 shadow-xs' 
                        : 'bg-neutral-100 text-neutral-500 group-hover:bg-neutral-200 group-hover:text-black rotate-0'
                    }`}>
                      <ChevronDown className="w-4 h-4 transition-transform" />
                    </div>
                  </button>

                  {/* Collapsible Answer with Fluid Animation */}
                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-0 transition-all duration-300">
                      <div className="pt-3 border-t border-neutral-100">
                        <div className="pl-4 sm:pl-5 border-l-2 border-[#E11D74] py-1 bg-gradient-to-r from-pink-50/50 via-transparent to-transparent rounded-r-lg">
                          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* BOTTOM CALLOUT: DIRECT WHATSAPP ADVISORY */}
        <div className="shine-hover-effect mt-14 p-6 sm:p-8 bg-gradient-to-r from-[#18191E] to-[#0A0C10] rounded-3xl text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden border border-neutral-800/80 hover:border-[#E11D74]/40 transition-colors">
          
          {/* Subtle Ambient Pink Light Inside Card */}
          <div 
            className="absolute -right-10 -bottom-10 w-48 h-48 bg-[#E11D74]/20 rounded-full blur-3xl pointer-events-none animate-pulse" 
            aria-hidden="true" 
          />

          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#25D366] to-[#4ADE80] text-white flex items-center justify-center shrink-0 shadow-lg shadow-emerald-500/20">
              <MessageCircle className="w-6 h-6 fill-white/10" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white mb-0.5">
                ¿Tienes una pregunta específica sobre tu proyecto?
              </h4>
              <p className="text-xs text-neutral-400">
                Escríbenos directamente por WhatsApp y te orientamos sin compromiso en minutos.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/34932401892?text=%C2%A1Hola%20KB%20Taller%20Creativo!%20Tengo%20una%20pregunta%20sobre%20mi%20proyecto."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-white hover:bg-neutral-100 text-black font-bold text-xs sm:text-sm inline-flex items-center gap-2 transition-all duration-200 hover:scale-105 active:scale-95 shadow-md shrink-0 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
            <span>Consultar por WhatsApp</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
          </a>
        </div>

      </div>
    </section>
  );
};

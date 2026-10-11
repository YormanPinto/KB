import React from 'react';
import { 
  Monitor, 
  Megaphone, 
  Tag, 
  Users, 
  FileText, 
  Phone, 
  Mail, 
  MapPin, 
  Linkedin, 
  Instagram, 
  Github, 
  MessageCircle,
  ArrowUp 
} from 'lucide-react';
import { Logo } from './Logo.tsx';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FAFAFA] p-3 sm:p-6 lg:p-8">
      {/* Dark Luxury Card Container matching reference */}
      <div className="max-w-7xl mx-auto bg-[#18191E] rounded-3xl border border-neutral-800/90 p-8 sm:p-12 lg:p-14 shadow-2xl relative overflow-hidden">
        
        {/* Subtle Luxury Ambient Top Rim Glow */}
        <div 
          className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-[#E11D74]/40 to-transparent pointer-events-none"
          aria-hidden="true" 
        />

        {/* 5-Column Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          {/* Column 1: Brand & Bio (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center">
              <Logo size={34} showWordmark={true} variant="light" />
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed max-w-xs">
              Agencia de marketing digital de alto rendimiento y taller de diseño estratégico. Marcas memorables y sistemas predecibles de adquisición y conversión.
            </p>
            <div className="text-xs text-neutral-500 pt-2">
              <span>Barcelona · Madrid · Remoto Global</span>
            </div>
          </div>

          {/* Column 2: Navegación with tree bracket (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">
              NAVEGACIÓN
            </h3>
            
            {/* Tree bracket design matching reference */}
            <div className="relative pl-4">
              {/* Bracket line */}
              <div 
                className="absolute left-0 top-1 bottom-1 w-2.5 border-l-2 border-y-2 border-neutral-600/70 rounded-l-md pointer-events-none"
                aria-hidden="true"
              />
              
              <ul className="space-y-2 text-xs text-neutral-300">
                <li>
                  <a href="#inicio" className="hover:text-[#E11D74] transition-colors block py-0.5">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#servicios" className="hover:text-[#E11D74] transition-colors block py-0.5">
                    Servicios
                  </a>
                </li>
                <li>
                  <a href="#portafolio" className="hover:text-[#E11D74] transition-colors block py-0.5">
                    Portafolio
                  </a>
                </li>
                <li>
                  <a href="#testimonios" className="hover:text-[#E11D74] transition-colors block py-0.5">
                    Testimonios
                  </a>
                </li>
                <li>
                  <a href="#contacto" className="hover:text-[#E11D74] transition-colors block py-0.5">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: Pilares de Servicio with icons (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">
              PILARES DE SERVICIO
            </h3>
            
            <ul className="space-y-2.5 text-xs text-neutral-300">
              <li className="flex items-center gap-2.5 hover:text-white transition-colors">
                <Monitor className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                <span>Desarrollo de Software & Plataformas Web</span>
              </li>
              <li className="flex items-center gap-2.5 hover:text-white transition-colors">
                <Megaphone className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                <span>Marketing Digital & Campañas de Adquisición</span>
              </li>
              <li className="flex items-center gap-2.5 hover:text-white transition-colors">
                <Tag className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                <span>Sublimación Textil & Merchandising Corporativo</span>
              </li>
              <li className="flex items-center gap-2.5 hover:text-white transition-colors">
                <Users className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                <span>Formación Académica & Talleres Prácticos</span>
              </li>
              <li className="flex items-center gap-2.5 hover:text-white transition-colors">
                <FileText className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                <span>Consultoría Integral para Emprendedores</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contacto Directo & Socials (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">
              CONTACTO DIRECTO
            </h3>
            
            <div className="space-y-2 text-xs text-neutral-300">
              <a 
                href="mailto:hola@kbtallercreativo.com" 
                className="hover:text-[#E11D74] transition-colors block truncate"
              >
                hola@kbtallercreativo.com
              </a>
              
              <div className="flex items-center gap-1.5 text-neutral-400">
                <Phone className="w-3 h-3 text-neutral-500 shrink-0" />
                <span>+34 932 401 892</span>
              </div>
              
              <p className="text-neutral-400 leading-snug">
                Passeig de Gràcia 48,<br />
                08007 Barcelona
              </p>
            </div>

            {/* Social Icons row */}
            <div className="pt-1">
              <span className="text-[10px] uppercase tracking-wider text-neutral-500 block mb-2 font-semibold">
                Contact
              </span>
              <div className="flex items-center gap-2">
                <a
                  href="#contacto"
                  className="w-7 h-7 rounded-lg bg-neutral-800/90 border border-neutral-700/60 flex items-center justify-center text-neutral-300 hover:text-white hover:border-[#E11D74] hover:bg-neutral-700 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#contacto"
                  className="w-7 h-7 rounded-lg bg-neutral-800/90 border border-neutral-700/60 flex items-center justify-center text-neutral-300 hover:text-white hover:border-[#E11D74] hover:bg-neutral-700 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#contacto"
                  className="w-7 h-7 rounded-lg bg-neutral-800/90 border border-neutral-700/60 flex items-center justify-center text-neutral-300 hover:text-white hover:border-[#E11D74] hover:bg-neutral-700 transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#contacto"
                  className="w-7 h-7 rounded-lg bg-neutral-800/90 border border-neutral-700/60 flex items-center justify-center text-neutral-300 hover:text-white hover:border-[#E11D74] hover:bg-neutral-700 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 5: 2x2 Mini Showcase Gallery (2 cols) */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-2.5 max-w-[200px]">
              {/* Thumbnail 1: App / Software */}
              <div className="aspect-square rounded-xl overflow-hidden bg-neutral-800 border border-neutral-700/60 group">
                <img
                  src="/src/assets/images/case_study_analytics_1791738081226.jpg"
                  alt="Muestra de desarrollo digital"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
              </div>

              {/* Thumbnail 2: Sublimación / Merchandising */}
              <div className="aspect-square rounded-xl overflow-hidden bg-neutral-800 border border-neutral-700/60 group">
                <img
                  src="/src/assets/images/case_study_sublimation_1791739628959.jpg"
                  alt="Muestra de sublimación y merchandising"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
              </div>

              {/* Thumbnail 3: Branding & Packaging */}
              <div className="aspect-square rounded-xl overflow-hidden bg-neutral-800 border border-neutral-700/60 group">
                <img
                  src="/src/assets/images/case_study_branding_1791738090225.jpg"
                  alt="Muestra de diseño y packaging"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
              </div>

              {/* Thumbnail 4: Taller y Workspace */}
              <div className="aspect-square rounded-xl overflow-hidden bg-neutral-800 border border-neutral-700/60 group">
                <img
                  src="/src/assets/images/hero_agency_workspace_1791738071569.jpg"
                  alt="Muestra de taller y estudio"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Legal & Back-to-top Pill Button */}
        <div className="pt-10 mt-12 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div className="flex flex-wrap items-center gap-3 text-center sm:text-left">
            <span>© 2026 KB Taller Creativo SL. Todos los derechos reservados.</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <a href="#contacto" className="hover:text-white transition-colors">
              Aviso Legal
            </a>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <a href="#contacto" className="hover:text-white transition-colors">
              Privacidad
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="px-5 py-2.5 rounded-full bg-neutral-800/90 hover:bg-neutral-700 text-white border border-neutral-700/70 shadow-sm flex items-center gap-1.5 transition-colors cursor-pointer text-xs font-semibold shrink-0"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};

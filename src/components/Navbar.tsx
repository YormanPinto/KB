import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { Logo } from './Logo.tsx';

interface NavbarProps {
  onOpenProjectModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenProjectModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  const navItems = [
    { label: 'Inicio', href: '#inicio', id: 'inicio' },
    { label: 'Servicios', href: '#servicios', id: 'servicios' },
    { label: 'Portafolio', href: '#portafolio', id: 'portafolio' },
    { label: 'Testimonios', href: '#testimonios', id: 'testimonios' },
    { label: 'Contacto', href: '#contacto', id: 'contacto' },
  ];

  // Detect currently visible section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-[#FAFAFA]/90 backdrop-blur-md border-b border-neutral-200/80 transition-all">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-8">
        
        {/* Zone 1: Brand wordmark with monogram logo */}
        <a 
          href="#inicio" 
          className="hover:opacity-85 transition-opacity whitespace-nowrap shrink-0 flex items-center group"
        >
          <Logo size={32} showWordmark={true} />
        </a>

        {/* Zone 2: Navigation links with modern creative agency hover effect */}
        <nav className="hidden md:flex items-center gap-1.5 p-1 rounded-full bg-neutral-200/40 border border-neutral-200/60 shadow-2xs">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`relative px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 group flex items-center gap-1.5 ${
                  isActive
                    ? 'text-[#121212] bg-white shadow-xs'
                    : 'text-neutral-600 hover:text-[#121212] hover:bg-white/80'
                }`}
              >
                {/* Active indicator dot */}
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E11D74] animate-pulse" />
                )}

                <span className="relative z-10 transition-transform duration-200 group-hover:-translate-y-0.5">
                  {item.label}
                </span>

                {/* Animated Gradient Underline Bar */}
                <span 
                  className={`absolute bottom-0.5 left-3 right-3 h-[2px] bg-gradient-to-r from-[#E11D74] via-[#F43F5E] to-[#FFA07A] rounded-full transition-all duration-300 pointer-events-none ${
                    isActive 
                      ? 'scale-x-100 opacity-100' 
                      : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100 origin-center'
                  }`} 
                />
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action CTA with glowing hover */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenProjectModal}
            className="px-4 py-2 text-xs font-bold text-white bg-[#121212] hover:bg-gradient-to-r hover:from-[#E11D74] hover:to-[#C2185B] rounded-xl transition-all duration-300 whitespace-nowrap shrink-0 flex items-center gap-2 cursor-pointer shadow-xs hover:shadow-md hover:shadow-pink-500/20 group"
          >
            <span>Iniciar Proyecto</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-800 hover:text-[#E11D74] transition-colors rounded-lg hover:bg-neutral-100 focus:outline-none"
            aria-label="Abrir menú de navegación"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-200 bg-[#FAFAFA] px-6 py-4 space-y-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between text-sm font-semibold px-3 py-2 rounded-xl transition-all duration-200 ${
                  isActive
                    ? 'bg-pink-50 text-[#E11D74] border-l-4 border-[#E11D74]'
                    : 'text-neutral-700 hover:bg-neutral-100 hover:text-[#121212]'
                }`}
              >
                <span>{item.label}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#E11D74]" />}
              </a>
            );
          })}
          
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenProjectModal();
              }}
              className="w-full text-center py-2.5 text-xs font-bold text-white bg-gradient-to-r from-[#D91B74] to-[#C2185B] rounded-xl hover:opacity-95 shadow-xs"
            >
              Iniciar Proyecto
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

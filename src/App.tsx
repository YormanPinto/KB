import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { PortfolioSection } from './components/PortfolioSection.tsx';
import { TestimonialsSection } from './components/TestimonialsSection.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { Footer } from './components/Footer.tsx';
import { ProjectModal } from './components/ProjectModal.tsx';
import { ServiceDetailModal } from './components/ServiceDetailModal.tsx';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton.tsx';
import { ProjectItem, ServiceItem } from './data/agencyData.ts';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [whatsappCustomMessage, setWhatsappCustomMessage] = useState<string | undefined>(undefined);

  // Trigger floating WhatsApp chat with pre-filled message
  const handleOpenWhatsApp = (customMsg?: string) => {
    setWhatsappCustomMessage(
      customMsg || '¡Hola KB Taller Creativo! Me gustaría solicitar una cotización para mi proyecto.'
    );
  };

  const handleSelectProjectForProposal = (project: ProjectItem) => {
    setSelectedProject(null);
    handleOpenWhatsApp(
      `¡Hola KB Taller Creativo! Solicito una propuesta estratégica adaptada a los resultados del caso "${project.client}" (${project.title}).`
    );
  };

  const handleSelectServiceForContact = (service: ServiceItem) => {
    setSelectedService(null);
    handleOpenWhatsApp(
      `¡Hola KB Taller Creativo! Tengo interés específico en contratar o evaluar el servicio "${service.title}" para mi empresa.`
    );
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#121212] selection:bg-[#E11D74] selection:text-white relative">
      {/* 3-Zone Minimalist Navigation */}
      <Navbar onOpenProjectModal={() => handleOpenWhatsApp()} />

      <main>
        {/* Bento Hero Section */}
        <Hero 
          onOpenProjectModal={() => handleOpenWhatsApp()}
          onSelectCategory={(cat) => setSelectedCategory(cat)}
        />

        {/* Services Categorized Section with Functional Icons */}
        <ServicesSection 
          onSelectService={(service) => setSelectedService(service)} 
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* Portfolio Section with Category Filters, Thumbnails & Quantified Results */}
        <PortfolioSection onSelectProject={(project) => setSelectedProject(project)} />

        {/* Minimalist Client Testimonials */}
        <TestimonialsSection />

        {/* Operational FAQ with Direct Advisory Callout */}
        <FaqSection />
      </main>

      {/* Quiet Minimalist Footer */}
      <Footer />

      {/* Interactive Detail Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectForProposal={handleSelectProjectForProposal}
      />

      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onSelectServiceForContact={handleSelectServiceForContact}
      />

      {/* Floating WhatsApp Action Button with Quick Chat Drawer */}
      <WhatsAppFloatingButton 
        customMessage={whatsappCustomMessage}
        onClearCustomMessage={() => setWhatsappCustomMessage(undefined)}
      />
    </div>
  );
}

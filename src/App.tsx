import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { PortfolioSection } from './components/PortfolioSection.tsx';
import { TestimonialsSection } from './components/TestimonialsSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { Footer } from './components/Footer.tsx';
import { ProjectModal } from './components/ProjectModal.tsx';
import { ServiceDetailModal } from './components/ServiceDetailModal.tsx';
import { ProjectItem, ServiceItem } from './data/agencyData.ts';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [contactNotes, setContactNotes] = useState<string | undefined>(undefined);

  // Smooth scroll to contact section
  const scrollToContact = () => {
    const contactElem = document.getElementById('contacto');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProjectForProposal = (project: ProjectItem) => {
    setSelectedProject(null);
    setContactNotes(`Solicito una propuesta estratégica adaptada a los resultados del caso "${project.client}" (${project.title}).`);
    setTimeout(() => {
      scrollToContact();
    }, 100);
  };

  const handleSelectServiceForContact = (service: ServiceItem) => {
    setSelectedService(null);
    setContactNotes(`Interés específico en contratar o evaluar el servicio "${service.title}" para mi empresa.`);
    setTimeout(() => {
      scrollToContact();
    }, 100);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#121212] selection:bg-[#E11D74] selection:text-white">
      {/* 3-Zone Minimalist Navigation */}
      <Navbar onOpenProjectModal={scrollToContact} />

      <main>
        {/* Bento Hero Section matching user reference */}
        <Hero 
          onOpenProjectModal={scrollToContact}
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

        {/* Integrated Contact Forms (Briefing + 24h Express Audit) */}
        <ContactSection
          initialNotes={contactNotes}
        />

        {/* Operational FAQ */}
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
    </div>
  );
}

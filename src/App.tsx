import React, { useState } from 'react';
import { Project } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { SelectedWork } from './components/SelectedWork';
import { Services } from './components/Services';
import { EditingProcess } from './components/EditingProcess';
import { About } from './components/About';
import { ToolsSkills } from './components/ToolsSkills';
import { Experience } from './components/Experience';
import { BrandsMarquee } from './components/BrandsMarquee';
import { CreativeWorld } from './components/CreativeWorld';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { FilmGrain } from './components/FilmGrain';
import { PROJECTS } from './data/portfolioData';

export const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenReel = (videoUrl: string) => {
    const p = PROJECTS.find(item => item.id === '30-seconds') || PROJECTS[0];
    setSelectedProject(p);
  };

  return (
    <div className="relative min-h-screen bg-black text-neutral-100 font-sans selection:bg-purple-500 selection:text-white">
      {/* Cinematic Film Grain Overlay */}
      <FilmGrain />

      {/* Sticky Glass Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col w-full">
        {/* Hero Section */}
        <Hero />

        {/* Creative Philosophy & Monitor */}
        <Introduction onOpenProject={() => setSelectedProject(PROJECTS[0])} />

        {/* Selected Work (Filterable Portfolio) */}
        <SelectedWork onSelectProject={(proj) => setSelectedProject(proj)} />

        {/* What I Do (6 Core Services) */}
        <Services />

        {/* 5-Step Editing Process Timeline */}
        <EditingProcess />

        {/* Behind The Edit & Credentials */}
        <About />

        {/* Software & Skills Arsenal */}
        <ToolsSkills />

        {/* Career & Education Timeline */}
        <Experience />

        {/* Brands & Collaborators Marquee */}
        <BrandsMarquee />

        {/* Short-Form & Vertical Video World */}
        <CreativeWorld onOpenReel={handleOpenReel} />

        {/* Working Contact & Inquiry Section */}
        <Contact />
      </main>

      {/* Cinematic Minimalist Footer */}
      <Footer />

      {/* Fullscreen Interactive Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default App;

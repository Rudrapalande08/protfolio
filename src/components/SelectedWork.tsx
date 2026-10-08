import React, { useState } from 'react';
import { Play, Sparkles, ArrowRight, Eye, Film, Filter } from 'lucide-react';
import { Project } from '../types';
import { PROJECTS, LOGOFOLIO_ITEMS } from '../data/portfolioData';

interface SelectedWorkProps {
  onSelectProject: (project: Project) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);

  const filterCategories = [
    { id: 'All', label: 'All Work' },
    { id: 'Social Media', label: 'Social Media' },
    { id: 'Branding', label: 'Branding' },
    { id: 'Print', label: 'Social & Print' },
    { id: 'UI/Web', label: 'UI & Web' },
    { id: 'Cinematic', label: 'Video Editing' },
    { id: 'Reels', label: 'Reels & Shorts' },
    { id: 'Commercial', label: 'Commercial & Ads' },
    { id: 'YouTube', label: 'YouTube & Docs' }
  ];

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeFilter === 'All') return true;
    return p.category === activeFilter;
  });

  return (
    <section id="work" className="relative w-full bg-black py-28 md:py-36 overflow-hidden">
      {/* Background Subtle Ambience */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-widest text-purple-300 uppercase mb-3">
              <span className="h-1.5 w-6 bg-purple-400 rounded-full" />
              <span>FEATURED PORTFOLIO & CREATIVE SHOWCASE</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-none">
              SOCIAL MEDIA WORK
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-400 max-w-xl">
              A collection of social media creatives, brand campaigns, festival designs, and visual stories I've helped bring to life.
            </p>
          </div>

          <div className="text-right hidden md:block">
            <span className="text-xs font-mono text-neutral-500 block">CURATED WORKS</span>
            <span className="text-xl font-mono font-bold text-purple-300">2024 — 2026</span>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none border-b border-purple-500/15">
          <div className="flex items-center gap-2 shrink-0 pr-4 text-xs font-mono text-neutral-400">
            <Filter className="h-3.5 w-3.5 text-purple-300" />
            <span>FILTER:</span>
          </div>
          {filterCategories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`shrink-0 rounded-full px-4 py-2 text-xs font-medium tracking-wider transition-all duration-200 ${
                activeFilter === tab.id
                  ? 'bg-gradient-to-r from-purple-600 to-violet-600 text-white font-bold shadow-[0_0_20px_rgba(168,85,247,0.4)] border border-purple-400'
                  : 'bg-[#120722]/80 text-neutral-300 hover:bg-[#1f0b38] hover:text-white border border-purple-500/15'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredProjectId(project.id)}
              onMouseLeave={() => setHoveredProjectId(null)}
              onClick={() => onSelectProject(project)}
              className="group relative cursor-pointer rounded-3xl overflow-hidden border border-purple-500/20 bg-[#120722]/85 transition-all duration-500 hover:border-purple-400/60 hover:shadow-[0_10px_40px_rgba(147,51,234,0.25)] flex flex-col"
            >
              {/* Media Thumbnail & Video Simulation */}
              <div className="relative aspect-video w-full overflow-hidden bg-[#0d041a]">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#120722] via-transparent to-black/40 opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Badges on Top */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="rounded-full bg-[#08020f]/80 backdrop-blur-md px-3 py-1 text-[11px] font-mono font-medium text-purple-300 border border-purple-500/30">
                    {project.categoryLabel}
                  </span>
                  <span className="rounded-full bg-[#08020f]/80 backdrop-blur-md px-2.5 py-1 text-[11px] font-mono text-purple-200/70 border border-purple-500/30">
                    {project.year}
                  </span>
                </div>

                {/* Center Hover Action */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px] bg-black/40">
                  <div className="flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-violet-500 px-5 py-2.5 text-xs font-bold text-white shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Play className="h-3.5 w-3.5 fill-current" />
                    <span>{project.videoUrl ? 'Watch Project' : 'View Project'}</span>
                  </div>
                </div>
              </div>

              {/* Card Details Body */}
              <div className="p-6 md:p-8 flex flex-col justify-between flex-1 space-y-4">
                <div>
                  <h3 className="font-heading text-xl sm:text-2xl font-black uppercase tracking-tight text-white group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-purple-200/70 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Tags & CTA Link */}
                <div className="pt-4 border-t border-purple-500/15 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technology.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-[#1a0a30] px-2 py-0.5 text-[10px] font-mono text-purple-200/80 border border-purple-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-1 text-xs font-mono font-semibold text-purple-300 group-hover:text-purple-200">
                    <span>Explore</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Special Social Media Connection & Creatives Grid (Original Clean Dark Theme) */}
        {(activeFilter === 'Social Media' || activeFilter === 'Logofolio' || activeFilter === 'All') && (
          <div className="mt-20 pt-16 border-t border-purple-500/15">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-mono text-purple-300 uppercase tracking-widest block mb-1">
                  MY - CONTENT #1 • SOCIAL MEDIA CONNECTION
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-black text-white uppercase">
                  Social Media Collection
                </h3>
              </div>
              <p className="text-xs text-neutral-400 max-w-md font-mono leading-relaxed">
                High-impact social media creatives, festival campaigns, luxury product showcases, and real estate visual branding designed for maximum digital engagement.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
              {LOGOFOLIO_ITEMS.slice(0, 10).map((item) => (
                <div
                  key={item.id}
                  onClick={() => onSelectProject(PROJECTS[0])}
                  className="cursor-pointer group relative aspect-square rounded-2xl overflow-hidden border border-purple-500/20 bg-[#120722] p-2 hover:border-purple-400/60 hover:shadow-[0_0_25px_rgba(168,85,247,0.3)] transition-all duration-300"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-[#120722]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3 rounded-2xl">
                    <span className="text-[9px] font-mono text-purple-300 uppercase tracking-widest font-semibold">{item.category}</span>
                    <h4 className="text-xs font-bold text-white leading-snug">{item.title}</h4>
                    <div className="mt-1 flex items-center gap-1 text-[10px] text-purple-200 font-mono font-medium">
                      <span>View Campaign</span>
                      <span>↗</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

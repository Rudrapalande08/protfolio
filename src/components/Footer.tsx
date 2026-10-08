import React from 'react';
import { ArrowUp, Heart, Film, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-black pt-20 pb-12 border-t border-white/10 overflow-hidden text-neutral-400">
      
      {/* Background Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-40 bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        
        {/* Huge Cinematic Brand Wordmark */}
        <div className="text-center py-10 select-none">
          <h1 className="font-heading text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] font-black uppercase tracking-tighter text-white/90 hover:text-purple-300 transition-colors duration-700">
            SHREEHARI
          </h1>
          <p className="mt-2 text-xs sm:text-sm font-mono tracking-[0.25em] text-purple-300 uppercase">
            {PERSONAL_INFO.subtitle}
          </p>
        </div>

        {/* Links & Navigation Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12 border-y border-purple-500/15 text-xs font-mono">
          
          {/* Col 1: Studio */}
          <div className="space-y-3">
            <span className="text-white font-bold uppercase tracking-wider block">STUDIO</span>
            <p className="text-neutral-400 leading-relaxed">
              Based in Mumbai & Pune, collaborating with forward-thinking directors, brands, and creators worldwide.
            </p>
            <span className="text-emerald-400 block text-[11px]">● Open for Q3/Q4 2026 Projects</span>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-2">
            <span className="text-white font-bold uppercase tracking-wider block mb-3">NAVIGATION</span>
            <div className="flex flex-col gap-2">
              <a href="#home" className="hover:text-purple-300 transition-colors">01. Home</a>
              <a href="#work" className="hover:text-purple-300 transition-colors">02. Social Media Work</a>
              <a href="#about" className="hover:text-purple-300 transition-colors">03. Behind the Edit</a>
              <a href="#services" className="hover:text-purple-300 transition-colors">04. Services & Deliverables</a>
              <a href="#experience" className="hover:text-purple-300 transition-colors">05. Experience Timeline</a>
              <a href="#contact" className="hover:text-purple-300 transition-colors">06. Contact</a>
            </div>
          </div>

          {/* Col 3: Social Platforms */}
          <div className="space-y-2">
            <span className="text-white font-bold uppercase tracking-wider block mb-3">CHANNELS</span>
            <div className="flex flex-col gap-2">
              <a href={PERSONAL_INFO.instagram} target="_blank" rel="noreferrer" className="hover:text-purple-300 transition-colors">
                Instagram ↗
              </a>
              <a href={PERSONAL_INFO.youtube} target="_blank" rel="noreferrer" className="hover:text-purple-300 transition-colors">
                YouTube ↗
              </a>
              <a href={PERSONAL_INFO.behance} target="_blank" rel="noreferrer" className="hover:text-purple-300 transition-colors">
                Behance Portfolio ↗
              </a>
              <a href={PERSONAL_INFO.vimeo} target="_blank" rel="noreferrer" className="hover:text-purple-300 transition-colors">
                Vimeo Pro ↗
              </a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:text-purple-300 transition-colors">
                LinkedIn ↗
              </a>
            </div>
          </div>

          {/* Col 4: Back to top */}
          <div className="flex flex-col justify-between items-start md:items-end">
            <div>
              <span className="text-white font-bold uppercase tracking-wider block mb-2">INQUIRIES</span>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-purple-300 hover:underline block break-all"
              >
                {PERSONAL_INFO.email}
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-neutral-900 px-4 py-2 text-white hover:border-purple-400 hover:bg-purple-600 hover:text-white transition-all"
            >
              <span>Back to Top</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-neutral-500">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All Rights Reserved.
          </div>

          <div className="flex items-center gap-1.5 text-neutral-400">
            <span>Designed & Edited with Passion.</span>
          </div>

          <div className="flex items-center gap-4">
            <span>DCI 4K • 24FPS</span>
            <span>COLOR GRADED IN DAVINCI</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

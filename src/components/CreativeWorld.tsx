import React from 'react';
import { Play, Instagram, Youtube, ExternalLink, Sparkles, ArrowUpRight } from 'lucide-react';
import { SOCIAL_REELS, PERSONAL_INFO } from '../data/portfolioData';

interface CreativeWorldProps {
  onOpenReel: (reelUrl: string) => void;
}

export const CreativeWorld: React.FC<CreativeWorldProps> = ({ onOpenReel }) => {
  return (
    <section className="relative w-full bg-neutral-950 py-28 md:py-36 overflow-hidden border-t border-white/5">
      
      {/* Background Glow */}
      <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-widest text-purple-400 uppercase">
              <span className="h-1.5 w-6 bg-purple-400 rounded-full" />
              <span>SHORT-FORM & SOCIAL LAB</span>
            </div>

            <h2 className="font-heading text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-tight">
              MORE FROM MY CREATIVE WORLD
            </h2>

            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
              Explore high-retention 9:16 vertical edits, viral hooks, kinetic typography tests, and experimental film clips.
            </p>
          </div>

          {/* Social Links Quick Bar */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={PERSONAL_INFO.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/20 bg-[#120722] px-4 py-2 text-xs font-mono text-neutral-300 hover:border-purple-400 hover:text-white transition-colors"
            >
              <span>Instagram</span>
              <ArrowUpRight className="h-3 w-3 text-purple-300" />
            </a>

            <a
              href={PERSONAL_INFO.youtube}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/20 bg-[#120722] px-4 py-2 text-xs font-mono text-neutral-300 hover:border-purple-400 hover:text-white transition-colors"
            >
              <span>YouTube</span>
              <ArrowUpRight className="h-3 w-3 text-purple-300" />
            </a>

            <a
              href={PERSONAL_INFO.behance}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/20 bg-[#120722] px-4 py-2 text-xs font-mono text-neutral-300 hover:border-purple-400 hover:text-white transition-colors"
            >
              <span>Behance</span>
              <ArrowUpRight className="h-3 w-3 text-purple-300" />
            </a>

            <a
              href={PERSONAL_INFO.vimeo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/20 bg-[#120722] px-4 py-2 text-xs font-mono text-neutral-300 hover:border-purple-400 hover:text-white transition-colors"
            >
              <span>Vimeo</span>
              <ArrowUpRight className="h-3 w-3 text-purple-300" />
            </a>
          </div>
        </div>

        {/* 6 Vertical Reels Grid (9:16 Aspect Ratio) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {SOCIAL_REELS.map((reel) => (
            <div
              key={reel.id}
              onClick={() => onOpenReel(reel.videoUrl)}
              className="group relative aspect-[9/16] rounded-2xl overflow-hidden border border-purple-500/20 bg-[#120722] cursor-pointer transition-all duration-500 hover:border-purple-400 hover:shadow-[0_10px_30px_rgba(168,85,247,0.3)] hover:-translate-y-1.5 flex flex-col justify-between p-4"
            >
              {/* Thumbnail Image */}
              <img
                src={reel.thumbnail}
                alt={reel.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-90 group-hover:brightness-100"
              />

              {/* Gradient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#08020f] via-black/30 to-black/60 opacity-80 group-hover:opacity-60 transition-opacity" />

              {/* Top Meta */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="rounded-md bg-[#08020f]/80 backdrop-blur-md px-2 py-0.5 text-[9px] font-mono font-semibold text-purple-300 border border-purple-500/30">
                  {reel.platform}
                </span>
                <span className="text-[10px] font-mono text-purple-200/80 bg-[#08020f]/80 px-1.5 py-0.5 rounded backdrop-blur-md">
                  {reel.views}
                </span>
              </div>

              {/* Center Play Button on Hover */}
              <div className="relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-violet-500 text-white shadow-lg opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                <Play className="h-5 w-5 fill-current ml-0.5" />
              </div>

              {/* Bottom Title & Category */}
              <div className="relative z-10 space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-purple-300 block">
                  {reel.category}
                </span>
                <h4 className="font-heading text-xs font-bold text-white uppercase tracking-tight line-clamp-2">
                  {reel.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

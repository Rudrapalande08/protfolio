import React from 'react';
import { Film, Smartphone, Layers, Palette, Volume2, PenTool, CheckCircle2, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/portfolioData';

const iconMap: Record<string, React.ReactNode> = {
  Film: <Film className="h-6 w-6 text-purple-400" />,
  Smartphone: <Smartphone className="h-6 w-6 text-purple-400" />,
  Layers: <Layers className="h-6 w-6 text-purple-400" />,
  Palette: <Palette className="h-6 w-6 text-purple-400" />,
  Volume2: <Volume2 className="h-6 w-6 text-purple-400" />,
  PenTool: <PenTool className="h-6 w-6 text-purple-400" />
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="relative w-full bg-black py-28 md:py-36 overflow-hidden">
      
      {/* Background Subtle Gradient */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-widest text-purple-400 uppercase">
            <span className="h-1.5 w-6 bg-purple-400 rounded-full" />
            <span>CORE CAPABILITIES</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-tight">
            WHAT I DO
          </h2>

          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
            Tailored post-production and visual design solutions engineered to elevate brands, captivate audiences, and tell unforgettable stories.
          </p>
        </div>

        {/* 6 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-3xl border border-white/10 bg-neutral-950 p-8 transition-all duration-300 hover:border-purple-400/50 hover:bg-neutral-900/60 hover:shadow-[0_10px_35px_rgba(168,85,247,0.08)] flex flex-col justify-between"
            >
              <div>
                {/* Top Number & Icon */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-neutral-900 shadow-inner group-hover:border-purple-400/40 group-hover:bg-purple-400/10 transition-colors">
                    {iconMap[service.icon]}
                  </div>
                  <span className="font-mono text-xl font-bold text-neutral-600 group-hover:text-purple-400/60 transition-colors">
                    {service.number}
                  </span>
                </div>

                {/* Title & Highlight */}
                <h3 className="font-heading text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-2 group-hover:text-purple-300 transition-colors">
                  {service.title}
                </h3>
                <span className="inline-block rounded-md bg-white/5 px-2.5 py-0.5 text-[11px] font-mono text-purple-400/90 mb-4 border border-white/5">
                  {service.highlight}
                </span>

                {/* Description */}
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Deliverables */}
              <div className="pt-6 border-t border-white/5 space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 block mb-2">
                  Key Deliverables
                </span>
                {service.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-neutral-300">
                    <CheckCircle2 className="h-3 w-3 text-purple-400/80 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

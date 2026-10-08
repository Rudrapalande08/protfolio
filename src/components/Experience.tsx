import React from 'react';
import { Calendar, MapPin, CheckCircle2, Building2 } from 'lucide-react';
import { EXPERIENCE_TIMELINE } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative w-full bg-neutral-950 py-28 md:py-36 overflow-hidden border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-purple-400 uppercase">
            <span className="h-1.5 w-6 bg-purple-400 rounded-full" />
            <span>CAREER TRACK RECORD (FROM PDF)</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight">
            EXPERIENCE & TIMELINE
          </h2>

          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
            Over 4+ years of agency, in-house, and freelance production across graphic design, branding, and video editing.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="relative border-l-2 border-white/10 ml-4 md:ml-8 space-y-12 pl-6 md:pl-10">
          {EXPERIENCE_TIMELINE.map((item) => (
            <div key={item.id} className="relative group">
              
              {/* Timeline Indicator Node */}
              <div className="absolute -left-[33px] md:-left-[49px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-purple-400 bg-black group-hover:scale-125 transition-transform shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                <span className="h-2 w-2 rounded-full bg-purple-400" />
              </div>

              {/* Content Card */}
              <div className="rounded-3xl border border-white/10 bg-neutral-950 p-6 md:p-8 backdrop-blur-md transition-all duration-300 hover:border-purple-400/40 hover:bg-neutral-900/60">
                
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <span className="inline-block rounded-md bg-purple-400/10 px-2.5 py-0.5 text-xs font-mono font-semibold text-purple-300 border border-purple-400/20 mb-2">
                      {item.type}
                    </span>
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-white uppercase tracking-tight">
                      {item.role}
                    </h3>
                    <h4 className="text-sm font-semibold text-neutral-300 flex items-center gap-1.5 mt-0.5">
                      <Building2 className="h-3.5 w-3.5 text-purple-400" />
                      <span>{item.company}</span>
                    </h4>
                  </div>

                  <div className="text-left sm:text-right text-xs font-mono text-neutral-400 space-y-1">
                    <div className="flex items-center sm:justify-end gap-1.5 text-neutral-300">
                      <Calendar className="h-3.5 w-3.5 text-purple-400" />
                      <span>{item.period}</span>
                    </div>
                    <div className="flex items-center sm:justify-end gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-neutral-500" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Highlights */}
                {item.highlights && item.highlights.length > 0 && (
                  <div className="pt-4 border-t border-white/5 space-y-1.5">
                    {item.highlights.map((hl, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs text-neutral-400">
                        <CheckCircle2 className="h-3.5 w-3.5 text-purple-400/80 shrink-0" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

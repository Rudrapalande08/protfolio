import React from 'react';
import { Award, GraduationCap, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative w-full bg-neutral-950 py-24 md:py-32 overflow-hidden border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Avatar & PDF Portfolio Pillars */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl border border-white/10 bg-neutral-900/60 p-6 backdrop-blur-md space-y-4">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 overflow-hidden rounded-2xl border border-purple-400/40 bg-[#090312] shrink-0">
                  <img
                    src={PERSONAL_INFO.avatarPhoto}
                    alt={PERSONAL_INFO.name}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-white">{PERSONAL_INFO.name}</h3>
                  <p className="text-xs text-purple-300 font-mono">Creative Head • BFA in Art Studies</p>
                  <p className="text-[11px] text-neutral-400">GD Art Applied Art • Abhinav Kala</p>
                </div>
              </div>

              {/* PDF Content Pillars */}
              <div className="pt-4 border-t border-purple-500/15 space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-purple-300 block mb-2">
                  PORTFOLIO PILLARS (FROM OFFICIAL PDF)
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  <div className="p-2.5 rounded-xl bg-[#090312]/80 border border-purple-500/15"><span className="text-purple-300 font-bold">1.</span> Social Media</div>
                  <div className="p-2.5 rounded-xl bg-[#090312]/80 border border-purple-500/15"><span className="text-purple-300 font-bold">2.</span> Branding</div>
                  <div className="p-2.5 rounded-xl bg-[#090312]/80 border border-purple-500/15"><span className="text-purple-300 font-bold">3.</span> Social Media</div>
                  <div className="p-2.5 rounded-xl bg-[#090312]/80 border border-purple-500/15"><span className="text-purple-300 font-bold">4.</span> Print Media</div>
                  <div className="p-2.5 rounded-xl bg-[#090312]/80 border border-purple-500/15"><span className="text-purple-300 font-bold">5.</span> Web Landing Page</div>
                  <div className="p-2.5 rounded-xl bg-[#090312]/80 border border-purple-500/15"><span className="text-purple-300 font-bold">6.</span> Video Editing</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Official Biography & Education from PDF */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-purple-400 uppercase">
              <span className="h-1.5 w-6 bg-purple-400 rounded-full" />
              <span>HELLO THERE!</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              I DON'T JUST EDIT VIDEOS. <br />
              <span className="text-neutral-500">I CREATE EXPERIENCES.</span>
            </h2>

            <p className="text-base sm:text-lg text-neutral-200 leading-relaxed font-light">
              "{PERSONAL_INFO.bio}"
            </p>

            <p className="text-sm text-neutral-400 leading-relaxed">
              "{PERSONAL_INFO.extendedBio}"
            </p>

            {/* Education from PDF */}
            <div className="pt-4 border-t border-purple-500/15 space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                Formal Education
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-4 rounded-2xl border border-purple-500/20 bg-[#120722]/60 space-y-1">
                  <div className="flex items-center gap-2 text-purple-300 text-xs font-mono">
                    <GraduationCap className="h-4 w-4" />
                    <span>May 2022 — May 2023 (Grade: A+)</span>
                  </div>
                  <h5 className="text-sm font-bold text-white">MIT World Peace University</h5>
                  <p className="text-xs text-neutral-400 font-mono">Bachelor of Fine Arts - BFA, Art / Art Studies, General</p>
                </div>

                <div className="p-4 rounded-2xl border border-purple-500/20 bg-[#120722]/60 space-y-1">
                  <div className="flex items-center gap-2 text-purple-300 text-xs font-mono">
                    <Award className="h-4 w-4" />
                    <span>2018 — 2022</span>
                  </div>
                  <h5 className="text-sm font-bold text-white">BKP Sabha's Abhinav Kala Maha Vidyalaya</h5>
                  <p className="text-xs text-neutral-400 font-mono">GD Art, applied art (4-Year Program)</p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-bold text-black hover:bg-neutral-200 transition-colors shadow-md"
              >
                <span>Book a Discovery Call</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>

              <a
                href="#experience"
                className="text-xs font-mono text-neutral-400 hover:text-purple-300 transition-colors"
              >
                View Full Timeline ↓
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

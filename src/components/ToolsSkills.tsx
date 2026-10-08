import React from 'react';
import { TOOLS_AND_SKILLS } from '../data/portfolioData';

export const ToolsSkills: React.FC = () => {
  return (
    <section id="skills" className="relative w-full bg-black py-28 md:py-36 overflow-hidden border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-purple-400 uppercase">
            <span className="h-1.5 w-6 bg-purple-400 rounded-full" />
            <span>SKILLS & SOFTWARE (FROM PDF)</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight">
            TOOLS OF THE TRADE
          </h2>

          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
            Proficiency across Adobe Creative Suite, Blender 3D, and DaVinci Resolve color grading.
          </p>
        </div>

        {/* Software Cards Grid with exact PDF descriptions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {TOOLS_AND_SKILLS.tools.map((tool) => (
            <div
              key={tool.name}
              className="group relative rounded-2xl border border-purple-500/20 bg-[#120722]/80 p-6 backdrop-blur-md transition-all duration-300 hover:border-purple-400/50 hover:bg-[#1a0a30]"
            >
              <div className="flex items-center justify-between mb-6">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl font-heading text-lg font-black border border-purple-500/20"
                  style={{ backgroundColor: `${tool.color}15`, color: tool.color }}
                >
                  {tool.iconName}
                </div>
                <span className="text-[10px] font-mono uppercase text-purple-300 bg-purple-500/15 px-2.5 py-0.5 rounded-full border border-purple-400/30">
                  {tool.proficiency}
                </span>
              </div>

              <h3 className="font-heading text-lg font-bold text-white uppercase tracking-tight group-hover:text-purple-200 transition-colors">
                {tool.name}
              </h3>
              <div className="pt-3 mt-3 border-t border-purple-500/15 text-[11px] text-purple-200/80 font-medium">
                ✦ {tool.badge}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Tag Cloud */}
        <div className="rounded-3xl border border-purple-500/20 bg-[#120722]/70 p-8 md:p-10 backdrop-blur-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-white uppercase">
                Core Skills & Capabilities
              </h3>
              <p className="text-xs text-neutral-400 font-mono mt-1">
                Zero arbitrary percentages — pure proven expertise across the entire visual pipeline.
              </p>
            </div>
            <span className="text-xs font-mono text-purple-300">14+ SPECIALTIES</span>
          </div>

          <div className="flex flex-wrap gap-2.5 sm:gap-3">
            {TOOLS_AND_SKILLS.skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-[#120722]/90 px-4 py-2 text-xs font-medium text-purple-100 hover:border-purple-400 hover:text-white hover:bg-[#1f0b3b] transition-all cursor-default"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                <span>{skill}</span>
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

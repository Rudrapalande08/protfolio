import React, { useState } from 'react';
import { ArrowRight, Sparkles, CheckCircle, Clock } from 'lucide-react';
import { PROCESS_STEPS } from '../data/portfolioData';

export const EditingProcess: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  return (
    <section id="process" className="relative w-full bg-neutral-950 py-28 md:py-36 overflow-hidden border-t border-white/5">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        
        {/* Section Title */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-widest text-purple-300 uppercase">
            <span className="h-1.5 w-6 bg-purple-400 rounded-full" />
            <span>WORKFLOW & METHODOLOGY</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-tight">
            FROM FOOTAGE TO FINAL FRAME
          </h2>

          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
            A meticulous 5-step post-production pipeline built for precision, storytelling impact, and frictionless collaboration.
          </p>
        </div>

        {/* Horizontal Process Steps Bar (Interactive) */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
          {PROCESS_STEPS.map((step, idx) => (
            <button
              key={step.number}
              onClick={() => setActiveStepIndex(idx)}
              className={`text-left p-5 rounded-2xl border transition-all duration-300 ${
                activeStepIndex === idx
                  ? 'border-purple-400 bg-[#1e0a38] shadow-[0_0_25px_rgba(168,85,247,0.25)]'
                  : 'border-purple-500/15 bg-[#120722]/70 hover:border-purple-400/30 hover:bg-[#1a0a30]'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className={`font-mono text-sm font-bold ${activeStepIndex === idx ? 'text-purple-300' : 'text-purple-500/60'}`}>
                  {step.number}
                </span>
                <span className="text-[10px] font-mono text-purple-400/60">STEP {idx + 1}/5</span>
              </div>
              <h4 className="font-heading text-lg font-black text-white uppercase tracking-tight mb-1">
                {step.title}
              </h4>
              <p className="text-xs text-purple-200/60 truncate">
                {step.shortDesc}
              </p>
            </button>
          ))}
        </div>

        {/* Active Step Deep-Dive Showcase Card */}
        <div className="rounded-3xl border border-purple-500/20 bg-[#120722]/85 p-8 md:p-12 backdrop-blur-xl shadow-2xl relative overflow-hidden">
          
          {/* Subtle Accent Background Watermark */}
          <span className="absolute -right-6 -bottom-10 font-heading text-9xl md:text-[14rem] font-black text-purple-500/5 select-none pointer-events-none">
            {PROCESS_STEPS[activeStepIndex].number}
          </span>

          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/15 border border-purple-400/30 px-3 py-1 text-xs font-mono font-semibold text-purple-300">
              <span>PHASE {PROCESS_STEPS[activeStepIndex].number} — {PROCESS_STEPS[activeStepIndex].title}</span>
            </div>

            <h3 className="font-heading text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
              {PROCESS_STEPS[activeStepIndex].title}: {PROCESS_STEPS[activeStepIndex].shortDesc}
            </h3>

            <p className="text-base sm:text-lg text-purple-100/90 leading-relaxed font-light">
              {PROCESS_STEPS[activeStepIndex].fullDesc}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-purple-500/15">
              <div className="p-4 rounded-xl bg-[#0b0314]/80 border border-purple-500/20 space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-purple-300 block">
                  Core Execution Action
                </span>
                <span className="text-xs sm:text-sm font-medium text-purple-100">
                  {PROCESS_STEPS[activeStepIndex].keyAction}
                </span>
              </div>

              <div className="p-4 rounded-xl bg-[#0b0314]/80 border border-purple-500/20 space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-purple-300 block">
                  Stage Output Deliverable
                </span>
                <span className="text-xs sm:text-sm font-medium text-purple-100">
                  {PROCESS_STEPS[activeStepIndex].deliverable}
                </span>
              </div>
            </div>

            {/* Navigation between steps */}
            <div className="flex items-center justify-between pt-6">
              <button
                disabled={activeStepIndex === 0}
                onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                className={`text-xs font-mono font-medium px-4 py-2 rounded-lg border transition-colors ${
                  activeStepIndex === 0
                    ? 'border-neutral-800 text-neutral-600 cursor-not-allowed'
                    : 'border-purple-500/20 text-purple-200 hover:text-white hover:border-purple-400'
                }`}
              >
                ← Previous Step
              </button>

              <button
                disabled={activeStepIndex === PROCESS_STEPS.length - 1}
                onClick={() => setActiveStepIndex((prev) => Math.min(PROCESS_STEPS.length - 1, prev + 1))}
                className={`text-xs font-mono font-medium px-4 py-2 rounded-lg border transition-colors flex items-center gap-1.5 ${
                  activeStepIndex === PROCESS_STEPS.length - 1
                    ? 'border-neutral-800 text-neutral-600 cursor-not-allowed'
                    : 'border-purple-400/40 text-purple-300 hover:bg-purple-600 hover:text-white'
                }`}
              >
                <span>Next Step</span>
                <span>→</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { Film, Play, Sparkles, Sliders, Volume2 } from 'lucide-react';

interface IntroductionProps {
  onOpenProject: () => void;
}

export const Introduction: React.FC<IntroductionProps> = ({ onOpenProject }) => {
  const [isPlayingPreview, setIsPlayingPreview] = useState(false);

  return (
    <section id="intro" className="relative w-full bg-neutral-950 py-24 md:py-32 overflow-hidden border-t border-white/5">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Philosophy & Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-widest text-purple-400 uppercase mb-4">
              <span className="h-1.5 w-6 bg-purple-400 rounded-full" />
              <span>CREATIVE PHILOSOPHY</span>
            </div>

            {/* Main Heading */}
            <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-[1.1] mb-8">
              I DON'T JUST EDIT VIDEOS. <br />
              <span className="text-neutral-500 hover:text-neutral-300 transition-colors">
                I CREATE EXPERIENCES.
              </span>
            </h2>

            {/* Quote Block */}
            <blockquote className="border-l-2 border-purple-400/60 pl-6 my-4 text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
              "From the first cut to the final color grade, I focus on rhythm, emotion, storytelling, and visual impact. Whether it's a cinematic film, social media reel, music video, advertisement, or brand campaign, every frame has a purpose."
            </blockquote>

            <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed max-w-xl">
              Backed by a formal Fine Arts degree in Art Studies from MIT World Peace University and GD Art in Applied Art, I bridge the gap between creative visual artistry and modern high-retention digital pacing.
            </p>

            {/* Feature Pills */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-2.5 rounded-xl border border-purple-500/20 bg-[#120722]/60 p-3 backdrop-blur-sm">
                <Film className="h-4 w-4 text-purple-400" />
                <span className="text-xs font-medium text-neutral-200">Rhythmic Pacing</span>
              </div>
              <div className="flex items-center gap-2.5 rounded-xl border border-purple-500/20 bg-[#120722]/60 p-3 backdrop-blur-sm">
                <Sliders className="h-4 w-4 text-purple-400" />
                <span className="text-xs font-medium text-neutral-200">Color Grading</span>
              </div>
              <div className="flex items-center gap-2.5 rounded-xl border border-purple-500/20 bg-[#120722]/60 p-3 backdrop-blur-sm">
                <Volume2 className="h-4 w-4 text-purple-400" />
                <span className="text-xs font-medium text-neutral-200">Spatial Sound</span>
              </div>
            </div>
          </div>

          {/* Right Column: Cinematic Interactive Video Frame */}
          <div className="lg:col-span-5">
            <div className="relative group rounded-2xl overflow-hidden border border-purple-500/25 bg-[#120722] shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
              {/* Top Film Strip Header */}
              <div className="flex items-center justify-between border-b border-purple-500/20 bg-[#090312] px-4 py-2.5 text-[11px] font-mono text-neutral-400">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-white font-semibold">PREVIEW MONITOR</span>
                </div>
                <span className="text-purple-300">00:00:24:12</span>
              </div>

              {/* Video Player Display */}
              <div className="relative aspect-video w-full bg-black overflow-hidden">
                <img
                  src="assets/projects/video/showreel_poster.jpg"
                  alt="Cinematic Preview"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

                {/* Central Play Trigger Button */}
                <button
                  onClick={onOpenProject}
                  className="absolute inset-0 flex items-center justify-center group/btn"
                  aria-label="View Project"
                >
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-violet-500 text-white shadow-[0_0_40px_rgba(168,85,247,0.6)] transition-all duration-300 group-hover/btn:scale-110">
                    <Play className="h-6 w-6 fill-current ml-1" />
                    <span className="absolute -inset-2 rounded-full border border-purple-400/40 animate-ping" />
                  </div>
                </button>

                {/* Bottom Timeline Waveform simulation */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between gap-3 text-[10px] font-mono text-neutral-300 bg-neutral-950/80 px-3 py-1.5 rounded-lg border border-purple-500/20 backdrop-blur-md">
                  <span className="text-purple-300">AUDIO STEMS</span>
                  <div className="flex items-end gap-1 h-3 flex-1 px-2">
                    {[40, 70, 90, 30, 80, 100, 60, 45, 85, 95, 30, 75, 90, 65, 40, 80, 100, 50, 70, 90, 40].map((h, i) => (
                      <span
                        key={i}
                        className="w-1 bg-purple-400/80 rounded-full"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                  <span>48kHz 24-bit</span>
                </div>
              </div>

              {/* Card Footer Info */}
              <div className="p-4 bg-[#120722]/90 flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-semibold text-white">Visual Narrative Project</h4>
                  <p className="text-neutral-400 font-mono text-[11px]">Edited by Shreehari Chougule</p>
                </div>
                <button
                  onClick={onOpenProject}
                  className="text-purple-300 hover:text-purple-200 font-mono font-medium flex items-center gap-1 text-xs"
                >
                  <span>View Project</span>
                  <span>↗</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

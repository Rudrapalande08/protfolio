import React, { useState } from 'react';
import { Play, Eye, ArrowUpRight, Sparkles, Volume2, VolumeX } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {}

export const Hero: React.FC<HeroProps> = () => {
  const [muted, setMuted] = useState(true);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-black pt-28 pb-12"
    >
      {/* Cinematic Ambient Background Video / Poster */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted={muted}
          playsInline
          poster="assets/projects/video/midnight_stories_thumb.jpg"
          className="h-full w-full object-cover opacity-30 scale-105 transition-transform duration-1000 ease-out"
        >
          <source
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/85" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.85)_100%)]" />
      </div>

      {/* Top HUD Status Bar */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-10">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4 text-[11px] font-mono tracking-wider text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-neutral-300 font-medium">AVAILABLE FOR FREELANCE & REMOTE COMMISSIONS</span>
          </div>

          <div className="hidden sm:flex items-center gap-6">
            <span className="text-purple-300 font-semibold">BFA ART STUDIES (GRADE A+)</span>
            <span>4+ YEARS EXPERIENCE</span>
            <span>MUMBAI / PUNE / GLOBAL</span>
          </div>

          <button
            onClick={() => setMuted(!muted)}
            className="flex items-center gap-1.5 rounded-full border border-purple-500/20 bg-white/5 px-3 py-1 text-neutral-300 hover:border-purple-400 hover:text-purple-300 transition-colors"
            title="Toggle Ambient Audio"
          >
            {muted ? <VolumeX className="h-3.5 w-3.5" /> : <Volume2 className="h-3.5 w-3.5 text-purple-300 animate-bounce" />}
            <span>{muted ? 'SOUND OFF' : 'SOUND ON'}</span>
          </button>
        </div>
      </div>

      {/* Center Grid: Typography + Shreehari's Real Portrait Photo */}
      <div className="relative z-10 mx-auto my-auto w-full max-w-7xl px-6 md:px-10 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Bio */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-1.5 text-xs font-mono font-medium tracking-wider text-purple-300 backdrop-blur-md shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-purple-300" />
              <span>GRAPHIC DESIGN & VIDEO PORTFOLIO</span>
            </div>

            <div>
              <h2 className="text-sm md:text-base font-mono uppercase tracking-[0.25em] text-neutral-400 mb-2">
                {PERSONAL_INFO.name}
              </h2>

              <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
                CREATIVE HEAD <br />
                <span className="bg-gradient-to-r from-purple-200 via-purple-400 to-violet-400 bg-clip-text text-transparent">
                  & VIDEO CREATOR
                </span>
              </h1>
            </div>

            <p className="text-lg sm:text-xl font-light text-neutral-200 leading-relaxed max-w-2xl">
              "{PERSONAL_INFO.tagline}"
            </p>

            <p className="text-sm sm:text-base text-neutral-400 max-w-2xl leading-relaxed">
              I transform raw footage into cinematic stories, engaging social content, and visuals that people remember. Formal BFA in Art Studies (Grade A+) from MIT World Peace University, delivering creative direction, frame-accurate editing, motion design, and brand identities.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#work"
                className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-purple-600 to-violet-600 px-7 py-3.5 text-sm font-bold text-white transition-all hover:from-purple-500 hover:to-violet-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:scale-105"
              >
                <Eye className="h-4 w-4" />
                <span>View My Work</span>
              </a>

              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-neutral-900/80 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all hover:border-purple-400 hover:bg-purple-500/10"
              >
                <span>Let's Collaborate</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Shreehari's Real Portrait Photo */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md rounded-3xl overflow-hidden border border-purple-500/25 bg-[#120722] shadow-[0_20px_60px_rgba(0,0,0,0.8)] group">
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-950 flex items-center justify-center">
                <img
                  src={PERSONAL_INFO.portraitPhoto}
                  alt={PERSONAL_INFO.name}
                  className="h-full w-full object-cover object-top filter brightness-100 contrast-105 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />

                {/* Floating Badge */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-neutral-950/90 backdrop-blur-md border border-purple-500/20 shadow-xl">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      <span className="text-xs font-bold text-white uppercase tracking-wide">{PERSONAL_INFO.name}</span>
                    </div>
                    <span className="text-[10px] font-mono text-purple-300 bg-purple-500/15 px-2 py-0.5 rounded border border-purple-400/30">BFA Grade: A+</span>
                  </div>
                  <p className="text-[11px] text-neutral-300 font-mono">Creative Head • Graphic Designer & Video Creator</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Stats */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-purple-500/15">
          {PERSONAL_INFO.stats.map((stat, i) => (
            <div key={i} className="flex flex-col">
              <span className="font-heading text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {stat.number}
              </span>
              <span className="text-xs font-medium text-purple-300 uppercase">
                {stat.label}
              </span>
              <span className="text-[11px] text-neutral-500 font-mono hidden sm:inline">
                {stat.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

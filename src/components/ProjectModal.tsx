import React, { useEffect } from 'react';
import { X, Play, Sparkles, CheckCircle2, ArrowRight, Film, ExternalLink } from 'lucide-react';
import { Project } from '../types';
import { ColorGradeSlider } from './ColorGradeSlider';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-6 md:p-10 backdrop-blur-2xl animate-fadeIn overflow-y-auto">
      {/* Background click to close */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative z-10 my-auto w-full max-w-5xl rounded-3xl border border-white/20 bg-neutral-950 shadow-[0_0_80px_rgba(0,0,0,0.9)] overflow-hidden">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between border-b border-white/10 bg-neutral-900/90 px-6 py-4 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-purple-400/10 border border-purple-400/30 px-3 py-1 text-xs font-mono font-semibold text-purple-300">
              {project.categoryLabel}
            </span>
            <span className="text-xs font-mono text-neutral-400">YEAR: {project.year}</span>
          </div>

          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-neutral-800 text-neutral-300 hover:border-white/30 hover:bg-neutral-700 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="max-h-[82vh] overflow-y-auto p-6 sm:p-8 space-y-8">
          
          {/* Main Hero Media / Video */}
          <div className="space-y-4">
            {project.videoUrl ? (
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/15 bg-black shadow-2xl">
                <video
                  controls
                  autoPlay
                  playsInline
                  poster={project.thumbnail}
                  className="h-full w-full object-cover"
                >
                  <source src={project.videoUrl} type="video/mp4" />
                </video>
              </div>
            ) : (
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/15 bg-neutral-900">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
              </div>
            )}
          </div>

          {/* Color Grade Interactive Comparison (if available) */}
          {project.hasColorGradeDemo && project.colorGradeDemo && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-purple-400 flex items-center gap-2">
                  <Film className="h-4 w-4" />
                  <span>Interactive Color Grading Pipeline</span>
                </h3>
                <span className="text-xs text-neutral-400 font-mono">
                  {project.colorGradeDemo.cameraProfile}
                </span>
              </div>

              <ColorGradeSlider
                beforeImg={project.colorGradeDemo.beforeImg}
                afterImg={project.colorGradeDemo.afterImg}
                beforeLabel={project.colorGradeDemo.beforeLabel}
                afterLabel={project.colorGradeDemo.afterLabel}
              />
            </div>
          )}

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4 border-t border-white/10">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-4">
              <h2 className="font-heading text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
                {project.title}
              </h2>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                {project.longDescription || project.description}
              </p>

              {/* Deliverables Checklist */}
              {project.deliverables && (
                <div className="pt-4 space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                    Project Deliverables
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.deliverables.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-neutral-200">
                        <CheckCircle2 className="h-3.5 w-3.5 text-purple-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Meta & Metrics */}
            <div className="lg:col-span-5 space-y-6 bg-neutral-900/60 p-6 rounded-2xl border border-white/10">
              
              {/* Technology Stack */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2.5">
                  Software & Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technology.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-white/15 bg-neutral-800 px-2.5 py-1 text-xs font-medium text-purple-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Metrics */}
              {project.metrics && (
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2.5">
                    Production Specs
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {project.metrics.map((m, i) => (
                      <div key={i} className="rounded-xl border border-white/5 bg-neutral-950 p-3">
                        <span className="block text-[10px] font-mono text-neutral-400 uppercase">
                          {m.label}
                        </span>
                        <span className="font-heading text-sm font-bold text-white">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Editor Credit */}
              <div className="border-t border-white/10 pt-4 text-xs font-mono text-neutral-400">
                <span>Editor & Visual Designer: </span>
                <span className="text-white font-semibold">Shreehari Chougule</span>
              </div>
            </div>

          </div>

          {/* Project Gallery (if provided) */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="space-y-4 pt-6 border-t border-white/10">
              <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-neutral-300">
                Visual Assets & Design Breakdown
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {project.gallery.map((imgSrc, idx) => (
                  <div
                    key={idx}
                    className="group relative aspect-square rounded-xl overflow-hidden border border-white/10 bg-neutral-900"
                  >
                    <img
                      src={imgSrc}
                      alt={`Gallery item ${idx + 1}`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

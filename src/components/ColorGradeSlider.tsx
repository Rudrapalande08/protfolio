import React, { useState, useRef } from 'react';
import { Sliders, Sparkles } from 'lucide-react';

interface ColorGradeSliderProps {
  beforeImg: string;
  afterImg: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export const ColorGradeSlider: React.FC<ColorGradeSliderProps> = ({
  beforeImg,
  afterImg,
  beforeLabel = 'Camera Raw Log-C (Flat)',
  afterLabel = 'DaVinci 35mm Film Grade'
}) => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (e.buttons === 1) {
      handleMove(e.clientX);
    }
  };

  return (
    <div className="relative w-full rounded-2xl overflow-hidden border border-white/20 bg-black select-none shadow-2xl">
      {/* Top HUD */}
      <div className="flex items-center justify-between bg-neutral-950 px-4 py-2 border-b border-white/10 text-xs font-mono">
        <div className="flex items-center gap-2 text-purple-400">
          <Sliders className="h-3.5 w-3.5" />
          <span className="font-semibold tracking-wider">COLOR SCIENCE COMPARISON</span>
        </div>
        <div className="flex items-center gap-4 text-neutral-400 text-[11px]">
          <span className="hidden sm:inline">DRAG SLIDER TO REVEAL</span>
          <span className="text-white bg-neutral-800 px-2 py-0.5 rounded">{Math.round(sliderPos)}%</span>
        </div>
      </div>

      {/* Main Interactive Comparison Container */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onClick={(e) => handleMove(e.clientX)}
        className="relative aspect-video w-full cursor-ew-resize overflow-hidden bg-neutral-900"
      >
        {/* Graded Image (Background full width) */}
        <div className="absolute inset-0">
          <img
            src={afterImg}
            alt="Color Graded"
            className="h-full w-full object-cover filter contrast-125 saturate-125"
          />
          {/* Label Right */}
          <div className="absolute bottom-4 right-4 rounded-md bg-black/80 backdrop-blur-md px-3 py-1 text-xs font-mono font-medium text-purple-300 border border-purple-500/30">
            {afterLabel}
          </div>
        </div>

        {/* Flat Log-C Image (Clipped overlay) */}
        <div
          className="absolute inset-0 overflow-hidden border-r-2 border-purple-400"
          style={{ width: `${sliderPos}%` }}
        >
          <img
            src={beforeImg}
            alt="Raw Flat Log"
            className="absolute inset-0 h-full w-full object-cover max-w-none filter brightness-110 contrast-75 saturate-50 sepia-0"
            style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
          />
          {/* Label Left */}
          <div className="absolute bottom-4 left-4 rounded-md bg-black/80 backdrop-blur-md px-3 py-1 text-xs font-mono font-medium text-neutral-300 border border-white/20">
            {beforeLabel}
          </div>
        </div>

        {/* Divider Handle */}
        <div
          className="absolute top-0 bottom-0 -ml-4 flex items-center justify-center pointer-events-none"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-400 text-black shadow-[0_0_20px_rgba(168,85,247,0.8)]">
            <span className="text-xs font-black">◀ ▶</span>
          </div>
        </div>
      </div>
    </div>
  );
};

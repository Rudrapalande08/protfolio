import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const onMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const handleHoverCheck = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest('button') ||
        target.closest('a') ||
        target.closest('[role="button"]') ||
        target.closest('input') ||
        target.closest('select') ||
        target.closest('textarea') ||
        target.closest('.interactive-cursor')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousemove', handleHoverCheck);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    let frameId: number;
    const animateTrailing = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.18,
        y: prev.y + (pos.y - prev.y) * 0.18
      }));
      frameId = requestAnimationFrame(animateTrailing);
    };
    frameId = requestAnimationFrame(animateTrailing);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousemove', handleHoverCheck);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(frameId);
    };
  }, [pos, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Precision center dot */}
      <div
        className="pointer-events-none fixed z-[9999] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-400 transition-transform duration-75 ease-out"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovered ? 0 : 1})`
        }}
      />
      {/* Cinematic lens ring / glow */}
      <div
        className={`pointer-events-none fixed z-[9998] -translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-300 ease-out ${
          isHovered
            ? 'h-16 w-16 border-purple-400/80 bg-purple-400/10 backdrop-blur-[1px]'
            : 'h-8 w-8 border-white/40 bg-white/5'
        }`}
        style={{
          left: `${trailingPos.x}px`,
          top: `${trailingPos.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      />
    </>
  );
};

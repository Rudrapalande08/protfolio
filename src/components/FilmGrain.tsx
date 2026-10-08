import React, { useEffect, useRef } from 'react';

export const FilmGrain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth / 2);
    let height = (canvas.height = window.innerHeight / 2);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth / 2;
      height = canvas.height = window.innerHeight / 2;
    };

    window.addEventListener('resize', handleResize);

    const generateNoise = () => {
      const imgData = ctx.createImageData(width, height);
      const data = imgData.data;
      const buffer = new Uint32Array(data.buffer);
      const len = buffer.length;

      for (let i = 0; i < len; i++) {
        // Random subtle gray noise with 4-6% opacity
        if (Math.random() < 0.12) {
          const val = Math.floor(Math.random() * 255);
          buffer[i] = (16 << 24) | (val << 16) | (val << 8) | val;
        } else {
          buffer[i] = 0;
        }
      }

      ctx.putImageData(imgData, 0, 0);
      animationFrameId = requestAnimationFrame(generateNoise);
    };

    generateNoise();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-35 mix-blend-screen"
      style={{ imageRendering: 'pixelated' }}
    />
  );
};

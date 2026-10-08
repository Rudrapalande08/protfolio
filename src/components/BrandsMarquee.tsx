import React from 'react';
import { BRANDS } from '../data/portfolioData';

export const BrandsMarquee: React.FC = () => {
  return (
    <section className="relative w-full bg-black py-16 overflow-hidden border-y border-white/5">
      <div className="mx-auto max-w-7xl px-6 md:px-10 mb-8 text-center">
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-neutral-500">
          COMPANIES, AGENCIES & BRANDS WORKED WITH
        </span>
      </div>

      {/* Infinite Scrolling Ticker */}
      <div className="flex overflow-hidden select-none">
        <div className="flex shrink-0 items-center gap-12 sm:gap-16 animate-marquee whitespace-nowrap">
          {BRANDS.concat(BRANDS).map((b, i) => (
            <div
              key={i}
              className="flex items-center gap-3 text-lg sm:text-xl font-heading font-black tracking-widest text-neutral-500 hover:text-white transition-colors cursor-default"
            >
              <span>{b.symbol}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

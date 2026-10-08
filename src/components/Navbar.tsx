import React, { useState, useEffect } from 'react';
import { Menu, X, Play, ArrowUpRight, Film } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenShowreel: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenShowreel }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Tools', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-neutral-950/80 py-3.5 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/60'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10">
        {/* Brand Logo */}
        <a
          href="#home"
          className="group flex items-center gap-3 transition-opacity hover:opacity-90"
        >
          <div className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-purple-500/30 bg-gradient-to-br from-purple-500/20 to-neutral-900 text-purple-400 shadow-inner group-hover:border-purple-400/60 transition-colors">
            <Film className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-500"></span>
            </span>
          </div>
          <div>
            <div className="font-heading font-black tracking-widest text-white text-base md:text-lg flex items-center gap-1.5">
              <span>SHREEHARI</span>
              <span className="text-xs font-mono font-normal text-purple-300 px-1.5 py-0.5 rounded bg-purple-400/10 border border-purple-400/20">EDIT</span>
            </div>
            <p className="text-[10px] tracking-widest text-neutral-400 uppercase font-mono">
              Creative Head • Video & Design
            </p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 rounded-full border border-white/10 bg-neutral-900/60 p-1.5 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-1.5 text-xs font-medium tracking-wider text-neutral-300 transition-all hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenShowreel}
            className="group flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-2 text-xs font-semibold text-purple-300 transition-all hover:border-purple-400 hover:bg-purple-400 hover:text-black shadow-lg shadow-purple-500/10"
          >
            <Play className="h-3.5 w-3.5 fill-current transition-transform group-hover:scale-110" />
            <span>Archive</span>
          </button>

          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-neutral-100 to-neutral-200 px-5 py-2 text-xs font-bold text-neutral-950 transition-all hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] hover:scale-105"
          >
            <span>Let's Work Together</span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-neutral-900/80 text-white lg:hidden"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-[65px] border-b border-neutral-800 bg-neutral-950/95 p-6 backdrop-blur-2xl lg:hidden animate-fadeIn">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-neutral-200 hover:bg-neutral-800 hover:text-white"
              >
                <span>{link.label}</span>
                <span className="text-xs text-neutral-500 font-mono">→</span>
              </a>
            ))}

            <div className="mt-4 pt-4 border-t border-neutral-800 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenShowreel();
                }}
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-purple-500/40 bg-purple-500/10 py-3 text-sm font-semibold text-purple-300"
              >
                <Play className="h-4 w-4 fill-current" />
                <span>View Portfolio Archive</span>
              </button>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3 text-sm font-bold text-black"
              >
                <span>Let's Work Together</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

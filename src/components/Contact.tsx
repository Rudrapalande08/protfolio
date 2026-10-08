import React, { useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle2, Copy, Check, ArrowUpRight, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    projectType: 'Commercial',
    budget: '$1,000 - $3,000',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email) return;
    setIsSubmitted(true);
    setTimeout(() => {
      // simulate success
    }, 1000);
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const projectTypes = [
    'Commercial',
    'Short Film',
    'Instagram Reel / TikTok',
    'YouTube Video',
    'Music Video',
    'Documentary',
    'Motion Graphics',
    'Branding & Packaging',
    'Other'
  ];

  const budgetTiers = [
    '<$1,000',
    '$1,000 - $3,000',
    '$3,000 - $5,000',
    '$5,000+'
  ];

  return (
    <section id="contact" className="relative w-full bg-black py-28 md:py-36 overflow-hidden border-t border-white/5">
      
      {/* Ambient Velvet Purple Glow */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Dramatic Copy & Direct Links */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-widest text-purple-400 uppercase">
                <span className="h-1.5 w-6 bg-purple-400 rounded-full" />
                <span>START A COLLABORATION</span>
              </div>

              <h2 className="font-heading text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-tight">
                HAVE A STORY <br />
                <span className="text-purple-300">TO TELL?</span>
              </h2>

              <p className="text-lg sm:text-xl text-neutral-300 font-light leading-relaxed">
                Let's turn your idea into something worth watching.
              </p>
            </div>

            <p className="text-sm text-neutral-400 leading-relaxed">
              Whether you need a full post-production pipeline for your film, high-retention social content that converts, or a cohesive brand identity, I'm ready to bring your vision to life.
            </p>

            {/* Direct Contact Badges */}
            <div className="space-y-3 pt-4 border-t border-purple-500/15">
              
              {/* Email Card with Copy Action */}
              <div className="flex items-center justify-between p-4 rounded-2xl border border-purple-500/20 bg-[#120722]/80">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-300 border border-purple-500/20">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-neutral-400 uppercase block">DIRECT EMAIL</span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-xs sm:text-sm font-mono font-semibold text-white hover:text-purple-300 transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={copyEmailToClipboard}
                  className="p-2 text-neutral-400 hover:text-white rounded-lg bg-[#090312] border border-purple-500/15 transition-colors"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                </button>
              </div>

              {/* WhatsApp Quick Chat */}
              <a
                href={`https://wa.me/919876543210?text=Hi%20Shreehari,%20I'd%20like%20to%20collaborate%20on%20a%20video%20project!`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl border border-emerald-500/30 bg-emerald-950/20 hover:bg-emerald-950/40 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-emerald-400 uppercase block">FAST RESPONSE</span>
                    <span className="text-xs sm:text-sm font-mono font-semibold text-white">
                      Chat on WhatsApp
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-emerald-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

            </div>

            {/* Quick Status Tag */}
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Response time: Usually within 24 hours</span>
            </div>

          </div>

          {/* Right Column: Interactive Project Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-purple-500/25 bg-[#120722]/80 p-8 sm:p-10 backdrop-blur-xl shadow-2xl">
              
              {isSubmitted ? (
                <div className="py-16 text-center space-y-4 animate-fadeIn">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="font-heading text-2xl font-black text-white uppercase">
                    Message Dispatched!
                  </h3>
                  <p className="text-sm text-neutral-400 max-w-md mx-auto">
                    Thank you for reaching out, <span className="text-white font-semibold">{formState.name}</span>. Shreehari will review your project brief and get back to you shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 rounded-full border border-purple-500/30 bg-[#090312] px-6 py-2.5 text-xs font-mono text-white hover:border-purple-400"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-neutral-300">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Miller"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full rounded-xl border border-purple-500/20 bg-[#090312] px-4 py-3 text-sm text-white placeholder-neutral-500 focus:border-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-400 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-neutral-300">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alex@brand.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full rounded-xl border border-purple-500/20 bg-[#090312] px-4 py-3 text-sm text-white placeholder-neutral-500 focus:border-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Project Type Select */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-neutral-300">
                      Project Type
                    </label>
                    <select
                      value={formState.projectType}
                      onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                      className="w-full rounded-xl border border-purple-500/20 bg-[#090312] px-4 py-3 text-sm text-white focus:border-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-400 transition-colors cursor-pointer"
                    >
                      {projectTypes.map((t) => (
                        <option key={t} value={t} className="bg-[#090312] text-white">
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Budget Selector */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-neutral-300">
                      Estimated Budget (USD)
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {budgetTiers.map((tier) => (
                        <button
                          type="button"
                          key={tier}
                          onClick={() => setFormState({ ...formState, budget: tier })}
                          className={`rounded-xl border py-2.5 px-2 text-xs font-mono text-center transition-all ${
                            formState.budget === tier
                              ? 'border-purple-400 bg-purple-500/20 text-purple-200 font-bold shadow-[0_0_15px_rgba(168,85,247,0.3)]'
                              : 'border-purple-500/15 bg-[#090312] text-neutral-400 hover:border-purple-400/40 hover:text-white'
                          }`}
                        >
                          {tier}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Project Description Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-neutral-300">
                      Project Details & Vision
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell me about your footage, timeline, references, or key goals..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full rounded-xl border border-purple-500/20 bg-[#090312] px-4 py-3 text-sm text-white placeholder-neutral-500 focus:border-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-400 transition-colors"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="group relative flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-purple-600 to-violet-600 py-4 text-sm font-bold text-white transition-all hover:from-purple-500 hover:to-violet-500 hover:shadow-[0_0_35px_rgba(168,85,247,0.5)]"
                  >
                    <span>Send Project Inquiry</span>
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

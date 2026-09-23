import React from 'react';
import { ArrowUp } from 'lucide-react';
import { FluidBrandLogo, GithubIcon, LinkedinIcon } from './Icons';
import { RESUME_DATA } from '../data/resumeData';

export default function Footer() {
  const { personal } = RESUME_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/5 bg-[#080405] text-slate-400">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          {/* Left Branding */}
          <div className="flex items-center gap-3">
            <FluidBrandLogo className="w-8 h-8" />
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                {personal.name}
              </h4>
              <p className="text-[11px] text-slate-300 font-medium">{personal.role}</p>
            </div>
          </div>

          {/* Center: Quote */}
          <p className="text-xs text-slate-300 font-medium text-center md:text-left">
            Let's build something scalable and impactful together.
          </p>

          {/* Right Socials & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="text-slate-300 hover:text-orange-400 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-slate-300 hover:text-orange-400 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-slate-900 border border-white/10 hover:border-red-500 hover:text-red-400 hover:shadow-[0_0_12px_rgba(239,68,68,0.4)] text-slate-200 flex items-center justify-center transition-all ml-2 cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400 font-medium">
          <span>© {new Date().getFullYear()} {personal.name}. All rights reserved.</span>
          <span>Crafted with React, Tailwind & Vite</span>
        </div>

      </div>
    </footer>
  );
}

import React from 'react';
import { Download } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';

export default function About() {
  const { summary, personal, stats } = RESUME_DATA;

  return (
    <section id="about" className="relative z-20 overflow-hidden bg-midnight-950">
      
      {/* Top Wave Transition: Dark (#030509) to Sculpted White Silk Ribbon */}
      <div className="wave-top bg-midnight-950 -mb-[1px]">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full"
        >
          <defs>
            {/* Sculpted Silk Ribbon Shading Gradients */}
            <linearGradient id="whiteRibbonBody" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#f8fafc" />
            </linearGradient>

            <linearGradient id="sculptedFoldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#e2e8f0" stopOpacity="0.85" />
              <stop offset="30%" stopColor="#f1f5f9" stopOpacity="0.95" />
              <stop offset="70%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="100%" stopColor="#e2e8f0" stopOpacity="0.5" />
            </linearGradient>

            <filter id="waveCreaseShadow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#94a3b8" floodOpacity="0.18" />
            </filter>
          </defs>

          {/* Layer 1: Sculpted Secondary Silk Fold underneath (dimensional thickness from reference) */}
          <path
            d="M0,42 C180,68 360,18 640,28 C880,38 1120,65 1440,25 L1440,120 L0,120 Z"
            fill="url(#sculptedFoldGrad)"
            opacity="0.6"
          />

          {/* Layer 2: Primary Sculpted Wave Curve matching reference */}
          <path
            d="M0,48 C200,75 420,24 680,32 C920,40 1160,70 1440,30 L1440,120 L0,120 Z"
            fill="url(#whiteRibbonBody)"
            filter="url(#waveCreaseShadow)"
          />

          {/* Layer 3: Subtle Crisp Silk Edge Highlight line along the crest */}
          <path
            d="M0,48 C200,75 420,24 680,32 C920,40 1160,70 1440,30"
            stroke="rgba(255, 255, 255, 0.9)"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      {/* Main Sculpted White Ribbon Body (Clean surface with zero stray blurs) */}
      <div className="bg-gradient-to-b from-[#ffffff] via-[#fcfdfe] to-[#f8fafc] text-slate-800 py-12 sm:py-16 px-6 lg:px-8 relative z-10">
        
        {/* Prominent 3D Sculpted Curling Silk Ribbon Fold on the left (Matching Reference Design) */}
        <div className="absolute -top-10 left-0 w-96 sm:w-[480px] h-[calc(100%+80px)] pointer-events-none overflow-hidden select-none z-0">
          <svg viewBox="0 0 480 700" fill="none" className="w-full h-full">
            <defs>
              {/* Outer Silk Roll Highlight */}
              <linearGradient id="silkRollCrest" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                <stop offset="40%" stopColor="#f1f5f9" stopOpacity="0.95" />
                <stop offset="80%" stopColor="#e2e8f0" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0.4" />
              </linearGradient>

              {/* Deep Cavity Ambient Occlusion Shadow */}
              <linearGradient id="silkCavityShadow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#64748b" stopOpacity="0.28" />
                <stop offset="50%" stopColor="#94a3b8" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </linearGradient>

              {/* Silk Bevel Shading */}
              <linearGradient id="silkBevelGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#e2e8f0" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
                <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0.6" />
              </linearGradient>

              <filter id="silkRollDropShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="8" dy="12" stdDeviation="12" floodColor="#64748b" floodOpacity="0.22" />
              </filter>
            </defs>

            {/* Layer 1: Ambient Cavity Underfold Shadow */}
            <path
              d="M-80,40 C140,120 220,380 90,680 L-100,700 Z"
              fill="url(#silkCavityShadow)"
            />

            {/* Layer 2: Main 3D Rolling Silk Wave Body */}
            <path
              d="M-60,0 C120,90 200,320 60,650 C-10,500 50,260 -60,0 Z"
              fill="url(#silkRollCrest)"
              filter="url(#silkRollDropShadow)"
            />

            {/* Layer 3: Secondary Sculpted Edge Ribbon Fold */}
            <path
              d="M-40,10 C100,100 160,300 40,580"
              stroke="url(#silkBevelGrad)"
              strokeWidth="6"
              strokeLinecap="round"
              opacity="0.85"
            />

            {/* Layer 4: Crisp Specular Crest Line (Reflecting top light) */}
            <path
              d="M-40,10 C100,100 160,300 40,580"
              stroke="rgba(255, 255, 255, 0.95)"
              strokeWidth="2"
              strokeLinecap="round"
            />

            {/* Layer 5: Subtle Inner Drapery Crease */}
            <path
              d="M-90,120 C40,200 90,420 -20,620"
              stroke="#cbd5e1"
              strokeWidth="1.5"
              strokeDasharray="6 8"
              opacity="0.6"
            />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Celestial Solar Ink & Flame Watercolor Portrait */}
            <div className="lg:col-span-5 flex justify-center lg:justify-start">
              <div className="relative w-72 sm:w-84 h-72 sm:h-84 rounded-full flex items-center justify-center group">
                
                {/* Ambient Solar Warm Watercolor Splash Glow behind the sphere */}
                <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-red-500/25 via-orange-500/20 to-amber-500/25 blur-xl group-hover:scale-110 group-hover:from-red-500/35 transition-all duration-700 pointer-events-none" />

                {/* Concentric subtle celestial orbital ring accent */}
                <div className="absolute -inset-2.5 rounded-full border border-orange-400/30 border-dashed animate-spin-slower pointer-events-none" />

                {/* The Celestial Sphere Portrait Mask */}
                <div className="relative w-full h-full rounded-full overflow-hidden bg-midnight-950 shadow-2xl border-2 border-red-500/20 group-hover:scale-102 transition-transform duration-500">
                  <img
                    src={personal.avatar}
                    alt={personal.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://ui-avatars.com/api/?name=Abhinav+Vishwakarma&background=14070a&color=ef4444&size=512&bold=true";
                    }}
                  />
                </div>

              </div>
            </div>

            {/* Right Column: Editorial About Content */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              
              {/* Category Pill */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-red-600 border border-red-200 text-xs font-bold tracking-wider uppercase mb-4">
                <span>ABOUT ME</span>
              </div>

              {/* Signature Editorial Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
                Code is my medium. <br />
                Empathy is my <span className="font-serif italic font-normal text-red-600">superpower.</span>
              </h2>

              {/* Narrative Bio */}
              <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed mb-4">
                {summary}
              </p>
              <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed mb-8">
                I work with <strong className="text-slate-950 font-bold">Node.js, Express.js, PostgreSQL, MySQL, Redis and BullMQ</strong> — designing REST APIs, authentication, background jobs, database optimization, and Linux / Nginx / PM2 deployments.
              </p>

              {/* 3 Metric Stat Counters Matching Reference */}
              <div className="grid grid-cols-3 gap-6 sm:gap-10 w-full mb-8 pt-6 border-t border-slate-200">
                {stats.filter((_, i) => i !== 2).map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl sm:text-3xl font-black text-slate-900">{stat.value}</div>
                    <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mt-1">
                      {stat.sub}
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={personal.resumeUrl}
                  download={personal.resumeDownloadName}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase text-white bg-slate-900 hover:bg-red-600 shadow-md transition-all"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download CV</span>
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold tracking-wider uppercase text-slate-900 bg-white hover:bg-slate-100 border border-slate-300 shadow-sm transition-all"
                >
                  <span>Let's Talk</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* Bottom Wave Transition: White Silk to Dark (#030509) */}
      <div className="wave-bottom bg-midnight-950 -mt-[1px]">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full"
        >
          {/* Layer 1: Sculpted Secondary Fold */}
          <path
            d="M0,0 L1440,0 L1440,68 C1240,32 1020,18 780,24 C520,30 260,82 0,22 Z"
            fill="url(#sculptedFoldGrad)"
            opacity="0.5"
          />

          {/* Layer 2: Primary Bottom Wave Curve matching reference */}
          <path
            d="M0,0 L1440,0 L1440,75 C1220,38 980,22 740,28 C480,34 240,85 0,18 Z"
            fill="url(#whiteRibbonBody)"
          />

          {/* Layer 3: Subtle Crease Shadow Line */}
          <path
            d="M1440,75 C1220,38 980,22 740,28 C480,34 240,85 0,18"
            stroke="rgba(148, 163, 184, 0.4)"
            strokeWidth="1"
          />
        </svg>
      </div>

    </section>
  );
}

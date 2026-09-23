import React from 'react';
import { 
  Download, 
  Sparkles, 
  Terminal, 
  Cpu, 
  Database, 
  Server, 
  ShieldCheck, 
  Zap, 
  ArrowUpRight,
  Activity,
  Layers
} from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';
import Tilt3DCard from './Tilt3DCard';

export default function About() {
  const { personal, stats } = RESUME_DATA;

  const coreStrengths = [
    {
      icon: Zap,
      title: "High Concurrency & Caching",
      desc: "BullMQ queue pipelines, Redis pub/sub, sub-15ms memory caching.",
      color: "from-amber-500/20 to-orange-500/10",
      accent: "text-amber-600",
    },
    {
      icon: Database,
      title: "Resilient Data Schemas",
      desc: "PostgreSQL & MySQL optimization, indexing, ACID transactions.",
      color: "from-red-500/20 to-rose-500/10",
      accent: "text-red-600",
    },
    {
      icon: Server,
      title: "Production DevOps & Linux",
      desc: "PM2 clustering, Nginx reverse proxies, Docker containerization.",
      color: "from-orange-500/20 to-red-500/10",
      accent: "text-orange-600",
    },
  ];

  return (
    <section id="about" className="relative z-20 overflow-hidden bg-midnight-950">
      
      {/* Top Wave Transition: Dark (#080405) to Sculpted White Silk Ribbon */}
      <div className="wave-top bg-midnight-950 -mb-[1px]">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full"
        >
          <defs>
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

          {/* Layer 1: Sculpted Secondary Fold */}
          <path
            d="M0,42 C180,68 360,18 640,28 C880,38 1120,65 1440,25 L1440,120 L0,120 Z"
            fill="url(#sculptedFoldGrad)"
            opacity="0.6"
          />

          {/* Layer 2: Primary Sculpted Wave Curve */}
          <path
            d="M0,48 C200,75 420,24 680,32 C920,40 1160,70 1440,30 L1440,120 L0,120 Z"
            fill="url(#whiteRibbonBody)"
            filter="url(#waveCreaseShadow)"
          />

          {/* Layer 3: Crisp Edge Highlight Line */}
          <path
            d="M0,48 C200,75 420,24 680,32 C920,40 1160,70 1440,30"
            stroke="rgba(255, 255, 255, 0.9)"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      {/* Main Sculpted White Ribbon Body */}
      <div className="bg-gradient-to-b from-[#ffffff] via-[#fcfdfe] to-[#f8fafc] text-slate-800 py-16 sm:py-20 px-6 lg:px-8 relative z-10">
        
        {/* Ambient Warm Glow Accents */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-red-100/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-orange-100/35 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Interactive 3D Developer Terminal & Solar Hologram Card */}
            <div className="lg:col-span-5 flex justify-center">
              <Tilt3DCard
                maxTilt={14}
                glare={true}
                glowColor="rgba(239, 68, 68, 0.35)"
                className="w-full max-w-[420px] rounded-[32px] p-6 sm:p-7 bg-[#090406] border border-red-500/30 shadow-[0_30px_70px_-15px_rgba(239,68,68,0.22),0_15px_35px_rgba(0,0,0,0.1)] relative overflow-hidden group select-none"
              >
                {/* Specular Edge Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/15 via-transparent to-orange-500/10 pointer-events-none rounded-[inherit]" />

                {/* Terminal Window Header Bar */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10" style={{ transform: 'translateZ(20px)' }}>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_8px_#ef4444]" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-900 border border-white/10 text-[10px] font-mono text-slate-400">
                    <Terminal className="w-3 h-3 text-orange-400" />
                    <span>abhinav@backend-core</span>
                  </div>
                </div>

                {/* Central Holographic Solar Reactor & Monogram */}
                <div className="relative flex flex-col items-center justify-center my-4 py-4" style={{ transform: 'translateZ(35px)' }}>
                  
                  {/* Concentric Rotating Cybernetic Solar Rings */}
                  <div className="absolute w-52 h-52 rounded-full border border-red-500/25 animate-spin-slower pointer-events-none" />
                  <div className="absolute w-64 h-64 rounded-full border border-dashed border-orange-500/20 animate-spin-slow pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 via-orange-500/15 to-transparent rounded-full blur-2xl pointer-events-none" />

                  {/* Monogram Core Emblem */}
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-gradient-to-br from-red-600 via-orange-600 to-amber-600 p-[2px] shadow-[0_0_40px_rgba(239,68,68,0.5)] group-hover:scale-105 transition-transform duration-500">
                    <div className="w-full h-full rounded-[22px] bg-slate-950 flex flex-col items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(239,68,68,0.35),transparent_70%)]" />
                      <span className="font-mono text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-100 to-amber-200 tracking-wider relative z-10">
                        AV
                      </span>
                      <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-orange-400 relative z-10 mt-0.5">
                        ENGINEER
                      </span>
                    </div>
                  </div>

                  {/* Floating 3D Micro-Chips with Depth */}
                  <div 
                    className="absolute -top-2 right-2 px-2.5 py-1 rounded-xl bg-slate-900/90 border border-red-500/30 text-[10px] font-mono text-orange-300 shadow-lg backdrop-blur-md flex items-center gap-1.5"
                    style={{ transform: 'translateZ(45px)' }}
                  >
                    <Cpu className="w-3 h-3 text-red-400" />
                    <span>Node • Express</span>
                  </div>

                  <div 
                    className="absolute bottom-2 -left-2 px-2.5 py-1 rounded-xl bg-slate-900/90 border border-orange-500/30 text-[10px] font-mono text-amber-300 shadow-lg backdrop-blur-md flex items-center gap-1.5"
                    style={{ transform: 'translateZ(45px)' }}
                  >
                    <Database className="w-3 h-3 text-orange-400" />
                    <span>Postgres • Redis</span>
                  </div>
                </div>

                {/* Telemetry Status HUD Footer */}
                <div className="mt-4 pt-4 border-t border-white/10 space-y-2 text-left" style={{ transform: 'translateZ(25px)' }}>
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-300">
                    <span className="text-slate-400">ARCH:</span>
                    <span className="text-orange-300 font-semibold">Distributed &amp; Event-Driven</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-300">
                    <span className="text-slate-400">SYSTEM:</span>
                    <span className="text-amber-300 font-semibold">Linux • Nginx • PM2</span>
                  </div>
                  <div className="flex items-center gap-2 pt-1 text-[11px] font-mono text-emerald-400 font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
                    <span>Open for Full-Time &amp; Contract Roles</span>
                  </div>
                </div>

              </Tilt3DCard>
            </div>

            {/* Right Column: Editorial Typography & Engineering Narrative */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              
              {/* Category Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-red-600 border border-red-200 text-xs font-bold tracking-wider uppercase mb-5 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-orange-500 animate-spin-slow" />
                <span>ENGINEERING PHILOSOPHY &amp; PROFILE</span>
              </div>

              {/* Signature Editorial Headline with Luxurious Playfair Serif Font */}
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mb-6 leading-[1.12]">
                Architecting <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-600 to-amber-600">scalable backends</span> <br />
                with precision &amp; <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-500 to-amber-500">resilience.</span>
              </h2>

              {/* High-Impact Engineering Narrative */}
              <p className="text-base sm:text-lg text-slate-700 font-semibold leading-relaxed mb-4">
                Backend Engineer specializing in high-throughput REST APIs, asynchronous queue pipelines, and multi-tenant architectures for mission-critical web applications.
              </p>
              
              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed mb-8">
                From processing real-time click-tracking traffic and multi-parameter conversions in high-volume affiliate networks to architecting idempotent Razorpay payment webhooks and role-based approval audits, I focus relentlessly on query latency, database indexing, and production reliability.
              </p>

              {/* 3 Core Architecture Pillars Bento Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 w-full mb-8">
                {coreStrengths.map((strength, idx) => {
                  const Icon = strength.icon;
                  return (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-red-400/50 transition-all duration-300 group"
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <Icon className={`w-4 h-4 ${strength.accent} group-hover:scale-110 transition-transform`} />
                        <h4 className="text-xs font-bold text-slate-900">{strength.title}</h4>
                      </div>
                      <p className="text-[11px] text-slate-500 leading-snug">
                        {strength.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Metric Stat Counters */}
              <div className="grid grid-cols-3 gap-4 sm:gap-8 w-full mb-8 pt-6 border-t border-slate-200">
                {stats.filter((_, i) => i !== 2).map((stat) => (
                  <div key={stat.label} className="p-3 rounded-2xl bg-slate-50/80 border border-slate-200/60 hover:border-red-400/40 transition-colors">
                    <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-950 via-red-950 to-slate-900">
                      {stat.value}
                    </div>
                    <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wider mt-0.5">
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
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-extrabold tracking-wider uppercase text-white bg-slate-950 hover:bg-gradient-to-r hover:from-red-600 hover:to-orange-600 shadow-md hover:shadow-xl hover:scale-102 active:scale-98 transition-all duration-300"
                >
                  <Download className="w-3.5 h-3.5 text-orange-300" />
                  <span>Download CV</span>
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase text-slate-900 bg-white hover:bg-slate-100 border border-slate-300 hover:border-red-400 shadow-sm hover:scale-102 active:scale-98 transition-all duration-300"
                >
                  <span>Let's Talk</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-red-500" />
                </a>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* Bottom Wave Transition: White Silk to Dark (#080405) */}
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

          {/* Layer 2: Primary Bottom Wave Curve */}
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

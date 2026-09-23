import React, { useState, useMemo } from 'react';
import { 
  Sparkles, 
  RotateCw, 
  Play, 
  Pause, 
  ExternalLink, 
  Layers, 
  Cpu, 
  Server, 
  Database, 
  Boxes, 
  Terminal,
  ShieldCheck,
  CheckCircle2,
  Code2
} from 'lucide-react';
import SphereGallery3D from './originkit/ui/sphere-gallery-3d';
import { TECH_STACK_ITEMS, TECH_CATEGORIES } from '../data/techStackSphere';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedTechId, setSelectedTechId] = useState('nodejs');
  const [isSpinning, setIsSpinning] = useState(true);
  const [spinSpeed, setSpinSpeed] = useState(16); // 10 = calm, 16 = normal, 26 = fast

  // Filter tech stack for sphere gallery or show all with active highlighting
  const filteredTechItems = useMemo(() => {
    if (activeCategory === 'all') return TECH_STACK_ITEMS;
    return TECH_STACK_ITEMS.filter((item) => item.group === activeCategory);
  }, [activeCategory]);

  // Gallery items formatted for SphereGallery3D
  const sphereImages = useMemo(() => {
    return filteredTechItems.map((item) => ({
      ...item,
      image: item.image,
      link: item.docUrl,
    }));
  }, [filteredTechItems]);

  // Currently inspected technology
  const selectedTech = useMemo(() => {
    return (
      TECH_STACK_ITEMS.find((t) => t.id === selectedTechId) || TECH_STACK_ITEMS[0]
    );
  }, [selectedTechId]);

  const handleTechClick = (item) => {
    if (item?.id) {
      setSelectedTechId(item.id);
    }
  };

  return (
    <section id="skills" className="py-24 bg-[#080405] relative overflow-hidden">
      {/* 1. Luminous Solar Plasma Wave Backdrop */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
        <img
          src="/images/hero-blue-tide.png"
          alt="Luminous Solar Fluid Wave"
          className="w-full h-full object-cover object-center opacity-85 mix-blend-screen filter hue-rotate-[165deg] saturate-[2] brightness-105"
          style={{
            transform: 'scaleX(-1) rotate(1deg)',
            maskImage:
              'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 85%, transparent 100%)',
            WebkitMaskImage:
              'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 85%, transparent 100%)',
          }}
        />
      </div>

      {/* Cosmic solar glow orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-red-500/12 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-orange-600/12 rounded-full blur-[160px] pointer-events-none" />

      {/* Luminous Neon Solar Ribbon Wave flowing behind cards */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-0">
        <svg className="w-full h-full opacity-60" viewBox="0 0 1440 600" fill="none" preserveAspectRatio="none">
          <path
            d="M-50,220 C250,140 450,420 750,300 C1050,180 1250,380 1500,260"
            stroke="url(#neonRibbonGradSkills)"
            strokeWidth="3.5"
            filter="url(#ribbonGlowSkills)"
          />
          <path
            d="M-50,250 C280,180 480,450 780,330 C1080,210 1280,410 1500,290"
            stroke="url(#neonRibbonGradSkills2)"
            strokeWidth="1.5"
            strokeDasharray="10 8"
            opacity="0.75"
          />
          <defs>
            <filter id="ribbonGlowSkills" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="7" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient id="neonRibbonGradSkills" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#b91c1c" stopOpacity="0.2" />
              <stop offset="35%" stopColor="#ef4444" stopOpacity="0.95" />
              <stop offset="65%" stopColor="#f97316" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="neonRibbonGradSkills2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ef4444" stopOpacity="0" />
              <stop offset="50%" stopColor="#fb923c" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/25 text-red-400 text-xs font-semibold tracking-wider uppercase mb-4 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-red-400 animate-pulse" />
            <span>Interactive 3D Tech Orbit</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4 leading-tight">
            Production Tech Stack <br />
            <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-amber-300">
              In 3D Celestial Orbit
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl font-medium">
            Explore my end-to-end backend engineering arsenal: from <span className="text-red-400 font-semibold">Node.js</span> &amp; <span className="text-orange-400 font-semibold">Docker</span> to <span className="text-amber-400 font-semibold">PM2 clustering</span>, Redis workers, SQL databases, and cloud infrastructure.
          </p>
        </div>

        {/* 3D Sphere Galaxy Interactive Workspace Card */}
        <div className="relative rounded-3xl bg-slate-950/70 backdrop-blur-2xl border border-white/10 border-t-red-500/40 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.9),0_0_40px_rgba(239,68,68,0.15)] overflow-hidden mb-16 p-4 sm:p-6 lg:p-8">
          
          {/* Top Control Bar: Category Filters & 3D Controls */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-6 border-b border-white/10 relative z-20">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {TECH_CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-gradient-to-r from-red-600 to-orange-500 text-white shadow-[0_0_20px_rgba(239,68,68,0.6)] scale-105'
                        : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800/80 border border-white/10'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Orbit Motion Controls */}
            <div className="flex items-center gap-3 bg-slate-900/90 px-3.5 py-1.5 rounded-2xl border border-white/10 text-xs font-semibold text-slate-300">
              <span className="text-[11px] text-slate-400 font-mono">3D ORBIT:</span>
              
              <button
                onClick={() => setIsSpinning((prev) => !prev)}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-red-500/20 hover:text-red-300 transition-colors"
                title={isSpinning ? "Pause auto-rotation" : "Resume auto-rotation"}
              >
                {isSpinning ? (
                  <>
                    <Pause className="w-3.5 h-3.5 text-red-400" />
                    <span>Pause</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 text-amber-400" />
                    <span>Spin</span>
                  </>
                )}
              </button>

              <button
                onClick={() => {
                  setSpinSpeed((prev) => (prev >= 26 ? 10 : prev + 8));
                }}
                className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors font-mono text-[11px]"
                title="Toggle rotation speed"
              >
                <RotateCw className="w-3 h-3 text-orange-400" />
                <span>{spinSpeed <= 10 ? 'Slow' : spinSpeed <= 18 ? 'Med' : 'Fast'}</span>
              </button>
            </div>
          </div>

          {/* Main 3D Canvas + Live Inspector Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pt-6">
            
            {/* 3D Sphere Interactive Canvas */}
            <div className="lg:col-span-8 relative flex items-center justify-center">
              
              {/* Interactive Help Hint Badge */}
              <div className="absolute top-3 left-4 z-20 pointer-events-none flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950/70 border border-white/10 text-[11px] text-slate-300 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                <span>Drag to rotate in 3D • Click any icon to inspect</span>
              </div>

              {/* Decorative Cybernetic Background Rings */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-40">
                <div className="w-[420px] h-[420px] rounded-full border border-red-500/20 animate-spin-slower" />
                <div className="w-[560px] h-[560px] rounded-full border border-dashed border-orange-500/15 animate-spin-slow" />
              </div>

              {/* SphereGallery3D Container */}
              <div className="w-full h-[440px] sm:h-[500px] md:h-[560px] lg:h-[580px] relative rounded-2xl overflow-hidden cursor-grab active:cursor-grabbing">
                <SphereGallery3D
                  key={`${activeCategory}-${filteredTechItems.length}`}
                  images={sphereImages}
                  branches={filteredTechItems.length}
                  background="transparent"
                  scale={72}
                  size={27}
                  speed={isSpinning ? spinSpeed : 0}
                  direction="counterclockwise"
                  hover={220}
                  rounded={20}
                  scrollZoom={false}
                  onItemClick={handleTechClick}
                  core={{
                    coreSize: 22,
                    coreColor: "#ef4444",
                    lineColor: "#f9731650",
                  }}
                  className="w-full h-full"
                />
              </div>

              {/* Quick Tech Selector Ribbon Below Canvas */}
              <div className="absolute bottom-2 inset-x-4 z-20 flex items-center justify-center gap-1.5 overflow-x-auto py-1 scrollbar-none pointer-events-auto">
                {filteredTechItems.slice(0, 10).map((tech) => {
                  const isCurrent = selectedTechId === tech.id;
                  return (
                    <button
                      key={tech.id}
                      onClick={() => setSelectedTechId(tech.id)}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                        isCurrent
                          ? 'bg-gradient-to-r from-red-600 to-orange-500 text-white font-black shadow-[0_0_12px_rgba(239,68,68,0.7)]'
                          : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-white/10'
                      }`}
                    >
                      {tech.name}
                    </button>
                  );
                })}
              </div>

            </div>

            {/* Right Column: Active Selected Technology Inspector (HUD) */}
            <div className="lg:col-span-4 relative z-10 flex flex-col justify-between h-full">
              <div className="p-6 rounded-2xl bg-slate-900/85 backdrop-blur-xl border border-red-500/30 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.15)] flex flex-col justify-between min-h-[480px]">
                
                {/* Header: Status & Category */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-300 text-[11px] font-bold uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_6px_#ef4444]" />
                      {selectedTech.category}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      Level: <strong className="text-white">{selectedTech.level}</strong>
                    </span>
                  </div>

                  {/* Large Logo & Name Display */}
                  <div className="flex items-center gap-4 mb-5 pb-5 border-b border-white/10">
                    <div 
                      className="w-16 h-16 rounded-2xl p-1.5 flex items-center justify-center flex-shrink-0 shadow-lg border"
                      style={{
                        backgroundColor: '#120508',
                        borderColor: `${selectedTech.brandColor}55`,
                        boxShadow: `0 0 25px ${selectedTech.brandColor}33`,
                      }}
                    >
                      <img
                        src={selectedTech.image}
                        alt={selectedTech.name}
                        className="w-full h-full object-contain rounded-xl"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-white tracking-tight leading-tight">
                        {selectedTech.name}
                      </h3>
                      <p className="text-xs font-semibold text-orange-400 font-mono mt-0.5">
                        {selectedTech.experience}
                      </p>
                    </div>
                  </div>

                  {/* Architecture & Engineering Description */}
                  <div className="mb-5">
                    <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                      Architecture &amp; Role
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                      {selectedTech.description}
                    </p>
                  </div>

                  {/* Real-World Projects Provenance */}
                  <div className="mb-6">
                    <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Used In Production Projects
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedTech.projects?.map((proj, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-800/90 border border-white/10 text-[11px] font-semibold text-slate-200"
                        >
                          <CheckCircle2 className="w-3 h-3 text-red-400" />
                          <span>{proj}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Actions: Official Docs Link */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="text-[11px] text-slate-400 font-medium">
                    Abhinav's Active Stack
                  </div>

                  {selectedTech.docUrl && (
                    <a
                      href={selectedTech.docUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-red-500/15 hover:bg-red-500/25 border border-red-400/40 text-red-300 text-xs font-bold transition-all duration-150 hover:shadow-[0_0_15px_rgba(239,68,68,0.3)]"
                    >
                      <span>Official Docs</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

              </div>
            </div>

          </div>

        </div>

        {/* 4 Core Pillars Matrix (Recruiter & Technical Deep Dive Grid) */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                Skill Architecture Pillars
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Full technical coverage across Backend Architecture, Databases, Distributed Workers, and Linux DevOps.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-red-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_#ef4444]" />
              <span>Production Tested (5+ Apps)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            
            {/* Pillar 1: Backend Core */}
            <div className="p-5 rounded-2xl bg-slate-950/60 backdrop-blur-xl border border-white/10 hover:border-red-500/40 transition-all duration-300 shadow-xl group">
              <div className="w-10 h-10 rounded-xl bg-red-500/15 border border-red-400/30 flex items-center justify-center text-red-400 mb-4 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(239,68,68,0.25)]">
                <Server className="w-5 h-5" />
              </div>
              <h4 className="text-base font-extrabold text-white mb-2">Backend &amp; APIs</h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Scalable service design, JWT token auth, RBAC permissions, and high-concurrency event handling.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {['Node.js', 'Express.js', 'NestJS', 'Fastify', 'REST APIs', 'JWT'].map((s) => (
                  <span
                    key={s}
                    onClick={() => {
                      const match = TECH_STACK_ITEMS.find((t) => t.name.toLowerCase().includes(s.toLowerCase()));
                      if (match) setSelectedTechId(match.id);
                    }}
                    className="px-2 py-0.5 rounded-md bg-slate-900 border border-white/10 text-[11px] font-semibold text-slate-300 hover:text-red-300 hover:border-red-500/40 cursor-pointer transition-colors"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Pillar 2: Databases & Queues */}
            <div className="p-5 rounded-2xl bg-slate-950/60 backdrop-blur-xl border border-white/10 hover:border-orange-500/40 transition-all duration-300 shadow-xl group">
              <div className="w-10 h-10 rounded-xl bg-orange-500/15 border border-orange-400/30 flex items-center justify-center text-orange-400 mb-4 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(249,115,22,0.25)]">
                <Database className="w-5 h-5" />
              </div>
              <h4 className="text-base font-extrabold text-white mb-2">Databases &amp; Queues</h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Relational modeling, indexing optimizations, in-memory caching, and BullMQ async background jobs.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {['PostgreSQL', 'MySQL', 'Redis', 'BullMQ', 'MongoDB'].map((s) => (
                  <span
                    key={s}
                    onClick={() => {
                      const match = TECH_STACK_ITEMS.find((t) => t.name.toLowerCase().includes(s.toLowerCase()));
                      if (match) setSelectedTechId(match.id);
                    }}
                    className="px-2 py-0.5 rounded-md bg-slate-900 border border-white/10 text-[11px] font-semibold text-slate-300 hover:text-orange-300 hover:border-orange-500/40 cursor-pointer transition-colors"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Pillar 3: DevOps & Deployment */}
            <div className="p-5 rounded-2xl bg-slate-950/60 backdrop-blur-xl border border-white/10 hover:border-amber-500/40 transition-all duration-300 shadow-xl group">
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-400/30 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(251,191,36,0.25)]">
                <Boxes className="w-5 h-5" />
              </div>
              <h4 className="text-base font-extrabold text-white mb-2">DevOps, PM2 &amp; Docker</h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Linux administration, PM2 cluster management, Docker containerization, Nginx reverse proxy, and AWS.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {['Docker', 'PM2', 'Linux', 'Nginx', 'AWS EC2', 'S3'].map((s) => (
                  <span
                    key={s}
                    onClick={() => {
                      const match = TECH_STACK_ITEMS.find((t) => t.name.toLowerCase().includes(s.toLowerCase()));
                      if (match) setSelectedTechId(match.id);
                    }}
                    className="px-2 py-0.5 rounded-md bg-slate-900 border border-white/10 text-[11px] font-semibold text-slate-300 hover:text-amber-300 hover:border-amber-500/40 cursor-pointer transition-colors"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Pillar 4: Languages & Tools */}
            <div className="p-5 rounded-2xl bg-slate-950/60 backdrop-blur-xl border border-white/10 hover:border-rose-500/40 transition-all duration-300 shadow-xl group">
              <div className="w-10 h-10 rounded-xl bg-rose-500/15 border border-rose-400/30 flex items-center justify-center text-rose-400 mb-4 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(244,63,94,0.25)]">
                <Code2 className="w-5 h-5" />
              </div>
              <h4 className="text-base font-extrabold text-white mb-2">Languages &amp; Tooling</h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Modern ES6+ JavaScript, TypeScript, C++ for algorithmic fundamentals, Git workflows, and Postman suites.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {['JavaScript', 'TypeScript', 'C++', 'Git', 'GitHub', 'Postman'].map((s) => (
                  <span
                    key={s}
                    onClick={() => {
                      const match = TECH_STACK_ITEMS.find((t) => t.name.toLowerCase().includes(s.toLowerCase()));
                      if (match) setSelectedTechId(match.id);
                    }}
                    className="px-2 py-0.5 rounded-md bg-slate-900 border border-white/10 text-[11px] font-semibold text-slate-300 hover:text-rose-300 hover:border-rose-500/40 cursor-pointer transition-colors"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

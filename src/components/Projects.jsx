import React, { useState, useRef, useMemo, useEffect } from 'react';
import { 
  ExternalLink, 
  ArrowRight, 
  Sparkles, 
  Grid, 
  Layers, 
  CheckCircle2, 
  ChevronRight, 
  Compass, 
  SlidersHorizontal 
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { RESUME_DATA } from '../data/resumeData';
import Tilt3DCard from './Tilt3DCard';
import SmoothScrollSlider from './originkit/ui/smooth-scroll-slider';
import LiquidGlassCarousel from './originkit/ui/liquid-glass-carousel';

const PROJECT_CARDS_MAP = {
  'affiliate-network': '/images/project-cards/card-affiliate-network.svg',
  'konvo-shoes': '/images/project-cards/card-konvo-shoes.svg',
  'ad-tracking': '/images/project-cards/card-ad-tracking.svg',
  'girik': '/images/project-cards/card-girik.svg',
  'ecommerce-backend': '/images/project-cards/card-ecommerce-backend.svg',
};

export default function Projects() {
  const { projects } = RESUME_DATA;
  const [viewMode, setViewMode] = useState('carousel'); // 'carousel' | 'grid'
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const gridSectionRef = useRef(null);

  const sliderImages = useMemo(
    () => projects.map((project) => ({ image: { src: project.image, alt: project.title }, offsetY: 0 })),
    [projects]
  );

  const [slide, setSlide] = useState({ w: 720, h: 405 });

  useEffect(() => {
    const fit = () => {
      const w = Math.max(300, Math.min(760, Math.round(window.innerWidth * 0.62)));
      setSlide({ w, h: Math.round(w * 450 / 800) });
    };
    fit();
    window.addEventListener('resize', fit);
    return () => window.removeEventListener('resize', fit);
  }, []);

  const allProjects = useMemo(() => projects, [projects]);

  // Items for LiquidGlassCarousel with complete visual card SVGs
  const carouselItems = useMemo(() => {
    return allProjects.map((project) => ({
      image: {
        src: PROJECT_CARDS_MAP[project.id] || project.image,
      },
      offsetY: 0,
    }));
  }, [allProjects]);

  // Currently inspected project
  const currentProject = allProjects[activeProjectIndex % allProjects.length] || allProjects[0];

  const handleCardClick = (idx) => {
    setActiveProjectIndex(idx % allProjects.length);
  };

  const scrollToSection = () => {
    gridSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* ============================================================ */}
      {/* SECTION 1: "Digital experiences" — Clean White Premium Zone   */}
      {/* ============================================================ */}
      {/* ============================================================ */}
      {/* SECTION 1: "Digital experiences" — Clean White Premium Zone   */}
      {/* ============================================================ */}
      <section id="projects" className="relative pt-0 pb-0 bg-white overflow-hidden">
        {/* Top Wave Transition: Dark to White */}
        <div className="wave-top bg-[#080405] -mb-[1px]">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="w-full"
          >
            <defs>
              <linearGradient id="projWhiteRibbonBody" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#f8fafc" />
              </linearGradient>

              <linearGradient id="projSculptedFoldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#e2e8f0" stopOpacity="0.85" />
                <stop offset="30%" stopColor="#f1f5f9" stopOpacity="0.95" />
                <stop offset="70%" stopColor="#ffffff" stopOpacity="1" />
                <stop offset="100%" stopColor="#e2e8f0" stopOpacity="0.5" />
              </linearGradient>

              <filter id="projWaveCreaseShadow" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#94a3b8" floodOpacity="0.18" />
              </filter>
            </defs>

            <path
              d="M0,42 C180,68 360,18 640,28 C880,38 1120,65 1440,25 L1440,120 L0,120 Z"
              fill="url(#projSculptedFoldGrad)"
              opacity="0.6"
            />
            <path
              d="M0,48 C200,75 420,24 680,32 C920,40 1160,70 1440,30 L1440,120 L0,120 Z"
              fill="url(#projWhiteRibbonBody)"
              filter="url(#projWaveCreaseShadow)"
            />
            <path
              d="M0,48 C200,75 420,24 680,32 C920,40 1160,70 1440,30"
              stroke="rgba(255, 255, 255, 0.9)"
              strokeWidth="1.5"
            />
          </svg>
        </div>

        {/* Ambient background glows */}
        <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-orange-100/40 rounded-full blur-[180px] pointer-events-none" />
        <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-red-100/35 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-xl pb-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-600 text-xs font-semibold tracking-wider uppercase mb-4">
              <Sparkles className="w-3 h-3 text-red-500" />
              <span>FEATURED PROJECTS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-5">
              Digital experiences / <br />
              that make an <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">impact.</span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed mb-8 max-w-md">
              Each project is a unique story of clean architecture, real-time data persistence, and relentless attention to detail.
            </p>

            <button
              onClick={scrollToSection}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-xs font-extrabold tracking-wider uppercase text-white bg-slate-900 hover:bg-gradient-to-r hover:from-red-600 hover:to-orange-500 border border-slate-800 hover:border-red-500 shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_0_25px_rgba(239,68,68,0.4)] transition-all duration-300 group cursor-pointer select-none"
            >
              <span>Explore 3D Project Carousel</span>
              <ArrowRight className="w-4 h-4 text-orange-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
            </button>
          </div>
        </div>

        <div className="relative z-10 mt-8 mb-6 w-full">
          <div
            className="relative overflow-hidden bg-[#0a0507]"
            style={{ height: slide.h + 88 }}
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(239,68,68,0.22),transparent_62%)]" />
            <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-14 bg-gradient-to-b from-white to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-14 bg-gradient-to-t from-white to-transparent" />
            <SmoothScrollSlider
              images={sliderImages}
              slideWidth={slide.w}
              slideHeight={slide.h}
              spacing={2}
              direction="right"
              smoothness={8}
              radius={20}
              dim={0}
              background="transparent"
              sensitivity={4}
              loop
            />
          </div>
        </div>

        {/* Bottom Wave Transition: White to Dark */}
        <div className="wave-bottom bg-[#080405] -mt-[1px]">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="w-full"
          >
            <path
              d="M0,0 L1440,0 L1440,68 C1240,32 1020,18 780,24 C520,30 260,82 0,22 Z"
              fill="url(#projSculptedFoldGrad)"
              opacity="0.5"
            />
            <path
              d="M0,0 L1440,0 L1440,75 C1220,38 980,22 740,28 C480,34 240,85 0,18 Z"
              fill="url(#projWhiteRibbonBody)"
            />
          </svg>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 2: Liquid Glass Carousel & Complete Projects Suite    */}
      {/* ============================================================ */}
      <section ref={gridSectionRef} className="pt-28 pb-24 bg-[#080405] relative overflow-hidden scroll-mt-20">
        {/* Luminous Solar Fluid Wave Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
          <img
            src="/images/hero-blue-tide.png"
            alt="Luminous Solar Fluid Wave"
            className="w-full h-full object-cover object-center opacity-75 mix-blend-screen filter hue-rotate-[165deg] saturate-[2] brightness-105"
            style={{
              transform: 'scaleY(-1) scaleX(1.1)',
              maskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,1) 12%, rgba(0,0,0,1) 88%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,1) 12%, rgba(0,0,0,1) 88%, transparent 100%)',
            }}
          />
        </div>

        <div className="absolute top-1/4 left-1/4 w-[550px] h-[550px] bg-red-500/12 rounded-full blur-[170px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-orange-600/12 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header & Filter Controls Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pt-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/25 text-red-400 text-xs font-semibold tracking-wider uppercase mb-2.5 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                <Compass className="w-3.5 h-3.5 text-orange-400 animate-spin-slow" />
                <span>Interactive 3D Carousel</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                All {allProjects.length} Applications &amp; Engineering Systems
              </h3>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center p-1 rounded-2xl bg-slate-900/90 border border-white/10 text-xs font-bold text-slate-300">
              <button
                onClick={() => setViewMode('carousel')}
                className={`px-3 py-1.5 rounded-xl transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                  viewMode === 'carousel'
                    ? 'bg-gradient-to-r from-red-600 to-orange-500 text-white font-black shadow-[0_0_15px_rgba(239,68,68,0.5)]'
                    : 'hover:text-white'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>3D Carousel</span>
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 py-1.5 rounded-xl transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                  viewMode === 'grid'
                    ? 'bg-gradient-to-r from-red-600 to-orange-500 text-white font-black shadow-[0_0_15px_rgba(239,68,68,0.5)]'
                    : 'hover:text-white'
                }`}
              >
                <Grid className="w-3.5 h-3.5" />
                <span>Card Grid</span>
              </button>
            </div>
          </div>

          {/* VIEW MODE 1: 3D Project Carousel (Normal straight cards, zero curve distortion) */}
          {viewMode === 'carousel' && (
            <div className="relative mb-12">
              
              {/* Interaction Hint Overlay */}
              <div className="flex items-center justify-between px-2 mb-3 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span>Drag cards horizontally to glide in 3D • Click any card to inspect</span>
                </div>
                <div className="hidden sm:flex items-center gap-2 font-mono text-[11px] text-orange-400">
                  <span>Smooth 3D Perspective Motion</span>
                </div>
              </div>

              {/* LiquidGlassCarousel Canvas Viewport - 100% Transparent Over Solar Wave Backdrop */}
              <div className="relative w-full h-[580px] sm:h-[620px] md:h-[660px] bg-transparent overflow-hidden cursor-grab active:cursor-grabbing">
                <LiquidGlassCarousel
                  items={carouselItems}
                  cardWidth={370}
                  cardHeight={540}
                  panelHeight={540}
                  gap={26}
                  background="transparent"
                  sizeMode="same"
                  lens={{
                    enabled: false,
                  }}
                  motion={{
                    sensitivity: 5.5,
                    glide: 6.5,
                    snap: true,
                  }}
                  interaction={{
                    wheel: false,
                    drag: true,
                    clickToFocus: true,
                  }}
                  onCardClick={handleCardClick}
                  className="w-full h-full bg-transparent"
                />
              </div>

              {/* Bottom Quick Card Selector Ribbon */}
              <div className="flex items-center justify-center gap-2 overflow-x-auto py-3 scrollbar-none">
                {allProjects.map((p, idx) => {
                  const isCurrent = (activeProjectIndex % allProjects.length) === idx;
                  return (
                    <button
                      key={p.id}
                      onClick={() => setActiveProjectIndex(idx)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                        isCurrent
                          ? 'bg-gradient-to-r from-red-600 to-orange-500 text-white font-black shadow-[0_0_15px_rgba(239,68,68,0.7)] scale-105'
                          : 'bg-slate-900/90 text-slate-300 hover:text-white border border-white/10'
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                      <span>{p.title.split('–')[0].trim()}</span>
                    </button>
                  );
                })}
              </div>

              {/* Active Project Full Details Inspector HUD */}
              {currentProject && (
                <div className="mt-4 p-6 sm:p-8 rounded-3xl bg-slate-950/70 backdrop-blur-2xl border border-red-500/30 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.85)]">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    
                    {/* Left side: Project identity & description */}
                    <div className="lg:col-span-7 flex flex-col items-start text-left">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider text-red-300 bg-red-500/15 border border-red-400/40">
                          {currentProject.category}
                        </span>
                        {currentProject.featured && (
                          <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider text-amber-300 bg-amber-500/20 border border-amber-500/40">
                            ★ Flagship Project
                          </span>
                        )}
                        <span className="text-xs font-mono text-slate-400 ml-2">
                          Year: {currentProject.year || '2026'}
                        </span>
                      </div>

                      <h4 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-3">
                        {currentProject.title}
                      </h4>

                      <p className="text-sm text-slate-300 leading-relaxed font-normal mb-5">
                        {currentProject.description}
                      </p>

                      {/* Tech stack badges */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {currentProject.techStack.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-3 py-1 rounded-lg text-xs font-mono font-semibold bg-slate-900 border border-red-500/30 text-orange-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action buttons */}
                      <div className="flex flex-wrap items-center gap-3">
                        <a
                          href={currentProject.liveUrl || "#"}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-extrabold text-white bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 shadow-[0_0_20px_rgba(239,68,68,0.5)] transition-all cursor-pointer"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Launch Live Demo</span>
                        </a>

                        <a
                          href={currentProject.githubUrl || "https://github.com/Abhinav-vishwkarmaa"}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-white/20 hover:border-red-400 hover:text-white transition-all cursor-pointer"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          <span>View Source Code</span>
                        </a>
                      </div>
                    </div>

                    {/* Right side: Key Engineering Highlights */}
                    <div className="lg:col-span-5 p-5 rounded-2xl bg-slate-900/80 border border-white/10 text-left">
                      <div className="text-xs font-bold uppercase tracking-wider text-orange-400 mb-3 flex items-center gap-2">
                        <Layers className="w-4 h-4" />
                        <span>Key Backend Architecture Highlights</span>
                      </div>
                      <div className="space-y-2.5">
                        {(currentProject.highlights || []).map((highlight, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed font-normal">
                            <CheckCircle2 className="w-3.5 h-3.5 text-red-400 flex-shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              )}

            </div>
          )}

          {/* VIEW MODE 2: 3D Tilt Card Catalog Grid (Showing All Cards) */}
          {viewMode === 'grid' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {allProjects.map((project) => {
                const isFirstFour = projects.findIndex((p) => p.id === project.id) < 4;

                return (
                  <Tilt3DCard
                    key={project.id}
                    maxTilt={12}
                    glowColor={isFirstFour ? 'rgba(239, 68, 68, 0.45)' : 'rgba(249, 115, 22, 0.3)'}
                    className="p-4 rounded-[28px] bg-slate-950/45 backdrop-blur-2xl border border-white/15 border-t-white/35 hover:border-red-500/80 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95),inset_0_1px_1px_rgba(255,255,255,0.25)] flex flex-col justify-between group cursor-pointer relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-white/[0.03] to-transparent pointer-events-none rounded-[inherit]" />

                    {/* Phone Preview Showcase */}
                    <div
                      className="relative h-48 w-full rounded-2xl overflow-hidden bg-slate-900/90 border border-white/15 shadow-[0_15px_30px_rgba(0,0,0,0.7)] mb-4"
                      style={{ transform: 'translateZ(24px)' }}
                    >
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-14 h-3 bg-black/90 rounded-full z-20 flex items-center justify-center border border-white/5 pointer-events-none">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500 mr-1 shadow-[0_0_4px_#ef4444]" />
                        <div className="w-1 h-1 rounded-full bg-slate-600" />
                      </div>

                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top group-hover:scale-108 transition-transform duration-700"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src =
                            'https://images.unsplash.com/photo-1555066931-4365d14bab8c?fit=crop&w=600&q=80';
                        }}
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/30 pointer-events-none" />

                      <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between">
                        <span className="px-2.5 py-0.5 rounded-full text-[9px] font-bold tracking-wider uppercase text-red-300 bg-[#080405]/90 border border-red-500/40 backdrop-blur-md shadow">
                          {project.category}
                        </span>

                        {isFirstFour && (
                          <span className="px-2 py-0.5 rounded-full text-[9px] font-bold tracking-wider uppercase text-amber-300 bg-amber-500/20 border border-amber-500/40 backdrop-blur-md">
                            ★ Flagship
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Text Details */}
                    <div className="flex flex-col flex-1 text-left px-1" style={{ transform: 'translateZ(20px)' }}>
                      <h3 className="text-sm sm:text-base font-extrabold text-white mb-1.5 group-hover:text-orange-300 transition-colors line-clamp-2 min-h-[2.5rem] leading-snug" title={project.title}>
                        {project.title}
                      </h3>

                      <p className="text-xs text-slate-200 font-normal leading-relaxed mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-2 mt-auto">
                        {project.techStack.slice(0, 3).map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-slate-900/90 text-orange-200 border border-red-500/20 font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Demo and Code buttons */}
                      <div
                        className="flex items-center gap-2 pt-3 border-t border-white/10 mt-2"
                        style={{ transform: 'translateZ(28px)' }}
                      >
                        <a
                          href={project.liveUrl || "#"}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 rounded-full text-xs font-extrabold text-white bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 shadow-[0_0_15px_rgba(239,68,68,0.4)] transition-all"
                        >
                          <ExternalLink className="w-3 h-3" />
                          <span>Demo</span>
                        </a>

                        <a
                          href={project.githubUrl || "https://github.com/Abhinav-vishwkarmaa"}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 rounded-full text-xs font-semibold text-slate-300 bg-slate-900/90 border border-white/15 hover:border-red-400 hover:text-white transition-all"
                        >
                          <GithubIcon className="w-3 h-3" />
                          <span>Code</span>
                        </a>
                      </div>
                    </div>
                  </Tilt3DCard>
                );
              })}
            </div>
          )}

        </div>
      </section>
    </>
  );
}

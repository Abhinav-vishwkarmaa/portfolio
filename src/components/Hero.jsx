import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import WireTerrain from '../../../components/originkit/ui/wire-terrain';

export default function Hero() {

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center overflow-hidden bg-midnight-950">

      {/* Originkit wire terrain — radiant solar red & fiery orange sunset terrain with glowing sun */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <WireTerrain
          background="#080405"
          lineColor="rgba(249, 115, 22, 0.88)"
          accent="#ef4444"
          density={96}
          speed={38}
          relief={72}
          sunSize={95}
          cameraHeight={88}
          hover={140}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            width: '100%',
            height: '118%',
            minWidth: 0,
            minHeight: 0,
          }}
        />
      </div>

      {/* Short fade so the grid meets the next section without covering the terrain */}
      <div className="absolute inset-x-0 bottom-0 z-[1] h-24 pointer-events-none bg-gradient-to-t from-midnight-950/90 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Role Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/25 text-red-400 text-xs font-semibold tracking-wider uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_#ef4444]" />
              <span>BACKEND DEVELOPER</span>
            </div>

            {/* Main Editorial Headline with Italic Serif Accent */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.12]">
              Building Scalable <br />
              Backend Systems <br />
              that <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-amber-300 tracking-normal drop-shadow-[0_0_20px_rgba(239,68,68,0.4)]">Stay Fast</span>
            </h1>

            {/* Subtitle Description */}
            <p className="text-sm sm:text-base text-slate-200 font-medium leading-relaxed max-w-md mb-8">
              I design REST APIs, multi-tenant architecture, background jobs, and production deployments for SaaS and B2B products.
            </p>

            {/* CTA Button Group */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs font-bold text-white bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 border border-red-400/40 shadow-[0_0_25px_rgba(239,68,68,0.45)] hover:scale-105 transition-all group"
              >
                <span>View My Work</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-200 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold text-slate-100 bg-white/10 border border-white/20 hover:border-red-500/50 hover:text-white transition-all shadow-sm"
              >
                <span>Let's Talk</span>
              </a>
            </div>
          </div>

          {/* Right Hero Column: 3D Floating Perspective Device Frames */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-md h-[460px] flex items-center justify-center">
              
              {/* Primary Phone Mockup (Konvo Shoes B2B) */}
              <div className="absolute left-4 sm:left-6 top-4 w-56 sm:w-64 h-[400px] rounded-[38px] p-3 bg-gradient-to-b from-slate-700 via-slate-900 to-black border border-white/20 shadow-2xl shadow-red-950/80 transform -rotate-6 hover:rotate-0 transition-transform duration-500 z-20 flex flex-col overflow-hidden">
                {/* Phone Speaker Notch */}
                <div className="w-20 h-4 bg-black rounded-full mx-auto mb-2 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-slate-800 mr-1" />
                </div>

                {/* Phone Screen UI */}
                <div className="w-full flex-1 bg-midnight-950 rounded-[28px] p-3.5 flex flex-col justify-between overflow-hidden border border-white/5">
                  {/* Top Bar */}
                  <div>
                    <div className="flex items-center justify-between text-[10px] text-slate-300 mb-3">
                      <span className="font-semibold text-white">Konvo Shoes</span>
                      <span className="flex items-center gap-1 text-emerald-400 font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Live
                      </span>
                    </div>

                    <div className="p-3 rounded-2xl bg-midnight-850 border border-white/5 mb-2.5">
                      <p className="text-[10px] text-slate-300 font-medium">B2B Orders &amp; Inventory</p>
                      <h4 className="text-sm font-bold text-white">PostgreSQL + BullMQ</h4>
                    </div>

                    <div className="space-y-2">
                      <div className="p-2 rounded-xl bg-red-950/40 border border-red-500/25 text-[10px] text-orange-200 self-start font-medium">
                        Order queue processed ⚡
                      </div>
                      <div className="p-2 rounded-xl bg-midnight-800 text-[10px] text-slate-200 self-end font-medium">
                        Inventory synced via Redis
                      </div>
                    </div>
                  </div>

                  {/* Bottom App Bar */}
                  <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[9px] text-slate-300 font-medium">
                    <span>Node.js / Express</span>
                    <span className="text-orange-400 font-bold">Nginx + PM2</span>
                  </div>
                </div>
              </div>

              {/* Secondary Floating Device (Affiliate Network) */}
              <div className="absolute right-0 sm:right-4 bottom-2 w-56 sm:w-64 h-[390px] rounded-[38px] p-3 bg-gradient-to-b from-red-950/60 via-slate-900 to-black border border-red-500/30 shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-500 z-30 flex flex-col overflow-hidden">
                {/* Phone Speaker Notch */}
                <div className="w-20 h-4 bg-black rounded-full mx-auto mb-2" />

                {/* Phone Screen UI */}
                <div className="w-full flex-1 bg-midnight-950 rounded-[28px] p-3.5 flex flex-col justify-between overflow-hidden border border-white/5">
                  <div>
                    <div className="flex items-center justify-between text-[10px] text-slate-300 mb-2">
                      <span className="flex items-center gap-1 font-semibold text-white">
                        <Zap className="w-3 h-3 text-orange-400" />
                        Affiliate Network
                      </span>
                      <span className="text-[10px] text-amber-400 font-bold">CPA</span>
                    </div>

                    <div className="w-full h-32 rounded-xl overflow-hidden mb-2 relative border border-white/10 bg-midnight-900 p-3">
                      <p className="text-[9px] text-slate-400 mb-2">Clicks / Conversions / Payouts</p>
                      <div className="space-y-1.5">
                        <div className="h-2 rounded-full bg-red-500/80 w-[88%]" />
                        <div className="h-2 rounded-full bg-orange-400/80 w-[64%]" />
                        <div className="h-2 rounded-full bg-amber-400/80 w-[42%]" />
                      </div>
                      <span className="absolute bottom-1.5 left-2 text-[9px] font-bold text-white bg-black/60 px-1.5 py-0.5 rounded">
                        Postback workers live
                      </span>
                    </div>

                    <p className="text-[10px] text-slate-200 leading-snug font-medium">
                      NestJS, PostgreSQL, Redis tracking and wallet payouts
                    </p>
                  </div>

                  {/* Floating Status Pill */}
                  <div className="px-3 py-1.5 rounded-full bg-red-950/80 border border-red-500/40 flex items-center justify-between text-[10px]">
                    <span className="text-white font-medium">Offers: Active</span>
                    <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse shadow-[0_0_6px_#ef4444]" />
                  </div>
                </div>
              </div>

              {/* Floating Status Pill on top of device */}
              <div className="absolute -bottom-2 right-12 z-40 bg-midnight-900/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-red-500/40 text-[11px] font-medium text-white shadow-lg flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Available for new opportunities</span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

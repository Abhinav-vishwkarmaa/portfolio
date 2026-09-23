import React from 'react';
import { Award, CheckCircle2, GraduationCap } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';

export default function CertificationsEducation() {
  const { education, certifications } = RESUME_DATA;

  return (
    <section id="credentials" className="py-20 bg-[#080405] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
        <img
          src="/images/hero-blue-tide.png"
          alt="Luminous Solar Fluid Wave"
          className="w-full h-full object-cover object-center opacity-65 mix-blend-screen filter hue-rotate-[165deg] saturate-[2] brightness-105"
          style={{
            transform: 'scaleX(1.15) translateY(-5%)',
            maskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,1) 18%, rgba(0,0,0,1) 82%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,1) 18%, rgba(0,0,0,1) 82%, transparent 100%)',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold tracking-wider uppercase mb-3 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
            <span>CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education &amp; <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-amber-300">Background.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto items-stretch">
          {education.map((edu, idx) => (
            <div
              key={`edu-${idx}`}
              className="p-6 rounded-3xl bg-slate-950/70 backdrop-blur-xl border border-white/10 hover:border-red-500/40 transition-all duration-300 flex flex-col justify-between group shadow-card-elevated h-full"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold text-red-300 bg-red-950/60 border border-red-500/30">
                    Education
                  </span>
                  <span className="text-xs font-bold text-slate-300">{edu.period}</span>
                </div>

                <div className="w-9 h-9 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 mb-4 shadow-[0_0_12px_rgba(239,68,68,0.2)]">
                  <GraduationCap className="w-4 h-4" />
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug group-hover:text-orange-300 transition-colors">
                  {edu.degree}
                </h3>
                <p className="text-xs text-slate-300 font-normal leading-relaxed mb-4">
                  {edu.institution}, {edu.location}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-300 mt-auto">
                <span className="font-mono text-[11px] font-medium text-slate-400">
                  {edu.score}
                </span>
                <span className="flex items-center gap-1 text-emerald-400 font-semibold text-[11px]">
                  <CheckCircle2 className="w-3.5 h-3.5" /> In Progress
                </span>
              </div>
            </div>
          ))}

          {certifications.map((cert, idx) => (
            <div
              key={`cert-${idx}`}
              className="p-6 rounded-3xl bg-slate-950/70 backdrop-blur-xl border border-white/10 hover:border-red-500/40 transition-all duration-300 flex flex-col justify-between group shadow-card-elevated h-full"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold text-red-300 bg-red-950/60 border border-red-500/30">
                    {cert.badge}
                  </span>
                  <span className="text-xs font-bold text-slate-300">{cert.year}</span>
                </div>

                <div className="w-9 h-9 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 mb-4 shadow-[0_0_12px_rgba(239,68,68,0.2)]">
                  <Award className="w-4 h-4" />
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug group-hover:text-orange-300 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs text-slate-300 font-normal leading-relaxed mb-4">
                  {cert.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-300 mt-auto">
                <span className="font-mono text-[11px] font-medium text-slate-400">
                  {cert.certId ? `ID: ${cert.certId}` : cert.issuer}
                </span>
                <span className="flex items-center gap-1 text-emerald-400 font-semibold text-[11px]">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Verified
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

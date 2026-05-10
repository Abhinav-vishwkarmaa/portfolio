import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BentoGrid from './components/BentoGrid';
import CodeEditor from './components/CodeEditor';
import CaseStudy from './components/CaseStudy';
import Cursor from './components/Cursor';
import KafkaHero from './components/KafkaHero';
import TechOrchestrator from './components/TechOrchestrator';
import SystemCompanion from './components/SystemCompanion';

const PROJECTS = [
  {
    id: "ad-track",
    title: "AD_TRACKING_SYSTEM",
    tech: "Node.js // Kafka // ELK // Redis",
    description: "Enterprise-grade observability engine designed for high-throughput event processing and non-blocking ingestion.",
    link: "https://track-myads.com",
    image: "/projects/ad-track.png",
    challenges: ["Handling 8,000+ events per minute with sub-15ms latency.", "Ensuring zero data loss during high-burst periods.", "Centralizing logs across multiple distributed microservices."],
    results: ["85% improvement in log ingestion speed.", "Zero downtime during peak traffic spikes.", "Real-time visibility into system bottlenecks via Kibana."],
    architecture_steps: [{ text: "Kafka-driven ingestion pipeline" }, { text: "Redis-backed atomic deduplication" }],
    metrics: [
      { label: "LATENCY", value: "12MS", color: "cyan" },
      { label: "THROUGHPUT", value: "8K RPM", color: "amber" }
    ]
  },
  {
    id: "maritime",
    title: "MARITIME_CERT_ENGINE",
    tech: "Node.js // AWS S3 // QR_Auth",
    description: "Immutable certification platform utilizing state-machine orchestration and cryptographic verification for vessel compliance.",
    link: "https://grclass.com",
    image: "/projects/maritime.png",
    challenges: ["Securing sensitive maritime documents with cryptographic verification.", "Managing complex state-machine workflows for certificate issuance.", "Scaling S3 storage with optimized CDN caching."],
    results: ["100% immutable audit trail for all issued certificates.", "Automated QR-based verification system deployed.", "Global access with <50ms image load times."],
    architecture_steps: [{ text: "S3-based encrypted document vault" }, { text: "QR-code cryptographic signing layer" }],
    metrics: [
      { label: "AUDIT", value: "IMMUTABLE", color: "cyan" },
      { label: "SECURITY", value: "AES-256", color: "amber" }
    ]
  }
];

const SECTIONS = ['hero', 'capabilities', 'stack', 'performance', 'projects', 'footer'];

const App = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeSection, setActiveSection] = useState('hero');
  const containerRef = useRef(null);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);
  
  const handleMouseMove = (e) => {
    const cards = document.getElementsByClassName('cyber-card');
    for (const card of cards) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    }
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen bg-background text-text-primary selection:bg-accent-primary/20 overflow-x-hidden"
    >
      <Cursor />
      <SystemCompanion activeSection={activeSection} />
      
      <div className="bg-orchestrator" />
      <div className="bg-grid-mesh" />
      <div className="bg-dot-pattern" />
      
      {/* PAGINATION DOTS */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4 pointer-events-auto">
        {SECTIONS.map((section, i) => (
          <div 
            key={section} 
            className="group flex items-center justify-end gap-3 cursor-pointer"
            onClick={() => sectionRefs.current[i].scrollIntoView({ behavior: 'smooth' })}
          >
            <span className={`log-text transition-all text-[9px] tracking-widest uppercase ${activeSection === section ? 'opacity-100 text-accent-primary' : 'opacity-0 group-hover:opacity-60'}`}>
              {['Start', 'Abilities', 'Stack', 'Perf', 'Deploy', 'Connect'][i]}
            </span>
            <div className={`w-1.5 h-1.5 rounded-full border transition-all duration-300 ${activeSection === section ? 'bg-accent-primary border-accent-primary scale-150' : 'border-white/20 group-hover:border-accent-primary'}`} />
          </div>
        ))}
      </div>

      {/* SYSTEM HUD */}
      <div className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-start pointer-events-none">
        <div className="space-y-1">
          <div className="flex items-center gap-3">
            <div className="status-glow" />
            <span className="tech-label text-[10px]">System_Core: Active</span>
          </div>
          <div className="log-text opacity-30 uppercase tracking-widest text-[7px]">0x7F_NODE_CLUSTER_V4.2</div>
        </div>
        
        <div className="text-right space-y-1 pointer-events-auto">
          <div className="log-text text-accent-primary text-[10px]">ENGR: ABHINAV_V</div>
          <div className="log-text opacity-30 text-[8px]">LOC: 28.6139° N, 77.2090° E</div>
        </div>
      </div>

      <main className="relative w-full">
        {/* HERO SECTION */}
        <section id="hero" ref={el => sectionRefs.current[0] = el} className="snap-section section-container flex flex-col justify-center">
          <KafkaHero />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10 w-full">
            <div className="lg:col-span-8 space-y-10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-[1px] w-8 bg-accent-primary" />
                  <span className="tech-label text-accent-primary tracking-[0.6em] text-[10px]">Architect.</span>
                </div>
                <h1 className="text-6xl md:text-8xl font-bold leading-[0.85] tracking-tighter mix-blend-difference uppercase">
                  Systems <br />
                  <span className="text-accent-primary italic">Architecture</span>
                </h1>
              </motion.div>
              
              <div className="relative group max-w-xl">
                <div className="absolute -left-6 top-0 bottom-0 w-[1px] bg-accent-primary/20" />
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg text-text-secondary font-mono leading-relaxed pl-6 opacity-80"
                >
                  Designing high-availability distributed systems with Node.js and Kafka. Specializing in immutable infrastructure and non-blocking orchestration.
                </motion.p>
              </div>

              <div className="flex gap-8 items-center pt-4">
                <button className="group relative px-8 py-4 bg-accent-primary text-background font-bold text-[10px] uppercase tracking-[0.3em] overflow-hidden">
                  <span className="relative z-10">Uplink_Node</span>
                  <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </button>
                <div className="space-y-0.5">
                  <span className="log-text block text-[9px] opacity-40 uppercase">Cluster_Status</span>
                  <span className="text-[12px] font-bold text-accent-tertiary uppercase tracking-widest">STABLE_0.012MS</span>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-4 hidden lg:block border border-white/10 p-8 space-y-8 bg-surface/30 backdrop-blur-md rounded-xl relative overflow-hidden h-fit">
              <div className="absolute top-0 right-0 p-3 log-text opacity-10 text-[9px]">0xEF42</div>
              <div className="space-y-6">
                <span className="tech-label text-[10px]">Real_Time_Telemetry</span>
                <div className="space-y-4">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between text-[9px] font-mono opacity-40">
                        <span>NODE_{i}</span>
                        <span>{70 + i * 5}%</span>
                      </div>
                      <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${70 + i * 5}%` }}
                          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
                          className="h-full bg-accent-primary"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-6 border-t border-white/5">
                <CodeEditor />
              </div>
            </div>
          </div>
        </section>

        {/* SYSTEM CAPABILITIES */}
        <section id="capabilities" ref={el => sectionRefs.current[1] = el} className="snap-section section-container border-t border-white/5">
          <div className="w-full">
            <div className="mb-16 relative">
              <div className="hud-line top-0 -left-8 w-[1px] h-20 bg-accent-primary/20" />
              <span className="tech-label text-[10px]">01_ENGINEERING_MATRIX</span>
              <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mt-4 leading-none">Core <br />Capabilities</h2>
            </div>
            <div className="scale-90 origin-left">
              <BentoGrid />
            </div>
          </div>
        </section>

        {/* TECH ORCHESTRATOR */}
        <section id="stack" ref={el => sectionRefs.current[2] = el} className="snap-section bg-background/30 flex items-center justify-center">
           <TechOrchestrator />
        </section>

        {/* ENGINE PERFORMANCE */}
        <section id="performance" ref={el => sectionRefs.current[3] = el} className="snap-section section-container border-y border-white/5 bg-surface/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[30%] h-full bg-accent-primary/5 -translate-y-1/2 blur-[100px] pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center w-full">
            <div className="order-2 lg:order-1">
              <div className="space-y-8">
                {[
                  { label: "NODE_EVENT_LOOP", value: 98, color: "var(--accent-primary)" },
                  { label: "KAFKA_STREAMS", value: 85, color: "var(--accent-primary)" },
                  { label: "REDIS_HIT_RATE", value: 94, color: "var(--accent-secondary)" },
                  { label: "ELK_INGESTION", value: 78, color: "var(--accent-primary)" }
                ].map((metric) => (
                  <div key={metric.label} className="group">
                    <div className="flex justify-between mb-3 log-text text-[11px] opacity-60 uppercase tracking-widest">
                      <span>{metric.label}</span>
                      <span style={{ color: metric.color }}>{metric.value}%</span>
                    </div>
                    <div className="h-1 w-full bg-white/5">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${metric.value}%` }}
                        transition={{ duration: 1.5, type: "spring" }}
                        className="h-full"
                        style={{ backgroundColor: metric.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="order-1 lg:order-2 space-y-6 border-l border-white/10 pl-10">
              <h3 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-[0.85]">Engine <br />Performance</h3>
              <p className="text-text-secondary font-mono text-base leading-relaxed max-w-md opacity-60">
                Stress testing across clusters ensures zero-latency ingestion and persistence.
              </p>
              <div className="flex gap-6">
                <div className="px-4 py-2 border border-white/10 log-text text-[10px] text-accent-primary uppercase tracking-widest">UPTIME: 99.9%</div>
                <div className="px-4 py-2 border border-white/10 log-text text-[10px] uppercase tracking-widest">LOAD: 0.42</div>
              </div>
            </div>
          </div>
        </section>

        {/* SELECTED DEPLOYMENTS */}
        <section id="projects" ref={el => sectionRefs.current[4] = el} className="snap-section section-container relative py-20">
          <div className="w-full">
            <div className="mb-20 relative">
              <div className="hud-line top-0 -left-8 w-[1px] h-20 bg-accent-secondary/20" />
              <span className="tech-label text-[10px]">Section_02 // Projects</span>
              <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mt-4 leading-none">Selected <br />Deployments</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
              {PROJECTS.map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer w-full"
                >
                  <div className="relative aspect-video overflow-hidden rounded-xl mb-6 border border-white/5 group-hover:border-accent-primary transition-all duration-700">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-1000 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                      <span className="tech-label text-[10px] text-accent-primary bg-background/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/5">0x{idx + 1}F</span>
                      <div className="flex gap-2">
                         {project.tech.split(' // ').slice(0,2).map(t => (
                           <span key={t} className="text-[9px] font-mono bg-white/5 backdrop-blur-md px-3 py-1 rounded uppercase tracking-widest border border-white/5">{t}</span>
                         ))}
                      </div>
                    </div>
                  </div>
                  <div className="px-2 space-y-4">
                    <h4 className="text-3xl font-bold tracking-tighter group-hover:text-accent-primary transition-colors leading-none uppercase">{project.title}</h4>
                    <p className="text-text-secondary font-mono text-sm leading-relaxed max-w-lg opacity-50 group-hover:opacity-100 transition-opacity">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER CONNECT */}
        <section id="footer" ref={el => sectionRefs.current[5] = el} className="snap-section border-t border-white/5 bg-surface/10 p-24 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-accent-primary/5 blur-[150px] rounded-full translate-y-1/2" />
          <div className="relative z-10 max-w-full mx-auto space-y-16">
            <h2 className="text-6xl md:text-9xl font-bold tracking-tighter uppercase leading-[0.8] mb-12 mix-blend-difference">Let's <br />Connect.</h2>
            <div className="flex flex-wrap justify-center gap-16 pt-8">
              {['GITHUB', 'LINKEDIN', 'EMAIL'].map(link => (
                <a key={link} href="#" className="text-lg font-bold tracking-[0.6em] hover:text-accent-primary transition-all hover:scale-110 uppercase">
                  {link}
                </a>
              ))}
            </div>
            <div className="pt-20 log-text opacity-20 flex flex-col md:flex-row justify-between items-center w-full max-w-5xl mx-auto border-t border-white/5 mt-20 gap-6">
               <span className="tracking-[0.6em] text-[10px]">SYSTEM_STABLE_V4.2.0</span>
               <span className="tracking-[0.6em] text-[10px]">© 2026 ABHINAV_V</span>
            </div>
          </div>
        </section>
      </main>

      <AnimatePresence>
        {selectedProject && (
          <CaseStudy project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;

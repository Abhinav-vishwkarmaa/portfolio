import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NODES = [
  { 
    id: "A1", x: 20, y: 15, title: "NODE.JS", icon: "", color: "#68A063",
    description: "NON-BLOCKING I/O ORCHESTRATION USING V8 AND LIBUV.",
    metrics: { latency: "0.12MS", throughput: "12K REQ/S" },
    visual: (
      <div className="flex gap-2">
        {[0, 1, 2].map(i => (
          <motion.div 
            key={i}
            animate={{ y: [-10, 10] }}
            transition={{ duration: 1.5, delay: i * 0.3, repeat: Infinity, repeatType: 'reverse' }}
            className="w-2 h-12 bg-[#68A063]/30 rounded-full"
          />
        ))}
      </div>
    )
  },
  { 
    id: "B2", x: 80, y: 15, title: "AWS_CLOUD", icon: "☁", color: "#FF9900",
    description: "MULTI-REGION SCALING AND IMMUTABLE STORAGE ARCHITECTURE.",
    metrics: { latency: "45MS", throughput: "99.9% UP" },
    visual: (
      <div className="relative w-full flex items-center justify-center">
         <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 3, repeat: Infinity }} className="w-16 h-16 bg-[#FF9900]/10 border border-[#FF9900]/40 rounded-full" />
         <div className="absolute text-[8px] font-mono text-[#FF9900]">AWS_S3</div>
      </div>
    )
  },
  { 
    id: "C3", x: 10, y: 50, title: "KAFKA", icon: "", color: "#06B6D4",
    description: "DISTRIBUTED FAULT-TOLERANT EVENT STREAMING PIPELINE.",
    metrics: { latency: "2MS", throughput: "8.2GB/S" },
    visual: (
      <div className="flex flex-col gap-1 w-32">
        <motion.div animate={{ x: [-40, 40] }} transition={{ duration: 1, repeat: Infinity }} className="h-1 bg-[#06B6D4]" />
        <div className="h-1 w-full bg-white/5" />
        <motion.div animate={{ x: [40, -40] }} transition={{ duration: 1, repeat: Infinity }} className="h-1 bg-[#06B6D4]/40" />
      </div>
    )
  },
  { 
    id: "D4", x: 90, y: 50, title: "REDIS", icon: "" , color: "#DC382D",
    description: "IN-MEMORY STATE MANAGEMENT FOR ULTRA-LOW LATENCY ACCESS.",
    metrics: { latency: "0.01MS", throughput: "1M OPS" },
    visual: <div className="text-4xl font-bold text-[#DC382D]">99.9<span className="text-xs">%</span></div>
  },
  { 
    id: "E5", x: 20, y: 85, title: "ELK_STACK", icon: "📊", color: "#005571",
    description: "CENTRALIZED LOGGING AND REAL-TIME OBSERVABILITY ANALYTICS.",
    metrics: { latency: "N/A", throughput: "150K EPS" },
    visual: (
      <div className="flex items-end gap-1">
         {[20, 50, 30, 80, 40].map((h, i) => (
           <motion.div key={i} animate={{ height: [`${h}%`, `${h+10}%`, `${h}%`] }} transition={{ duration: 1, delay: i * 0.1, repeat: Infinity }} className="w-2 bg-[#005571]" />
         ))}
      </div>
    )
  },
  { 
    id: "F6", x: 80, y: 85, title: "DOCKER", icon: "", color: "#2496ED",
    description: "CONTAINERIZED ORCHESTRATION FOR DETERMINISTIC DEPLOYMENTS.",
    metrics: { latency: "N/A", throughput: "200 NODES" },
    visual: (
      <div className="grid grid-cols-2 gap-1 scale-75">
          {[0, 1, 2, 3].map(i => (
            <motion.div key={i} animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, delay: i * 0.5, repeat: Infinity }} className="w-8 h-8 border-2 border-[#2496ED] rounded" />
          ))}
      </div>
    )
  },
  { 
    id: "G7", x: 50, y: 10, title: "POSTMAN", icon: "", color: "#FF6C37",
    description: "API DESIGN AND AUTOMATED TESTING SUITE.",
    metrics: { latency: "0.05MS", throughput: "99% COVER" },
    visual: <div className="text-xl font-mono text-[#FF6C37]">PING → 200</div>
  },
  { 
    id: "H8", x: 50, y: 90, title: "GITHUB", icon: "", color: "#F0F6FC",
    description: "CI/CD AUTOMATION AND COLLABORATIVE DEVELOPMENT.",
    metrics: { latency: "N/A", throughput: "100+ PRS" },
    visual: <div className="text-2xl font-bold opacity-40">GIT_PUSH</div>
  }
];

const TechOrchestrator = () => {
  const [activeNode, setActiveNode] = useState(null);

  return (
    <section className="section-container min-h-screen py-48 flex flex-col items-center justify-center relative overflow-visible">
      <div className="relative z-10 text-center mb-40 w-full">
        <span className="tech-label">Section_03 // Node_Orchestration</span>
        <h2 className="text-6xl md:text-[12rem] font-bold uppercase tracking-tighter leading-none mix-blend-difference">
          SYSTEM <br /> <span className="text-accent-primary italic">DNA</span>
        </h2>
      </div>

      <div className="relative w-full max-w-6xl aspect-square flex items-center justify-center">
        {/* BACKGROUND RINGS */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
           <div className="w-[80%] h-[80%] border border-white/5 rounded-full" />
           <div className="w-[60%] h-[60%] border border-white/5 rounded-full" />
           <div className="w-[40%] h-[40%] border border-white/5 rounded-full" />
        </div>

        {/* CONNECTING LINES */}
        <svg viewBox="0 0 1000 1000" className="absolute inset-0 w-full h-full pointer-events-none">
          <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {NODES.map((node) => (
            <g key={node.id}>
              {/* Dormant Connection Line */}
              <line
                x1="500"
                y1="500"
                x2={node.x * 10}
                y2={node.y * 10}
                stroke="white"
                strokeWidth="1"
                strokeOpacity="0.05"
              />
              
              {/* Active Connection Data Flow */}
              {activeNode?.id === node.id && (
                <>
                  <motion.line
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    x1="500"
                    y1="500"
                    x2={node.x * 10}
                    y2={node.y * 10}
                    stroke={node.color}
                    strokeWidth="2"
                    strokeOpacity="0.5"
                    filter="url(#glow)"
                  />
                  
                  {/* DATA PULSE (Moving Packet) */}
                  <motion.circle
                    r="3"
                    fill={node.color}
                    filter="url(#glow)"
                  >
                    <animateMotion
                      dur="1s"
                      repeatCount="indefinite"
                      path={`M 500,500 L ${node.x * 10},${node.y * 10}`}
                    />
                  </motion.circle>
                </>
              )}
            </g>
          ))}
        </svg>

        {/* CENTER HUB - CENTRALIZED VIEW */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 rounded-full border border-white/10 flex items-center justify-center bg-surface/60 backdrop-blur-[40px] z-50 shadow-[0_0_100px_rgba(0,0,0,0.8)] overflow-hidden">
           <AnimatePresence mode="wait">
             {!activeNode ? (
               <motion.div 
                 key="default"
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 exit={{ opacity: 0 }}
                 className="text-center p-8"
               >
                  <motion.div 
                    animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="status-glow mx-auto mb-6 w-2 h-2" 
                  />
                  <span className="tech-label block mb-2 text-[9px]">CORE_ORCHESTRATOR</span>
                  <p className="log-text text-[8px] opacity-30 uppercase tracking-[0.2em] max-w-[150px] mx-auto leading-relaxed">Select node to initiate diagnostic sequence</p>
               </motion.div>
             ) : (
               <motion.div 
                 key={activeNode.id}
                 initial={{ opacity: 0, y: 15 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, scale: 1.05 }}
                 className="text-center p-8 space-y-6 w-full"
               >
                  <div className="space-y-1">
                    <span className="tech-label text-[10px]" style={{ color: activeNode.color }}>Diagnostic: {activeNode.title}</span>
                    <div className="h-[1px] w-1/3 bg-white/10 mx-auto" />
                  </div>
                  
                  <div className="h-24 flex items-center justify-center bg-background/40 rounded-xl border border-white/5">
                    {activeNode.visual}
                  </div>

                  <p className="log-text text-text-primary text-[9px] leading-relaxed uppercase tracking-[0.2em] max-w-[200px] mx-auto">
                    {activeNode.description}
                  </p>

                  <div className="flex justify-center gap-8 pt-4">
                     <div className="flex flex-col items-center">
                       <span className="text-[7px] opacity-30 uppercase tracking-widest mb-0.5">Latency</span>
                       <span className="text-sm font-bold font-mono" style={{ color: activeNode.color }}>{activeNode.metrics.latency}</span>
                     </div>
                     <div className="flex flex-col items-center">
                       <span className="text-[7px] opacity-30 uppercase tracking-widest mb-0.5">Throughput</span>
                       <span className="text-sm font-bold font-mono text-accent-secondary">{activeNode.metrics.throughput}</span>
                     </div>
                  </div>
               </motion.div>
             )}
           </AnimatePresence>
           
           {/* Rotating Outer Rings */}
           <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute inset-0 border border-dashed border-white/5 rounded-full pointer-events-none" />
        </div>

        {/* NODES IN ORBIT */}
        {NODES.map((node) => (
          <motion.div
            key={node.id}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            onMouseEnter={() => setActiveNode(node)}
            onMouseLeave={() => setActiveNode(null)}
            className="absolute z-40 cursor-crosshair group"
            style={{ 
              left: `${node.x}%`, 
              top: `${node.y}%`, 
              transform: 'translate(-50%, -50%)' 
            }}
            animate={{ 
              opacity: activeNode ? (activeNode.id === node.id ? 1 : 0.1) : 1,
              scale: activeNode?.id === node.id ? 1.1 : 1,
              zIndex: activeNode?.id === node.id ? 60 : 40
            }}
          >
            <div 
              className="w-16 h-16 md:w-24 md:h-24 bg-surface/90 backdrop-blur-xl border border-white/10 rounded-2xl flex flex-col items-center justify-center transition-all duration-500 overflow-hidden relative"
              style={{ 
                borderColor: activeNode?.id === node.id ? node.color : 'rgba(255,255,255,0.1)',
                boxShadow: activeNode?.id === node.id ? `0 0 40px ${node.color}33` : 'none'
              }}
            >
              <div className="text-2xl md:text-4xl group-hover:scale-110 transition-transform duration-500" style={{ color: node.color }}>
                {node.icon}
              </div>
              <span className="log-text text-[7px] mt-2 opacity-50 uppercase tracking-[0.1em] font-bold">{node.title}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechOrchestrator;

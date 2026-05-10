import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SECTION_INTROS = {
  hero: {
    msg: "GREETINGS. I AM Guide.",
    desc: "YOU ARE AT THE SYSTEM CORE. I MANAGE ALL ARCHITECTURAL UPLINKS HERE."
  },
  capabilities: {
    msg: "SCANNING CAPABILITIES...",
    desc: "THIS MODULE SHOWCASES OUR CORE ENGINEERING STRENGTHS IN KAFKA, REDIS, AND CLUSTER MANAGEMENT."
  },
  stack: {
    msg: "ORCHESTRATION MAP ACTIVE.",
    desc: "THIS IS THE DISTRIBUTED CLUSTER. HOVER OVER THE NODES TO SEE REAL-TIME TELEMETRY."
  },
  performance: {
    msg: "BENCHMARKING IN PROGRESS.",
    desc: "WE ARE MEASURING EVENT-LOOP EFFICIENCY AND KAFKA THROUGHPUT STABILITY."
  },
  projects: {
    msg: "FETCHING DEPLOYMENT LOGS.",
    desc: "THESE ARE LIVE PRODUCTION SYSTEMS. SELECT A NODE TO VIEW ARCHITECTURE DEEP-DIVES."
  },
  footer: {
    msg: "SIGNAL_STRENGTH_OPTIMAL.",
    desc: "SYSTEM BROADCAST IS READY. INITIATE CONNECTION VIA GITHUB OR LINKEDIN."
  }
};

const SystemCompanion = ({ activeSection = "hero" }) => {
  const [show, setShow] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const idleTimer = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Hide while moving
      setShow(false);

      // Clear previous timer
      if (idleTimer.current) clearTimeout(idleTimer.current);

      // Set new timer for 1 second idle
      idleTimer.current = setTimeout(() => {
        setPos({ x: e.clientX, y: e.clientY });
        setShow(true);
      }, 1000);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (idleTimer.current) clearTimeout(idleTimer.current);
    };
  }, []);

  const info = SECTION_INTROS[activeSection] || SECTION_INTROS.hero;

  // Calculate safe position to stay within viewport
  const getSafePos = () => {
    let x = pos.x + 20;
    let y = pos.y + 20;
    const charWidth = 220; // Dialog + Neko approx width
    const charHeight = 250; // Dialog + Neko approx height

    if (x + charWidth > window.innerWidth) x = pos.x - charWidth - 20;
    if (y + charHeight > window.innerHeight) y = pos.y - charHeight - 20;

    return { x, y };
  };

  const safePos = getSafePos();

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          style={{
            position: 'fixed',
            left: safePos.x,
            top: safePos.y,
            zIndex: 10000,
            pointerEvents: 'none'
          }}
          className="flex flex-col items-start gap-4"
        >
          {/* DIALOG BOX */}
          <div className="bg-surface/90 backdrop-blur-xl border border-accent-primary/30 p-4 rounded-2xl max-w-[200px] shadow-[0_0_30px_rgba(6,182,212,0.2)]">
            <span className="tech-label text-[9px] text-accent-primary mb-2 block">{info.msg}</span>
            <p className="log-text text-[8px] leading-relaxed opacity-80 uppercase tracking-widest">
              {info.desc}
            </p>
          </div>

          {/* NEKO CHARACTER */}
          <div className="relative w-20 h-20 ml-4">
            <motion.img
              src="/neko.png"
              animate={{
                y: [0, -5, 0],
                rotate: [0, 2, -2, 0]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-full h-full object-contain"
            />
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-accent-primary/20 blur-sm rounded-full" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SystemCompanion;

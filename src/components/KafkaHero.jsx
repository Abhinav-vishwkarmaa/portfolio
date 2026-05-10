import React, { useMemo } from 'react';

const KafkaHero = () => {
  const streams = useMemo(() => {
    return Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      x: `${(i / 12) * 100}%`,
      delay: Math.random() * -20,
      duration: 20 + Math.random() * 20,
      opacity: 0.05 + Math.random() * 0.1
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* SCANNING LINE - CSS ONLY FOR PERFORMANCE */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent-primary/50 to-transparent z-10 opacity-30 shadow-[0_0_15px_#06B6D4] animate-scan" />

      {/* DATA STREAMS - REDUCED COUNT FOR LAG FIX */}
      {streams.map((stream) => (
        <div
          key={stream.id}
          className="absolute top-0 text-[8px] font-mono text-accent-primary flex flex-col gap-12 select-none animate-stream"
          style={{ 
            left: stream.x, 
            opacity: stream.opacity,
            animationDuration: `${stream.duration}s`,
            animationDelay: `${stream.delay}s`
          }}
        >
          {Array.from({ length: 20 }).map((_, idx) => (
            <div key={idx} className="flex flex-col gap-1">
              <span className="opacity-40 font-bold">0x{(Math.random() * 0xFFF).toString(16).toUpperCase()}</span>
              <span className="text-[6px] text-accent-secondary opacity-20">ACK_RCV</span>
            </div>
          ))}
        </div>
      ))}

      {/* AMBIENT GLOWS */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-10" />
      
      <style jsx>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        @keyframes stream {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        .animate-scan {
          animation: scan 10s linear infinite;
        }
        .animate-stream {
          animation: stream linear infinite;
        }
      `}</style>
    </div>
  );
};

export default KafkaHero;

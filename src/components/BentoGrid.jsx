import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useMotionTemplate } from 'framer-motion';

// --- Custom Animations for Each Card ---

const WebDesignGraphic = () => (
  <div className="absolute right-2 top-2 opacity-20 group-hover:opacity-40 transition-opacity">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="w-20 h-20 border-2 border-blue-400 rounded-full border-dashed"
    />
    <motion.div
      animate={{ rotate: -360 }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      className="absolute top-4 left-4 w-12 h-12 border border-purple-400 transform rotate-45"
    />
  </div>
);

const WebDevGraphic = () => (
  <div className="absolute right-4 top-4 opacity-20 group-hover:opacity-50 transition-opacity font-mono text-xs text-green-400">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 1, 0] }}
      transition={{ duration: 3, repeat: Infinity, times: [0, 0.1, 0.9, 1] }}
    >
      &lt;Code /&gt;
    </motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 1, 0] }}
      transition={{ duration: 3, delay: 1, repeat: Infinity, times: [0, 0.1, 0.9, 1] }}
    >
      const dev = true;
    </motion.div>
  </div>
);

const CopywritingGraphic = () => (
  <div className="absolute right-4 top-4 opacity-20 group-hover:opacity-50 transition-opacity">
    <motion.div
      animate={{ opacity: [1, 0] }}
      transition={{ duration: 0.8, repeat: Infinity }}
      className="w-1 h-6 bg-white"
    />
  </div>
);

const TDDGraphic = () => (
  <div className="absolute right-4 top-4 flex flex-col gap-1 opacity-20 group-hover:opacity-50 transition-opacity">
    {[1, 2, 3].map((i) => (
      <motion.div
        key={i}
        initial={{ width: 0 }}
        animate={{ width: 20 }}
        transition={{ duration: 1, delay: i * 0.5, repeat: Infinity, repeatDelay: 2 }}
        className="h-1 bg-green-400 rounded-full"
      />
    ))}
  </div>
);

const TechStackGraphic = () => (
  <div className="absolute right-2 top-2 opacity-20 group-hover:opacity-40 transition-opacity">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      className="w-16 h-16 border-t-2 border-r-2 border-blue-500 rounded-full"
    />
  </div>
);

const DeploymentGraphic = () => (
  <div className="absolute right-4 top-4 opacity-20 group-hover:opacity-50 transition-opacity">
    <motion.div
      animate={{ y: [-5, -15, -5] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      🚀
    </motion.div>
  </div>
);

const BentoItem = ({ item, index, totalItems, variants, className, loading }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const renderGraphic = () => {
    switch (item.title) {
      case "System Architecture": return <WebDesignGraphic />;
      case "Backend Engineering": return <WebDevGraphic />;
      case "API Documentation": return <CopywritingGraphic />;
      case "Security & Optimization": return <TDDGraphic />;
      case "Database & Payments": return <TechStackGraphic />;
      case "Cloud & DevOps": return <DeploymentGraphic />;
      default: return null;
    }
  };

  return (
    <motion.div
      className={`group relative glass-effect p-6 cursor-pointer hover:shadow-2xl transition-all duration-300 overflow-hidden ${className}`}
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onMouseMove={handleMouseMove}
      whileHover={{
        y: loading ? 0 : -4,
        transition: { duration: 0.2 }
      }}
      transition={{
        delay: index * 0.1,
        type: "spring",
        stiffness: 300,
        damping: 25
      }}
      style={{
        background: "rgba(255, 255, 255, 0.03)",
        backdropFilter: "blur(10px)",
      }}
    >
      {/* Sharp Corner Lines */}
      {/* Top Left */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white/20 group-hover:border-blue-500/50 transition-colors duration-300" />
      {/* Top Right */}
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white/20 group-hover:border-blue-500/50 transition-colors duration-300" />
      {/* Bottom Left */}
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white/20 group-hover:border-blue-500/50 transition-colors duration-300" />
      {/* Bottom Right */}
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white/20 group-hover:border-blue-500/50 transition-colors duration-300" />

      {/* Spotlight Overlay */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(59, 130, 246, 0.1),
              transparent 80%
            )
          `
        }}
      />

      {/* Custom Graphic Background - Always visible */}
      {renderGraphic()}

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div>
          <div className="flex items-start justify-between mb-4">
            <div className={`text-3xl transition-all duration-300 ${loading ? 'opacity-50 scale-90' : 'opacity-80 group-hover:opacity-100 group-hover:scale-110'}`}>
              {loading ? (
                <div className="w-10 h-10 rounded-full bg-white/10 animate-pulse" />
              ) : (
                item.icon
              )}
            </div>
          </div>

          {loading ? (
            <div className="space-y-3">
              <div className="h-6 w-1/2 bg-white/10 rounded animate-pulse" />
              <div className="space-y-2">
                <div className="h-3 w-full bg-white/5 rounded animate-pulse" />
                <div className="h-3 w-5/6 bg-white/5 rounded animate-pulse" />
                <div className="h-3 w-4/6 bg-white/5 rounded animate-pulse" />
              </div>
            </div>
          ) : (
            <>
              <h3 className="font-bold text-white mb-2 text-lg group-hover:text-blue-300 transition-colors">
                {item.title}
              </h3>

              <p className="text-sm text-gray-300 leading-relaxed opacity-90">
                {item.description}
              </p>
            </>
          )}
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {loading ? (
            <>
              <div className="h-6 w-16 bg-blue-500/10 rounded border border-blue-500/10 animate-pulse" />
              <div className="h-6 w-20 bg-blue-500/10 rounded border border-blue-500/10 animate-pulse" />
              <div className="h-6 w-14 bg-blue-500/10 rounded border border-blue-500/10 animate-pulse" />
            </>
          ) : (
            item.skills.slice(0, 3).map((skill, skillIndex) => (
              <span
                key={skillIndex}
                className="px-2 py-1 bg-blue-500/10 text-blue-300 text-xs border border-blue-500/20 rounded-md"
              >
                {skill}
              </span>
            ))
          )}
        </div>
      </div>
    </motion.div>
  );
};

const BentoGrid = () => {
  const [loaded, setLoaded] = useState(false);

  const bentoItems = [
    {
      title: "System Architecture",
      description: "Designing scalable systems using Clean Architecture and microservices patterns.",
      icon: "🏗️",
      skills: ["Clean Architecture", "Microservices", "Scalability"],
      className: "md:col-span-1 lg:col-span-2"
    },
    {
      title: "Backend Engineering",
      description: "Building high-concurrency server logic with Go (Golang) and Node.js.",
      icon: "⚡",
      skills: ["Go (Golang)", "Node.js", "Python", "BullMQ"],
      className: "md:col-span-2 lg:col-span-2"
    },
    {
      title: "API Documentation",
      description: "Automating OpenAPI/Swagger workflows for seamless frontend-backend integration.",
      icon: "✍️",
      skills: ["Swagger", "OpenAPI", "Postman"],
      className: "md:col-span-1 lg:col-span-1 lg:row-span-2"
    },
    {
      title: "Performance & Scaling",
      description: "Optimizing database queries and implementing multi-layer caching with Redis.",
      icon: "🧪",
      skills: ["Query Tuning", "Redis Caching", "Indexing"],
      className: "md:col-span-2 lg:col-span-1"
    },
    {
      title: "Database & Integrity",
      description: "Managing PostgreSQL/MySQL with focus on data integrity and ACID compliance.",
      icon: "🛡️",
      skills: ["PostgreSQL", "MySQL", "ACID", "Idempotency"],
      className: "md:col-span-2 lg:col-span-2"
    },
    {
      title: "Cloud & DevOps",
      description: "Orchestrating deployments with Docker, GitHub Actions, and AWS infrastructure.",
      icon: "🌐",
      skills: ["Docker", "GitHub Actions", "AWS", "Nginx"],
      className: "md:col-span-1 lg:col-span-3"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 2000); // Increased loading time slightly to show off the animations

    return () => clearTimeout(timer);
  }, []);

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(14rem,auto)]">
      <AnimatePresence mode="wait">
        {bentoItems.map((item, index) => (
          <BentoItem
            key={item.title}
            item={item}
            index={index}
            totalItems={bentoItems.length}
            variants={itemVariants}
            className={item.className}
            loading={!loaded}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default BentoGrid;
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[minmax(12rem,auto)]">
      {bentoItems.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
          className={`card-base p-6 flex flex-col justify-between hover:border-accent-primary/50 group ${item.className}`}
        >
          <div>
            <div className="text-2xl mb-4 grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all">
              {item.icon}
            </div>
            <h3 className="font-bold text-text-primary text-sm mb-2 uppercase tracking-wide">
              {item.title}
            </h3>
            <p className="text-xs text-text-secondary leading-relaxed line-clamp-3">
              {item.description}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {item.skills.map((skill, skillIndex) => (
              <span
                key={skillIndex}
                className="px-2 py-0.5 bg-background text-[10px] font-mono text-text-secondary border border-border-subtle rounded uppercase"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default BentoGrid;
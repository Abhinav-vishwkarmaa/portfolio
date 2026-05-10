import React from 'react';
import { motion } from 'framer-motion';

const BentoGrid = () => {
  const bentoItems = [
    {
      title: "DISTRIBUTED_MESSAGING",
      description: "Architecting high-volume Kafka clusters with Zookeeper-less KRaft mode for event orchestration.",
      icon: "🛰️",
      code: "KAFKA_3.8_NODE",
      className: "md:col-span-2 lg:col-span-2 bg-gradient-to-br from-accent-primary/5 to-transparent",
      tags: ["PUB/SUB", "PARTITIONS", "RETENTION"]
    },
    {
      title: "OBSERVABILITY",
      description: "Centralized logging using ELK Stack. Custom Logstash pipelines for structured telemetry.",
      icon: "📊",
      code: "ELK_STACK_V8",
      className: "md:col-span-1 lg:col-span-2",
      tags: ["ELASTIC", "KIBANA", "APM"]
    },
    {
      title: "ASYNC_WORKERS",
      description: "Non-blocking background processing via Redis-backed BullMQ clusters.",
      icon: "⚙️",
      code: "REDIS_CORE",
      className: "md:col-span-1 lg:col-span-1 lg:row-span-2",
      tags: ["BULLMQ", "STREAMS"]
    },
    {
      title: "SECURE_STORAGE",
      description: "Immutable document vaults on AWS S3 with AES-256 server-side encryption.",
      icon: "🔒",
      code: "AWS_S3_VAULT",
      className: "md:col-span-2 lg:col-span-3",
      tags: ["KMS", "IAM", "PRESIGNED"]
    },
    {
      title: "API_GATEWAY",
      description: "High-performance Nginx reverse proxies with rate limiting and DDoS protection.",
      icon: "🌐",
      code: "NGINX_PROD",
      className: "md:col-span-1 lg:col-span-1",
      tags: ["REVERSE_PROXY", "SSL"]
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[minmax(14rem,auto)]">
      {bentoItems.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -8 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 300, damping: 25, delay: index * 0.05 }}
          className={`cyber-card p-10 group flex flex-col justify-between ${item.className} border-l-4`}
          style={{ borderLeftColor: index % 2 === 0 ? 'var(--accent-primary)' : 'var(--accent-secondary)' }}
        >
          <div className="absolute top-2 left-10 log-text opacity-10 text-[8px] uppercase tracking-widest pointer-events-none">Diagnostic_Node_{index + 102}</div>
          
          <div>
            <div className="flex justify-between items-start mb-8">
              <div className="space-y-1">
                <span className="log-text text-accent-primary block">{item.code}</span>
                <div className="h-0.5 w-8 bg-accent-primary/30" />
              </div>
              <div className="text-3xl opacity-20 group-hover:opacity-100 group-hover:text-accent-primary transition-all duration-500">{item.icon}</div>
            </div>
            
            <h3 className="text-2xl font-bold mb-6 tracking-tighter uppercase group-hover:tracking-widest transition-all duration-500">
              {item.title}
            </h3>
            <p className="text-sm text-text-secondary font-mono leading-relaxed group-hover:text-text-primary transition-colors mb-8 opacity-80">
              {item.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {item.tags.map(tag => (
              <span key={tag} className="text-[9px] font-mono border border-white/10 px-3 py-1 rounded-full opacity-60 group-hover:opacity-100 group-hover:border-accent-primary/40 transition-all">
                {tag}
              </span>
            ))}
          </div>

          {/* Industrial Corner Decors */}
          <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-accent-primary/10 group-hover:border-accent-primary transition-colors" />
          <div className="absolute bottom-4 right-4 log-text text-[8px] opacity-0 group-hover:opacity-20 transition-opacity">0x{Math.random().toString(16).slice(2, 6).toUpperCase()}</div>
        </motion.div>
      ))}
    </div>
  );
};

export default BentoGrid;
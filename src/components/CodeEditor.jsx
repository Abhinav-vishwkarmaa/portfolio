import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CodeEditor = () => {
  const [activeTab, setActiveTab] = useState(0);

  const snippets = [
    {
      name: 'INGESTION_SVC.TS',
      content: `// CLUSTER_NODE_01 // INGESTION_PROCESS
const producer = new Kafka.Producer();

async function handlePayload(event: Event) {
  const { id, type, ts } = event;
  
  // DEDUPLICATION_LAYER
  const isDuplicate = await redis.setnx(\`click:\${id}\`, ts);
  if (!isDuplicate) return dropEvent(id);

  // KAFKA_STREAM_EMIT
  await producer.send('RAW_INGRESS', event);
  
  return { status: 'EMITTED', latency: Date.now() - ts };
}`
    },
    {
      name: 'OBSERVABILITY.LOG',
      content: `[2026-05-10 23:28:01] INFO: Logstash Pipeline Started
[2026-05-10 23:28:02] DEBUG: Connecting to Elasticsearch...
[2026-05-10 23:28:05] WARN: Higher Latency detected on Node_04
[2026-05-10 23:28:06] INFO: Kafka Consumer Group rebalanced
[2026-05-10 23:28:10] OK: Throughput stabilized at 8.2k RPM
[2026-05-10 23:28:12] INFO: Periodic health check passed
[2026-05-10 23:28:15] METRIC: EventLoopLag < 5ms
[2026-05-10 23:28:18] INFO: Garbage collection sweep completed`
    }
  ];

  return (
    <div className="bg-[#020617] border border-border-bright rounded-xl overflow-hidden shadow-2xl relative group">
      {/* SCANLINE OVERLAY */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] z-10 bg-[length:100%_4px] opacity-20" />
      
      <div className="flex bg-[#070E25] border-b border-border-bright p-1">
        {snippets.map((file, idx) => (
          <button
            key={file.name}
            onClick={() => setActiveTab(idx)}
            className={`px-6 py-2 text-[10px] font-mono transition-all duration-300 border border-transparent rounded-lg ${
              activeTab === idx 
                ? 'bg-accent-primary/10 text-accent-primary border-accent-primary/20' 
                : 'text-text-secondary hover:text-text-primary hover:bg-white/5'
            }`}
          >
            {file.name}
          </button>
        ))}
      </div>
      
      <div className="p-8 font-mono text-xs leading-relaxed overflow-x-auto min-h-[360px] bg-gradient-to-b from-transparent to-accent-primary/[0.02]">
        <AnimatePresence mode="wait">
          <motion.pre 
            key={activeTab}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className="text-slate-300"
          >
            <code className="block whitespace-pre-wrap">{snippets[activeTab].content}</code>
          </motion.pre>
        </AnimatePresence>
      </div>
      
      <div className="bg-[#070E25] border-t border-border-bright p-3 flex justify-between items-center px-6">
        <div className="flex gap-6 items-center">
          <div className="flex gap-2 items-center">
            <div className="w-1.5 h-1.5 rounded-full bg-accent-tertiary shadow-[0_0_8px_#10B981]" />
            <span className="log-text uppercase">PROD_ENV_NODE_22</span>
          </div>
          <span className="log-text opacity-30 text-[9px]">LN: 124 COL: 42</span>
        </div>
        <div className="flex items-center gap-4">
           <span className="log-text text-accent-primary animate-pulse">LOCKED_SYNC</span>
           <div className="h-4 w-[1px] bg-border-bright" />
           <span className="log-text opacity-40">UTC-5</span>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import BentoGrid from './components/BentoGrid';
import CodeEditor from './components/CodeEditor';
import CaseStudy from './components/CaseStudy';

const App = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Ad Management Platform",
      tech: "Fastify, MySQL, Redis Streams, BullMQ",
      description: "Engineered a scalable multi-tenant platform handling 4M+ click records. Achieved <1ms tenant resolution using a distributed caching layer.",
      isInternal: true,
      link: "https://track-myads.com",
      metrics: [
        { label: "Resolution", value: "<1ms" },
        { label: "Throughput", value: "8k+ RPM" },
        { label: "Data Scale", value: "4M+ Tracks" },
        { label: "Optimization", value: "70% CPU Saved" }
      ],
      images: [
        { url: "/images/pulpy_dashboard.png", caption: "Multi-tenant Dashboard: Real-time Clicks & Conversions" },
        { url: "/images/pulpy_charts.png", caption: "Performance Analytics: Hourly Traffic & Conversion Trends" },
        { url: "/images/pulpy_offers.png", caption: "Offer Management: Global Campaign Control Center" },
        { url: "/images/pulpy_offer_detail.png", caption: "Granular Reporting: Individual Offer Performance Deep-dive" },
        { url: "/images/pulpy_login.png", caption: "Secure Tenant Portal: Multi-tenant JWT Login Interface" },
        { url: "/images/ad_architecture.png", caption: "Technical System Architecture: Redis Streams & Batch Persistence" },
        { url: "/images/redis_visual.png", caption: "High-Performance Caching: Redis-driven Tenant Resolve & Rate Limiting" }
      ],
      overview: "A high-concurrency multi-tenant platform architected to manage the full lifecycle of clicks, conversions, and financial reconciliations. Built with a Fastify-based distributed architecture to ensure sub-10ms response times for tracking events.",
      challenges: [
        "Resolving tenants from subdomains in <1ms without hitting primary SQL database.",
        "Managing high-volume tracking bursts without blocking non-tracking API threads.",
        "Ensuring 1:1 financial reconciliation across 4M+ records with zero data leakage between tenants."
      ],
      architecture_steps: [
        { text: "[Ingress] Request arrives at Fastify Gateway" },
        { text: "[tenantResolutionService] Subdomain -> Redis Metadata Lookup", highlight: true },
        { text: "[trackingService] Click UUID + Macro Validation" },
        { text: "[Redis Streams] Asynchronous Event Buffer (XADD)", highlight: true },
        { text: "[Workers] Ingestion & Atomic DB Persistence" },
        { text: "[Reporting] Aggregated Daily KPI Tables" }
      ],
      deep_dives: [
        {
          title: "Composite Indexing Strategy",
          content: "Optimized multi-tenant reporting via (tenant_id, created_at, offer_id) composite indexes. This enabled index-only scans for dashboard aggregations, reducing query latency from 12s to sub-300ms."
        },
        {
          title: "Redis Stream Ingestion",
          content: "Implemented a non-blocking tracking flow by pushing events to 'stream:clicks'. This decoupling allows the tracker to return redirects immediately while workers handle the heavy persistence asynchronously."
        }
      ],
      code_snippet: {
        filename: "tracking.handler.js",
        code: `fastify.get('/click', async (request, reply) => {\n  const tenant = await tenantService.resolveByHost(request.headers.host);\n  if (!tenant || !tenant.isActive) return reply.status(403).send('Forbidden');\n\n  const clickUuid = crypto.randomUUID();\n  const payload = { offer_id, pub_id, tenant_id: tenant.id, uuid: clickUuid };\n\n  await redis.xadd('stream:clicks', '*', 'data', JSON.stringify(payload));\n\n  const redirectUrl = await trackingService.buildUrl(offer_id, clickUuid);\n  return reply.redirect(302, redirectUrl);\n});`
      },
      results: [
        "Reduced P99 query latency from 12s to ~450ms.",
        "System scales linearly up to 8,000+ RPM.",
        "Eliminated 70% of redundant database CPU cycles via pre-aggregation."
      ],
      roadmap: [
        "Implement Distributed Tracing with OpenTelemetry.",
        "Horizontal sharding of metrics tables by tenant_id.",
        "Read Replicas for reporting-heavy workloads."
      ]
    },
    {
      title: "Maritime Certification Engine",
      tech: "Node.js, MySQL, Sequelize, BullMQ, AWS S3",
      description: "Enterprise-grade system managing end-to-end maritime certification, surveys, and compliance for international vessels.",
      isInternal: true,
      link: "https://grclass.com",
      metrics: [
        { label: "Stakeholders", value: "3+ Types" },
        { label: "Security", value: "Geo-Fenced" },
        { label: "Flows", value: "Mission Critical" },
        { label: "Storage", value: "AWS S3" }
      ],
      images: [
        { url: "/images/maritime_app.png", caption: "Surveyor Mobile Interface with GPS geo-fencing" }
      ],
      overview: "A comprehensive, enterprise-grade system designed to manage the end-to-end lifecycle of maritime vessel certification and compliance. It enables inspection of ships, issuance of statutory certificates, and ensures compliance with IMO international regulations.",
      challenges: [
        "Ensuring data integrity across offline mobile sync and online server state for field surveyors.",
        "Generating digitally verifiable and secure PDF certificates without blocking the main event loop.",
        "Implementing complex Role-Based Access Control (RBAC) and status-driven workflow state machines."
      ],
      architecture_steps: [
        { text: "[Ingress] Multi-role authentication (RBAC) via JWT" },
        { text: "[Workflow] Job Request lifecycle orchestration (Creation -> Review -> Execution)" },
        { text: "[Compliance] Geo-fencing & digital checklists verification", highlight: true },
        { text: "[Async] BullMQ worker for certificate & report generation", highlight: true },
        { text: "[Storage] AWS S3 document vault for evidence and reports" },
        { text: "[Audit] Immutable action logging for compliance audits" }
      ],
      deep_dives: [
        {
          title: "Digital Certificate Generation",
          content: "Engineered a secure template-driven certificate generation system. Uses HTML/Handlebars templates with dynamic vessel data injection. Certificates are hashed and verifiable via Unique Tracking Numbers (UTNs) to prevent fraud."
        },
        {
          title: "Offline Sync & Geo-Fencing",
          content: "Developed a bi-directional sync engine for field surveyors. Integrated GPS-based geo-fencing to ensure surveyors are within vessel proximity before initiating inspections, increasing compliance reliability."
        }
      ],
      code_snippet: {
        filename: "certificate.worker.js",
        code: `// BullMQ Worker for Certificate Generation\nconst certificateWorker = new Worker('pdf-queue', async (job) => {\n  const { surveyId } = job.data;\n  try {\n    const data = await getConsolidatedReport(surveyId);\n    const buffer = await pdfEngine.render('certificate_template', data);\n    const s3Path = await s3.upload(\`certs/\${surveyId}.pdf\`, buffer);\n    \n    await db('surveys').where({ id: surveyId }).update({ \n      cert_path: s3Path, \n      status: 'CERTIFIED' \n    });\n    return { success: true, path: s3Path };\n  } catch (error) {\n    throw error; // Trigger backoff retry\n  }\n});`
      },
      results: [
        "Digitized 100% of the manual surveyor report and certificate issuance flow.",
        "Improved turnaround time for certificate delivery from days to minutes.",
        "Enhanced data security with audit logs for every vessel state change."
      ],
      roadmap: [
        "Implement blockchain-based certificate verification for immutable trust.",
        "Integrate real-time vessel tracking APIs for automated survey scheduling.",
        "Advanced AI-driven predictive maintenance based on inspection trends."
      ]
    },
    {
      title: "Clean URL Shortener (Go)",
      tech: "Go, PostgreSQL, Redis, Clean Architecture",
      description: "High-performance URL shortener following Clean Architecture. Implemented Base62 encoding and Redis caching for sub-10ms redirection.",
      link: "https://github.com/abhinav-v/go-shortener"
    },
    {
      title: "E-Commerce Backend",
      tech: "Node.js, Express, MongoDB, Payments",
      description: "Developed modular backend for checkouts. Integrated idempotent payment gateways (Razorpay/Paytm) with secure webhook verification.",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-text-primary selection:bg-accent-primary selection:text-background">

      <main className="section-container">

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32 pt-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-accent-primary font-mono text-sm tracking-widest uppercase mb-4 block">Engineered Systems</span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-text-primary mb-6">
              Abhinav Vishwakarma
            </h1>
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="bg-surface border border-border-subtle text-text-secondary px-3 py-1 text-sm font-medium rounded-md">Backend Software Engineer</span>
              <span className="text-text-secondary text-sm flex items-center gap-2">📧 abhivishwkarmaa52@gmail.com</span>
            </div>
            <p className="text-xl text-text-secondary leading-relaxed mb-10 max-w-xl">
              Specializing in high-performance <span className="text-text-primary">distributed systems</span>, <span className="text-text-primary">database architecture</span>, and scalable microservices.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Go', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'AWS'].map(tech => (
                <span key={tech} className="px-3 py-1 bg-surface border border-border-subtle text-xs font-mono text-text-secondary rounded">{tech}</span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="card-base p-1 overflow-hidden">
              <CodeEditor />
            </div>
          </motion.div>
        </div>

        {/* Core Expertise (Bento) */}
        <div className="mb-32">
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-2">Core Expertise</h2>
            <p className="text-text-secondary text-sm">Primary technical focus and architectural domains.</p>
          </div>
          <BentoGrid />
        </div>

        {/* Featured Projects */}
        <div className="mb-32">
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-2 uppercase tracking-tighter">Selected Works</h2>
            <p className="text-text-secondary text-sm">Enterprise solutions and high-performance backends.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="card-base p-8 cursor-pointer flex flex-col justify-between h-64 hover:border-accent-primary/50 group"
                onClick={() => {
                  if (project.isInternal) setSelectedProject(project);
                  else if (project.link && project.link !== '#') window.open(project.link, '_blank');
                }}
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-text-primary group-hover:text-accent-primary transition-colors">{project.title}</h3>
                    {!project.isInternal && project.link && project.link !== '#' && <span className="text-text-secondary group-hover:text-accent-primary">↗</span>}
                    {project.isInternal && <span className="text-[10px] uppercase tracking-widest font-bold text-accent-secondary border border-accent-secondary/30 px-2 py-0.5 rounded">Case Study</span>}
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed line-clamp-2">{project.description}</p>
                </div>
                <div className="text-[10px] font-mono text-text-secondary uppercase tracking-widest border-t border-border-subtle pt-4">{project.tech}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Engineering Spotlight */}
        <div className="mb-32">
          <div className="card-base p-10 grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h3 className="text-sm font-bold text-accent-primary uppercase tracking-widest mb-4">Optimization Challenge</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Scaling a multi-tenant tracking system to <span className="text-text-primary font-medium">4M+ records</span> required a shift from standard indexing to a composite-scan strategy to maintain sub-second SLA.
                </p>
              </div>
              <div className="pt-4">
                <div className="text-4xl font-bold text-accent-primary">450ms</div>
                <div className="text-[10px] text-text-secondary uppercase tracking-widest mt-1">Optimized P99 Latency</div>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="bg-background border border-border-subtle rounded-md p-6 font-mono text-xs overflow-x-auto">
                <div className="flex gap-2 mb-4 border-b border-border-subtle pb-2 opacity-50">
                  <div className="w-2 h-2 rounded-full bg-border-subtle" />
                  <div className="w-2 h-2 rounded-full bg-border-subtle" />
                  <div className="w-2 h-2 rounded-full bg-border-subtle" />
                </div>
                <div className="text-accent-primary">SELECT <span className="text-text-primary">SUM(amount), DATE(created_at)</span></div>
                <div className="text-accent-primary">FROM <span className="text-text-primary">metrics_log</span></div>
                <div className="text-accent-primary">WHERE <span className="text-text-primary">tenant_id = 'uuid-789'</span></div>
                <div className="text-accent-primary">AND <span className="text-text-primary">created_at {'>'}= '2026-01-01'</span></div>
                <div className="text-accent-primary">GROUP BY <span className="text-text-primary">DATE(created_at);</span></div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience & Education */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 border-t border-border-subtle pt-20">
          <div>
            <h3 className="text-sm font-bold text-text-secondary uppercase tracking-widest mb-8">Professional Timeline</h3>
            <div className="space-y-10">
              <div className="relative pl-6 border-l border-border-subtle">
                <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-accent-primary" />
                <h4 className="font-bold text-text-primary">Backend Developer</h4>
                <p className="text-xs text-text-secondary uppercase mb-2">2025 -- Present</p>
                <p className="text-sm text-text-secondary leading-relaxed">Architecting maritime inspection engines and optimizing distributed data flows.</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold text-text-secondary uppercase tracking-widest mb-8">Academic Foundation</h3>
            <div className="card-base p-6">
              <h4 className="font-bold text-text-primary">B.Tech in Computer Science</h4>
              <p className="text-sm text-text-secondary">Dr. Ambedkar Institute of Technology</p>
              <div className="mt-4 flex items-center gap-4">
                <span className="text-xs font-mono text-accent-primary">7.4 CGPA</span>
                <span className="text-xs font-mono text-text-secondary">CLASS OF 2026</span>
              </div>
            </div>
          </div>
        </div>

      </main>

      {/* Case Study Overlay */}
      <CaseStudy
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <footer className="py-12 border-t border-border-subtle">
        <div className="section-container flex justify-between items-center opacity-50 grayscale">
          <span className="text-[10px] uppercase tracking-[0.3em]">Built for high-concurrency</span>
          <span className="text-[10px] uppercase font-mono tracking-widest">© 2026 ABHINAV_V</span>
        </div>
      </footer>
    </div>
  );
};

export default App;
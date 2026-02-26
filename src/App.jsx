import React from 'react';
import { motion } from 'framer-motion';
import BentoGrid from './components/BentoGrid';
import CodeEditor from './components/CodeEditor';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 blur-3xl"
          animate={{
            scale: [1, 0.8, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/5 blur-2xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-8 max-w-7xl">

        {/* Hero & Code Editor Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Side - Hero Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              className="relative z-50 text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{
                scale: 1.05,
                textShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
                transition: { duration: 0.3 }
              }}
            >
              Abhinav Vishwakarma
            </motion.h1>

            <motion.div
              className="flex flex-col md:flex-row items-center lg:items-start justify-center lg:justify-start gap-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 px-6 py-3 border border-orange-500/30">
                <span className="text-orange-300 font-semibold text-xl">Backend Developer</span>
              </div>

              <div className="flex items-center gap-4 text-gray-300">
                <span className="text-sm">📧 abhivishwkarmaa52@gmail.com</span>
                <span className="text-sm">📱 7355025752</span>
              </div>
            </motion.div>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto lg:mx-0 leading-relaxed mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Performance-driven Backend Engineer specializing in scalable API systems, <span className="text-blue-400 font-semibold">Clean Architecture</span>, and high-concurrency data processing. Skilled in{' '}
              <span className="text-blue-400 font-semibold">Go (Golang), Node.js, and PostgreSQL</span>. Focused on building secure, multi-tenant enterprise workflows and database optimization.

            </motion.p>

            {/* Tech Stack Banner - Moved here */}
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              {[
                'Go (Golang)', 'Node.js', 'PostgreSQL', 'MySQL', 'Redis',
                'Clean Architecture', 'REST APIs', 'WebSockets', 'AWS (S3/EC2)', 'Docker',
                'GitHub Actions', 'BullMQ', 'Nginx', 'Razorpay'
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm text-sm font-medium border border-white/20"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.05, duration: 0.3 }}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: 'rgba(59, 130, 246, 0.2)',
                    transition: { duration: 0.2 }
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Code Editor */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="w-full"
          >
            <div className="flex items-center justify-center lg:justify-between mb-6">
              <motion.h2
                className="text-3xl font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
              >
                <span className="text-green-400">Live Code</span> Editor
              </motion.h2>
              <div className="hidden lg:flex gap-2 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Live</span>
                </div>
              </div>
            </div>

            <CodeEditor />

            {/* Additional code stats */}
            <motion.div
              className="mt-4 flex justify-center lg:justify-start gap-6 text-xs text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2 }}
            >
            </motion.div>
          </motion.div>
        </div>

        {/* Full Width Bento Grid */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <motion.h2
            className="text-3xl font-bold mb-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
          >
            Core <span className="text-blue-400">Expertise</span>
          </motion.h2>
          <BentoGrid />
        </motion.div>

        {/* Projects Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.0 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured <span className="text-purple-400">Projects</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Clean URL Shortener (Go)",
                tech: "Go, PostgreSQL, Redis, Clean Architecture",
                description: "High-performance URL shortener following Clean Architecture. Implemented Base62 encoding and Redis caching, achieving sub-10ms redirection latency. Configured graceful shutdown for production resilience.",
                color: "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
                link: "https://github.com/your-username/go-shortener" // Placeholder github link
              },
              {
                title: "Ad Management Platform",
                tech: "Node.js, Express, MySQL, Composite Indexing",
                description: "Engineered a scalable multi-tenant platform handling 4M+ click records. Optimized data retrieval using composite indexing (tenant_id, created_at), eliminating full table scans for real-time reporting.",
                color: "from-purple-500/20 to-indigo-500/20 border-purple-500/30",
                link: "https://track-myads.com"
              },
              {
                title: "Maritime Inspection Workflow",
                tech: "Node.js, PostgreSQL, BullMQ, Swagger UI",
                description: "Built a mission-critical certification engine managing vessel flags and inspections. Implemented asynchronous document processing with BullMQ and automated Swagger documentation workflows.",
                color: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30",
                link: "https://grclass.com"
              },
              {
                title: "E-Commerce Backend",
                tech: "Node.js, Express, MongoDB, Payment Gateways",
                description: "Developed modular backend for checkouts and dashboards. Integrated idempotent payment gateways (Razorpay/Paytm) with secure webhook verification to prevent duplicate transactions.",
                color: "from-orange-500/20 to-amber-500/20 border-orange-500/30",
                link: "#"
              }
            ].map((project, index) => (
              <motion.div
                key={project.title}
                className={`bg-gradient-to-br ${project.color} backdrop-blur-sm p-6 border cursor-pointer group relative overflow-hidden`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2 + index * 0.2, duration: 0.6 }}
                onClick={() => project.link && project.link !== '#' && window.open(project.link, '_blank')}
                whileHover={{
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  {project.link && project.link !== '#' && (
                    <span className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      ↗
                    </span>
                  )}
                </div>
                <div className="text-sm text-blue-300 mb-3 font-mono">{project.tech}</div>
                <p className="text-gray-300 leading-relaxed">{project.description}</p>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education & Experience */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.6 }}
        >
          {/* Education */}
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-6 border border-purple-500/20">
            <h3 className="text-2xl font-bold mb-4 text-purple-300">🎓 Education</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-white">B.Tech in Computer Science & Engineering</h4>
                <p className="text-gray-300">Dr. Ambedkar Institute of Technology for Handicapped</p>
                <p className="text-sm text-gray-400">Kanpur, India</p>
                <p className="text-sm text-blue-300">2022 -- 2026 • CGPA: 7.4</p>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 p-6 border border-orange-500/20">
            <h3 className="text-2xl font-bold mb-4 text-orange-300">💼 Experience</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-white">Backend Developer</h4>
                <p className="text-sm text-gray-400">Sep 2025 -- Present</p>
                <p className="text-sm text-orange-300 mt-1">Remote</p>
                <ul className="text-sm text-gray-300 mt-2 space-y-1">
                  <li>• Architected Maritime Survey engine & automated PDF certification</li>
                  <li>• Optimized global date-time handling with strict IST layers</li>
                  <li>• Built asynchronous task queues using BullMQ and Redis</li>
                  <li>• Automated Swagger documentation & CI/CD workflows</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div >

      {/* Floating Elements */}
      < div className="fixed top-20 right-20 w-4 h-4 bg-blue-400 rounded-full animate-bounce opacity-60" ></div >
      <div className="fixed bottom-32 left-16 w-3 h-3 bg-purple-400 rounded-full animate-pulse opacity-60"></div>
      <div className="fixed top-1/3 left-8 w-2 h-2 bg-green-400 rounded-full animate-ping opacity-40"></div>
    </div >
  );
};

export default App;
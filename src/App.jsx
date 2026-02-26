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
              Backend Developer with hands-on experience designing scalable backend systems, secure APIs, and cloud deployments. Skilled in{' '}
              <span className="text-blue-400 font-semibold">Node.js, Express.js, REST API design</span>, and{' '}
              <span className="text-purple-400 font-semibold">database optimization</span>. Focused on backend performance, reliability, and security.

            </motion.p>

            {/* Tech Stack Banner - Moved here */}
            <motion.div 
              className="flex flex-wrap justify-center lg:justify-start gap-3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              {[
                'Node.js', 'Express.js', 'REST APIs', 'JavaScript (ES6+)', 'Python', 
                'MongoDB', 'MySQL', 'AWS S3', 'AWS EC2', 'Docker', 
                'Nginx', 'Git', 'Postman', 'Razorpay', 'Firebase'
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
                title: "E-Commerce Backend System",
                tech: "Node.js, Express, MongoDB, Razorpay, FCM",
                description: "Developed a modular backend including product, cart, order, and checkout services. Integrated Razorpay and Paytm gateways with webhook-based payment verification. Implemented Firebase Cloud Messaging (FCM) for real-time notifications.",
                color: "from-green-500/20 to-emerald-500/20 border-green-500/30"
              },
              {
                title: "Company Portfolio & Careers Platform",
                tech: "Node.js, Express, MySQL, Nodemailer",
                description: "Developed backend for a portfolio and careers platform supporting job listings and applications. Built admin APIs enabling management of jobs and applicants. Configured automated email notifications using Nodemailer.",
                color: "from-blue-500/20 to-indigo-500/20 border-blue-500/30"
              }
            ].map((project, index) => (
              <motion.div
                key={project.title}
                className={`bg-gradient-to-br ${project.color} backdrop-blur-sm p-6 border`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2 + index * 0.2, duration: 0.6 }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <div className="text-sm text-blue-300 mb-3 font-mono">{project.tech}</div>
                <p className="text-gray-300 leading-relaxed">{project.description}</p>
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
                <p className="text-sm text-blue-300">2020 -- 2024 • CGPA: 7.4</p>
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
                  <li>• Maintain backend services using Node.js and Express.js</li>
                  <li>• Address scalability challenges and reinforce security</li>
                  <li>• Develop REST APIs and integration layers</li>
                  <li>• Improve backend performance through debugging</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="fixed top-20 right-20 w-4 h-4 bg-blue-400 rounded-full animate-bounce opacity-60"></div>
      <div className="fixed bottom-32 left-16 w-3 h-3 bg-purple-400 rounded-full animate-pulse opacity-60"></div>
      <div className="fixed top-1/3 left-8 w-2 h-2 bg-green-400 rounded-full animate-ping opacity-40"></div>
    </div>
  );
};

export default App;
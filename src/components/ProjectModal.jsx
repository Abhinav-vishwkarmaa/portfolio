import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-sm overflow-y-auto"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    className="bg-gray-900 border border-white/10 w-full max-w-5xl rounded-2xl overflow-hidden relative"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 text-gray-400 hover:text-white z-10 bg-white/5 p-2 rounded-full backdrop-blur-md border border-white/10 transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div className="flex flex-col h-full max-h-[90vh]">
                        {/* Project Header Image/Banner */}
                        <div className={`h-48 md:h-64 bg-gradient-to-r ${project.color} relative overflow-hidden flex items-center justify-center`}>
                            <div className="absolute inset-0 opacity-20 flex items-center justify-center">
                                <div className="text-9xl font-bold text-white/10 select-none">CODE</div>
                            </div>
                            <motion.h2
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-4xl md:text-5xl font-bold text-white px-8 text-center"
                            >
                                {project.title}
                            </motion.h2>
                        </div>

                        <div className="flex-1 overflow-y-auto p-6 md:p-10 custom-scrollbar">
                            {/* Metrics Quick Look */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                                {project.metrics?.map((metric, i) => (
                                    <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-xl text-center">
                                        <div className="text-xs text-gray-400 uppercase tracking-widest mb-1">{metric.label}</div>
                                        <div className="text-xl md:text-2xl font-bold text-blue-400">{metric.value}</div>
                                    </div>
                                ))}
                            </div>

                            {/* Images Section */}
                            {project.images && project.images.length > 0 && (
                                <div className="mb-12">
                                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-cyan-500 rounded-full"></span>
                                        System Visuals
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {project.images.map((img, i) => (
                                            <motion.div
                                                key={i}
                                                whileHover={{ scale: 1.02 }}
                                                className="rounded-xl overflow-hidden border border-white/10 aspect-video relative group bg-white/5"
                                            >
                                                <img
                                                    src={img.url}
                                                    alt={img.caption}
                                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                                />
                                                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                                                    <p className="text-xs text-gray-300 font-medium">{img.caption}</p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Problem & Overview */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-blue-500 rounded-full"></span>
                                        Executive Overview
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed mb-6">
                                        {project.overview}
                                    </p>

                                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-red-500 rounded-full"></span>
                                        The Challenge
                                    </h3>
                                    <ul className="space-y-3">
                                        {project.challenges?.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                                                <span className="text-red-500 font-bold mt-0.5">/</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-green-500 rounded-full"></span>
                                        Architecture Workflow
                                    </h3>
                                    <div className="bg-black/40 border border-white/5 p-6 rounded-xl relative group">
                                        <div className="space-y-4 font-mono text-xs text-blue-300">
                                            {project.architecture_steps?.map((step, i) => (
                                                <div key={i} className="flex items-center gap-3">
                                                    <span className="text-gray-500">{i + 1}.</span>
                                                    <span className={step.highlight ? "text-purple-400 font-bold" : ""}>{step.text}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Technical Deep Dive */}
                            <div className="mb-12">
                                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                    <span className="w-1.5 h-6 bg-purple-500 rounded-full"></span>
                                    Engineering Deep Dive
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {project.deep_dives?.map((dive, i) => (
                                        <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-xl">
                                            <h4 className="font-bold text-white mb-3 text-lg">{dive.title}</h4>
                                            <p className="text-sm text-gray-400 leading-relaxed">
                                                {dive.content}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Code Snippets */}
                            <div className="mb-12">
                                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                    <span className="w-1.5 h-6 bg-yellow-500 rounded-full"></span>
                                    Implementation Detail
                                </h3>
                                <div className="bg-black/60 rounded-xl border border-white/10 overflow-hidden">
                                    <div className="flex bg-white/5 px-4 py-2 border-b border-white/10 justify-between items-center text-xs text-gray-400">
                                        <div className="flex gap-2">
                                            <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                            <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                        </div>
                                        <span>{project.code_snippet?.filename}</span>
                                    </div>
                                    <pre className="p-6 overflow-x-auto font-mono text-sm leading-relaxed text-blue-300">
                                        <code>{project.code_snippet?.code}</code>
                                    </pre>
                                </div>
                            </div>

                            {/* Results & Future */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                                <div className="bg-blue-500/5 border border-blue-500/20 p-6 rounded-xl">
                                    <h4 className="font-bold text-blue-300 mb-4 flex items-center gap-2 uppercase text-xs tracking-widest">
                                        Measurable Results
                                    </h4>
                                    <ul className="space-y-3">
                                        {project.results?.map((res, i) => (
                                            <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                                                <span className="text-blue-500">✓</span>
                                                {res}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-purple-500/5 border border-purple-500/20 p-6 rounded-xl">
                                    <h4 className="font-bold text-purple-300 mb-4 flex items-center gap-2 uppercase text-xs tracking-widest">
                                        v2.0 Roadmap
                                    </h4>
                                    <ul className="space-y-3">
                                        {project.roadmap?.map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                                                <span className="text-purple-500">→</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ProjectModal;

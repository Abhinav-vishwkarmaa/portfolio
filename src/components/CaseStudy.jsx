import React, { useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CaseStudy = ({ project, onClose }) => {
    useEffect(() => {
        if (project) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => document.body.style.overflow = 'unset';
    }, [project]);

    if (!project) return null;

    return (
        <AnimatePresence>
            {project && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[200] overflow-y-auto bg-background selection:bg-accent-primary/30"
                >
                    <div className="bg-orchestrator opacity-50" />
                    <div className="bg-grid-mesh opacity-20" />

                    {/* MODAL HUD */}
                    <nav className="sticky top-0 z-[210] border-b border-border-bright bg-background/80 backdrop-blur-xl p-6">
                        <div className="max-w-7xl mx-auto flex justify-between items-center">
                            <div className="flex items-center gap-6">
                                <button onClick={onClose} className="log-text hover:text-accent-primary transition-colors flex items-center gap-2">
                                    <span className="text-xl">←</span> EXIT_MODAL
                                </button>
                                <div className="h-4 w-[1px] bg-border-bright" />
                                <span className="tech-label opacity-40">{project.title}</span>
                            </div>
                            <div className="hidden md:flex gap-8 items-center">
                                <span className="log-text">ENGR_ID: 0x52</span>
                                <div className="status-glow" />
                            </div>
                        </div>
                    </nav>

                    {/* HERO */}
                    <header className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-12"
                        >
                            <div className="space-y-4">
                                <span className="tech-label text-accent-primary tracking-[0.5em]">System_Analysis_v4.2</span>
                                <h1 className="text-6xl md:text-9xl font-bold tracking-tighter uppercase leading-none">
                                    {project.title.replace('_', ' ')}
                                </h1>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-border-bright pt-12">
                                <div className="space-y-4">
                                    <span className="log-text opacity-40">TECHNOLOGIES</span>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.split(' // ').map(t => (
                                            <span key={t} className="px-3 py-1 border border-border-bright text-[10px] font-mono uppercase bg-white/5">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                {project.metrics.map((m, i) => (
                                    <div key={i} className="space-y-4">
                                        <span className="log-text opacity-40">{m.label}</span>
                                        <div className="text-4xl font-bold tracking-tighter text-accent-primary">{m.value}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </header>

                    {/* CONTENT BLOCKS */}
                    <main className="max-w-7xl mx-auto py-24 px-6 space-y-32">
                        {/* CHALLENGES */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                            <div className="space-y-12">
                                <h2 className="text-4xl font-bold tracking-tighter uppercase">The_Challenge</h2>
                                <div className="space-y-8">
                                    {project.challenges?.map((c, i) => (
                                        <div key={i} className="flex gap-6 group">
                                            <span className="log-text text-accent-primary opacity-20 group-hover:opacity-100 transition-opacity">0{i+1}</span>
                                            <p className="text-lg text-text-secondary font-mono leading-relaxed group-hover:text-text-primary transition-colors">
                                                {c}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="cyber-card p-2">
                                <img src={project.image} alt="Process Map" className="w-full h-auto rounded-lg grayscale hover:grayscale-0 transition-all duration-700" />
                            </div>
                        </div>

                        {/* RESULTS */}
                        <div className="bg-surface border-y border-border-bright py-24 -mx-6 px-6">
                            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
                                {project.results?.map((r, i) => (
                                    <div key={i} className="space-y-6">
                                        <div className="h-[1px] w-12 bg-accent-primary" />
                                        <h3 className="log-text">OUTCOME_NODE_0{i+1}</h3>
                                        <p className="text-2xl font-bold tracking-tighter text-text-primary leading-tight">
                                            {r}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="text-center py-24 space-y-12">
                            <h3 className="text-4xl font-bold tracking-tighter uppercase">Infrastructure Live</h3>
                            <a 
                                href={project.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-block px-12 py-5 bg-accent-primary text-background font-bold text-xs uppercase tracking-[0.5em] hover:scale-105 transition-transform"
                            >
                                ACCESS_PRODUCTION_SERVER ↗
                            </a>
                        </div>
                    </main>

                    {/* FOOTER */}
                    <footer className="p-12 text-center log-text opacity-20 border-t border-border-bright">
                        EOF // {project.title} // SESSION_ID_0x7A
                    </footer>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CaseStudy;

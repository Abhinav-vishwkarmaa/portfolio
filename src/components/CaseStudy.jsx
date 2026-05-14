import React, { useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CaseStudy = ({ project, onClose }) => {
    // Prevent body scroll when open
    useEffect(() => {
        if (project) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => document.body.style.overflow = 'unset';
    }, [project]);

    // Dynamically build sections to use ALL images provided
    const sections = useMemo(() => {
        if (!project || !project.images) return [];

        // We create a narrative by mapping technical content to available images
        const narratingSections = [
            {
                id: "entry",
                title: "Entry & Security",
                subtitle: "The Gateway",
                content: project.challenges.slice(0, 1),
                image: project.images.find(img => img.url.includes('login'))?.url || project.images[0].url
            },
            {
                id: "architecture",
                title: "System Backbone",
                subtitle: "Technical Architecture",
                content: project.architecture_steps.map(s => s.text),
                image: project.images.find(img => img.url.includes('architecture'))?.url || project.images[1]?.url,
                code: project.code_snippet,
            },
            {
                id: "caching",
                title: "Caching Layer",
                subtitle: "Distributed Resolution",
                content: project.deep_dives.filter(d => d.title.includes('Redis')).map(d => d.content),
                image: project.images.find(img => img.url.includes('redis'))?.url || project.images[2]?.url
            }
        ];

        // Add remaining images as a technical walkthrough
        const usedUrls = new Set(narratingSections.map(s => s.image));
        const remainingImages = project.images.filter(img => !usedUrls.has(img.url));

        remainingImages.forEach((img, idx) => {
            narratingSections.push({
                id: `visual-${idx}`,
                title: img.caption.split(':')[0] || "System Capability",
                subtitle: "Technical Performance",
                content: [img.caption.split(':')[1] || img.caption],
                image: img.url
            });
        });

        return narratingSections;
    }, [project]);

    if (!project) return null;

    return (
        <AnimatePresence>
            {project && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 z-[200] overflow-y-auto custom-scrollbar"
                    style={{ backgroundColor: '#0D1117' }}
                >
                    {/* Navigation Bar */}
                    <nav className="sticky top-0 z-[210] border-b border-border-subtle p-4" style={{ backgroundColor: 'rgba(13, 17, 23, 0.95)', backdropFilter: 'blur(10px)' }}>
                        <div className="max-w-7xl mx-auto flex justify-between items-center">
                            <div className="flex items-center gap-6">
                                <span className="text-xs font-mono text-text-secondary uppercase tracking-[0.2em]">Case Study // {project.title}</span>
                            </div>
                            <button
                                onClick={onClose}
                                className="text-text-secondary hover:text-text-primary text-xs font-bold uppercase tracking-widest flex items-center gap-2 border border-border-subtle px-4 py-2 rounded transition-all active:scale-95"
                            >
                                Close
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>
                    </nav>

                    {/* Hero Section */}
                    <header className="py-24 md:py-32 px-6 flex flex-col items-center text-center border-b border-border-subtle bg-[#161B22]/20">
                        <span className="text-accent-primary font-mono text-[10px] uppercase tracking-[0.5em] mb-6 block">Full System Walkthrough</span>
                        <h1 className="text-5xl md:text-8xl font-black text-text-primary max-w-5xl mb-12 tracking-tighter">
                            {project.title}
                        </h1>

                        {project.link && project.link !== "#" && (
                            <div className="mb-12">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary px-8 py-3 text-base flex items-center gap-2"
                                >
                                    Visit Project Site
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                </a>
                            </div>
                        )}

                        {/* Key Metrics Dashboard */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border-subtle border border-border-subtle max-w-5xl w-full rounded-xl overflow-hidden shadow-2xl">
                            {project.metrics.map((m, i) => (
                                <div key={i} className="bg-[#0D1117] p-8">
                                    <div className="text-[10px] text-text-secondary uppercase tracking-widest mb-2 font-mono">{m.label}</div>
                                    <div className="text-2xl font-bold text-accent-primary tracking-tight">{m.value}</div>
                                </div>
                            ))}
                        </div>
                    </header>

                    {/* Alternating Content Sections - Now using EVERY image */}
                    <div className="max-w-7xl mx-auto py-20 px-6 space-y-32">
                        {sections.map((section, idx) => (
                            <article key={section.id} className={`flex flex-col lg:flex-row gap-20 items-start ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>

                                {/* Text Side */}
                                <div className="w-full lg:w-1/2 space-y-10">
                                    <div className="space-y-4">
                                        <span className="text-accent-secondary font-mono text-xs uppercase tracking-[0.3em] block">{section.subtitle}</span>
                                        <h2 className="text-4xl font-bold text-text-primary tracking-tight">{section.title}</h2>
                                    </div>

                                    <div className="space-y-8">
                                        {section.content.map((item, i) => (
                                            <div key={i} className="flex gap-6 group">
                                                <div className="text-sm font-mono text-text-secondary opacity-20 group-hover:opacity-100 transition-opacity">0{i + 1}</div>
                                                <p className="text-lg text-text-secondary leading-relaxed font-light">
                                                    {item}
                                                </p>
                                            </div>
                                        ))}
                                    </div>

                                    {section.code && (
                                        <div className="bg-[#010409] border border-border-subtle rounded-lg overflow-hidden shadow-2xl mt-12">
                                            <div className="px-5 py-3 border-b border-border-subtle bg-surface/50 text-[10px] text-text-secondary font-mono flex justify-between items-center opacity-80">
                                                <div className="flex items-center gap-2">
                                                    <span className="w-2 h-2 rounded-full bg-accent-secondary/50" />
                                                    <span>{section.code.filename}</span>
                                                </div>
                                                <span className="tracking-widest opacity-50">PRODUCTION_READY</span>
                                            </div>
                                            <pre className="p-8 overflow-x-auto text-[13px] text-accent-primary/90 font-mono leading-relaxed custom-scrollbar">
                                                {section.code.code}
                                            </pre>
                                        </div>
                                    )}
                                </div>

                                {/* Image Visualization Side */}
                                <div className="w-full lg:w-1/2 sticky top-32">
                                    <div className="card-base p-1 bg-[#161B22] border border-border-subtle rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] group overflow-hidden">
                                        <div className="bg-[#0D1117] rounded-lg overflow-hidden flex items-center justify-center">
                                            <img
                                                src={section.image}
                                                alt={section.title}
                                                className="w-full h-auto object-contain opacity-90 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-105"
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-4 px-2 flex justify-between items-center">
                                        <p className="text-[10px] font-mono text-text-secondary uppercase tracking-widest opacity-40">Section Module // {idx + 1} of {sections.length}</p>
                                        <div className="h-px flex-1 mx-4 bg-border-subtle opacity-20" />
                                        <span className="text-[10px] font-mono text-accent-primary uppercase tracking-widest">Active</span>
                                    </div>
                                </div>

                            </article>
                        ))}
                    </div>

                    {/* Final Results & Metrics */}
                    <section className="py-32 border-t border-border-subtle bg-[#161B22]/10">
                        <div className="max-w-4xl mx-auto px-6 text-center">
                            <h2 className="text-3xl font-bold text-text-primary mb-12">Measurable Outcomes</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                                {project.results.map((result, i) => (
                                    <div key={i} className="card-base p-6 border-l-2 border-l-accent-secondary">
                                        <p className="text-text-secondary text-sm leading-relaxed">{result}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Conclusion */}
                    <footer className="py-48 px-6 bg-[#0D1117] border-t border-border-subtle text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-accent-primary/5 blur-[120px] rounded-full -translate-y-1/2" />
                        <div className="relative z-10">
                            <h3 className="text-4xl md:text-6xl font-black text-text-primary mb-12 tracking-tighter">Ready for the next technical challenge.</h3>
                            <button
                                onClick={onClose}
                                className="bg-accent-primary text-background font-bold px-12 py-4 rounded-md hover:opacity-90 transition-all active:scale-95 shadow-xl uppercase tracking-widest text-sm"
                            >
                                Return to Portfolio
                            </button>
                        </div>
                    </footer>

                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CaseStudy;

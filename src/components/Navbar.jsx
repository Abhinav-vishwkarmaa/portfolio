import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { FluidBrandLogo } from './Icons';
import { RESUME_DATA } from '../data/resumeData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'credentials', 'contact'];
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Credentials', href: '#credentials' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-midnight-950/85 backdrop-blur-xl border-b border-white/5 py-3.5 shadow-2xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        
        {/* Left: Minimalist Solar Logo */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <FluidBrandLogo className="w-8 h-8 group-hover:scale-110 transition-transform" />
          <span className="text-base font-bold tracking-tight text-white group-hover:text-red-400 transition-colors">
            Abhinav<span className="text-red-500 font-black">.</span>
          </span>
        </a>

        {/* Center / Right: Nav links matching reference */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs tracking-wide transition-colors ${
                  isActive ? 'text-red-400 font-bold drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]' : 'text-slate-300 hover:text-white font-semibold'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#contact"
            className="px-4 py-1.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-red-600 to-orange-600 border border-white/15 hover:border-orange-400 hover:shadow-[0_0_20px_rgba(239,68,68,0.45)] hover:scale-105 transition-all"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-white"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-red-400" /> : <Menu className="w-6 h-6 text-red-400" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#080405]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-slate-300 hover:text-red-400 py-1"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center py-2.5 rounded-full text-xs font-bold text-white bg-white/5 border border-red-500/30 hover:bg-red-500/10"
            >
              Let's Talk
            </a>
            <a
              href={RESUME_DATA.personal.resumeUrl}
              download={RESUME_DATA.personal.resumeDownloadName}
              className="flex items-center justify-center py-2.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-red-600 to-orange-600 shadow-[0_0_15px_rgba(239,68,68,0.4)]"
            >
              Download CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

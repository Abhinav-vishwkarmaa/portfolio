import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import CertificationsEducation from './components/CertificationsEducation';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-midnight-950 text-slate-100 font-sans selection:bg-red-500 selection:text-white">
      <div className="relative z-10">
        <Navbar />

        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <CertificationsEducation />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}

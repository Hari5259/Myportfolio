import React, { useState, useEffect } from 'react';
import Canvas3D from './components/Canvas3D';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { Menu, X, ArrowUp } from 'lucide-react';
import './App.css';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* 3D background canvas */}
      <Canvas3D />

      {/* Decorative Glow Orbs */}
      <div className="glow-orb glow-orb-1"></div>
      <div className="glow-orb glow-orb-2"></div>

      {/* Sticky Header Nav */}
      <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
        <div className="header-container">
          <a href="#hero" className="logo-name">
            Hariharasudhan S <span className="logo-dot">.</span>
          </a>

          <nav className="desktop-nav">
            {navLinks.map((link, idx) => (
              <a key={idx} href={link.href} className="nav-link">
                {link.name}
              </a>
            ))}
          </nav>

          <button 
            className="mobile-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <nav className="mobile-nav animate-fade-in">
            {navLinks.map((link, idx) => (
              <a 
                key={idx} 
                href={link.href} 
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* Main Sections */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <p className="copyright">
            © {new Date().getFullYear()} Hariharasudhan S. All rights reserved.
          </p>
          <p className="footer-built">
            Built with React • Three.js • CSS Modules
          </p>
        </div>
      </footer>

      {/* Scroll to Top button */}
      {showScrollTop && (
        <button 
          className="scroll-top-btn animate-fade-in"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </>
  );
}

export default App;

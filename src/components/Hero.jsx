import React from 'react';
import { Mail, Phone, ArrowDown } from 'lucide-react';
import BoyCanvas from './BoyCanvas';
import './Hero.css';

const GithubIcon = ({ size = 22 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

const LinkedinIcon = ({ size = 22 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-container container">
        <div className="hero-text-side">
          <div className="badge animate-fade-in">MERN STACK & AI/GEN-AI DEVELOPER</div>
          <h1 className="hero-title animate-title">
            HARIHARASUDHAN S
          </h1>
          <p className="hero-subtitle animate-subtitle">
            I build high-performance full-stack web applications and offline intelligent agents with modern 3D experiences.
          </p>
          
          <div className="social-links animate-fade-in">
            <a href="https://github.com/Hari5259" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
              <GithubIcon size={22} />
            </a>
            <a href="https://linkedin.com/in/hariharasudhan-s-218b53308" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
              <LinkedinIcon size={22} />
            </a>
            <a href="mailto:shariharasudhan@gmail.com" className="social-icon" aria-label="Email">
              <Mail size={22} />
            </a>
            <a href="tel:+919003421746" className="social-icon" aria-label="Phone">
              <Phone size={22} />
            </a>
          </div>
          
          <div className="hero-ctas animate-fade-in">
            <a href="#projects" className="cta-button primary-cta">View My Work</a>
            <a href="#contact" className="cta-button secondary-cta">Get In Touch</a>
          </div>
        </div>
        
        <div className="hero-3d-side animate-fade-in">
          <BoyCanvas />
        </div>
      </div>
      
      <div className="scroll-indicator">
        <span>Scroll Down</span>
        <ArrowDown size={16} className="arrow-bounce" />
      </div>
    </section>
  );
};

export default Hero;

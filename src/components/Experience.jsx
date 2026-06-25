import React from 'react';
import GlassCard from './GlassCard';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';
import mernExperienceImg from '../assets/mern_experience.png';
import frontendExperienceImg from '../assets/frontend_experience.png';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      role: 'MERN Stack Developer',
      company: 'Aptimark Solutions',
      period: '01/03/2026 – 20/06/2026',
      image: mernExperienceImg,
      bullets: [
        'Identified and fixed high-impact bugs, improving core frontend & backend performance.',
        'Collaborated closely with designers and senior developers to build refined UI layouts.',
        'Ensured highly responsive, mobile-first, and user-centric web designs.'
      ]
    },
    {
      role: 'Frontend Developer',
      company: 'cluBITS solutions',
      period: '06/06/2025 – 20/06/2025',
      image: frontendExperienceImg,
      bullets: [
        'Ensured full cross-browser compatibility and optimized mobile responsiveness.',
        'Integrated third-party APIs and managed complex state data rendering in the UI.',
        'Crafted modern interfaces to boost the overall user experience and usability metrics.',
        'Assisted the engineering team in system testing and deployment processes.'
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section container">
      <h2 className="section-title">Work Experience</h2>
      
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot">
              <Briefcase size={16} />
            </div>
            
            <div className="timeline-content-side">
              <span className="timeline-date-badge">
                <Calendar size={14} /> {exp.period}
              </span>
              
              <GlassCard className="experience-card" glowOnHover={true}>
                <h3 className="experience-role">{exp.role}</h3>
                <h4 className="experience-company">{exp.company}</h4>
                
                <ul className="experience-bullets">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="experience-bullet-item">
                      <CheckCircle2 size={16} className="bullet-check-icon" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </div>

            <div className="timeline-image-side">
              <GlassCard className="timeline-image-card" glowOnHover={true}>
                <img 
                  src={exp.image} 
                  alt={`${exp.role} Illustration`} 
                  className={`experience-showcase-image image-${exp.role.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} 
                />
                <div className="image-overlay-glow"></div>
              </GlassCard>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

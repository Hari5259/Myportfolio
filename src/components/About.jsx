import React from 'react';
import GlassCard from './GlassCard';
import { Award, BookOpen, Brain, Code, Cpu, Database, Terminal } from 'lucide-react';
import './About.css';

const About = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code size={20} className="skill-category-icon" />,
      skills: ['Java', 'C', 'Python', 'JavaScript']
    },
    {
      title: 'Full Stack & MERN',
      icon: <Terminal size={20} className="skill-category-icon" />,
      skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'HTML', 'CSS']
    },
    {
      title: 'Databases',
      icon: <Database size={20} className="skill-category-icon" />,
      skills: ['MySQL', 'PostgreSQL', 'MongoDB Atlas']
    },
    {
      title: 'AI & Generative AI',
      icon: <Cpu size={20} className="skill-category-icon" />,
      skills: ['Large Language Models (LLMs)', 'Retrieval-Augmented Generation (RAG)']
    },
    {
      title: 'Developer Tools',
      icon: <Brain size={20} className="skill-category-icon" />,
      skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'Postman', 'Ollama']
    }
  ];

  const education = [
    {
      degree: 'BE Computer Science and Engineering',
      institution: 'Dr. N.G.P. Institute of Technology',
      period: '2023 – 2027',
      grade: 'Grade - 7.7 CGPA (Current)'
    },
    {
      degree: 'HSC (High School)',
      institution: 'Vagini Vidyalaya Matric Hr Sec School',
      period: '2022 – 2023',
      grade: 'Grade - 87%',
      location: 'Coimbatore'
    }
  ];

  return (
    <section id="about" className="about-section container">
      <h2 className="section-title">About & Skills</h2>
      
      <div className="about-grid">
        <div className="bio-container">
          <GlassCard className="bio-card">
            <h3 className="card-title">Who I Am</h3>
            <p className="bio-text">
              I am a passionate Computer Science and Engineering student at Dr. N.G.P. Institute of Technology. 
              My expertise lies in full-stack web development (MERN) and building offline intelligent LLM applications.
              I enjoy solving complex problems, building scalable web structures, and crafting premium, responsive interfaces.
            </p>
            <div className="interests-tags">
              <span className="interest-tag">Full Stack Development</span>
              <span className="interest-tag">Artificial Intelligence</span>
              <span className="interest-tag">Software Engineering</span>
            </div>
          </GlassCard>

          <GlassCard className="education-card">
            <h3 className="card-title flex-align">
              <BookOpen size={22} className="title-icon" /> Education
            </h3>
            <div className="education-timeline">
              {education.map((edu, index) => (
                <div key={index} className="edu-item">
                  <div className="edu-header">
                    <span className="edu-period">{edu.period}</span>
                    <h4 className="edu-degree">{edu.degree}</h4>
                  </div>
                  <p className="edu-inst">{edu.institution}</p>
                  <p className="edu-grade">{edu.grade} {edu.location && `| ${edu.location}`}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        <div className="skills-container">
          {skillCategories.map((category, index) => (
            <GlassCard key={index} className="skill-card">
              <h4 className="skill-category-title">
                {category.icon} {category.title}
              </h4>
              <div className="skill-tags">
                {category.skills.map((skill, sIndex) => (
                  <span key={sIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

import React, { useEffect, useState } from 'react';
import GlassCard from './GlassCard';
import { ExternalLink, Star, GitFork, BookOpen, Layers } from 'lucide-react';
import './Projects.css';

const GithubIcon = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const featuredProjects = [
    {
      title: 'MediScan',
      type: 'MERN Stack Health Assistant',
      period: '04/2026 – Present',
      description: 'A full-stack MERN healthcare platform integrating AI-based medical assistance tools.',
      bullets: [
        'Built full-stack healthcare workspace with AI medical query assistance.',
        'Developed fully responsive UI with secure JWT token authentication.',
        'Integrated MongoDB Atlas for scalable cloud data management and RBAC.'
      ],
      tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'AI APIs'],
      githubLink: 'https://github.com/Hari5259/MediScan'
    },
    {
      title: 'Atlas AI',
      type: 'Offline Learning Assistant',
      period: '01/2025 – 04/2025',
      description: 'A privacy-first intelligent desktop assistant running fully offline local LLM models.',
      bullets: [
        'Built privacy-focused learning assistant with offline Ollama integration and RAG.',
        'Developed custom semantic knowledge base with 190+ highly curated entries.',
        'Engineered responsive interface handling fast offline inference.'
      ],
      tech: ['HTML', 'CSS', 'JavaScript', 'Python', 'RAG', 'Ollama', 'REST APIs'],
      githubLink: 'https://github.com/Hari5259/Atlas-AI'
    },
    {
      title: 'EduQuity',
      type: 'AI Education Platform',
      period: '02/2024 – 03/2024',
      description: 'A scalable and collaborative academic platform with Gemini AI tutoring capabilities.',
      bullets: [
        'Designed role-based dashboard control and classroom automation workflows.',
        'Integrated Gemini AI for real-time tutoring feedback and learning guides.',
        'Built detailed visual analytics and report generation features.'
      ],
      tech: ['Next.js', 'TypeScript', 'Node.js', 'Gemini AI', 'Tailwind CSS'],
      githubLink: 'https://github.com/Hari5259/EduQuity'
    },
    {
      title: 'AgentForge',
      type: 'Local LLM Agent Builder',
      period: '11/2023 – 12/2023',
      description: 'A orchestrator platform to spin up custom autonomous agents running with local LLMs.',
      bullets: [
        'Built agent builder workspace featuring persistent session and context memories.',
        'Implemented agent tool orchestration and custom workflow layouts.',
        'Integrated guardrails for safe, non-hallucinatory code and task execution.'
      ],
      tech: ['Python', 'Ollama', 'RAG', 'LLMs', 'GitHub API'],
      githubLink: 'https://github.com/Hari5259/AgentForge'
    }
  ];

  useEffect(() => {
    fetch('https://api.github.com/users/Hari5259/repos?sort=updated&per_page=6')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch repositories.');
        return res.json();
      })
      .then(data => {
        // Filter out repos that might be the main portfolio if we only want others
        const filtered = data.filter(repo => repo.name.toLowerCase() !== 'myportfolio');
        setRepos(filtered);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <section id="projects" className="projects-section container">
      <h2 className="section-title">Projects</h2>
      
      <div className="featured-header">
        <Layers size={20} className="header-icon" />
        <h3>Featured Creations</h3>
      </div>

      <div className="featured-grid">
        {featuredProjects.map((project, idx) => (
          <GlassCard key={idx} className="project-card">
            <div className="project-card-header">
              <span className="project-date">{project.period}</span>
              <h4 className="project-title">{project.title}</h4>
              <span className="project-type">{project.type}</span>
            </div>
            
            <p className="project-desc">{project.description}</p>
            
            <ul className="project-bullets">
              {project.bullets.map((bullet, bIdx) => (
                <li key={bIdx}>{bullet}</li>
              ))}
            </ul>

            <div className="project-tech">
              {project.tech.map((t, tIdx) => (
                <span key={tIdx} className="tech-tag">{t}</span>
              ))}
            </div>

            <div className="project-links">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                <GithubIcon size={18} /> Source Code
              </a>
            </div>
          </GlassCard>
        ))}
      </div>

      <div className="github-section">
        <div className="featured-header">
          <GithubIcon size={20} className="header-icon" />
          <h3>Active GitHub Repositories</h3>
        </div>

        {loading ? (
          <div className="loader">Loading latest repositories...</div>
        ) : error ? (
          <div className="repo-error">Could not load repositories from GitHub. <a href="https://github.com/Hari5259" target="_blank" rel="noopener noreferrer">Visit GitHub profile</a></div>
        ) : (
          <div className="repo-grid">
            {repos.map(repo => (
              <GlassCard key={repo.id} className="repo-card" glowOnHover={true}>
                <div className="repo-content">
                  <h4 className="repo-name">{repo.name}</h4>
                  <p className="repo-description">{repo.description || 'No description provided.'}</p>
                  
                  <div className="repo-stats-row">
                    {repo.language && (
                      <span className="repo-lang-tag">
                        <span className="lang-indicator"></span>
                        {repo.language}
                      </span>
                    )}
                    <span className="repo-stat">
                      <Star size={14} /> {repo.stargazers_count}
                    </span>
                    <span className="repo-stat">
                      <GitFork size={14} /> {repo.forks_count}
                    </span>
                  </div>

                  <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="repo-link-btn">
                    Repository <ExternalLink size={14} />
                  </a>
                </div>
              </GlassCard>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;

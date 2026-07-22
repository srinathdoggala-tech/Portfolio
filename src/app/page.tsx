"use client";

import { useState, useEffect } from "react";
import ParticleCanvas from "@/components/ParticleCanvas";

const typewriterRoles = [
  "AI/ML Models & Multi-Agent Systems",
  "Autonomous LLM Assistants",
  "Full-Stack Web Applications",
  "Computer Vision Pipelines",
];

export default function Home() {
  const [roleText, setRoleText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<string | null>(null);

  // Typewriter effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentRole = typewriterRoles[roleIndex];

    const tick = () => {
      if (isDeleting) {
        setRoleText((prev) => prev.substring(0, prev.length - 1));
      } else {
        setRoleText((prev) => currentRole.substring(0, prev.length + 1));
      }

      let speed = isDeleting ? 40 : 80;

      if (!isDeleting && roleText === currentRole) {
        speed = 2200;
        setIsDeleting(true);
      } else if (isDeleting && roleText === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % typewriterRoles.length);
        speed = 400;
      }

      timer = setTimeout(tick, speed);
    };

    timer = setTimeout(tick, 100);
    return () => clearTimeout(timer);
  }, [roleText, isDeleting, roleIndex]);

  // Navbar background blur on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("Thank you! Your message has been sent successfully.");
    setTimeout(() => setFormStatus(null), 5000);
  };

  return (
    <>
      {/* Background Particle Canvas */}
      <ParticleCanvas />

      {/* Navbar */}
      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          <a href="#" className="logo">
            <span className="logo-accent">&lt;</span>Srinath<span className="logo-accent">.tech /&gt;</span>
          </a>
          <nav className={`nav-links ${mobileNavOpen ? "active" : ""}`}>
            <a href="#about" className="nav-link" onClick={() => setMobileNavOpen(false)}>About</a>
            <a href="#skills" className="nav-link" onClick={() => setMobileNavOpen(false)}>Skills</a>
            <a href="#experience" className="nav-link" onClick={() => setMobileNavOpen(false)}>Experience</a>
            <a href="#projects" className="nav-link" onClick={() => setMobileNavOpen(false)}>Projects</a>
            <a href="#contact" className="nav-link" onClick={() => setMobileNavOpen(false)}>Contact</a>
          </nav>
          <button
            className={`mobile-toggle ${mobileNavOpen ? "active" : ""}`}
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            aria-label="Toggle Menu"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="badge-container reveal">
            <span className="hero-badge">AI/ML & Software Developer</span>
          </div>
          <h1 className="hero-title reveal">
            Hi, I'm <span className="gradient-text">Srinath Doggala</span>
          </h1>
          <h2 className="hero-subtitle reveal">
            I build <span>{roleText}</span>
            <span className="cursor">|</span>
          </h2>
          <p className="hero-desc reveal">
            CSE-AIML Student at Chandigarh University. Passionate about Artificial Intelligence & Machine learning, software development, deep learning orchestration, and building autonomous multi-agent AI platforms.
          </p>
          <div className="hero-ctas reveal">
            <a href="#projects" className="btn btn-primary">Explore Projects</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
        <div className="scroll-down-container">
          <a href="#about" className="scroll-down" aria-label="Scroll Down">
            <div className="mouse">
              <div className="wheel"></div>
            </div>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="section-container">
          <h2 className="section-title reveal"><span className="gradient-text">About Me</span></h2>
          <div className="about-grid">
            {/* Left Column: Premium Portrait Card */}
            <div className="about-image-card glass-card reveal">
              <div className="profile-image-container">
                <img src="/profile.png" alt="Srinath Doggala" className="profile-img" />
                <div className="profile-glow"></div>
              </div>
            </div>

            {/* Right Column: Unified Content Card */}
            <div className="about-content-card glass-card reveal">
              <div className="about-bio">
                <h3>My Background</h3>
                <p>
                  Hi, I'm <strong>Srinath Doggala</strong>. I'm a <strong>Software Engineer and AI Developer</strong> focused on building intelligent applications, multi-agent systems, and scalable full-stack products.
                </p>
                <p>
                  My expertise spans across <strong>Python, FastAPI, Next.js/React, TypeScript, LangChain, PostgreSQL, and Redis</strong>. I specialize in designing autonomous multi-agent systems, developing real-time communication backends, and building interactive web platforms.
                </p>
                <p>
                  Currently pursuing a <strong>B.E. in Computer Science Engineering (AI & ML)</strong> at <strong>Chandigarh University</strong>, I am actively seeking software engineering and AI development opportunities to build impactful, production-ready systems.
                </p>
              </div>

              <div className="about-facts-section">
                <h3>Quick Facts</h3>
                <div className="facts-grid">
                  <div className="fact-item">
                    <div className="fact-icon">🎓</div>
                    <div className="fact-text">
                      <strong>Education</strong>
                      <span>B.E. CSE-AIML, Chandigarh University</span>
                    </div>
                  </div>
                  <div className="fact-item">
                    <div className="fact-icon">📍</div>
                    <div className="fact-text">
                      <strong>Location</strong>
                      <span>Gharuan, Punjab, India</span>
                    </div>
                  </div>
                  <div className="fact-item">
                    <div className="fact-icon">🧠</div>
                    <div className="fact-text">
                      <strong>Focus Areas</strong>
                      <span>Generative AI, Multi-Agent Orchestration, CV</span>
                    </div>
                  </div>
                  <div className="fact-item">
                    <div className="fact-icon">💻</div>
                    <div className="fact-text">
                      <strong>Core Stack</strong>
                      <span>Python, FastAPI, Next.js, Redis, PostgreSQL</span>
                    </div>
                  </div>
                </div>

                <div className="about-socials">
                  <a href="https://github.com/srinathdoggala-tech" target="_blank" rel="noopener noreferrer" className="social-icon-btn" title="GitHub">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  </a>
                  <a href="https://www.linkedin.com/in/srinath-doggala-081083286/" target="_blank" rel="noopener noreferrer" className="social-icon-btn" title="LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills-section">
        <div className="section-container">
          <h2 className="section-title reveal"><span className="gradient-text">Skills & Technologies</span></h2>
          <div className="skills-grid">
            
            {/* Skill Category: AI/ML */}
            <div className="skills-card glass-card reveal">
              <div className="skills-header">
                <div className="skill-icon-glow purple"></div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="skill-main-icon"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path><path d="M2 12h20"></path></svg>
                <h3>Artificial Intelligence & ML</h3>
              </div>
              <ul className="skills-list">
                <li>
                  <div className="skill-info"><span>Deep Learning (TensorFlow/Keras)</span><span>85%</span></div>
                  <div className="skill-progress-bar"><div className="skill-progress purple-glow" style={{ width: "85%" }}></div></div>
                </li>
                <li>
                  <div className="skill-info"><span>LLM Orchestration (LangGraph, OpenAI, Gemini)</span><span>90%</span></div>
                  <div className="skill-progress-bar"><div className="skill-progress purple-glow" style={{ width: "90%" }}></div></div>
                </li>
                <li>
                  <div className="skill-info"><span>Computer Vision (MobileNetV2, Transfer Learning)</span><span>80%</span></div>
                  <div className="skill-progress-bar"><div className="skill-progress purple-glow" style={{ width: "80%" }}></div></div>
                </li>
                <li>
                  <div className="skill-info"><span>RAG (Retrieval-Augmented Generation) & NLP</span><span>88%</span></div>
                  <div className="skill-progress-bar"><div className="skill-progress purple-glow" style={{ width: "88%" }}></div></div>
                </li>
              </ul>
            </div>

            {/* Skill Category: Backend Development */}
            <div className="skills-card glass-card reveal">
              <div className="skills-header">
                <div className="skill-icon-glow blue"></div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="skill-main-icon"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
                <h3>Backend Engineering</h3>
              </div>
              <ul className="skills-list">
                <li>
                  <div className="skill-info"><span>Python (FastAPI, Django REST Framework)</span><span>92%</span></div>
                  <div className="skill-progress-bar"><div className="skill-progress blue-glow" style={{ width: "92%" }}></div></div>
                </li>
                <li>
                  <div className="skill-info"><span>Java Development</span><span>78%</span></div>
                  <div className="skill-progress-bar"><div className="skill-progress blue-glow" style={{ width: "78%" }}></div></div>
                </li>
                <li>
                  <div className="skill-info"><span>SQL & Relational Databases (PostgreSQL, SQLite)</span><span>82%</span></div>
                  <div className="skill-progress-bar"><div className="skill-progress blue-glow" style={{ width: "82%" }}></div></div>
                </li>
                <li>
                  <div className="skill-info"><span>API Design & Web Search Integration</span><span>88%</span></div>
                  <div className="skill-progress-bar"><div className="skill-progress blue-glow" style={{ width: "88%" }}></div></div>
                </li>
              </ul>
            </div>

            {/* Skill Category: Frontend & Web Systems */}
            <div className="skills-card glass-card reveal">
              <div className="skills-header">
                <div className="skill-icon-glow teal"></div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="skill-main-icon"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                <h3>Frontend & Modern Web</h3>
              </div>
              <ul className="skills-list">
                <li>
                  <div className="skill-info"><span>Next.js & React</span><span>86%</span></div>
                  <div className="skill-progress-bar"><div className="skill-progress teal-glow" style={{ width: "86%" }}></div></div>
                </li>
                <li>
                  <div className="skill-info"><span>TypeScript / JavaScript ES6+</span><span>84%</span></div>
                  <div className="skill-progress-bar"><div className="skill-progress teal-glow" style={{ width: "84%" }}></div></div>
                </li>
                <li>
                  <div className="skill-info"><span>HTML5 & CSS3 (Flexbox/Grid, Animations)</span><span>90%</span></div>
                  <div className="skill-progress-bar"><div className="skill-progress teal-glow" style={{ width: "90%" }}></div></div>
                </li>
                <li>
                  <div className="skill-info"><span>State Management & Dynamic UI Layouts</span><span>80%</span></div>
                  <div className="skill-progress-bar"><div className="skill-progress teal-glow" style={{ width: "80%" }}></div></div>
                </li>
              </ul>
            </div>

            {/* Skill Category: Devops & Developer Tools */}
            <div className="skills-card glass-card reveal">
              <div className="skills-header">
                <div className="skill-icon-glow orange"></div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="skill-main-icon"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                <h3>DevOps & Developer Tools</h3>
              </div>
              <ul className="skills-list">
                <li>
                  <div className="skill-info"><span>Git, GitHub & CI/CD Pipelines</span><span>88%</span></div>
                  <div className="skill-progress-bar"><div className="skill-progress orange-glow" style={{ width: "88%" }}></div></div>
                </li>
                <li>
                  <div className="skill-info"><span>Docker Containerization</span><span>80%</span></div>
                  <div className="skill-progress-bar"><div className="skill-progress orange-glow" style={{ width: "80%" }}></div></div>
                </li>
                <li>
                  <div className="skill-info"><span>Vercel & Netlify Deployment</span><span>90%</span></div>
                  <div className="skill-progress-bar"><div className="skill-progress orange-glow" style={{ width: "90%" }}></div></div>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section experience-section">
        <div className="section-container">
          <h2 className="section-title reveal"><span className="gradient-text">Work Experience</span></h2>
          
          <div className="experience-timeline">
            <div className="experience-item glass-card reveal">
              <div className="experience-badge-container">
                <span className="experience-badge">Founding Engineering Team</span>
              </div>
              <div className="experience-header-block">
                <div className="exp-title-org">
                  <h3>Founding AI Full Stack Engineer Intern</h3>
                  <h4 className="company-name"><span className="gradient-text">Sreeva AI</span></h4>
                </div>
                <div className="exp-meta">
                  <span className="exp-date">May 2026 – Present</span>
                  <span className="exp-type">Remote</span>
                </div>
              </div>
              
              <p className="experience-desc">
                Contribute to the development of Sreeva AI's technical interview platform, automating candidate assessments through conversational AI, real-time evaluation, and intelligent reporting. Build scalable full-stack features and production-ready AI workflows.
              </p>

              <div className="experience-details-grid">
                <div className="experience-col">
                  <h4>Key Contributions & Projects</h4>
                  <ul>
                    <li><strong>AI-Powered Interview Platform:</strong> Built and enhanced dynamic interview experiences using Large Language Models (LLMs) for conversational technical assessments and intelligent evaluations.</li>
                    <li><strong>Agentic AI &amp; LLM Integration:</strong> Designed and implemented production-ready workflows using LangChain, OpenAI, Gemini, and Claude APIs, including prompt engineering, multi-agent frameworks, and RAG.</li>
                    <li><strong>Full Stack &amp; Backend Engineering:</strong> Developed responsive interfaces in React/Next.js and scalable backend systems using FastAPI, PostgreSQL, Redis, and asynchronous pipelines.</li>
                    <li><strong>Collaboration &amp; Deployments:</strong> Worked in an Agile environment with designers and engineers on feature design, code reviews, and production deployments.</li>
                  </ul>
                </div>
              </div>

              <div className="experience-tech-tags">
                <span className="tag">React.js</span>
                <span className="tag">Next.js</span>
                <span className="tag">FastAPI</span>
                <span className="tag">Python</span>
                <span className="tag">TypeScript</span>
                <span className="tag">PostgreSQL</span>
                <span className="tag">Redis</span>
                <span className="tag">LangChain</span>
                <span className="tag">OpenAI</span>
                <span className="tag">Gemini</span>
                <span className="tag">Claude</span>
                <span className="tag">Docker</span>
                <span className="tag">AWS</span>
                <span className="tag">GitHub</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects-section">
        <div className="section-container">
          <h2 className="section-title reveal"><span className="gradient-text">Top Projects</span></h2>
          <p className="section-subtitle reveal">A selection of my best architectural designs, AI platforms, and deep learning implementations.</p>
          
          <div className="projects-grid">
            
            {/* Project 1: TalentLens AI */}
            <div className="project-card glass-card reveal">
              <div className="project-image-placeholder purple-gradient">
                <span className="project-icon">🧠</span>
                <div className="project-glow"></div>
              </div>
              <div className="project-content">
                <div className="project-tags">
                  <span className="tag">Next.js</span>
                  <span className="tag">FastAPI</span>
                  <span className="tag">GPT-4o</span>
                  <span className="tag">PostgreSQL</span>
                </div>
                <h3 className="project-title">TalentLens AI</h3>
                <p className="project-desc">
                  AI-powered Resume Intelligence & Career Platform. Processes documents (PDF/DOCX), evaluates resumes against ATS guidelines, runs recruiter simulations, detects skill gaps, and synthesizes step-by-step career roadmaps.
                </p>
                <div className="project-links">
                  <a href="https://github.com/srinathdoggala-tech/TalentLens" target="_blank" rel="noopener noreferrer" className="project-link-btn src">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    <span>Code</span>
                  </a>
                  <a href="https://talent-lens-4z4i.vercel.app" target="_blank" rel="noopener noreferrer" className="project-link-btn live">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2: ReviewGPT */}
            <div className="project-card glass-card reveal">
              <div className="project-image-placeholder blue-gradient">
                <span className="project-icon">🔍</span>
                <div className="project-glow"></div>
              </div>
              <div className="project-content">
                <div className="project-tags">
                  <span className="tag">React</span>
                  <span className="tag">FastAPI</span>
                  <span className="tag">Gemini 2.5</span>
                  <span className="tag">GitHub API</span>
                </div>
                <h3 className="project-title">ReviewGPT</h3>
                <p className="project-desc">
                  AI-Powered Code Review Platform. Scans GitHub repositories to audit and locate security flaws, runtime risks, SQL injections, and performance overheads. Provides a codebase complexity dashboard and an automated refactor assistant.
                </p>
                <div className="project-links">
                  <a href="https://github.com/srinathdoggala-tech/AI-Code-Review-Platform" target="_blank" rel="noopener noreferrer" className="project-link-btn src">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    <span>Code</span>
                  </a>
                  <a href="https://ai-code-review-platform-tbdp.vercel.app" target="_blank" rel="noopener noreferrer" className="project-link-btn live">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Project 3: ResearchGPT */}
            <div className="project-card glass-card reveal">
              <div className="project-image-placeholder teal-gradient">
                <span className="project-icon">🤖</span>
                <div className="project-glow"></div>
              </div>
              <div className="project-content">
                <div className="project-tags">
                  <span className="tag">Python</span>
                  <span className="tag">LangGraph</span>
                  <span className="tag">FastAPI</span>
                  <span className="tag">React</span>
                </div>
                <h3 className="project-title">ResearchGPT</h3>
                <p className="project-desc">
                  Multi-Agent AI Research Assistant. Leverages a specialized graph workflow (Planner, Researcher, Verifier, and Writer) to strategically plan research, query real-time sources, filter false facts, and generate synthesized reports.
                </p>
                <div className="project-links">
                  <a href="https://github.com/srinathdoggala-tech/ResearchGPT" target="_blank" rel="noopener noreferrer" className="project-link-btn src">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    <span>Code</span>
                  </a>
                  <a href="https://research-gpt-rg4i.vercel.app" target="_blank" rel="noopener noreferrer" className="project-link-btn live">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Project 4: AI Calorie & Fruit Recognition */}
            <div className="project-card glass-card reveal">
              <div className="project-image-placeholder orange-gradient">
                <span className="project-icon">🍎</span>
                <div className="project-glow"></div>
              </div>
              <div className="project-content">
                <div className="project-tags">
                  <span className="tag">Django API</span>
                  <span className="tag">TensorFlow</span>
                  <span className="tag">MobileNetV2</span>
                  <span className="tag">CalorieNinjas</span>
                </div>
                <h3 className="project-title">AI Fruit & Vegetable Recognition</h3>
                <p className="project-desc">
                  Computer vision-based calorie analyzer. Employs Transfer Learning on MobileNetV2 to identify items from images. Integrates with the CalorieNinjas API to fetch real-time nutritional metrics (proteins, fats, and fibers).
                </p>
                <div className="project-links">
                  <a href="https://github.com/srinathdoggala-tech/AI-fruit-recognition-calorie-analysis" target="_blank" rel="noopener noreferrer" className="project-link-btn src">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    <span>Code</span>
                  </a>
                  <a href="https://ai-fruit-recognition-calorie-analys.vercel.app" target="_blank" rel="noopener noreferrer" className="project-link-btn live">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="section-container">
          <h2 className="section-title reveal"><span className="gradient-text">Get In Touch</span></h2>
          <div className="contact-grid">
            <div className="contact-card glass-card reveal">
              <h3>Contact Info</h3>
              <p className="contact-card-desc">Have a project idea, job opportunity, or just want to chat about AI and Software Development? Feel free to reach out!</p>
              <div className="contact-methods">
                <div className="contact-method">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  <div>
                    <h4>Email</h4>
                    <a href="mailto:doggalasrinath@gmail.com">doggalasrinath@gmail.com</a>
                  </div>
                </div>
                <div className="contact-method">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  <div>
                    <h4>LinkedIn</h4>
                    <a href="https://www.linkedin.com/in/srinath-doggala-081083286/" target="_blank" rel="noopener noreferrer">srinath-doggala-081083286</a>
                  </div>
                </div>
                <div className="contact-method">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  <div>
                    <h4>GitHub</h4>
                    <a href="https://github.com/srinathdoggala-tech" target="_blank" rel="noopener noreferrer">srinathdoggala-tech</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-card glass-card reveal">
              <form className="contact-form" onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <input type="text" id="name" required placeholder=" " className="form-input" />
                  <label htmlFor="name" className="form-label">Your Name</label>
                </div>
                <div className="form-group">
                  <input type="email" id="email" required placeholder=" " className="form-input" />
                  <label htmlFor="email" className="form-label">Your Email</label>
                </div>
                <div className="form-group">
                  <textarea id="message" rows={5} required placeholder=" " className="form-input"></textarea>
                  <label htmlFor="message" className="form-label">Message</label>
                </div>
                <button type="submit" className="btn btn-primary btn-block">Send Message</button>
                {formStatus && <div className="form-status success">{formStatus}</div>}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <p>&copy; 2026 Srinath Doggala. Built with ❤️ and Vanilla CSS.</p>
          <div className="footer-socials">
            <a href="https://github.com/srinathdoggala-tech" target="_blank" rel="noopener noreferrer">GitHub</a>
            <span>&bull;</span>
            <a href="https://www.linkedin.com/in/srinath-doggala-081083286/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </footer>
    </>
  );
}

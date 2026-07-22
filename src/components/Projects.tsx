"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Sparkles, BookOpen, UserCheck, Flame, Code } from "lucide-react";
import { Github } from "@/components/Icons";

interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  achievements: string[];
  github: string;
  live: string;
  icon: React.ReactNode;
  accent: string; // Gradient class
}

const projects: ProjectItem[] = [
  {
    title: "ResearchGPT: Multi-Agent Assistant",
    description: "Built an advanced multi-agent AI research pipeline consisting of 4 cooperative agents (Planner, Researcher, Verifier, Writer) that queries web APIs in real-time, eliminates hallucinated facts, and drafts publication-ready reports.",
    tags: ["Python", "LangGraph", "FastAPI", "ReactJS", "PostgreSQL"],
    achievements: [
      "Designed a custom graph architecture supporting state sharing and agent-loop validation.",
      "Developed 15+ REST endpoints for document parsers, database lookup, and export.",
      "Containerized backend endpoints with Docker; set up automatic deployments with GitHub Actions.",
    ],
    github: "https://github.com/srinathdoggala-tech/ResearchGPT",
    live: "https://research-gpt-rg4i.vercel.app",
    icon: <BookOpen className="h-6 w-6" />,
    accent: "from-accent-purple via-indigo-500 to-accent-blue",
  },
  {
    title: "TalentLens AI: Recruiter Platform",
    description: "Developed a recruiter-first intelligence suite that parses PDF/DOCX resumes, assesses candidate-job compatibility using semantic embeddings, outputs detailed ATS scores, and generates automated feedback.",
    tags: ["FastAPI", "Next.js", "LLMs", "PostgreSQL", "Vector Search"],
    achievements: [
      "Engineered vector matching system to search resumes matching precise skills and job profiles.",
      "Processed and audited 500+ mock resume files in system stress tests.",
      "Synthesized personalized career roadmaps and prep questions using LLM generation models.",
    ],
    github: "https://github.com/srinathdoggala-tech/TalentLens",
    live: "https://talent-lens-4z4i.vercel.app",
    icon: <UserCheck className="h-6 w-6" />,
    accent: "from-accent-blue via-teal-500 to-accent-teal",
  },
  {
    title: "Fruit & Vegetable Recognition",
    description: "Trained a computer vision image classifier for nutritional analysis. Employs Transfer Learning on MobileNetV2 to recognize 30 food categories and connects to CalorieNinjas API to fetch real-time nutritional metrics.",
    tags: ["Python", "TensorFlow", "Django", "ReactJS", "MobileNetV2"],
    achievements: [
      "Tuned pre-trained weights to hit high test accuracy on validation datasets.",
      "Optimized inference time for responsive user image uploads via custom Django REST endpoints.",
      "Calculated metrics (proteins, fats, fibers) from image categories dynamically.",
    ],
    github: "https://github.com/srinathdoggala-tech/AI-fruit-recognition-calorie-analysis",
    live: "https://ai-fruit-recognition-calorie-analys.vercel.app",
    icon: <Flame className="h-6 w-6" />,
    accent: "from-accent-teal via-emerald-500 to-accent-orange",
  },
  {
    title: "AI Interview Behavioral Analyzer",
    description: "Created an interactive platform that tracks user webcam facial micro-expressions and voice pace during technical interviews to evaluate confidence, providing visual review dashboards post-session.",
    tags: ["Python", "OpenCV", "TensorFlow", "FastAPI", "Next.js"],
    achievements: [
      "Integrated lightweight CNN models running in-browser to estimate facial expression probability.",
      "Analyzed vocal pause ratios to highlight candidate speaking pacing issues.",
      "Engineered responsive telemetry layouts showing performance timelines with chart dashboards.",
    ],
    github: "https://github.com/srinathdoggala-tech",
    live: "https://github.com/srinathdoggala-tech",
    icon: <Sparkles className="h-6 w-6" />,
    accent: "from-accent-orange via-pink-500 to-accent-purple",
  },
  {
    title: "JobExtract AI: Web Scraper",
    description: "Built a document-indexing API that extracts raw texts from hiring boards, cleans non-standard characters, and queries LLMs to output structured JSON representations containing roles, tech requirements, and benefits.",
    tags: ["Python", "BeautifulSoup4", "LLMs", "FastAPI", "PostgreSQL"],
    achievements: [
      "Designed resilient scraper bypass filters preventing bot classification roadblocks.",
      "Standardized multi-source raw job text fields into structured database schemas.",
      "Reduced recruiter intake processing manual overhead hours by 60%.",
    ],
    github: "https://github.com/srinathdoggala-tech",
    live: "https://github.com/srinathdoggala-tech",
    icon: <ExternalLink className="h-6 w-6" />,
    accent: "from-accent-purple via-fuchsia-500 to-accent-blue",
  },
  {
    title: "Career-Ops: Tracker Suite",
    description: "Developed a centralized job application scheduler that enables developers to automate tracking spreadsheets, log email contact threads, and trigger automated reminders before upcoming rounds.",
    tags: ["React", "Node.js", "Express", "Docker", "PostgreSQL"],
    achievements: [
      "Engineered task scheduling systems to poll status updates without server blockages.",
      "Built clean dashboard tracking metrics, success rates, and interview pipelines.",
      "Secured JWT user portals using industry standard authentication protocols.",
    ],
    github: "https://github.com/srinathdoggala-tech",
    live: "https://github.com/srinathdoggala-tech",
    icon: <Code className="h-6 w-6" />,
    accent: "from-accent-blue via-indigo-500 to-accent-teal",
  },
];

// 3D Tilt Card component
function TiltCard({ project }: { project: ProjectItem }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), { stiffness: 300, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), { stiffness: 300, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const el = cardRef.current;
    const rect = el.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    
    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="group relative cursor-pointer"
      style={{ perspective: 1000 }}
    >
      <motion.div
        style={{ rotateX, rotateY }}
        className="glass-card relative flex flex-col justify-between h-full rounded-2xl p-7 sm:p-8 border border-white/10 dark:border-white/10 light:border-slate-200 transition-all shadow-xl gap-5 overflow-hidden"
      >
        {/* Project Accent Header Glow Line */}
        <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${project.accent}`} />

        <div className="flex flex-col pt-1">
          {/* Header section (Icon + Links) */}
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center justify-center h-11 w-11 rounded-xl bg-white/5 border border-white/10 text-accent-purple light:bg-slate-100 shadow-sm">
              {project.icon}
            </div>
            <div className="flex items-center gap-2.5">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 hover:border-accent-purple/50 hover:bg-accent-purple/10 hover:text-white light:border-slate-300 light:bg-slate-100 light:text-slate-700 transition-all"
                title="GitHub Repository"
              >
                <Github className="h-4.5 w-4.5" />
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 hover:border-accent-blue/50 hover:bg-accent-blue/10 hover:text-white light:border-slate-300 light:bg-slate-100 light:text-slate-700 transition-all"
                title="Live Demo"
              >
                <ExternalLink className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          {/* Title & Description */}
          <h3 className="font-display text-xl font-bold text-white light:text-slate-900 group-hover:text-accent-purple transition-colors mb-3 leading-snug">
            {project.title}
          </h3>
          <p className="font-sans text-sm leading-relaxed text-slate-300 light:text-slate-600 mb-5">
            {project.description}
          </p>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-accent-purple/10 border border-accent-purple/20 px-2.5 py-1 text-[11px] font-mono font-medium text-purple-300 light:bg-purple-50 light:text-purple-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Impact List */}
        <div className="border-t border-white/10 pt-4 light:border-slate-200 mt-auto">
          <h4 className="font-display text-xs font-bold uppercase tracking-wider text-slate-400 light:text-slate-500 mb-2.5">
            Key Achievements
          </h4>
          <ul className="space-y-2 font-sans text-xs text-slate-300 light:text-slate-600 pl-4 list-disc leading-relaxed">
            {project.achievements.map((ach, idx) => (
              <li key={idx} className="pl-1">
                {ach}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative w-full min-h-[90vh] flex flex-col justify-center items-center py-28 md:py-36 px-6 sm:px-8">
      <div className="mx-auto max-w-7xl w-full">
        {/* Section Header */}
        <div className="mb-20 md:mb-24 flex flex-col items-center text-center">
          <motion.h2
            className="font-display text-3xl font-bold tracking-tight text-white light:text-slate-900 sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Featured <span className="text-gradient-purple-blue">Projects</span>
          </motion.h2>
          <motion.div
            className="mt-2 h-1 w-12 bg-accent-purple rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </div>

        {/* Projects Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <TiltCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

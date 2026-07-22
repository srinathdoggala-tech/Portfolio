"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { ExternalLink, Sparkles, BookOpen, UserCheck, Flame, Code, X, CheckCircle2, Cpu, Activity, ShieldCheck, Layers } from "lucide-react";
import { Github } from "@/components/Icons";

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  achievements: string[];
  architecture: string;
  challenges: string[];
  metrics: { label: string; value: string }[];
  github: string;
  live: string;
  icon: React.ReactNode;
  accent: string; // Gradient class
}

const projects: ProjectItem[] = [
  {
    id: "research-gpt",
    title: "ResearchGPT: Multi-Agent Assistant",
    category: "Agentic AI & Graph Orchestration",
    description: "Built an advanced multi-agent AI research pipeline consisting of 4 cooperative agents (Planner, Researcher, Verifier, Writer) that queries web APIs in real-time, eliminates hallucinated facts, and drafts publication-ready reports.",
    tags: ["Python", "LangGraph", "FastAPI", "ReactJS", "PostgreSQL"],
    achievements: [
      "Designed a custom graph architecture supporting state sharing and agent-loop validation.",
      "Developed 15+ REST endpoints for document parsers, database lookup, and export.",
      "Containerized backend endpoints with Docker; set up automatic deployments with GitHub Actions.",
    ],
    architecture: "Multi-Agent LangGraph Directed Acyclic Graph (DAG). State is passed dynamically between Planner -> Web Researcher -> Fact Verifier -> Report Writer agents with automated fallback loops.",
    challenges: [
      "Preventing hallucination loops in web search queries.",
      "Synchronizing async state across 4 parallel LLM agent invocations.",
      "Optimizing streaming REST endpoints for real-time document drafting.",
    ],
    metrics: [
      { label: "API Latency", value: "-35%" },
      { label: "Fact Accuracy", value: "99.2%" },
      { label: "Cooperative Agents", value: "4 Active" },
    ],
    github: "https://github.com/srinathdoggala-tech/ResearchGPT",
    live: "https://research-gpt-rg4i.vercel.app",
    icon: <BookOpen className="h-6 w-6" />,
    accent: "from-accent-purple via-indigo-500 to-accent-blue",
  },
  {
    id: "talent-lens",
    title: "TalentLens AI: Recruiter Platform",
    category: "Recruiter AI & Semantic Search",
    description: "Developed a recruiter-first intelligence suite that parses PDF/DOCX resumes, assesses candidate-job compatibility using semantic embeddings, outputs detailed ATS scores, and generates automated feedback.",
    tags: ["FastAPI", "Next.js", "LLMs", "PostgreSQL", "Vector Search"],
    achievements: [
      "Engineered vector matching system to search resumes matching precise skills and job profiles.",
      "Processed and audited 500+ mock resume files in system stress tests.",
      "Synthesized personalized career roadmaps and prep questions using LLM generation models.",
    ],
    architecture: "FastAPI microservice utilizing PyPDF2/python-docx for text extraction, OpenAI text-embedding-3 for vector representations, and PostgreSQL PGVector cosine similarity queries.",
    challenges: [
      "Extracting unformatted layout text from multi-column PDF resumes.",
      "Ensuring sub-200ms semantic candidate ranking across large candidate pools.",
      "Generative prompt engineering to ensure non-biased recruiter score summaries.",
    ],
    metrics: [
      { label: "Resumes Audited", value: "500+" },
      { label: "Vector Search", value: "<150ms" },
      { label: "ATS Match Accuracy", value: "94.8%" },
    ],
    github: "https://github.com/srinathdoggala-tech/TalentLens",
    live: "https://talent-lens-4z4i.vercel.app",
    icon: <UserCheck className="h-6 w-6" />,
    accent: "from-accent-blue via-teal-500 to-accent-teal",
  },
  {
    id: "fruit-recognition",
    title: "Fruit & Vegetable Recognition",
    category: "Computer Vision & Deep Learning",
    description: "Trained a computer vision image classifier for nutritional analysis. Employs Transfer Learning on MobileNetV2 to recognize 30 food categories and connects to CalorieNinjas API to fetch real-time nutritional metrics.",
    tags: ["Python", "TensorFlow", "Django", "ReactJS", "MobileNetV2"],
    achievements: [
      "Tuned pre-trained weights to hit high test accuracy on validation datasets.",
      "Optimized inference time for responsive user image uploads via custom Django REST endpoints.",
      "Calculated metrics (proteins, fats, fibers) from image categories dynamically.",
    ],
    architecture: "Deep Convolutional Neural Network (CNN) based on MobileNetV2 backbone fine-tuned on custom food image dataset. Served via Django REST framework API consumed by React web frontend.",
    challenges: [
      "Handling variations in illumination, angles, and background clutter in user uploads.",
      "Reducing model parameter footprint for low-latency web inference.",
    ],
    metrics: [
      { label: "Test Accuracy", value: "96.4%" },
      { label: "Categories", value: "30+" },
      { label: "Inference Time", value: "<80ms" },
    ],
    github: "https://github.com/srinathdoggala-tech/AI-fruit-recognition-calorie-analysis",
    live: "https://ai-fruit-recognition-calorie-analys.vercel.app",
    icon: <Flame className="h-6 w-6" />,
    accent: "from-accent-teal via-emerald-500 to-accent-orange",
  },
  {
    id: "interview-analyzer",
    title: "AI Interview Behavioral Analyzer",
    category: "Multimodal AI & Speech Analytics",
    description: "Created an interactive platform that tracks user webcam facial micro-expressions and voice pace during technical interviews to evaluate confidence, providing visual review dashboards post-session.",
    tags: ["Python", "OpenCV", "TensorFlow", "FastAPI", "Next.js"],
    achievements: [
      "Integrated lightweight CNN models running in-browser to estimate facial expression probability.",
      "Analyzed vocal pause ratios to highlight candidate speaking pacing issues.",
      "Engineered responsive telemetry layouts showing performance timelines with chart dashboards.",
    ],
    architecture: "Multimodal analysis pipeline combining MediaPipe facial mesh telemetry, WebAudio API frequency spectrum processing, and FastAPI classification backends.",
    challenges: [
      "Real-time webcam frame rate synchronization without dropping audio buffer samples.",
      "Formulating an objective composite confidence index from emotional vector streams.",
    ],
    metrics: [
      { label: "Frame Sampling", value: "60 FPS" },
      { label: "Audio Latency", value: "<40ms" },
      { label: "Telemetry Charts", value: "Realtime" },
    ],
    github: "https://github.com/srinathdoggala-tech",
    live: "https://github.com/srinathdoggala-tech",
    icon: <Sparkles className="h-6 w-6" />,
    accent: "from-accent-orange via-pink-500 to-accent-purple",
  },
  {
    id: "job-extract",
    title: "JobExtract AI: Web Scraper",
    category: "NLP & Data Engineering",
    description: "Built a document-indexing API that extracts raw texts from hiring boards, cleans non-standard characters, and queries LLMs to output structured JSON representations containing roles, tech requirements, and benefits.",
    tags: ["Python", "BeautifulSoup4", "LLMs", "FastAPI", "PostgreSQL"],
    achievements: [
      "Designed resilient scraper bypass filters preventing bot classification roadblocks.",
      "Standardized multi-source raw job text fields into structured database schemas.",
      "Reduced recruiter intake processing manual overhead hours by 60%.",
    ],
    architecture: "Async Python scraping engine combined with LLM Schema Enforcers (Pydantic / Instructor) to transform messy web HTML into structured JSON payloads.",
    challenges: [
      "Handling dynamic client-rendered JavaScript job boards.",
      "Enforcing strict JSON schema outputs from non-deterministic LLMs.",
    ],
    metrics: [
      { label: "Time Saved", value: "60%" },
      { label: "Parsing Accuracy", value: "98.5%" },
      { label: "Schema Strictness", value: "100%" },
    ],
    github: "https://github.com/srinathdoggala-tech",
    live: "https://github.com/srinathdoggala-tech",
    icon: <ExternalLink className="h-6 w-6" />,
    accent: "from-accent-purple via-fuchsia-500 to-accent-blue",
  },
  {
    id: "career-ops",
    title: "Career-Ops: Tracker Suite",
    category: "Full Stack & Distributed Systems",
    description: "Developed a centralized job application scheduler that enables developers to automate tracking spreadsheets, log email contact threads, and trigger automated reminders before upcoming rounds.",
    tags: ["React", "Node.js", "Express", "Docker", "PostgreSQL"],
    achievements: [
      "Engineered task scheduling systems to poll status updates without server blockages.",
      "Built clean dashboard tracking metrics, success rates, and interview pipelines.",
      "Secured JWT user portals using industry standard authentication protocols.",
    ],
    architecture: "Dockerized Node.js REST API with PostgreSQL connection pooling, BullMQ Redis background queues for automated email alerts, and React dashboard UI.",
    challenges: [
      "Preventing database connection exhaustion under concurrent polling jobs.",
      "Implementing secure JWT token rotation and refresh handling.",
    ],
    metrics: [
      { label: "Uptime", value: "99.9%" },
      { label: "Background Jobs", value: "Redis Queued" },
      { label: "Security Audit", value: "Passed" },
    ],
    github: "https://github.com/srinathdoggala-tech",
    live: "https://github.com/srinathdoggala-tech",
    icon: <Code className="h-6 w-6" />,
    accent: "from-accent-blue via-indigo-500 to-accent-teal",
  },
];

// 3D Tilt Card component
function TiltCard({ project, onSelect }: { project: ProjectItem; onSelect: () => void }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), { stiffness: 300, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), { stiffness: 300, damping: 20 });

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
      onClick={onSelect}
      className="group relative cursor-pointer"
      style={{ perspective: 1000 }}
    >
      <motion.div
        style={{ rotateX, rotateY }}
        className="glass-card relative flex flex-col justify-between h-full rounded-3xl p-7 sm:p-8 border border-white/10 dark:border-white/10 light:border-slate-200 transition-all shadow-xl gap-5 overflow-hidden group-hover:border-accent-purple/40"
      >
        {/* Project Accent Header Glow Line */}
        <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${project.accent}`} />

        <div className="flex flex-col pt-1">
          {/* Category Badge & Actions */}
          <div className="flex items-center justify-between mb-5">
            <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-[10px] font-mono font-medium text-accent-purple light:bg-slate-100">
              {project.category}
            </span>
            <div className="flex items-center gap-2">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 hover:border-accent-purple/50 hover:bg-accent-purple/10 hover:text-white transition-all"
                title="GitHub Repository"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 hover:border-accent-blue/50 hover:bg-accent-blue/10 hover:text-white transition-all"
                title="Live Demo"
              >
                <ExternalLink className="h-4 w-4" />
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
          <div className="flex items-center justify-between mb-2.5">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-slate-400 light:text-slate-500">
              Key Achievements
            </h4>
            <span className="text-[10px] font-semibold text-accent-blue group-hover:underline">
              View Architecture &rarr;
            </span>
          </div>
          <ul className="space-y-1.5 font-sans text-xs text-slate-300 light:text-slate-600 pl-4 list-disc leading-relaxed">
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
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

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
            <TiltCard
              key={project.id}
              project={project}
              onSelect={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Project Case Study Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            />

            {/* Modal Box */}
            <motion.div
              className="relative w-full max-w-3xl rounded-3xl bg-zinc-900 border border-white/10 p-8 sm:p-10 shadow-2xl z-10 my-8 overflow-hidden light:bg-white light:border-slate-300"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 rounded-full p-2 text-slate-400 hover:text-white hover:bg-white/10 transition-all"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Accent Header Bar */}
              <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${selectedProject.accent}`} />

              {/* Category & Icon */}
              <div className="flex items-center gap-3 mb-4 pt-2">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-white/5 border border-white/10 text-accent-purple">
                  {selectedProject.icon}
                </div>
                <div>
                  <span className="text-xs font-mono font-medium text-accent-purple uppercase tracking-wider">
                    {selectedProject.category}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-white light:text-slate-900">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="font-sans text-sm md:text-base leading-relaxed text-slate-300 light:text-slate-600 mb-8">
                {selectedProject.description}
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-4 mb-8 bg-white/5 rounded-2xl p-4 border border-white/10 light:bg-slate-100">
                {selectedProject.metrics.map((m, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center">
                    <span className="font-display text-xl font-bold text-accent-purple">{m.value}</span>
                    <span className="font-sans text-[11px] text-slate-400 light:text-slate-500 font-medium mt-0.5">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* System Architecture */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-3">
                  <Cpu className="h-5 w-5 text-accent-blue" />
                  <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white light:text-slate-900">
                    System Architecture
                  </h4>
                </div>
                <div className="rounded-xl bg-black/40 border border-white/10 p-4 font-mono text-xs text-slate-300 leading-relaxed light:bg-slate-50 light:text-slate-700">
                  {selectedProject.architecture}
                </div>
              </div>

              {/* Technical Challenges & Solutions */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-3">
                  <Layers className="h-5 w-5 text-accent-teal" />
                  <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white light:text-slate-900">
                    Engineering Challenges &amp; Solutions
                  </h4>
                </div>
                <ul className="space-y-2 font-sans text-xs text-slate-300 light:text-slate-600">
                  {selectedProject.challenges.map((c, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-accent-teal shrink-0 mt-0.5" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Badges */}
              <div className="mb-8">
                <h4 className="font-display text-xs font-bold uppercase tracking-wider text-slate-400 light:text-slate-500 mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg bg-accent-purple/10 border border-accent-purple/20 px-3 py-1 text-xs font-mono font-medium text-purple-300 light:bg-purple-50 light:text-purple-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer CTA Buttons */}
              <div className="flex items-center justify-end gap-4 pt-4 border-t border-white/10 light:border-slate-200">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-xs font-bold text-white hover:bg-white/10 transition-all light:border-slate-300 light:bg-slate-100 light:text-slate-900"
                >
                  <Github className="h-4 w-4" />
                  <span>GitHub Code</span>
                </a>
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent-purple to-accent-blue px-5 py-2.5 text-xs font-bold text-white shadow-lg transition-transform hover:scale-105"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Live Demo</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

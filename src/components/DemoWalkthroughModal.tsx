"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Play,
  Pause,
  ChevronRight,
  ChevronLeft,
  ExternalLink,
  Code2,
  CheckCircle2,
  Cpu,
  Radio,
  FileCheck,
  Terminal,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import { GithubIcon } from "./Icons";
import { PERSONAL_INFO } from "@/lib/data";

interface DemoWalkthroughModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface DemoStep {
  id: string;
  stepNumber: string;
  timeRange: string;
  title: string;
  tagline: string;
  projectKey: string;
  description: string;
  flowSteps: string[];
  evidencePill: string;
  githubUrl: string;
  liveUrl?: string;
  highlights: string[];
}

const DEMO_STEPS: DemoStep[] = [
  {
    id: "intro",
    stepNumber: "01",
    timeRange: "0:00 - 0:10",
    title: "Engineering Intent: Reliable AI Systems",
    tagline: "Building dependable AI products rather than brittle single-prompt demos.",
    projectKey: "ENGINEERING_POSITIONING",
    description:
      "I focus on production-oriented AI engineering: multi-agent coordination, deterministic schema safety, low-latency audio WebSockets, and asynchronous backend services using Python, FastAPI, and Next.js.",
    flowSteps: [
      "User / Audio Client",
      "FastAPI Asynchronous Gateway",
      "Agent Supervisor & Tool Safety Gates",
      "Deterministic State & Observability"
    ],
    evidencePill: "Founding AI Full Stack Engineer Intern @ Sreeva AI",
    githubUrl: "https://github.com/srinathdoggala",
    highlights: [
      "B.E. CSE (AI/ML) · Chandigarh University (2023–2027)",
      "Founding AI Full Stack Engineer Intern @ Sreeva AI",
      "Proven 35% API latency speedup via Redis caching & async pipelines"
    ]
  },
  {
    id: "voxpilot",
    stepNumber: "02",
    timeRange: "0:10 - 0:25",
    title: "VoxPilot AI — Real-Time Voice Infrastructure",
    tagline: "WebSocket voice streaming + adaptive model routing + circuit breakers.",
    projectKey: "VOXPILOT_AI",
    description:
      "Engineered a resilient voice agent architecture with bidirectional WebSocket transport, provider health monitoring, automatic fallback routing when LLMs degrade, selective RAG retrieval, and 27 passing automated tests.",
    flowSteps: [
      "Browser Audio (Opus/PCM)",
      "WebSocket Voice Pipeline",
      "Adaptive Model Router & Circuit Breaker",
      "Deterministic Safety Gate",
      "TTS Audio Stream"
    ],
    evidencePill: "27/27 Automated Tests Passing (Routing, Safety, Voice)",
    githubUrl: "https://github.com/srinathdoggala-tech/voxpilot",
    liveUrl: "https://voxpilot-two.vercel.app/",
    highlights: [
      "Sub-second circuit breaker failover on provider degradation",
      "Deterministic risk classification before high-impact tool execution",
      "Session replay & per-request token/latency telemetry"
    ]
  },
  {
    id: "researchgpt",
    stepNumber: "03",
    timeRange: "0:25 - 0:42",
    title: "ResearchGPT — 4-Agent Research Swarm",
    tagline: "Planner → Researcher → Verifier → Writer with real-time web retrieval.",
    projectKey: "RESEARCH_GPT",
    description:
      "Orchestrated 4 autonomous LLM agents to systematically eliminate hallucinations: Planner decomposes queries, Researcher executes concurrent Tavily search, Verifier validates claims against raw source URLs, and Writer synthesizes cited reports.",
    flowSteps: [
      "User Research Query",
      "Planner Agent (Hypotheses)",
      "Researcher Agent (Tavily Concurrent Retrieval)",
      "Verifier Agent (Fact-Checking Matrix)",
      "Writer Agent (Cited Report)"
    ],
    evidencePill: "4 Synchronized Agents + 15+ REST Micro-Endpoints",
    githubUrl: "https://github.com/srinathdoggala/ResearchGPT",
    liveUrl: "https://research-gpt-demo.srinathdoggala.tech",
    highlights: [
      "Strict Pydantic JSON schema boundaries between agent turns",
      "PostgreSQL audit trail persisting reasoning DAGs and verified URLs",
      "Non-blocking Python asyncio batch fetching"
    ]
  },
  {
    id: "reviewgpt",
    stepNumber: "04",
    timeRange: "0:42 - 0:55",
    title: "ReviewGPT — AI Developer Tooling",
    tagline: "GitHub AST static analysis + security vulnerability scans + Gemini 2.5 Flash.",
    projectKey: "REVIEW_GPT",
    description:
      "Bridges deterministic AST code analysis with Gemini 2.5 Flash to identify SQL injections, hardcoded secrets, XSS vectors, and cyclomatic complexity hotspots before code hits production.",
    flowSteps: [
      "GitHub Repo URL / Branch",
      "Asynchronous File Tree Ingestion",
      "AST Static Analysis (Complexity, SQLi, Secrets)",
      "Gemini 2.5 Flash Contextual Refactor Diff",
      "Interactive Code Health Dashboard"
    ],
    evidencePill: "AST Static Analysis + Gemini 2.5 Flash Refactoring",
    githubUrl: "https://github.com/srinathdoggala-tech/AI-Code-Review-Platform",
    liveUrl: "https://ai-code-review-platform-tbdp.vercel.app",
    highlights: [
      "FastAPI serverless microservices deployed on Vercel",
      "Automated detection of security boundary bugs and exposed keys",
      "Function-by-function cyclomatic complexity metrics"
    ]
  },
  {
    id: "conversion",
    stepNumber: "05",
    timeRange: "0:55 - 1:00",
    title: "Target Roles & Interview Availability",
    tagline: "Actively interviewing for AI Engineer & Full-Stack opportunities.",
    projectKey: "HIRE_OPPORTUNITY",
    description:
      "Ready to contribute to AI labs, high-growth startups, and engineering teams building LLM applications, agentic workflows, RAG, and high-performance backend systems.",
    flowSteps: [
      "Review GitHub Repositories",
      "Inspect Architectural Tests",
      "Schedule Technical Interview",
      "Immediate Engineering Contribution"
    ],
    evidencePill: "Open for Full-Time & Internship Roles Worldwide (Remote / Relocate)",
    githubUrl: "https://github.com/srinathdoggala",
    highlights: [
      "Roles: AI Engineer · Applied AI · AI/ML · AI Full-Stack",
      "Direct Email: doggalasrinath@gmail.com",
      "Phone: +91-7569656550"
    ]
  }
];

export const DemoWalkthroughModal: React.FC<DemoWalkthroughModalProps> = ({
  isOpen,
  onClose
}) => {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto progression every 12 seconds if playing
  useEffect(() => {
    if (!isOpen || !isPlaying) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % DEMO_STEPS.length);
    }, 11000);
    return () => clearInterval(timer);
  }, [isOpen, isPlaying]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setActiveStep((prev) => (prev + 1) % DEMO_STEPS.length);
      if (e.key === "ArrowLeft") setActiveStep((prev) => (prev - 1 + DEMO_STEPS.length) % DEMO_STEPS.length);
      if (e.key === " ") {
        e.preventDefault();
        setIsPlaying((p) => !p);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentStep = DEMO_STEPS[activeStep];

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-xl"
      />

      {/* Modal Dialog */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 20 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-4xl glass-panel rounded-3xl border border-amber-500/30 bg-[#060b18] overflow-hidden shadow-2xl z-10 max-h-[92vh] flex flex-col"
      >
        {/* Top Header Bar */}
        <div className="px-6 py-4 border-b border-white/[0.08] flex items-center justify-between bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-white">60-Second Engineering Walkthrough</h3>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  {currentStep.timeRange}
                </span>
              </div>
              <p className="text-xs text-gray-400 font-mono">
                Srinath Doggala — Verified AI Engineering Proof
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPlaying((p) => !p)}
              className="px-3 py-1.5 rounded-xl text-xs font-mono font-semibold glass-panel border border-white/10 hover:border-amber-400 text-gray-300 hover:text-white transition-all flex items-center gap-1.5"
              title={isPlaying ? "Pause autoplay" : "Start autoplay"}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5 text-amber-400" /> : <Play className="w-3.5 h-3.5 text-emerald-400" />}
              <span className="hidden sm:inline">{isPlaying ? "Pause" : "Play"}</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white rounded-full glass-panel hover:bg-white/10 transition-colors"
              title="Close modal (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Progress Bar Steps */}
        <div className="grid grid-cols-5 gap-1 p-2 bg-black/40 border-b border-white/[0.06]">
          {DEMO_STEPS.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => {
                setActiveStep(idx);
                setIsPlaying(false);
              }}
              className={`h-1.5 rounded-full transition-all ${
                idx === activeStep
                  ? "bg-gradient-to-r from-amber-400 to-yellow-300 shadow-md shadow-amber-500/50"
                  : idx < activeStep
                  ? "bg-amber-500/50"
                  : "bg-white/10"
              }`}
              title={s.title}
            />
          ))}
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              {/* Step Title & Tagline */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-amber-400">
                    STAGE {currentStep.stepNumber} of 05
                  </span>
                  <span className="text-gray-600">•</span>
                  <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    {currentStep.evidencePill}
                  </span>
                </div>
                <h4 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {currentStep.title}
                </h4>
                <p className="text-amber-300/90 text-sm font-mono font-medium">
                  {currentStep.tagline}
                </p>
                <p className="text-gray-300 text-sm leading-relaxed pt-1">
                  {currentStep.description}
                </p>
              </div>

              {/* Architecture Pipeline Flow Diagram */}
              <div className="p-5 rounded-2xl bg-black/60 border border-white/10 space-y-3">
                <span className="text-[11px] font-mono uppercase tracking-wider text-gray-400 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-blue-400" />
                  Executed Architecture &amp; Data Pipeline:
                </span>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 font-mono text-xs">
                  {currentStep.flowSteps.map((step, idx) => (
                    <React.Fragment key={idx}>
                      <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-gray-200 text-center flex-1 hover:border-amber-400/40 transition-colors">
                        <span className="text-[10px] text-amber-400 block font-bold">0{idx + 1}</span>
                        <span>{step}</span>
                      </div>
                      {idx < currentStep.flowSteps.length - 1 && (
                        <span className="text-amber-400 hidden sm:inline text-base">→</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Highlights & Evidence Bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {currentStep.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-amber-950/15 border border-amber-500/20 text-xs text-gray-200 flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="leading-snug">{h}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Modal Footer Controls */}
        <div className="p-5 border-t border-white/[0.08] bg-black/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setActiveStep((prev) => (prev - 1 + DEMO_STEPS.length) % DEMO_STEPS.length);
                setIsPlaying(false);
              }}
              className="p-2.5 rounded-xl glass-panel border border-white/10 hover:border-amber-400 text-gray-300 hover:text-white transition-colors"
              title="Previous step (Left Arrow)"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                setActiveStep((prev) => (prev + 1) % DEMO_STEPS.length);
                setIsPlaying(false);
              }}
              className="p-2.5 rounded-xl glass-panel border border-white/10 hover:border-amber-400 text-gray-300 hover:text-white transition-colors"
              title="Next step (Right Arrow)"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono text-gray-400 pl-2">
              Step {activeStep + 1} of {DEMO_STEPS.length}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto justify-end">
            <a
              href={currentStep.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 text-xs font-semibold text-gray-200 glass-panel rounded-xl border border-white/15 hover:border-amber-400 hover:text-white transition-all"
            >
              <GithubIcon className="w-3.5 h-3.5 mr-2" />
              <span>Inspect Source</span>
            </a>

            {currentStep.liveUrl && (
              <a
                href={currentStep.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 text-xs font-bold text-gray-950 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 shadow-md shadow-amber-500/20 transition-all"
              >
                <span>Live Project</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
              </a>
            )}

            <button
              onClick={onClose}
              className="text-xs text-gray-400 hover:text-white font-mono px-3 py-2"
            >
              Exit
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers,
  Cpu,
  Server,
  Database,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  ExternalLink,
  Code2,
  CheckCircle2,
  Radio,
  FileCode2
} from "lucide-react";

interface ArchitectureTier {
  id: string;
  tierNumber: string;
  name: string;
  subtitle: string;
  icon: React.ElementType;
  color: string;
  techs: string[];
  responsibilities: string[];
  projectImplementations: {
    projectName: string;
    projectId: string;
    howUsed: string;
  }[];
}

const ARCHITECTURE_TIERS: ArchitectureTier[] = [
  {
    id: "client",
    tierNumber: "TIER 01",
    name: "Web & Voice Client Interface",
    subtitle: "Low-latency browser interaction, streaming audio, and state telemetry",
    icon: Layers,
    color: "from-blue-500 to-indigo-600",
    techs: ["ReactJS", "Next.js (App Router)", "Web Audio API", "Tailwind CSS", "Framer Motion"],
    responsibilities: [
      "Bidirectional Opus/PCM audio streaming over WebSockets",
      "Optimized Core Web Vitals with server-side rendered entry points",
      "Interactive telemetry rendering for agent reasoning chains"
    ],
    projectImplementations: [
      {
        projectName: "VoxPilot AI",
        projectId: "voxpilot-ai",
        howUsed: "Real-time microphone capture & WebSocket audio streaming directly to backend."
      },
      {
        projectName: "ReviewGPT",
        projectId: "review-gpt",
        howUsed: "Interactive repository health dashboard with line-level refactoring diffs."
      }
    ]
  },
  {
    id: "api",
    tierNumber: "TIER 02",
    name: "API Gateway & Real-Time Transport",
    subtitle: "High-throughput asynchronous routing and non-blocking event loops",
    icon: Server,
    color: "from-purple-500 to-indigo-600",
    techs: ["FastAPI", "Python AsyncIO", "WebSockets", "Pydantic v2", "Uvicorn"],
    responsibilities: [
      "Sub-100ms API endpoint latency via asynchronous request handling",
      "Bidirectional WebSocket transport for voice streaming",
      "Strict Pydantic JSON schema validation on every inbound request"
    ],
    projectImplementations: [
      {
        projectName: "Sreeva AI",
        projectId: "experience",
        howUsed: "Slashed API response times by ~35% using async pipelines & Redis caching."
      },
      {
        projectName: "VoxPilot AI",
        projectId: "voxpilot-ai",
        howUsed: "FastAPI WebSocket server managing active voice sessions and audio frames."
      }
    ]
  },
  {
    id: "orchestration",
    tierNumber: "TIER 03",
    name: "AI Orchestration & Agent Swarms",
    subtitle: "Autonomous supervisors, selective RAG, and deterministic tool safety",
    icon: Cpu,
    color: "from-emerald-500 to-teal-600",
    techs: ["LangChain", "LangGraph", "OpenAI / Claude / Gemini APIs", "Tavily Search", "Vector Embeddings"],
    responsibilities: [
      "Orchestrating specialized multi-agent roles (Planner, Researcher, Verifier, Writer)",
      "Adaptive model routing with automatic health monitoring and failover",
      "Decoupled risk classification and confirmation gates for tool executions"
    ],
    projectImplementations: [
      {
        projectName: "ResearchGPT",
        projectId: "research-gpt",
        howUsed: "4 synchronized agents executing concurrent web search & fact-checking."
      },
      {
        projectName: "VoxPilot AI",
        projectId: "voxpilot-ai",
        howUsed: "Multi-agent routing with circuit breakers across LLM providers."
      }
    ]
  },
  {
    id: "storage",
    tierNumber: "TIER 04",
    name: "Application State & Vector Persistence",
    subtitle: "Relational integrity, in-memory caching, and semantic embeddings",
    icon: Database,
    color: "from-amber-500 to-orange-600",
    techs: ["PostgreSQL", "Redis", "Vector Databases", "SQLAlchemy", "Indexed Schemas"],
    responsibilities: [
      "In-memory Redis caching for repeated AI queries and session tokens",
      "ACID transactional storage for candidate telemetry and agent DAG logs",
      "High-dimensional vector similarity indexing for document matching"
    ],
    projectImplementations: [
      {
        projectName: "TalentLens AI",
        projectId: "talentlens-ai",
        howUsed: "Vector similarity search matching candidate resumes to job requirements."
      },
      {
        projectName: "Sreeva AI",
        projectId: "experience",
        howUsed: "PostgreSQL schemas and Redis cache invalidation strategies."
      }
    ]
  },
  {
    id: "reliability",
    tierNumber: "TIER 05",
    name: "Observability, Safety & Reliability",
    subtitle: "Circuit breakers, automated tests, session replays, and CI/CD",
    icon: ShieldCheck,
    color: "from-rose-500 to-pink-600",
    techs: ["Pytest (27 Tests)", "Docker Containers", "GitHub Actions CI/CD", "Vercel Edge", "Circuit Breakers"],
    responsibilities: [
      "Sub-second circuit breaker failover when upstream AI APIs degrade",
      "Automated Pytest suites for deterministic safety and routing verification",
      "Per-request token cost calculation, latency tracking, and session replay"
    ],
    projectImplementations: [
      {
        projectName: "VoxPilot AI",
        projectId: "voxpilot-ai",
        howUsed: "27 automated unit & integration tests verifying provider failover & safety."
      },
      {
        projectName: "ReviewGPT",
        projectId: "review-gpt",
        howUsed: "Continuous static AST code analysis & security vulnerability scanning."
      }
    ]
  }
];

export const TechStackEcosystem: React.FC = () => {
  const [activeTierId, setActiveTierId] = useState<string>("orchestration");

  const activeTier = ARCHITECTURE_TIERS.find((t) => t.id === activeTierId) || ARCHITECTURE_TIERS[2];

  return (
    <section id="architecture" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-amber-500/30 text-xs font-mono font-medium text-amber-300 bg-amber-950/30">
            <Cpu className="w-3.5 h-3.5 text-amber-400" />
            <span>HOW I BUILD AI SYSTEMS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            End-to-End <span className="gradient-text-gold">System Architecture</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            An interactive breakdown of how client interfaces, asynchronous APIs, agent swarms, databases, and safety layers connect in my projects.
          </p>
        </div>

        {/* Interactive Architecture Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Interactive Stack Flow Tiers */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center justify-between px-2 pb-2 text-xs font-mono text-gray-500 uppercase tracking-wider">
              <span>Select Architecture Tier</span>
              <span>Flow: Client → Reliability</span>
            </div>

            {ARCHITECTURE_TIERS.map((tier) => {
              const Icon = tier.icon;
              const isActive = activeTierId === tier.id;
              return (
                <button
                  key={tier.id}
                  onClick={() => setActiveTierId(tier.id)}
                  className={`w-full text-left p-4 rounded-2xl glass-panel transition-all flex items-center justify-between border ${
                    isActive
                      ? "border-amber-400/60 bg-amber-950/30 shadow-xl shadow-amber-500/10 text-white"
                      : "border-white/[0.08] hover:border-amber-400/30 hover:bg-white/[0.02] text-gray-300"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`p-2.5 rounded-xl border ${
                        isActive
                          ? "bg-amber-400 text-gray-950 border-amber-400 shadow-md"
                          : "bg-white/[0.04] text-amber-400 border-white/10"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono font-bold text-amber-400">
                          {tier.tierNumber}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-white tracking-tight">{tier.name}</h4>
                      <p className="text-xs text-gray-400 font-mono truncate max-w-xs">
                        {tier.techs.slice(0, 3).join(" · ")}
                      </p>
                    </div>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      isActive ? "translate-x-1 text-amber-400" : "text-gray-600"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right: Active Tier Deep Dive Details Card */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl border border-amber-500/30 bg-[#060b18]/90 space-y-6 shadow-2xl relative overflow-hidden">
            <div className="space-y-2 border-b border-white/[0.08] pb-6">
              <div className="flex items-center gap-2 font-mono text-xs text-amber-400 font-bold">
                <span>{activeTier.tierNumber}</span>
                <span>•</span>
                <span>SYSTEM TIER SPECIFICATION</span>
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">{activeTier.name}</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-mono">
                {activeTier.subtitle}
              </p>
            </div>

            {/* Core Responsibilities */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Architectural Responsibilities:
              </h4>
              <ul className="space-y-2">
                {activeTier.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300 leading-relaxed">
                    <span className="text-amber-400 font-bold font-mono">0{i + 1}.</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies in this Layer */}
            <div className="space-y-2 pt-2 border-t border-white/[0.06]">
              <span className="text-xs font-mono text-gray-400">Layer Stack:</span>
              <div className="flex flex-wrap gap-1.5">
                {activeTier.techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-mono text-amber-300 bg-amber-500/10 rounded-lg border border-amber-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Where It Is Implemented in Srinath's Projects */}
            <div className="space-y-3 pt-2 border-t border-white/[0.06]">
              <h4 className="text-xs font-mono text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                Where It Is Implemented in My Work:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeTier.projectImplementations.map((impl, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 space-y-1.5 hover:border-amber-400/40 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold font-mono text-amber-300">
                        {impl.projectName}
                      </span>
                      <a
                        href={impl.projectId === "experience" ? "#experience" : `#project-${impl.projectId}`}
                        className="text-[10px] font-mono text-gray-400 hover:text-white flex items-center gap-1"
                      >
                        <span>View</span>
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                    <p className="text-[11px] text-gray-300 leading-snug font-mono">
                      {impl.howUsed}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

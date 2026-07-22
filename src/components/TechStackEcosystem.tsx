"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Layers, Cpu, Server, Database, Cloud, ArrowRight, Sparkles } from "lucide-react";

const ECOSYSTEM_LAYERS = [
  {
    id: "frontend",
    title: "1. Client & Presentation Layer",
    icon: Layers,
    color: "from-blue-500 to-indigo-600",
    techs: ["ReactJS", "Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion"],
    description: "Responsive, accessible, server-rendered UIs with optimized Web Vitals."
  },
  {
    id: "backend",
    title: "2. Asynchronous Microservices API",
    icon: Server,
    color: "from-purple-500 to-indigo-600",
    techs: ["FastAPI", "Python Asyncio", "REST APIs", "Django", "Node.js"],
    description: "High-throughput asynchronous gateways delivering sub-100ms API responses."
  },
  {
    id: "ai-agents",
    title: "3. Multi-Agent AI & LLM Engine",
    icon: Cpu,
    color: "from-emerald-500 to-teal-600",
    techs: ["LangChain", "Multi-Agent Swarm", "Tavily Search API", "OpenAI / Claude APIs", "RAG Embeddings"],
    description: "Orchestrated autonomous agents (Planner, Researcher, Verifier, Writer) with rigid schema validation."
  },
  {
    id: "storage",
    title: "4. Telemetry & State Databases",
    icon: Database,
    color: "from-amber-500 to-orange-600",
    techs: ["PostgreSQL", "Redis Caching", "MongoDB", "Vector Databases"],
    description: "Relational persistence, vector similarity search, and high-speed in-memory state caching."
  },
  {
    id: "devops",
    title: "5. DevOps & Cloud CI/CD",
    icon: Cloud,
    color: "from-pink-500 to-rose-600",
    techs: ["Docker Containers", "GitHub Actions CI/CD", "Vercel Edge", "Linux / Bash"],
    description: "Automated test suites, containerized deployments, and zero-downtime production builds."
  }
];

export const TechStackEcosystem: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<string>("ai-agents");

  return (
    <section id="tech-stack" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-blue-500/30 text-xs font-mono font-medium text-blue-400">
            <Layers className="w-3.5 h-3.5" />
            <span>FULL STACK SYSTEM ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Interactive System <span className="gradient-text-purple">Ecosystem</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            How client frontends, asynchronous API backends, multi-agent LLMs, and databases connect in my architecture.
          </p>
        </div>

        {/* System Layer Flow Diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Layer Selectors */}
          <div className="lg:col-span-5 space-y-3">
            {ECOSYSTEM_LAYERS.map((layer) => {
              const Icon = layer.icon;
              const isActive = activeLayer === layer.id;
              return (
                <button
                  key={layer.id}
                  onClick={() => setActiveLayer(layer.id)}
                  className={`w-full text-left p-4 rounded-2xl glass-panel transition-all flex items-center justify-between border ${
                    isActive
                      ? "border-blue-500/50 bg-blue-600/15 shadow-xl"
                      : "border-white/10 hover:border-white/20 hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl bg-gradient-to-tr ${layer.color} text-white shadow-md`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{layer.title}</h4>
                      <p className="text-xs text-gray-400 font-mono">{layer.techs.slice(0, 3).join(", ")}</p>
                    </div>
                  </div>

                  <ArrowRight className={`w-4 h-4 text-gray-400 transition-transform ${isActive ? "translate-x-1 text-blue-400" : ""}`} />
                </button>
              );
            })}
          </div>

          {/* Right Selected Layer Visual Card */}
          <div className="lg:col-span-7">
            {ECOSYSTEM_LAYERS.map((layer) => {
              if (layer.id !== activeLayer) return null;
              const Icon = layer.icon;
              return (
                <motion.div
                  key={layer.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="glass-panel p-8 rounded-3xl border border-white/15 space-y-6 relative overflow-hidden shadow-2xl"
                >
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-2xl bg-gradient-to-tr ${layer.color} text-white`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-mono text-blue-400 uppercase">Architecture Telemetry</span>
                        <h3 className="text-2xl font-bold text-white">{layer.title}</h3>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                      ACTIVE LAYER
                    </span>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {layer.description}
                  </p>

                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs font-mono text-gray-400 uppercase">Key Core Technologies &amp; Frameworks</h4>
                    <div className="flex flex-wrap gap-2.5">
                      {layer.techs.map((t) => (
                        <span
                          key={t}
                          className="px-3.5 py-1.5 text-xs font-mono font-medium text-white glass-panel rounded-xl border border-white/15 shadow-sm"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Flow Connection Hint */}
                  <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-gray-400">
                    <span>Integration Status: Fully Synchronized</span>
                    <span className="text-blue-400">Sub-100ms Latency Pipeline</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

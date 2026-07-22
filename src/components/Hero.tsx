"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Mail,
  ArrowDown,
  Sparkles,
  Zap,
  Terminal,
  ShieldCheck,
  Code2,
  Cpu,
  ChevronRight,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { PERSONAL_INFO } from "../lib/data";

const ROTATING_TITLES = [
  "AI Systems Engineer",
  "Full Stack Architect",
  "Agentic Workflow Builder",
  "FastAPI & LLM Specialist",
  "Production Software Engineer",
];

export const Hero: React.FC = () => {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % ROTATING_TITLES.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center items-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Content Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left space-y-6"
          >
            {/* Live Availability Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-emerald-500/30 text-xs font-medium text-emerald-400 bg-emerald-950/20 shadow-lg">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>{PERSONAL_INFO.availabilityStatus}</span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-300 font-mono">Hyderabad, IN</span>
            </div>

            {/* Large Typography Name */}
            <div className="space-y-2">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
                Srinath <span className="gradient-text-apple">Doggala</span>
              </h1>

              {/* Title Rotator */}
              <div className="h-10 sm:h-12 flex items-center text-xl sm:text-2xl font-mono font-semibold text-blue-400">
                <Terminal className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-indigo-400 flex-shrink-0" />
                <span className="text-gray-500 mr-2">&gt;</span>
                <motion.span
                  key={ROTATING_TITLES[titleIndex]}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="bg-gradient-to-r from-blue-400 via-purple-300 to-indigo-300 bg-clip-text text-transparent"
                >
                  {ROTATING_TITLES[titleIndex]}
                </motion.span>
                <span className="inline-block w-2 h-6 bg-blue-500 ml-1 animate-pulse" />
              </div>
            </div>

            {/* Professional Headline */}
            <p className="text-lg sm:text-xl text-gray-300 font-light leading-relaxed max-w-2xl">
              Founding AI Full Stack Engineer Intern building{" "}
              <strong className="text-white font-medium">autonomous multi-agent AI systems</strong>,{" "}
              <strong className="text-white font-medium">high-throughput FastAPI backends</strong>, and{" "}
              <strong className="text-white font-medium">production-grade web platforms</strong>.
            </p>

            {/* CTA Buttons Row */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-xl shadow-blue-500/25 transition-all duration-200"
              >
                <span>View Engineering Work</span>
                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-gray-200 glass-panel rounded-xl border border-white/15 hover:border-blue-500/40 hover:bg-white/5 transition-all duration-200"
              >
                <FileText className="w-4 h-4 mr-2 text-blue-400" />
                <span>Resume</span>
              </a>

              {/* Quick Social Buttons */}
              <div className="flex items-center gap-2">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-gray-400 hover:text-white glass-panel rounded-xl border border-white/15 hover:border-blue-500/40 transition-colors"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-gray-400 hover:text-white glass-panel rounded-xl border border-white/15 hover:border-blue-500/40 transition-colors"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-3 text-gray-400 hover:text-white glass-panel rounded-xl border border-white/15 hover:border-blue-500/40 transition-colors"
                  title="Direct Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Metrics Banner */}
            <div className="pt-6 border-t border-white/10 w-full grid grid-cols-3 gap-4">
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                  35%
                </span>
                <span className="text-xs text-gray-400">API Speedup</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                  500+
                </span>
                <span className="text-xs text-gray-400">Documents Benchmark</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                  4
                </span>
                <span className="text-xs text-gray-400">Autonomous Agents</span>
              </div>
            </div>
          </motion.div>

          {/* Interactive Profile & Code Telemetry Card Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Outer Glow Ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl blur-xl opacity-40 animate-pulse-glow" />

              {/* Code IDE Glass Terminal Card */}
              <div className="relative glass-panel rounded-2xl border border-white/15 overflow-hidden shadow-2xl p-5 space-y-4">
                {/* Mac OS Window Header */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-xs font-mono text-gray-400 flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5 text-blue-400" />
                    srinath_doggala.py
                  </span>
                  <div className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-300">
                    PYTHON 3.12
                  </div>
                </div>

                {/* Simulated Code Telemetry */}
                <div className="font-mono text-xs sm:text-sm space-y-2 leading-relaxed text-gray-300">
                  <div>
                    <span className="text-purple-400">class</span>{" "}
                    <span className="text-blue-300 font-bold">AIFullStackEngineer</span>:
                  </div>
                  <div className="pl-4">
                    <span className="text-purple-400">def</span>{" "}
                    <span className="text-yellow-300">__init__</span>(self):
                  </div>
                  <div className="pl-8 text-gray-400">
                    self.name = <span className="text-emerald-300">&quot;Srinath Doggala&quot;</span>
                  </div>
                  <div className="pl-8 text-gray-400">
                    self.role = <span className="text-emerald-300">&quot;Founding AI Engineer Intern @ Sreeva AI&quot;</span>
                  </div>
                  <div className="pl-8 text-gray-400">
                    self.stack = [
                    <span className="text-emerald-300">&quot;Python&quot;</span>,{" "}
                    <span className="text-emerald-300">&quot;FastAPI&quot;</span>,{" "}
                    <span className="text-emerald-300">&quot;React&quot;</span>,{" "}
                    <span className="text-emerald-300">&quot;LangChain&quot;</span>]
                  </div>

                  <div className="pt-2 pl-4">
                    <span className="text-purple-400">async def</span>{" "}
                    <span className="text-yellow-300">deploy_agent_swarm</span>(self, query):
                  </div>
                  <div className="pl-8 text-gray-400">
                    agents = [<span className="text-blue-300">&quot;Planner&quot;</span>, <span className="text-blue-300">&quot;Researcher&quot;</span>, <span className="text-blue-300">&quot;Verifier&quot;</span>, <span className="text-blue-300">&quot;Writer&quot;</span>]
                  </div>
                  <div className="pl-8 text-indigo-300">
                    return await self.langchain.execute_swarm(agents)
                  </div>
                </div>

                {/* Status Telemetry Bar */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-gray-400 font-mono">
                  <div className="flex items-center gap-1.5 text-emerald-400">
                    <ShieldCheck className="w-4 h-4" />
                    <span>PostgreSQL &amp; Redis Ready</span>
                  </div>
                  <span className="text-blue-400 font-semibold">95+ Lighthouse</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Target Recruiters Marquee Banner */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-xs uppercase font-mono tracking-widest text-gray-500 mb-4">
            Engineered for High-Performance Engineering Teams &amp; AI Labs
          </p>
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 opacity-70 hover:opacity-100 transition-opacity">
            {PERSONAL_INFO.targetCompanies.map((company) => (
              <span
                key={company}
                className="px-3 py-1 text-xs font-mono text-gray-400 glass-panel rounded-md border border-white/5 hover:border-blue-500/30 hover:text-white transition-all"
              >
                {company}
              </span>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-12">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-xs text-gray-500 hover:text-blue-400 transition-colors group"
          >
            <span className="font-mono">SCROLL DOWN</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-blue-500" />
          </a>
        </div>
      </div>
    </section>
  );
};

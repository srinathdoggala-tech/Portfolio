"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  ExternalLink,
  Sparkles,
  Layers,
  Cpu,
  CheckCircle2,
  ArrowRight,
  X,
  Shield,
  Zap,
  Terminal,
  AlertTriangle,
  FileCheck,
  CheckCircle,
  HelpCircle,
  Radio
} from "lucide-react";
import { GithubIcon } from "./Icons";
import { PROJECTS, Project } from "../lib/data";

const CATEGORY_FILTERS = [
  "All Projects",
  "Voice AI & Agents",
  "AI Developer Tooling",
  "Document Intelligence",
  "Computer Vision"
];

export const Projects: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [selectedFilter, setSelectedFilter] = useState("All Projects");

  const filteredProjects = PROJECTS.filter((p) => {
    if (selectedFilter === "All Projects") return true;
    if (selectedFilter === "Voice AI & Agents") return p.id === "voxpilot-ai" || p.id === "research-gpt";
    if (selectedFilter === "AI Developer Tooling") return p.id === "review-gpt";
    if (selectedFilter === "Document Intelligence") return p.id === "talentlens-ai";
    if (selectedFilter === "Computer Vision") return p.id === "fruit-veg-recognition";
    return true;
  });

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-amber-500/30 text-xs font-mono font-medium text-amber-300 bg-amber-950/30">
            <Code2 className="w-3.5 h-3.5 text-amber-400" />
            <span>SELECTED ENGINEERING WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Production-Oriented <span className="gradient-text-gold">Case Studies</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Engineering evidence across real-time voice streaming, multi-agent pipelines, developer tooling, and document intelligence.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {CATEGORY_FILTERS.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                selectedFilter === cat
                  ? "bg-amber-400 text-gray-950 font-bold shadow-lg shadow-amber-500/20"
                  : "glass-panel border border-white/10 text-gray-400 hover:text-white hover:border-amber-400/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Showcase Cards Grid */}
        <div className="space-y-16">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              id={`project-${project.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`glass-panel rounded-3xl border overflow-hidden shadow-2xl transition-all duration-300 relative group ${
                project.id === "voxpilot-ai"
                  ? "border-amber-500/40 bg-gradient-to-b from-[#0b1328] to-[#040816]"
                  : "border-white/10 bg-[#060c1d]/90 hover:border-amber-400/40"
              }`}
            >
              {/* Outer Subtle Radial Background Glow */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-cyan-600/15 transition-all" />

              <div className="p-6 sm:p-10 space-y-8">
                {/* Header Row: Category, Number, Title, Live Status */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="px-3 py-1 text-xs font-mono font-bold text-amber-300 bg-amber-950/60 rounded-full border border-amber-500/40">
                        Case Study 0{idx + 1}
                      </span>
                      <span className="text-xs font-mono text-gray-400">{project.category}</span>
                      <span className="text-xs font-mono text-cyan-400 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                        Verified Implementation
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-amber-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-amber-300/90 text-sm font-medium font-mono">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Top Action Links */}
                  <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3.5 py-2 text-xs font-semibold text-gray-200 glass-panel rounded-xl border border-white/15 hover:border-amber-400 hover:text-white transition-all"
                      title="Inspect GitHub Repository"
                    >
                      <GithubIcon className="w-3.5 h-3.5 mr-1.5" />
                      <span>Source</span>
                    </a>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 text-xs font-bold text-gray-950 bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 rounded-xl shadow-md transition-all"
                      >
                        <span>Live System</span>
                        <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Case Study 2-Column: Problem vs What I Built */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* The Problem */}
                  <div className="p-5 rounded-2xl bg-red-950/20 border border-red-500/20 space-y-2.5">
                    <div className="flex items-center gap-2 text-red-400 font-mono text-xs font-bold uppercase tracking-wider">
                      <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                      <span>The Engineering Problem</span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                      {project.problem || project.description}
                    </p>
                  </div>

                  {/* What I Built */}
                  <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/20 space-y-2.5">
                    <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                      <span>What I Built &amp; Solved</span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                      {project.whatIBuilt || project.longDescription}
                    </p>
                  </div>
                </div>

                {/* Architecture Pipeline & Evidence Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Left: 4-Stage Architecture Steps */}
                  <div className="lg:col-span-7 glass-panel p-5 sm:p-6 rounded-2xl border border-white/10 space-y-3 bg-black/40">
                    <div className="flex items-center justify-between pb-2 border-b border-white/[0.08] font-mono text-xs text-gray-400">
                      <span className="flex items-center gap-1.5 text-amber-300 font-bold">
                        <Cpu className="w-4 h-4" />
                        {project.architecture.title}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-white/5 text-gray-400">
                        PIPELINE TRACE
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-mono text-xs pt-1">
                      {project.architecture.steps.map((s, sIdx) => (
                        <div
                          key={sIdx}
                          className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1 hover:border-amber-400/30 transition-colors"
                        >
                          <div className="text-amber-300 font-bold flex items-center justify-between">
                            <span className="text-[11px] truncate">{s.step}</span>
                            <span className="text-[10px] text-gray-500">S0{sIdx + 1}</span>
                          </div>
                          <p className="text-gray-400 text-[11px] leading-relaxed line-clamp-3">
                            {s.detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: Concrete Verifiable Evidence Box */}
                  <div className="lg:col-span-5 glass-panel p-5 sm:p-6 rounded-2xl border border-amber-500/20 bg-amber-950/10 space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
                      <span className="text-xs font-mono font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                        <Shield className="w-3.5 h-3.5 text-amber-400" />
                        Verifiable Evidence
                      </span>
                      <span className="text-[10px] font-mono text-emerald-400">PASSED</span>
                    </div>

                    <ul className="space-y-2 text-xs font-mono text-gray-300">
                      {(project.evidence || project.metrics).map((e, eIdx) => (
                        <li key={eIdx} className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span className="leading-snug">{e}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Optional Status Note (e.g. for VoxPilot backend requirement) */}
                    {project.statusNote && (
                      <div className="p-3 rounded-xl bg-blue-950/30 border border-blue-500/20 text-[11px] font-mono text-blue-300 space-y-1 mt-3">
                        <span className="text-blue-400 font-bold block">💡 System Status Note:</span>
                        <p className="text-gray-300 leading-snug">{project.statusNote}</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer Bar: Tech Badges & Deep Dive Trigger */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-white/[0.08]">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {project.technologies.slice(0, 7).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-mono text-gray-300 bg-white/[0.04] rounded-lg border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 7 && (
                      <span className="text-xs font-mono text-gray-500">
                        +{project.technologies.length - 7} more
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="inline-flex items-center text-xs font-mono font-semibold text-amber-400 hover:text-amber-300 transition-colors self-start sm:self-auto"
                  >
                    <span>Inspect System Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Architecture Modal */}
        <AnimatePresence>
          {activeModalProject && (
            <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 overflow-y-auto">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveModalProject(null)}
                className="fixed inset-0 bg-black/80 backdrop-blur-md"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-4xl glass-panel rounded-3xl border border-amber-500/30 bg-[#060b18] overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col"
              >
                {/* Modal Header */}
                <div className="p-6 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
                  <div>
                    <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">
                      Case Study Architecture Breakdown
                    </span>
                    <h3 className="text-2xl font-bold text-white">{activeModalProject.title}</h3>
                  </div>
                  <button
                    onClick={() => setActiveModalProject(null)}
                    className="p-2 text-gray-400 hover:text-white rounded-full glass-panel hover:bg-white/10 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Modal Scrollable Body */}
                <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
                  {/* Detailed Overview */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                      Architectural Intent
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {activeModalProject.longDescription}
                    </p>
                  </div>

                  {/* Challenges & Engineering Solutions */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="glass-panel p-5 rounded-2xl border border-red-500/20 bg-red-950/10 space-y-3">
                      <h5 className="text-sm font-bold text-red-400 flex items-center gap-2">
                        <Terminal className="w-4 h-4" /> Technical Failure Modes Solved
                      </h5>
                      <ul className="space-y-2 text-xs text-gray-300 font-mono">
                        {activeModalProject.challenges.map((c, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-red-400 font-bold">•</span>
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="glass-panel p-5 rounded-2xl border border-emerald-500/20 bg-emerald-950/10 space-y-3">
                      <h5 className="text-sm font-bold text-emerald-400 flex items-center gap-2">
                        <Shield className="w-4 h-4" /> Engineering Safeguards
                      </h5>
                      <ul className="space-y-2 text-xs text-gray-300 font-mono">
                        {activeModalProject.solutions.map((s, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Core Features */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                      System Capabilities
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
                      {activeModalProject.features.map((f, i) => (
                        <div
                          key={i}
                          className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-gray-200 flex items-center gap-2"
                        >
                          <Sparkles className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="p-6 border-t border-white/10 bg-black/40 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <a
                      href={activeModalProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-xs font-semibold text-gray-300 glass-panel rounded-xl hover:text-white border border-white/15"
                    >
                      Inspect GitHub Repo
                    </a>
                    {activeModalProject.liveUrl && (
                      <a
                        href={activeModalProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 text-xs font-bold text-gray-950 bg-amber-400 rounded-xl hover:bg-amber-300 shadow-md"
                      >
                        Open Live System
                      </a>
                    )}
                  </div>
                  <button
                    onClick={() => setActiveModalProject(null)}
                    className="text-xs text-gray-400 hover:text-white font-mono"
                  >
                    Close (ESC)
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

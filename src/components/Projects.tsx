"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, ExternalLink, Sparkles, Layers, Cpu, CheckCircle2, ArrowRight, X, Shield, Zap, Terminal } from "lucide-react";
import { GithubIcon } from "./Icons";
import { PROJECTS, Project } from "../lib/data";

export const Projects: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-blue-500/30 text-xs font-mono font-medium text-blue-400">
            <Code2 className="w-3.5 h-3.5" />
            <span>FEATURED AI &amp; FULL STACK PROJECTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Production-Ready <span className="gradient-text-apple">AI Architectures</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Every project is engineered with full-stack completeness, rigorous state management, and production AI pipelines.
          </p>
        </div>

        {/* Projects Showcase Cards Grid */}
        <div className="space-y-16">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              id={`project-${project.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-panel rounded-3xl border border-white/15 overflow-hidden shadow-2xl transition-all duration-300 hover:border-blue-500/40 relative group"
            >
              {/* Outer Subtle Radial Background Glow */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-purple-600/15 transition-all" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 items-center">
                {/* Left Info Column */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3 py-1 text-xs font-mono font-bold text-blue-400 bg-blue-500/10 rounded-full border border-blue-500/20">
                      {project.category}
                    </span>
                    <span className="text-xs font-mono text-gray-400">{project.year}</span>
                    <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Production Architecture
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-blue-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-blue-400 text-sm font-medium font-mono">
                      {project.tagline}
                    </p>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Impact Telemetry Badges */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {project.metrics.slice(0, 2).map((m) => (
                      <div key={m} className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-xs font-mono text-gray-300 flex items-center gap-2">
                        <Zap className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                        <span>{m}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Badges */}
                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-mono text-gray-400">Key Technologies:</span>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="px-2.5 py-1 text-xs font-mono text-gray-300 glass-panel rounded-md border border-white/10">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="inline-flex items-center px-5 py-2.5 text-xs font-semibold text-white rounded-xl bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-500/20 transition-all"
                    >
                      <span>Deep Dive Architecture</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-2" />
                    </button>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2.5 text-xs font-medium text-gray-300 glass-panel rounded-xl border border-white/15 hover:border-blue-500/40 hover:text-white transition-all"
                    >
                      <GithubIcon className="w-4 h-4 mr-2 text-gray-400" />
                      <span>Source Code</span>
                    </a>

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2.5 text-xs font-medium text-blue-400 glass-panel rounded-xl border border-blue-500/30 hover:border-blue-500/60 hover:text-blue-300 transition-all"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      <span>Live System</span>
                    </a>
                  </div>
                </div>

                {/* Right Architecture Breakdown Visual Column */}
                <div className="lg:col-span-5 glass-panel p-6 rounded-2xl border border-white/10 space-y-4 bg-black/40">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 font-mono text-xs text-gray-400">
                    <span className="flex items-center gap-1.5 text-blue-400 font-bold">
                      <Cpu className="w-4 h-4" />
                      {project.architecture.title}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-white/5 text-gray-400">ASYNC PIPELINE</span>
                  </div>

                  {/* Step Diagram */}
                  <div className="space-y-3 font-mono text-xs">
                    {project.architecture.steps.map((s, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-1 hover:border-blue-500/30 transition-colors">
                        <div className="text-blue-300 font-bold flex items-center justify-between">
                          <span>{s.step}</span>
                          <span className="text-[10px] text-gray-500">STAGE {idx + 1}</span>
                        </div>
                        <p className="text-gray-400 text-[11px] leading-relaxed">{s.detail}</p>
                      </div>
                    ))}
                  </div>
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
                className="relative w-full max-w-4xl glass-panel rounded-3xl border border-white/20 overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col"
              >
                {/* Modal Header */}
                <div className="p-6 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
                  <div>
                    <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">System Deep Dive</span>
                    <h3 className="text-2xl font-bold text-white">{activeModalProject.title}</h3>
                  </div>
                  <button
                    onClick={() => setActiveModalProject(null)}
                    className="p-2 text-gray-400 hover:text-white rounded-full glass-panel"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Modal Scrollable Body */}
                <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
                  {/* Detailed Overview */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-mono text-gray-400 uppercase">Architecture Overview</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{activeModalProject.longDescription}</p>
                  </div>

                  {/* Challenges & Engineering Solutions */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="glass-panel p-5 rounded-2xl border border-red-500/20 bg-red-950/10 space-y-3">
                      <h5 className="text-sm font-bold text-red-400 flex items-center gap-2">
                        <Terminal className="w-4 h-4" /> Key Technical Challenges
                      </h5>
                      <ul className="space-y-2 text-xs text-gray-300">
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
                        <Shield className="w-4 h-4" /> Architectural Solutions
                      </h5>
                      <ul className="space-y-2 text-xs text-gray-300">
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
                    <h4 className="text-sm font-mono text-gray-400 uppercase">Key System Features</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {activeModalProject.features.map((f, i) => (
                        <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-gray-200 flex items-center gap-2">
                          <Sparkles className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
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
                      GitHub Repo
                    </a>
                    <a
                      href={activeModalProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-500 shadow-md"
                    >
                      Open Live Demo
                    </a>
                  </div>
                  <button
                    onClick={() => setActiveModalProject(null)}
                    className="text-xs text-gray-400 hover:text-white font-mono"
                  >
                    Close Modal (ESC)
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

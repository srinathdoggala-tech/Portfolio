"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Zap, Code2, ShieldCheck, Award, Sparkles, TrendingUp, Layers, CheckCircle2 } from "lucide-react";
import { QUICK_STATS, PERSONAL_INFO } from "../lib/data";

const ENGINEERING_VALUES = [
  {
    icon: Zap,
    title: "Production Latency Rigor",
    description: "Prioritizing asynchronous API pipelines, Redis caching, and database query indexing to slice response latencies by 35%."
  },
  {
    icon: Cpu,
    title: "Agentic Systems Orchestration",
    description: "Architecting multi-agent AI swarms (Planner, Researcher, Verifier, Writer) with rigid schema validation to eliminate hallucinations."
  },
  {
    icon: Layers,
    title: "End-to-End Full Stack Ownership",
    description: "Bridging modern Next.js/React frontends seamlessly with Python FastAPI microservices and PostgreSQL vector databases."
  },
  {
    icon: ShieldCheck,
    title: "Automated Deployment & Testing",
    description: "Containerizing services with Docker and automating GitHub Actions CI/CD to guarantee reproducible production releases."
  }
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-blue-500/30 text-xs font-mono font-medium text-blue-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ABOUT &amp; ENGINEERING MINDSET</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Crafting Scalable AI &amp; <span className="gradient-text-purple">Full Stack Systems</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            I am a Computer Science Engineering student specialized in AI/ML and a Founding AI Full Stack Engineer Intern at Sreeva AI. My focus is engineering production-grade software that combines modern user interfaces with intelligent backend architectures.
          </p>
        </div>

        {/* Live Impact Counter Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {QUICK_STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel glass-panel-hover p-6 rounded-2xl border border-white/10 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-xl group-hover:bg-purple-500/20 transition-all" />
              <div className="space-y-2">
                <span className="text-4xl sm:text-5xl font-extrabold font-mono text-white tracking-tight group-hover:text-blue-400 transition-colors">
                  {stat.value}
                </span>
                <h3 className="text-base font-semibold text-gray-200">{stat.label}</h3>
                <p className="text-xs text-gray-400 font-mono">{stat.subtext}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Story & Engineering Values Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Bio Story Card */}
          <div className="lg:col-span-5 glass-panel p-8 rounded-3xl border border-white/15 space-y-6 relative overflow-hidden">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                <Code2 className="w-6 h-6 text-blue-400" />
                The Engineering Narrative
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                As an engineer, I view software through both an algorithmic and product lens. At <strong className="text-white">Sreeva AI</strong>, I build full-stack features, asynchronous FastAPI pipelines, and Redis caching systems that reduced API latency by 35%.
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                My project work ranges from autonomous multi-agent research swarms (<strong className="text-white">ResearchGPT</strong>) to AI-powered code review engines (<strong className="text-white">ReviewGPT</strong>), stress-testing AI ATS platforms on <strong className="text-white">500+ resumes</strong> (<strong className="text-white">TalentLens AI</strong>), and edge computer vision inference (<strong className="text-white">MobileNetV2 Fruit/Veg AI</strong>).
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-3 text-xs font-mono text-gray-400">
              <div className="flex items-center justify-between">
                <span>Location:</span>
                <span className="text-white">{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>University:</span>
                <span className="text-white">Chandigarh University (2023-2027)</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Current Role:</span>
                <span className="text-emerald-400 font-medium">Founding AI Full Stack Intern @ Sreeva AI</span>
              </div>
            </div>
          </div>

          {/* Core Values Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {ENGINEERING_VALUES.map((val, i) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass-panel glass-panel-hover p-6 rounded-2xl border border-white/10 space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white">{val.title}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">{val.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

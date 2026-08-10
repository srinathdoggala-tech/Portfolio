"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Zap,
  Code2,
  ShieldCheck,
  Sparkles,
  Layers,
  MapPin,
  Mail,
  Phone,
  ExternalLink,
  Download,
} from "lucide-react";
import Image from "next/image";
import { QUICK_STATS, PERSONAL_INFO } from "../lib/data";
import { GithubIcon, LinkedinIcon } from "./Icons";

const ENGINEERING_VALUES = [
  {
    icon: Zap,
    title: "Production Latency Rigor",
    description:
      "Prioritizing asynchronous API pipelines, Redis caching, and database query indexing to slice response latencies by 35%.",
  },
  {
    icon: Cpu,
    title: "Agentic Systems Orchestration",
    description:
      "Architecting multi-agent AI swarms (Planner, Researcher, Verifier, Writer) with rigid schema validation to eliminate hallucinations.",
  },
  {
    icon: Layers,
    title: "End-to-End Full Stack Ownership",
    description:
      "Bridging modern Next.js/React frontends seamlessly with Python FastAPI microservices and PostgreSQL vector databases.",
  },
  {
    icon: ShieldCheck,
    title: "Automated Deployment & Testing",
    description:
      "Containerizing services with Docker and automating GitHub Actions CI/CD to guarantee reproducible production releases.",
  },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-amber-500/30 text-xs font-mono font-medium text-amber-300 bg-amber-950/30">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>ABOUT &amp; ENGINEERING MINDSET</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Crafting Scalable AI &amp; <span className="gradient-text-gold">Full Stack Systems</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            I am a Computer Science Engineering student specialized in AI/ML and a Founding AI Full Stack Engineer
            Intern at Sreeva AI. My focus is engineering production-grade software that combines modern user
            interfaces with intelligent backend architectures.
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
              className="glass-panel glass-panel-hover p-6 rounded-2xl border border-amber-500/20 hover:border-amber-400/50 bg-amber-950/10 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-full blur-xl group-hover:bg-cyan-500/20 transition-all" />
              <div className="text-3xl font-extrabold text-amber-300 font-mono tracking-tight group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-gray-200 mt-2">{stat.label}</div>
              <div className="text-xs text-gray-400 mt-1 leading-snug">{stat.subtext}</div>
            </motion.div>
          ))}
        </div>

        {/* Main About Grid: Photo Card + Story + Values */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Profile Photo Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 flex justify-center"
          >
            <div className="w-full max-w-xs space-y-4">
              {/* Photo Frame */}
              <div className="relative glass-panel rounded-3xl border border-amber-500/25 overflow-hidden p-5 bg-gradient-to-b from-amber-950/15 to-slate-950/40">
                {/* Ambient glows */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

                {/* Photo */}
                <div className="relative flex justify-center mb-4">
                  <div className="relative w-36 h-36 sm:w-44 sm:h-44">
                    {/* Animated gradient ring */}
                    <div className="about-photo-ring absolute -inset-1 rounded-full" />
                    <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-slate-800/80 shadow-2xl shadow-amber-900/30">
                      <Image
                        src="/profile.jpg"
                        alt="Srinath Doggala — AI Engineer"
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 144px, 176px"
                      />
                    </div>
                  </div>
                </div>

                {/* Name */}
                <div className="text-center space-y-1 mb-5 relative">
                  <h3 className="text-lg font-extrabold text-white">Srinath Doggala</h3>
                  <p className="text-xs text-amber-300/80 font-mono">AI Engineer · Full Stack</p>
                </div>

                {/* Contact links */}
                <div className="relative space-y-2">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.07] hover:border-amber-500/30 hover:bg-amber-950/20 transition-all group"
                  >
                    <Mail className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                    <span className="text-xs text-gray-300 truncate group-hover:text-amber-200 transition-colors">
                      {PERSONAL_INFO.email}
                    </span>
                  </a>
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.07] hover:border-amber-500/30 hover:bg-amber-950/20 transition-all"
                  >
                    <Phone className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                    <span className="text-xs text-gray-300">{PERSONAL_INFO.phone}</span>
                  </a>
                  <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.07]">
                    <MapPin className="w-3.5 h-3.5 text-violet-400 flex-shrink-0" />
                    <span className="text-xs text-gray-300">{PERSONAL_INFO.location}</span>
                  </div>
                </div>

                {/* Social + Resume */}
                <div className="relative flex items-center gap-2 mt-4 pt-4 border-t border-white/[0.06]">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.07] hover:border-amber-500/30 hover:bg-amber-950/20 transition-all text-gray-300 hover:text-amber-200"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span className="text-xs font-mono">GitHub</span>
                  </a>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.07] hover:border-cyan-500/30 hover:bg-cyan-950/20 transition-all text-gray-300 hover:text-cyan-200"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                    <span className="text-xs font-mono">LinkedIn</span>
                  </a>
                  <a
                    href="#contact"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-amber-500/15 border border-amber-500/30 hover:bg-amber-500/25 transition-all text-amber-300"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span className="text-xs font-mono">Resume</span>
                  </a>
                </div>
              </div>

              {/* Portfolio URL pill */}
              <a
                href={PERSONAL_INFO.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 rounded-2xl glass-panel border border-amber-500/20 hover:border-amber-400/40 transition-all text-xs font-mono text-gray-400 hover:text-amber-300 group"
              >
                <ExternalLink className="w-3.5 h-3.5 group-hover:text-amber-400 transition-colors" />
                <span>srinathdoggala.tech</span>
              </a>
            </div>
          </motion.div>

          {/* Bio Story + Values Grid */}
          <div className="lg:col-span-8 space-y-8">
            {/* Bio Story Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-panel p-8 rounded-3xl border border-amber-500/20 bg-amber-950/10 space-y-6 relative overflow-hidden"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                  <Code2 className="w-6 h-6 text-amber-400" />
                  The Engineering Narrative
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  As an engineer, I view software through both an algorithmic and product lens. At{" "}
                  <strong className="text-amber-200">Sreeva AI</strong>, I build full-stack features, asynchronous
                  FastAPI pipelines, and Redis caching systems that reduced API latency by 35%.
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  My project work ranges from autonomous multi-agent research swarms (
                  <strong className="text-cyan-300">ResearchGPT</strong>) to AI-powered code review engines (
                  <strong className="text-cyan-300">ReviewGPT</strong>), stress-testing AI ATS platforms on{" "}
                  <strong className="text-amber-200">500+ resumes</strong> (
                  <strong className="text-cyan-300">TalentLens AI</strong>), and edge computer vision inference (
                  <strong className="text-amber-200">MobileNetV2 Fruit/Veg AI</strong>).
                </p>
              </div>

              <div className="pt-4 border-t border-amber-500/20 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-gray-400">
                <div className="space-y-1">
                  <span className="text-gray-500">Location</span>
                  <div className="text-white font-medium">{PERSONAL_INFO.location}</div>
                </div>
                <div className="space-y-1">
                  <span className="text-gray-500">University</span>
                  <div className="text-white font-medium">Chandigarh University (2023–2027)</div>
                </div>
                <div className="space-y-1">
                  <span className="text-gray-500">Current Role</span>
                  <div className="text-amber-300 font-medium">Founding AI Full Stack Intern @ Sreeva AI</div>
                </div>
              </div>
            </motion.div>

            {/* Core Values Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {ENGINEERING_VALUES.map((val, i) => {
                const Icon = val.icon;
                return (
                  <motion.div
                    key={val.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="glass-panel glass-panel-hover p-6 rounded-2xl border border-amber-500/20 hover:border-amber-400/50 bg-amber-950/10 space-y-3"
                  >
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
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
      </div>
    </section>
  );
};

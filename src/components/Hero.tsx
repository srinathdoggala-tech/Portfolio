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
  ChevronRight,
  Gauge,
  FileCheck2,
  Bot,
  MapPin,
  GraduationCap,
  Briefcase,
  Star,
} from "lucide-react";
import Image from "next/image";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { PERSONAL_INFO } from "../lib/data";
import { LiveStatusWidget } from "./LiveStatusWidget";
import { CompanyMarquee } from "./CompanyMarquee";

const ROTATING_TITLES = [
  "AI Systems Engineer",
  "Full Stack Architect",
  "Agentic Workflow Builder",
  "FastAPI & LLM Specialist",
  "Production Software Engineer",
];

interface HeroProps {
  onOpenTerminal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTerminal }) => {
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Content Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left space-y-6"
          >
            {/* Live Availability & Hyderabad Timezone Widget */}
            <LiveStatusWidget />

            {/* Large Typography Name with Shimmer Gradient */}
            <div className="space-y-2">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
                Srinath{" "}
                <span className="gradient-text-gold drop-shadow-md">
                  Doggala
                </span>
              </h1>

              {/* Title Rotator */}
              <div className="h-10 sm:h-12 flex items-center text-xl sm:text-2xl font-mono font-semibold">
                <Terminal className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-amber-400 flex-shrink-0" />
                <span className="text-gray-500 mr-2">&gt;</span>
                <motion.span
                  key={ROTATING_TITLES[titleIndex]}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="bg-gradient-to-r from-amber-200 via-yellow-400 to-cyan-300 bg-clip-text text-transparent"
                >
                  {ROTATING_TITLES[titleIndex]}
                </motion.span>
                <span className="inline-block w-2 h-6 bg-amber-400 ml-1 animate-pulse" />
              </div>
            </div>

            {/* Professional Headline */}
            <p className="text-lg sm:text-xl text-gray-300 font-light leading-relaxed max-w-2xl">
              Founding AI Full Stack Engineer Intern building{" "}
              <strong className="text-amber-200 font-medium">autonomous multi-agent AI systems</strong>,{" "}
              <strong className="text-cyan-300 font-medium">high-throughput FastAPI backends</strong>, and{" "}
              <strong className="text-white font-medium">production-grade web platforms</strong>.
            </p>

            {/* CTA Buttons Row */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold text-gray-950 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 shadow-xl shadow-amber-500/25 transition-all duration-200"
              >
                <span>View Engineering Work</span>
                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/resume.pdf"
                download="Srinath_Doggala_Resume.pdf"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-gray-200 glass-panel rounded-xl border border-amber-500/20 hover:border-amber-400/50 hover:bg-amber-950/20 transition-all duration-200"
              >
                <FileText className="w-4 h-4 mr-2 text-amber-400" />
                <span>Resume</span>
              </a>

              {onOpenTerminal && (
                <button
                  onClick={onOpenTerminal}
                  className="inline-flex items-center justify-center px-5 py-3.5 text-sm font-mono font-bold text-cyan-300 bg-cyan-950/40 rounded-xl border border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-950/80 transition-all duration-200 group"
                  title="Open Interactive Shell (Ctrl+~)"
                >
                  <Terminal className="w-4 h-4 mr-2 text-cyan-400 group-hover:animate-pulse" />
                  <span>Launch CLI</span>
                </button>
              )}

              {/* Quick Social Buttons */}
              <div className="flex items-center gap-2">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-gray-400 hover:text-white glass-panel rounded-xl border border-amber-500/20 hover:border-amber-400/40 transition-colors"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-gray-400 hover:text-white glass-panel rounded-xl border border-amber-500/20 hover:border-amber-400/40 transition-colors"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-3 text-gray-400 hover:text-white glass-panel rounded-xl border border-amber-500/20 hover:border-amber-400/40 transition-colors"
                  title="Direct Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Elevated Glassmorphic Metrics Cards */}
            <div className="pt-6 border-t border-amber-500/20 w-full grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl glass-panel border border-amber-500/20 hover:border-amber-400/50 bg-amber-950/10 transition-all group">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-extrabold text-amber-300 font-mono group-hover:text-amber-200 transition-colors">
                    35%
                  </span>
                  <Gauge className="w-4 h-4 text-amber-400" />
                </div>
                <span className="text-xs text-gray-400 mt-1 block">API Speedup (Redis/Async)</span>
              </div>

              <div className="p-3.5 rounded-xl glass-panel border border-cyan-500/20 hover:border-cyan-400/50 bg-cyan-950/10 transition-all group">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-extrabold text-cyan-300 font-mono group-hover:text-cyan-200 transition-colors">
                    500+
                  </span>
                  <FileCheck2 className="w-4 h-4 text-cyan-400" />
                </div>
                <span className="text-xs text-gray-400 mt-1 block">Resumes Benchmark</span>
              </div>

              <div className="p-3.5 rounded-xl glass-panel border border-amber-500/20 hover:border-yellow-400/50 bg-yellow-950/10 transition-all group">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-extrabold text-yellow-300 font-mono group-hover:text-yellow-200 transition-colors">
                    4 Swarm
                  </span>
                  <Bot className="w-4 h-4 text-yellow-400" />
                </div>
                <span className="text-xs text-gray-400 mt-1 block">Autonomous AI Agents</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Professional Profile Photo Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center items-center"
          >
            <div className="profile-card-container relative w-full max-w-sm">
              {/* Outer glow rings */}
              <div className="absolute inset-0 profile-ring-outer rounded-3xl" />
              <div className="absolute inset-2 profile-ring-inner rounded-2xl" />

              {/* Main Profile Card */}
              <div className="relative glass-panel rounded-3xl border border-amber-500/30 overflow-hidden p-6 space-y-5 bg-gradient-to-b from-amber-950/20 to-slate-950/40">
                {/* Ambient glow behind photo */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-48 h-48 bg-cyan-500/8 rounded-full blur-3xl pointer-events-none" />

                {/* Profile Photo */}
                <div className="relative flex justify-center">
                  <div className="profile-photo-wrapper relative">
                    {/* Animated border ring */}
                    <div className="profile-photo-ring absolute inset-0 rounded-full" />
                    {/* Subtle gold accent arc */}
                    <div className="profile-photo-arc absolute inset-0 rounded-full" />
                    <div className="relative w-44 h-44 rounded-full overflow-hidden border-4 border-slate-800/80 shadow-2xl shadow-amber-900/30">
                      <Image
                        src="/profile.jpg"
                        alt="Srinath Doggala — AI Engineer & Full Stack Architect"
                        fill
                        className="object-cover object-top"
                        priority
                        sizes="(max-width: 768px) 176px, 176px"
                      />
                    </div>
                    {/* Online indicator badge */}
                    <div className="absolute bottom-2 right-2 flex items-center gap-1.5 bg-slate-900/90 backdrop-blur-sm border border-emerald-500/40 rounded-full px-2.5 py-1 shadow-lg">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-md shadow-emerald-400/50" />
                      <span className="text-[10px] font-mono font-semibold text-emerald-300">OPEN TO WORK</span>
                    </div>
                  </div>
                </div>

                {/* Name & Title */}
                <div className="text-center space-y-1 relative">
                  <h2 className="text-xl font-extrabold text-white tracking-tight">Srinath Doggala</h2>
                  <p className="text-xs font-mono text-amber-300/90 leading-snug">
                    AI Engineer · Full Stack Architect
                  </p>
                </div>

                {/* Info Pills */}
                <div className="flex flex-col gap-2 relative">
                  <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white/[0.04] border border-white/[0.07]">
                    <MapPin className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                    <span className="text-xs text-gray-300">Hyderabad, India</span>
                  </div>
                  <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white/[0.04] border border-white/[0.07]">
                    <Briefcase className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                    <span className="text-xs text-gray-300">Founding AI Intern @ Sreeva AI</span>
                  </div>
                  <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white/[0.04] border border-white/[0.07]">
                    <GraduationCap className="w-3.5 h-3.5 text-violet-400 flex-shrink-0" />
                    <span className="text-xs text-gray-300">B.E. CS (AI/ML) · CU 2027</span>
                  </div>
                </div>

                {/* Specialty Tags */}
                <div className="flex flex-wrap gap-1.5 relative justify-center">
                  {["FastAPI", "LangChain", "React", "PostgreSQL", "Docker"].map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 text-[10px] font-mono font-semibold rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Rating / Score bar */}
                <div className="relative space-y-2 pt-1 border-t border-white/[0.06]">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500 font-mono">Academic Score</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                      <span className="text-amber-300 font-bold font-mono">97.5%</span>
                    </div>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-amber-400 to-yellow-300"
                      style={{ width: "97.5%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 60fps Infinite Tech Company Marquee Banner */}
        <div className="pt-8 border-t border-white/10 text-center space-y-3">
          <p className="text-[11px] uppercase font-mono tracking-widest text-gray-500 flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            Engineered for High-Performance Engineering Teams &amp; AI Labs
          </p>
          <CompanyMarquee />
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center pt-4">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-xs text-gray-500 hover:text-blue-400 transition-colors group"
          >
            <span className="font-mono text-[10px] tracking-widest">SCROLL DOWN</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-blue-500" />
          </a>
        </div>
      </div>
    </section>
  );
};

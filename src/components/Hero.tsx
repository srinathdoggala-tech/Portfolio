"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Mail,
  ArrowDown,
  Sparkles,
  Terminal,
  ChevronRight,
  Play,
  MapPin,
  GraduationCap,
  Briefcase,
  Star,
  CheckCircle2,
  Cpu
} from "lucide-react";
import Image from "next/image";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { PERSONAL_INFO } from "../lib/data";
import { LiveStatusWidget } from "./LiveStatusWidget";
import { DemoWalkthroughModal } from "./DemoWalkthroughModal";

const ROTATING_TITLES = [
  "AI Systems Engineer",
  "LLM & Multi-Agent Builder",
  "Real-Time Voice AI Engineer",
  "FastAPI & Distributed Backends",
  "Full-Stack AI Product Engineer",
];

interface HeroProps {
  onOpenTerminal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTerminal }) => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [walkthroughOpen, setWalkthroughOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % ROTATING_TITLES.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-12 flex flex-col justify-center items-center overflow-hidden"
    >
      {/* 60-Second Video / Interactive Walkthrough Modal */}
      <DemoWalkthroughModal
        isOpen={walkthroughOpen}
        onClose={() => setWalkthroughOpen(false)}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 space-y-10">
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

            {/* Typography Name & Sharp Positioning */}
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

            {/* Recruiter-Focused Value Proposition */}
            <div className="space-y-3 max-w-2xl">
              <p className="text-lg sm:text-xl text-gray-200 font-medium leading-snug">
                AI Engineer building <span className="text-amber-300 font-semibold underline decoration-amber-500/50 underline-offset-4">reliable AI systems</span>, not just LLM demos.
              </p>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed font-normal">
                I build production-oriented AI systems across LLM applications, agentic workflows, RAG, voice AI, and backend infrastructure using Python, FastAPI, React/Next.js, and PostgreSQL.
              </p>
            </div>

            {/* Credibility & Experience Verification Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-950/30 border border-amber-500/30 text-amber-300">
                <Briefcase className="w-3.5 h-3.5 text-amber-400" />
                <span>Founding AI Full Stack Engineer Intern @ Sreeva AI</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/10 text-gray-300">
                <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
                <span>B.E. CSE (AI/ML) · Chandigarh Univ. 2027</span>
              </div>
            </div>

            {/* CTA Buttons Row */}
            <div className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold text-gray-950 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 shadow-xl shadow-amber-500/25 transition-all duration-200"
              >
                <span>View Engineering Work</span>
                <ChevronRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={() => setWalkthroughOpen(true)}
                className="inline-flex items-center justify-center px-5 py-3.5 text-sm font-semibold text-white glass-panel rounded-xl border border-amber-500/40 hover:border-amber-300 hover:bg-amber-950/40 shadow-lg shadow-amber-950/30 transition-all duration-200 group"
              >
                <div className="w-5 h-5 rounded-full bg-amber-400/20 text-amber-300 flex items-center justify-center mr-2 group-hover:bg-amber-400 group-hover:text-gray-950 transition-colors">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                <span>60-Sec System Demo</span>
              </button>

              <a
                href="/resume.pdf"
                download="Srinath_Doggala_Resume.pdf"
                className="inline-flex items-center justify-center px-5 py-3.5 text-sm font-semibold text-gray-200 glass-panel rounded-xl border border-white/15 hover:border-amber-400/50 hover:bg-white/5 transition-all duration-200"
              >
                <FileText className="w-4 h-4 mr-2 text-amber-400" />
                <span>Resume</span>
              </a>

              {onOpenTerminal && (
                <button
                  onClick={onOpenTerminal}
                  className="inline-flex items-center justify-center px-4 py-3.5 text-sm font-mono font-bold text-cyan-300 bg-cyan-950/30 rounded-xl border border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-950/60 transition-all duration-200 group"
                  title="Open Interactive Shell (Ctrl+~)"
                >
                  <Terminal className="w-4 h-4 mr-1.5 text-cyan-400 group-hover:animate-pulse" />
                  <span>CLI</span>
                </button>
              )}

              {/* Quick Social Links */}
              <div className="flex items-center gap-1.5">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-gray-400 hover:text-white glass-panel rounded-xl border border-white/10 hover:border-amber-400/40 transition-colors"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-gray-400 hover:text-white glass-panel rounded-xl border border-white/10 hover:border-amber-400/40 transition-colors"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-3 text-gray-400 hover:text-white glass-panel rounded-xl border border-white/10 hover:border-amber-400/40 transition-colors"
                  title="Direct Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
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
              <div className="relative glass-panel rounded-3xl border border-amber-500/30 overflow-hidden p-6 space-y-5 bg-gradient-to-b from-[#091024] to-[#040713]">
                {/* Ambient glow behind photo */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-48 h-48 bg-cyan-500/8 rounded-full blur-3xl pointer-events-none" />

                {/* Profile Photo */}
                <div className="relative flex justify-center">
                  <div className="profile-photo-wrapper relative">
                    <div className="profile-photo-ring absolute inset-0 rounded-full" />
                    <div className="profile-photo-arc absolute inset-0 rounded-full" />
                    <div className="relative w-40 h-40 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-slate-800/80 shadow-2xl shadow-amber-900/30">
                      <Image
                        src="/profile.jpg"
                        alt="Srinath Doggala — AI Systems Engineer"
                        fill
                        className="object-cover object-top"
                        priority
                        sizes="(max-width: 768px) 160px, 176px"
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
                    AI Systems Engineer · Agentic Workflows
                  </p>
                </div>

                {/* Info Pills */}
                <div className="flex flex-col gap-2 relative text-xs">
                  <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white/[0.04] border border-white/[0.07]">
                    <Briefcase className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                    <span className="text-gray-200">Founding AI Intern @ Sreeva AI</span>
                  </div>
                  <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white/[0.04] border border-white/[0.07]">
                    <GraduationCap className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-200">B.E. CSE (AI/ML) · Chandigarh Univ. &apos;27</span>
                  </div>
                  <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white/[0.04] border border-white/[0.07]">
                    <MapPin className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                    <span className="text-gray-300">Hyderabad, India (Open to Remote / Relocation)</span>
                  </div>
                </div>

                {/* Engineering Specialty Focus Tags */}
                <div className="flex flex-wrap gap-1.5 relative justify-center">
                  {["Voice AI", "Multi-Agent", "FastAPI", "Next.js", "PostgreSQL", "Docker"].map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 text-[10px] font-mono font-semibold rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Academic Distinction Bar: Explicitly clarified as Intermediate (MPC) */}
                <div className="relative space-y-1.5 pt-2 border-t border-white/[0.06]">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-400 font-mono text-[11px]">
                      Intermediate (MPC) Academic Distinction
                    </span>
                    <div className="flex items-center gap-1 font-mono font-bold text-amber-300">
                      <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                      <span>97.5%</span>
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

        {/* High-Impact "What I'm Looking For" Strip (Replacing the misleading FAANG logo wall) */}
        <div className="pt-6 border-t border-white/10">
          <div className="glass-panel p-5 sm:p-6 rounded-2xl border border-amber-500/20 bg-gradient-to-r from-[#0b142c] via-[#081024] to-[#040816] flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="space-y-1.5 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <span className="text-[11px] uppercase font-mono font-bold tracking-widest text-amber-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  What I&apos;m Looking For
                </span>
                <span className="hidden sm:inline text-gray-600">•</span>
                <span className="text-[11px] font-mono text-emerald-400 font-semibold hidden sm:inline">
                  Immediate Interview Availability
                </span>
              </div>
              <p className="text-xs sm:text-sm text-gray-300 font-medium">
                {PERSONAL_INFO.targetStatement}
              </p>
            </div>

            {/* Target Role Pills */}
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-1.5 shrink-0 max-w-xl">
              {PERSONAL_INFO.targetRoles.map((role) => (
                <span
                  key={role}
                  className="px-3 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-xs font-mono text-gray-200 hover:border-amber-400/50 hover:text-white transition-colors"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Minimal Scroll Down Prompt */}
        <div className="flex justify-center pt-2">
          <a
            href="#projects"
            className="flex flex-col items-center gap-1.5 text-xs text-gray-500 hover:text-amber-400 transition-colors group"
          >
            <span className="font-mono text-[10px] tracking-widest">EXPLORE WORK</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-amber-500" />
          </a>
        </div>
      </div>
    </section>
  );
};

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, X, Download, Mail, Copy, Check, Briefcase, Award, Sparkles, ExternalLink } from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";

export default function RecruiterDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("doggalasrinath@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Floating Recruiter Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <motion.button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center gap-2.5 rounded-full bg-gradient-to-r from-accent-purple via-indigo-600 to-accent-blue px-5 py-3 font-sans text-xs font-bold text-white shadow-2xl transition-all hover:scale-105 border border-white/20"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          whileHover={{ boxShadow: "0 0 25px rgba(168, 85, 247, 0.6)" }}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <Zap className="h-4 w-4 text-yellow-300 animate-bounce" />
          <span className="tracking-wide">Recruiter 10-Sec Brief</span>
        </motion.button>
      </div>

      {/* Recruiter Drawer Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-end p-4 sm:p-6 pointer-events-auto">
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/75 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Slide-in Panel */}
            <motion.div
              className="relative w-full max-w-lg rounded-3xl bg-zinc-950 border border-white/15 p-7 sm:p-9 shadow-2xl z-10 overflow-y-auto max-h-[90vh] light:bg-white light:border-slate-300"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Top Accent Gradient */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-accent-purple via-accent-blue to-accent-teal rounded-t-3xl" />

              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-5 right-5 rounded-full p-2 text-slate-400 hover:text-white hover:bg-white/10 transition-all"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Recruiter Header */}
              <div className="flex items-center gap-3 mb-6 pt-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 border border-accent-purple/30 text-accent-purple">
                  <Sparkles className="h-6 w-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-mono text-[10px] font-bold text-emerald-400 uppercase tracking-widest">
                      Open to 2026/2027 Roles
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-white light:text-slate-900">
                    Srinath Doggala
                  </h3>
                </div>
              </div>

              {/* Role Title */}
              <div className="mb-6 rounded-2xl bg-white/5 p-4 border border-white/10 light:bg-slate-100">
                <div className="flex items-center gap-2 text-accent-blue mb-1">
                  <Briefcase className="h-4 w-4" />
                  <span className="font-display text-xs font-bold uppercase tracking-wider">Current Role</span>
                </div>
                <p className="font-sans text-sm font-semibold text-white light:text-slate-900">
                  Founding AI &amp; Full Stack Engineer Intern @ Sreeva AI
                </p>
                <p className="font-sans text-xs text-slate-400 light:text-slate-600 mt-1">
                  Pursuing B.E. CSE (AI/ML) at Chandigarh University (2023 - 2027)
                </p>
              </div>

              {/* Core Impact Metrics */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="rounded-xl bg-accent-purple/10 border border-accent-purple/20 p-3 text-center">
                  <span className="font-display text-lg font-bold text-purple-300">35% Reduced</span>
                  <span className="block font-sans text-[10px] text-slate-400">FastAPI API Response Latency</span>
                </div>
                <div className="rounded-xl bg-accent-blue/10 border border-accent-blue/20 p-3 text-center">
                  <span className="font-display text-lg font-bold text-blue-300">99.2% Fact Accuracy</span>
                  <span className="block font-sans text-[10px] text-slate-400">Multi-Agent LangGraph AI</span>
                </div>
                <div className="rounded-xl bg-accent-teal/10 border border-accent-teal/20 p-3 text-center">
                  <span className="font-display text-lg font-bold text-teal-300">96.4% Accuracy</span>
                  <span className="block font-sans text-[10px] text-slate-400">Computer Vision Classifier</span>
                </div>
                <div className="rounded-xl bg-amber-500/10 border border-amber-500/20 p-3 text-center">
                  <span className="font-display text-lg font-bold text-amber-300">Hackathon Winner</span>
                  <span className="block font-sans text-[10px] text-slate-400">Chandigarh University AI Winner</span>
                </div>
              </div>

              {/* Core Tech Stack */}
              <div className="mb-6">
                <h4 className="font-display text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                  Core Technologies
                </h4>
                <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                  {["Python", "FastAPI", "LangGraph", "ReactJS", "Next.js", "Docker", "Redis", "PostgreSQL", "TensorFlow", "TailwindCSS"].map((tech) => (
                    <span key={tech} className="rounded-md bg-white/5 border border-white/10 px-2.5 py-1 text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Fast Action Buttons */}
              <div className="flex flex-col gap-3 pt-4 border-t border-white/10 light:border-slate-200">
                <a
                  href="#"
                  className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent-purple to-accent-blue py-3 font-sans text-xs font-bold text-white shadow-lg transition-transform hover:scale-[1.02]"
                >
                  <Download className="h-4 w-4" />
                  <span>Download Full Resume</span>
                </a>

                <div className="flex gap-3">
                  <button
                    onClick={handleCopyEmail}
                    className="flex-1 flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-2.5 font-sans text-xs font-semibold text-slate-300 hover:bg-white/10 hover:text-white transition-all"
                  >
                    {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4 text-accent-teal" />}
                    <span>{copied ? "Copied Email!" : "Copy Email"}</span>
                  </button>

                  <a
                    href="https://www.linkedin.com/in/srinath-doggala-081083286/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-2.5 rounded-xl border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white transition-all"
                    title="LinkedIn Profile"
                  >
                    <Linkedin className="h-4 w-4 text-accent-blue" />
                  </a>

                  <a
                    href="https://github.com/srinathdoggala-tech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-2.5 rounded-xl border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white transition-all"
                    title="GitHub Profile"
                  >
                    <Github className="h-4 w-4 text-accent-purple" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";

import { useEffect, useState, useRef } from "react";
import { Mail, Code, ArrowDown, Sparkles } from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";
import { motion } from "framer-motion";
import gsap from "gsap";

const typewriterRoles = [
  "AI Engineer",
  "Machine Learning Engineer",
  "LLM Developer",
  "Full Stack Developer",
  "Prompt Engineer",
];

export default function Hero() {
  const [roleText, setRoleText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const hireBtnRef = useRef<HTMLAnchorElement>(null);
  const projectsBtnRef = useRef<HTMLAnchorElement>(null);

  // Typewriter effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentRole = typewriterRoles[roleIndex];
    
    const tick = () => {
      if (isDeleting) {
        setRoleText((prev) => prev.substring(0, prev.length - 1));
      } else {
        setRoleText((prev) => currentRole.substring(0, prev.length + 1));
      }

      let speed = isDeleting ? 40 : 80;

      if (!isDeleting && roleText === currentRole) {
        speed = 1800; // Hold full text
        setIsDeleting(true);
      } else if (isDeleting && roleText === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % typewriterRoles.length);
        speed = 400; // Wait before next role
      }

      timer = setTimeout(tick, speed);
    };

    timer = setTimeout(tick, 100);
    return () => clearTimeout(timer);
  }, [roleText, isDeleting, roleIndex]);

  // Magnetic button animation with GSAP
  useEffect(() => {
    const applyMagnetic = (btn: HTMLAnchorElement | null) => {
      if (!btn) return;
      
      const onMouseMove = (e: MouseEvent) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        gsap.to(btn, {
          x: x * 0.35,
          y: y * 0.35,
          duration: 0.3,
          ease: "power2.out",
        });
      };
      
      const onMouseLeave = () => {
        gsap.to(btn, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "elastic.out(1, 0.3)",
        });
      };

      btn.addEventListener("mousemove", onMouseMove);
      btn.addEventListener("mouseleave", onMouseLeave);
      return () => {
        btn.removeEventListener("mousemove", onMouseMove);
        btn.removeEventListener("mouseleave", onMouseLeave);
      };
    };

    const cleanupHire = applyMagnetic(hireBtnRef.current);
    const cleanupProj = applyMagnetic(projectsBtnRef.current);

    return () => {
      if (cleanupHire) cleanupHire();
      if (cleanupProj) cleanupProj();
    };
  }, []);

  return (
    <section
      id="top"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-6 pt-24"
    >
      {/* Background visual grid elements */}
      <div className="absolute inset-0 grid-bg opacity-[0.2] pointer-events-none" />
      <div className="absolute inset-0 radial-fade pointer-events-none" />

      {/* Recruiter Alert Banner */}
      <motion.div
        className="z-10 mb-8 flex items-center gap-2.5 rounded-full border border-purple-500/30 bg-purple-500/10 px-5 py-2 font-sans text-xs font-semibold text-purple-200 shadow-[0_0_20px_rgba(168,85,247,0.2)] backdrop-blur-xl light:border-purple-500/40 light:bg-purple-100 light:text-purple-900"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
        </span>
        <Sparkles className="h-4 w-4 text-purple-400 animate-pulse" />
        <span>Founding AI Engineer Intern @ <strong>Sreeva AI</strong> • Open for 2026/2027 Roles</span>
      </motion.div>

      {/* Main Content */}
      <div className="z-10 text-center max-w-4xl flex flex-col items-center">
        <motion.h1
          className="font-display text-5xl font-extrabold tracking-tight text-white light:text-slate-900 sm:text-7xl md:text-8xl leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Hi, I&apos;m <span className="text-shimmer">Srinath Doggala</span>
        </motion.h1>

        {/* Dynamic Typing Title */}
        <motion.div
          className="mt-4 font-display text-xl font-bold text-slate-300 light:text-slate-800 sm:text-3xl md:text-4xl h-[48px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <span>I build </span>
          <span className="text-gradient-blue-teal">{roleText}</span>
          <span className="ml-1 inline-block w-[3px] h-[30px] translate-y-1.5 bg-accent-teal animate-pulse" />
        </motion.div>

        {/* Professional recuiter pitch */}
        <motion.p
          className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-slate-400 light:text-slate-600 sm:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Specialized in orchestrating autonomous multi-agent AI systems, deploying advanced deep learning image models, and building high-performance full-stack web platforms with Python and modern TypeScript frameworks.
        </motion.p>

        {/* Call to Action Actions */}
        <motion.div
          className="mt-8 flex flex-wrap justify-center gap-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            ref={projectsBtnRef}
            href="#projects"
            className="group flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent-purple to-accent-blue px-7 py-3.5 font-sans text-sm font-semibold text-white shadow-lg transition-all hover:scale-105"
          >
            <span>Explore Projects</span>
          </a>
          <a
            ref={hireBtnRef}
            href="#contact"
            className="group flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 px-7 py-3.5 font-sans text-sm font-semibold text-white light:border-slate-300 light:bg-slate-100 light:text-slate-700 light:hover:bg-slate-200 transition-all hover:scale-105"
          >
            <span>Get In Touch</span>
          </a>
        </motion.div>

        {/* Social Badges */}
        <motion.div
          className="mt-12 flex items-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <a
            href="https://github.com/srinathdoggala-tech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white light:text-slate-500 light:hover:text-slate-900 transition-colors"
            title="GitHub"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/srinath-doggala-081083286/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white light:text-slate-500 light:hover:text-slate-900 transition-colors"
            title="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="mailto:doggalasrinath@gmail.com"
            className="text-slate-400 hover:text-white light:text-slate-500 light:hover:text-slate-900 transition-colors"
            title="Email"
          >
            <Mail className="h-6 w-6" />
          </a>
        </motion.div>
      </div>

      {/* Down Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 flex flex-col items-center cursor-pointer pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 2, delay: 1 }}
      >
        <span className="font-mono text-xs text-slate-500 mb-1.5 uppercase tracking-widest">Scroll</span>
        <ArrowDown className="h-4 w-4 text-slate-400 animate-bounce" />
      </motion.div>
    </section>
  );
}

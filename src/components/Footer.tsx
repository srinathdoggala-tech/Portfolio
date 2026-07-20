"use client";

import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full overflow-hidden bg-black/40 border-t border-white/5 pt-20 pb-12">
      {/* Decorative Wave lines */}
      <div className="absolute inset-x-0 top-0 -z-10 h-10 w-full overflow-hidden opacity-30">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block h-full w-full fill-accent-purple/20"
        >
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Side: Copyright */}
        <div className="text-center md:text-left font-sans text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Srinath Doggala. All rights reserved.</p>
          <p className="mt-1 font-mono text-[10px] text-slate-600">
            Engineered with Next.js, TypeScript, Tailwind CSS, & Framer Motion
          </p>
        </div>

        {/* Middle Side: Social Links */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/srinathdoggala-tech"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white/5 border border-white/5 p-2.5 text-slate-400 hover:text-white light:bg-slate-100 light:text-slate-500 light:hover:text-slate-900 transition-colors"
            title="GitHub"
          >
            <Github className="h-4.5 w-4.5" />
          </a>
          <a
            href="https://www.linkedin.com/in/srinath-doggala-081083286/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white/5 border border-white/5 p-2.5 text-slate-400 hover:text-white light:bg-slate-100 light:text-slate-500 light:hover:text-slate-900 transition-colors"
            title="LinkedIn"
          >
            <Linkedin className="h-4.5 w-4.5" />
          </a>
          <a
            href="mailto:doggalasrinath@gmail.com"
            className="rounded-full bg-white/5 border border-white/5 p-2.5 text-slate-400 hover:text-white light:bg-slate-100 light:text-slate-500 light:hover:text-slate-900 transition-colors"
            title="Email"
          >
            <Mail className="h-4.5 w-4.5" />
          </a>
        </div>

        {/* Right Side: Back to top */}
        <div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 rounded-full border border-white/10 px-4 py-2 font-sans text-xs font-semibold text-slate-400 hover:text-white bg-white/5 light:border-slate-300 light:bg-slate-100 light:text-slate-600 light:hover:bg-slate-200 transition-all hover:scale-105"
            title="Back to Top"
          >
            <span>Back to Top</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

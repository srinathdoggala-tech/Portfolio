"use client";

import React from "react";
import { Mail, Sparkles, ArrowUp, Code2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { PERSONAL_INFO } from "../lib/data";

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#030712]/90 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Subtitle */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-purple-600 p-[1px]">
              <div className="w-full h-full bg-[#030712] rounded-[7px] flex items-center justify-center font-mono text-xs font-bold text-white">
                SD
              </div>
            </div>
            <div>
              <span className="font-bold text-sm text-white">Srinath Doggala</span>
              <p className="text-xs text-gray-400 font-mono">
                AI Engineer &amp; Full Stack Systems Architect
              </p>
            </div>
          </div>

          {/* Operational Status Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-white/10 text-xs font-mono text-gray-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>All Systems Operational</span>
            <span className="text-gray-600">•</span>
            <span className="text-blue-400">Next.js 15 App Router</span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-white glass-panel rounded-lg border border-white/10 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-white glass-panel rounded-lg border border-white/10 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 text-gray-400 hover:text-white glass-panel rounded-lg border border-white/10 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500">
          <div>
            &copy; {new Date().getFullYear()} Srinath Doggala. Built from scratch with Next.js 15, React 19 &amp; Tailwind CSS.
          </div>
          <div className="flex items-center gap-2">
            <span>Press <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-gray-300">⌘K</kbd> to open Command Palette</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

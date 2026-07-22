"use client";

import React, { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, FileText, Mail, ExternalLink, Code2, Briefcase, GraduationCap, Award, Cpu } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { PERSONAL_INFO, PROJECTS } from "../lib/data";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const actions = useMemo(() => {
    return [
      { id: "hero", title: "Go to Home / Hero", category: "Navigation", icon: Cpu, action: () => scrollTo("#hero") },
      { id: "about", title: "Go to About & Statistics", category: "Navigation", icon: FileText, action: () => scrollTo("#about") },
      { id: "experience", title: "Go to Experience (Sreeva AI)", category: "Navigation", icon: Briefcase, action: () => scrollTo("#experience") },
      { id: "projects", title: "Go to Projects Showcase", category: "Navigation", icon: Code2, action: () => scrollTo("#projects") },
      { id: "skills", title: "Go to Skills & Core CS", category: "Navigation", icon: Cpu, action: () => scrollTo("#skills") },
      { id: "certifications", title: "Go to Certifications", category: "Navigation", icon: Award, action: () => scrollTo("#certifications") },
      { id: "education", title: "Go to Education", category: "Navigation", icon: GraduationCap, action: () => scrollTo("#education") },
      { id: "contact", title: "Go to Contact & Availability", category: "Navigation", icon: Mail, action: () => scrollTo("#contact") },
      
      // Direct Project Links
      ...PROJECTS.map((proj) => ({
        id: `proj-${proj.id}`,
        title: `Project: ${proj.title}`,
        category: "Projects",
        icon: Code2,
        action: () => scrollTo(`#project-${proj.id}`),
      })),

      // External Actions
      { id: "resume", title: "Download Resume (PDF)", category: "Actions", icon: FileText, action: () => scrollTo("#contact") },
      { id: "github", title: "Open GitHub Profile", category: "Socials", icon: GithubIcon, action: () => window.open(PERSONAL_INFO.github, "_blank") },
      { id: "linkedin", title: "Open LinkedIn Profile", category: "Socials", icon: LinkedinIcon, action: () => window.open(PERSONAL_INFO.linkedin, "_blank") },
      { id: "email", title: "Send Email (doggalasrinath@gmail.com)", category: "Socials", icon: Mail, action: () => window.location.href = `mailto:${PERSONAL_INFO.email}` },
    ];
  }, []);

  const scrollTo = (selector: string) => {
    onClose();
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const filteredActions = useMemo(() => {
    if (!query) return actions;
    return actions.filter(
      (item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, actions]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) onClose();
      }

      if (!isOpen) return;

      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredActions.length));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredActions.length) % Math.max(1, filteredActions.length));
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filteredActions[selectedIndex]) {
          filteredActions[selectedIndex].action();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filteredActions, selectedIndex, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-start justify-center pt-20 px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-2xl glass-panel rounded-2xl border border-white/15 overflow-hidden shadow-2xl z-10"
          >
            {/* Search Input Bar */}
            <div className="flex items-center px-4 border-b border-white/10 bg-white/[0.02]">
              <Search className="w-5 h-5 text-gray-400 mr-3" />
              <input
                type="text"
                autoFocus
                placeholder="Type a command or search sections, projects, links..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full py-4 bg-transparent text-white placeholder-gray-500 focus:outline-none text-base"
              />
              <kbd className="hidden sm:inline-block px-2 py-0.5 text-xs text-gray-400 bg-white/10 rounded border border-white/10">
                ESC
              </kbd>
            </div>

            {/* Results List */}
            <div className="max-h-96 overflow-y-auto p-2 space-y-1">
              {filteredActions.length === 0 ? (
                <div className="p-8 text-center text-gray-400 text-sm">
                  No matching commands found for &quot;{query}&quot;
                </div>
              ) : (
                filteredActions.map((item, index) => {
                  const Icon = item.icon;
                  const isSelected = index === selectedIndex;
                  return (
                    <button
                      key={item.id}
                      onClick={() => item.action()}
                      onMouseEnter={() => setSelectedIndex(index)}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left text-sm transition-all ${
                        isSelected
                          ? "bg-blue-600/20 text-white border border-blue-500/40"
                          : "text-gray-300 hover:bg-white/5"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-1.5 rounded-lg ${isSelected ? "bg-blue-500/20 text-blue-400" : "bg-white/5 text-gray-400"}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="font-medium">{item.title}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs px-2 py-0.5 rounded-md bg-white/5 text-gray-400 border border-white/5">
                          {item.category}
                        </span>
                        <ExternalLink className="w-3.5 h-3.5 text-gray-500" />
                      </div>
                    </button>
                  );
                })
              )}
            </div>

            {/* Footer info */}
            <div className="px-4 py-2.5 border-t border-white/10 bg-black/40 flex items-center justify-between text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <span>Navigate with <kbd className="px-1.5 py-0.5 bg-white/10 rounded">↑</kbd> <kbd className="px-1.5 py-0.5 bg-white/10 rounded">↓</kbd></span>
                <span>Select with <kbd className="px-1.5 py-0.5 bg-white/10 rounded">↵</kbd></span>
              </div>
              <span className="text-blue-400 font-mono">Srinath Doggala Portfolio</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

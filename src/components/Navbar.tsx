"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Menu, X, FileText, Sparkles, ChevronRight, Terminal, Trophy } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { PERSONAL_INFO } from "../lib/data";

interface NavbarProps {
  onOpenCommandPalette: () => void;
  onOpenTerminal?: () => void;
  onOpenTrophyModal?: () => void;
  unlockedCount?: number;
}

const NAV_LINKS = [
  { name: "Work", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Stack", href: "#skills" },
  { name: "Proof", href: "#proof" },
  { name: "Architecture", href: "#architecture" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export const Navbar: React.FC<NavbarProps> = ({
  onOpenCommandPalette,
  onOpenTerminal,
  onOpenTrophyModal,
  unlockedCount = 0,
}) => {
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scroll Spy
      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#030712]/80 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-400 via-yellow-500 to-cyan-500 p-[1px] shadow-lg group-hover:shadow-amber-500/40 transition-all">
            <div className="w-full h-full bg-[#030712] rounded-[11px] flex items-center justify-center font-bold font-mono text-sm text-amber-300 group-hover:bg-transparent group-hover:text-black transition-colors">
              SD
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base tracking-tight text-white group-hover:text-amber-400 transition-colors">
              Srinath Doggala
            </span>
            <span className="text-[10px] tracking-wider font-mono text-amber-400/90 uppercase flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              AI Engineer
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 glass-pill px-3 py-1.5 rounded-full border border-amber-500/20 shadow-inner">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all ${
                  isActive ? "text-amber-300 font-semibold" : "text-gray-400 hover:text-gray-200"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavBackground"
                    className="absolute inset-0 bg-amber-500/20 border border-amber-500/40 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Developer CLI Terminal Trigger */}
          {onOpenTerminal && (
            <button
              onClick={onOpenTerminal}
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono text-cyan-300 bg-cyan-950/40 rounded-full border border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-950/80 transition-all group"
              title="Open Terminal Shell (Ctrl+~)"
            >
              <Terminal className="w-3.5 h-3.5 text-cyan-400 group-hover:animate-pulse" />
              <span className="hidden sm:inline font-bold">&gt;_</span>
            </button>
          )}

          {/* Trophy Case Trigger */}
          {onOpenTrophyModal && (
            <button
              onClick={onOpenTrophyModal}
              className="relative flex items-center justify-center p-2 text-yellow-400 bg-yellow-950/30 rounded-full border border-yellow-500/30 hover:border-yellow-400 hover:bg-yellow-950/60 transition-all"
              title="Open Trophy Case"
            >
              <Trophy className="w-3.5 h-3.5" />
              {unlockedCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-amber-400 text-gray-950 font-bold text-[10px] flex items-center justify-center border border-gray-950 shadow-sm">
                  {unlockedCount}
                </span>
              )}
            </button>
          )}

          {/* Command Palette Trigger */}
          <button
            onClick={onOpenCommandPalette}
            className="flex items-center gap-2 px-3 py-1.5 text-xs text-gray-300 glass-panel rounded-full border border-amber-500/20 hover:border-amber-400/50 hover:bg-amber-950/20 transition-all shadow-sm group"
            title="Open Command Palette (Ctrl+K)"
          >
            <Search className="w-3.5 h-3.5 text-gray-400 group-hover:text-amber-400 transition-colors" />
            <span className="hidden sm:inline">Search</span>
            <kbd className="px-1.5 py-0.5 text-[10px] font-mono text-gray-400 bg-white/10 rounded border border-white/10 group-hover:border-amber-500/30">
              ⌘K
            </kbd>
          </button>

          {/* Resume Download CTA */}
          <a
            href="#contact"
            className="hidden sm:flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-gray-950 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 shadow-lg shadow-amber-500/25 transition-all"
          >
            <FileText className="w-3.5 h-3.5 text-gray-950" />
            <span>Resume</span>
          </a>

          {/* Social Quick Icons */}
          <div className="hidden xl:flex items-center gap-1.5 border-l border-white/10 pl-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white rounded-lg glass-panel"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-panel border-b border-white/10 overflow-hidden bg-[#030712]/95"
          >
            <div className="px-4 py-5 space-y-3">
              <div className="grid grid-cols-2 gap-2">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between p-2.5 text-sm text-gray-300 hover:text-white hover:bg-blue-600/10 rounded-lg border border-transparent hover:border-blue-500/20 transition-all"
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-gray-500" />
                  </a>
                ))}
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-400 hover:text-white glass-panel rounded-full"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-400 hover:text-white glass-panel rounded-full"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                </div>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2 text-xs font-medium text-white bg-blue-600 rounded-full"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

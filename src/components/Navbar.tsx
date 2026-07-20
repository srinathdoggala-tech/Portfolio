"use client";

import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  onOpenSearch: () => void;
}

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar({ onOpenSearch }: NavbarProps) {
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isLight, setIsLight] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll spy & progress logic
  useEffect(() => {
    const handleScroll = () => {
      // 1. Progress Bar
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress(window.scrollY / totalScroll);
      }

      // 2. Active Section Spy
      const sections = navLinks.map((link) => link.href.substring(1));
      let currentSection = "";
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Adjust threshold based on layout
          if (rect.top <= 140 && rect.bottom >= 140) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Theme Sync on mount
  useEffect(() => {
    const checkTheme = () => {
      const lightActive = document.documentElement.classList.contains("light");
      setIsLight(lightActive);
    };
    checkTheme();

    // Watch mutations to HTML class in case external scripts toggle it
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    if (isLight) {
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
      setIsLight(false);
    } else {
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
      setIsLight(true);
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-white/5 pointer-events-none">
        <motion.div
          className="h-full bg-gradient-to-r from-accent-purple via-accent-blue to-accent-teal origin-left"
          style={{ scaleX: scrollProgress }}
        />
      </div>

      <header className="fixed top-0 left-0 right-0 z-40 w-full glass-panel border-b border-white/5 shadow-md transition-all duration-300">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <a
            href="#top"
            className="font-display text-xl font-bold tracking-tight text-white dark:text-white light:text-slate-900 flex items-center gap-1.5"
          >
            <span className="text-accent-purple">&lt;</span>
            <span className="light:text-slate-900 text-white">Srinath</span>
            <span className="text-accent-blue">.tech /&gt;</span>
          </a>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative font-sans text-sm font-medium tracking-wide transition-colors duration-200 py-1 ${
                  activeSection === link.href.substring(1)
                    ? "text-accent-purple font-semibold"
                    : "text-slate-400 hover:text-white light:text-slate-600 light:hover:text-slate-900"
                }`}
              >
                {link.name}
                {activeSection === link.href.substring(1) && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent-purple rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {/* Search Palette Toggle Button */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 rounded-full border border-white/10 px-3.5 py-1.5 font-sans text-xs text-slate-400 bg-white/5 hover:bg-white/10 hover:text-white transition-all light:border-slate-300 light:bg-slate-100 light:text-slate-600 light:hover:bg-slate-200"
              title="Search Portfolio (Ctrl + K)"
            >
              <Search className="h-3.5 w-3.5" />
              <span>Search</span>
              <kbd className="rounded bg-white/15 px-1.5 py-0.5 text-[9px] font-mono light:bg-slate-300">
                ⌘K
              </kbd>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="rounded-full p-2 text-slate-400 hover:text-white hover:bg-white/5 transition-all light:text-slate-600 light:hover:text-slate-900 light:hover:bg-slate-150"
              aria-label="Toggle Theme"
            >
              {isLight ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </button>
          </div>

          {/* Mobile Right Bar controls */}
          <div className="flex md:hidden items-center gap-3">
            {/* Search Icon */}
            <button
              onClick={onOpenSearch}
              className="rounded-full p-2 text-slate-400 hover:text-white hover:bg-white/5 transition-all light:text-slate-600 light:hover:text-slate-900"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="rounded-full p-2 text-slate-400 hover:text-white hover:bg-white/5 transition-all light:text-slate-600 light:hover:text-slate-900"
              aria-label="Toggle Theme"
            >
              {isLight ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </button>

            {/* Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-full p-2 text-slate-400 hover:text-white hover:bg-white/5 transition-all light:text-slate-600 light:hover:text-slate-900"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Panel */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="md:hidden border-t border-white/5 bg-black/95 backdrop-blur-xl px-6 py-4 flex flex-col gap-4 shadow-xl"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-sans text-base font-medium py-1.5 transition-colors ${
                    activeSection === link.href.substring(1)
                      ? "text-accent-purple font-semibold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

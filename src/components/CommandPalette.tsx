"use client";

import { useEffect, useState, useRef } from "react";
import { Search, Globe, Mail, Phone, Sun, Moon, Copy, Check, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandItem {
  id: string;
  title: string;
  category: "Navigation" | "Actions" | "Contacts";
  action: () => void;
  icon: React.ReactNode;
}

export default function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Command palette events listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) onClose();
        else onClose(); // wait, to toggle: if open, close, else open.
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    } else {
      setSearchQuery("");
    }
  }, [isOpen]);

  const copyEmail = () => {
    navigator.clipboard.writeText("doggalasrinath@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleTheme = () => {
    const isLight = document.documentElement.classList.contains("light");
    if (isLight) {
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    }
    onClose();
  };

  const navigateTo = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    onClose();
  };

  const commands: CommandItem[] = [
    {
      id: "nav-about",
      title: "Go to About Me",
      category: "Navigation",
      action: () => navigateTo("#about"),
      icon: <Terminal className="h-4 w-4" />,
    },
    {
      id: "nav-skills",
      title: "Go to Skills & Technologies",
      category: "Navigation",
      action: () => navigateTo("#skills"),
      icon: <Terminal className="h-4 w-4" />,
    },
    {
      id: "nav-exp",
      title: "Go to Work Experience",
      category: "Navigation",
      action: () => navigateTo("#experience"),
      icon: <Terminal className="h-4 w-4" />,
    },
    {
      id: "nav-projects",
      title: "Go to Featured Projects",
      category: "Navigation",
      action: () => navigateTo("#projects"),
      icon: <Terminal className="h-4 w-4" />,
    },
    {
      id: "nav-ach",
      title: "Go to Certifications & Achievements",
      category: "Navigation",
      action: () => navigateTo("#achievements"),
      icon: <Terminal className="h-4 w-4" />,
    },
    {
      id: "nav-contact",
      title: "Go to Contact",
      category: "Navigation",
      action: () => navigateTo("#contact"),
      icon: <Terminal className="h-4 w-4" />,
    },
    {
      id: "action-theme",
      title: "Toggle Theme (Light / Dark)",
      category: "Actions",
      action: toggleTheme,
      icon: <Sun className="h-4 w-4 light:hidden" />, // will show correctly
    },
    {
      id: "action-copy-email",
      title: copied ? "Email Copied!" : "Copy Email Address",
      category: "Actions",
      action: copyEmail,
      icon: copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />,
    },
    {
      id: "contact-github",
      title: "Open GitHub Profile",
      category: "Contacts",
      action: () => {
        window.open("https://github.com/srinathdoggala-tech", "_blank");
        onClose();
      },
      icon: <Globe className="h-4 w-4" />,
    },
    {
      id: "contact-linkedin",
      title: "Open LinkedIn Profile",
      category: "Contacts",
      action: () => {
        window.open("https://www.linkedin.com/in/srinath-doggala-081083286/", "_blank");
        onClose();
      },
      icon: <Globe className="h-4 w-4" />,
    },
  ];

  // Filtering
  const filteredCommands = commands.filter((cmd) =>
    cmd.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cmd.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/75 px-6 pt-24 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* Main Search Panel container */}
          <motion.div
            className="w-full max-w-xl overflow-hidden rounded-2xl bg-zinc-900 border border-white/10 shadow-2xl flex flex-col light:bg-white light:border-slate-300"
            initial={{ y: -20, scale: 0.98 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: -20, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()} // stop click bubbling
          >
            {/* Input Header bar */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/10 light:border-slate-200">
              <Search className="h-5 w-5 text-slate-400 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search command menu or navigate..."
                className="w-full bg-transparent border-none outline-none font-sans text-sm text-white light:text-slate-900 placeholder-slate-500"
              />
              <span className="font-sans text-[10px] bg-white/5 border border-white/10 rounded px-1.5 py-0.5 text-slate-500 light:bg-slate-100 light:border-slate-300">
                ESC
              </span>
            </div>

            {/* List entries */}
            <div className="max-h-[300px] overflow-y-auto p-2">
              {filteredCommands.length > 0 ? (
                // Group by categories
                ["Navigation", "Actions", "Contacts"].map((cat) => {
                  const catCmds = filteredCommands.filter((c) => c.category === cat);
                  if (catCmds.length === 0) return null;

                  return (
                    <div key={cat} className="mb-4 last:mb-0">
                      <h4 className="px-3 py-1 font-display text-[10px] font-bold uppercase tracking-wider text-slate-500">
                        {cat}
                      </h4>
                      <div className="space-y-0.5 mt-1">
                        {catCmds.map((cmd) => (
                          <button
                            key={cmd.id}
                            onClick={cmd.action}
                            className="w-full flex items-center gap-3 rounded-lg px-3 py-2 text-left font-sans text-xs font-semibold text-slate-300 light:text-slate-700 hover:bg-white/5 hover:text-white light:hover:bg-slate-100 light:hover:text-slate-900 transition-colors"
                          >
                            <span className="text-slate-500">{cmd.icon}</span>
                            <span className="flex-1">{cmd.title}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="py-8 text-center text-xs font-sans text-slate-500">
                  No matching commands found.
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

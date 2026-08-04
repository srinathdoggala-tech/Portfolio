"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, Sparkles, CornerDownLeft } from "lucide-react";
import confetti from "canvas-confetti";
import { PERSONAL_INFO, PROJECTS, SKILL_CATEGORIES, QUICK_STATS } from "@/lib/data";

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUnlockAchievement?: (id: string) => void;
}

interface CommandLog {
  id: string;
  command: string;
  output: React.ReactNode;
}

export const TerminalModal: React.FC<TerminalModalProps> = ({
  isOpen,
  onClose,
  onUnlockAchievement,
}) => {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [isExpanded, setIsExpanded] = useState(false);
  const [logs, setLogs] = useState<CommandLog[]>([
    {
      id: "welcome",
      command: "welcome",
      output: (
        <div className="space-y-2 text-gray-300 font-mono text-xs sm:text-sm">
          <pre className="text-cyan-400 font-bold leading-tight font-mono overflow-x-auto">
{`   _____ _____ _____ _   _    ___ _____ _   _     _____ _____ _____
  /  ___|  _  |_   _| \\ | |  / _ \\_   _| | | |   |_   _/  __ \\  ___|
  \\ \`--.| | | | | | |  \\| | / /_\\ \\| | | |_| |     | | | /  \\/ |__ 
   \`--. \\ | | | | | | . \` | |  _  || | |  _  |     | | | |   |  __|
  /\\__/ / \\_/ /_| |_| |\\  | | | | || | | | | |    _| |_| \\__/\\ |___
  \\____/ \\___/ \\___/\\_| \\_/ \\_| |_/\\_/ \\_| |_/    \\___/ \\____/\\____/`}
          </pre>
          <p className="text-emerald-400">
            ✔ Srinath Doggala Interactive Shell v2.5.0 [x86_64-linux-gnu]
          </p>
          <p className="text-gray-400">
            Type <span className="text-yellow-400 font-semibold">help</span> to view available CLI commands, or click the quick command chips below.
          </p>
        </div>
      ),
    },
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
      onUnlockAchievement?.("TERMINAL_OPERATOR");
    }
  }, [isOpen, onUnlockAchievement]);

  // Auto scroll to bottom
  useEffect(() => {
    if (isOpen) {
      terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [logs, isOpen]);

  // Global keydown trigger for Ctrl+~ or Cmd+~
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "`") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open handled externally or trigger onClose
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    // Add to history
    setHistory((prev) => [...prev, rawCmd]);
    setHistoryIndex(-1);

    let outputContent: React.ReactNode = null;

    switch (cmd) {
      case "help":
        outputContent = (
          <div className="space-y-1.5 font-mono text-xs text-gray-300">
            <p className="text-cyan-400 font-semibold mb-2">Available Shell Commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
              <div><span className="text-yellow-400 w-24 inline-block font-semibold">whoami</span> - Developer bio & role</div>
              <div><span className="text-yellow-400 w-24 inline-block font-semibold">skills</span> - Full technical skill stack</div>
              <div><span className="text-yellow-400 w-24 inline-block font-semibold">projects</span> - Featured AI & web projects</div>
              <div><span className="text-yellow-400 w-24 inline-block font-semibold">contact</span> - Email, phone, socials & links</div>
              <div><span className="text-yellow-400 w-24 inline-block font-semibold">stats</span> - System speedups & benchmarks</div>
              <div><span className="text-yellow-400 w-24 inline-block font-semibold">hire</span> - Trigger confetti + availability</div>
              <div><span className="text-yellow-400 w-24 inline-block font-semibold">matrix</span> - Digital rain Easter egg</div>
              <div><span className="text-yellow-400 w-24 inline-block font-semibold">clear</span> - Wipe terminal screen</div>
              <div><span className="text-yellow-400 w-24 inline-block font-semibold">exit</span> - Close terminal window</div>
            </div>
          </div>
        );
        break;

      case "whoami":
        outputContent = (
          <div className="space-y-2 font-mono text-xs sm:text-sm text-gray-300">
            <p className="text-blue-400 font-bold">{PERSONAL_INFO.name}</p>
            <p className="text-emerald-400">{PERSONAL_INFO.roleTitle}</p>
            <p className="text-gray-300 leading-relaxed">{PERSONAL_INFO.bio}</p>
            <div className="text-gray-400 pt-1">
              📍 Location: {PERSONAL_INFO.location} | 📧 {PERSONAL_INFO.email}
            </div>
          </div>
        );
        break;

      case "skills":
        outputContent = (
          <div className="space-y-3 font-mono text-xs">
            <p className="text-cyan-400 font-semibold">Technical Ecosystem & Stack:</p>
            {SKILL_CATEGORIES.map((cat, idx) => (
              <div key={idx} className="space-y-1">
                <span className="text-purple-400 font-bold">[{cat.title}]</span>
                <div className="flex flex-wrap gap-1.5 pt-0.5">
                  {cat.skills.map((s, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded bg-gray-800 border border-gray-700 text-gray-300 text-[11px]"
                    >
                      {s.name} <span className="text-emerald-400">({s.level})</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
        break;

      case "projects":
        outputContent = (
          <div className="space-y-3 font-mono text-xs">
            <p className="text-cyan-400 font-semibold">Featured Systems & Repositories:</p>
            {PROJECTS.map((p, idx) => (
              <div key={idx} className="p-2 rounded bg-gray-900/80 border border-gray-800 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-yellow-400 font-bold">{p.title}</span>
                  <span className="text-emerald-400 text-[11px]">{p.category} • {p.year}</span>
                </div>
                <p className="text-gray-300 text-[11px]">{p.tagline}</p>
                <div className="flex gap-3 pt-1 text-[11px]">
                  <a href={p.githubUrl} target="_blank" rel="noreferrer" className="text-blue-400 underline hover:text-blue-300">
                    GitHub Repo
                  </a>
                  {p.liveUrl && (
                    <a href={p.liveUrl} target="_blank" rel="noreferrer" className="text-emerald-400 underline hover:text-emerald-300">
                      Live App
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        );
        break;

      case "contact":
        outputContent = (
          <div className="space-y-1.5 font-mono text-xs text-gray-300">
            <p className="text-cyan-400 font-semibold mb-1">Direct Communications:</p>
            <p>📧 Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-blue-400 underline">{PERSONAL_INFO.email}</a></p>
            <p>📱 Phone: <span className="text-gray-200">{PERSONAL_INFO.phone}</span></p>
            <p>🔗 GitHub: <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-purple-400 underline">{PERSONAL_INFO.github}</a></p>
            <p>💼 LinkedIn: <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-blue-400 underline">{PERSONAL_INFO.linkedin}</a></p>
          </div>
        );
        break;

      case "stats":
        outputContent = (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-xs">
            {QUICK_STATS.map((s, idx) => (
              <div key={idx} className="p-2 rounded bg-blue-950/30 border border-blue-900/50">
                <div className="text-cyan-400 font-bold text-sm">{s.value}</div>
                <div className="text-gray-200 font-medium">{s.label}</div>
                <div className="text-gray-400 text-[10px]">{s.subtext}</div>
              </div>
            ))}
          </div>
        );
        break;

      case "hire":
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
        });
        onUnlockAchievement?.("PARTY_MASTER");
        outputContent = (
          <div className="p-3 rounded bg-emerald-950/50 border border-emerald-500/40 text-emerald-300 font-mono text-xs space-y-2">
            <p className="font-bold text-sm flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-emerald-400 animate-spin" />
              Srinath Doggala is available for full-time AI & Full Stack roles!
            </p>
            <p className="text-gray-300">
              Let&apos;s discuss building production-grade LLM pipelines, autonomous swarms, or microservices.
            </p>
            <div className="pt-1">
              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=Hiring%20Inquiry%20from%20Portfolio`}
                className="inline-block px-3 py-1 rounded bg-emerald-500 text-gray-950 font-bold text-xs hover:bg-emerald-400 transition"
              >
                Send Email Offer Now →
              </a>
            </div>
          </div>
        );
        break;

      case "matrix":
        outputContent = (
          <div className="font-mono text-emerald-500 text-xs leading-none select-none tracking-widest bg-black p-3 rounded border border-emerald-950 space-y-1">
            <p>01001000 01100001 01100011 01101011 01110100 01101000 01100101 00100000 01110000 01101100 01100001 01101110 01100101 01110100</p>
            <p className="text-emerald-400">Wake up, Neo... The matrix has you. Follow the white rabbit.</p>
            <p className="text-emerald-300 animate-pulse">01000001 01001001 00100000 01000101 01101110 01100111 01101001 01101110 01100101 01100101 01110010 01101001 01101110 01100111</p>
          </div>
        );
        break;

      case "clear":
        setLogs([]);
        setInputVal("");
        return;

      case "exit":
        onClose();
        setInputVal("");
        return;

      default:
        outputContent = (
          <p className="text-red-400 font-mono text-xs">
            command not found: <span className="font-bold">{cmd}</span>. Type <span className="text-yellow-400 font-semibold">help</span> for valid commands.
          </p>
        );
    }

    setLogs((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        command: rawCmd,
        output: outputContent,
      },
    ]);
    setInputVal("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(inputVal);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length > 0) {
        const nextIdx = historyIndex + 1 < history.length ? historyIndex + 1 : historyIndex;
        setHistoryIndex(nextIdx);
        setInputVal(history[history.length - 1 - nextIdx] || "");
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInputVal(history[history.length - 1 - nextIdx] || "");
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputVal("");
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className={`w-full ${
              isExpanded ? "max-w-6xl h-[85vh]" : "max-w-3xl h-[550px]"
            } bg-gray-950 border border-cyan-500/30 rounded-xl shadow-2xl shadow-cyan-950/50 flex flex-col overflow-hidden font-mono text-gray-200 transition-all duration-300`}
          >
            {/* Window Header Bar */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-gray-900 border-b border-gray-800 select-none">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer hover:bg-red-500" onClick={onClose} />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80 cursor-pointer hover:bg-yellow-500" onClick={() => setLogs([])} />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80 cursor-pointer hover:bg-emerald-500" onClick={() => setIsExpanded(!isExpanded)} />
                <span className="ml-2 text-xs font-mono text-gray-400 flex items-center gap-1.5">
                  <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
                  srinath@portfolio:~ (zsh)
                </span>
              </div>

              <div className="flex items-center gap-2 text-gray-400">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="p-1 hover:text-white rounded hover:bg-gray-800 transition"
                  title="Toggle Expand"
                >
                  {isExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
                </button>
                <button
                  onClick={onClose}
                  className="p-1 hover:text-white rounded hover:bg-gray-800 transition"
                  title="Close Terminal (Esc)"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Output Logs Scroll View */}
            <div
              className="flex-1 p-4 overflow-y-auto space-y-4 font-mono text-xs sm:text-sm scrollbar-thin scrollbar-thumb-gray-800"
              onClick={() => inputRef.current?.focus()}
            >
              {logs.map((log) => (
                <div key={log.id} className="space-y-1.5">
                  {log.command !== "welcome" && (
                    <div className="flex items-center gap-2 text-gray-400">
                      <span className="text-emerald-400 font-bold">guest@srinathdoggala</span>
                      <span className="text-gray-600">:</span>
                      <span className="text-cyan-400 font-semibold">~</span>
                      <span className="text-gray-600">$</span>
                      <span className="text-white font-bold">{log.command}</span>
                    </div>
                  )}
                  <div className="pl-0">{log.output}</div>
                </div>
              ))}
              <div ref={terminalEndRef} />
            </div>

            {/* Quick Command Pills */}
            <div className="px-4 py-2 bg-gray-900/60 border-t border-gray-900 flex items-center gap-2 overflow-x-auto text-[11px] text-gray-400 no-scrollbar">
              <span className="text-gray-500 font-semibold shrink-0">Quick Commands:</span>
              {["whoami", "skills", "projects", "contact", "stats", "hire", "matrix", "clear"].map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => handleCommand(cmd)}
                  className="px-2.5 py-0.5 rounded-full bg-gray-800/80 hover:bg-cyan-950 hover:text-cyan-300 border border-gray-700/60 hover:border-cyan-500/50 shrink-0 transition"
                >
                  {cmd}
                </button>
              ))}
            </div>

            {/* Input Line */}
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-900 border-t border-gray-800">
              <span className="text-emerald-400 font-bold text-xs sm:text-sm shrink-0">
                guest@srinathdoggala:<span className="text-cyan-400">~</span>$
              </span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="type 'help' or command..."
                className="flex-1 bg-transparent outline-none text-white font-mono text-xs sm:text-sm placeholder-gray-600"
                autoFocus
              />
              <button
                onClick={() => handleCommand(inputVal)}
                className="px-2 py-1 bg-cyan-600 hover:bg-cyan-500 text-black font-bold rounded text-xs transition flex items-center gap-1 shrink-0"
              >
                Run <CornerDownLeft className="w-3 h-3" />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

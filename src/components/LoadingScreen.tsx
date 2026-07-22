"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Terminal } from "lucide-react";

export const LoadingScreen: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [step, setStep] = useState(0);

  const steps = [
    "INITIALIZING SYSTEM TELEMETRY...",
    "LOADING MULTI-AGENT SWARM ENGINE...",
    "SYNCING FASTAPI & POSTGRES PIPELINES...",
    "VERIFYING LIGHTHOUSE PERFORMANCE (95+)...",
    "PORTFOLIO READY."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => {
        if (prev < steps.length - 1) return prev + 1;
        clearInterval(timer);
        setTimeout(() => setLoading(false), 500);
        return prev;
      });
    }, 350);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          className="fixed inset-0 z-[200] bg-[#030712] flex flex-col items-center justify-center p-4 font-mono select-none"
        >
          <div className="w-full max-w-md space-y-6 text-center">
            {/* Logo Glow Badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-500 to-purple-600 p-[1px] mx-auto shadow-2xl shadow-blue-500/30"
            >
              <div className="w-full h-full bg-[#030712] rounded-[15px] flex items-center justify-center">
                <Cpu className="w-8 h-8 text-blue-400 animate-pulse" />
              </div>
            </motion.div>

            <div className="space-y-1">
              <h1 className="text-xl font-bold text-white tracking-wider">SRINATH DOGGALA</h1>
              <p className="text-xs text-blue-400">AI ENGINEER &amp; FULL STACK ARCHITECT</p>
            </div>

            {/* Terminal Log Box */}
            <div className="p-4 rounded-2xl glass-panel border border-white/10 text-left text-xs space-y-2 bg-black/50">
              <div className="flex items-center gap-2 pb-2 border-b border-white/10 text-gray-500 text-[10px]">
                <Terminal className="w-3.5 h-3.5 text-blue-400" />
                <span>BOOT_SEQUENCE_V1.0</span>
              </div>
              <div className="text-gray-300 min-h-[40px] flex items-center gap-2">
                <span className="text-blue-400 font-bold">&gt;</span>
                <span className="text-emerald-400">{steps[step]}</span>
              </div>
              {/* Progress Bar */}
              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                  animate={{ width: `${((step + 1) / steps.length) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

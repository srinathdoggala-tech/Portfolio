"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const phrases = [
  "Initializing LLMs...",
  "Tuning Hyperparameters...",
  "Orchestrating LangChain Agents...",
  "Vector Database Handshake...",
  "Loading MobileNetV2 Weights...",
  "Asynchronous API Integration...",
  "Synthesizing Recruiter Pipeline...",
  "Connecting Neural Pathways...",
  "Establishing Secure Handshake...",
  "Rendering 3D Background Mesh...",
];

export default function CustomLoader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [phraseIdx, setPhraseIdx] = useState(0);

  useEffect(() => {
    // Phrase cycle interval
    const phraseInterval = setInterval(() => {
      setPhraseIdx((prev) => (prev + 1) % phrases.length);
    }, 450);

    // Progress counter interval
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          clearInterval(phraseInterval);
          setTimeout(() => {
            onComplete();
          }, 400); // Small pause at 100%
          return 100;
        }
        // Increment faster or slower
        const diff = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + diff, 100);
      });
    }, 60);

    return () => {
      clearInterval(phraseInterval);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
    >
      {/* Background Neural Networks visual effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.07)_0%,transparent_70%)]" />

      <div className="relative z-10 w-full max-w-sm px-6 text-center">
        {/* Animated Bracket */}
        <motion.div
          className="mb-8 font-display text-4xl font-bold tracking-widest text-gradient-purple-blue"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          &lt;SRINATH.AI /&gt;
        </motion.div>

        {/* Loading Progress Bar */}
        <div className="relative h-[2px] w-full overflow-hidden rounded bg-white/10">
          <motion.div
            className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-accent-purple to-accent-blue"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Phrase / Status display */}
        <div className="mt-4 h-6">
          <AnimatePresence mode="wait">
            <motion.p
              key={phraseIdx}
              className="font-mono text-xs tracking-wider text-slate-400"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              {phrases[phraseIdx]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Counter percentage */}
        <motion.div
          className="mt-2 font-display text-5xl font-extrabold tracking-tight text-white/90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {progress}%
        </motion.div>
      </div>
    </motion.div>
  );
}

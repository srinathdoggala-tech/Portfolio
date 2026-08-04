"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Award, CheckCircle2, Sparkles, X, Terminal, Command, Compass, PartyPopper, Mail } from "lucide-react";

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  unlockedAt?: string;
}

export const ACHIEVEMENTS_LIST: Achievement[] = [
  {
    id: "KEYBOARD_WIZARD",
    title: "Keyboard Wizard",
    description: "Pressed Ctrl+K or Ctrl+~ to trigger command navigation.",
    icon: <Command className="w-5 h-5 text-purple-400" />,
  },
  {
    id: "TERMINAL_OPERATOR",
    title: "Terminal Operator",
    description: "Opened the interactive developer CLI shell.",
    icon: <Terminal className="w-5 h-5 text-cyan-400" />,
  },
  {
    id: "DEEP_EXPLORER",
    title: "Deep Explorer",
    description: "Scrolled through all major portfolio sections.",
    icon: <Compass className="w-5 h-5 text-emerald-400" />,
  },
  {
    id: "PARTY_MASTER",
    title: "Party Master",
    description: "Triggered celebratory confetti on the portfolio!",
    icon: <PartyPopper className="w-5 h-5 text-yellow-400" />,
  },
  {
    id: "RECRUITER",
    title: "Recruiter Connection",
    description: "Initiated contact or copied developer email.",
    icon: <Mail className="w-5 h-5 text-blue-400" />,
  },
];

interface AchievementSystemProps {
  unlockedIds: string[];
  onUnlock: (id: string) => void;
  isTrophyModalOpen: boolean;
  onCloseTrophyModal: () => void;
}

export const AchievementSystem: React.FC<AchievementSystemProps> = ({
  unlockedIds,
  onUnlock,
  isTrophyModalOpen,
  onCloseTrophyModal,
}) => {
  const [recentToast, setRecentToast] = useState<Achievement | null>(null);

  // Monitor scroll for Deep Explorer
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      if (scrollPosition >= documentHeight - 150) {
        onUnlock("DEEP_EXPLORER");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [onUnlock]);

  // Toast handler when new achievement is unlocked
  const triggerToast = useCallback((achievement: Achievement) => {
    setRecentToast(achievement);
    const timer = setTimeout(() => setRecentToast(null), 4500);
    return () => clearTimeout(timer);
  }, []);

  // Sync recent unlocks
  const [prevUnlockedCount, setPrevUnlockedCount] = useState(unlockedIds.length);
  useEffect(() => {
    if (unlockedIds.length > prevUnlockedCount) {
      const latestId = unlockedIds[unlockedIds.length - 1];
      const match = ACHIEVEMENTS_LIST.find((a) => a.id === latestId);
      if (match) {
        triggerToast(match);
      }
      setPrevUnlockedCount(unlockedIds.length);
    }
  }, [unlockedIds, prevUnlockedCount, triggerToast]);

  return (
    <>
      {/* Floating Unlock Toast */}
      <AnimatePresence>
        {recentToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 z-50 max-w-sm w-full p-4 rounded-xl glass-panel border border-yellow-500/40 bg-gray-950/90 shadow-2xl shadow-yellow-950/40 backdrop-blur-xl flex items-start gap-3 text-white"
          >
            <div className="p-2.5 rounded-lg bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 shrink-0">
              <Trophy className="w-6 h-6 animate-bounce" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 text-xs font-bold text-yellow-400 tracking-wide uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                Achievement Unlocked!
              </div>
              <p className="font-bold text-sm text-gray-100 mt-0.5 truncate">
                {recentToast.title}
              </p>
              <p className="text-xs text-gray-400 leading-relaxed mt-0.5">
                {recentToast.description}
              </p>
            </div>
            <button
              onClick={() => setRecentToast(null)}
              className="text-gray-500 hover:text-white transition p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trophy Case Modal */}
      <AnimatePresence>
        {isTrophyModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-lg bg-gray-950 border border-yellow-500/30 rounded-2xl p-6 shadow-2xl shadow-yellow-950/40 relative overflow-hidden"
            >
              {/* Decorative Header */}
              <div className="flex items-center justify-between pb-4 border-b border-gray-800">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-100 flex items-center gap-2">
                      Visitor Trophy Case
                    </h3>
                    <p className="text-xs text-gray-400">
                      Unlocked {unlockedIds.length} of {ACHIEVEMENTS_LIST.length} Badges
                    </p>
                  </div>
                </div>

                <button
                  onClick={onCloseTrophyModal}
                  className="p-1.5 rounded-lg bg-gray-900 text-gray-400 hover:text-white transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Badges Grid */}
              <div className="mt-4 space-y-3 max-h-[60vh] overflow-y-auto pr-1">
                {ACHIEVEMENTS_LIST.map((ach) => {
                  const isUnlocked = unlockedIds.includes(ach.id);

                  return (
                    <div
                      key={ach.id}
                      className={`p-3.5 rounded-xl border flex items-start gap-3 transition-all ${
                        isUnlocked
                          ? "bg-yellow-950/20 border-yellow-500/30 text-gray-100"
                          : "bg-gray-900/40 border-gray-800 text-gray-500 opacity-60"
                      }`}
                    >
                      <div
                        className={`p-2.5 rounded-lg border shrink-0 ${
                          isUnlocked
                            ? "bg-yellow-500/20 border-yellow-500/40 text-yellow-400"
                            : "bg-gray-800 border-gray-700 text-gray-600"
                        }`}
                      >
                        {ach.icon}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h4
                            className={`font-semibold text-sm ${
                              isUnlocked ? "text-yellow-300" : "text-gray-400"
                            }`}
                          >
                            {ach.title}
                          </h4>
                          {isUnlocked ? (
                            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/30">
                              <CheckCircle2 className="w-3 h-3" /> Unlocked
                            </span>
                          ) : (
                            <span className="text-[11px] text-gray-500 font-mono">
                              Locked 🔒
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-gray-400 mt-1">
                          {ach.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 pt-3 border-t border-gray-800 flex items-center justify-between text-xs text-gray-400">
                <span className="flex items-center gap-1">
                  <Award className="w-4 h-4 text-yellow-400" />
                  Progress saved automatically
                </span>
                <button
                  onClick={onCloseTrophyModal}
                  className="px-4 py-1.5 bg-gray-800 hover:bg-gray-700 text-gray-200 rounded-lg text-xs font-semibold transition"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

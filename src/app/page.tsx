"use client";

import React, { useState, useEffect, useCallback } from "react";
import { LoadingScreen } from "@/components/LoadingScreen";
import { InteractiveBackground } from "@/components/InteractiveBackground";
import { ReadingProgress } from "@/components/ReadingProgress";
import { BackToTop } from "@/components/BackToTop";
import { Navbar } from "@/components/Navbar";
import { CommandPalette } from "@/components/CommandPalette";
import { TerminalModal } from "@/components/TerminalModal";
import { AchievementSystem } from "@/components/AchievementSystem";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { TechStackEcosystem } from "@/components/TechStackEcosystem";
import { Certifications } from "@/components/Certifications";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [trophyModalOpen, setTrophyModalOpen] = useState(false);
  const [unlockedAchievements, setUnlockedAchievements] = useState<string[]>([]);

  // Load unlocked achievements from localStorage on client mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("srinath_portfolio_achievements");
      if (saved) {
        setUnlockedAchievements(JSON.parse(saved));
      }
    } catch {
      // Ignore storage read error
    }
  }, []);

  const unlockAchievement = useCallback((id: string) => {
    setUnlockedAchievements((prev) => {
      if (prev.includes(id)) return prev;
      const updated = [...prev, id];
      try {
        localStorage.setItem(
          "srinath_portfolio_achievements",
          JSON.stringify(updated)
        );
      } catch {
        // Ignore storage write error
      }
      return updated;
    });
  }, []);

  // Listen for keyboard shortcuts (Ctrl+K or Ctrl+~)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        unlockAchievement("KEYBOARD_WIZARD");
      }
      if ((e.ctrlKey || e.metaKey) && e.key === "`") {
        unlockAchievement("KEYBOARD_WIZARD");
        unlockAchievement("TERMINAL_OPERATOR");
        setTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [unlockAchievement]);

  return (
    <div className="min-h-screen bg-[#030712] text-gray-100 selection:bg-blue-500/30 selection:text-white relative font-sans">
      {/* Initial Loading Screen */}
      <LoadingScreen />

      {/* Top Reading Scroll Progress Bar */}
      <ReadingProgress />

      {/* Interactive Background Canvas & Auroras */}
      <InteractiveBackground />

      {/* Back To Top Floating Button */}
      <BackToTop />

      {/* Glassmorphic Navbar Header */}
      <Navbar
        onOpenCommandPalette={() => {
          setCommandPaletteOpen(true);
          unlockAchievement("KEYBOARD_WIZARD");
        }}
        onOpenTerminal={() => {
          setTerminalOpen(true);
          unlockAchievement("TERMINAL_OPERATOR");
        }}
        onOpenTrophyModal={() => setTrophyModalOpen(true)}
        unlockedCount={unlockedAchievements.length}
      />

      {/* Command Palette Modal (Ctrl+K) */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />

      {/* Developer CLI Terminal Modal (Ctrl+~) */}
      <TerminalModal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
        onUnlockAchievement={unlockAchievement}
      />

      {/* Achievement Tracking System & Trophy Case */}
      <AchievementSystem
        unlockedIds={unlockedAchievements}
        onUnlock={unlockAchievement}
        isTrophyModalOpen={trophyModalOpen}
        onCloseTrophyModal={() => setTrophyModalOpen(false)}
      />

      {/* Main Page Content */}
      <main className="relative z-10">
        <Hero
          onOpenTerminal={() => {
            setTerminalOpen(true);
            unlockAchievement("TERMINAL_OPERATOR");
          }}
        />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <TechStackEcosystem />
        <Certifications />
        <Education />
        <Contact />
      </main>

      {/* Minimal Engineering Footer */}
      <Footer />
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { LoadingScreen } from "@/components/LoadingScreen";
import { InteractiveBackground } from "@/components/InteractiveBackground";
import { ReadingProgress } from "@/components/ReadingProgress";
import { BackToTop } from "@/components/BackToTop";
import { Navbar } from "@/components/Navbar";
import { CommandPalette } from "@/components/CommandPalette";
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
      <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      {/* Command Palette Modal (Ctrl+K) */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />

      {/* Main Page Content */}
      <main className="relative z-10">
        <Hero />
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

"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import CustomLoader from "@/components/CustomLoader";
import InteractiveBackground from "@/components/InteractiveBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import CodingProfiles from "@/components/CodingProfiles";
import Achievements from "@/components/Achievements";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CommandPalette from "@/components/CommandPalette";
import RecruiterDrawer from "@/components/RecruiterDrawer";
import FigmaMultiplayerCursors from "@/components/FigmaMultiplayerCursors";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <CustomLoader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="relative min-h-screen flex flex-col bg-bg-dark">
          {/* Interactive Background */}
          <InteractiveBackground />

          {/* Figma-Style Canvas Multiplayer Cursors Overlay */}
          <FigmaMultiplayerCursors />

          {/* Search Command Palette Overlay */}
          <CommandPalette isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

          {/* Recruiter Fast-Brief Floating Drawer */}
          <RecruiterDrawer />

          {/* Core Layout Structure */}
          <Navbar onOpenSearch={() => setSearchOpen(true)} />
          
          <main className="flex-1">
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <CodingProfiles />
            <Achievements />
            <Testimonials />
            <Contact />
          </main>

          <Footer />
        </div>
      )}
    </>
  );
}

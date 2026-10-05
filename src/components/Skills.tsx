"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Server,
  Layout,
  Database,
  Cloud,
  Code2,
  Search,
  Filter,
  Sparkles,
  Layers
} from "lucide-react";
import { SKILL_CATEGORIES } from "../lib/data";

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  "AI & Autonomous Systems": Cpu,
  "Backend & Microservices": Server,
  "Frontend Engineering": Layout,
  "Databases & Storage": Database,
  "DevOps & Infrastructure": Cloud,
  "Core Computer Science": Code2,
};

export const Skills: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categoriesList = ["All", ...SKILL_CATEGORIES.map((cat) => cat.title)];

  const filteredCategories = useMemo(() => {
    return SKILL_CATEGORIES.map((cat) => {
      const isCatSelected = selectedCategory === "All" || selectedCategory === cat.title;
      if (!isCatSelected) return null;

      const matchingSkills = cat.skills.filter(
        (s) =>
          s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.tag.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.level.toLowerCase().includes(searchQuery.toLowerCase())
      );

      if (matchingSkills.length === 0) return null;

      return {
        ...cat,
        skills: matchingSkills,
      };
    }).filter(Boolean);
  }, [searchQuery, selectedCategory]);

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-amber-500/30 text-xs font-mono font-medium text-amber-300 bg-amber-950/30">
            <Layers className="w-3.5 h-3.5 text-amber-400" />
            <span>ENGINEERING STACK &amp; CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Technical Stack &amp; <span className="gradient-text-gold">Tooling</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Practical engineering capabilities across AI orchestration, asynchronous backends, modern web frontends, and core CS fundamentals.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl glass-panel border border-amber-500/20 bg-amber-950/10">
          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-amber-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter stack (e.g. FastAPI, RAG, React)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs bg-white/5 rounded-xl text-white placeholder-gray-500 border border-amber-500/20 focus:outline-none focus:border-amber-400/60 font-mono"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
            {categoriesList.map((catName) => {
              const isSelected = selectedCategory === catName;
              return (
                <button
                  key={catName}
                  onClick={() => setSelectedCategory(catName)}
                  className={`px-3 py-1.5 text-xs font-mono rounded-xl transition-all ${
                    isSelected
                      ? "bg-amber-400 text-gray-950 font-bold shadow-md shadow-amber-500/20"
                      : "text-gray-400 hover:text-white glass-panel border border-white/10"
                  }`}
                >
                  {catName}
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="space-y-10">
          {filteredCategories.length === 0 ? (
            <div className="p-12 text-center text-gray-400 font-mono text-sm glass-panel rounded-2xl border border-white/10">
              No matching technologies found for &quot;{searchQuery}&quot;.
            </div>
          ) : (
            filteredCategories.map((category) => {
              if (!category) return null;
              const Icon = CATEGORY_ICONS[category.title] || Code2;
              return (
                <div key={category.title} className="space-y-4">
                  {/* Category Title Header */}
                  <div className="flex items-center gap-3 pb-2 border-b border-white/[0.08]">
                    <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-lg font-bold text-white tracking-tight">{category.title}</h3>
                    <span className="text-xs font-mono text-gray-500">({category.skills.length})</span>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                    {category.skills.map((skill, idx) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.96 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.25, delay: idx * 0.03 }}
                        className="glass-panel p-4 rounded-xl border border-white/10 flex flex-col justify-between group hover:border-amber-400/40 hover:bg-amber-950/10 transition-all"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <span className="font-semibold text-sm text-white group-hover:text-amber-300 transition-colors">
                            {skill.name}
                          </span>
                          <span className="px-2 py-0.5 text-[10px] font-mono rounded-md bg-white/[0.05] text-amber-300 border border-white/10 flex-shrink-0">
                            {skill.level}
                          </span>
                        </div>

                        <p className="text-xs text-gray-400 font-mono pt-2 leading-relaxed">
                          {skill.tag}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};

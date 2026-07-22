"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Cpu, Server, Layout, Database, Cloud, Code2, Search, Filter, Sparkles, CheckCircle2 } from "lucide-react";
import { SKILL_CATEGORIES } from "../lib/data";

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  "AI & Autonomous Systems": Cpu,
  "Backend & Microservices": Server,
  "Frontend Engineering": Layout,
  "Databases & Storage": Database,
  "DevOps & Cloud Infrastructure": Cloud,
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-blue-500/30 text-xs font-mono font-medium text-blue-400">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES &amp; CS CORE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Engineering &amp; Technology <span className="gradient-text-emerald">Stack</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Production technology skills across AI orchestration, asynchronous backend systems, modern web frontends, and core computer science fundamentals.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl glass-panel border border-white/10">
          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skills (e.g. FastAPI, LangChain, React)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs bg-white/5 rounded-xl text-white placeholder-gray-500 border border-white/10 focus:outline-none focus:border-blue-500/50"
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
                      ? "bg-blue-600 text-white font-semibold shadow-md shadow-blue-500/20"
                      : "text-gray-400 hover:text-white glass-panel border border-white/5"
                  }`}
                >
                  {catName}
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="space-y-12">
          {filteredCategories.length === 0 ? (
            <div className="p-12 text-center text-gray-400 font-mono text-sm glass-panel rounded-2xl border border-white/10">
              No skills found matching &quot;{searchQuery}&quot;. Try resetting your search filter.
            </div>
          ) : (
            filteredCategories.map((category) => {
              if (!category) return null;
              const Icon = CATEGORY_ICONS[category.title] || Code2;
              return (
                <div key={category.title} className="space-y-4">
                  {/* Category Title Header */}
                  <div className="flex items-center gap-3 pb-2 border-b border-white/10">
                    <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                    <span className="text-xs font-mono text-gray-500">({category.skills.length} skills)</span>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.skills.map((skill, idx) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                        className="glass-panel glass-panel-hover p-4 rounded-xl border border-white/10 flex items-center justify-between group"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-sm text-white group-hover:text-blue-400 transition-colors">
                              {skill.name}
                            </span>
                          </div>
                          <p className="text-xs text-gray-400 font-mono">{skill.tag}</p>
                        </div>

                        <span className="px-2.5 py-1 text-[10px] font-mono font-medium rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20 flex-shrink-0">
                          {skill.level}
                        </span>
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

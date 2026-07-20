"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Terminal, Database, Code2, ShieldAlert, GitBranch } from "lucide-react";

interface SkillItem {
  name: string;
  level: number; // percentage
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  colorClass: string; // Tailwind glow border color style
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "AI & Machine Learning",
    icon: <Cpu className="h-5 w-5" />,
    colorClass: "hover:border-accent-purple/30 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] border-accent-purple/10",
    skills: [
      { name: "LLMs (GPT-4o, Claude, Gemini)", level: 90 },
      { name: "LangChain & LangGraph", level: 90 },
      { name: "Deep Learning (TensorFlow/Keras)", level: 85 },
      { name: "Retrieval-Augmented Gen (RAG)", level: 88 },
      { name: "Prompt Engineering & Embeddings", level: 92 },
      { name: "Vector Databases (ChromaDB, pgvector)", level: 85 },
      { name: "Computer Vision (OpenCV, MobileNetV2)", level: 80 },
    ],
  },
  {
    title: "Backend Engineering",
    icon: <Database className="h-5 w-5" />,
    colorClass: "hover:border-accent-blue/30 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] border-accent-blue/10",
    skills: [
      { name: "Python (FastAPI, Django)", level: 92 },
      { name: "REST APIs & Integrations", level: 90 },
      { name: "Asynchronous Programming", level: 85 },
      { name: "Node.js (Express)", level: 75 },
    ],
  },
  {
    title: "Programming Languages",
    icon: <Terminal className="h-5 w-5" />,
    colorClass: "hover:border-accent-teal/30 group-hover:shadow-[0_0_30px_rgba(13,148,136,0.15)] border-accent-teal/10",
    skills: [
      { name: "Python", level: 95 },
      { name: "SQL (PostgreSQL, SQLite)", level: 85 },
      { name: "TypeScript & JavaScript", level: 84 },
      { name: "Java", level: 78 },
    ],
  },
  {
    title: "Frontend & Modern Web",
    icon: <Code2 className="h-5 w-5" />,
    colorClass: "hover:border-accent-orange/30 group-hover:shadow-[0_0_30px_rgba(234,88,12,0.15)] border-accent-orange/10",
    skills: [
      { name: "ReactJS", level: 88 },
      { name: "Next.js", level: 86 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML5 & CSS3 Animations", level: 92 },
    ],
  },
  {
    title: "Databases & Caching",
    icon: <ShieldAlert className="h-5 w-5" />,
    colorClass: "hover:border-accent-blue/30 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] border-accent-blue/10",
    skills: [
      { name: "PostgreSQL", level: 88 },
      { name: "MongoDB", level: 80 },
      { name: "Redis Caching", level: 82 },
    ],
  },
  {
    title: "DevOps & Tooling",
    icon: <GitBranch className="h-5 w-5" />,
    colorClass: "hover:border-accent-purple/30 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] border-accent-purple/10",
    skills: [
      { name: "Git & GitHub Versioning", level: 90 },
      { name: "Docker Containerization", level: 80 },
      { name: "CI/CD & GitHub Actions", level: 78 },
      { name: "Vercel & Render Deployment", level: 88 },
    ],
  },
];

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <section id="skills" className="relative w-full py-24 px-6 bg-black/30">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <motion.h2
            className="font-display text-3xl font-bold tracking-tight text-white light:text-slate-900 sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Technical <span className="text-gradient-purple-blue">Skills</span>
          </motion.h2>
          <motion.div
            className="mt-2 h-1 w-12 bg-accent-purple rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </div>

        {/* Filter Tabs */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`rounded-full px-5 py-2 font-sans text-xs font-semibold tracking-wider uppercase transition-all ${
              selectedCategory === null
                ? "bg-gradient-to-r from-accent-purple to-accent-blue text-white shadow-lg"
                : "bg-white/5 border border-white/10 text-slate-400 hover:text-white light:border-slate-350 light:bg-slate-100 light:text-slate-600 light:hover:bg-slate-200"
            }`}
          >
            All Skill Areas
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.title}
              onClick={() => setSelectedCategory(cat.title)}
              className={`rounded-full px-5 py-2 font-sans text-xs font-semibold tracking-wider uppercase transition-all ${
                selectedCategory === cat.title
                  ? "bg-gradient-to-r from-accent-purple to-accent-blue text-white shadow-lg"
                  : "bg-white/5 border border-white/10 text-slate-400 hover:text-white light:border-slate-350 light:bg-slate-100 light:text-slate-600 light:hover:bg-slate-200"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          layout
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {skillCategories
              .filter((cat) => selectedCategory === null || cat.title === selectedCategory)
              .map((category) => (
                <motion.div
                  key={category.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className={`group glass-card rounded-2xl p-6 flex flex-col border ${category.colorClass}`}
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="rounded-lg bg-white/5 p-2.5 text-accent-purple light:bg-slate-150 light:text-purple-600">
                      {category.icon}
                    </div>
                    <h3 className="font-display text-lg font-bold text-white light:text-slate-900">{category.title}</h3>
                  </div>

                  {/* Skills Progress list */}
                  <div className="flex-1 space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="flex flex-col">
                        <div className="flex justify-between items-center mb-1 font-sans text-xs font-medium text-slate-300 light:text-slate-700">
                          <span>{skill.name}</span>
                          <span className="text-slate-400 light:text-slate-500 font-semibold">{skill.level}%</span>
                        </div>
                        {/* Glow Progress Bar container */}
                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden light:bg-slate-200">
                          <motion.div
                            className="h-full bg-gradient-to-r from-accent-purple to-accent-blue rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Award } from "lucide-react";

interface TimelineItem {
  company: string;
  role: string;
  duration: string;
  location: string;
  technologies: string[];
  achievements: string[];
}

const experiences: TimelineItem[] = [
  {
    company: "Sreeva AI",
    role: "AI Full Stack Engineer Intern",
    duration: "May 2026 – Present",
    location: "Remote",
    technologies: ["Python", "FastAPI", "ReactJS", "PostgreSQL", "Redis", "Docker", "GitHub Actions"],
    achievements: [
      "Developed AI-powered document analysis and workflow automation applications using Python, FastAPI, ReactJS, and PostgreSQL.",
      "Engineered asynchronous backend tasks and integrated Redis caching, resulting in a 35% reduction in average API response latency.",
      "Assisted in automated deployment pipelines using Docker containers and GitHub Actions CI/CD workflows, improving deployment cycle reliability.",
      "Participated actively in senior-level code audits, debug runs, and software development lifecycle optimization sessions.",
    ],
  },
  {
    company: "Freelance Developer & AI Specialist",
    role: "Full-Stack & Machine Learning Consultant",
    duration: "Jan 2024 – May 2026",
    location: "Hyderabad, India (Hybrid)",
    technologies: ["Next.js", "Django REST Framework", "TensorFlow", "LangChain", "OpenCV", "MongoDB"],
    achievements: [
      "Engineered bespoke semantic search engines and multi-source AI integrations for domestic clients, improving content-discovery rate.",
      "Created customized image processing modules using OpenCV to analyze object dimensions for e-commerce client inventory pipelines.",
      "Built responsive customer interfaces and interactive metrics dashboards using React and Django, deploying them to Vercel/Render.",
      "Optimized query processing in relational databases, reducing database overhead for analytics-heavy client systems by 25%.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative w-full py-24 px-6">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="mb-20 flex flex-col items-center text-center">
          <motion.h2
            className="font-display text-3xl font-bold tracking-tight text-white light:text-slate-900 sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Work <span className="text-gradient-purple-blue">Experience</span>
          </motion.h2>
          <motion.div
            className="mt-2 h-1 w-12 bg-accent-purple rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </div>

        {/* Timeline container */}
        <div className="relative border-l border-white/10 dark:border-white/10 light:border-slate-200 ml-4 md:ml-32">
          {experiences.map((exp, index) => (
            <div key={exp.company + exp.role} className="relative mb-16 md:mb-20 last:mb-0 pl-8 md:pl-12">
              {/* Timeline marker */}
              <motion.div
                className="absolute left-[-9px] top-1.5 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-black border border-accent-purple shadow-[0_0_10px_rgba(168,85,247,0.4)]"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              />

              {/* Time Label for larger screens (Left Margin) */}
              <div className="hidden md:block absolute left-[-260px] top-1 w-200 text-right font-display text-xs font-semibold text-slate-400 light:text-slate-500 uppercase tracking-wider">
                {exp.duration}
              </div>

              {/* Info Card */}
              <motion.div
                className="glass-card rounded-2xl p-8 md:p-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl font-bold text-white light:text-slate-900">{exp.role}</h3>
                    <div className="mt-1 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-400 light:text-slate-500">
                      <span className="flex items-center gap-1.5 text-accent-purple font-semibold">
                        <Briefcase className="h-3.5 w-3.5" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1.5 md:hidden">
                        <Calendar className="h-3.5 w-3.5" />
                        {exp.duration}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Achievements bullets */}
                <ul className="mt-6 space-y-3 font-sans text-sm leading-relaxed text-slate-300 light:text-slate-600">
                  {exp.achievements.map((ach, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <Award className="h-4 w-4 text-accent-blue mt-0.5 shrink-0" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="mt-8 flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded bg-white/5 border border-white/5 px-2.5 py-1 text-xs font-mono text-slate-400 light:border-slate-300 light:bg-slate-100 light:text-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

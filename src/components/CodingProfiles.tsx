"use client";

import { motion } from "framer-motion";
import { Code2, Terminal, Flame, Zap } from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";

export default function CodingProfiles() {
  // Generate random days for GitHub contribution heatmap simulation
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const weekdays = ["Mon", "", "Wed", "", "Fri", ""];
  
  // Create 52 columns of 7 cells each
  const totalWeeks = 38;
  const daysInWeek = 7;
  
  const generateIntensity = () => {
    const rand = Math.random();
    if (rand < 0.3) return "bg-white/5 dark:bg-white/5 light:bg-slate-200"; // Empty
    if (rand < 0.6) return "bg-emerald-950/45 dark:bg-emerald-950/45 light:bg-emerald-100"; // Low
    if (rand < 0.8) return "bg-emerald-800/60 dark:bg-emerald-800/60 light:bg-emerald-300"; // Medium
    if (rand < 0.95) return "bg-emerald-600 dark:bg-emerald-600 light:bg-emerald-500"; // High
    return "bg-emerald-400 dark:bg-emerald-400 light:bg-emerald-600"; // Max
  };

  return (
    <section id="coding-profiles" className="relative w-full py-24 px-6 bg-black/25">
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
            Coding <span className="text-gradient-purple-blue">Profiles</span>
          </motion.h2>
          <motion.div
            className="mt-2 h-1 w-12 bg-accent-purple rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </div>

        {/* Outer Grid */}
        <div className="grid gap-8 lg:grid-cols-12">
          {/* GitHub heatmap card */}
          <motion.div
            className="lg:col-span-8 glass-card rounded-2xl p-6 flex flex-col border border-white/5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Github className="h-5 w-5 text-accent-purple" />
                <h3 className="font-display text-lg font-bold text-white light:text-slate-900">GitHub Contributions</h3>
              </div>
              <span className="font-sans text-xs text-slate-400 light:text-slate-500">
                1,248 commits in the past year
              </span>
            </div>

            {/* Heatmap Grid Wrapper */}
            <div className="flex flex-col overflow-x-auto no-scrollbar py-2">
              <div className="flex gap-1 justify-between text-[9px] font-mono text-slate-500 mb-2 px-6">
                {months.map((m) => <span key={m}>{m}</span>)}
              </div>
              <div className="flex gap-2">
                {/* Weekdays Labels */}
                <div className="flex flex-col justify-between text-[8px] font-mono text-slate-500 py-1.5 h-[98px]">
                  {weekdays.map((d, i) => <span key={i} className="h-2">{d}</span>)}
                </div>
                {/* Visual grid representing columns of weeks */}
                <div className="grid grid-flow-col gap-1 select-none">
                  {Array.from({ length: totalWeeks }).map((_, wIdx) => (
                    <div key={wIdx} className="grid grid-rows-7 gap-1">
                      {Array.from({ length: daysInWeek }).map((_, dIdx) => (
                        <div
                          key={dIdx}
                          className={`h-2.5 w-2.5 rounded-sm transition-all ${generateIntensity()}`}
                          title={`Day ${dIdx + 1}, Week ${wIdx + 1}`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Heatmap Legend */}
            <div className="mt-6 flex items-center justify-between text-[10px] font-mono text-slate-500">
              <a
                href="https://github.com/srinathdoggala-tech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-purple hover:underline"
              >
                github.com/srinathdoggala-tech
              </a>
              <div className="flex items-center gap-1.5">
                <span>Less</span>
                <div className="h-2 w-2 rounded-sm bg-white/5 dark:bg-white/5 light:bg-slate-200" />
                <div className="h-2 w-2 rounded-sm bg-emerald-950/45 dark:bg-emerald-950/45 light:bg-emerald-100" />
                <div className="h-2 w-2 rounded-sm bg-emerald-800/60 dark:bg-emerald-800/60 light:bg-emerald-300" />
                <div className="h-2 w-2 rounded-sm bg-emerald-600 dark:bg-emerald-600 light:bg-emerald-500" />
                <div className="h-2 w-2 rounded-sm bg-emerald-400 dark:bg-emerald-400 light:bg-emerald-600" />
                <span>More</span>
              </div>
            </div>
          </motion.div>

          {/* LeetCode & LinkedIn Cards Column */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* LeetCode stats Card */}
            <motion.div
              className="glass-card rounded-2xl p-6 border border-white/5 flex flex-col justify-between"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Code2 className="h-5 w-5 text-accent-blue" />
                  <h3 className="font-display text-sm font-bold text-white light:text-slate-900">LeetCode Metrics</h3>
                </div>
                <a
                  href="https://leetcode.com/u/doggalasrinath/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded bg-accent-blue/10 px-2 py-0.5 text-[9px] font-mono text-blue-300 light:text-blue-700 hover:bg-accent-blue/20"
                >
                  Profile
                </a>
              </div>

              <div className="space-y-4">
                {/* Stat row 1 */}
                <div className="flex justify-between items-center text-xs">
                  <span className="flex items-center gap-1.5 text-slate-400 light:text-slate-500">
                    <Flame className="h-4 w-4 text-accent-orange animate-pulse" />
                    Streak Count
                  </span>
                  <span className="font-mono font-bold text-white light:text-slate-900">120+ Days</span>
                </div>
                {/* Stat row 2 */}
                <div className="flex justify-between items-center text-xs">
                  <span className="flex items-center gap-1.5 text-slate-400 light:text-slate-500">
                    <Terminal className="h-4 w-4 text-slate-500" />
                    Problems Solved
                  </span>
                  <span className="font-mono font-bold text-white light:text-slate-900">250+ (70% Medium)</span>
                </div>
                {/* Stat row 3 */}
                <div className="flex justify-between items-center text-xs">
                  <span className="flex items-center gap-1.5 text-slate-400 light:text-slate-500">
                    <Zap className="h-4 w-4 text-yellow-500" />
                    Contest Percentile
                  </span>
                  <span className="font-mono font-bold text-white light:text-slate-900">Top 15% (Global)</span>
                </div>
              </div>
            </motion.div>

            {/* LinkedIn card */}
            <motion.div
              className="glass-card rounded-2xl p-6 border border-white/5 flex flex-col justify-between"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Linkedin className="h-5 w-5 text-accent-teal" />
                  <h3 className="font-display text-sm font-bold text-white light:text-slate-900">LinkedIn Connects</h3>
                </div>
                <a
                  href="https://www.linkedin.com/in/srinath-doggala-081083286/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded bg-accent-teal/10 px-2 py-0.5 text-[9px] font-mono text-teal-300 light:text-teal-700 hover:bg-accent-teal/20"
                >
                  Connect
                </a>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400 light:text-slate-500">Connections</span>
                  <span className="font-mono font-bold text-white light:text-slate-900">500+</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400 light:text-slate-500">Profile Engagement</span>
                  <span className="font-mono font-bold text-white light:text-slate-900">Top 5% in AI Tech</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

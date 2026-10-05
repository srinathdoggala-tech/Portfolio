"use client";

import React from "react";
import { motion } from "framer-motion";
import { Gauge, CheckCircle2, Bot, FileCheck2, ArrowUpRight, ShieldCheck } from "lucide-react";
import { QUICK_STATS } from "@/lib/data";

const STAT_ICONS = [Gauge, CheckCircle2, Bot, FileCheck2];

export const ProofStrip: React.FC = () => {
  return (
    <section className="relative z-20 -mt-4 mb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-2xl border border-amber-500/20 bg-[#070d1d]/80 p-5 sm:p-6 shadow-2xl backdrop-blur-xl">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.08]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-wider uppercase text-gray-300">
                Engineering Verification &amp; Verified Metrics
              </span>
            </div>
            <a
              href="#proof"
              className="text-xs font-mono text-amber-400 hover:text-amber-300 flex items-center gap-1 transition-colors"
            >
              <span>View Evidence Matrix</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {QUICK_STATS.map((stat, idx) => {
              const Icon = STAT_ICONS[idx] || ShieldCheck;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-amber-500/30 hover:bg-amber-950/10 transition-all group relative overflow-hidden"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-3xl font-extrabold font-mono text-white tracking-tight group-hover:text-amber-300 transition-colors">
                      {stat.value}
                    </span>
                    <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 group-hover:bg-amber-400 group-hover:text-gray-950 transition-all">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="mt-2 space-y-1">
                    <h4 className="text-sm font-semibold text-gray-200">
                      {stat.label}
                    </h4>
                    <p className="text-xs font-mono text-amber-300/80">
                      {stat.subtext}
                    </p>
                    <p className="text-[11px] text-gray-400 leading-snug pt-1 border-t border-white/[0.04]">
                      {stat.evidence}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

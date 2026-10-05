"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  CheckCircle2,
  Zap,
  FileCheck2,
  Cpu,
  Layers,
  Code2,
  ExternalLink,
  Terminal,
  GitBranch,
  ArrowRight
} from "lucide-react";
import { ENGINEERING_PROOF, ProofItem } from "@/lib/data";

const PROOF_ICONS: Record<string, React.ElementType> = {
  testing: CheckCircle2,
  latency: Zap,
  benchmarks: FileCheck2,
  architecture: ShieldCheck,
  deployment: Layers,
  source: Code2,
};

export const EngineeringProof: React.FC = () => {
  const [activeProof, setActiveProof] = useState<string>("testing");

  const selectedItem = ENGINEERING_PROOF.find((p) => p.id === activeProof) || ENGINEERING_PROOF[0];

  return (
    <section id="proof" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-emerald-500/30 text-xs font-mono font-medium text-emerald-300 bg-emerald-950/30">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>VERIFIABLE ENGINEERING EVIDENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Engineering Proof &amp; <span className="gradient-text-gold">Reliability</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Engineering claims backed by automated test suites, measurable performance benchmarks, public repositories, and fault-tolerant architectural designs.
          </p>
        </div>

        {/* 6 Proof Matrix Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ENGINEERING_PROOF.map((item, idx) => {
            const Icon = PROOF_ICONS[item.id] || ShieldCheck;
            const isSelected = activeProof === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                onClick={() => setActiveProof(item.id)}
                className={`glass-panel p-6 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between group relative overflow-hidden ${
                  isSelected
                    ? "border-amber-400/60 bg-amber-950/20 shadow-xl shadow-amber-500/10"
                    : "border-white/[0.08] hover:border-amber-500/30 hover:bg-amber-950/10"
                }`}
              >
                {/* Accent glow on selection */}
                {isSelected && (
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
                )}

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-300 bg-amber-950/40 px-2.5 py-1 rounded-md border border-amber-500/30">
                      {item.category}
                    </span>
                    <div className={`p-2 rounded-xl border ${isSelected ? "bg-amber-400 text-gray-950 border-amber-400" : "bg-white/[0.04] text-amber-400 border-white/10"}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div>
                    <span className="text-2xl font-mono font-extrabold text-white group-hover:text-amber-300 transition-colors">
                      {item.metric}
                    </span>
                    <h3 className="text-base font-bold text-gray-200 mt-1">
                      {item.headline}
                    </h3>
                  </div>

                  <p className="text-xs text-gray-400 leading-relaxed">
                    {item.detail}
                  </p>

                  <div className="pt-3 border-t border-white/[0.06] space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-gray-500 block">
                      Verification Method:
                    </span>
                    <p className="text-[11px] font-mono text-emerald-400/90 leading-snug">
                      {item.verificationMethod}
                    </p>
                  </div>
                </div>

                {item.linkUrl && (
                  <div className="pt-4 mt-2">
                    <a
                      href={item.linkUrl}
                      target={item.linkUrl.startsWith("http") ? "_blank" : undefined}
                      rel={item.linkUrl.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-xs font-mono text-amber-400 hover:text-amber-300 inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span>{item.linkText || "View Evidence"}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Detailed Verification Callout Box */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-amber-500/30 bg-[#060b18]/80 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.08]">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 font-mono text-sm">
                <Terminal className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">
                  Evidence Deep Dive: {selectedItem.headline}
                </h4>
                <p className="text-xs font-mono text-gray-400">
                  Category: {selectedItem.category} • Method: {selectedItem.verificationMethod}
                </p>
              </div>
            </div>

            {selectedItem.linkUrl && (
              <a
                href={selectedItem.linkUrl}
                target={selectedItem.linkUrl.startsWith("http") ? "_blank" : undefined}
                rel={selectedItem.linkUrl.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex items-center px-4 py-2 text-xs font-bold text-gray-950 bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 rounded-xl shadow-md transition-all self-start sm:self-auto"
              >
                <span>{selectedItem.linkText || "Inspect Repository"}</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </a>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
              <span className="text-[10px] text-gray-400 uppercase tracking-wider block">
                01 • The Problem It Solves
              </span>
              <p className="text-gray-300 leading-relaxed text-[11px]">
                Eliminating reliance on unverified statements by establishing measurable automated checks, structured schemas, and failure recovery.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
              <span className="text-[10px] text-gray-400 uppercase tracking-wider block">
                02 • Implementation Mechanism
              </span>
              <p className="text-gray-300 leading-relaxed text-[11px]">
                {selectedItem.detail}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
              <span className="text-[10px] text-gray-400 uppercase tracking-wider block">
                03 • Defensible Interview Proof
              </span>
              <p className="text-emerald-400 leading-relaxed text-[11px]">
                {selectedItem.verificationMethod}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { CERTIFICATIONS } from "../lib/data";

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-blue-500/30 text-xs font-mono font-medium text-blue-400">
            <Award className="w-3.5 h-3.5" />
            <span>VERIFIED ACADEMIC &amp; INDUSTRY CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Professional <span className="gradient-text-apple">Certifications</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Validated technical expertise in Google Cloud AI, Generative AI, Machine Learning, and Database SQL Architecture.
          </p>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel glass-panel-hover p-6 rounded-2xl border border-white/15 space-y-4 relative overflow-hidden flex flex-col justify-between group"
            >
              {/* Subtle Badge Gradient accent */}
              <div className={`absolute top-0 right-0 w-28 h-28 bg-gradient-to-br ${cert.badgeColor} opacity-10 rounded-full blur-xl group-hover:opacity-25 transition-opacity`} />

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 text-xs font-mono font-bold text-blue-400 bg-blue-500/10 rounded-full border border-blue-500/20">
                    {cert.issuer}
                  </span>
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors leading-snug">
                  {cert.title}
                </h3>

                {/* Covered Skills */}
                <div className="space-y-2 pt-2">
                  <span className="text-[11px] font-mono text-gray-400">Validated Skills:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skillsCovered.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 text-[11px] font-mono text-gray-300 glass-panel rounded-md border border-white/10"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Verify Link */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-emerald-400 font-mono flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Verified Credential
                </span>
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-gray-400 hover:text-white flex items-center gap-1 font-mono transition-colors"
                >
                  <span>Verify Link</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink, ShieldCheck } from "lucide-react";
import { CERTIFICATIONS } from "../lib/data";

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-12 relative z-10 -mt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 bg-[#060b18]/80 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/[0.06]">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white tracking-tight">Verified Certifications &amp; Credentials</h3>
                <p className="text-xs text-gray-400 font-mono">
                  Validated domain coursework in Google Cloud AI, Generative AI, Machine Learning, and SQL
                </p>
              </div>
            </div>

            <a
              href="https://www.linkedin.com/in/srinath-doggala-081083286"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-amber-400 hover:text-amber-300 flex items-center gap-1 self-start sm:self-auto"
            >
              <span>View Verified LinkedIn Badges</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Compact 4-Card Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CERTIFICATIONS.map((cert, idx) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-amber-400/40 hover:bg-amber-950/10 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold text-amber-300">
                      {cert.issuer}
                    </span>
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                  </div>

                  <h4 className="text-xs font-semibold text-white group-hover:text-amber-300 transition-colors leading-snug">
                    {cert.title}
                  </h4>

                  <p className="text-[10px] font-mono text-gray-400 leading-tight">
                    {cert.skillsCovered.join(" · ")}
                  </p>
                </div>

                <div className="pt-3 mt-2 border-t border-white/[0.04]">
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-mono text-gray-400 hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

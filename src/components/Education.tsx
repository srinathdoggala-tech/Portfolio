"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award, CheckCircle2, Star } from "lucide-react";
import { EDUCATION } from "../lib/data";

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-amber-500/30 text-xs font-mono font-medium text-amber-300 bg-amber-950/30">
            <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
            <span>ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Academic <span className="gradient-text-gold">Education</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Formal foundations in Computer Science, Artificial Intelligence, Machine Learning, and Mathematics.
          </p>
        </div>

        {/* Education Timeline Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {EDUCATION.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-panel p-6 rounded-2xl border border-white/10 bg-[#060c1d]/90 space-y-4 hover:border-amber-400/40 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2.5 py-1 text-[11px] font-mono font-bold text-amber-300 bg-amber-950/50 rounded-full border border-amber-500/30">
                    {edu.period}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-mono text-gray-400">
                    <MapPin className="w-3.5 h-3.5 text-gray-500" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">{edu.institution}</h3>
                  <p className="text-sm font-mono text-amber-300/90 mt-0.5">{edu.degree}</p>
                </div>

                {edu.score && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs font-mono font-bold text-amber-300">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{edu.score}</span>
                  </div>
                )}

                <ul className="space-y-2 pt-2 border-t border-white/[0.06]">
                  {edu.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-gray-300 leading-relaxed font-normal">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

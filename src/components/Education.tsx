"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award, CheckCircle2, Sparkles } from "lucide-react";
import { EDUCATION } from "../lib/data";

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-blue-500/30 text-xs font-mono font-medium text-blue-400">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATION &amp; DEGREE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Academic <span className="gradient-text-purple">Education</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Engineering foundation in Computer Science, Artificial Intelligence, Machine Learning, and Mathematics.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="max-w-4xl mx-auto space-y-8">
          {EDUCATION.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/15 space-y-4 relative overflow-hidden transition-all hover:border-blue-500/40"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 text-xs font-mono font-bold text-blue-400 bg-blue-500/10 rounded-full border border-blue-500/20">
                      {edu.period}
                    </span>
                    {edu.score && (
                      <span className="px-3 py-1 text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 rounded-full border border-emerald-500/20">
                        Score: {edu.score}
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold text-white tracking-tight">{edu.institution}</h3>
                  <p className="text-blue-300 font-mono text-sm">{edu.degree}</p>
                </div>

                <div className="flex items-center gap-1 text-xs font-mono text-gray-400">
                  <MapPin className="w-3.5 h-3.5 text-gray-500" />
                  <span>{edu.location}</span>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <ul className="space-y-2">
                  {edu.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-gray-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
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

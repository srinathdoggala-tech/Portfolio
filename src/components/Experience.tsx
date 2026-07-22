"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Calendar, MapPin, ChevronDown, CheckCircle, Zap, Shield, Layers, ExternalLink } from "lucide-react";
import { EXPERIENCES } from "../lib/data";

export const Experience: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>("sreeva-ai");

  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-blue-500/30 text-xs font-mono font-medium text-blue-400">
            <Briefcase className="w-3.5 h-3.5" />
            <span>WORK EXPERIENCE &amp; IMPACT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Production Engineering <span className="gradient-text-apple">Experience</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Hands-on software engineering delivering high-performance backend microservices and AI application workflows.
          </p>
        </div>

        {/* Timeline List */}
        <div className="max-w-4xl mx-auto relative pl-6 sm:pl-8 border-l border-white/10 space-y-12">
          {EXPERIENCES.map((exp, index) => {
            const isExpanded = expandedId === exp.id;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative group"
              >
                {/* Timeline Dot Badge */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-[#030712] border-2 border-blue-500 flex items-center justify-center group-hover:border-purple-400 transition-colors shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                </div>

                {/* Experience Card */}
                <div className="glass-panel rounded-3xl border border-white/15 overflow-hidden transition-all duration-300 hover:border-blue-500/40">
                  {/* Card Header Bar */}
                  <div
                    onClick={() => setExpandedId(isExpanded ? null : exp.id)}
                    className="p-6 sm:p-8 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
                  >
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="px-3 py-1 text-xs font-mono font-bold text-blue-400 bg-blue-500/10 rounded-full border border-blue-500/20">
                          {exp.type}
                        </span>
                        <span className="text-xs text-gray-400 flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-gray-500" />
                          {exp.period}
                        </span>
                        <span className="text-xs text-gray-400 flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-gray-500" />
                          {exp.location}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                        {exp.role}
                        <span className="text-blue-400 text-lg font-normal">@ {exp.company}</span>
                      </h3>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="hidden sm:inline text-xs text-blue-400 font-mono">
                        {isExpanded ? "Collapse Details" : "Expand Details"}
                      </span>
                      <div className={`p-2 rounded-full glass-panel border border-white/10 text-gray-300 transition-transform ${isExpanded ? "rotate-180" : ""}`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="px-6 pb-8 sm:px-8 space-y-6 border-t border-white/10"
                      >
                        {/* Summary overview */}
                        <p className="text-gray-300 text-sm leading-relaxed pt-4">
                          {exp.description}
                        </p>

                        {/* Impact Metrics Highlights */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          {exp.metrics.map((metric) => (
                            <div key={metric} className="p-3.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-300 flex items-center gap-2">
                              <Zap className="w-4 h-4 text-blue-400 flex-shrink-0" />
                              <span>{metric}</span>
                            </div>
                          ))}
                        </div>

                        {/* Key Bullet Points */}
                        <div className="space-y-3">
                          <h4 className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                            Key Responsibilities &amp; Engineering Contributions
                          </h4>
                          <ul className="space-y-2.5">
                            {exp.bulletPoints.map((bullet, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-sm text-gray-300 leading-relaxed">
                                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-1" />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies Tags */}
                        <div className="pt-4 border-t border-white/10 space-y-2">
                          <span className="text-xs font-mono text-gray-400">Technology Stack Utilized:</span>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech) => (
                              <span key={tech} className="px-2.5 py-1 text-xs font-mono text-gray-300 glass-panel rounded-md border border-white/10">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

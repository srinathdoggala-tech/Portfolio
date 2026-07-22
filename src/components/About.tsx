"use client";

import { useEffect, useState, useRef } from "react";
import { useInView, motion } from "framer-motion";
import { User, Shield, Target, Cpu } from "lucide-react";

interface CounterProps {
  value: number;
  suffix?: string;
}

function Counter({ value, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      if (start === end) return;

      const duration = 2; // seconds
      const totalSteps = 40;
      const stepTime = (duration * 1000) / totalSteps;
      const increment = Math.ceil(end / totalSteps);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-display text-4xl font-extrabold text-white light:text-slate-900 sm:text-5xl">
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="relative w-full py-24 px-6">
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
            About <span className="text-gradient-purple-blue">Me</span>
          </motion.h2>
          <motion.div
            className="mt-2 h-1 w-12 bg-accent-purple rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </div>

        {/* About Grid */}
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Text and Introduction card */}
          <motion.div
            className="lg:col-span-7 glass-card rounded-2xl p-8 flex flex-col justify-between"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <User className="h-5 w-5 text-accent-purple" />
                <h3 className="font-display text-xl font-bold text-white light:text-slate-950">Professional Background</h3>
              </div>
              <div className="font-sans text-slate-300 light:text-slate-600 space-y-4 leading-relaxed">
                <p>
                  I am a passionate <strong>AI Engineer and Software Developer</strong> focused on building intelligence-driven tools, scalable multi-agent systems, and production-ready full-stack applications.
                </p>
                <p>
                  Currently pursuing my <strong>B.E. in Computer Science Engineering with a specialization in AI/ML</strong> at <strong>Chandigarh University</strong> (2023 - 2027), I combine core software engineering patterns with machine learning models to solve real problems.
                </p>
                <p>
                  My experience includes building multi-agent AI systems, ATS resume matching systems, image classification workflows, and REST services using Python (FastAPI/Django) and React. I enjoy writing clean, high-performance, and maintainable code.
                </p>
              </div>
            </div>

            {/* Quick badges */}
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="flex items-center gap-1.5 rounded-full bg-accent-purple/10 border border-accent-purple/20 px-3.5 py-1 text-xs font-semibold text-purple-300 light:text-purple-700">
                <Cpu className="h-3.5 w-3.5" />
                AI Specialists
              </span>
              <span className="flex items-center gap-1.5 rounded-full bg-accent-blue/10 border border-accent-blue/20 px-3.5 py-1 text-xs font-semibold text-blue-300 light:text-blue-700">
                <Shield className="h-3.5 w-3.5" />
                Backend Focus
              </span>
              <span className="flex items-center gap-1.5 rounded-full bg-accent-teal/10 border border-accent-teal/20 px-3.5 py-1 text-xs font-semibold text-teal-300 light:text-teal-700">
                <Target className="h-3.5 w-3.5" />
                Full-Stack Ability
              </span>
            </div>
          </motion.div>

          {/* Visual Avatar / Info and Stats Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Styled Avatar Card */}
            <motion.div
              className="glass-card rounded-2xl p-6 flex items-center gap-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Premium abstract graphic avatar */}
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border-2 border-accent-purple/50 shadow-lg">
                <img src="/profile.png" alt="Srinath Doggala" className="h-full w-full object-cover" />
                <div className="absolute inset-0 rounded-full border border-white/20 animate-ping opacity-30 pointer-events-none" />
              </div>
              <div>
                <h4 className="font-display font-bold text-white light:text-slate-900">Srinath Doggala</h4>
                <p className="font-sans text-xs text-slate-400 light:text-slate-500">AI Engineer Intern @ Sreeva AI</p>
                <p className="font-sans text-xs text-slate-500 mt-1">Based in Hyderabad, India</p>
              </div>
            </motion.div>

            {/* Statistics Dashboard Card */}
            <motion.div
              className="glass-card rounded-2xl p-8 grid grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {/* Stat 1 */}
              <div className="flex flex-col">
                <Counter value={3} suffix="+" />
                <span className="mt-1 font-sans text-xs font-medium text-slate-400 light:text-slate-500 uppercase tracking-wider">
                  Years Coding
                </span>
              </div>
              {/* Stat 2 */}
              <div className="flex flex-col">
                <Counter value={6} suffix="+" />
                <span className="mt-1 font-sans text-xs font-medium text-slate-400 light:text-slate-500 uppercase tracking-wider">
                  Projects Built
                </span>
              </div>
              {/* Stat 3 */}
              <div className="flex flex-col">
                <Counter value={25} suffix="+" />
                <span className="mt-1 font-sans text-xs font-medium text-slate-400 light:text-slate-500 uppercase tracking-wider">
                  Technologies
                </span>
              </div>
              {/* Stat 4 */}
              <div className="flex flex-col">
                <Counter value={4} suffix="+" />
                <span className="mt-1 font-sans text-xs font-medium text-slate-400 light:text-slate-500 uppercase tracking-wider">
                  AI Projects
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

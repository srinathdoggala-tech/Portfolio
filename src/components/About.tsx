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
    <section id="about" className="relative w-full py-16 md:py-20 px-6 sm:px-8">
      <div className="mx-auto max-w-7xl w-full">
        {/* Section Header */}
        <div className="mb-12 md:mb-14 flex flex-col items-center text-center">
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
        <div className="grid gap-10 md:gap-12 lg:grid-cols-12 items-stretch">
          {/* Expanded Professional Background card */}
          <motion.div
            className="lg:col-span-8 glass-card rounded-3xl p-10 sm:p-12 md:p-14 flex flex-col justify-between border border-white/10 shadow-2xl min-h-[480px]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <div className="flex items-center gap-3.5 mb-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-purple/10 border border-accent-purple/20 text-accent-purple">
                  <User className="h-6 w-6" />
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-white light:text-slate-950">Professional Background</h3>
              </div>
              <div className="font-sans text-slate-200 light:text-slate-700 text-base md:text-lg space-y-6 leading-relaxed">
                <p>
                  I am a passionate <strong>Founding AI &amp; Full Stack Engineer Intern</strong> and software developer focused on building intelligence-driven tools, scalable multi-agent systems, and production-ready full-stack applications.
                </p>
                <p>
                  Currently pursuing my <strong>B.E. in Computer Science Engineering with a specialization in AI/ML</strong> at <strong>Chandigarh University</strong> (2023 - 2027), I combine core software engineering patterns with cutting-edge machine learning models to solve complex real-world problems.
                </p>
                <p>
                  My expertise spans autonomous multi-agent AI systems, semantic ATS resume evaluation pipelines, computer vision classifiers, and high-performance REST microservices using Python (FastAPI/Django) and Next.js.
                </p>
              </div>
            </div>

            {/* Quick badges */}
            <div className="mt-10 flex flex-wrap gap-3.5">
              <span className="flex items-center gap-2 rounded-full bg-accent-purple/10 border border-accent-purple/25 px-4 py-2 text-xs font-semibold text-purple-300 light:text-purple-700">
                <Cpu className="h-4 w-4 text-accent-purple" />
                Agentic AI &amp; LLM Specialist
              </span>
              <span className="flex items-center gap-2 rounded-full bg-accent-blue/10 border border-accent-blue/25 px-4 py-2 text-xs font-semibold text-blue-300 light:text-blue-700">
                <Shield className="h-4 w-4 text-accent-blue" />
                Backend &amp; FastAPI Focus
              </span>
              <span className="flex items-center gap-2 rounded-full bg-accent-teal/10 border border-accent-teal/25 px-4 py-2 text-xs font-semibold text-teal-300 light:text-teal-700">
                <Target className="h-4 w-4 text-accent-teal" />
                Full-Stack Next.js Architecture
              </span>
            </div>
          </motion.div>

          {/* Visual Avatar / Info and Stats Column */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-6">
            {/* Styled Avatar Card */}
            <motion.div
              className="glass-card rounded-3xl p-8 flex items-center gap-6 border border-white/10"
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

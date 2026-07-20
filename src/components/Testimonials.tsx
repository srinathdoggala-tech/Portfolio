"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  text: string;
  name: string;
  role: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Srinath demonstrated exceptional technical capability during his intern term. He independently integrated Redis caching layers and reorganized asynchronous tasks in FastAPI, achieving a measurable 35% reduction in API response latency. He is a fast learner and a dedicated engineer.",
    name: "Dr. Aditya Sen",
    role: "Lead Machine Learning Architect",
    company: "Sreeva AI",
  },
  {
    id: 2,
    text: "Srinath has a rare combination of strong AI/ML theoretical knowledge and practical software engineering capability. His project ResearchGPT is a testament to his expertise in building multi-agent systems and LangGraph graph orchestrations.",
    name: "Prof. Rajesh Sharma",
    role: "Head of AIML Research Lab",
    company: "Chandigarh University",
  },
  {
    id: 3,
    text: "Working with Srinath during our hackathon project was a fantastic experience. He has a solid foundation in Python, TensorFlow, and REST API development. He easily translated complex machine learning model pipelines into interactive user interfaces.",
    name: "Vikram Malhotra",
    role: "Senior Full-Stack Mentor",
    company: "AI Labs India",
  },
];

export default function Testimonials() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIdx((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIdx];

  return (
    <section id="testimonials" className="relative w-full py-24 px-6 overflow-hidden">
      <div className="mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <motion.h2
            className="font-display text-3xl font-bold tracking-tight text-white light:text-slate-900 sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Endorsements & <span className="text-gradient-purple-blue">Reviews</span>
          </motion.h2>
          <motion.div
            className="mt-2 h-1 w-12 bg-accent-purple rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </div>

        {/* Carousel Container */}
        <div className="relative min-h-[300px] flex items-center justify-center">
          {/* Glass Slider Card */}
          <div className="w-full relative z-10">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={current.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className="glass-card rounded-2xl p-8 md:p-12 relative flex flex-col items-center border border-white/5"
              >
                <Quote className="h-10 w-10 text-accent-purple/35 mb-6 shrink-0" />
                
                <p className="font-sans text-center text-base md:text-lg leading-relaxed text-slate-300 light:text-slate-600 mb-8 italic">
                  &ldquo;{current.text}&rdquo;
                </p>

                <div className="text-center">
                  <h4 className="font-display font-bold text-white light:text-slate-900">{current.name}</h4>
                  <p className="font-sans text-xs text-slate-400 light:text-slate-500 mt-0.5">
                    {current.role} • <strong className="text-accent-blue">{current.company}</strong>
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="absolute inset-x-0 md:-inset-x-12 top-1/2 -translate-y-1/2 flex justify-between z-20 pointer-events-none">
            <button
              onClick={handlePrev}
              className="pointer-events-auto rounded-full bg-white/5 border border-white/10 p-2 text-slate-400 hover:text-white hover:bg-white/10 hover:scale-105 active:scale-95 transition-all light:bg-slate-100 light:border-slate-300 light:text-slate-600 light:hover:bg-slate-200"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNext}
              className="pointer-events-auto rounded-full bg-white/5 border border-white/10 p-2 text-slate-400 hover:text-white hover:bg-white/10 hover:scale-105 active:scale-95 transition-all light:bg-slate-100 light:border-slate-300 light:text-slate-600 light:hover:bg-slate-200"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Bullet Indicator dots */}
        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentIdx ? 1 : -1);
                setCurrentIdx(idx);
              }}
              className={`h-2 rounded-full transition-all ${
                currentIdx === idx ? "w-6 bg-accent-purple" : "w-2 bg-white/10 light:bg-slate-300"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

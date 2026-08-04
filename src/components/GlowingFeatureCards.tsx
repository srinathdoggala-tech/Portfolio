"use client";

import React from "react";
import { motion } from "framer-motion";
import { Monitor, Palette, Zap } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  delay: number;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  gradient,
  delay,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
      className="relative flex flex-col justify-start items-start w-full max-w-[260px] md:max-w-[300px] group mx-auto"
    >
      {/* Glow Background */}
      <div
        className="absolute inset-0 w-full h-[260px] md:h-[300px] opacity-60 rounded-[40px] pointer-events-none transition-opacity duration-300 group-hover:opacity-80"
        style={{
          background: gradient,
          filter: "blur(45px)",
        }}
      />

      {/* Foreground Card with Gradient Border */}
      <div
        className="self-stretch h-[260px] md:h-[300px] rounded-[40px] z-10 overflow-hidden border-[8px] border-transparent"
        style={{
          background: `linear-gradient(#1A1A1C, #1A1A1C) padding-box, ${gradient} border-box`,
        }}
      >
        {/* Content Inner Layout */}
        <div className="w-full h-full p-7 flex flex-col justify-between">
          <div className="text-white/90">{icon}</div>

          <div>
            <h3 className="text-white font-medium text-xl mb-3 tracking-tight">
              {title}
            </h3>
            <p className="text-gray-400 text-[14px] leading-[1.6] font-normal selection:bg-white/20">
              {description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const GlowingFeatureCardsSection: React.FC = () => {
  const cards = [
    {
      title: "Hardware",
      description:
        "My entire desktop setup is built for power. It is silent, durable, and holds my focus.",
      icon: <Monitor size={32} strokeWidth={2.5} />,
      gradient:
        "linear-gradient(137deg, #FF3D77 0%, #FFB1CE 45%, #FF9D3C 100%)",
      delay: 0.1,
    },
    {
      title: "Studio",
      description:
        "Studio is where I define every single pixel. It is the hub for each canvas I deliver.",
      icon: <Palette size={32} strokeWidth={2.5} />,
      gradient:
        "linear-gradient(137deg, #FFFFFF 0%, #7DD3FC 45%, #06B6D4 100%)",
      delay: 0.2,
    },
    {
      title: "Motion",
      description:
        "I use Motion to build lively prototypes, bridging the gap between views and code.",
      icon: <Zap size={32} strokeWidth={2.5} />,
      gradient:
        "linear-gradient(137deg, #4361EE 0%, #E0AEFF 45%, #F72585 100%)",
      delay: 0.3,
    },
  ];

  return (
    <section className="min-h-screen bg-[#0A0A0B] flex flex-col items-center justify-center p-6 md:p-12 font-sans relative z-10 py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-3 lg:gap-3 w-full max-w-[936px]">
        {cards.map((card, index) => (
          <FeatureCard key={index} {...card} />
        ))}
      </div>
    </section>
  );
};

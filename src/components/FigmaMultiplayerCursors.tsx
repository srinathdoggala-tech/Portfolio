"use client";

import { motion } from "framer-motion";
import { MousePointer2 } from "lucide-react";

interface Cursor {
  id: string;
  name: string;
  color: string;
  bg: string;
  initialX: number;
  initialY: number;
  animateX: number[];
  animateY: number[];
}

const cursors: Cursor[] = [
  {
    id: "recruiter",
    name: "Tech Recruiter",
    color: "#a855f7",
    bg: "bg-purple-500",
    initialX: 100,
    initialY: 200,
    animateX: [100, 220, 180, 100],
    animateY: [200, 140, 260, 200],
  },
  {
    id: "ai-lead",
    name: "AI Lead",
    color: "#3b82f6",
    bg: "bg-blue-500",
    initialX: 800,
    initialY: 350,
    animateX: [800, 720, 850, 800],
    animateY: [350, 420, 290, 350],
  },
  {
    id: "srinath",
    name: "Srinath (Owner)",
    color: "#10b981",
    bg: "bg-emerald-500",
    initialX: 450,
    initialY: 600,
    animateX: [450, 520, 400, 450],
    animateY: [600, 530, 620, 600],
  },
];

export default function FigmaMultiplayerCursors() {
  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden hidden lg:block">
      {cursors.map((cursor) => (
        <motion.div
          key={cursor.id}
          className="absolute flex items-center gap-1 opacity-80"
          initial={{ x: cursor.initialX, y: cursor.initialY }}
          animate={{
            x: cursor.animateX,
            y: cursor.animateY,
          }}
          transition={{
            duration: 12 + Math.random() * 6,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <MousePointer2
            className="h-4 w-4 drop-shadow-md"
            style={{ color: cursor.color, fill: cursor.color }}
          />
          <span
            className={`rounded-full ${cursor.bg} px-2 py-0.5 font-mono text-[9px] font-bold text-white shadow-lg`}
          >
            {cursor.name}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

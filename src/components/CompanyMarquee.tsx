"use client";

import React from "react";
import { PERSONAL_INFO } from "@/lib/data";

export const CompanyMarquee: React.FC = () => {
  const companies = PERSONAL_INFO.targetCompanies;
  const doubled = [...companies, ...companies];

  return (
    <div className="w-full overflow-hidden relative py-4 select-none">
      {/* Gradient Fade Edges */}
      <div className="absolute top-0 bottom-0 left-0 w-20 z-10 bg-gradient-to-r from-[#030712] to-transparent pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-20 z-10 bg-gradient-to-l from-[#030712] to-transparent pointer-events-none" />

      {/* Infinite Marquee Track */}
      <div className="animate-marquee gap-3 sm:gap-4 flex items-center">
        {doubled.map((company, idx) => (
          <div
            key={`${company}-${idx}`}
            className="px-4 py-1.5 rounded-lg bg-gray-900/60 border border-gray-800 text-xs font-mono text-gray-300 hover:text-white hover:border-blue-500/40 hover:bg-blue-950/20 transition-all flex items-center gap-2 shrink-0 cursor-default shadow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500/60" />
            <span>{company}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

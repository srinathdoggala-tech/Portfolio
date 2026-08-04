"use client";

import React, { useState, useEffect } from "react";
import { Clock, MapPin, Sparkles } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/data";

interface LiveStatusWidgetProps {
  compact?: boolean;
}

export const LiveStatusWidget: React.FC<LiveStatusWidgetProps> = ({
  compact = false,
}) => {
  const [timeString, setTimeString] = useState<string>("");
  const [isNight, setIsNight] = useState<boolean>(false);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      const formatted = new Intl.DateTimeFormat("en-US", options).format(now);
      setTimeString(formatted);

      // Extract hour in 24h format for night determination in Hyderabad
      const hydHourString = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "numeric",
        hour12: false,
      }).format(now);
      const hydHour = parseInt(hydHourString, 10);
      setIsNight(hydHour < 7 || hydHour >= 22);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  if (compact) {
    return (
      <div className="inline-flex items-center gap-2 text-xs font-mono text-gray-400 bg-gray-900/60 px-3 py-1 rounded-full border border-gray-800 backdrop-blur-md">
        <Clock className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
        <span className="text-gray-200">{timeString || "12:00:00 PM"}</span>
        <span className="text-gray-600">|</span>
        <span className="text-gray-400">Hyderabad (IST)</span>
      </div>
    );
  }

  return (
    <div className="inline-flex flex-wrap items-center gap-2.5 px-4 py-2 rounded-full glass-panel border border-amber-500/30 text-xs font-medium bg-amber-950/20 shadow-lg shadow-amber-950/30 backdrop-blur-md">
      {/* Pulse Beacon */}
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500" />
      </span>

      {/* Availability */}
      <span className="text-amber-300 font-semibold tracking-wide flex items-center gap-1">
        <Sparkles className="w-3 h-3 text-amber-400" />
        {PERSONAL_INFO.availabilityStatus}
      </span>

      <span className="text-amber-500/40">•</span>

      {/* Location */}
      <span className="text-gray-300 font-mono flex items-center gap-1">
        <MapPin className="w-3 h-3 text-amber-400" />
        Hyderabad, IN
      </span>

      <span className="text-amber-500/40">•</span>

      {/* Live Hyderabad Clock */}
      <span className="text-cyan-300 font-mono flex items-center gap-1 bg-cyan-950/50 px-2 py-0.5 rounded border border-cyan-500/30">
        <Clock className="w-3 h-3 text-cyan-400" />
        {timeString || "12:00:00 PM"} IST {isNight ? "🌙" : "☀️"}
      </span>
    </div>
  );
};

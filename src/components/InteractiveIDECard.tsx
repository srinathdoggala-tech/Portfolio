"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Play, RefreshCw, CheckCircle2, ShieldCheck, Terminal, Layers, Cpu, Database, Server } from "lucide-react";

interface CodeTab {
  id: string;
  filename: string;
  language: string;
  codeLines: { lineNum: number; content: React.ReactNode }[];
  outputLogs: string[];
}

const TABS: CodeTab[] = [
  {
    id: "swarm",
    filename: "agent_swarm.py",
    language: "PYTHON 3.12",
    codeLines: [
      {
        lineNum: 1,
        content: (
          <span>
            <span className="text-purple-400">from</span> langchain.agents <span className="text-purple-400">import</span> SwarmOrchestrator
          </span>
        ),
      },
      {
        lineNum: 2,
        content: (
          <span>
            <span className="text-purple-400">from</span> fastapi <span className="text-purple-400">import</span> FastAPI, BackgroundTasks
          </span>
        ),
      },
      {
        lineNum: 3,
        content: (
          <span>
            <span className="text-gray-500"># Instantiate 4-Agent Autonomous Swarm</span>
          </span>
        ),
      },
      {
        lineNum: 4,
        content: (
          <span>
            swarm = SwarmOrchestrator(
          </span>
        ),
      },
      {
        lineNum: 5,
        content: (
          <span className="pl-4">
            agents=[<span className="text-emerald-300">&quot;Planner&quot;</span>, <span className="text-emerald-300">&quot;Researcher&quot;</span>, <span className="text-emerald-300">&quot;Verifier&quot;</span>, <span className="text-emerald-300">&quot;Writer&quot;</span>],
          </span>
        ),
      },
      {
        lineNum: 6,
        content: (
          <span className="pl-4">
            fact_checking=<span className="text-yellow-300">True</span>, async_mode=<span className="text-yellow-300">True</span>
          </span>
        ),
      },
      {
        lineNum: 7,
        content: <span>)</span>,
      },
      {
        lineNum: 8,
        content: (
          <span>
            <span className="text-purple-400">async def</span> <span className="text-yellow-300">run_research</span>(query: <span className="text-blue-300">str</span>):
          </span>
        ),
      },
      {
        lineNum: 9,
        content: (
          <span className="pl-4">
            report = <span className="text-purple-400">await</span> swarm.execute_pipeline(query)
          </span>
        ),
      },
      {
        lineNum: 10,
        content: (
          <span className="pl-4">
            <span className="text-purple-400">return</span> &#123;<span className="text-emerald-300">&quot;status&quot;</span>: <span className="text-emerald-300">&quot;success&quot;</span>, <span className="text-emerald-300">&quot;data&quot;</span>: report&#125;
          </span>
        ),
      },
    ],
    outputLogs: [
      "⚡ [0.01s] Initializing SwarmOrchestrator with 4 LLM Agents...",
      "🔍 [0.12s] Planner Agent: Deconstructed query into 3 research goals.",
      "🌐 [0.45s] Researcher Agent: Scraped Tavily REST API (12 sources).",
      "🛡️ [0.82s] Verifier Agent: Hallucination check passed (Score: 98.4%).",
      "📝 [1.05s] Writer Agent: Synthesized LaTeX report. Execution Complete! ✔",
    ],
  },
  {
    id: "fastapi",
    filename: "fastapi_pipeline.py",
    language: "PYTHON 3.12",
    codeLines: [
      {
        lineNum: 1,
        content: (
          <span>
            <span className="text-purple-400">import</span> asyncio, redis.asyncio <span className="text-purple-400">as</span> aioredis
          </span>
        ),
      },
      {
        lineNum: 2,
        content: (
          <span>
            app = FastAPI(title=<span className="text-emerald-300">&quot;Sreeva AI Backend Service&quot;</span>)
          </span>
        ),
      },
      {
        lineNum: 3,
        content: (
          <span>
            <span className="text-purple-400">@app.middleware</span>(<span className="text-emerald-300">&quot;http&quot;</span>)
          </span>
        ),
      },
      {
        lineNum: 4,
        content: (
          <span>
            <span className="text-purple-400">async def</span> <span className="text-yellow-300">cache_layer</span>(request, call_next):
          </span>
        ),
      },
      {
        lineNum: 5,
        content: (
          <span className="pl-4">
            cached = <span className="text-purple-400">await</span> redis.get(request.url.path)
          </span>
        ),
      },
      {
        lineNum: 6,
        content: (
          <span className="pl-4">
            <span className="text-purple-400">if</span> cached: <span className="text-purple-400">return</span> JSONResponse(cached)
          </span>
        ),
      },
      {
        lineNum: 7,
        content: (
          <span className="pl-4">
            response = <span className="text-purple-400">await</span> call_next(request)
          </span>
        ),
      },
      {
        lineNum: 8,
        content: (
          <span className="pl-4">
            <span className="text-gray-500"># 35% latency optimization achieved</span>
          </span>
        ),
      },
      {
        lineNum: 9,
        content: (
          <span className="pl-4 text-emerald-400">
            <span className="text-purple-400">await</span> redis.setex(request.url.path, 3600, response.body)
          </span>
        ),
      },
      {
        lineNum: 10,
        content: (
          <span className="pl-4">
            <span className="text-purple-400">return</span> response
          </span>
        ),
      },
    ],
    outputLogs: [
      "🚀 [FastAPI] Middleware loaded: Redis Async In-Memory Cache.",
      "⚡ [Benchmark] Cache Hit: Latency reduced from 180ms → 115ms (-35%).",
      "💾 [PostgreSQL] Connection pool healthy (Max Connections: 50).",
      "✅ [Status] 200 OK — Async pipeline active.",
    ],
  },
  {
    id: "telemetry",
    filename: "system_telemetry.json",
    language: "JSON",
    codeLines: [
      {
        lineNum: 1,
        content: <span>&#123;</span>,
      },
      {
        lineNum: 2,
        content: (
          <span className="pl-4">
            <span className="text-cyan-400">&quot;engineer&quot;</span>: <span className="text-emerald-300">&quot;Srinath Doggala&quot;</span>,
          </span>
        ),
      },
      {
        lineNum: 3,
        content: (
          <span className="pl-4">
            <span className="text-cyan-400">&quot;current_company&quot;</span>: <span className="text-emerald-300">&quot;Sreeva AI (Founding Engineer Intern)&quot;</span>,
          </span>
        ),
      },
      {
        lineNum: 4,
        content: (
          <span className="pl-4">
            <span className="text-cyan-400">&quot;key_metrics&quot;</span>: &#123;
          </span>
        ),
      },
      {
        lineNum: 5,
        content: (
          <span className="pl-8">
            <span className="text-cyan-400">&quot;api_latency_speedup&quot;</span>: <span className="text-yellow-300">&quot;35%&quot;</span>,
          </span>
        ),
      },
      {
        lineNum: 6,
        content: (
          <span className="pl-8">
            <span className="text-cyan-400">&quot;resumes_tested&quot;</span>: <span className="text-yellow-300">500</span>,
          </span>
        ),
      },
      {
        lineNum: 7,
        content: (
          <span className="pl-8">
            <span className="text-cyan-400">&quot;intermediate_gpa&quot;</span>: <span className="text-yellow-300">&quot;97.5%&quot;</span>
          </span>
        ),
      },
      {
        lineNum: 8,
        content: <span className="pl-4">&#125;,</span>,
      },
      {
        lineNum: 9,
        content: (
          <span className="pl-4">
            <span className="text-cyan-400">&quot;status&quot;</span>: <span className="text-emerald-300">&quot;READY_TO_HIRE&quot;</span>
          </span>
        ),
      },
      {
        lineNum: 10,
        content: <span>&#125;</span>,
      },
    ],
    outputLogs: [
      "📊 [Telemetry Audit] Systems Check Complete.",
      "🟢 All 4 Projects Deployed & Verified.",
      "🟢 Lighthouse Score: 98/100.",
      "🟢 Ready for High-Scale Engineering Challenges.",
    ],
  },
];

export const InteractiveIDECard: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<string>("swarm");
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [showConsole, setShowConsole] = useState<boolean>(false);

  const activeTab = TABS.find((t) => t.id === activeTabId) || TABS[0];

  const handleRunCode = () => {
    setIsRunning(true);
    setShowConsole(true);
    setTimeout(() => {
      setIsRunning(false);
    }, 900);
  };

  return (
    <div className="relative w-full max-w-lg select-none">
      {/* Background Outer Glow Ring */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-500 via-yellow-500 to-cyan-500 rounded-3xl blur-xl opacity-35 animate-pulse-glow" />

      {/* Floating Badges levitation around card */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-4 -left-4 z-20 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-500/40 text-[11px] font-mono font-bold text-blue-300 shadow-xl backdrop-blur-md flex items-center gap-1.5"
      >
        <Cpu className="w-3.5 h-3.5 text-blue-400" />
        Python 3.12
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-4 -right-4 z-20 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-[11px] font-mono font-bold text-emerald-300 shadow-xl backdrop-blur-md flex items-center gap-1.5"
      >
        <Server className="w-3.5 h-3.5 text-emerald-400" />
        FastAPI
      </motion.div>

      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-4 -left-4 z-20 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/40 text-[11px] font-mono font-bold text-purple-300 shadow-xl backdrop-blur-md flex items-center gap-1.5"
      >
        <Layers className="w-3.5 h-3.5 text-purple-400" />
        LangChain Swarm
      </motion.div>

      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-4 -right-4 z-20 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-[11px] font-mono font-bold text-cyan-300 shadow-xl backdrop-blur-md flex items-center gap-1.5"
      >
        <Database className="w-3.5 h-3.5 text-cyan-400" />
        PostgreSQL &amp; Redis
      </motion.div>

      {/* Main Glass IDE Terminal Window */}
      <div className="relative glass-panel rounded-2xl border border-white/15 overflow-hidden shadow-2xl bg-gray-950/90 backdrop-blur-xl">
        {/* Mac OS Title Bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-gray-900/90 border-b border-gray-800">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
          </div>

          {/* IDE Tabs */}
          <div className="flex items-center gap-1 bg-gray-950/80 p-0.5 rounded-lg border border-gray-800">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTabId(tab.id);
                  setShowConsole(false);
                }}
                className={`px-2.5 py-1 text-[11px] font-mono rounded-md transition-all flex items-center gap-1.5 ${
                  activeTabId === tab.id
                    ? "bg-blue-600/30 text-white font-bold border border-blue-500/40"
                    : "text-gray-400 hover:text-gray-200 hover:bg-gray-800/50"
                }`}
              >
                <Code2 className="w-3 h-3 text-blue-400" />
                {tab.filename}
              </button>
            ))}
          </div>

          <div className="hidden sm:block text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-300">
            {activeTab.language}
          </div>
        </div>

        {/* Code Content View */}
        <div className="p-4 font-mono text-xs leading-relaxed space-y-1 overflow-x-auto min-h-[220px]">
          {activeTab.codeLines.map((line) => (
            <div key={line.lineNum} className="flex items-start gap-3 hover:bg-white/5 py-0.5 px-1 rounded transition-colors">
              <span className="text-gray-600 w-5 select-none text-right shrink-0">{line.lineNum}</span>
              <div className="text-gray-200">{line.content}</div>
            </div>
          ))}
        </div>

        {/* Execution Output Console Drawer */}
        <AnimatePresence>
          {showConsole && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-black/90 border-t border-emerald-500/30 p-3 font-mono text-[11px] text-emerald-400 space-y-1 overflow-hidden"
            >
              <div className="flex items-center justify-between text-gray-400 pb-1 border-b border-gray-800 text-[10px] uppercase tracking-wider font-bold">
                <span className="flex items-center gap-1">
                  <Terminal className="w-3 h-3 text-emerald-400" /> Output Console
                </span>
                {isRunning ? (
                  <span className="text-yellow-400 animate-pulse flex items-center gap-1">
                    <RefreshCw className="w-3 h-3 animate-spin" /> Executing...
                  </span>
                ) : (
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Process Finished
                  </span>
                )}
              </div>
              <div className="space-y-1 pt-1 max-h-32 overflow-y-auto">
                {activeTab.outputLogs.map((log, idx) => (
                  <p key={idx} className="leading-snug">
                    {log}
                  </p>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Action Bottom Bar */}
        <div className="px-4 py-2.5 bg-gray-900/80 border-t border-gray-800 flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-1.5 text-gray-400 text-[11px]">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Telemetry: 100% Operational</span>
          </div>

          <button
            onClick={handleRunCode}
            disabled={isRunning}
            className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-gray-950 font-bold text-xs flex items-center gap-1.5 transition shadow-lg shadow-amber-500/20 active:scale-95 disabled:opacity-50"
          >
            {isRunning ? (
              <>
                <RefreshCw className="w-3.5 h-3.5 animate-spin" /> Running...
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-current" /> Run Code
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

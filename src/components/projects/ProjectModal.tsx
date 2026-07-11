"use client";

import React, { useState, useEffect } from "react";
import { Project } from "@/constants/projects";
import { cn } from "@/utils/cn";
import { GithubIcon } from "@/components/common/Icons";
import { X, ArrowUpRight, CheckCircle2, AlertCircle, Network, Code2, LineChart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [previewMode, setPreviewMode] = useState<"console" | "live">("console");

  // Prevent background scroll when modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setPreviewMode("console");
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, project]);

  if (!project) return null;

  // React-rendered console dashboard that serves as a high-fidelity "Screenshot / System Console" preview
  const renderScreenshotShowcase = (id: string) => {
    switch (id) {
      case "transitos":
        return (
          <div className="relative w-full aspect-[16/9] bg-black rounded-xl border border-white/[0.06] overflow-hidden p-6 flex flex-col justify-between font-mono text-[10px] text-[#A1A1AA] shadow-inner">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 bg-red-500/80 rounded-full" />
                <div className="w-2 h-2 bg-yellow-500/80 rounded-full" />
                <div className="w-2 h-2 bg-green-500/80 rounded-full" />
                <span className="text-white/30 text-[9px] ml-2">TRANSITOS_PAYMENT_RECON</span>
              </div>
              <span className="text-emerald-400 animate-pulse">BAILEYS_SOCKET: PAIRED</span>
            </div>

            <div className="grid grid-cols-2 gap-4 items-stretch my-auto">
              {/* Left: Fuzzy Match Log */}
              <div className="space-y-1.5 p-3 bg-white/[0.01] border border-white/[0.06] rounded-lg">
                <div className="text-[9px] text-white/30 uppercase mb-2">PhonePe CSV Fuzzy Matcher</div>
                <div className="flex justify-between"><span className="text-white/50">CSV Rows Ingested</span><span className="text-emerald-400 font-bold">82</span></div>
                <div className="flex justify-between"><span className="text-white/50">Auto-Matched (≥60%)</span><span className="text-emerald-400 font-bold">76</span></div>
                <div className="flex justify-between"><span className="text-white/50">Unresolved Queue</span><span className="text-amber-400 font-bold">6</span></div>
                <div className="border-t border-white/[0.04] pt-1 flex justify-between">
                  <span className="text-white/50">Match Accuracy</span>
                  <span className="text-[#7C86FF] font-bold">98.4%</span>
                </div>
                <div className="text-[7.5px] text-white/30 border-t border-white/[0.04] pt-1">
                  algo: fastest-levenshtein@1.0.16
                </div>
              </div>

              {/* Right: cron scheduler + PDF dispatch */}
              <div className="space-y-1.5 p-3 bg-white/[0.01] border border-white/[0.06] rounded-lg">
                <div className="text-[9px] text-white/30 uppercase mb-2">Automation Pipeline Status</div>
                <div className="flex justify-between"><span className="text-white/50">Reminder 1 (Day 1)</span><span className="text-emerald-400 font-bold">SENT</span></div>
                <div className="flex justify-between"><span className="text-white/50">Reminder 2 (Day 5)</span><span className="text-emerald-400 font-bold">SENT</span></div>
                <div className="flex justify-between"><span className="text-white/50">Final Warning</span><span className="text-amber-400 font-bold">QUEUED</span></div>
                <div className="border-t border-white/[0.04] pt-1 flex justify-between">
                  <span className="text-white/50">PDF Receipts Dispatched</span>
                  <span className="text-[#7C86FF] font-bold">76</span>
                </div>
                <div className="text-[7.5px] text-emerald-400/70 border-t border-white/[0.04] pt-1">
                  [WA Socket] session active · pdfkit@0.14.0
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-white/[0.06] pt-3 text-[9px] text-white/30">
              <span>STACK: Next.js · Express · PostgreSQL · Prisma</span>
              <span className="text-[#7C86FF]">MONOREPO WORKSPACES</span>
            </div>
          </div>
        );

      case "globalshala-analytics":
        return (
          <div className="relative w-full aspect-[16/9] bg-black rounded-xl border border-white/[0.06] overflow-hidden p-6 flex flex-col justify-between font-mono text-[10px] text-[#A1A1AA] shadow-inner">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 bg-red-500/80 rounded-full" />
                <div className="w-2 h-2 bg-yellow-500/80 rounded-full" />
                <div className="w-2 h-2 bg-green-500/80 rounded-full" />
                <span className="text-white/30 text-[9px] ml-2">GLOBALSHALA_SUPERHEROU_ANALYTICS</span>
              </div>
              <span className="text-amber-500">POWERBI_LIVE</span>
            </div>

            <div className="grid grid-cols-2 gap-4 items-stretch my-auto">
              <div className="space-y-2 p-3 bg-white/[0.01] border border-white/[0.06] rounded-lg">
                <div className="text-[9px] text-white/30 uppercase">Demographic Spend Optimizer</div>
                <div className="space-y-1">
                  <div className="flex justify-between"><span>Age 18-24 CTR:</span><span className="text-emerald-500 font-bold">12.95% (High)</span></div>
                  <div className="flex justify-between"><span>Age 25-34 CTR:</span><span className="text-red-400 font-bold">4.80% (Low)</span></div>
                  <div className="flex justify-between"><span>Age 13-17 CTR:</span><span className="text-red-400 font-bold">3.10% (Low)</span></div>
                  <div className="flex justify-between"><span>Spend optimization:</span><span className="text-emerald-400 font-bold">Reallocated</span></div>
                </div>
              </div>

              <div className="space-y-2 p-3 bg-white/[0.01] border border-white/[0.06] rounded-lg flex flex-col justify-center">
                <div className="text-[9px] text-white/30 uppercase mb-2">Campaign Yield Metrics</div>
                <div className="space-y-1.5 text-[8.5px]">
                  <div className="flex justify-between"><span>Wasted Spend Halted:</span><span className="text-emerald-400 font-bold">₹5,900</span></div>
                  <div className="flex justify-between"><span>Target CPC:</span><span className="text-emerald-400 font-bold">₹5.68</span></div>
                  <div className="flex justify-between"><span>Initial CPC:</span><span className="text-red-400 font-bold">₹10.18</span></div>
                  <div className="flex justify-between"><span>CTR Growth:</span><span className="text-emerald-400 font-bold">+168%</span></div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-white/[0.06] pt-3 text-[9px] text-white/30">
              <span>DASHBOARD: POWER BI LIVE DESKTOP</span>
              <span>SEGMENTS: AGE / REGIONAL MAPS</span>
            </div>
          </div>
        );

      case "multimodal-emotion-recognition":
        return (
          <div className="relative w-full aspect-[16/9] bg-black rounded-xl border border-white/[0.06] overflow-hidden p-6 flex flex-col justify-between font-mono text-[10px] text-[#A1A1AA] shadow-inner">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 bg-red-500/80 rounded-full" />
                <div className="w-2 h-2 bg-yellow-500/80 rounded-full" />
                <div className="w-2 h-2 bg-green-500/80 rounded-full" />
                <span className="text-white/30 text-[9px] ml-2">IIITH_RAP_FUSION_LIVE_SESSION</span>
              </div>
              <span className="text-[#7C86FF] animate-pulse">EVALUATING</span>
            </div>

            <div className="grid grid-cols-3 gap-3 items-center my-auto">
              <div className="flex flex-col items-center justify-center p-3 bg-white/[0.01] border border-white/[0.06] rounded-lg text-center gap-2">
                <Code2 className="w-5 h-5 text-[#7C86FF]" />
                <div>
                  <div className="text-[8px] text-white/30">TEXT REPRESENTATION</div>
                  <span className="text-[10px] text-[#F5F5F5] font-bold">BERT_BASE</span>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center p-3 bg-white/[0.01] border border-white/[0.06] rounded-lg text-center gap-2">
                <Network className="w-5 h-5 text-[#7C86FF]/80 animate-pulse" />
                <div>
                  <div className="text-[8px] text-white/30">ALIGNMENT RATIO</div>
                  <span className="text-[10px] text-[#F5F5F5] font-bold">CROSS_ATTN</span>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center p-3 bg-white/[0.01] border border-white/[0.06] rounded-lg text-center gap-2">
                <LineChart className="w-5 h-5 text-[#7C86FF]" />
                <div>
                  <div className="text-[8px] text-white/30">AUDIO PIPELINE</div>
                  <span className="text-[10px] text-[#F5F5F5] font-bold">LIBROSA_DSP</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-white/[0.06] pt-3 text-[9px] text-white/30">
              <span>AUDIO: ACTIVE (16kHz MONO)</span>
              <span>VAL_LOSS: 0.342</span>
            </div>
          </div>
        );

      case "moodmate":
        return (
          <div className="relative w-full aspect-[16/9] bg-black rounded-xl border border-white/[0.06] overflow-hidden p-6 flex flex-col justify-between font-mono text-[10px] text-[#A1A1AA] shadow-inner">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 bg-red-500/80 rounded-full" />
                <div className="w-2 h-2 bg-yellow-500/80 rounded-full" />
                <div className="w-2 h-2 bg-green-500/80 rounded-full" />
                <span className="text-white/30 text-[9px] ml-2">SPRING_BOOT_SESSION_STABLE</span>
              </div>
              <span className="text-[#7C86FF] animate-pulse">DB_ACTIVE</span>
            </div>

            <div className="grid grid-cols-2 gap-4 items-stretch my-auto">
              <div className="space-y-2 p-3 bg-white/[0.01] border border-white/[0.06] rounded-lg">
                <div className="text-[9px] text-white/30 uppercase">SPRING CONTROLLER LOGS</div>
                <div className="space-y-1">
                  <div className="flex justify-between"><span>GET /api/journals:</span><span className="text-emerald-500 font-bold">200 OK</span></div>
                  <div className="flex justify-between"><span>POST /api/journals:</span><span className="text-emerald-500 font-bold">201 CREATED</span></div>
                  <div className="flex justify-between"><span>ACTIVE CONTROLLERS:</span><span className="text-[#F5F5F5] font-bold">Auth, Journal</span></div>
                  <div className="flex justify-between"><span>SECURITY SYSTEM:</span><span className="text-[#7C86FF] font-bold">Spring JWT</span></div>
                </div>
              </div>

              <div className="space-y-2 p-3 bg-white/[0.01] border border-white/[0.06] rounded-lg">
                <div className="text-[9px] text-white/30 uppercase">MONGODB JOURNAL DOCUMENT</div>
                <pre className="text-[8px] leading-tight text-[#7C86FF] overflow-x-auto whitespace-pre-wrap select-all">
{`{
  "_id": "60d5ec4f1f2c2c001f3f6c8d",
  "userId": "usr_9021",
  "date": "2026-05-26",
  "mood": "FOCUSED",
  "tags": ["coding", "placement"]
}`}
                </pre>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-white/[0.06] pt-3 text-[9px] text-white/30">
              <span>SYSTEM: SECURE JWT</span>
              <span>MONGO_URI: LOCAL_REPLSET</span>
            </div>
          </div>
        );

      case "ev-charge-demand":
        return (
          <div className="relative w-full aspect-[16/9] bg-black rounded-xl border border-white/[0.06] overflow-hidden p-6 flex flex-col justify-between font-mono text-[10px] text-[#A1A1AA] shadow-inner">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 bg-red-500/80 rounded-full" />
                <div className="w-2 h-2 bg-yellow-500/80 rounded-full" />
                <div className="w-2 h-2 bg-green-500/80 rounded-full" />
                <span className="text-white/30 text-[9px] ml-2">EDUNET_AICTE_ML_PIPELINE</span>
              </div>
              <span className="text-[#7C86FF]">FORECASTING</span>
            </div>

            <div className="flex flex-col gap-2 p-3 bg-white/[0.01] border border-white/[0.06] rounded-lg justify-center h-28 my-auto font-mono">
              <div className="text-[8px] text-white/30 uppercase mb-1">STATION LOAD DEMAND FORECAST (24-HOUR CYCLES)</div>
              <div className="flex items-end gap-1 h-16">
                {Array.from({ length: 24 }).map((_, i) => {
                  const peakFactor = i >= 16 && i <= 21 ? 1.6 : (i >= 8 && i <= 12 ? 1.2 : 0.5);
                  const height = Math.abs(Math.sin(i * 0.2)) * 60 * peakFactor;
                  const isPeak = i === 18 || i === 19;
                  return (
                    <div key={i} className="flex-grow flex flex-col items-center gap-0.5">
                      <div 
                        className={`w-full rounded-t-[1px] ${isPeak ? "bg-[#7C86FF]" : "bg-white/20"}`}
                        style={{ height: `${Math.max(10, Math.min(100, height))}%` }}
                      />
                      <span className="text-[5px] text-white/20">{i}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-white/[0.06] pt-3 text-[9px] text-white/30">
              <span>PIPELINE: SCIKIT-LEARN</span>
              <span>GRID_CAPACITY: LOAD_BALANCED</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="relative w-full aspect-[16/9] bg-black rounded-xl border border-white/[0.06] overflow-hidden p-6 flex flex-col justify-center items-center text-center font-mono text-[10px] text-white/30">
            <Network className="w-8 h-8 text-[#7C86FF]/30 animate-pulse mb-3" />
            <span>DIAGNOSTIC VISUAL CONSOLE PANEL</span>
          </div>
        );
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop blur overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Content Wrapper */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ type: "spring", duration: 0.55, bounce: 0.12 }}
            className="w-full max-w-3xl h-[85vh] max-h-[800px] bg-[#121218] border border-white/[0.06] rounded-2xl z-10 relative shadow-3xl text-left font-sans flex flex-col overflow-hidden"
            role="dialog"
            aria-modal="true"
          >
            {/* Sticky Header Area */}
            <div className="p-6 md:p-8 border-b border-white/[0.06] shrink-0 relative pr-14">
              <span className="text-[10px] font-mono tracking-widest text-[#7C86FF] uppercase px-2.5 py-0.5 rounded-full bg-[#7C86FF]/10 font-bold mb-2.5 inline-block">
                {project.category}
              </span>
              
              <h2 className="text-xl md:text-2xl font-bold text-[#F5F5F5] tracking-tight mb-2">
                {project.title}
              </h2>
              
              <p className="text-xs text-[#A1A1AA] leading-relaxed max-w-2xl">
                {project.description}
              </p>

              {/* Close trigger button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 rounded-full border border-white/[0.06] hover:bg-white/5 text-[#A1A1AA] hover:text-[#F5F5F5] transition-colors cursor-pointer"
                aria-label="Close case study"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Scrollable Content Body */}
            <div className="flex-grow overflow-y-auto p-6 md:p-8 space-y-8 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
              {/* Metric Callouts */}
              {project.metrics && project.metrics.length > 0 && (
                <div className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-black/40 border border-white/[0.06]">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="flex flex-col">
                      <span className="text-[9px] font-mono text-[#A1A1AA] uppercase tracking-wider mb-0.5">{metric.label}</span>
                      <span className="text-base font-bold text-[#F5F5F5] tracking-tight">{metric.value}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Core Narrative */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase text-[#F5F5F5] tracking-wider font-bold">01 / The Problem</h4>
                  <p className="text-[11px] text-[#A1A1AA] leading-relaxed">{project.problem}</p>
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase text-[#F5F5F5] tracking-wider font-bold">02 / The Approach</h4>
                  <p className="text-[11px] text-[#A1A1AA] leading-relaxed">{project.approach}</p>
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase text-[#F5F5F5] tracking-wider font-bold">03 / The Outcome</h4>
                  <p className="text-[11px] text-[#A1A1AA] leading-relaxed">{project.outcome}</p>
                </div>
              </div>

              {/* Graphical Screenshot Showcase Area */}
              <div>
                <div className="flex items-center justify-between mb-3 border-b border-white/[0.04] pb-2">
                  <h4 className="text-xs font-mono uppercase text-[#A1A1AA] tracking-wider font-semibold">
                    System Preview
                  </h4>
                  {project.links.live && (
                    <div className="flex items-center gap-1.5 bg-white/[0.02] p-0.5 rounded border border-white/[0.06]">
                      <button 
                        onClick={() => setPreviewMode("console")} 
                        className={cn("px-2.5 py-1 text-[9px] font-mono rounded transition-all cursor-pointer", previewMode === "console" ? "bg-[#7C86FF] text-[#0B0B0F] font-bold" : "text-[#A1A1AA] hover:text-[#F5F5F5]")}
                      >
                        Console
                      </button>
                      <button 
                        onClick={() => setPreviewMode("live")} 
                        className={cn("px-2.5 py-1 text-[9px] font-mono rounded transition-all cursor-pointer", previewMode === "live" ? "bg-[#7C86FF] text-[#0B0B0F] font-bold" : "text-[#A1A1AA] hover:text-[#F5F5F5]")}
                      >
                        Live Frame
                      </button>
                    </div>
                  )}
                </div>
                
                {previewMode === "live" && project.links.live ? (
                  <div className="relative w-full aspect-[16/9] bg-black rounded-xl border border-white/[0.06] overflow-hidden flex flex-col shadow-inner">
                    {/* Mock Browser Header */}
                    <div className="flex items-center justify-between bg-neutral-900 border-b border-white/[0.06] px-4 py-2 text-[10px] text-[#A1A1AA] font-mono select-none">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 bg-red-500/80 rounded-full" />
                        <div className="w-2.5 h-2.5 bg-yellow-500/80 rounded-full" />
                        <div className="w-2.5 h-2.5 bg-green-500/80 rounded-full" />
                      </div>
                      <div className="bg-black/40 border border-white/[0.04] px-4 py-0.5 rounded text-[8px] text-[#7C86FF] w-[60%] text-center truncate">
                        {project.links.live}
                      </div>
                      <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-0.5 text-[9px] text-[#7C86FF] font-semibold">
                        <span>Open Link</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    </div>
                    {/* Embedded Frame */}
                    <div className="flex-grow bg-[#1a1a24] relative">
                      <iframe 
                        src={project.links.live} 
                        className="w-full h-full border-none" 
                        title={project.title}
                        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                      />
                    </div>
                  </div>
                ) : (
                  renderScreenshotShowcase(project.id)
                )}
              </div>

              {/* Technical Architecture Pipeline */}
              {project.architecturePipeline && (
                <div>
                  <h4 className="text-xs font-mono uppercase text-[#A1A1AA] tracking-wider mb-3.5 font-semibold">Technical Architecture Flow</h4>
                  <div className="flex flex-col md:flex-row items-center justify-between gap-3 p-4 rounded-xl bg-black/40 border border-white/[0.06] font-mono text-[9px]">
                    {project.architecturePipeline.map((node, i) => (
                      <React.Fragment key={i}>
                        <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] text-center min-w-[130px] shadow-md z-10">
                          <span className="text-[#F5F5F5] font-bold">{node}</span>
                        </div>
                        {i < project.architecturePipeline.length - 1 && (
                          <span className="text-[#7C86FF] font-bold text-base rotate-90 md:rotate-0 my-1 md:my-0 shrink-0">→</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              )}

              {/* Features Grid Checkbox items */}
              {project.featuresGrid && (
                <div>
                  <h4 className="text-xs font-mono uppercase text-[#A1A1AA] tracking-wider mb-3 font-semibold">Implemented Core Integrations</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {project.featuresGrid.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-2.5 rounded-lg bg-white/[0.01] border border-white/[0.06] text-xs text-[#A1A1AA]">
                        <CheckCircle2 className="w-4 h-4 text-[#7C86FF] shrink-0" />
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Challenges & Engineering Decisions (Tutorial vs Real Developer hook) */}
              {project.challenges && project.challenges.length > 0 && (
                <div>
                  <h4 className="text-xs font-mono uppercase text-[#A1A1AA] tracking-wider mb-3.5 font-semibold">Challenges & Engineering Decisions</h4>
                  <div className="space-y-4">
                    {project.challenges.map((item, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-white/[0.01] border border-white/[0.06] space-y-2">
                        <div className="flex items-start gap-2.5">
                          <AlertCircle className="w-4 h-4 text-[#7C86FF] shrink-0 mt-0.5" />
                          <div className="text-xs font-bold text-[#F5F5F5]">
                            <span className="text-[#7C86FF] font-mono text-[10px] mr-1">CHALLENGE {idx + 1}:</span>
                            {item.challenge}
                          </div>
                        </div>
                        <div className="pl-6.5 text-[11px] text-[#A1A1AA] leading-relaxed">
                          <span className="text-[#7C86FF] font-mono font-bold text-[9px] block mb-0.5">ENGINEERED SOLUTION:</span>
                          {item.solution}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Learnings */}
              {project.learnings && (
                <div>
                  <h4 className="text-xs font-mono uppercase text-[#A1A1AA] tracking-wider mb-2 font-semibold">Technical Learnings & Growth</h4>
                  <ul className="space-y-2">
                    {project.learnings.map((learning, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-[#A1A1AA] leading-relaxed">
                        <span className="w-1.5 h-1.5 bg-[#7C86FF] rounded-full mt-1.5 shrink-0" />
                        <span>{learning}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Sticky Footer Buttons */}
            <div className="flex items-center justify-end gap-3 p-4 md:p-6 border-t border-white/[0.06] bg-[#0E0E14] shrink-0">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border border-white/[0.06] hover:bg-white/5 text-[#F5F5F5] transition-colors cursor-pointer"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View Repository</span>
                </a>
              )}
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-[#7C86FF] hover:bg-[#7C86FF]/95 text-[#0B0B0F] transition-colors cursor-pointer"
                >
                  <span>Launch Live System</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

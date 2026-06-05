"use client";

import React, { useEffect } from "react";
import { Project } from "@/constants/projects";
import { GithubIcon } from "@/components/common/Icons";
import { X, ArrowUpRight, CheckCircle2, AlertCircle, Network, Code2, LineChart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  // Prevent background scroll when modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!project) return null;

  // React-rendered console dashboard that serves as a high-fidelity "Screenshot / System Console" preview
  const renderScreenshotShowcase = (id: string) => {
    switch (id) {
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
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
            className="w-full max-w-3xl bg-[#121218] border border-white/[0.06] rounded-2xl p-6 md:p-10 z-10 my-8 relative shadow-3xl text-left font-sans"
            role="dialog"
            aria-modal="true"
          >
            {/* Close trigger button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full border border-white/[0.06] hover:bg-white/5 text-[#A1A1AA] hover:text-[#F5F5F5] transition-colors cursor-pointer"
              aria-label="Close case study"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header Area */}
            <div className="mb-8 pr-8">
              <span className="text-[10px] font-mono tracking-widest text-[#7C86FF] uppercase px-2.5 py-0.5 rounded-full bg-[#7C86FF]/10 font-bold mb-3 inline-block">
                {project.category}
              </span>
              
              <h2 className="text-xl md:text-2xl font-bold text-[#F5F5F5] tracking-tight mb-2.5">
                {project.title}
              </h2>
              
              <p className="text-xs text-[#A1A1AA] leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Content Details: Problem -> Approach -> Outcome (Recruiter High Signal) */}
            <div className="space-y-8">
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
                <h4 className="text-xs font-mono uppercase text-[#A1A1AA] tracking-wider mb-3 font-semibold">System Dashboard Console</h4>
                {renderScreenshotShowcase(project.id)}
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

            {/* Footer Buttons */}
            <div className="flex items-center justify-end gap-3 mt-10 pt-6 border-t border-white/[0.06]">
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

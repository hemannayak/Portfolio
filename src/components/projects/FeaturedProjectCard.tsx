"use client";

import React from "react";
import { Project } from "@/constants/projects";
import { GlassCard } from "@/components/common/GlassCard";
import { GithubIcon } from "@/components/common/Icons";
import { ArrowUpRight, Cpu, Network, CheckCircle2 } from "lucide-react";

interface FeaturedProjectCardProps {
  project: Project;
  onOpenDetails?: (project: Project) => void;
}

export function FeaturedProjectCard({ project, onOpenDetails }: FeaturedProjectCardProps) {
  // Purely React-rendered mock UI Dashboards representing the visual preview of the project
  const renderDashboardPreview = (id: string) => {
    switch (id) {
      case "transitos":
        return (
          <div className="relative w-full h-[200px] bg-black/60 rounded-xl border border-white/[0.06] overflow-hidden p-4 flex flex-col justify-between font-mono text-[9px] text-[#A1A1AA]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:10px_10px] pointer-events-none" />
            
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-2.5 z-10">
              <div className="flex items-center gap-1.5 text-[#7C86FF]">
                <div className="w-1.5 h-1.5 bg-[#7C86FF] rounded-full animate-pulse" />
                <span>TRANSITOS_RECON_ENGINE</span>
              </div>
              <span className="text-white/30 text-[8px]">BAILEYS_ACTIVE</span>
            </div>

            {/* Reconciliation fuzzy matcher log */}
            <div className="flex flex-col gap-1.5 my-2 z-10 px-1 justify-center h-20 bg-white/[0.01] border border-white/[0.04] rounded p-2 text-[7px]">
              <div className="flex items-center justify-between text-white/40">
                <span>CSV INGEST: PhonePe_Merchant_June.csv</span>
                <span className="text-emerald-400 font-bold">PARSED (82 Rows)</span>
              </div>
              <div className="flex items-center justify-between border-t border-white/[0.04] pt-1">
                <span>Sender: "Hemanth N" | Amt: ₹3,200</span>
                <span className="text-emerald-400 font-bold">94% MATCH (Hemanth Nayak)</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Sender: "Ramesh K" | Amt: ₹3,200</span>
                <span className="text-amber-400 font-bold">54% MATCH (Unresolved)</span>
              </div>
              <div className="flex items-center gap-1.5 text-[6.5px] text-[#7C86FF]/80">
                <span>[WA Socket] paired session active</span>
                <span>• receipts auto-queued</span>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-white/[0.06] pt-2.5 text-[8px] text-white/30 z-10">
              <span>FUZZY RESOLVED: 98.4%</span>
              <span className="text-emerald-400 font-semibold">AUTO-DISPATCH RECEIPT</span>
            </div>
          </div>
        );

      case "globalshala-analytics":
        return (
          <div className="relative w-full h-[200px] bg-black/60 rounded-xl border border-white/[0.06] overflow-hidden p-4 flex flex-col justify-between font-mono text-[9px] text-[#A1A1AA]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:12px_12px] pointer-events-none" />
            
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-2.5 z-10">
              <div className="flex items-center gap-1.5 text-amber-400">
                <div className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
                <span>GLOBALSHALA_AD_ANALYTICS</span>
              </div>
              <span className="text-white/30 text-[8px]">POWERBI_CTR_MODEL</span>
            </div>

            {/* Demographics bar preview */}
            <div className="space-y-1.5 my-2.5 z-10 text-[7px] flex-grow flex flex-col justify-center">
              {[
                { cohort: "Age 18-24 (Optimized)", val: "CTR 16.2% | CPC ₹5.68", width: "w-full bg-amber-400" },
                { cohort: "Age 25-34 (Halted Budget)", val: "CTR 4.8% | CPC ₹12.18", width: "w-[30%] bg-white/20" },
                { cohort: "Age 13-17 (Halted Budget)", val: "CTR 3.1% | CPC ₹15.42", width: "w-[19%] bg-white/10" }
              ].map((bar, i) => (
                <div key={i} className="flex flex-col gap-0.5">
                  <div className="flex justify-between text-white/50">
                    <span>{bar.cohort}</span>
                    <span className={i === 0 ? "text-emerald-400 font-bold" : "text-red-400"}>{bar.val}</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/[0.04] rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${bar.width}`} />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between border-t border-white/[0.06] pt-2.5 text-[8px] text-white/30 z-10">
              <span>BUDGET LEAK HALTED: ₹5.9K</span>
              <span className="text-amber-400 font-bold">CPC REDUCED BY 63%</span>
            </div>
          </div>
        );

      case "viala":
        return (
          <div className="relative w-full h-[200px] bg-black/60 rounded-xl border border-white/[0.06] overflow-hidden p-4 flex flex-col justify-between font-mono text-[9px] text-[#A1A1AA]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:12px_12px] pointer-events-none" />
            
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-2.5 z-10">
              <div className="flex items-center gap-1.5 text-[#2DD4BF]">
                <div className="w-1.5 h-1.5 bg-[#2DD4BF] rounded-full animate-pulse" />
                <span>VIALA_SHELF_HEATMAP (FEFO)</span>
              </div>
              <span className="text-white/30 text-[8px]">ROW_4_GRID</span>
            </div>

            {/* Expire colors grid visual */}
            <div className="grid grid-cols-6 gap-2 my-2 z-10 px-1">
              {[
                { label: "BLK", color: "bg-neutral-800 text-neutral-400" },
                { label: "RED", color: "bg-red-950 text-red-400 border border-red-800" },
                { label: "YLW", color: "bg-amber-950 text-amber-400 border border-amber-800" },
                { label: "GRN", color: "bg-emerald-950 text-emerald-400 border border-emerald-800" },
                { label: "GRN", color: "bg-emerald-950 text-emerald-400 border border-emerald-800" },
                { label: "EMR", color: "bg-teal-950 text-teal-400 border border-teal-800" }
              ].map((slot, i) => (
                <div key={i} className={`h-11 rounded flex flex-col items-center justify-center text-[7px] font-bold ${slot.color}`}>
                  <span>{slot.label}</span>
                  <span className="text-[5px] opacity-60">S_{i+1}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between border-t border-white/[0.06] pt-2.5 text-[8px] text-white/30 z-10">
              <span>ALERTS: 14 BATCHES YELLOW | 2 RED</span>
              <span className="text-[#2DD4BF]">DYNAMIC DISCOUNT ACTIVE</span>
            </div>
          </div>
        );

      case "ayushalert":
        return (
          <div className="relative w-full h-[200px] bg-black/60 rounded-xl border border-white/[0.06] overflow-hidden p-4 flex flex-col justify-between font-mono text-[9px] text-[#A1A1AA]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:10px_10px] pointer-events-none" />
            
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-2.5 z-10">
              <div className="flex items-center gap-1.5 text-emerald-400">
                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                <span>AYUSHALERT_OUTBREAK_TRACKER</span>
              </div>
              <span className="text-white/30 text-[8px]">PIN_DE_IDENTIFIED</span>
            </div>

            {/* Dotted map mockup */}
            <div className="flex flex-col gap-1.5 my-2 z-10 px-1 justify-center h-20 bg-white/[0.01] border border-white/[0.04] rounded p-2">
              <div className="flex items-center justify-between text-[7px]">
                <span className="text-[#7C86FF]">PINCODE 500032 (KCIS)</span>
                <span className="text-red-400 font-bold">OUTBREAK (5+ CASES)</span>
              </div>
              <div className="flex items-center justify-between text-[7px]">
                <span className="text-[#A1A1AA]">PINCODE 500008 (Gachibowli)</span>
                <span className="text-amber-400 font-bold">WARNING (3+ CASES)</span>
              </div>
              <div className="flex items-center justify-between text-[7px] border-t border-white/[0.04] pt-1">
                <span>CONSENT TRANSACTION ID</span>
                <span className="text-[#7C86FF]">approved_rec_6c02</span>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-white/[0.06] pt-2.5 text-[8px] text-white/30 z-10">
              <span>FHIR COMPILING ACTIVE</span>
              <span className="text-emerald-400 font-semibold">SECURE GATEWAY</span>
            </div>
          </div>
        );

      case "voicescope-india":
        return (
          <div className="relative w-full h-[200px] bg-black/60 rounded-xl border border-white/[0.06] overflow-hidden p-4 flex flex-col justify-between font-mono text-[9px] text-[#A1A1AA]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:12px_12px] pointer-events-none" />
            
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-2.5 z-10">
              <div className="flex items-center gap-1.5 text-[#7C86FF]">
                <div className="w-1.5 h-1.5 bg-[#7C86FF] rounded-full animate-pulse" />
                <span>VOICESCOPE_DNN_ACCENT_MODEL</span>
              </div>
              <span className="text-white/30 text-[8px]">HUBERT_L9</span>
            </div>

            {/* Neural network outputs visual */}
            <div className="space-y-1.5 my-2.5 z-10 text-[7px] flex-grow flex flex-col justify-center">
              {[
                { lang: "Telugu Accent", val: "99.8%", width: "w-full bg-[#7C86FF]" },
                { lang: "Kannada Accent", val: "12.5%", width: "w-[12%] bg-[#7C86FF]/40" },
                { lang: "Gujarati Accent", val: "4.1%", width: "w-[4%] bg-[#7C86FF]/20" }
              ].map((bar, i) => (
                <div key={i} className="flex flex-col gap-0.5">
                  <div className="flex justify-between text-white/40">
                    <span>{bar.lang}</span>
                    <span>{bar.val}</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/[0.04] rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${bar.width}`} />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between border-t border-white/[0.06] pt-2.5 text-[8px] text-white/30 z-10">
              <span>EVAL ACC: 91.91% (CHILD SPEECH)</span>
              <span>13,288 DENSE VECTOR</span>
            </div>
          </div>
        );

      case "minds-club":
        return (
          <div className="relative w-full h-[200px] bg-black/60 rounded-xl border border-white/[0.06] overflow-hidden p-4 flex flex-col justify-between font-mono text-[9px] text-[#A1A1AA]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:10px_10px] pointer-events-none" />
            
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-2.5 z-10">
              <div className="flex items-center gap-1.5 text-[#7C86FF]">
                <div className="w-1.5 h-1.5 bg-[#7C86FF] rounded-full animate-pulse" />
                <span>MINDS_ONBOARDING_PIPELINE</span>
              </div>
              <span className="text-white/30 text-[8px]">WEBHOOK_SCRIPT</span>
            </div>

            {/* Pipeline flowchart */}
            <div className="flex flex-col gap-1.5 my-2.5 z-10 text-[7px] flex-grow justify-center font-semibold bg-white/[0.01] border border-white/[0.06] p-2 rounded">
              <div className="flex items-center gap-2">
                <span className="text-[#7C86FF]">[SUBMIT]</span> Join Form Input
              </div>
              <div className="flex items-center gap-2 pl-3 border-l border-[#7C86FF]/30">
                <span className="text-emerald-500">[DB]</span> MongoDB Atlas Write (OK)
              </div>
              <div className="flex items-center gap-2 pl-3 border-l border-[#7C86FF]/30">
                <span className="text-emerald-500">[SYNC]</span> Google Apps Script Webhook (OK)
              </div>
              <div className="flex items-center gap-2 pl-3 border-l border-[#7C86FF]/30">
                <span className="text-emerald-500">[SMTP]</span> Nodemailer HTML dispatched (OK)
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-white/[0.06] pt-2.5 text-[8px] text-white/30 z-10">
              <span>STATUS: AUTO SYNC LIVE</span>
              <span className="text-emerald-500 font-bold">100% SUCCESS RATE</span>
            </div>
          </div>
        );

      case "multimodal-emotion-recognition":
        return (
          <div className="relative w-full h-[200px] bg-black/60 rounded-xl border border-white/[0.06] overflow-hidden p-4 flex flex-col justify-between font-mono text-[9px] text-[#A1A1AA]">
            {/* Visual Grid Backing */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:12px_12px] pointer-events-none" />

            <div className="flex items-center justify-between border-b border-white/[0.06] pb-2.5 z-10">
              <div className="flex items-center gap-1.5 text-[#7C86FF]">
                <div className="w-1.5 h-1.5 bg-[#7C86FF] rounded-full animate-pulse" />
                <span>IIITH_RAP_FUSION_LAYERS</span>
              </div>
              <span className="text-white/30 text-[8px]">FUSION_L3</span>
            </div>

            <div className="space-y-3 my-2.5 z-10">
              {/* Audio Mel-Spectrogram wave */}
              <div className="flex flex-col gap-1">
                <div className="flex justify-between text-[7px] text-white/30">
                  <span>AUDIO SPECTROGRAM STREAM (LIBROSA)</span>
                  <span>82.4Hz</span>
                </div>
                <div className="flex items-end gap-0.5 h-7">
                  {Array.from({ length: 36 }).map((_, i) => {
                    const height = Math.abs(Math.sin(i * 0.35)) * 100;
                    return (
                      <div 
                        key={i} 
                        className="w-full bg-[#7C86FF]/60 rounded-t-[1px]"
                        style={{ height: `${Math.max(12, height)}%` }}
                      />
                    );
                  })}
                </div>
              </div>
              
              {/* Text tokens */}
              <div className="flex flex-col gap-1">
                <div className="flex justify-between text-[7px] text-white/30">
                  <span>TEXT TRANSFORMER TOKEN SEQS (BERT)</span>
                  <span>DENSE_EMBED</span>
                </div>
                <div className="flex items-center gap-1 text-[7px] text-[#A1A1AA] bg-white/[0.01] border border-white/[0.06] p-1 rounded">
                  {["[CLS]", "highly", "analytical", "NLP", "[SEP]"].map((tok, i) => (
                    <span key={i} className="px-1.5 py-0.5 bg-white/[0.04] border border-white/[0.06] rounded-[2px] text-[#F5F5F5] font-semibold">{tok}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-white/[0.06] pt-2.5 text-[8px] text-white/30 z-10">
              <span>RATE: 16kHz MONO</span>
              <span>ALIGN: CROSS_ATTN</span>
            </div>
          </div>
        );

      case "moodmate":
        return (
          <div className="relative w-full h-[200px] bg-black/60 rounded-xl border border-white/[0.06] overflow-hidden p-4 flex flex-col justify-between font-mono text-[9px] text-[#A1A1AA]">
            {/* Visual Grid Backing */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:12px_12px] pointer-events-none" />
            
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-2.5 z-10">
              <div className="flex items-center gap-1.5 text-[#7C86FF]">
                <div className="w-1.5 h-1.5 bg-[#7C86FF] rounded-full animate-pulse" />
                <span>SPRING BOOT REST API CONSOLE</span>
              </div>
              <span className="text-white/30 text-[8px]">PORT_8080</span>
            </div>

            <div className="space-y-2.5 my-2.5 z-10 text-[7px] flex-grow flex flex-col justify-center">
              {/* Request-Response Exchange */}
              <div className="flex flex-col gap-1 bg-white/[0.01] border border-white/[0.06] p-1.5 rounded">
                <div className="flex items-center justify-between text-white/30">
                  <span>HTTP REGISTER REQUEST</span>
                  <span className="text-emerald-500 font-bold">201 CREATED</span>
                </div>
                <div className="text-[#F5F5F5] font-semibold">
                  <span className="text-[#7C86FF]">POST</span> /api/auth/register
                </div>
              </div>

              {/* Token Exchange */}
              <div className="flex flex-col gap-1 bg-white/[0.01] border border-white/[0.06] p-1.5 rounded">
                <div className="flex items-center justify-between text-white/30">
                  <span>STATELESS USER SECURE FILTER</span>
                  <span className="text-[#7C86FF] font-semibold">JWT AUTH HEADER</span>
                </div>
                <div className="text-[#A1A1AA] truncate font-semibold">
                  Authorization: <span className="text-amber-500/90 font-bold">Bearer eyJhbGciOiJIUzI1NiJ9...</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-white/[0.06] pt-2.5 text-[8px] text-white/30 z-10">
              <span>DB: MONGODB_CONNECTED</span>
              <span>SESSION: STATELESS</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="relative w-full h-[200px] bg-black/60 rounded-xl border border-white/[0.06] overflow-hidden p-6 flex flex-col justify-between">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
            <Network className="w-8 h-8 text-[#7C86FF]/40 animate-pulse mx-auto my-auto z-10" />
            <span className="text-[8px] font-mono text-[#A1A1AA]/50 text-center z-10">CORE SYSTEM ARCHITECTURE</span>
          </div>
        );
    }
  };

  return (
    <GlassCard className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch p-8 hover:translate-y-[-2px] duration-300 ease-out relative group overflow-hidden bg-[#121218] border border-white/[0.06]">
      {/* Vercel-style card atmospheric light glow background */}
      <div className={`absolute top-0 right-0 w-[400px] h-[300px] bg-gradient-to-br ${project.previewGradient} rounded-full blur-[100px] pointer-events-none opacity-60`} />

      {/* LEFT COLUMN: Visual Preview area (WOW Layer) */}
      <div className="lg:col-span-5 flex flex-col justify-between bg-black/40 rounded-xl p-5 border border-white/[0.06] relative overflow-hidden min-h-[260px]">
        {/* React Code visual dashboard representation */}
        {renderDashboardPreview(project.id)}

        {/* Big Metrics Grid (Recruiter scan hook) */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-3 gap-2 mt-4 z-10">
            {project.metrics.map((metric, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-[9px] font-mono text-[#A1A1AA] uppercase tracking-wider mb-0.5">
                  {metric.label}
                </span>
                <span className="text-base font-bold text-[#F5F5F5] tracking-tight bg-gradient-to-r from-[#F5F5F5] to-[#A1A1AA] bg-clip-text text-transparent">
                  {metric.value}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* RIGHT COLUMN: Structural Content (TRUST Layer) */}
      <div className="lg:col-span-7 flex flex-col justify-between z-10">
        <div>
          {/* Header pill & Actions */}
          <div className="flex items-center justify-between gap-4 mb-3">
            <span className="text-[10px] font-mono tracking-widest text-[#7C86FF] uppercase px-2.5 py-0.5 rounded-full bg-[#7C86FF]/10 font-bold">
              {project.category}
            </span>
            
            {/* Quick Links */}
            <div className="flex items-center gap-3 text-[#A1A1AA]">
              {project.links.github && (
                <a 
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F5F5F5] transition-colors"
                  aria-label="Source Repository"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              )}
              {project.links.live && (
                <a 
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F5F5F5] transition-colors"
                  aria-label="Live System Demo"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Project Title */}
          <h3 className="text-base md:text-lg font-bold text-[#F5F5F5] mb-2.5 tracking-tight group-hover:text-[#7C86FF] transition-colors duration-300">
            {project.title}
          </h3>

          {/* PROBLEM STATEMENT: What was built & why it matters */}
          <div className="mb-5">
            <span className="text-[9px] font-mono text-[#A1A1AA] uppercase tracking-wider block mb-1 font-semibold">
              Problem & Objective
            </span>
            <p className="text-xs text-[#A1A1AA] leading-relaxed max-w-xl">
              {project.description}
            </p>
          </div>

          {/* Key Trust Signals Checklist */}
          {project.trustSignals && (
            <div className="mb-6">
              <span className="text-[9px] font-mono text-[#A1A1AA] uppercase tracking-wider block mb-2 font-semibold">
                Core Implementations
              </span>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1.5">
                {project.trustSignals.map((signal, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-[11px] text-[#A1A1AA]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#7C86FF] shrink-0" />
                    <span className="truncate">{signal}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Footer Area: Toolkit chips & deep dive case study CTA */}
        <div className="flex flex-wrap items-center justify-between gap-4 mt-auto pt-4 border-t border-white/[0.06]">
          <div className="flex flex-wrap gap-1.5 max-w-[70%]">
            {project.techStack.map((tech) => (
              <span 
                key={tech} 
                className="text-[10px] font-mono text-[#F5F5F5] bg-white/[0.03] px-2.5 py-0.5 rounded border border-white/[0.06]"
              >
                {tech}
              </span>
            ))}
          </div>

          {onOpenDetails && (
            <button
              onClick={() => onOpenDetails(project)}
              className="text-xs font-semibold text-[#7C86FF] hover:text-[#7C86FF]/80 transition-colors flex items-center gap-1 group/btn cursor-pointer"
            >
              <span>Case Study</span>
              <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </button>
          )}
        </div>
      </div>
    </GlassCard>
  );
}

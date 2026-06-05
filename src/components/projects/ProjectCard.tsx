"use client";

import React from "react";
import { Project } from "@/constants/projects";
import { GlassCard } from "@/components/common/GlassCard";
import { GithubIcon } from "@/components/common/Icons";
import { ArrowUpRight, CheckCircle2, Network } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  onOpenDetails?: (project: Project) => void;
}

export function ProjectCard({ project, onOpenDetails }: ProjectCardProps) {
  // Purely React-rendered mock UI Dashboard representing the mini preview of secondary projects
  const renderMiniPreview = (id: string) => {
    switch (id) {
      case "ev-charge-demand":
        return (
          <div className="relative w-full h-[130px] bg-black/60 rounded-xl border border-white/[0.06] overflow-hidden p-3 flex flex-col justify-between font-mono text-[8px] text-[#A1A1AA] mb-4">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:10px_10px] pointer-events-none" />
            
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-1.5 z-10">
              <span className="text-[#7C86FF]">EV CHARGING STATION LOAD FORECAST</span>
              <span className="text-white/20">STATION_3</span>
            </div>

            {/* Mini charging forecast load curves representation */}
            <div className="flex items-end gap-1.5 h-10 my-2.5 justify-center z-10 px-1">
              {Array.from({ length: 12 }).map((_, i) => {
                const peakFactor = i >= 8 && i <= 10 ? 1.5 : 0.6;
                const height = Math.abs(Math.sin(i * 0.35)) * 60 * peakFactor;
                const isPeak = i === 9;
                return (
                  <div 
                    key={i} 
                    className={`flex-grow rounded-t-[1px] ${
                      isPeak ? "bg-[#7C86FF]" : "bg-[#7C86FF]/30"
                    }`}
                    style={{ height: `${Math.max(15, Math.min(100, height))}%` }}
                  />
                );
              })}
            </div>

            <div className="flex items-center justify-between border-t border-white/[0.06] pt-1.5 text-[7px] text-white/20 z-10">
              <span>MODEL: REGRESSION</span>
              <span>VAL: RESIDUAL_IMPUTED</span>
            </div>
          </div>
        );
        
      default:
        return (
          <div className="relative w-full h-[130px] bg-black/60 rounded-xl border border-white/[0.06] overflow-hidden p-3 flex flex-col justify-between font-mono text-[8px] text-[#A1A1AA] mb-4">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:12px_12px] pointer-events-none" />
            
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-1.5 z-10">
              <span className="text-[#7C86FF]">PREDICTIVE DATA LAB</span>
              <span className="text-white/20">VAL_HEAD</span>
            </div>

            <div className="flex items-center justify-center h-full z-10">
              <Network className="w-5 h-5 text-[#7C86FF]/30 animate-pulse" />
            </div>

            <div className="flex items-center justify-between border-t border-white/[0.06] pt-1.5 text-[7px] text-white/20 z-10">
              <span>METRICS ENABLED</span>
              <span>100% SECURE</span>
            </div>
          </div>
        );
    }
  };

  return (
    <GlassCard className="flex flex-col h-full group relative overflow-hidden bg-[#121218] border border-white/[0.06]">
      {/* Vercel-style card atmospheric light glow background */}
      <div className={`absolute top-0 right-0 w-[200px] h-[150px] bg-gradient-to-br ${project.previewGradient || 'from-[#7C86FF]/6 to-transparent'} rounded-full blur-[80px] pointer-events-none opacity-40`} />

      {/* Top visual representation */}
      {renderMiniPreview(project.id)}

      {/* Card Info Area */}
      <div className="flex items-center justify-between gap-4 mb-3 z-10">
        <span className="text-[9px] font-mono tracking-widest text-[#7C86FF] uppercase px-2 py-0.5 rounded-full bg-[#7C86FF]/10 font-bold">
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
              aria-label="GitHub Repository"
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
              aria-label="Live Demo"
            >
              <ArrowUpRight className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
      
      {/* Title */}
      <h3 className="text-sm md:text-base font-bold text-[#F5F5F5] mb-2 group-hover:text-[#7C86FF] transition-colors duration-300 z-10">
        {project.title}
      </h3>
      
      {/* PROBLEM STATEMENT: What was built & why */}
      <p className="text-xs text-[#A1A1AA] leading-relaxed mb-6 flex-grow z-10">
        {project.description}
      </p>
      
      <div className="flex flex-col gap-4 mt-auto z-10">
        {/* Trust Signals bullet */}
        {project.trustSignals && project.trustSignals.length > 0 && (
          <div className="flex flex-col gap-1 border-t border-white/[0.06] pt-3">
            {project.trustSignals.slice(0, 1).map((signal, idx) => (
              <div key={idx} className="flex items-center gap-1.5 text-[10px] text-[#A1A1AA]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#7C86FF] shrink-0" />
                <span className="truncate">{signal}</span>
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-1">
            {project.techStack.slice(0, 3).map((tech) => (
              <span 
                key={tech} 
                className="text-[9px] font-mono text-[#A1A1AA] bg-white/[0.02] px-2 py-0.5 rounded border border-white/[0.06]"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 3 && (
              <span className="text-[9px] font-mono text-[#A1A1AA] px-1 py-0.5">
                +{project.techStack.length - 3}
              </span>
            )}
          </div>

          {onOpenDetails && (
            <button 
              onClick={() => onOpenDetails(project)}
              className="text-[11px] font-bold text-[#7C86FF] hover:text-[#7C86FF]/80 transition-colors flex items-center gap-0.5 group/btn cursor-pointer"
            >
              <span>Case Study</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </button>
          )}
        </div>
      </div>
    </GlassCard>
  );
}

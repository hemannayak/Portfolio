"use client";

import { leadershipData } from "@/constants/leadership";
import { GlassCard } from "@/components/common/GlassCard";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/Reveal";
import { Users, Calendar } from "lucide-react";

export function Leadership() {
  return (
    <section id="leadership" className="py-16 md:py-28 px-4 md:px-6 relative border-b border-white/[0.06] bg-[#0B0B0F]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <FadeIn delay={0.1} className="mb-20">
          <span className="text-xs font-mono tracking-widest text-[#7C86FF] uppercase block mb-3 font-semibold">
            06 / Collaboration & Ownership
          </span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#F5F5F5] mb-4">
            Leadership & Responsibility
          </h2>
          <p className="text-xs md:text-sm text-[#A1A1AA] max-w-2xl leading-relaxed">
            Coordinating collegiate onboarding cells, facilitating departmental liaison operations, and conducting peer-to-peer technical mentorship programs.
          </p>
        </FadeIn>

        {/* 3-Column Dossier Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {leadershipData.map((item) => (
            <StaggerItem key={item.id}>
              <GlassCard className="h-full flex flex-col p-6 group bg-[#121218] border border-white/[0.06] hover:translate-y-[-2px] duration-300 ease-out relative overflow-hidden">
                {/* Visual subtle card glow */}
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#7C86FF]/5 rounded-full blur-2xl group-hover:bg-[#7C86FF]/10 transition-all duration-500 pointer-events-none" />

                {/* Card Header */}
                <div className="flex items-start justify-between gap-4 mb-4 z-10">
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] group-hover:border-[#7C86FF]/30 transition-all duration-300">
                    <Users className="w-5 h-5 text-[#7C86FF]" />
                  </div>
                  
                  <div className="flex items-center gap-1 text-[9px] font-mono text-[#A1A1AA]/60 mt-1">
                    <Calendar className="w-3 h-3 text-[#7C86FF]/70" />
                    <span>{item.duration}</span>
                  </div>
                </div>
                
                {/* Titles */}
                <div className="mb-4 z-10">
                  <h3 className="text-sm font-bold text-[#F5F5F5] mb-0.5 tracking-tight">
                    {item.role}
                  </h3>
                  <div className="text-[10px] font-mono text-[#7C86FF] font-semibold uppercase tracking-wider">
                    {item.organization}
                  </div>
                </div>
                
                {/* Overview narrative */}
                <p className="text-xs text-[#A1A1AA] leading-relaxed mb-6 font-sans z-10">
                  {item.description}
                </p>

                {/* Grounded Reflection Block */}
                <div className="p-4 bg-[#0B0B0F]/40 border border-white/[0.04] rounded-xl text-[11px] leading-relaxed text-[#A1A1AA] mb-6 shadow-inner z-10">
                  <span className="font-mono text-[9px] font-bold text-[#7C86FF] block mb-1 uppercase tracking-wider">
                    Leadership Reflection & Growth
                  </span>
                  {item.learning}
                </div>
                
                {/* Responsibility tag cloud */}
                <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-white/[0.04] z-10">
                  {item.responsibilities.map((resp) => (
                    <span 
                      key={resp} 
                      className="text-[9px] font-mono text-[#F5F5F5] bg-[#0B0B0F]/30 px-2 py-0.5 rounded border border-white/[0.06]"
                    >
                      {resp}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

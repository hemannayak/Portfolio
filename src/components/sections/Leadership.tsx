"use client";

import { leadershipData } from "@/constants/leadership";
import { GlassCard } from "@/components/common/GlassCard";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/Reveal";
import { Users, Calendar, TrendingUp, Award, ChevronRight } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  "ssg-progression": TrendingUp,
  "aspire-leaders": Award,
};

export function Leadership() {
  return (
    <section id="leadership" className="py-16 md:py-28 px-4 md:px-6 relative border-b border-white/[0.06] bg-[#0B0B0F]">
      <div className="max-w-5xl mx-auto">
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

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {leadershipData.map((item) => {
            const Icon = iconMap[item.id] ?? Users;
            return (
              <StaggerItem key={item.id}>
                <GlassCard className="h-full flex flex-col p-6 group bg-[#121218] border border-white/[0.06] hover:translate-y-[-2px] duration-300 ease-out relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#7C86FF]/5 rounded-full blur-2xl group-hover:bg-[#7C86FF]/10 transition-all duration-500 pointer-events-none" />

                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-4 mb-4 z-10">
                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] group-hover:border-[#7C86FF]/30 transition-all duration-300">
                      <Icon className="w-5 h-5 text-[#7C86FF]" />
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

                  {/* Progression Timeline (SSG-specific) */}
                  {item.progression && (
                    <div className="mb-4 z-10 space-y-1.5">
                      {item.progression.map((step, i) => (
                        <div key={step.title} className="flex items-center gap-2 text-[10px] font-mono">
                          <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${i === 0 ? "bg-[#7C86FF]" : "bg-white/20"}`} />
                          <span className={i === 0 ? "text-[#F5F5F5] font-semibold" : "text-[#52525B]"}>
                            {step.title}
                          </span>
                          <ChevronRight className="w-2.5 h-2.5 text-white/20 shrink-0" />
                          <span className="text-white/30">{step.period}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Overview */}
                  <p className="text-xs text-[#A1A1AA] leading-relaxed mb-6 font-sans z-10">
                    {item.description}
                  </p>

                  {/* Reflection */}
                  <div className="p-4 bg-[#0B0B0F]/40 border border-white/[0.04] rounded-xl text-[11px] leading-relaxed text-[#A1A1AA] mb-6 shadow-inner z-10">
                    <span className="font-mono text-[9px] font-bold text-[#7C86FF] block mb-1 uppercase tracking-wider">
                      Leadership Reflection & Growth
                    </span>
                    {item.learning}
                  </div>

                  {/* Responsibility tags */}
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
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

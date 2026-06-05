"use client";

import { skillsData } from "@/constants/skills";
import { GlassCard } from "@/components/common/GlassCard";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/Reveal";
import { Code, Cpu, Wrench, Binary, Terminal, Database, Sparkles } from "lucide-react";

export function Skills() {
  const getIcon = (category: string) => {
    switch (category) {
      case "AI & NLP":
        return <Cpu className="w-5 h-5 text-[#7C86FF]" />;
      case "Machine Learning & Data Science":
        return <Binary className="w-5 h-5 text-[#CBD5E1]" />;
      case "Full Stack Development":
        return <Code className="w-5 h-5 text-[#A1A1AA]" />;
      case "Programming Languages":
        return <Terminal className="w-5 h-5 text-[#7C86FF]" />;
      case "Databases & APIs":
        return <Database className="w-5 h-5 text-[#CBD5E1]" />;
      case "Developer Tools & Platforms":
        return <Wrench className="w-5 h-5 text-[#A1A1AA]" />;
      case "AI-Assisted Development":
        return <Sparkles className="w-5 h-5 text-[#7C86FF]" />;
      default:
        return <Wrench className="w-5 h-5 text-[#64748B]" />;
    }
  };

  return (
    <section id="skills" className="py-16 md:py-28 px-4 md:px-6 relative border-b border-white/[0.06] bg-[#0B0B0F]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <FadeIn delay={0.1} className="mb-20 text-center md:text-left flex flex-col items-center md:items-start">
          <span className="text-xs font-mono tracking-widest text-[#7C86FF] uppercase block mb-3 font-semibold">
            02 / Core Competencies
          </span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#F5F5F5] mb-4">
            Technical Arsenal & Toolkits
          </h2>
          <p className="text-xs md:text-sm text-[#A1A1AA] max-w-2xl leading-relaxed">
            A comprehensive mapping of technologies, methodologies, and platforms explored through research workflows, full-stack projects, and continuous placement preparation.
          </p>
        </FadeIn>

        {/* 3-Column Categorized Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((group) => (
            <StaggerItem key={group.category}>
              <GlassCard className="h-full flex flex-col items-center md:items-start text-center md:text-left p-6 bg-[#121218] border border-white/[0.06] hover:translate-y-[-2px] duration-300 ease-out relative group overflow-hidden">
                {/* Visual subtle card glow */}
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#7C86FF]/5 rounded-full blur-2xl group-hover:bg-[#7C86FF]/10 transition-all duration-500 pointer-events-none" />

                {/* Card Header */}
                <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-3 mb-4 z-10 w-full">
                  {getIcon(group.category)}
                  <h3 className="text-xs md:text-sm font-bold text-[#F5F5F5] tracking-tight font-mono">
                    {group.category}
                  </h3>
                </div>
                
                {/* Grounded narrative */}
                <p className="text-[11px] text-[#A1A1AA] leading-relaxed mb-6 font-sans z-10">
                  {group.description}
                </p>
                
                {/* Flat Tag Cloud chips */}
                <div className="flex flex-wrap justify-center md:justify-start gap-1.5 mt-auto pt-4 border-t border-white/[0.04] z-10 w-full">
                  {group.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="text-[9px] font-mono text-[#F5F5F5] bg-[#0B0B0F]/40 px-2.5 py-1 rounded border border-white/[0.06] hover:border-[#7C86FF]/30 transition-all duration-300"
                    >
                      {skill}
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

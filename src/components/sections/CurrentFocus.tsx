"use client";

import { GlassCard } from "@/components/common/GlassCard";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/Reveal";
import { Brain, Code, BarChart4, Sparkles } from "lucide-react";

export function CurrentFocus() {
  return (
    <section id="current-focus" className="py-16 md:py-20 px-4 md:px-6 relative border-b border-white/[0.06] bg-[#0B0B0F]/20">
      {/* Subtle fade transition connection at the top */}
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#0B0B0F] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <FadeIn delay={0.1} className="mb-12 flex flex-col md:flex-row items-center md:items-end justify-between gap-4">
          <div className="text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-[#F5F5F5] mb-2.5">
              Currently Focused On
            </h2>
            <p className="text-xs md:text-sm text-[#A1A1AA] max-w-2xl leading-relaxed">
              Exploring NLP research, intelligent full-stack systems, and data-driven problem solving.
            </p>
          </div>
          
          {/* Subtle AI-Augmented Workflow Badge (Understated recruiter-safe tag) */}
          <div className="inline-flex items-center justify-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.02] border border-white/[0.06] self-center md:self-auto shadow-sm">
            <Sparkles className="w-3 h-3 text-[#7C86FF]" />
            <span className="text-[9px] font-mono text-[#A1A1AA] uppercase tracking-widest font-semibold">
              AI-Augmented Workflows
            </span>
          </div>
        </FadeIn>

        {/* 3-Card Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* CARD 1 - NLP Research */}
          <StaggerItem>
            <GlassCard className="h-full flex flex-col justify-between items-center md:items-start text-center md:text-left p-6 bg-[#121218] border border-white/[0.06] hover:translate-y-[-2px] duration-300 ease-out">
              <div className="space-y-4 w-full">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-3 w-full">
                  <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06] shrink-0">
                    <Brain className="w-4.5 h-4.5 text-[#7C86FF]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#F5F5F5] tracking-tight">NLP Research</h3>
                    <span className="text-[10px] text-[#7C86FF] font-medium font-mono">Research Intern @ IIIT Hyderabad</span>
                  </div>
                </div>
                
                <p className="text-xs text-[#A1A1AA] leading-relaxed">
                  Exploring Natural Language Processing workflows, experimentation, text processing, and research-oriented problem solving.
                </p>
              </div>

              <div className="flex flex-wrap justify-center md:justify-start gap-1.5 mt-6 pt-4 border-t border-white/[0.06] w-full">
                {["NLP", "Research", "Experimentation"].map((chip) => (
                  <span 
                    key={chip} 
                    className="text-[9px] font-mono text-[#A1A1AA] bg-white/[0.02] px-2 py-0.5 rounded border border-white/[0.06]"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </GlassCard>
          </StaggerItem>

          {/* CARD 2 - Full Stack + AI Systems */}
          <StaggerItem>
            <GlassCard className="h-full flex flex-col justify-between items-center md:items-start text-center md:text-left p-6 bg-[#121218] border border-white/[0.06] hover:translate-y-[-2px] duration-300 ease-out">
              <div className="space-y-4 w-full">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-3 w-full">
                  <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06] shrink-0">
                    <Code className="w-4.5 h-4.5 text-[#7C86FF]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#F5F5F5] tracking-tight">Full Stack + AI Systems</h3>
                    <span className="text-[10px] text-[#7C86FF] font-medium font-mono">Product Engineering</span>
                  </div>
                </div>
                
                <p className="text-xs text-[#A1A1AA] leading-relaxed">
                  Building intelligent systems using modern frontend, backend, APIs, databases, and AI-powered workflows.
                </p>
              </div>

              <div className="flex flex-wrap justify-center md:justify-start gap-1.5 mt-6 pt-4 border-t border-white/[0.06] w-full">
                {["React", "Spring Boot", "MongoDB", "APIs"].map((chip) => (
                  <span 
                    key={chip} 
                    className="text-[9px] font-mono text-[#A1A1AA] bg-white/[0.02] px-2 py-0.5 rounded border border-white/[0.06]"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </GlassCard>
          </StaggerItem>

          {/* CARD 3 - Data Science & Product Eng */}
          <StaggerItem>
            <GlassCard className="h-full flex flex-col justify-between items-center md:items-start text-center md:text-left p-6 bg-[#121218] border border-white/[0.06] hover:translate-y-[-2px] duration-300 ease-out">
              <div className="space-y-4 w-full">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-3 w-full">
                  <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06] shrink-0">
                    <BarChart4 className="w-4.5 h-4.5 text-[#7C86FF]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#F5F5F5] tracking-tight">Data Science & Engineering</h3>
                    <span className="text-[10px] text-[#7C86FF] font-medium font-mono">Continuous Learning</span>
                  </div>
                </div>
                
                <p className="text-xs text-[#A1A1AA] leading-relaxed">
                  Experimenting with analytics, machine learning, automation, and practical real-world problem solving.
                </p>
              </div>

              <div className="flex flex-wrap justify-center md:justify-start gap-1.5 mt-6 pt-4 border-t border-white/[0.06] w-full">
                {["ML", "Analytics", "AI", "Problem Solving"].map((chip) => (
                  <span 
                    key={chip} 
                    className="text-[9px] font-mono text-[#A1A1AA] bg-white/[0.02] px-2 py-0.5 rounded border border-white/[0.06]"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </GlassCard>
          </StaggerItem>
        </StaggerContainer>
      </div>

      {/* Subtle fade transition connection at the bottom to ease into Projects */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0B0B0F] to-transparent pointer-events-none" />
    </section>
  );
}

"use client";

import { GlassCard } from "@/components/common/GlassCard";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/Reveal";
import { FlaskConical, Users, BookOpen } from "lucide-react";

interface Achievement {
  id: string;
  title: string;
  context: string;
  description: string;
  represents: string;
  icon: React.ElementType;
}

const achievementsData: Achievement[] = [
  {
    id: "iiith-internship",
    title: "IIIT Hyderabad Research Internship — Selected",
    context: "Research Selection · LTRC NLP Lab",
    description:
      "Selected for two consecutive research internships at IIIT Hyderabad — Phase 1 & 2 (Oct 2025–May 2026) on multimodal emotion recognition, and Phase 3 (Jun–Oct 2026) at the Language Technologies Research Centre working on speech signal processing fundamentals.",
    represents: "Research exposure at a premier institution across two programme cycles — working on real NLP and speech systems.",
    icon: FlaskConical,
  },
  {
    id: "levelup-pbl",
    title: "LevelUp Learning — Backend PBL Lead",
    context: "Project-Based Learning · 2-Semester Capstone",
    description:
      "Led backend architecture for a multi-user learning platform over two academic semesters. Responsible for API design, PostgreSQL schema, and authentication implementation across a 4-person team.",
    represents: "Technical leadership, system thinking, and sustained project ownership over a full academic year.",
    icon: BookOpen,
  },
  {
    id: "sih-participation",
    title: "Smart India Hackathon — Participant",
    context: "National Hackathon · Government of India",
    description:
      "Contributed to a team submission for the Smart India Hackathon building a cultural heritage web platform — navigating ideation, rapid prototyping, and formal submission under tight time constraints.",
    represents: "Collaborative problem solving, initiative, and building under pressure at a national level.",
    icon: Users,
  },
];

export function Achievements() {
  return (
    <section
      id="achievements"
      className="py-16 md:py-24 px-4 md:px-6 relative border-b border-white/[0.06] bg-black/10"
    >
      <div className="max-w-6xl mx-auto">
        <FadeIn delay={0.1} className="mb-16">
          <span className="text-xs font-mono tracking-widest text-[#7C86FF] uppercase block mb-3 font-semibold">
            07 / Growth Record
          </span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#F5F5F5] mb-4">
            Achievements
          </h2>
          <p className="text-sm text-[#A1A1AA] max-w-2xl leading-relaxed">
            A curated set of milestones — not a trophy shelf. Each one reflects a moment of initiative, selection, or sustained effort.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {achievementsData.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.id}>
                <GlassCard className="h-full flex flex-col p-5 bg-[#121218] border border-white/[0.06] hover:border-white/[0.10] transition-all duration-300 group">

                  {/* Header */}
                  <div className="flex items-start gap-3.5 mb-4">
                    <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06] text-[#7C86FF] shrink-0 group-hover:border-[#7C86FF]/20 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#F5F5F5] tracking-tight leading-snug mb-0.5">
                        {item.title}
                      </h3>
                      <span className="text-[10px] font-mono text-[#52525B] uppercase tracking-wider">
                        {item.context}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-[#A1A1AA] leading-relaxed mb-4 flex-1">
                    {item.description}
                  </p>

                  {/* What it represents */}
                  <div className="pt-3.5 border-t border-white/[0.05]">
                    <span className="text-[9px] font-mono text-[#3F3F46] uppercase tracking-widest block mb-1">
                      What it represents
                    </span>
                    <p className="text-[11px] text-[#71717A] leading-relaxed italic">
                      {item.represents}
                    </p>
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

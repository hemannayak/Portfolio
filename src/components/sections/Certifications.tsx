"use client";

import {
  highlightedCertifications,
  compactLearningData,
  type HighlightedCertification,
  type CompactLearning,
} from "@/constants/certifications";
import { GlassCard } from "@/components/common/GlassCard";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/Reveal";
import { Award, Briefcase, GraduationCap, BookOpen, ArrowUpRight, Layers } from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// Type icon mapping
// ─────────────────────────────────────────────────────────────────────────────
const typeIconMap = {
  fellowship: GraduationCap,
  "job-simulation": Briefcase,
  specialization: Layers,
  course: BookOpen,
};

const typeLabelMap: Record<HighlightedCertification["type"], string> = {
  fellowship: "Fellowship",
  "job-simulation": "Job Simulation",
  specialization: "Specialization",
  course: "Course",
};

const typeBadgeStyles: Record<HighlightedCertification["type"], string> = {
  fellowship: "bg-[#7C86FF]/10 border-[#7C86FF]/30 text-[#7C86FF]",
  "job-simulation": "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
  specialization: "bg-amber-500/10 border-amber-500/30 text-amber-400",
  course: "bg-white/[0.03] border-white/[0.10] text-[#A1A1AA]",
};

// ─────────────────────────────────────────────────────────────────────────────
// Tier 1 Highlighted Card
// ─────────────────────────────────────────────────────────────────────────────
function HighlightCard({ item }: { item: HighlightedCertification }) {
  const Icon = typeIconMap[item.type];

  return (
    <GlassCard className="h-full flex flex-col justify-between p-5 bg-[#121218] border border-white/[0.06] hover:border-white/[0.10] transition-all duration-300 group">
      <div>
        {/* Header row */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-[#7C86FF] shrink-0 group-hover:border-[#7C86FF]/20 transition-colors">
            <Icon className="w-4 h-4" />
          </div>
          <span
            className={`text-[9px] font-mono font-semibold px-2 py-0.5 rounded-full border ${typeBadgeStyles[item.type]}`}
          >
            {typeLabelMap[item.type]}
          </span>
        </div>

        {/* Title + Issuer */}
        <h3 className="text-sm font-bold text-[#F5F5F5] tracking-tight mb-0.5 leading-snug">
          {item.title}
        </h3>
        <p className="text-[11px] font-mono text-[#7C86FF] mb-3">{item.issuer}</p>

        {/* Description */}
        <p className="text-xs text-[#71717A] leading-relaxed mb-4">{item.description}</p>

        {/* Skill tags */}
        <div className="flex flex-wrap gap-1.5">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.02] border border-white/[0.06] text-[#A1A1AA]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 mt-4 border-t border-white/[0.06] text-[10px] font-mono text-[#71717A]">
        <span>{item.date}</span>
        {item.verificationUrl && (
          <a
            href={item.verificationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-0.5 text-[#7C86FF]/60 hover:text-[#7C86FF] transition-colors font-semibold"
          >
            <span>Verify</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        )}
      </div>
    </GlassCard>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Tier 2 Compact Learning Item
// ─────────────────────────────────────────────────────────────────────────────
function CompactItem({ item }: { item: CompactLearning }) {
  return (
    <div className="flex items-center justify-between gap-4 py-3 border-b border-white/[0.04] last:border-0 group">
      <div className="flex items-start gap-3 min-w-0">
        <div className="w-1 h-1 rounded-full bg-[#3F3F46] mt-1.5 shrink-0 group-hover:bg-[#7C86FF] transition-colors" />
        <div className="min-w-0">
          <span className="text-xs text-[#A1A1AA] group-hover:text-[#D4D4D8] transition-colors font-medium truncate block">
            {item.title}
          </span>
          <span className="text-[10px] font-mono text-[#52525B]">{item.issuer}</span>
        </div>
      </div>
      <span className="text-[10px] font-mono text-[#52525B] shrink-0">{item.date}</span>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Main Section
// ─────────────────────────────────────────────────────────────────────────────
export function Certifications() {
  return (
    <section
      id="certifications"
      className="py-16 md:py-24 px-4 md:px-6 relative border-b border-white/[0.06] bg-black/10"
    >
      <div className="max-w-6xl mx-auto">
        <FadeIn delay={0.1} className="mb-16">
          <span className="text-xs font-mono tracking-widest text-[#7C86FF] uppercase block mb-3 font-semibold">
            08 / Credentials & Learning
          </span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#F5F5F5] mb-4">
            Certifications & Courses
          </h2>
          <p className="text-sm text-[#A1A1AA] max-w-2xl leading-relaxed">
            Applied learning through selective programs, industry job simulations, and structured coursework — each one worked through, not just collected.
          </p>
        </FadeIn>

        {/* ─── Tier 1: Highlighted Credentials ─── */}
        <FadeIn delay={0.15} className="mb-5">
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-4 h-4 text-[#7C86FF]" />
            <h3 className="text-xs font-mono text-[#A1A1AA] uppercase tracking-widest font-semibold">
              Highlighted Credentials
            </h3>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14">
          {highlightedCertifications.map((item) => (
            <StaggerItem key={item.id}>
              <HighlightCard item={item} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* ─── Tier 2: Compact Learning Records ─── */}
        <FadeIn delay={0.2}>
          <GlassCard className="p-6 md:p-8 bg-[#121218] border border-white/[0.06]">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-4 h-4 text-[#A1A1AA]" />
              <h3 className="text-xs font-mono text-[#A1A1AA] uppercase tracking-widest font-semibold">
                Continuing Learning
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
              {compactLearningData.map((item) => (
                <CompactItem key={item.id} item={item} />
              ))}
            </div>
          </GlassCard>
        </FadeIn>
      </div>
    </section>
  );
}

"use client";

import { certificates, type Certificate } from "@/constants/certifications";
import { GlassCard } from "@/components/common/GlassCard";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/Reveal";
import {
  Award,
  Briefcase,
  GraduationCap,
  BookOpen,
  Wrench,
  ArrowUpRight,
  FileText,
  ExternalLink,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// Type → visual config
// ─────────────────────────────────────────────────────────────────────────────
const typeConfig: Record<
  Certificate["type"],
  { icon: React.ElementType; label: string; accent: string; bg: string; border: string }
> = {
  fellowship: {
    icon: Award,
    label: "Fellowship",
    accent: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/25",
  },
  "job-simulation": {
    icon: Briefcase,
    label: "Job Simulation",
    accent: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/25",
  },
  certification: {
    icon: GraduationCap,
    label: "Certification",
    accent: "text-[#7C86FF]",
    bg: "bg-[#7C86FF]/10",
    border: "border-[#7C86FF]/25",
  },
  course: {
    icon: BookOpen,
    label: "Course",
    accent: "text-[#A1A1AA]",
    bg: "bg-white/[0.03]",
    border: "border-white/[0.08]",
  },
  workshop: {
    icon: Wrench,
    label: "Workshop",
    accent: "text-sky-400",
    bg: "bg-sky-500/10",
    border: "border-sky-500/25",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Certificate Card
// ─────────────────────────────────────────────────────────────────────────────
function CertificateCard({ cert }: { cert: Certificate }) {
  const config = typeConfig[cert.type];
  const Icon = config.icon;

  return (
    <GlassCard className="h-full flex flex-col p-0 bg-[#121218] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300 group overflow-hidden">
      {/* Top accent stripe */}
      <div
        className={`h-[2px] w-full ${
          cert.type === "fellowship"
            ? "bg-gradient-to-r from-amber-500/60 via-amber-400/40 to-transparent"
            : cert.type === "job-simulation"
            ? "bg-gradient-to-r from-emerald-500/60 via-emerald-400/40 to-transparent"
            : cert.type === "certification"
            ? "bg-gradient-to-r from-[#7C86FF]/60 via-[#7C86FF]/40 to-transparent"
            : cert.type === "workshop"
            ? "bg-gradient-to-r from-sky-500/60 via-sky-400/40 to-transparent"
            : "bg-gradient-to-r from-white/10 via-white/5 to-transparent"
        }`}
      />

      <div className="p-5 flex flex-col flex-1">
        {/* Header: icon + badge + date */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <div
              className={`p-2 rounded-lg ${config.bg} ${config.border} border ${config.accent} shrink-0 group-hover:scale-105 transition-transform duration-300`}
            >
              <Icon className="w-4 h-4" />
            </div>
            <span
              className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-full ${config.bg} ${config.border} border ${config.accent} uppercase tracking-wider`}
            >
              {config.label}
            </span>
          </div>
          <span className="text-[10px] font-mono text-[#52525B] shrink-0 mt-1">
            {cert.date}
          </span>
        </div>

        {/* Title + Issuer */}
        <h3 className="text-[13px] font-bold text-[#F5F5F5] tracking-tight leading-snug mb-1">
          {cert.title}
        </h3>
        <p className="text-[10px] font-mono text-[#7C86FF]/80 mb-3 font-medium">
          {cert.issuer}
        </p>

        {/* Description */}
        <p className="text-[11px] text-[#71717A] leading-relaxed mb-4 flex-1">
          {cert.description}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {cert.skills.slice(0, 6).map((skill) => (
            <span
              key={skill}
              className="text-[9px] font-mono px-2 py-[3px] rounded bg-white/[0.02] border border-white/[0.06] text-[#A1A1AA] group-hover:border-white/[0.10] transition-colors"
            >
              {skill}
            </span>
          ))}
          {cert.skills.length > 6 && (
            <span className="text-[9px] font-mono px-2 py-[3px] rounded bg-white/[0.01] text-[#52525B]">
              +{cert.skills.length - 6}
            </span>
          )}
        </div>

        {/* Footer: links */}
        <div className="flex items-center gap-3 pt-3 border-t border-white/[0.05]">
          <a
            href={cert.certificateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-1 text-[10px] font-mono font-semibold ${config.accent} opacity-70 hover:opacity-100 transition-opacity`}
          >
            <ExternalLink className="w-3 h-3" />
            <span>View Certificate</span>
          </a>
          {cert.letterUrl && (
            <a
              href={cert.letterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[10px] font-mono font-semibold text-[#A1A1AA]/50 hover:text-[#A1A1AA] transition-colors"
            >
              <FileText className="w-3 h-3" />
              <span>Letter</span>
            </a>
          )}
        </div>
      </div>
    </GlassCard>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Stats bar
// ─────────────────────────────────────────────────────────────────────────────
function StatsBar() {
  const typeCounts = certificates.reduce(
    (acc, c) => {
      acc[c.type] = (acc[c.type] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>,
  );

  const stats = [
    { label: "Total Credentials", value: certificates.length.toString(), accent: "text-[#F5F5F5]" },
    { label: "Fellowships", value: typeCounts["fellowship"]?.toString() || "0", accent: "text-amber-400" },
    { label: "Job Simulations", value: typeCounts["job-simulation"]?.toString() || "0", accent: "text-emerald-400" },
    { label: "Certifications", value: typeCounts["certification"]?.toString() || "0", accent: "text-[#7C86FF]" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="flex flex-col items-center py-4 px-3 rounded-xl bg-[#121218] border border-white/[0.04]"
        >
          <span className={`text-xl font-bold font-mono ${stat.accent}`}>
            {stat.value}
          </span>
          <span className="text-[9px] font-mono text-[#52525B] uppercase tracking-wider mt-1">
            {stat.label}
          </span>
        </div>
      ))}
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
        {/* Section Header */}
        <FadeIn delay={0.1} className="mb-12">
          <span className="text-xs font-mono tracking-widest text-[#7C86FF] uppercase block mb-3 font-semibold">
            08 / Credentials & Learning
          </span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#F5F5F5] mb-4">
            Certifications & Courses
          </h2>
          <p className="text-sm text-[#A1A1AA] max-w-2xl leading-relaxed">
            Applied learning through selective programs, industry job simulations, and structured
            coursework — each one worked through, not just collected. Every certificate links to
            verifiable proof.
          </p>
        </FadeIn>

        {/* Stats */}
        <FadeIn delay={0.15}>
          <StatsBar />
        </FadeIn>

        {/* Certificate Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {certificates.map((cert) => (
            <StaggerItem key={cert.id}>
              <CertificateCard cert={cert} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Legend */}
        <FadeIn delay={0.25}>
          <div className="flex flex-wrap items-center justify-center gap-5 mt-10 text-[9px] font-mono text-[#52525B]">
            {Object.entries(typeConfig).map(([key, config]) => {
              const Icon = config.icon;
              return (
                <div key={key} className="flex items-center gap-1.5">
                  <Icon className={`w-3 h-3 ${config.accent}`} />
                  <span>{config.label}</span>
                </div>
              );
            })}
            <div className="flex items-center gap-1.5">
              <ArrowUpRight className="w-3 h-3 text-[#7C86FF]" />
              <span>All certificates link to verified proof</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

"use client";

import { useState, useCallback } from "react";
import { GlassCard } from "@/components/common/GlassCard";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/Reveal";
import { Mail, Check, Copy, ExternalLink, FileDown, Loader2, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/common/Icons";
import { generateResumeData } from "@/lib/resume/generator";
import { applyTailoring } from "@/lib/resume/tailoring";

const EMAIL = "official.hemanthnayakpangoth@gmail.com";

// ─── Contact channels ────────────────────────────────────────────────────────
const channels = [
  {
    id: "linkedin",
    label: "LinkedIn",
    description: "Professional profile",
    href: "https://www.linkedin.com/in/phemanthnayak",
    icon: LinkedinIcon,
    external: true,
  },
  {
    id: "github",
    label: "GitHub",
    description: "Active repositories & code",
    href: "https://github.com/hemannayak",
    icon: GithubIcon,
    external: true,
  },
];

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [loadingResume, setLoadingResume] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Graceful fallback — do nothing visible
    }
  };

  const handleDownloadATS = useCallback(async () => {
    if (loadingResume) return;
    setLoadingResume(true);
    try {
      const raw = generateResumeData("general");
      const tailored = applyTailoring(raw);
      const { downloadResumePDF } = await import("@/lib/resume/exporters/pdf-exporter");
      await downloadResumePDF(tailored);
    } catch (err) {
      console.error("ATS Resume download failed:", err);
    } finally {
      setLoadingResume(false);
    }
  }, [loadingResume]);

  return (
    <section id="contact" className="py-16 md:py-28 px-4 md:px-6 relative">
      <div className="max-w-5xl mx-auto">

        {/* ─── Section Header ─── */}
        <FadeIn delay={0.1} className="mb-16 text-center md:text-left flex flex-col items-center md:items-start">
          <span className="text-xs font-mono tracking-widest text-[#7C86FF] uppercase block mb-3 font-semibold">
            09 / Reach Out
          </span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#F5F5F5] mb-5">
            Get in Touch
          </h2>
          <p className="text-sm text-[#A1A1AA] max-w-xl leading-relaxed">
            Open to internships, research collaborations, and early-career roles in AI, Data Science, Full Stack Engineering, and Software Development. Response time is typically within 24 hours.
          </p>
        </FadeIn>

        {/* ─── Two-Column Layout ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* ─── Direct Communication Column (Email) ─── */}
          <div className="lg:col-span-7">
            <FadeIn delay={0.15}>
              <div className="group relative">
                {/* Glow effect */}
                <div className="absolute -inset-px bg-gradient-to-r from-[#7C86FF]/10 to-[#7C86FF]/0 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <GlassCard className="relative p-6 md:p-8 bg-[#121218] border border-white/[0.06] flex flex-col justify-between min-h-[220px]">
                  <div>
                    <span className="text-[10px] font-mono text-[#52525B] uppercase tracking-wider block mb-2">
                      Preferred Channel
                    </span>
                    <h3 className="text-lg md:text-xl font-bold text-[#F5F5F5] tracking-tight mb-2">
                      Drop me an email
                    </h3>
                    <p className="text-xs text-[#71717A] max-w-md leading-relaxed mb-6 font-mono break-all">
                      {EMAIL}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={`mailto:${EMAIL}`}
                      className="flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-semibold bg-[#7C86FF] hover:bg-[#7C86FF]/95 text-[#0B0B0F] transition-all duration-300 shadow-md group/btn"
                    >
                      <span>Send Mail</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform text-[#0B0B0F]" />
                    </a>

                    <button
                      onClick={handleCopyEmail}
                      className="flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-semibold border border-white/10 bg-white/[0.01] hover:bg-white/5 text-[#F5F5F5] transition-all duration-300"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-[#A1A1AA]" />}
                      <span>{copied ? "Copied!" : "Copy Email"}</span>
                    </button>
                  </div>
                </GlassCard>
              </div>
            </FadeIn>
          </div>

          {/* ─── Secondary channels + Resume ─── */}
          <div className="lg:col-span-5 space-y-4">

            {/* LinkedIn + GitHub */}
            <StaggerContainer className="space-y-3">
              {channels.map((ch) => {
                const Icon = ch.icon;
                return (
                  <StaggerItem key={ch.id}>
                    <a
                      href={ch.href}
                      target={ch.external ? "_blank" : undefined}
                      rel={ch.external ? "noopener noreferrer" : undefined}
                      className="block group"
                    >
                      <GlassCard className="flex items-center justify-between p-4 bg-[#121218] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-200">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.06] text-[#A1A1AA] group-hover:text-[#7C86FF] group-hover:border-[#7C86FF]/20 transition-colors">
                            <Icon className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-[#D4D4D8] group-hover:text-[#F5F5F5] transition-colors">
                              {ch.label}
                            </p>
                            <p className="text-[10px] font-mono text-[#52525B]">{ch.description}</p>
                          </div>
                        </div>
                        <ExternalLink className="w-3.5 h-3.5 text-[#3F3F46] group-hover:text-[#7C86FF] transition-colors" />
                      </GlassCard>
                    </a>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>

            {/* Resume Generator */}
            <FadeIn delay={0.25}>
              <button
                onClick={handleDownloadATS}
                disabled={loadingResume}
                className="w-full block group disabled:opacity-50 disabled:cursor-wait"
              >
                <GlassCard className="flex items-center justify-between p-4 bg-[#121218] border border-[#7C86FF]/20 hover:border-[#7C86FF]/40 transition-all duration-200 group">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#7C86FF]/10 border border-[#7C86FF]/20 text-[#7C86FF] group-hover:bg-[#7C86FF]/15 transition-colors">
                      {loadingResume ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <FileDown className="w-3.5 h-3.5" />}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#D4D4D8] group-hover:text-[#F5F5F5] transition-colors text-left">
                        {loadingResume ? "Generating..." : "ATS Resume"}
                      </p>
                      <p className="text-[10px] font-mono text-[#52525B]">1-page · PDF direct download</p>
                    </div>
                  </div>
                  <span className="text-[9px] font-mono text-[#7C86FF]/60 group-hover:text-[#7C86FF] transition-colors">
                    Download →
                  </span>
                </GlassCard>
              </button>
            </FadeIn>

            {/* Response time note */}
            <FadeIn delay={0.3}>
              <p className="text-[10px] font-mono text-[#3F3F46] text-center pt-1">
                Pangoth Hemanth Nayak · Hyderabad, India
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

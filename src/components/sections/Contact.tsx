"use client";

import { useState } from "react";
import { GlassCard } from "@/components/common/GlassCard";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/Reveal";
import { Mail, Check, Copy, ExternalLink, FileDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/common/Icons";
import { ResumeModal } from "@/components/resume/ResumeModal";

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
    description: "Code & projects",
    href: "https://github.com/hemannayak",
    icon: GithubIcon,
    external: true,
  },
];

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Graceful fallback — do nothing visible
    }
  };

  return (
    <section id="contact" className="py-16 md:py-28 px-4 md:px-6 relative">
      <div className="max-w-5xl mx-auto">

        {/* ─── Section Header ─── */}
        <FadeIn delay={0.1} className="mb-16 text-center md:text-left flex flex-col items-center md:items-start">
          <span className="text-xs font-mono tracking-widest text-[#7C86FF] uppercase block mb-3 font-semibold">
            10 / Reach Out
          </span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#F5F5F5] mb-5">
            Get in Touch
          </h2>
          <p className="text-sm text-[#A1A1AA] max-w-xl leading-relaxed">
            Open to internships, research collaborations, and early-career roles in AI, Data Science, Full Stack Engineering, and Software Development. Response time is typically within 24 hours.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* ─── Primary Email CTA ─── */}
          <FadeIn delay={0.15} className="lg:col-span-7">
            <GlassCard className="p-6 md:p-8 bg-[#121218] border border-white/[0.06] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#7C86FF]/4 to-transparent rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06] text-[#7C86FF]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#F5F5F5]">Email</h3>
                  <p className="text-[10px] font-mono text-[#52525B]">Preferred channel</p>
                </div>
              </div>

              <p className="text-xs font-mono text-[#A1A1AA] mb-6 break-all">{EMAIL}</p>

              <div className="flex flex-col sm:flex-row gap-3">
                {/* Send Email */}
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#7C86FF] text-[#0B0B0F] text-xs font-semibold tracking-tight hover:bg-[#8F97FF] transition-colors duration-200"
                >
                  <Mail className="w-3.5 h-3.5" />
                  Send Email
                </a>

                {/* Copy Email */}
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.08] text-xs font-medium text-[#A1A1AA] hover:text-[#F5F5F5] hover:border-white/[0.14] transition-all duration-200"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      Copy Address
                    </>
                  )}
                </button>
              </div>
            </GlassCard>
          </FadeIn>

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
                onClick={() => setResumeOpen(true)}
                className="w-full block group"
              >
                <GlassCard className="flex items-center justify-between p-4 bg-[#121218] border border-[#7C86FF]/20 hover:border-[#7C86FF]/40 transition-all duration-200 group">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#7C86FF]/10 border border-[#7C86FF]/20 text-[#7C86FF] group-hover:bg-[#7C86FF]/15 transition-colors">
                      <FileDown className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#D4D4D8] group-hover:text-[#F5F5F5] transition-colors text-left">
                        ATS Resume
                      </p>
                      <p className="text-[10px] font-mono text-[#52525B]">1-page · PDF & DOCX</p>
                    </div>
                  </div>
                  <span className="text-[9px] font-mono text-[#7C86FF]/60 group-hover:text-[#7C86FF] transition-colors">
                    Generate →
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

      {/* Resume Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </section>
  );
}

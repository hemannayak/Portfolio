"use client";

import { GlassCard } from "@/components/common/GlassCard";
import { FadeIn } from "@/components/animations/FadeIn";
import { 
  MapPin, 
  Compass, 
  Globe, 
  Database, 
  MonitorPlay, 
  Sparkles, 
  Code, 
  BarChart2, 
  FileText, 
  Microscope 
} from "lucide-react";

// ─── Quick facts — locked & credible ───────────────────────────────────────
const quickFacts = [
  { label: "Degree", value: "BTech CSE (Data Science)" },
  { label: "Institution", value: "HITAM, Hyderabad" },
  { label: "Current Role", value: "NLP Research Intern, IIITH" },
  { label: "Born", value: "31 August 2005" },
  { label: "City", value: "Hyderabad" },
  { label: "Email", value: "hemanthnayakpangoth@gmail.com" },
  { label: "Phone", value: "+91 8328232607" },
];

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 px-4 md:px-6 relative border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <FadeIn delay={0.1} className="mb-16 text-center md:text-left flex flex-col items-center md:items-start">
          <span className="text-xs font-mono tracking-widest text-[#7C86FF] uppercase block mb-3 font-semibold">
            01 / The Person
          </span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#F5F5F5] mb-4">
            About
          </h2>
          <p className="text-sm text-[#A1A1AA] max-w-2xl leading-relaxed">
            A brief look at who I am, how I think, and what I am working toward.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* ─── Written Bio ─── */}
          <div className="lg:col-span-7 space-y-5">
            <FadeIn delay={0.15}>
              <p className="text-sm text-[#C4C4C8] leading-[1.85] tracking-wide text-center md:text-left">
                I am a final-year Computer Science student specializing in Data Science at HITAM, Hyderabad. I know my way around languages like Python, C, and SQL, using them to gather, analyze, and visualize data with tools like Power BI and Tableau. Whether it's exploring data to find patterns or using machine learning to predict outcomes, my work sits at the intersection of ML research and practical software engineering.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-sm text-[#A1A1AA] leading-[1.85] tracking-wide text-center md:text-left">
                At IIIT Hyderabad, I have been working on a multimodal NLP system that fuses speech and text features for emotion recognition. It has been great practice translating research papers into runnable code — debugging alignment issues between audio spectrograms and BERT embeddings, and learning to stay skeptical of results that look too clean.
              </p>
            </FadeIn>

            <FadeIn delay={0.25}>
              <p className="text-sm text-[#A1A1AA] leading-[1.85] tracking-wide text-center md:text-left">
                When I'm not doing research, I build full-stack systems using HTML, Django, and modern backend APIs. I consider myself a "vibe coder" — leveraging AI tools to rapidly build end-to-end working websites and bring ideas to life. I also led a 900-student governance body for close to a year, which taught me more about communication than most technical projects have.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-2.5 pt-1 text-center md:text-left">
                <Compass className="w-3.5 h-3.5 text-[#7C86FF] shrink-0 mt-0.5" />
                <p className="text-xs text-[#71717A] leading-relaxed italic">
                  Currently exploring: production deployment patterns, efficient fine-tuning of LLMs on limited hardware, and distributed systems fundamentals.
                </p>
              </div>
            </FadeIn>

            {/* ─── Interests ─── */}
            <FadeIn delay={0.35} className="pt-4 border-t border-white/[0.04] mt-6">
              <h3 className="text-xs font-mono tracking-widest text-[#A1A1AA] uppercase mb-4 font-semibold text-center md:text-left">
                Interests
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { name: "Machine Learning", icon: Globe, color: "text-amber-500" },
                  { name: "Data Analysis", icon: Database, color: "text-blue-500" },
                  { name: "Django & MongoDB", icon: MonitorPlay, color: "text-rose-500" },
                  { name: "AI Workflows", icon: Sparkles, color: "text-emerald-500" },
                  { name: "Software Eng.", icon: Code, color: "text-emerald-500" },
                  { name: "Visualization", icon: BarChart2, color: "text-red-500" },
                  { name: "Algorithms", icon: FileText, color: "text-blue-400" },
                  { name: "NLP Research", icon: Microscope, color: "text-amber-400" },
                ].map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-2.5 p-3 rounded-lg bg-[#0F172A]/80 border border-white/[0.04] hover:bg-[#0F172A] hover:border-white/[0.08] transition-colors"
                  >
                    <item.icon className={`w-4.5 h-4.5 shrink-0 ${item.color}`} strokeWidth={2.25} />
                    <span className="text-[10px] sm:text-[11px] font-bold text-[#F5F5F5] leading-tight">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* ─── Quick Facts Card ─── */}
          <FadeIn delay={0.2} className="lg:col-span-5">
            <GlassCard className="p-6 bg-[#121218] border border-white/[0.06] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-br from-[#7C86FF]/4 to-transparent rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-2.5 mb-6">
                <MapPin className="w-4 h-4 text-[#7C86FF]" />
                <span className="text-xs font-mono text-[#A1A1AA] uppercase tracking-widest font-semibold">
                  Quick Details
                </span>
              </div>

              <ul className="space-y-0 divide-y divide-white/[0.04]">
                {quickFacts.map(({ label, value }) => (
                  <li key={label} className="flex justify-between items-center py-3 gap-4">
                    <span className="text-[11px] text-[#52525B] font-mono shrink-0">{label}</span>
                    <span className="text-xs text-[#D4D4D8] font-medium text-right">{value}</span>
                  </li>
                ))}
              </ul>

              {/* Open-to-work indicator */}
              <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-[10px] font-mono text-[#52525B]">
                  Open to internships, research roles, and early-career positions
                </span>
              </div>
            </GlassCard>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

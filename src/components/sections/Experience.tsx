"use client";

import { experienceData } from "@/constants/experience";
import { GlassCard } from "@/components/common/GlassCard";
import { FadeIn } from "@/components/animations/FadeIn";
import { Calendar, MapPin } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-16 md:py-28 px-4 md:px-6 relative border-b border-white/[0.06] bg-[#0B0B0F]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <FadeIn delay={0.1} className="mb-20 text-center md:text-left flex flex-col items-center md:items-start">
          <span className="text-xs font-mono tracking-widest text-[#7C86FF] uppercase block mb-3 font-semibold">
            03 / Professional Trajectory
          </span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#F5F5F5] mb-4">
            Research & Industry Experience
          </h2>
          <p className="text-xs md:text-sm text-[#A1A1AA] max-w-2xl leading-relaxed">
            Prior NLP research programs, ML training partnerships, and corporate data traineeships focused on structural pipelines, model validation, and quantitative engineering.
          </p>
        </FadeIn>

        {/* Split Grid Timeline Stack */}
        <div className="space-y-12">
          {experienceData.map((item, idx) => (
            <FadeIn 
              key={item.id} 
              delay={0.15 + idx * 0.05} 
              className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 border-b border-white/[0.04] pb-12 last:border-b-0 last:pb-0"
            >
              {/* LEFT COLUMN: Organization metadata block (WOW/SCAN Layer) */}
              <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left gap-2.5">
                <div className="space-y-1">
                  <h3 className="text-lg md:text-xl font-bold text-[#F5F5F5] tracking-tight">
                    {item.company}
                  </h3>
                  <div className="text-xs text-[#A1A1AA] font-semibold font-mono">
                    {item.role}
                  </div>
                </div>

                <span className="inline-flex items-center self-center md:self-start text-[8px] font-mono tracking-widest text-[#7C86FF] uppercase px-2.5 py-0.5 rounded-full bg-[#7C86FF]/10 font-bold border border-[#7C86FF]/20">
                  {item.badge}
                </span>

                <div className="flex flex-col items-center md:items-start gap-1.5 text-[10px] text-[#A1A1AA]/60 font-mono mt-2">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#7C86FF]/70" />
                    <span>{item.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#7C86FF]/70" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN: Core Narrative & Tools (TRUST Layer) */}
              <div className="md:col-span-8 flex flex-col items-center md:items-start text-center md:text-left gap-4">
                {/* Professional overview */}
                <p className="text-xs md:text-sm text-[#A1A1AA] leading-relaxed">
                  {item.description}
                </p>

                {/* Key work items */}
                <ul className="space-y-4 md:space-y-2 w-full">
                  {item.bullets.map((bullet, bulletIdx) => (
                    <li key={bulletIdx} className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-2.5 text-xs text-[#A1A1AA] leading-relaxed">
                      <span className="w-1.5 h-1.5 bg-[#7C86FF] rounded-full mt-0 md:mt-1.5 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Key learnings */}
                <div className="p-4 bg-white/[0.01] border border-white/[0.04] rounded-xl text-[11px] leading-relaxed text-[#A1A1AA] mt-2 shadow-inner flex flex-col items-center md:items-start text-center md:text-left">
                  <span className="font-mono text-[9px] font-bold text-[#7C86FF] block mb-1 uppercase tracking-wider">
                    Key Learning & Practical Growth
                  </span>
                  {item.learning}
                </div>

                {/* Toolkit Chips */}
                <div className="flex flex-wrap justify-center md:justify-start gap-1.5 mt-2 w-full">
                  {item.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-[9px] font-mono text-[#F5F5F5] bg-white/[0.02] px-2.5 py-0.5 rounded border border-white/[0.06]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

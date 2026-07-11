"use client";

import { GlassCard } from "@/components/common/GlassCard";
import { FadeIn } from "@/components/animations/FadeIn";
import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react";

const courseworkTags = [
  "Deep Learning",
  "Natural Language Processing",
  "Probability & Statistics",
  "Design & Analysis of Algorithms",
  "Database Management Systems",
  "Big Data Analytics",
  "Linear Algebra",
  "Machine Learning Operations",
];

const mpcSubjects = ["Mathematics", "Physics", "Chemistry"];

export function Education() {
  return (
    <section id="education" className="py-16 md:py-24 px-4 md:px-6 relative border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <FadeIn delay={0.1} className="mb-16">
          <span className="text-xs font-mono tracking-widest text-[#7C86FF] uppercase block mb-3 font-semibold">
            05 / Academic Credentials
          </span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#F5F5F5] mb-4">
            Education
          </h2>
          <p className="text-sm text-[#A1A1AA] max-w-2xl leading-relaxed">
            Formal technical foundations in computer science, statistics, and data systems — specializing in NLP and applied machine learning.
          </p>
        </FadeIn>

        <div className="max-w-4xl flex flex-col gap-5">
          {/* ── BTech ── */}
          <FadeIn delay={0.15}>
            <GlassCard className="p-6 md:p-8 bg-[#121218] border border-white/[0.06] relative overflow-hidden group">
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#7C86FF]/5 to-transparent rounded-full blur-2xl pointer-events-none" />

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-[#7C86FF] shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-base md:text-lg font-bold text-[#F5F5F5] tracking-tight">
                      Bachelor of Technology (BTech)
                    </h3>
                    <p className="text-sm font-mono text-[#7C86FF] font-semibold">
                      Computer Science Engineering — Data Science
                    </p>
                    <p className="text-xs text-[#A1A1AA] font-mono">
                      HITAM · Hyderabad Institute of Technology and Management
                    </p>
                    <p className="text-xs text-[#71717A] leading-relaxed max-w-xl pt-1">
                      Specialization track in statistical modeling, NLP architectures, and data engineering pipelines. Grounded in mathematics and reinforced through systems-level programming coursework.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-3 shrink-0 md:items-end">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#A1A1AA]">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>2023 — 2027</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.02] border border-white/[0.06] w-fit">
                    <Award className="w-3.5 h-3.5 text-[#7C86FF]" />
                    <span className="text-xs font-mono text-[#F5F5F5] font-semibold">CGPA: 8.5+</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#7C86FF]/10 border border-[#7C86FF]/20 w-fit">
                    <span className="text-xs font-mono text-[#7C86FF] font-semibold">4th Year</span>
                  </div>
                </div>
              </div>

              {/* Coursework tags */}
              <div className="mt-8 pt-6 border-t border-white/[0.06]">
                <h4 className="text-[10px] font-mono text-[#A1A1AA] uppercase tracking-widest mb-4 font-semibold">
                  Core Coursework
                </h4>
                <div className="flex flex-wrap gap-2">
                  {courseworkTags.map((course) => (
                    <span
                      key={course}
                      className="px-3 py-1.5 rounded-full text-[10px] font-mono bg-white/[0.02] border border-white/[0.06] text-[#A1A1AA] hover:text-[#F5F5F5] hover:border-[#7C86FF]/20 transition-all duration-200"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </GlassCard>
          </FadeIn>

          {/* ── Intermediate ── */}
          <FadeIn delay={0.25}>
            <GlassCard className="p-6 md:p-8 bg-[#121218] border border-white/[0.06] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-emerald-500/5 to-transparent rounded-full blur-2xl pointer-events-none" />

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-emerald-400 shrink-0">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-base md:text-lg font-bold text-[#F5F5F5] tracking-tight">
                      Intermediate (MPC)
                    </h3>
                    <p className="text-sm font-mono text-emerald-400 font-semibold">
                      Mathematics, Physics &amp; Chemistry
                    </p>
                    <p className="text-xs text-[#A1A1AA] font-mono">
                      MJPTBCWR Junior College · Government of Telangana
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-3 shrink-0 md:items-end">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#A1A1AA]">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>2021 — 2023</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.02] border border-white/[0.06] w-fit">
                    <Award className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-xs font-mono text-[#F5F5F5] font-semibold">91.1%</span>
                  </div>
                </div>
              </div>

              {/* MPC subject tags */}
              <div className="mt-6 pt-5 border-t border-white/[0.06]">
                <h4 className="text-[10px] font-mono text-[#A1A1AA] uppercase tracking-widest mb-4 font-semibold">
                  Subjects
                </h4>
                <div className="flex flex-wrap gap-2">
                  {mpcSubjects.map((subject) => (
                    <span
                      key={subject}
                      className="px-3 py-1.5 rounded-full text-[10px] font-mono bg-emerald-500/5 border border-emerald-500/15 text-emerald-400/80 hover:text-emerald-300 hover:border-emerald-400/30 transition-all duration-200"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            </GlassCard>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

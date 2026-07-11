"use client";

import { GlassCard } from "@/components/common/GlassCard";
import { FadeIn } from "@/components/animations/FadeIn";
import { GithubIcon, LinkedinIcon } from "@/components/common/Icons";
import { ArrowUpRight, BookOpen } from "lucide-react";

interface LinkedInPost {
  category: "Research" | "Projects" | "Growth" | "Leadership" | "Reflections";
  title: string;
  date: string;
  excerpt: string;
  link: string;
}

interface GitHubRepo {
  name: string;
  description: string;
  language: string;
  link: string;
}

const linkedinPosts: LinkedInPost[] = [
  {
    category: "Research",
    title: "NLP & Speech Processing @ IIIT Hyderabad",
    date: "IIIT Hyderabad Research",
    excerpt:
      "Reflecting on NLP research and speech processing internships at IIIT Hyderabad. Developing early-fusion model architectures, acoustic spectrogram tokenization, and context-window optimization benchmarks for high-performance deep learning validations.",
    link: "https://www.linkedin.com/posts/phemanthnayak_iiith-nlp-speechprocessing-activity-7449371568893489152-kfA0",
  },
  {
    category: "Leadership",
    title: "Student Leadership & Coordination @ HITAM SSG",
    date: "HITAM SSG Leadership",
    excerpt:
      "Reflections on student leadership and coordinating collegiate developer networks with HITAM SSG. Managing event pipelines, engineering club timelines, and building collaborative team structures to nurture developer communities.",
    link: "https://www.linkedin.com/posts/phemanthnayak_ssg-hitam-studentleadership-activity-7459266170387566592-LMS_",
  },
  {
    category: "Projects",
    title: "Cloud Architectures & Google Cloud Communities",
    date: "Google Cloud & GDG",
    excerpt:
      "Insights on cloud computing environments, GDG hubs, and scaling distributed computational pipelines. Deploying Google Cloud infrastructure and managing high-availability server networks for predictive data systems.",
    link: "https://www.linkedin.com/posts/phemanthnayak_googlecloud-gdg-cloudcomputing-activity-7460672222752509952-uouR",
  },
];

const githubRepos: GitHubRepo[] = [
  {
    name: "TransitOS",
    description:
      "Enterprise-grade school transit automation portal — fuzzy payment reconciliation (Levenshtein), WhatsApp PDF receipt dispatch via Baileys, and node-cron billing pipelines.",
    language: "TypeScript / Next.js / Express",
    link: "https://github.com/heyyhemannn/TransitOS",
  },
  {
    name: "Viala",
    description:
      "Circular pharmacy intelligence platform with FEFO inventory management, OCR-powered expiry scanning, and real-time redistribution marketplace for retail pharmacies.",
    language: "Next.js / Prisma / PostgreSQL",
    link: "https://github.com/hemannayak/Viala",
  },
  {
    name: "AyushAlert",
    description:
      "Privacy-first, consent-gated healthcare records platform with regional outbreak analytics, FHIR-compatible data structures, and Leaflet-based outbreak mapping.",
    language: "Next.js / MongoDB / Leaflet",
    link: "https://github.com/hemannayak/ayushalert",
  },
  {
    name: "IIITH_RAP_Multimodal_Emotion_Recognition",
    description:
      "Multimodal emotion recognition framework fusing CNN+BiLSTM acoustic features with DistilBERT text encoders via early cross-attention. 91.7% F1 on TESS dataset.",
    language: "PyTorch / Python / Streamlit",
    link: "https://github.com/hemannayak/IIITH_RAP_Multimodal_Emotion_Recognition",
  },
];

export function ProfessionalPresence() {
  return (
    <section id="presence" className="py-16 md:py-24 px-4 md:px-6 relative border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <FadeIn delay={0.1} className="mb-16">
          <span className="text-xs font-mono tracking-widest text-[#7C86FF] uppercase block mb-3 font-semibold">
            09 / Developer Footprint
          </span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#F5F5F5] mb-4">
            Professional Presence
          </h2>
          <p className="text-sm text-[#A1A1AA] max-w-2xl leading-relaxed">
            Active technical writing, real open-source repositories, and a consistent engineering presence across platforms.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Column A: LinkedIn curated feed cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <LinkedinIcon className="w-5 h-5 text-[#7C86FF]" />
              <h3 className="text-sm font-bold text-[#F5F5F5] tracking-tight">Technical Reflections</h3>
            </div>

            <div className="space-y-4">
              {linkedinPosts.map((post, idx) => (
                <GlassCard
                  key={idx}
                  className="p-5 bg-[#121218] border border-white/[0.06] flex flex-col justify-between hover:border-[#7C86FF]/20 transition-all duration-300"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-mono text-[#7C86FF] bg-[#7C86FF]/10 px-2 py-0.5 rounded-full font-bold uppercase">
                        {post.category}
                      </span>
                      <span className="text-[9px] font-mono text-[#A1A1AA]">{post.date}</span>
                    </div>

                    <h4 className="text-xs font-bold text-[#F5F5F5] tracking-tight">{post.title}</h4>
                    <p className="text-[11px] text-[#A1A1AA] leading-relaxed">{post.excerpt}</p>
                  </div>

                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 flex items-center gap-1 text-[10px] font-bold text-[#7C86FF] hover:text-[#7C86FF]/80 self-start transition-colors group cursor-pointer"
                  >
                    <span>Read LinkedIn Post</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Column B: Real GitHub repos */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <GithubIcon className="w-5 h-5 text-[#7C86FF]" />
                <h3 className="text-sm font-bold text-[#F5F5F5] tracking-tight">Open Source Repositories</h3>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {githubRepos.map((repo, idx) => (
                <a
                  key={idx}
                  href={repo.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <GlassCard className="h-full p-5 bg-[#121218] border border-white/[0.06] hover:border-[#7C86FF]/25 transition-all duration-300 cursor-pointer">
                    <div className="flex items-start justify-between gap-2 mb-2.5">
                      <div className="flex items-center gap-2 min-w-0">
                        <BookOpen className="w-3.5 h-3.5 text-[#A1A1AA] shrink-0" />
                        <h4 className="text-[11px] font-bold text-[#F5F5F5] font-mono tracking-tight truncate">
                          {repo.name}
                        </h4>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#7C86FF]/40 group-hover:text-[#7C86FF] transition-colors shrink-0" />
                    </div>

                    <p className="text-[11px] text-[#71717A] leading-relaxed mb-4">
                      {repo.description}
                    </p>

                    <span className="text-[9px] font-mono text-[#F5F5F5] bg-white/[0.03] px-2 py-0.5 rounded border border-white/[0.06]">
                      {repo.language}
                    </span>
                  </GlassCard>
                </a>
              ))}
            </div>

            {/* GitHub Profile CTA */}
            <a
              href="https://github.com/hemannayak"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 px-4 py-3 rounded-full text-xs font-semibold bg-[#7C86FF] hover:bg-[#7C86FF]/90 text-[#0B0B0F] transition-all duration-300 w-full cursor-pointer shadow-md mt-2"
            >
              <GithubIcon className="w-4 h-4" />
              <span>View Full GitHub Profile</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

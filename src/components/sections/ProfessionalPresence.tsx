"use client";

import { GlassCard } from "@/components/common/GlassCard";
import { FadeIn } from "@/components/animations/FadeIn";
import { GithubIcon, LinkedinIcon } from "@/components/common/Icons";
import { ArrowUpRight, CheckCircle2, Flame, GitFork, Star, BookOpen } from "lucide-react";

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
  stars: number;
  forks: number;
  language: string;
}

const linkedinPosts: LinkedInPost[] = [
  {
    category: "Research",
    title: "NLP & Speech Processing @ IIIT Hyderabad",
    date: "IIIT Hyderabad Research",
    excerpt: "Reflecting on NLP research and speech processing internships at IIIT Hyderabad. Developing early early-fusion model architectures, acoustic spectrogram tokenization, and context-window optimization benchmarks for high-performance deep learning validations.",
    link: "https://www.linkedin.com/posts/phemanthnayak_iiith-nlp-speechprocessing-activity-7449371568893489152-kfA0"
  },
  {
    category: "Leadership",
    title: "Student Leadership & Coordination @ HITAM SSG",
    date: "HITAM SSG Leadership",
    excerpt: "Reflections on student leadership and coordinating collegiate developer networks with HITAM SSG. Managing event pipelines, engineering club timelines, and building collaborative team structures to nurture developer communities.",
    link: "https://www.linkedin.com/posts/phemanthnayak_ssg-hitam-studentleadership-activity-7459266170387566592-LMS_"
  },
  {
    category: "Projects",
    title: "Cloud Architectures & Google Cloud Communities",
    date: "Google Cloud & GDG",
    excerpt: "Insights on cloud computing environments, GDG hubs, and scaling distributed computational pipelines. Deploying Google Cloud infrastructure and managing high-availability server networks for predictive data systems.",
    link: "https://www.linkedin.com/posts/phemanthnayak_googlecloud-gdg-cloudcomputing-activity-7460672222752509952-uouR"
  }
];

const githubRepos: GitHubRepo[] = [
  {
    name: "IIITH_RAP_Multimodal_Emotion_Recognition",
    description: "Multimodal Emotion Recognition research framework aligning audio spectrograms, vocal signals, and BERT embeddings using early cross-attention blocks.",
    stars: 5,
    forks: 1,
    language: "PyTorch / Python"
  },
  {
    name: "vidyamitra-sahaya-ai",
    description: "Intelligent academic adviser and student-focused institutional assistance portal utilizing advanced predictive analytical pipelines.",
    stars: 4,
    forks: 2,
    language: "TypeScript / Next.js"
  }
];

const githubActivity = [
  { date: "2 days ago", event: "Pushed custom early-fusion spectrogram hooks to IIITH_RAP repository" },
  { date: "1 week ago", event: "Refined training parameters and seed models inside IIITH_NLP_Internship" },
  { date: "2 weeks ago", event: "Merged UI layouts and routing paths inside vidyamitra-sahaya-ai portal" }
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
            Ongoing technical activity, engineering updates, and open-source contributions showing an active builder mindset.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Column A: LinkedIn curated feed cards */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <LinkedinIcon className="w-5 h-5 text-[#7C86FF]" />
              <h3 className="text-sm font-bold text-[#F5F5F5] tracking-tight">Curated Technical Reflections</h3>
            </div>

            <div className="space-y-4">
              {linkedinPosts.map((post, idx) => (
                <GlassCard key={idx} className="p-5 bg-[#121218] border border-white/[0.06] flex flex-col justify-between hover:border-[#7C86FF]/20 transition-all duration-300">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-mono text-[#7C86FF] bg-[#7C86FF]/10 px-2 py-0.5 rounded-full font-bold uppercase">
                        {post.category}
                      </span>
                      <span className="text-[9px] font-mono text-[#A1A1AA]">{post.date}</span>
                    </div>

                    <h4 className="text-xs font-bold text-[#F5F5F5] tracking-tight">
                      {post.title}
                    </h4>

                    <p className="text-[11px] text-[#A1A1AA] leading-relaxed">
                      {post.excerpt}
                    </p>
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

          {/* Column B: GitHub Active Builder presentation */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <GithubIcon className="w-5 h-5 text-[#7C86FF]" />
              <h3 className="text-sm font-bold text-[#F5F5F5] tracking-tight">GitHub Active Repository Logs</h3>
            </div>

            <div className="space-y-6">
              {/* Pinned Repositories */}
              <div className="space-y-3">
                {githubRepos.map((repo, idx) => (
                  <GlassCard key={idx} className="p-5 bg-[#121218] border border-white/[0.06] hover:border-[#7C86FF]/20 transition-all duration-300">
                    <div className="flex items-start justify-between gap-4 mb-2.5">
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-[#A1A1AA]" />
                        <h4 className="text-xs font-bold text-[#F5F5F5] font-mono tracking-tight">{repo.name}</h4>
                      </div>
                      
                      <div className="flex items-center gap-3 font-mono text-[9px] text-[#A1A1AA]">
                        <span className="flex items-center gap-1"><Star className="w-3 h-3 text-[#7C86FF]" />{repo.stars}</span>
                        <span className="flex items-center gap-1"><GitFork className="w-3 h-3 text-[#A1A1AA]" />{repo.forks}</span>
                      </div>
                    </div>

                    <p className="text-[11px] text-[#A1A1AA] leading-relaxed mb-4">
                      {repo.description}
                    </p>

                    <span className="text-[9px] font-mono text-[#F5F5F5] bg-white/[0.03] px-2 py-0.5 rounded border border-white/[0.06]">
                      {repo.language}
                    </span>
                  </GlassCard>
                ))}
              </div>

              {/* Recent Activity Log */}
              <GlassCard className="p-5 bg-[#121218] border border-white/[0.06] space-y-4">
                <div className="flex items-center gap-2 border-b border-white/[0.06] pb-3">
                  <Flame className="w-4 h-4 text-[#7C86FF] shrink-0" />
                  <h4 className="text-[10px] font-mono uppercase text-[#F5F5F5] tracking-wider font-semibold">Active Push Logs</h4>
                </div>

                <ul className="space-y-3">
                  {githubActivity.map((activity, idx) => (
                    <li key={idx} className="flex items-start justify-between gap-4 text-[10px] font-mono leading-relaxed">
                      <div className="flex items-start gap-2 text-[#A1A1AA]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#7C86FF] shrink-0 mt-0.5" />
                        <span>{activity.event}</span>
                      </div>
                      <span className="text-white/20 shrink-0">{activity.date}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>

              {/* Minimalist Contribution representation */}
              <GlassCard className="p-5 bg-[#121218] border border-white/[0.06] space-y-3">
                <div className="flex justify-between text-[9px] font-mono text-[#A1A1AA] uppercase tracking-wider font-semibold border-b border-white/[0.06] pb-2.5">
                  <span>Open Source Contributions</span>
                  <span>Active Season</span>
                </div>

                <div className="flex flex-col gap-1.5 pt-1.5">
                  {/* Subtle clean vector contribution rows simulating the active builder signal */}
                  <div className="flex flex-wrap gap-0.5 md:gap-1 justify-between">
                    {Array.from({ length: 48 }).map((_, i) => {
                      const level = 
                        i === 3 || i === 8 || i === 19 || i === 24 || i === 31 || i === 42 ? "bg-[#7C86FF]" :
                        i === 5 || i === 12 || i === 20 || i === 36 ? "bg-[#7C86FF]/60" :
                        i === 11 || i === 15 || i === 27 || i === 47 ? "bg-[#7C86FF]/30" :
                        "bg-[#1B1B26]";
                      return (
                        <div 
                          key={i} 
                          className={`w-2.5 h-2.5 rounded-[1.5px] ${level} transition-all duration-300 hover:scale-[1.1]`}
                        />
                      );
                    })}
                  </div>
                  <div className="flex justify-between text-[8px] font-mono text-white/20 pt-1">
                    <span>Less Active</span>
                    <span>More Active</span>
                  </div>
                </div>
              </GlassCard>

              {/* GitHub Profile CTA */}
              <a 
                href="https://github.com/hemannayak" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 px-4 py-3 rounded-full text-xs font-semibold bg-[#7C86FF] hover:bg-[#7C86FF]/95 text-[#0B0B0F] transition-all duration-300 w-full cursor-pointer shadow-md"
              >
                <span>View Full GitHub Profile</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

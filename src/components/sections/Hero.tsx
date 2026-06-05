"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, FileText, ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import Image from "next/image";
import Link from "next/link";
const roles = [
  "NLP Research Intern",
  "Data Science Student",
  "AI Builder",
  "Full-Stack Developer",
  "Student Leader"
];

function RoleRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3200); // Slow, premium 3.2s cycle for readability and calm feel
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[28px] md:h-[36px] overflow-hidden relative flex items-center mb-6">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="text-base md:text-xl font-bold tracking-tight text-[#7C86FF] font-mono block"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center px-4 md:px-6 relative pt-20 pb-12 md:pt-32 md:pb-24 border-b border-white/5 overflow-hidden">
      {/* Cinematic radial gradient blooms */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[300px] bg-gradient-to-r from-[#7C86FF]/2 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[350px] h-[350px] bg-white/[0.01] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Side Column - Copy & Callouts */}
        <div className="lg:col-span-7 text-center md:text-left space-y-6 flex flex-col items-center md:items-start">
          {/* Understated Glass pill Badge */}
          <FadeIn delay={0.1} direction="down" className="inline-block">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.02] border border-white/5 shadow-inner">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7C86FF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#7C86FF]"></span>
              </span>
              <span className="text-[10px] font-mono text-[#A1A1AA] uppercase tracking-widest font-semibold">
                NLP Research Intern • AI • Data Science
              </span>
            </div>
          </FadeIn>

          {/* Premium Name Typography */}
          <FadeIn delay={0.2} className="space-y-2">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-[#F5F5F5] leading-[1.08] font-sans">
              Pangoth Hemanth Nayak
            </h1>
            
            {/* Elegant role text rotator */}
            <RoleRotator />
            
            {/* Recruiter-friendly Positioning Statement */}
            <p className="text-sm md:text-base text-[#A1A1AA] max-w-xl leading-relaxed font-sans">
              Building practical systems across AI, data, and software with a focus on solving real-world engineering problems.
            </p>
          </FadeIn>

          {/* Symmetrical elevated CTA System */}
          <FadeIn delay={0.3} className="flex flex-wrap justify-center md:justify-start items-center gap-4 pt-4">
            <a
              href="#projects"
              className="flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold bg-[#7C86FF] hover:bg-[#7C86FF]/95 text-[#0B0B0F] hover:scale-[1.01] transition-all duration-300 shadow-md group border border-[#7C86FF]/20 cursor-pointer"
            >
              <span>View Projects</span>
              <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform text-[#0B0B0F]" />
            </a>

            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold border border-white/10 bg-white/[0.01] hover:bg-white/5 hover:scale-[1.01] text-[#F5F5F5] transition-all duration-300 shadow-sm group cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Download Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#A1A1AA]" />
            </Link>
          </FadeIn>
        </div>

        {/* Right Side Column - Natural Premium Portrait visual system */}
        <div className="lg:col-span-5 flex justify-center">
          <FadeIn delay={0.25} direction="up" className="w-4/5 sm:w-full max-w-[280px] sm:max-w-[340px] md:max-w-[400px]">
            <div className="relative w-full aspect-[4/5] mx-auto flex items-center justify-center">
              {/* Engineering abstract grid background */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:24px_24px] rounded-2xl border border-white/[0.02] pointer-events-none" />
              
              {/* Subtle rim-lighting atmospheric blooms */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] bg-[#7C86FF]/4 rounded-full blur-[80px] opacity-75 pointer-events-none" />
              <div className="absolute top-1/4 left-1/4 w-[180px] h-[180px] bg-white/[0.01] rounded-full blur-[60px] pointer-events-none" />

              {/* High-fidelity glass framing */}
              <div className="absolute inset-4 rounded-2xl border border-white/[0.06] bg-white/[0.01] backdrop-blur-[1px] shadow-3xl overflow-hidden flex items-end justify-center group">
                <Image
                  src="/images/hemanth_latest_26.jpg"
                  alt="Pangoth Hemanth Nayak Professional Portrait"
                  fill
                  className="object-cover object-bottom scale-[1.01] group-hover:scale-[1.02] transition-transform duration-700 ease-out z-10"
                  priority
                />
                
                {/* Smooth cinematic bottom gradient transition */}
                <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#0B0B0F] via-[#0B0B0F]/80 to-transparent z-20" />
                
                {/* Apple-style premium border lighting effect */}
                <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent z-20" />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

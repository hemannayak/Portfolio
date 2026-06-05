"use client";

import { useState } from "react";
import { navItems } from "@/constants/nav";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { cn } from "@/utils/cn";
import { Menu, X, ArrowUpRight, FileDown } from "lucide-react";
import { ResumeModal } from "@/components/resume/ResumeModal";

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export function Navbar({ activeSection, setActiveSection }: NavbarProps) {
  const scrollDirection = useScrollDirection();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  const handleNavClick = (href: string) => {
    const section = href.replace("#", "");
    setActiveSection(section);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ease-in-out px-4 py-4 md:px-6",
        scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 py-2.5 rounded-full glass-navbar border border-white/5 shadow-2xl relative">
        {/* Brand / Logo */}
        <button 
          onClick={() => handleNavClick("#hero")}
          className="flex items-center gap-2 group font-mono text-xs md:text-sm font-black tracking-widest text-[#F5F5F5]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#7C86FF] animate-pulse" />
          <span>PHN</span>
        </button>

        {/* Compact Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-0.5">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={cn(
                  "px-3 py-1 rounded-full text-[11px] font-medium tracking-wide transition-all duration-300",
                  isActive
                    ? "bg-white/10 text-[#FAFAFA] shadow-sm"
                    : "text-[#A1A1AA] hover:text-[#FAFAFA] hover:bg-white/5"
                )}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Compact Medium-Screen Desktop Navigation (Tablet Landscape) */}
        <nav className="hidden md:flex xl:hidden items-center gap-0.5">
          {navItems.slice(0, 7).map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={cn(
                  "px-2 py-1 rounded-full text-[10px] font-medium tracking-wide transition-all duration-300",
                  isActive
                    ? "bg-white/10 text-[#FAFAFA] shadow-sm"
                    : "text-[#A1A1AA] hover:text-[#FAFAFA] hover:bg-white/5"
                )}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-2">
          {/* ATS Resume button */}
          <button
            onClick={() => setResumeOpen(true)}
            className="flex items-center gap-1 px-3.5 py-1.5 rounded-full text-[10px] lg:text-xs font-medium border border-white/[0.08] text-[#A1A1AA] hover:text-[#F5F5F5] hover:border-[#7C86FF]/30 transition-all duration-200"
          >
            <FileDown className="w-3 h-3" />
            <span>Resume</span>
          </button>
          <button
            onClick={() => handleNavClick("#contact")}
            className="flex items-center gap-1 px-3.5 py-1.5 rounded-full text-[10px] lg:text-xs font-semibold bg-[#7C86FF] hover:bg-[#7C86FF]/95 text-[#0B0B0F] transition-all duration-300 shadow-md group"
          >
            <span>Connect</span>
            <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#0B0B0F]" />
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-1 text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="absolute top-20 left-4 right-4 z-40 p-5 rounded-2xl glass-panel border border-white/10 shadow-3xl md:hidden animate-in fade-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    "text-xs font-medium py-1.5 transition-colors text-left",
                    isActive ? "text-[#7C86FF] border-l-2 border-[#7C86FF] pl-2" : "text-[#A1A1AA] hover:text-[#F5F5F5] pl-2"
                  )}
                >
                  {item.label}
                </button>
              );
            })}
            <button
              onClick={() => handleNavClick("#contact")}
              className="mt-1.5 flex items-center justify-center gap-1 px-4 py-2.5 rounded-full text-xs font-semibold bg-[#7C86FF] text-[#0B0B0F]"
            >
              <span>Connect</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); setResumeOpen(true); }}
              className="flex items-center justify-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium border border-white/[0.10] text-[#A1A1AA]"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>ATS Resume</span>
            </button>
          </nav>
        </div>
      )}

      {/* Resume Modal — rendered outside the fixed header */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </header>
  );
}

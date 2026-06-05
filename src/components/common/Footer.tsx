import { ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6 bg-[#0B0B0F]/80">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col gap-1 text-center md:text-left">
          <p className="text-sm font-mono text-[#F5F5F5] font-medium">Pangoth Hemanth Nayak</p>
          <p className="text-xs text-[#A1A1AA]">CSE (Data Science) • Engineered for recruiters & tech teams.</p>
        </div>
        <div className="flex items-center gap-6 text-xs text-[#A1A1AA]">
          <a href="#hero" className="hover:text-[#FAFAFA] transition-colors">Home</a>
          <a href="#projects" className="hover:text-[#FAFAFA] transition-colors">Projects</a>
          <a href="#experience" className="hover:text-[#FAFAFA] transition-colors">Experience</a>
          <a href="#contact" className="hover:text-[#FAFAFA] transition-colors">Contact</a>
        </div>
        <a 
          href="#hero" 
          className="p-2 rounded-full border border-white/5 bg-white/5 text-[#A1A1AA] hover:text-[#FAFAFA] hover:bg-white/10 transition-all duration-300" 
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </a>
      </div>
    </footer>
  );
}

"use client";

import { useState, useEffect, useCallback } from "react";
import { X, Download, FileText, FileDown, Loader2, RefreshCw } from "lucide-react";
import { ResumePreview } from "./ResumePreview";
import { generateResumeData } from "@/lib/resume/generator";
import { applyTailoring } from "@/lib/resume/tailoring";
import type { ResumeData } from "@/lib/resume/types";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type DownloadState = "idle" | "loading" | "done";

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [resumeData, setResumeData] = useState<ResumeData | null>(null);
  const [pdfState, setPdfState] = useState<DownloadState>("idle");
  const [docxState, setDocxState] = useState<DownloadState>("idle");

  // Assemble resume data on open
  const generate = useCallback(() => {
    const raw = generateResumeData("general");
    const tailored = applyTailoring(raw);
    setResumeData(tailored);
  }, []);

  useEffect(() => {
    if (isOpen) generate();
  }, [isOpen, generate]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleDownloadPDF = async () => {
    if (!resumeData || pdfState === "loading") return;
    setPdfState("loading");
    try {
      // Dynamic import — keeps react-pdf out of initial bundle
      const { downloadResumePDF } = await import("@/lib/resume/exporters/pdf-exporter");
      await downloadResumePDF(resumeData);
      setPdfState("done");
      setTimeout(() => setPdfState("idle"), 2500);
    } catch (err) {
      console.error("PDF export failed:", err);
      setPdfState("idle");
    }
  };

  const handleDownloadDOCX = async () => {
    if (!resumeData || docxState === "loading") return;
    setDocxState("loading");
    try {
      const { downloadResumeDOCX } = await import("@/lib/resume/exporters/docx-exporter");
      await downloadResumeDOCX(resumeData);
      setDocxState("done");
      setTimeout(() => setDocxState("idle"), 2500);
    } catch (err) {
      console.error("DOCX export failed:", err);
      setDocxState("idle");
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center"
      role="dialog"
      aria-modal="true"
      aria-label="ATS Resume Generator"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal panel */}
      <div className="relative z-10 w-full max-w-6xl mx-4 mt-8 mb-8 flex flex-col max-h-[92vh] rounded-2xl bg-[#0E0E14] border border-white/[0.08] shadow-2xl overflow-hidden">

        {/* ── Top bar ── */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.06] shrink-0">
          <div>
            <h2 className="text-sm font-bold text-[#F5F5F5] tracking-tight">
              ATS Resume
            </h2>
            <p className="text-[10px] font-mono text-[#52525B] mt-0.5">
              Jake&apos;s format · 1-page · text-based · ATS-parseable
            </p>
          </div>

          <div className="flex items-center gap-2">
            {/* Regenerate */}
            <button
              onClick={generate}
              title="Regenerate from latest portfolio data"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-mono text-[#71717A] hover:text-[#A1A1AA] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-200"
            >
              <RefreshCw className="w-3 h-3" />
              Regenerate
            </button>

            {/* Close */}
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-[#71717A] hover:text-[#F5F5F5] hover:bg-white/[0.04] transition-all duration-200"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ── Body: preview + actions ── */}
        <div className="flex flex-col lg:flex-row flex-1 min-h-0 overflow-hidden">

          {/* Preview pane */}
          <div className="flex-1 overflow-y-auto bg-[#F0F0EE] p-4 min-h-0">
            {resumeData ? (
              <ResumePreview data={resumeData} />
            ) : (
              <div className="flex items-center justify-center h-64">
                <Loader2 className="w-5 h-5 text-[#7C86FF] animate-spin" />
              </div>
            )}
          </div>

          {/* Action sidebar */}
          <div className="lg:w-64 shrink-0 border-t lg:border-t-0 lg:border-l border-white/[0.06] p-5 flex flex-col gap-4 bg-[#0B0B0F]">

            <div>
              <p className="text-[9px] font-mono text-[#3F3F46] uppercase tracking-widest mb-3">
                Download
              </p>

              {/* PDF Download */}
              <button
                onClick={handleDownloadPDF}
                disabled={!resumeData || pdfState === "loading"}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#7C86FF] hover:bg-[#8F97FF] disabled:opacity-50 disabled:cursor-not-allowed text-[#0B0B0F] text-xs font-bold transition-all duration-200 mb-2"
              >
                {pdfState === "loading" ? (
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                ) : (
                  <FileDown className="w-3.5 h-3.5" />
                )}
                {pdfState === "done" ? "Downloaded ✓" : pdfState === "loading" ? "Generating..." : "Download PDF"}
              </button>

              {/* DOCX Download */}
              <button
                onClick={handleDownloadDOCX}
                disabled={!resumeData || docxState === "loading"}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] hover:border-white/[0.14] disabled:opacity-50 disabled:cursor-not-allowed text-[#D4D4D8] text-xs font-medium transition-all duration-200"
              >
                {docxState === "loading" ? (
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                ) : (
                  <FileText className="w-3.5 h-3.5" />
                )}
                {docxState === "done" ? "Downloaded ✓" : docxState === "loading" ? "Generating..." : "Download DOCX"}
              </button>
            </div>

            {/* ATS notes */}
            <div className="pt-4 border-t border-white/[0.06]">
              <p className="text-[9px] font-mono text-[#3F3F46] uppercase tracking-widest mb-3">
                ATS Optimized
              </p>
              <ul className="space-y-1.5">
                {[
                  "Single column layout",
                  "Real text — not image",
                  "Standard Helvetica font",
                  "No icons or graphics",
                  "Jake's resume format",
                  "1-page target",
                ].map((note) => (
                  <li key={note} className="flex items-center gap-2 text-[10px] text-[#52525B] font-mono">
                    <span className="w-1 h-1 rounded-full bg-emerald-500 shrink-0" />
                    {note}
                  </li>
                ))}
              </ul>
            </div>

            {/* Data source note */}
            <div className="pt-4 border-t border-white/[0.06] mt-auto">
              <p className="text-[9px] font-mono text-[#3F3F46] leading-relaxed">
                Generated from portfolio constants. Updates automatically when data changes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

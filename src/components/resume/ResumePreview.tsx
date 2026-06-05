"use client";

import type { ResumeData } from "@/lib/resume/types";

interface ResumePreviewProps {
  data: ResumeData;
}

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="mt-4 mb-1.5">
      <p className="text-[11px] font-bold tracking-widest uppercase text-black border-b border-black pb-0.5">
        {title}
      </p>
    </div>
  );
}

function EntryHeader({ left, right, sub }: { left: string; right?: string; sub?: string }) {
  return (
    <div className="mt-2">
      <div className="flex justify-between items-baseline gap-2">
        <span className="text-[10.5px] font-bold text-black leading-snug">{left}</span>
        {right && <span className="text-[9px] text-gray-600 shrink-0">{right}</span>}
      </div>
      {sub && <p className="text-[9.5px] italic text-gray-700">{sub}</p>}
    </div>
  );
}

function Bullet({ text }: { text: string }) {
  return (
    <div className="flex gap-1.5 mt-0.5">
      <span className="text-[9.5px] text-black mt-[0.5px] shrink-0">•</span>
      <p className="text-[9.5px] text-gray-800 leading-snug">{text}</p>
    </div>
  );
}

export function ResumePreview({ data }: ResumePreviewProps) {
  const { header, summary, education, experience, projects, skills, softSkills, leadership, certifications } = data;

  return (
    <div
      className="bg-white text-black"
      style={{
        fontFamily: "Helvetica, Arial, sans-serif",
        fontSize: "10px",
        lineHeight: "1.35",
        padding: "36px 40px",
        width: "100%",
        maxWidth: "750px",
        margin: "0 auto",
        minHeight: "1050px",
      }}
    >
      {/* ── HEADER ── */}
      <div className="text-center mb-2">
        <p className="text-[22px] font-bold tracking-wide text-black">{header.name}</p>
        <p className="text-[9.5px] text-gray-600 mt-0.5">{header.jobTitle}</p>
        <p className="text-[9px] text-gray-700 mt-1 leading-relaxed">
          {header.phone}
          <span className="mx-1.5 text-gray-400">|</span>
          {header.email}
          <span className="mx-1.5 text-gray-400">|</span>
          {header.linkedin}
          <span className="mx-1.5 text-gray-400">|</span>
          {header.github}
          {header.portfolio && (
            <>
              <span className="mx-1.5 text-gray-400">|</span>
              {header.portfolio}
            </>
          )}
          <span className="mx-1.5 text-gray-400">|</span>
          {header.location}
        </p>
      </div>

      {/* ── SUMMARY ── */}
      <SectionHeader title="Summary" />
      <p className="text-[9.5px] text-gray-800 leading-relaxed mt-1">{summary}</p>

      {/* ── EDUCATION ── */}
      <SectionHeader title="Education" />
      <EntryHeader
        left={education.institution}
        right={education.location}
        sub={`${education.degree} — ${education.field}  |  ${education.period}  |  CGPA: ${education.cgpa}`}
      />
      {education.highlights.map((h, i) => (
        <p key={i} className="text-[9px] text-gray-600 mt-0.5">{h}</p>
      ))}

      {/* ── EXPERIENCE ── */}
      <SectionHeader title="Experience" />
      {experience.map((exp, i) => (
        <div key={i}>
          <EntryHeader
            left={exp.role}
            right={exp.period}
            sub={`${exp.company} | ${exp.location} | ${exp.techStack.join(", ")}`}
          />
          {exp.bullets.map((b, j) => <Bullet key={j} text={b} />)}
        </div>
      ))}

      {/* ── PROJECTS ── */}
      <SectionHeader title="Projects" />
      {projects.map((proj, i) => (
        <div key={i}>
          <EntryHeader
            left={proj.title}
            right={proj.techStack.slice(0, 4).join(", ")}
          />
          {proj.bullets.map((b, j) => <Bullet key={j} text={b} />)}
        </div>
      ))}

      {/* ── SKILLS ── */}
      <SectionHeader title="Skills" />
      {skills.map((sg, i) => (
        <div key={i} className="flex gap-2 mt-1">
          <span className="text-[9.5px] font-bold text-black w-28 shrink-0">{sg.label}:</span>
          <span className="text-[9.5px] text-gray-800">{sg.items.join(", ")}</span>
        </div>
      ))}
      {softSkills && softSkills.length > 0 && (
        <div className="flex gap-2 mt-1">
          <span className="text-[9.5px] font-bold text-black w-28 shrink-0">Soft Skills:</span>
          <span className="text-[9.5px] text-gray-800">{softSkills.join(", ")}</span>
        </div>
      )}

      {/* ── LEADERSHIP ── */}
      <SectionHeader title="Leadership & Activities" />
      {leadership.map((l, i) => (
        <div key={i}>
          <EntryHeader
            left={`${l.role} — ${l.organization}`}
            right={l.period}
          />
          {l.bullets.map((b, j) => <Bullet key={j} text={b} />)}
        </div>
      ))}

      {/* ── CERTIFICATIONS ── */}
      <SectionHeader title="Certifications & Fellowships" />
      {certifications.map((c, i) => (
        <div key={i} className="flex justify-between mt-1">
          <span className="text-[9.5px] text-black">• {c.title}</span>
          <span className="text-[9px] text-gray-600">{c.issuer} | {c.date}</span>
        </div>
      ))}
    </div>
  );
}

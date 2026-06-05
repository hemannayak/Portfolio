// ─────────────────────────────────────────────────────────────────────────────
// DOCX Exporter
// Uses the `docx` package to generate an ATS-safe Word document.
// Standard formatting: no tables, no images, simple paragraph structure.
// ─────────────────────────────────────────────────────────────────────────────

import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  AlignmentType,
  BorderStyle,
  UnderlineType,
} from "docx";
import type { ResumeData } from "../types";

// ─── Helpers ──────────────────────────────────────────────────────────────────
function sectionHeading(text: string): Paragraph {
  return new Paragraph({
    text: text.toUpperCase(),
    heading: HeadingLevel.HEADING_2,
    thematicBreak: true,
    spacing: { before: 200, after: 60 },
    border: {
      bottom: {
        color: "000000",
        space: 1,
        style: BorderStyle.SINGLE,
        size: 6,
      },
    },
    run: {
      bold: true,
      size: 22,
      font: "Calibri",
    },
  });
}

function entryHeader(left: string, right: string): Paragraph {
  return new Paragraph({
    spacing: { before: 80, after: 20 },
    children: [
      new TextRun({ text: left, bold: true, size: 20, font: "Calibri" }),
      new TextRun({ text: "\t" + right, size: 18, color: "444444", font: "Calibri" }),
    ],
  });
}

function entrySubtitle(text: string): Paragraph {
  return new Paragraph({
    spacing: { after: 30 },
    children: [new TextRun({ text, italics: true, size: 19, color: "222222", font: "Calibri" })],
  });
}

function bullet(text: string): Paragraph {
  return new Paragraph({
    bullet: { level: 0 },
    spacing: { after: 20 },
    children: [new TextRun({ text, size: 19, font: "Calibri" })],
  });
}

function skillLine(label: string, items: string[]): Paragraph {
  return new Paragraph({
    spacing: { after: 30 },
    children: [
      new TextRun({ text: `${label}: `, bold: true, size: 19, font: "Calibri" }),
      new TextRun({ text: items.join(", "), size: 19, font: "Calibri" }),
    ],
  });
}

function certLine(title: string, right: string): Paragraph {
  return new Paragraph({
    spacing: { after: 20 },
    children: [
      new TextRun({ text: `• ${title}`, size: 19, font: "Calibri" }),
      new TextRun({ text: `  —  ${right}`, size: 18, color: "444444", font: "Calibri" }),
    ],
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// Build DOCX Document
// ─────────────────────────────────────────────────────────────────────────────
function buildDocxDocument(data: ResumeData): Document {
  const { header, education, experience, projects, skills, leadership, certifications } = data;

  const sections: Paragraph[] = [];

  // ── HEADER ──
  sections.push(
    new Paragraph({
      children: [new TextRun({ text: header.name, bold: true, size: 32, font: "Calibri" })],
      alignment: AlignmentType.CENTER,
      spacing: { after: 60 },
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 200 },
      children: [
        new TextRun({ text: header.email, size: 18, font: "Calibri" }),
        new TextRun({ text: "  |  ", size: 18, color: "888888", font: "Calibri" }),
        new TextRun({ text: header.linkedin, size: 18, font: "Calibri" }),
        new TextRun({ text: "  |  ", size: 18, color: "888888", font: "Calibri" }),
        new TextRun({ text: header.github, size: 18, font: "Calibri" }),
        ...(header.portfolio
          ? [
              new TextRun({ text: "  |  ", size: 18, color: "888888", font: "Calibri" }),
              new TextRun({ text: header.portfolio, size: 18, font: "Calibri" }),
            ]
          : []),
        new TextRun({ text: "  |  ", size: 18, color: "888888", font: "Calibri" }),
        new TextRun({ text: header.location, size: 18, font: "Calibri" }),
      ],
    })
  );

  // ── EDUCATION ──
  sections.push(sectionHeading("Education"));
  sections.push(entryHeader(education.institution, education.location));
  sections.push(
    entrySubtitle(
      `${education.degree} — ${education.field}  |  ${education.period}  |  CGPA: ${education.cgpa}`
    )
  );
  for (const h of education.highlights) {
    sections.push(
      new Paragraph({
        spacing: { after: 20 },
        children: [new TextRun({ text: h, size: 18, color: "444444", font: "Calibri" })],
      })
    );
  }

  // ── EXPERIENCE ──
  sections.push(sectionHeading("Experience"));
  for (const exp of experience) {
    sections.push(entryHeader(exp.role, exp.period));
    sections.push(entrySubtitle(`${exp.company} | ${exp.location} | ${exp.techStack.join(", ")}`));
    for (const b of exp.bullets) sections.push(bullet(b));
  }

  // ── PROJECTS ──
  sections.push(sectionHeading("Projects"));
  for (const proj of projects) {
    sections.push(entryHeader(proj.title, proj.techStack.slice(0, 4).join(", ")));
    for (const b of proj.bullets) sections.push(bullet(b));
  }

  // ── SKILLS ──
  sections.push(sectionHeading("Technical Skills"));
  for (const sg of skills) {
    sections.push(skillLine(sg.label, sg.items));
  }

  // ── LEADERSHIP ──
  sections.push(sectionHeading("Leadership & Activities"));
  for (const l of leadership) {
    sections.push(entryHeader(`${l.role} — ${l.organization}`, l.period));
    for (const b of l.bullets) sections.push(bullet(b));
  }

  // ── CERTIFICATIONS ──
  sections.push(sectionHeading("Certifications & Fellowships"));
  for (const c of certifications) {
    sections.push(certLine(c.title, `${c.issuer} | ${c.date}`));
  }

  return new Document({
    styles: {
      default: {
        document: {
          run: {
            font: "Calibri",
            size: 20,
            color: "000000",
          },
        },
      },
    },
    sections: [
      {
        properties: {
          page: {
            margin: {
              top: 720,
              right: 900,
              bottom: 720,
              left: 900,
            },
          },
        },
        children: sections,
      },
    ],
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// Export function — triggers browser download
// ─────────────────────────────────────────────────────────────────────────────
export async function downloadResumeDOCX(data: ResumeData): Promise<void> {
  const doc = buildDocxDocument(data);
  const blob = await Packer.toBlob(doc);
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Pangoth_Hemanth_Nayak_Resume.docx";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

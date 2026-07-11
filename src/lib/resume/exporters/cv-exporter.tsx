// ─────────────────────────────────────────────────────────────────────────────
// CV PDF Exporter — Full multi-page Curriculum Vitae
// Uses @react-pdf/renderer. Multi-page enabled, detailed format.
// ─────────────────────────────────────────────────────────────────────────────

import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  pdf,
} from "@react-pdf/renderer";
import type { ResumeData } from "../types";

// ─── Styles ───────────────────────────────────────────────────────────────────
const s = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 10,
    paddingTop: 40,
    paddingBottom: 40,
    paddingLeft: 48,
    paddingRight: 48,
    color: "#000000",
    backgroundColor: "#ffffff",
  },
  // Header
  name: { fontSize: 22, fontFamily: "Helvetica-Bold", textAlign: "center", marginBottom: 2 },
  jobTitle: { fontSize: 11, textAlign: "center", color: "#333", marginBottom: 4 },
  contactRow: { flexDirection: "row", justifyContent: "center", flexWrap: "wrap", gap: 4, marginBottom: 8 },
  contactText: { fontSize: 9, color: "#111" },
  sep: { fontSize: 9, color: "#555", marginHorizontal: 3 },
  // Summary
  summaryText: { fontSize: 9.5, lineHeight: 1.45, color: "#111", marginBottom: 10 },
  // Section
  section: { marginBottom: 8 },
  sectionTitle: {
    fontSize: 11, fontFamily: "Helvetica-Bold", textTransform: "uppercase",
    letterSpacing: 0.8, borderBottomWidth: 1, borderBottomColor: "#000",
    paddingBottom: 2, marginBottom: 5,
  },
  // Entry
  entryItem: { marginBottom: 6 },
  entryRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 1 },
  entryTitle: { fontSize: 10, fontFamily: "Helvetica-Bold" },
  entryRight: { fontSize: 9, color: "#333" },
  entrySubtitle: { fontSize: 9.5, fontFamily: "Helvetica-Oblique", marginBottom: 2, color: "#111" },
  // Bullet
  bulletRow: { flexDirection: "row", marginBottom: 1.5, paddingLeft: 2 },
  bulletDot: { fontSize: 9.5, width: 10, color: "#000" },
  bulletText: { fontSize: 9.5, flex: 1, lineHeight: 1.35, color: "#111" },
  // Skills
  skillRow: { flexDirection: "row", marginBottom: 2 },
  skillLabel: { fontSize: 9.5, fontFamily: "Helvetica-Bold", width: 140 },
  skillValues: { fontSize: 9.5, flex: 1, color: "#111" },
  // Cert
  certRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 2 },
  certTitle: { fontSize: 9.5, flex: 1, color: "#111" },
  certRight: { fontSize: 9, color: "#333", textAlign: "right", width: 160 },
  // Education
  eduRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 1 },
  eduTitle: { fontSize: 10, fontFamily: "Helvetica-Bold" },
  eduRight: { fontSize: 9, color: "#333" },
  eduSub: { fontSize: 9.5, fontFamily: "Helvetica-Oblique", marginBottom: 1.5 },
  eduNote: { fontSize: 9, color: "#333" },
  // Footer
  footer: { position: "absolute", bottom: 20, left: 48, right: 48, flexDirection: "row", justifyContent: "space-between" },
  footerText: { fontSize: 7.5, color: "#999" },
});

function Bullet({ text }: { text: string }) {
  return (
    <View style={s.bulletRow}>
      <Text style={s.bulletDot}>•</Text>
      <Text style={s.bulletText}>{text}</Text>
    </View>
  );
}

function SectionHeader({ title }: { title: string }) {
  return <Text style={s.sectionTitle}>{title}</Text>;
}

// ─── CV Document ──────────────────────────────────────────────────────────────
function CVDocument({ data }: { data: ResumeData }) {
  const { header, education, experience, projects, skills, leadership, certifications } = data;

  return (
    <Document
      title={`${header.name} — Curriculum Vitae`}
      author={header.name}
      creator="Portfolio CV Generator"
      subject="Curriculum Vitae"
    >
      <Page size="A4" style={s.page} wrap>

        {/* HEADER */}
        <Text style={s.name}>{header.name}</Text>
        <Text style={s.jobTitle}>{header.jobTitle}</Text>
        <View style={s.contactRow}>
          <Text style={s.contactText}>{header.phone}</Text>
          <Text style={s.sep}>|</Text>
          <Text style={s.contactText}>{header.email}</Text>
          <Text style={s.sep}>|</Text>
          <Text style={s.contactText}>{header.linkedin}</Text>
          <Text style={s.sep}>|</Text>
          <Text style={s.contactText}>{header.github}</Text>
          {header.portfolio && (
            <>
              <Text style={s.sep}>|</Text>
              <Text style={s.contactText}>{header.portfolio}</Text>
            </>
          )}
          <Text style={s.sep}>|</Text>
          <Text style={s.contactText}>{header.location}</Text>
        </View>

        {/* SUMMARY */}
        <View style={s.section}>
          <SectionHeader title="Summary" />
          <Text style={s.summaryText}>{data.summary}</Text>
        </View>

        {/* EDUCATION */}
        <View style={s.section}>
          <SectionHeader title="Education" />
          <View style={s.entryItem}>
            <View style={s.eduRow}>
              <Text style={s.eduTitle}>{education.institution}</Text>
              <Text style={s.eduRight}>{education.location}</Text>
            </View>
            <View style={s.eduRow}>
              <Text style={s.eduSub}>{education.degree} — {education.field}</Text>
              <Text style={s.eduRight}>{education.period} | CGPA: {education.cgpa}</Text>
            </View>
            {education.highlights.map((h, i) => (
              <Text key={i} style={s.eduNote}>{h}</Text>
            ))}
          </View>
        </View>

        {/* EXPERIENCE */}
        <View style={s.section}>
          <SectionHeader title="Professional Experience" />
          {experience.map((exp, i) => (
            <View key={i} style={s.entryItem} wrap={false}>
              <View style={s.entryRow}>
                <Text style={s.entryTitle}>{exp.role}</Text>
                <Text style={s.entryRight}>{exp.period}</Text>
              </View>
              <Text style={s.entrySubtitle}>
                {exp.company} | {exp.location} | {exp.techStack.join(", ")}
              </Text>
              {exp.bullets.map((b, j) => (
                <Bullet key={j} text={b} />
              ))}
            </View>
          ))}
        </View>

        {/* PROJECTS */}
        <View style={s.section}>
          <SectionHeader title="Projects" />
          {projects.map((proj, i) => (
            <View key={i} style={s.entryItem} wrap={false}>
              <View style={s.entryRow}>
                <Text style={s.entryTitle}>{proj.title}</Text>
                <Text style={s.entryRight}>{proj.techStack.slice(0, 5).join(", ")}</Text>
              </View>
              {proj.bullets.map((b, j) => (
                <Bullet key={j} text={b} />
              ))}
            </View>
          ))}
        </View>

        {/* SKILLS */}
        <View style={s.section}>
          <SectionHeader title="Technical Skills" />
          {skills.map((sg, i) => (
            <View key={i} style={s.skillRow}>
              <Text style={s.skillLabel}>{sg.label}:</Text>
              <Text style={s.skillValues}>{sg.items.join(", ")}</Text>
            </View>
          ))}
          {data.softSkills && data.softSkills.length > 0 && (
            <View style={s.skillRow}>
              <Text style={s.skillLabel}>Soft Skills:</Text>
              <Text style={s.skillValues}>{data.softSkills.join(", ")}</Text>
            </View>
          )}
        </View>

        {/* LEADERSHIP */}
        <View style={s.section}>
          <SectionHeader title="Leadership & Activities" />
          {leadership.map((l, i) => (
            <View key={i} style={s.entryItem} wrap={false}>
              <View style={s.entryRow}>
                <Text style={s.entryTitle}>{l.role} — {l.organization}</Text>
                <Text style={s.entryRight}>{l.period}</Text>
              </View>
              {l.bullets.map((b, j) => (
                <Bullet key={j} text={b} />
              ))}
            </View>
          ))}
        </View>

        {/* CERTIFICATIONS */}
        <View style={s.section}>
          <SectionHeader title="Certifications & Fellowships" />
          {certifications.map((c, i) => (
            <View key={i} style={s.certRow}>
              <Text style={s.certTitle}>{c.title}</Text>
              <Text style={s.certRight}>{c.issuer} | {c.date}</Text>
            </View>
          ))}
        </View>

        {/* Page footer */}
        <View style={s.footer} fixed>
          <Text style={s.footerText}>Pangoth Hemanth Nayak — Curriculum Vitae</Text>
          <Text style={s.footerText} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} />
        </View>

      </Page>
    </Document>
  );
}

// ─── Export ────────────────────────────────────────────────────────────────────
export async function downloadCVPDF(data: ResumeData): Promise<void> {
  const blob = await pdf(<CVDocument data={data} />).toBlob();
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Pangoth_Hemanth_Nayak_CV.pdf";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

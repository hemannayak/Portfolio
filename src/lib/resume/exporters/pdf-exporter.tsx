// ─────────────────────────────────────────────────────────────────────────────
// PDF Exporter — Jake's ATS Resume Template
// Uses @react-pdf/renderer to produce a genuine text-based PDF.
// ATS-safe: single column, no images, no icons, standard fonts, selectable text.
// ─────────────────────────────────────────────────────────────────────────────

import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  pdf,
  Font,
} from "@react-pdf/renderer";
import type { ResumeData } from "../types";

// ─── Register standard fonts (system-safe, ATS-safe) ─────────────────────────
Font.register({
  family: "Times New Roman",
  fonts: [
    { src: "https://fonts.gstatic.com/s/notoserifdisplay/v13/buERppa9f8_vkXaZLAgP0G5Wi6QmA1QaeYah2sovLCDq_ZgLyt3idQfktuc.woff2" },
  ],
});

// ─── ATS-safe stylesheet ──────────────────────────────────────────────────────
const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 10,
    paddingTop: 36,
    paddingBottom: 36,
    paddingLeft: 45,
    paddingRight: 45,
    color: "#000000",
    backgroundColor: "#ffffff",
  },

  // ── Header ──
  name: {
    fontSize: 20,
    fontFamily: "Helvetica-Bold",
    textAlign: "center",
    letterSpacing: 0.5,
    marginBottom: 2,
  },
  jobTitle: {
    fontSize: 10,
    textAlign: "center",
    color: "#333333",
    marginBottom: 3,
  },
  contactRow: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: 4,
    marginBottom: 6,
  },
  contactText: {
    fontSize: 9,
    color: "#111111",
  },
  contactSep: {
    fontSize: 9,
    color: "#555555",
    marginHorizontal: 3,
  },

  // ── Summary ──
  summaryText: {
    fontSize: 9.5,
    lineHeight: 1.4,
    color: "#111111",
    marginBottom: 8,
  },

  // ── Section ──
  sectionContainer: {
    marginBottom: 7,
  },
  sectionHeader: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    textTransform: "uppercase",
    letterSpacing: 0.8,
    borderBottomWidth: 0.8,
    borderBottomColor: "#000000",
    paddingBottom: 1.5,
    marginBottom: 4,
  },

  // ── Entry (experience/project/leadership) ──
  entryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 1,
  },
  entryTitle: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
  },
  entryRight: {
    fontSize: 9,
    color: "#333333",
  },
  entrySubtitle: {
    fontSize: 9.5,
    fontFamily: "Helvetica-Oblique",
    marginBottom: 2,
    color: "#111111",
  },
  entryItem: {
    marginBottom: 5,
  },

  // ── Bullet ──
  bulletRow: {
    flexDirection: "row",
    marginBottom: 1.5,
    paddingLeft: 2,
  },
  bulletDot: {
    fontSize: 9.5,
    width: 10,
    color: "#000000",
  },
  bulletText: {
    fontSize: 9.5,
    flex: 1,
    lineHeight: 1.35,
    color: "#111111",
  },

  // ── Skills ──
  skillRow: {
    flexDirection: "row",
    marginBottom: 2,
  },
  skillLabel: {
    fontSize: 9.5,
    fontFamily: "Helvetica-Bold",
    width: 120,
  },
  skillValues: {
    fontSize: 9.5,
    flex: 1,
    color: "#111111",
  },

  // ── Certifications ──
  certRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 1.5,
  },
  certTitle: {
    fontSize: 9.5,
    flex: 1,
    color: "#111111",
  },
  certRight: {
    fontSize: 9,
    color: "#333333",
    textAlign: "right",
    width: 120,
  },

  // ── Education ──
  eduRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 1,
  },
  eduTitle: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
  },
  eduRight: {
    fontSize: 9,
    color: "#333333",
  },
  eduSub: {
    fontSize: 9.5,
    fontFamily: "Helvetica-Oblique",
    marginBottom: 1.5,
  },
  eduNote: {
    fontSize: 9,
    color: "#333333",
  },
});

// ─── Bullet component ─────────────────────────────────────────────────────────
function Bullet({ text }: { text: string }) {
  return (
    <View style={styles.bulletRow}>
      <Text style={styles.bulletDot}>•</Text>
      <Text style={styles.bulletText}>{text}</Text>
    </View>
  );
}

// ─── Section header component ─────────────────────────────────────────────────
function SectionHeader({ title }: { title: string }) {
  return <Text style={styles.sectionHeader}>{title}</Text>;
}

// ─────────────────────────────────────────────────────────────────────────────
// Jake's ATS Resume Document
// ─────────────────────────────────────────────────────────────────────────────
function ATSResumeDocument({ data }: { data: ResumeData }) {
  const { header, education, experience, projects, skills, leadership, certifications } = data;

  return (
    <Document
      title={`${header.name} — Resume`}
      author={header.name}
      creator="Portfolio Resume Generator"
      subject="Software Engineering Resume"
    >
      <Page size="A4" style={styles.page}>

        {/* ── HEADER ── */}
        <Text style={styles.name}>{header.name}</Text>
        <Text style={styles.jobTitle}>{header.jobTitle}</Text>
        <View style={styles.contactRow}>
          <Text style={styles.contactText}>{header.phone}</Text>
          <Text style={styles.contactSep}>|</Text>
          <Text style={styles.contactText}>{header.email}</Text>
          <Text style={styles.contactSep}>|</Text>
          <Text style={styles.contactText}>{header.linkedin}</Text>
          <Text style={styles.contactSep}>|</Text>
          <Text style={styles.contactText}>{header.github}</Text>
          {header.portfolio && (
            <>
              <Text style={styles.contactSep}>|</Text>
              <Text style={styles.contactText}>{header.portfolio}</Text>
            </>
          )}
          <Text style={styles.contactSep}>|</Text>
          <Text style={styles.contactText}>{header.location}</Text>
        </View>

        {/* ── SUMMARY ── */}
        <View style={styles.sectionContainer}>
          <SectionHeader title="Summary" />
          <Text style={styles.summaryText}>{data.summary}</Text>
        </View>

        {/* ── EDUCATION ── */}
        <View style={styles.sectionContainer}>
          <SectionHeader title="Education" />
          <View style={styles.entryItem}>
            <View style={styles.eduRow}>
              <Text style={styles.eduTitle}>{education.institution}</Text>
              <Text style={styles.eduRight}>{education.location}</Text>
            </View>
            <View style={styles.eduRow}>
              <Text style={styles.eduSub}>{education.degree} — {education.field}</Text>
              <Text style={styles.eduRight}>{education.period} | CGPA: {education.cgpa}</Text>
            </View>
            {education.highlights.map((h, i) => (
              <Text key={i} style={styles.eduNote}>{h}</Text>
            ))}
          </View>
        </View>

        {/* ── EXPERIENCE ── */}
        <View style={styles.sectionContainer}>
          <SectionHeader title="Experience" />
          {experience.map((exp, i) => (
            <View key={i} style={styles.entryItem}>
              <View style={styles.entryRow}>
                <Text style={styles.entryTitle}>{exp.role}</Text>
                <Text style={styles.entryRight}>{exp.period}</Text>
              </View>
              <Text style={styles.entrySubtitle}>
                {exp.company} | {exp.location} | {exp.techStack.join(", ")}
              </Text>
              {exp.bullets.map((b, j) => (
                <Bullet key={j} text={b} />
              ))}
            </View>
          ))}
        </View>

        {/* ── PROJECTS ── */}
        <View style={styles.sectionContainer}>
          <SectionHeader title="Projects" />
          {projects.map((proj, i) => (
            <View key={i} style={styles.entryItem}>
              <View style={styles.entryRow}>
                <Text style={styles.entryTitle}>{proj.title}</Text>
                <Text style={styles.entryRight}>{proj.techStack.slice(0, 4).join(", ")}</Text>
              </View>
              {proj.bullets.map((b, j) => (
                <Bullet key={j} text={b} />
              ))}
            </View>
          ))}
        </View>

        {/* ── SKILLS ── */}
        <View style={styles.sectionContainer}>
          <SectionHeader title="Skills" />
          {skills.map((sg, i) => (
            <View key={i} style={styles.skillRow}>
              <Text style={styles.skillLabel}>{sg.label}:</Text>
              <Text style={styles.skillValues}>{sg.items.join(", ")}</Text>
            </View>
          ))}
          {data.softSkills && data.softSkills.length > 0 && (
            <View style={styles.skillRow}>
              <Text style={styles.skillLabel}>Soft Skills:</Text>
              <Text style={styles.skillValues}>{data.softSkills.join(", ")}</Text>
            </View>
          )}
        </View>

        {/* ── LEADERSHIP ── */}
        <View style={styles.sectionContainer}>
          <SectionHeader title="Leadership & Activities" />
          {leadership.map((l, i) => (
            <View key={i} style={styles.entryItem}>
              <View style={styles.entryRow}>
                <Text style={styles.entryTitle}>{l.role} — {l.organization}</Text>
                <Text style={styles.entryRight}>{l.period}</Text>
              </View>
              {l.bullets.map((b, j) => (
                <Bullet key={j} text={b} />
              ))}
            </View>
          ))}
        </View>

        {/* ── CERTIFICATIONS ── */}
        <View style={styles.sectionContainer}>
          <SectionHeader title="Certifications & Fellowships" />
          {certifications.map((c, i) => (
            <View key={i} style={styles.certRow}>
              <Text style={styles.certTitle}>{c.title}</Text>
              <Text style={styles.certRight}>{c.issuer} | {c.date}</Text>
            </View>
          ))}
        </View>

      </Page>
    </Document>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Export functions
// ─────────────────────────────────────────────────────────────────────────────

/** Triggers a PDF download in the browser */
export async function downloadResumePDF(data: ResumeData): Promise<void> {
  const blob = await pdf(<ATSResumeDocument data={data} />).toBlob();
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `Pangoth_Hemanth_Nayak_Resume.pdf`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/** Returns a blob URL for embedding in an iframe preview */
export async function getResumePDFBlobUrl(data: ResumeData): Promise<string> {
  const blob = await pdf(<ATSResumeDocument data={data} />).toBlob();
  return URL.createObjectURL(blob);
}

export { ATSResumeDocument };

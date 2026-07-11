// ─────────────────────────────────────────────────────────────────────────────
// CV Generator — Full Portfolio Curriculum Vitae
// Pulls ALL data from portfolio constants — every project, experience,
// certification, leadership role. Multi-page, detailed.
// ─────────────────────────────────────────────────────────────────────────────

import { experienceData } from "@/constants/experience";
import { projectsData } from "@/constants/projects";
import { skillsData } from "@/constants/skills";
import { leadershipData } from "@/constants/leadership";
import { certificates } from "@/constants/certifications";
import type { ResumeData, ResumeSkillGroup, ResumeProject, ResumeExperience } from "./types";

// ─── Person info (matches ATS resume) ─────────────────────────────────────────
const PERSON = {
  name: "Pangoth Hemanth Nayak",
  jobTitle: "Data Science & AI Engineer | NLP Research Intern",
  phone: "+91-8328232607",
  email: "official.hemanthnayakpangoth@gmail.com",
  linkedin: "linkedin.com/in/phemanthnayak",
  github: "github.com/hemannayak",
  portfolio: "hemanthnayak.dev",
  location: "Hyderabad, India",
};

const CV_SUMMARY =
  "4th-year BTech Computer Science (Data Science) student at HITAM, Hyderabad with hands-on NLP research experience at IIIT Hyderabad — LTRC. Experienced across full-stack development, machine learning pipelines, REST API design, and speech/text processing research. Active student leader, open-source contributor, and participant in national-level hackathons. Seeking impactful roles in AI, Data Science, and Software Engineering.";

const SOFT_SKILLS = [
  "Problem-solving",
  "Analytical Thinking",
  "Teamwork",
  "Strong Communication",
  "Ability to Work Independently",
  "Attention to Detail",
  "Leadership",
  "Time Management",
];

// ─── Strip duration suffix ───────────────────────────────────────────────────
function cleanDate(duration: string): string {
  return duration.replace(/\s*\(\d+\s*mos?\)/gi, "").trim();
}

// ─── Build ALL experience ─────────────────────────────────────────────────────
function buildAllExperience(): ResumeExperience[] {
  return experienceData.map((exp) => ({
    role: exp.role,
    company: exp.company,
    location: exp.location,
    period: cleanDate(exp.duration),
    bullets: exp.bullets,         // ALL bullets, not trimmed
    techStack: exp.techStack,
  }));
}

// ─── Build ALL projects ───────────────────────────────────────────────────────
function buildAllProjects(): ResumeProject[] {
  return projectsData.map((p) => ({
    title: p.title,
    techStack: p.techStack,
    bullets: [p.approach, p.outcome].filter(Boolean),
  }));
}

// ─── Build ALL skills ─────────────────────────────────────────────────────────
function buildAllSkillGroups(): ResumeSkillGroup[] {
  return skillsData.map((group) => ({
    label: group.category,
    items: group.skills,
  }));
}

// ─── Build ALL leadership ─────────────────────────────────────────────────────
function buildAllLeadership() {
  return leadershipData.map((l) => ({
    role: l.role,
    organization: l.organization,
    period: l.duration,
    bullets: [
      l.description,
      "Responsibilities: " + l.responsibilities.join(", "),
      "Takeaway: " + l.learning,
    ].filter(Boolean),
  }));
}

// ─── Build ALL certifications ─────────────────────────────────────────────────
function buildAllCertifications() {
  return certificates.map((c) => ({
    title: c.title,
    issuer: c.issuer,
    date: c.date,
  }));
}

// ─────────────────────────────────────────────────────────────────────────────
// Main CV generator — comprehensive, multi-page
// ─────────────────────────────────────────────────────────────────────────────
export function generateCVData(): ResumeData {
  return {
    variant: "general",

    header: {
      name: PERSON.name,
      jobTitle: PERSON.jobTitle,
      phone: PERSON.phone,
      email: PERSON.email,
      linkedin: PERSON.linkedin,
      github: PERSON.github,
      portfolio: PERSON.portfolio,
      location: PERSON.location,
    },

    summary: CV_SUMMARY,

    education: {
      degree: "Bachelor of Technology (BTech)",
      field: "Computer Science Engineering — Data Science",
      institution: "Hyderabad Institute of Technology and Management (HITAM)",
      location: "Hyderabad, India",
      period: "2023 – 2027",
      cgpa: "8.5+",
      highlights: [
        "Relevant Coursework: Deep Learning, NLP, Probability & Statistics, Algorithms, DBMS, Big Data Analytics, Operating Systems, Data Structures",
      ],
    },

    experience: buildAllExperience(),
    projects: buildAllProjects(),
    skills: buildAllSkillGroups(),
    softSkills: SOFT_SKILLS,
    leadership: buildAllLeadership(),
    certifications: buildAllCertifications(),
  };
}

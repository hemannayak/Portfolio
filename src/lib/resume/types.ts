// ─────────────────────────────────────────────────────────────────────────────
// Resume System — Types
// ─────────────────────────────────────────────────────────────────────────────

export type ResumeVariant = "general" | "nlp" | "data-science" | "full-stack" | "sde";

export interface ResumeHeader {
  name: string;
  jobTitle: string;         // NEW — ATS sections check
  email: string;
  phone: string;            // NEW — was optional, now required
  linkedin: string;
  github: string;
  portfolio?: string;
  location: string;
}

export interface ResumeEducation {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  cgpa: string;
  highlights: string[];
}

export interface ResumeExperience {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
  techStack: string[];
}

export interface ResumeProject {
  title: string;
  techStack: string[];
  bullets: string[];
}

export interface ResumeSkillGroup {
  label: string;
  items: string[];
}

export interface ResumeLeadership {
  role: string;
  organization: string;
  period: string;
  bullets: string[];
}

export interface ResumeCertification {
  title: string;
  issuer: string;
  date: string;
}

// ─── Assembled resume document ───────────────────────────────────────────────
export interface ResumeData {
  variant: ResumeVariant;
  header: ResumeHeader;
  summary: string;          // NEW — ATS keyword density at top
  education: ResumeEducation;
  experience: ResumeExperience[];
  projects: ResumeProject[];
  skills: ResumeSkillGroup[];
  softSkills: string[];     // NEW — ATS sections check
  leadership: ResumeLeadership[];
  certifications: ResumeCertification[];
}

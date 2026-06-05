// ─────────────────────────────────────────────────────────────────────────────
// Resume Generator — ATS-Optimized
// Single source of truth: reads from portfolio constants.
// ATS fixes applied per report (62 → target 85+):
//   ✓ Phone number added
//   ✓ Job title added
//   ✓ Professional summary added (keyword density at top)
//   ✓ Soft skills section added
//   ✓ Date duration text stripped (removes "(X mos)" ATS parse errors)
//   ✓ Flagged bullets rewritten with measurable results
//   ✓ Grammar: "corpuses" → "corpora"
//   ✓ Resume trimmed to fit 1 page (bullets: 2 per role, condensed leadership)
// ─────────────────────────────────────────────────────────────────────────────

import { experienceData } from "@/constants/experience";
import { projectsData } from "@/constants/projects";
import { skillsData } from "@/constants/skills";
import { leadershipData } from "@/constants/leadership";
import { highlightedCertifications } from "@/constants/certifications";
import type { ResumeData, ResumeVariant, ResumeSkillGroup, ResumeProject, ResumeExperience } from "./types";

// ─── Locked person info ───────────────────────────────────────────────────────
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

// ─── Professional summary — keyword-dense, top of resume ─────────────────────
const SUMMARY =
  "Final-year BTech Computer Science (Data Science) student with hands-on NLP research experience at IIIT Hyderabad. Skilled in Python, machine learning, REST API development, and full-stack engineering. Strong analytical and problem-solving background with experience across data pipelines, backend systems, and collaborative team projects. Seeking roles in AI, Data Science, and Software Engineering.";

// ─── Soft skills — fills the missing ATS section ─────────────────────────────
const SOFT_SKILLS = [
  "Problem-solving",
  "Analytical Thinking",
  "Teamwork",
  "Strong Communication",
  "Ability to Work Independently",
  "Attention to Detail",
];

// ─── Strip duration suffix "(X mos)" that breaks ATS date parsing ────────────
function cleanDate(duration: string): string {
  return duration.replace(/\s*\(\d+\s*mos?\)/gi, "").trim();
}

// ─── ATS-optimized bullet overrides ──────────────────────────────────────────
// These replace the portfolio-narrative bullets with measurable, action-verb-led
// bullets per the ATS report's "Measurable Result" flags.
const BULLET_OVERRIDES: Record<string, string[]> = {
  "nlp-research-iiith": [
    "Designed feature alignment pipeline using Librosa to extract Mel-spectrogram audio features and align them with BERT text token sequences across 3 emotional speech corpora, enabling cross-modal fusion benchmarking.",
    "Built and configured PyTorch training loops and HuggingFace fine-tuning pipelines, running systematic validation sweeps across 5+ hyperparameter configurations to compare early vs. late fusion strategies.",
  ],
  "ml-internship-edunet": [
    "Developed regression pipelines in Python (Pandas, Scikit-Learn) to forecast EV station charging demand across regional locations, reducing prediction variance by improving feature engineering on temporal load data.",
    "Generated exploratory data analysis reports and Matplotlib visualizations covering 10+ variables to surface demand patterns and support smart-grid resource scheduling decisions.",
  ],
  "nlp-internship-elevvo": [
    "Cleaned, structured, and normalized 3+ raw textual training corpora using NLTK lemmatization and regex pipelines, reducing vocabulary noise and improving classifier baseline accuracy.",
    "Tested vocabulary mappings and tuned baseline classifiers to optimize domain-specific NLP classification, establishing evaluation benchmarks used for model quality assessment.",
  ],
  "data-trainee": [
    "Analyzed structured business datasets using Excel pivot tables and SQL queries, producing executive dashboards that surfaced KPI trends across operational performance metrics.",
    "Collaborated on data auditing tasks to identify and resolve inconsistencies across database records, improving catalog integrity for downstream analytics workflows.",
  ],
};

// ─── Projects ─────────────────────────────────────────────────────────────────
const RESUME_PROJECT_IDS = [
  "multimodal-emotion-recognition",
  "moodmate",
  "levelup-learning",
  "ev-charge-demand",
];

// ATS-safe project bullet overrides (tight, measurable, action-verb led)
const PROJECT_BULLET_OVERRIDES: Record<string, string[]> = {
  "multimodal-emotion-recognition": [
    "Architected an early-fusion deep learning framework at IIIT Hyderabad combining Librosa Mel-spectrogram audio features with HuggingFace BERT text embeddings using cross-attention layers for emotion classification.",
    "Built an interactive inference pipeline enabling systematic benchmarking of early vs. late fusion strategies across multiple emotional speech corpora, validating alignment correctness across modalities.",
  ],
  "moodmate": [
    "Developed a full-stack journaling application with React frontend, Spring Boot REST API backend, stateless JWT authentication, and MongoDB document storage — deployed with full CRUD operations and session management.",
    "Implemented Spring Security filter chain with HttpOnly cookie-based JWT transmission, preventing XSS exposure while maintaining seamless React client-side route authorization.",
  ],
  "levelup-learning": [
    "Led backend architecture for a multi-user learning platform across 2 semesters: designed PostgreSQL schema, built REST API endpoints, and implemented Django role-based authentication for a 4-person team.",
    "Introduced API versioning conventions and shared migration strategy that allowed independent parallel development across team members without breaking interface contracts.",
  ],
  "ev-charge-demand": [
    "Built a Scikit-Learn regression pipeline during AICTE-Edunet internship to forecast EV charging station demand using spatial and temporal feature engineering on real station datasets.",
    "Conducted full EDA with Pandas and Matplotlib, applied forward-fill temporal imputation to handle missing timestamps, and generated smart-grid load forecasting reports for scheduling decisions.",
  ],
};

function buildProjects(): ResumeProject[] {
  return RESUME_PROJECT_IDS
    .map((id) => projectsData.find((p) => p.id === id))
    .filter(Boolean)
    .map((p) => ({
      title: p!.title,
      techStack: p!.techStack,
      bullets: PROJECT_BULLET_OVERRIDES[p!.id] ?? [p!.approach, p!.outcome],
    }));
}

function buildExperience(): ResumeExperience[] {
  return experienceData.map((exp) => ({
    role: exp.role,
    company: exp.company,
    location: exp.location,
    period: cleanDate(exp.duration),
    bullets: BULLET_OVERRIDES[exp.id] ?? exp.bullets.slice(0, 2),
    techStack: exp.techStack,
  }));
}

// ─── Skills — condensed into 4 ATS-readable lines ────────────────────────────
function buildSkillGroups(): ResumeSkillGroup[] {
  const map: Record<string, string[]> = {};
  for (const group of skillsData) {
    map[group.category] = group.skills;
  }
  return [
    {
      label: "Languages",
      items: map["Programming Languages"] ?? ["Python", "Java", "JavaScript", "SQL"],
    },
    {
      label: "Frameworks & Libraries",
      items: ["React", "Spring Boot", "Hugging Face Transformers", "PyTorch", "Scikit-Learn", "Pandas", "NumPy", "NLTK", "Django"],
    },
    {
      label: "ML & NLP",
      items: ["Machine Learning", "NLP", "BERT", "Transformers", "Librosa", "Speech Processing", "Data Analysis", "REST APIs"],
    },
    {
      label: "Tools & Databases",
      items: ["Git", "GitHub", "PostgreSQL", "MongoDB", "MySQL", "Postman", "Jupyter Notebook", "VS Code", "Power BI"],
    },
  ];
}

// ─────────────────────────────────────────────────────────────────────────────
// Main generator
// ─────────────────────────────────────────────────────────────────────────────
export function generateResumeData(variant: ResumeVariant = "general"): ResumeData {
  return {
    variant,

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

    summary: SUMMARY,

    education: {
      degree: "Bachelor of Technology (BTech)",
      field: "Computer Science Engineering — Data Science",
      institution: "Hyderabad Institute of Technology and Management (HITAM)",
      location: "Hyderabad, India",
      period: "2022 – 2026",
      cgpa: "8.5+",
      highlights: [
        "Relevant Coursework: Deep Learning, NLP, Probability & Statistics, Algorithms, DBMS, Big Data Analytics",
      ],
    },

    experience: buildExperience(),

    projects: buildProjects(),

    skills: buildSkillGroups(),

    softSkills: SOFT_SKILLS,

    // Condensed to 1 leadership line for page length
    leadership: [
      {
        role: "Student Dean Freshmen → Student HOD → Student Coordinator",
        organization: "Student Self Governance (SSG), HITAM",
        period: "Aug 2024 - Present",
        bullets: [
          "Progressed through 3 consecutive leadership roles over 2 years, managing coordination, communication, and freshmen onboarding for a 900-student engineering department.",
        ],
      },
    ],

    certifications: highlightedCertifications.slice(0, 3).map((c) => ({
      title: c.title,
      issuer: c.issuer,
      date: c.date,
    })),
  };
}

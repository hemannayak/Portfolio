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
import { certificates } from "@/constants/certifications";
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
  "4th-year BTech Computer Science (Data Science) student with hands-on NLP research experience at IIIT Hyderabad. Skilled in Python, machine learning, REST API development, and full-stack engineering. Strong analytical and problem-solving background with experience across data pipelines, backend systems, and collaborative team projects. Seeking roles in AI, Data Science, and Software Engineering.";

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
  "nlp-research-iiith-onsite": [
    "Conducting on-site speech processing research at LTRC, KCIS, extracting STFT and Linear Prediction features to model speech excitation and prosody parameters.",
    "Developing deep learning models for speaker and emotion recognition using the SpeechBrain framework on large-scale acoustic datasets.",
  ],
  "callhealth-internship": [
    "Co-developed the Flutter client-side UI and Dart application controllers for 'Prachtiz' (MVP 1), an AI clinical documentation system utilizing Deepgram Nova-3 Medical STT and GPT-4o.",
    "Built Python FastAPI endpoints and ML models for Doctor Delay Prediction (ETA), AI Doctor Brief generation, and AI Queue Optimization, accelerating patient throughput.",
  ],
  "nlp-research-iiith": [
    "Developed VoiceScope India, a 6-accent classifier combining MFCCs and HuBERT Layer 9 embeddings to achieve 99.87% validation and 91.91% child test generalization.",
    "Built a multimodal early-fusion emotion framework combining audio (CNN+BiLSTM+Attention) and text (DistilBERT) encoders on TESS, deployed with an interactive Streamlit app.",
  ],
  "ml-internship-edunet": [
    "Built and deployed an interactive time-series forecasting dashboard in Streamlit predicting regional EV adoption growth over a 1-5 year horizon, integrated with downloadable CSV reports.",
    "Engineered lag and rolling mean features and optimized a Random Forest Regressor to achieve a test RMSE of 0.06 and an R² of 1.00 on monthly registrations.",
  ],
  "nlp-internship-elevvo": [
    "Trained classical classifiers and custom deep learning models (MLP, Bidirectional LSTM) in Keras and Scikit-Learn to perform text classification and Named Entity Recognition (NER) with up to 96.8% token accuracy.",
    "Engineered text pre-processing and vectorization pipelines (TF-IDF, Bag-of-Words) in Python, achieving 99.6% accuracy on a 44.8K sample dataset for misinformation detection.",
  ],
  "data-trainee": [
    "Developed interactive Power BI dashboards detailing CTR, CPC, and ad spend metrics for 33 campaigns of Globalshala's Superhero U initiative, identifying highest ROI demographic targets.",
    "Analyzed campaign dataset to flag ₹5.9K in misaligned spend across out-of-target age segments (13-17 and 25-34), recommending budget reallocations to optimize CPC (₹5.68).",
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
  "viala": [
    "Developed Viala, a circular pharmacy platform enforcing FEFO inventory safety zones (Green, Yellow, Red, Black) with automated re-allocation workflows.",
    "Integrated Tesseract.js OCR and Gemini Pro to parse drug packaging inputs, recover up to 30% manufacturer returns, and automate NGO rescue donations."
  ],
  "minds-club": [
    "Designed a high-fidelity glassmorphic web platform for HITAM's Data Science Society (MINDS) using Vite, React 19, and Framer Motion.",
    "Built an Express.js API onboarding pipeline that records members to MongoDB Atlas, appends rows to Google Sheets, and triggers Nodemailer email templates."
  ],
  "ayushalert": [
    "Developed AyushAlert, a consent-driven health gateway and outbreak analytics app using Next.js 16, Tailwind v4, MongoDB, Nodemailer OTP, and Leaflet mapping.",
    "Integrated Tesseract.js and Gemini Vision API to convert scanned medical documents into FHIR R4 JSON format, and built an anonymization broker to map regional outbreak alerts."
  ],
  "multimodal-emotion-recognition": [
    "Developed a multimodal speech/text emotion recognition framework combining audio (CNN+BiLSTM+Attention on MFCCs) and text (DistilBERT) encoders in PyTorch.",
    "Achieved 100.00% validation accuracy on speech and fusion models using TESS, and created a Streamlit demo for real-time inference and embedding visualizations."
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
    "Developed and deployed a Streamlit time-series forecasting dashboard to predict regional EV adoption growth over 1-5 years, utilizing lag features and linear growth trajectories.",
    "Trained a Random Forest Regressor in Scikit-Learn achieving an RMSE of 0.06 and an R² of 1.00, enabling side-by-side county comparisons and downloadable CSV data exports.",
  ],
  "globalshala-analytics": [
    "Constructed Power BI dashboards tracking CTR, CPC, and ad spend across multiple geographical regions to monitor global Superhero U campaigns.",
    "Analyzed performance data via SQL/Excel, identifying ₹5.9K in low-performing ad spend and recommending budget reallocation strategies."
  ]
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
      items: map["Programming Languages (Learning)"] ?? ["Python", "Java", "C", "SQL"],
    },
    {
      label: "Frameworks & Libraries",
      items: ["React Basics", "TypeScript", "Next.js", "Spring Boot (Basics)", "Hugging Face", "Scikit-Learn Basics", "Pandas", "NumPy", "Librosa"],
    },
    {
      label: "ML & NLP",
      items: ["Machine Learning Basics", "NLP", "BERT", "Speech Processing", "Text Processing", "Tokenization"],
    },
    {
      label: "Tools, Databases & AI IDEs",
      items: ["GitHub", "VS Code", "Jupyter Notebook", "MongoDB", "MySQL", "Supabase", "Antigravity", "Windsurf", "Cursor"],
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
      period: "2023 – 2027",
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

    certifications: certificates.slice(0, 3).map((c) => ({
      title: c.title,
      issuer: c.issuer,
      date: c.date,
    })),
  };
}

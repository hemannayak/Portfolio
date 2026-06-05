// ─────────────────────────────────────────────────────────────────────────────
// Certifications Data — Two-Tier Structure
// Tier 1: Highlighted credentials (fellowships, job simulations, specializations)
// Tier 2: Compact learning records (short courses, LinkedIn Learning, micro-certs)
// ─────────────────────────────────────────────────────────────────────────────

export interface HighlightedCertification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  type: "fellowship" | "job-simulation" | "specialization" | "course";
  tags: string[];
  verificationUrl?: string;
  description: string;
}

export interface CompactLearning {
  id: string;
  title: string;
  issuer: string;
  date: string;
  type: "micro-course" | "workshop" | "training";
}

// ─────────────────────────────────────────────────────────────────────────────
// TIER 1: Highlighted Credentials
// Recruiters read these. Must be defensible in an interview.
// ─────────────────────────────────────────────────────────────────────────────
export const highlightedCertifications: HighlightedCertification[] = [
  {
    id: "microsoft-ai-fellowship",
    title: "AI Skills Fellowship",
    issuer: "Microsoft & Edunet Foundation",
    date: "Mar 2025",
    type: "fellowship",
    description:
      "Selective 6-week fellowship on applied AI and responsible ML. Covered Azure AI services, real-world deployment patterns, and ethics in production ML systems.",
    tags: ["Azure AI", "Responsible ML", "Deployment", "Python"],
    verificationUrl: "https://edunetfoundation.org",
  },
  {
    id: "bcg-data-science-sim",
    title: "Data Science Job Simulation",
    issuer: "BCG × Forage",
    date: "Jan 2025",
    type: "job-simulation",
    description:
      "Simulated a real BCG consulting engagement: performed churn analysis using Random Forest on a client dataset, and delivered an executive-facing insight summary.",
    tags: ["Random Forest", "Churn Analysis", "Python", "Pandas"],
    verificationUrl: "https://www.theforage.com",
  },
  {
    id: "accenture-data-analytics-sim",
    title: "Data Analytics & Visualization Job Simulation",
    issuer: "Accenture × Forage",
    date: "Dec 2024",
    type: "job-simulation",
    description:
      "Completed a full analytics lifecycle: data cleaning, exploratory analysis, and storytelling-ready visualization decks presented as a client-facing deliverable.",
    tags: ["EDA", "Data Cleaning", "Visualization", "Storytelling"],
    verificationUrl: "https://www.theforage.com",
  },
  {
    id: "infosys-springboard-ml",
    title: "Introduction to Machine Learning",
    issuer: "Infosys Springboard",
    date: "Oct 2024",
    type: "course",
    description:
      "Grounded review of foundational ML principles: supervised/unsupervised learning, model evaluation, and bias-variance tradeoff. Backed by Infosys curriculum.",
    tags: ["Supervised Learning", "Model Evaluation", "Scikit-Learn"],
    verificationUrl: "https://infosysspringboard.com",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// TIER 2: Compact Learning Records
// Shows curiosity and breadth. Rendered smaller — supporting evidence.
// ─────────────────────────────────────────────────────────────────────────────
export const compactLearningData: CompactLearning[] = [
  {
    id: "be10x-ai-tools",
    title: "AI Tools Masterclass",
    issuer: "Be10x",
    date: "Nov 2024",
    type: "workshop",
  },
  {
    id: "linkedin-python-ds",
    title: "Python for Data Science",
    issuer: "LinkedIn Learning",
    date: "Sep 2024",
    type: "micro-course",
  },
  {
    id: "linkedin-sql-essentials",
    title: "SQL Essential Training",
    issuer: "LinkedIn Learning",
    date: "Aug 2024",
    type: "micro-course",
  },
  {
    id: "linkedin-nlp-intro",
    title: "NLP with Python",
    issuer: "LinkedIn Learning",
    date: "Jul 2024",
    type: "micro-course",
  },
  {
    id: "google-data-analytics",
    title: "Data Analytics Fundamentals",
    issuer: "Google (Coursera)",
    date: "Jun 2024",
    type: "micro-course",
  },
  {
    id: "kaggle-pandas",
    title: "Pandas (Micro-Course)",
    issuer: "Kaggle Learn",
    date: "May 2024",
    type: "micro-course",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Resume Tailoring
// Role-based filtering and prioritization logic.
// Only "general" is implemented. Architecture is ready for future variants.
// ─────────────────────────────────────────────────────────────────────────────

import type { ResumeData, ResumeVariant } from "./types";

export interface VariantConfig {
  label: string;
  description: string;
  priorityProjectIds: string[];
  priorityExperienceIds: string[];
  emphasizeSkillCategories: string[];
}

// ─── Variant configuration map ────────────────────────────────────────────────
// Add a new entry here to support a new resume variant.
export const variantConfigs: Record<ResumeVariant, VariantConfig> = {
  general: {
    label: "General",
    description: "Balanced across AI/NLP, ML, and Full Stack — suitable for most roles.",
    priorityProjectIds: [
      "multimodal-emotion-recognition",
      "moodmate",
      "levelup-learning",
      "ev-charge-demand",
    ],
    priorityExperienceIds: [
      "nlp-research-iiith",
      "ml-internship-edunet",
      "nlp-internship-elevvo",
      "data-trainee",
    ],
    emphasizeSkillCategories: ["AI & NLP", "Machine Learning & Data Science", "Full Stack Development"],
  },

  nlp: {
    label: "NLP / AI Research",
    description: "Prioritizes NLP research work and AI-focused projects.",
    priorityProjectIds: [
      "multimodal-emotion-recognition",
      "ev-charge-demand",
      "levelup-learning",
      "moodmate",
    ],
    priorityExperienceIds: [
      "nlp-research-iiith",
      "nlp-internship-elevvo",
      "ml-internship-edunet",
      "data-trainee",
    ],
    emphasizeSkillCategories: ["AI & NLP", "Machine Learning & Data Science"],
  },

  "data-science": {
    label: "Data Science",
    description: "Prioritizes ML pipelines, analytics, and data engineering.",
    priorityProjectIds: [
      "ev-charge-demand",
      "multimodal-emotion-recognition",
      "moodmate",
      "levelup-learning",
    ],
    priorityExperienceIds: [
      "ml-internship-edunet",
      "data-trainee",
      "nlp-research-iiith",
      "nlp-internship-elevvo",
    ],
    emphasizeSkillCategories: ["Machine Learning & Data Science", "AI & NLP"],
  },

  "full-stack": {
    label: "Full Stack Development",
    description: "Prioritizes full-stack and backend engineering projects.",
    priorityProjectIds: [
      "moodmate",
      "levelup-learning",
      "multimodal-emotion-recognition",
      "ev-charge-demand",
    ],
    priorityExperienceIds: [
      "nlp-research-iiith",
      "ml-internship-edunet",
      "nlp-internship-elevvo",
      "data-trainee",
    ],
    emphasizeSkillCategories: ["Full Stack Development", "Programming Languages"],
  },

  sde: {
    label: "Software Engineering",
    description: "Prioritizes systems, APIs, and engineering fundamentals.",
    priorityProjectIds: [
      "moodmate",
      "levelup-learning",
      "ev-charge-demand",
      "multimodal-emotion-recognition",
    ],
    priorityExperienceIds: [
      "nlp-research-iiith",
      "nlp-internship-elevvo",
      "ml-internship-edunet",
      "data-trainee",
    ],
    emphasizeSkillCategories: ["Programming Languages", "Full Stack Development", "Databases & APIs"],
  },
};

// ─── Apply tailoring to assembled resume data ─────────────────────────────────
// Currently a passthrough for "general". Future variants will reorder/filter here.
export function applyTailoring(data: ResumeData): ResumeData {
  const config = variantConfigs[data.variant];

  // Reorder projects by priority config
  const orderedProjects = [...data.projects].sort((a, b) => {
    const aIdx = config.priorityProjectIds.findIndex((id) =>
      a.title.toLowerCase().includes(id.replace(/-/g, " ").split("-")[0])
    );
    const bIdx = config.priorityProjectIds.findIndex((id) =>
      b.title.toLowerCase().includes(id.replace(/-/g, " ").split("-")[0])
    );
    return (aIdx === -1 ? 99 : aIdx) - (bIdx === -1 ? 99 : bIdx);
  });

  return {
    ...data,
    projects: orderedProjects,
  };
}

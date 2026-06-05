export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  duration: string;
  badge: string;
  description: string;
  bullets: string[];
  techStack: string[];
  learning: string;
}

export const experienceData: ExperienceItem[] = [
  {
    id: "nlp-research-iiith",
    role: "Research Intern — NLP",
    company: "IIIT Hyderabad",
    location: "Hyderabad, India",
    duration: "Dec 2024 - Present",
    badge: "Research Lab",
    description: "Participating in speech and natural language processing research workflows, focusing on testing joint early-fusion methods and evaluating contextual alignment thresholds across multi-signal model streams.",
    bullets: [
      "Experimented with feature alignment techniques using Librosa to map audio spectral signals alongside discrete language token sequences.",
      "Configured training loops and fine-tuning pipelines utilizing PyTorch and HuggingFace, executing systematic validation sweeps.",
      "Documented research observations and data configurations to ensure reproducibility of fusion benchmarks in academic environments."
    ],
    techStack: ["Python", "PyTorch", "HuggingFace", "Librosa", "Git"],
    learning: "Developed a thorough understanding of deep learning dataset loaders, digital signal processing (DSP), and the rigor required for verifiable academic research."
  },
  {
    id: "ml-internship-edunet",
    role: "Machine Learning Intern",
    company: "Shell x Edunet x AICTE",
    location: "Remote / Internship",
    duration: "Jun 2025 - Jul 2025",
    badge: "ML Internship",
    description: "Participated in a structured artificial intelligence and machine learning training internship to develop predictive models and explore energy/smart-grid utility forecasting paradigms.",
    bullets: [
      "Built regression pipelines to analyze charging frequency, regional localization dynamics, and temporal demand distributions of electric vehicles.",
      "Utilized pandas for data preparation and scikit-learn to train, validate, and compare station load forecasting algorithms.",
      "Generated exploratory data analysis reports and visualized energy usage patterns to support resource scheduling decisions."
    ],
    techStack: ["Python", "Pandas", "Scikit-Learn", "Matplotlib", "Jupyter"],
    learning: "Acquired practical experience in clean dataset preparation, feature scaling, model scoring, and presenting technical insights for smart infrastructure pipelines."
  },
  {
    id: "nlp-internship-elevvo",
    role: "NLP Engineering Intern",
    company: "Elevvo Pathways",
    location: "Remote / Internship",
    duration: "Oct 2024 - Dec 2024",
    badge: "Industry Intern",
    description: "Contributed to conversational modeling, dataset curation, and text pre-processing pipelines to support corporate language classification tasks.",
    bullets: [
      "Cleaned, structured, and normalized raw textual training corpora by removing syntax noise and applying text lemmatization algorithms.",
      "Tested vocabulary mappings and baseline classifiers to optimize domain-specific classification responses.",
      "Assisted in cataloging prompt templates and model responses to establish high-quality evaluation baselines."
    ],
    techStack: ["Python", "NLTK", "Scikit-Learn", "Regular Expressions", "Excel"],
    learning: "Gained real-world insights into text tokenization, text normalization challenges, and the importance of high-signal dataset preparation for NLP classifiers."
  },
  {
    id: "data-trainee",
    role: "Data Analyst Trainee",
    company: "Analytics & Data Solutions",
    location: "Hybrid / Internship",
    duration: "Aug 2024 - Oct 2024",
    badge: "Analytical Trainee",
    description: "Introduced to structured analytics workflows, data visualization reporting, and corporate data pipelines to solve analytical business problems.",
    bullets: [
      "Analyzed structured datasets using advanced Microsoft Excel models, pivot tables, and statistical formulas.",
      "Designed clear, readable executive reporting dashboards to communicate trends and operational performance metrics.",
      "Collaborated on data auditing tasks to identify inconsistencies and ensure high database catalog integrity."
    ],
    techStack: ["Excel", "SQL", "PowerBI", "Data Auditing"],
    learning: "Refined quantitative analysis foundations, learned database catalog hygiene, and understood how data-driven dashboards guide operational actions."
  }
];

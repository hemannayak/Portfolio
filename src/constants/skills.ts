export interface SkillGroup {
  category: string;
  description: string;
  skills: string[];
}

export const skillsData: SkillGroup[] = [
  {
    category: "AI & NLP (Internship)",
    description: "Applying and learning multimodal NLP pipelines, text processing, and audio analysis features as part of my research internship at IIIT Hyderabad.",
    skills: ["NLP", "Speech Processing", "Text Processing", "BERT", "Hugging Face", "Librosa", "Tokenization"]
  },
  {
    category: "Machine Learning & Data Science (Fundamentals)",
    description: "Learned core concepts of data analysis and predictive models through university coursework and introductory projects.",
    skills: ["Machine Learning Basics", "Pandas", "NumPy", "Scikit-Learn Basics", "Data Analytics", "Data Cleaning", "Matplotlib"]
  },
  {
    category: "Frontend & Full Stack (Basics & Prototyping)",
    description: "Building responsive web interfaces and prototypes using modern React frameworks and AI-assisted prompt engineering.",
    skills: ["React Basics", "TypeScript", "Next.js", "REST APIs (Basics)", "Spring Boot (Basics)"]
  },
  {
    category: "Programming Languages (Learning)",
    description: "Languages practiced through academic coursework, script automations, and web development.",
    skills: ["Python", "Java", "C", "SQL"]
  },
  {
    category: "Databases & Cloud",
    description: "Data storage and database engines used for application development and querying practice.",
    skills: ["SQL", "MongoDB", "MySQL", "Supabase"]
  },
  {
    category: "Developer Tools",
    description: "Environments utilized daily for codebase versioning, package control, and coding.",
    skills: ["GitHub", "VS Code", "Jupyter Notebook"]
  },
  {
    category: "AI-Assisted Development & IDEs",
    description: "Leveraging state-of-the-art AI-powered development environments to accelerate prototyping and build applications.",
    skills: ["Antigravity", "Windsurf", "Cursor", "Prompt Engineering", "AI-Augmented Workflows"]
  }
];

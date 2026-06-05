export interface SkillGroup {
  category: string;
  description: string;
  skills: string[];
}

export const skillsData: SkillGroup[] = [
  {
    category: "AI & NLP",
    description: "Explored through speech spectrogram feature alignments, BERT representations, and research workflows at IIIT Hyderabad.",
    skills: ["NLP", "Text Processing", "BERT", "Transformers", "Librosa", "Speech Processing", "Tokenization", "Hugging Face"]
  },
  {
    category: "Machine Learning & Data Science",
    description: "Applied in temporal vehicle load demand forecasting, statistical scaling, and ML models during AICTE Edunet internship.",
    skills: ["Machine Learning", "Pandas", "NumPy", "Scikit-Learn", "Data Analytics", "Data Cleaning", "Model Evaluation", "Matplotlib"]
  },
  {
    category: "Full Stack Development",
    description: "Built through secure, modular full-stack journaling and responsive data analytics platforms.",
    skills: ["React", "Spring Boot", "REST APIs", "JWT Authentication", "MongoDB", "Frontend Architecture"]
  },
  {
    category: "Programming Languages",
    description: "Foundational syntaxes utilized for machine learning scripting, database queries, and structural software development.",
    skills: ["Python", "Java", "JavaScript", "SQL"]
  },
  {
    category: "Databases & APIs",
    description: "Configured for stateless backend token routing, RESTful API testing, and NoSQL document-based collection queries.",
    skills: ["MongoDB", "SQL", "REST APIs", "Postman", "JSON Workflows"]
  },
  {
    category: "Developer Tools & Platforms",
    description: "Leveraged daily for codebase versioning, local environment sandboxing, and interactive analytics scripting.",
    skills: ["Git", "GitHub", "VS Code", "Eclipse", "Postman", "Jupyter Notebook"]
  },
  {
    category: "AI-Assisted Development",
    description: "Employed for rapid application prototyping, drafting structural boilerplate, and automating software workflows.",
    skills: ["Cursor", "GitHub Copilot", "Prompt Engineering", "Rapid Prototyping", "AI-Augmented Workflows"]
  }
];

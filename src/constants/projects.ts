export interface ChallengeSolution {
  challenge: string;
  solution: string;
}

export interface Metric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: "AI & NLP" | "Machine Learning" | "Full Stack Development" | "Data Analytics" | "Research Engineering" | "AI-Assisted Development" | "Collaborative & Academic";
  featured: boolean;
  
  // High-Trust Metadata (SCAN & TRUST layers)
  metrics?: Metric[];
  techStack: string[];
  trustSignals: string[];
  links: {
    github?: string;
    live?: string;
  };
  
  // Case Study Deep Dive (DIVE DEEPER layer)
  problem: string;
  approach: string;
  outcome: string;
  featuresGrid: string[];
  architecturePipeline: string[];
  challenges: ChallengeSolution[];
  learnings: string[];
  previewGradient: string; // Tailored Vercel-style card gradients
}

export const projectsData: Project[] = [
  {
    id: "multimodal-emotion-recognition",
    title: "Multimodal Speech & Text Emotion Recognition Framework",
    description: "Developed an early-fusion deep learning framework at IIIT Hyderabad that aligns audio Mel-spectrogram features with transformer-based text embeddings to classify human emotional states.",
    category: "AI & NLP",
    featured: true,
    metrics: [
      { label: "Audio Extraction", value: "Librosa DSP" },
      { label: "Language Model", value: "BERT-Base" },
      { label: "Fusion Mode", value: "Cross-Attention" }
    ],
    techStack: ["Python", "PyTorch", "HuggingFace", "Librosa", "Git"],
    trustSignals: [
      "IIIT Hyderabad Research Lab Work",
      "Audio Spectrogram Feature Extraction",
      "HuggingFace BERT Tokenization",
      "Cross-Attention Fusion Layers"
    ],
    links: {
      github: "https://github.com/hemannayak/IIITH_RAP_Multimodal_Emotion_Recognition"
    },
    problem: "Speech-only or text-only emotion classification models struggle with context-heavy expressions, resulting in misinterpretations of conversational cues and high variance in noisy environments.",
    approach: "Extracted audio Mel-spectrogram descriptors using Librosa, generated dense text representations via HuggingFace BERT models, and designed a cross-attention layer to perform token-to-frame feature alignment.",
    outcome: "Built an interactive experimentation pipeline running local inference, enabling systematic testing of early vs. late fusion strategies across multiple emotional speech corpora.",
    featuresGrid: [
      "Raw speech signal pre-processing",
      "Librosa log-Mel spectrogram conversion",
      "HuggingFace BERT text tokenization",
      "Early-fusion cross-attention block",
      "Temporal signal alignment layer",
      "Local model inference pipeline"
    ],
    architecturePipeline: [
      "Raw Speech/Text",
      "Feature Extractors",
      "Cross-Attention Fusion",
      "Classification Output"
    ],
    challenges: [
      {
        challenge: "Temporal alignment discrepancies between high-frequency speech features and discrete text token dimensions during vector concatenation.",
        solution: "Designed a linear projection downsampling layer that normalized the audio spectral frame dimensions, aligning them with the text sequence token indices."
      }
    ],
    learnings: [
      "Acquired practical understanding of digital signal processing (DSP) and spectral conversions using Librosa.",
      "Mastered tokenization sequences, word embeddings, and dense feature alignment strategies in multi-signal networks.",
      "Gained hands-on experience structuring complex PyTorch data loaders and dataset pipelines."
    ],
    previewGradient: "from-[#7C86FF]/8 via-white/[0.01] to-transparent"
  },
  {
    id: "moodmate",
    title: "MoodMate: Full-Stack Personal Journaling & Mood Tracker",
    description: "Designed and built a secure, full-stack journal web application utilizing Spring Boot, React, and MongoDB to log daily reflections and display mood analytics.",
    category: "Full Stack Development",
    featured: true,
    metrics: [
      { label: "REST Backend", value: "Spring Boot" },
      { label: "Security Model", value: "Stateless JWT" },
      { label: "Database Layer", value: "MongoDB NoSQL" }
    ],
    techStack: ["React", "Spring Boot", "MongoDB", "JWT", "Postman", "CSS"],
    trustSignals: [
      "Stateless Session Verification",
      "Spring Boot Restful APIs",
      "NoSQL Document Modeling",
      "Dynamic Analytics Dashboards"
    ],
    links: {
      github: "https://github.com/hemannayak/MoodMate"
    },
    problem: "Modern journaling platforms often introduce friction through complex UIs, third-party data tracking, or rigid entry logs, detracting from consistent self-reflection.",
    approach: "Architected a clean RESTful backend using Spring Boot and Spring Security. Implemented stateless JWT user authentication and modeled flexible document structures in MongoDB to persist user logs.",
    outcome: "Developed a functional, low-friction journaling application featuring responsive front-end dashboard panels, CRUD operations on entries, and secure session management.",
    featuresGrid: [
      "Stateless JWT token verification",
      "Spring Security route filtering",
      "MongoDB custom query logs",
      "Responsive React dashboard views",
      "Daily CRUD journal endpoints",
      "Postman API test collections"
    ],
    architecturePipeline: [
      "React Client",
      "Spring Security",
      "Spring Boot REST API",
      "MongoDB Database"
    ],
    challenges: [
      {
        challenge: "Managing stateless authenticated sessions across browser refreshes in React without exposing JWTs to cross-site scripting (XSS) risks.",
        solution: "Configured Spring Boot to transmit session identifiers via secure HttpOnly cookies and implemented a React Context provider to authorize routes on client-side mount."
      }
    ],
    learnings: [
      "Understood security paradigms including token-based authentication and filter chain configurations in Spring Boot.",
      "Gained structural insight into document database modeling and custom repository queries in MongoDB.",
      "Refined full-stack state coordination between modular React frontends and RESTful API endpoints."
    ],
    previewGradient: "from-slate-500/10 via-white/[0.01] to-transparent"
  },
  {
    id: "ev-charge-demand",
    title: "Predictive EV Charging Station Demand Pipeline",
    description: "Built a machine learning analytics pipeline during an AICTE-Edunet internship to forecast Electric Vehicle charging demands utilizing spatial and temporal variables.",
    category: "Machine Learning",
    featured: false,
    metrics: [
      { label: "Analysis Engine", value: "Pandas / NumPy" },
      { label: "Model Framework", value: "Scikit-Learn ML" },
      { label: "Pipeline Focus", value: "Load Forecasting" }
    ],
    techStack: ["Python", "Pandas", "Scikit-Learn", "Matplotlib", "Jupyter"],
    trustSignals: [
      "AICTE Edunet Internship Project",
      "Exploratory Data Analysis (EDA)",
      "Temporal Feature Engineering",
      "Load Curve Forecasting"
    ],
    links: {
      github: "https://github.com/hemannayak/EV_Vehicle_Charge_Demand"
    },
    problem: "Smart grids experience localized electricity surges and station bottlenecks due to unpredictable vehicle charging patterns and volatile spatial-temporal load cycles.",
    approach: "Analyzed charging datasets using Python, pandas, and scikit-learn. Executed extensive exploratory data analysis (EDA), engineered geographic features, and trained regression models to predict station peak loads.",
    outcome: "Delivered an operational predictive analytical model and comprehensive report highlighting local charging stress zones to guide grid load allocation.",
    featuresGrid: [
      "Exploratory demographic profiling",
      "Station geographic feature encoding",
      "Temporal load series aggregates",
      "Regression model training pipelines",
      "Smart-grid capacity simulations",
      "Matplotlib analytical demand curves"
    ],
    architecturePipeline: [
      "Raw Station CSVs",
      "Pandas Aggregations",
      "Scikit-Learn Models",
      "Smart Grid Load Forecasts"
    ],
    challenges: [
      {
        challenge: "Mitigating severe bias in peak-load forecasting caused by highly skewed distributions and missing timestamp intervals in raw charging datasets.",
        solution: "Applied temporal forward-filling algorithms and aggregated transactions into 1-hour intervals to smooth variance while retaining underlying load peaks."
      }
    ],
    learnings: [
      "Strengthened dataset preprocessing, scaling, feature engineering, and statistical imputation skills in Python.",
      "Understood practical applications of predictive modeling in clean energy and city infrastructure engineering.",
      "Learned to construct clear, visual data stories using Matplotlib and Seaborn to communicate complex results to stakeholders."
    ],
    previewGradient: "from-[#7C86FF]/6 via-slate-700/5 to-transparent"
  },
  {
    id: "levelup-learning",
    title: "LevelUp Learning — Platform Architecture",
    description: "Led backend architecture and database schema design for a full-stack learning platform built over two semesters as a Project-Based Learning (PBL) capstone with a team of 4.",
    category: "Collaborative & Academic",
    featured: false,
    techStack: ["Django", "PostgreSQL", "REST API", "Python", "HTML/CSS"],
    trustSignals: [
      "Team Lead — backend architecture",
      "2-semester PBL capstone",
      "API design & authentication flows",
      "Session tracking logic"
    ],
    links: {},
    problem: "A collaborative project requiring a scalable learning platform with user progress tracking, session management, and modular content delivery across multiple student cohorts.",
    approach: "Took ownership of the backend and database design. Designed the PostgreSQL schema, built REST API endpoints for content and user sessions, and implemented Django authentication with role-based access.",
    outcome: "Delivered a functional multi-user learning platform with CRUD content management, user enrollment flows, and session history — completed across two semesters as a team lead.",
    featuresGrid: [
      "Django REST API design",
      "PostgreSQL relational schema",
      "Role-based authentication",
      "User session tracking",
      "Content module CRUD",
      "Team-led development"
    ],
    architecturePipeline: ["Client UI", "Django REST API", "Auth Layer", "PostgreSQL"],
    challenges: [
      {
        challenge: "Coordinating schema changes across team members without breaking API contracts mid-semester.",
        solution: "Introduced a shared migration strategy and API versioning convention so each team member could develop independently without merge conflicts."
      }
    ],
    learnings: [
      "Learned to lead backend architecture decisions in a multi-person team setting.",
      "Understood the importance of schema normalization and migration discipline in collaborative projects.",
      "Gained experience designing REST APIs with clear contracts for frontend integration."
    ],
    previewGradient: "from-emerald-500/6 via-white/[0.01] to-transparent"
  },
  {
    id: "sih-heritage-site",
    title: "Indian Heritage & Culture Site",
    description: "Government-themed web platform built for the Smart India Hackathon (SIH) focused on cultural heritage exploration with a responsive component layout.",
    category: "Collaborative & Academic",
    featured: false,
    techStack: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    trustSignals: [
      "Smart India Hackathon submission",
      "Government-oriented use case",
      "Collaborative team build"
    ],
    links: {},
    problem: "No centralized, accessible platform existed to surface curated Indian cultural heritage content in a structured, government-aligned format.",
    approach: "Built the front-end component structure and responsive layout system. Focused on accessibility, content hierarchy, and a clean UI that matched government design sensibilities.",
    outcome: "Submitted a working prototype to the Smart India Hackathon with a full responsive UI and structured content pages.",
    featuresGrid: [
      "Responsive page layouts",
      "Semantic HTML structure",
      "CSS component system",
      "Heritage content sections",
      "Government UI styling",
      "SIH submission"
    ],
    architecturePipeline: ["HTML/CSS", "JavaScript", "Responsive Grid", "SIH Submission"],
    challenges: [
      {
        challenge: "Matching a government aesthetic while keeping the UI clean and navigable for general public users.",
        solution: "Used a neutral color palette with strong typographic hierarchy and simple navigation to balance official tone with usability."
      }
    ],
    learnings: [
      "Gained experience designing for accessibility-first, content-heavy government-style interfaces.",
      "Learned to work under hackathon time pressure with a collaborative team."
    ],
    previewGradient: "from-amber-500/6 via-white/[0.01] to-transparent"
  },
  {
    id: "django-ecommerce",
    title: "Django E-Commerce Platform",
    description: "Cart, product catalog, and order management system built with Django ORM and session-based authentication for a web engineering academic module.",
    category: "Collaborative & Academic",
    featured: false,
    techStack: ["Django", "SQLite", "Python", "HTML/CSS"],
    trustSignals: [
      "Academic lab project",
      "Full MVC implementation",
      "Session-based auth"
    ],
    links: {},
    problem: "Academic requirement to build a functioning e-commerce backend demonstrating full-stack MVC patterns, session management, and database-driven product management.",
    approach: "Implemented product catalog with Django ORM models, cart session logic, and order management using class-based views and form validation.",
    outcome: "Delivered a working e-commerce system covering product listing, cart CRUD, order placement, and user authentication within a single Django application.",
    featuresGrid: [
      "Django ORM product models",
      "Session-based cart logic",
      "Order management views",
      "User authentication",
      "Admin dashboard",
      "Form validation"
    ],
    architecturePipeline: ["Django Views", "ORM Models", "SQLite DB", "Template Engine"],
    challenges: [
      {
        challenge: "Managing cart state across unauthenticated and authenticated user sessions without data loss.",
        solution: "Used Django's session framework to persist cart data and merged the anonymous cart into the user session on login."
      }
    ],
    learnings: [
      "Understood Django's MVC pattern and ORM conventions through a complete working project.",
      "Learned session state management for cart flows in a server-rendered application."
    ],
    previewGradient: "from-sky-500/6 via-white/[0.01] to-transparent"
  },
  {
    id: "hospital-mgmt",
    title: "Hospital Management System",
    description: "Relational schema design covering patient records, appointment scheduling, and ward allocation — built for a Database Management Systems course project.",
    category: "Collaborative & Academic",
    featured: false,
    techStack: ["MySQL", "SQL", "ER Modeling", "Python"],
    trustSignals: [
      "DBMS course project",
      "Full ER diagram design",
      "3NF normalization applied"
    ],
    links: {},
    problem: "Academic requirement to demonstrate relational schema design, normalization, and complex SQL query writing using a realistic healthcare domain.",
    approach: "Designed an ER model covering patients, doctors, appointments, wards, and billing. Applied 3NF normalization and wrote complex SQL queries covering JOINs, subqueries, and aggregations.",
    outcome: "Delivered a fully normalized schema with working SQL scripts for appointment scheduling, patient lookup, and ward occupancy reporting.",
    featuresGrid: [
      "ER diagram design",
      "3NF normalization",
      "Patient record management",
      "Appointment scheduling schema",
      "Ward allocation queries",
      "Complex SQL JOINs"
    ],
    architecturePipeline: ["ER Modeling", "Schema Design", "MySQL", "SQL Query Layer"],
    challenges: [
      {
        challenge: "Resolving many-to-many relationships between doctors, patients, and appointments without schema redundancy.",
        solution: "Introduced a junction table for appointments with composite foreign keys referencing both patient and doctor IDs, eliminating duplication."
      }
    ],
    learnings: [
      "Deepened understanding of relational modeling, normalization theory, and practical SQL query design.",
      "Learned to translate real-world domain requirements into structured database schemas."
    ],
    previewGradient: "from-rose-500/6 via-white/[0.01] to-transparent"
  }
];

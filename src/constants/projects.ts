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
  category: "AI & NLP" | "Machine Learning" | "Full Stack Development" | "Data Analytics" | "Research Engineering" | "Collaborative & Academic";
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
    id: "transitos",
    title: "TransitOS: Automated School Transit Management System",
    description: "An enterprise-grade transit automation portal that centralizes logistics, automates PhonePe/bank payment matching using fuzzy-name algorithms, and dispatches automated WhatsApp reminders & PDF receipts.",
    category: "Full Stack Development",
    featured: true,
    metrics: [
      { label: "Reconciliation Rate", value: "98.4%" },
      { label: "WhatsApp Client", value: "Baileys API" },
      { label: "Fuzzy Logic", value: "Levenshtein >=60%" }
    ],
    techStack: ["Next.js", "Express", "PostgreSQL", "Prisma ORM", "Tailwind CSS", "TypeScript", "fastest-levenshtein", "pdfkit"],
    trustSignals: [
      "Fuzzy Matching Merchant CSVs",
      "Headless Web QR Code Pairing",
      "On-The-Fly PDF Receipt Generation",
      "Automated WhatsApp Broadcaster"
    ],
    links: {
      github: "https://github.com/heyyhemannn/TransitOS"
    },
    problem: "School bus operators suffer from fragmented payment channels (GPay, Paytm, PhonePe) and manual verification, coupled with time-consuming manual WhatsApp billing reminders and receipt sharing.",
    approach: "Built a Next.js monorepo with an Express API backend. Integrated Levenshtein distance calculations to automatically match merchant bank statements with students, and Baileys headless WhatsApp Web API to trigger reminders and share PDF receipts.",
    outcome: "Successfully automated end-to-end fee matching and receipting. Scaled fee collection cycles from hours of manual tracing down to a simple, single-click approval portal.",
    featuresGrid: [
      "Intelligent Fuzzy Matcher",
      "Fuzzy Name Score Scoring",
      "Axis & PhonePe CSV Parser",
      "QR-Paired WhatsApp Client",
      "Automated PDFkit Receipts",
      "Scheduled Billing cron-jobs",
      "Audit logs activity ledger",
      "Route & Student Registry"
    ],
    architecturePipeline: [
      "PhonePe CSV Sheet",
      "Fuzzy Match Scoring",
      "Admin Match Verification",
      "Receipt PDF & WhatsApp dispatch"
    ],
    challenges: [
      {
        challenge: "Matching fragmented bank CSV rows containing short or mistyped sender names with student database profiles.",
        solution: "Configured fastest-levenshtein similarity scoring threshold >= 60% mapping sender names with student/parent attributes in the relational database."
      }
    ],
    learnings: [
      "Mastered head-less WhatsApp protocol socket client hookups via Baileys.",
      "Understood database performance optimizations when querying Levenshtein matches in large datasets.",
      "Designed robust asynchronous transactional flows in Express & Prisma."
    ],
    previewGradient: "from-indigo-500/8 via-white/[0.01] to-transparent"
  },
  {
    id: "globalshala-analytics",
    title: "Globalshala Superhero U Ad Campaign Analytics",
    description: "A Power BI and Excel data analytics dashboard optimizing ₹5.9K in wasted ad spend and identifying high-performing geographical and demographic campaigns.",
    category: "Data Analytics",
    featured: true,
    metrics: [
      { label: "CTR Average", value: "12.95%" },
      { label: "CPC Average", value: "₹10.18" },
      { label: "CPR Average", value: "₹30.55" }
    ],
    techStack: ["Power BI", "Excel", "SQL", "Data Visualization"],
    trustSignals: [
      "Excelerate Data Analyst Trainee",
      "Interactive Power BI Dashboarding",
      "Demographic Conversion Funnels",
      "Ad Spend Reallocation Model"
    ],
    links: {},
    problem: "Globalshala's Superhero U Ad Campaign ran campaigns across multiple student and educator demographics, resulting in wasted budget allocations on low-performing age segments.",
    approach: "Ingested and cleaned campaign data using Excel and SQL. Constructed interactive Power BI dashboards tracking CTR, CPC, and spend-by-region maps to identify conversion drivers.",
    outcome: "Identified and flagged ₹5.9K in wasted spend on age groups 13-17 and 25-34. Recommended reallocation to high-performing 18-24 cohorts, reducing CPC to ₹5.68 in target regions.",
    featuresGrid: [
      "Power BI campaign tracker",
      "Excel ad conversion model",
      "Demographic performance charts",
      "Geographic spend heatmaps",
      "Budget optimization summaries",
      "SQL query script utilities"
    ],
    architecturePipeline: [
      "Raw Ad Campaign Data",
      "Excel/SQL Pre-processing",
      "Power BI Visualizer",
      "Spend Optimizations"
    ],
    challenges: [
      {
        challenge: "Synthesizing fragmented ad metrics across multiple student/educator student layers into a clean dashboard.",
        solution: "Engineered customized demographic dimensions and geographic hierarchies to cleanly isolate CPC performance across age brackets."
      }
    ],
    learnings: [
      "Learned to model and clean realistic advertising campaign datasets with Excel.",
      "Gained hands-on competency in DAX formulas and interactive Power BI report builder templates.",
      "Developed key business insights for marketing budget optimizations."
    ],
    previewGradient: "from-amber-500/8 via-white/[0.01] to-transparent"
  },
  {
    id: "viala",
    title: "Viala: Circular Pharmacy Intelligence Platform",
    description: "An intelligent medicine lifecycle management platform built to prevent pharmaceutical waste, recover inventory value, and optimize supply chains using dynamic pricing, shelf heatmaps, and AI-driven FEFO billing.",
    category: "Full Stack Development",
    featured: true,
    metrics: [
      { label: "Waste Prevented", value: "Eco Analytics" },
      { label: "Formulation AI", value: "Gemini + OCR" },
      { label: "Priority Model", value: "Strict FEFO" }
    ],
    techStack: ["Next.js", "Tailwind CSS", "MongoDB", "Google Gemini API", "Framer Motion", "Recharts", "Tesseract.js"],
    trustSignals: [
      "Dynamic Pricing Expiry Engine",
      "Interactive Visual Shelf Heatmap",
      "OCR Snap-Stock Scanner",
      "Alternative Formulation Matcher"
    ],
    links: {
      github: "https://github.com/hemannayak/Viala",
      live: "https://viala.vercel.app"
    },
    problem: "Pharmacies lose 2% to 10% of inventory to expiration annually, while manual batch registration and FIFO systems fail to prioritize near-expiry drugs.",
    approach: "Built Viala, enforcing strict FEFO rules with a 4-tier visual safety shelf heatmap (Green, Yellow, Red, Black). Integrated Tesseract.js for quick packaging scans and Gemini Pro for dynamic pricing recommendations.",
    outcome: "Recovered up to 30% in manufacturer returns and 70% in costs through red-zone dynamic discounts. Automated NGO donation routing and verified eco-disposal compliance reporting.",
    featuresGrid: [
      "First-Expiry First-Out (FEFO) rules",
      "Visual Shelf Heatmap grid",
      "Snap-Stock OCR package reader",
      "AI-driven dynamic discount engine",
      "Alternative brand formulation builder",
      "Google Gemini Pharmacy chatbot"
    ],
    architecturePipeline: [
      "Medicine Stock Ingest",
      "FEFO Priority Checker",
      "Shelf Heatmap / Demand Forecast",
      "NGO Rescue / Eco-Disposal routing"
    ],
    challenges: [
      {
        challenge: "Managing stockouts and inventory imbalances ahead of seasonal cold/flu or allergy spikes.",
        solution: "Integrated a 30-day demand forecasting model and seasonal pattern multipliers to dynamically trigger safety stock recommendations."
      }
    ],
    learnings: [
      "Mastered time-series inventory forecasting and confidence interval visualization.",
      "Designed and deployed strict multi-layered safety guardrails for medical inventory sales.",
      "Gained experience implementing OCR pipelines directly within mobile-responsive layouts."
    ],
    previewGradient: "from-teal-500/8 via-white/[0.01] to-transparent"
  },
  {
    id: "minds-club",
    title: "MINDS Club: Official HITAM Student Initiative Website",
    description: "The official web platform for HITAM's Data Science Society. Features a high-fidelity glassmorphic dark-mode UI and an automated multi-channel member onboarding pipeline syncing with Google Sheets and Nodemailer.",
    category: "Full Stack Development",
    featured: true,
    metrics: [
      { label: "UI / UX Design", value: "Glassmorphic" },
      { label: "Sync Webhook", value: "Google Apps Script" },
      { label: "Notification", value: "Automated Mail" }
    ],
    techStack: ["React", "Vite", "Node.js", "Express", "MongoDB", "Nodemailer", "Framer Motion"],
    trustSignals: [
      "Automated Onboarding Workflow",
      "Google Sheets Webhook Integration",
      "Active Event Management System",
      "Dynamic Member Journey Timeline"
    ],
    links: {
      github: "https://github.com/hemannayak/minds-website",
      live: "https://minds-ds.vercel.app"
    },
    problem: "Student clubs suffer from high onboarding friction and academic silos, relying on manual spreadsheets and offline messaging groups to coordinate registrations.",
    approach: "Designed a glassmorphic dark-mode interface with a 3D wireframe centerpiece. Developed an Express.js API that validates registrations, records to MongoDB Atlas, appends rows to Google Sheets, and triggers Nodemailer.",
    outcome: "Built an onboarding engine that eliminated administrative overhead, registering students across various engineering branches and auto-sending HTML invitation templates.",
    featuresGrid: [
      "Glassmorphic dark-mode interface",
      "3D wireframe geodesic animations",
      "Apps Script Google Sheet syncing",
      "Nodemailer email dispatch engine",
      "Interactive milestones timeline",
      "Dynamic guest speaker directories"
    ],
    architecturePipeline: [
      "Registration Input Form",
      "Express Validation Endpoint",
      "Database & Google Sheets Write",
      "HTML Mailer & Community Invite"
    ],
    challenges: [
      {
        challenge: "Eliminating the need for administrative manual data consolidation during registration peaks.",
        solution: "Built a custom Apps Script webhook that forwards form submissions directly into secure Google Sheets in real time."
      }
    ],
    learnings: [
      "Mastered stateful Framer Motion scroll indicators and staggering list animations.",
      "Gained experience building secure, decoupled webhook connections to cloud systems.",
      "Designed clean, responsive components centered around modern CSS variables."
    ],
    previewGradient: "from-[#7C86FF]/8 via-white/[0.01] to-transparent"
  },
  {
    id: "ayushalert",
    title: "AyushAlert: Privacy-First Healthcare & Outbreak Analytics",
    description: "A premium, consent-driven healthcare data gateway connecting patients, doctors, and hospitals. Features biometric logins, AI-powered FHIR record compilation, and real-time de-identified outbreak tracking.",
    category: "Full Stack Development",
    featured: true,
    metrics: [
      { label: "Core Security", value: "Consent-Gated" },
      { label: "Document AI", value: "Gemini VLM + OCR" },
      { label: "Data Standard", value: "FHIR R4" }
    ],
    techStack: ["Next.js", "Tailwind CSS", "MongoDB", "Google Gemini API", "Framer Motion", "React Leaflet"],
    trustSignals: [
      "Biometric Face ID (face-api.js) Login",
      "FHIR R4 Clinical Document Standard",
      "De-identified Outbreak Mapping",
      "OTP Verification via Nodemailer"
    ],
    links: {
      github: "https://github.com/hemannayak/ayushalert"
    },
    problem: "Healthcare ecosystems suffer from fragmented patient records, lack of granular sharing consent, and massive delays in identifying regional public health outbreaks.",
    approach: "Built a multi-portal Next.js app. Integrated Tesseract.js and Gemini Vision API to convert scanned medical documents into FHIR R4 JSON formats. Built a de-identified anonymizer pipeline mapping symptoms by pincode via React Leaflet.",
    outcome: "Developed a fully functional MVP featuring face biometric logins (face-api.js), a patient-controlled OTP consent gateway, and a real-time heat map tracking outbreaks (warning: >=3, outbreak: >=5 occurrences).",
    featuresGrid: [
      "Three-role portal (Patient, Doctor, Hospital)",
      "Face biometrics via face-api.js",
      "AI document parser (Gemini Vision)",
      "FHIR R4 bundle compilation",
      "Privacy-first anonymizer pipeline",
      "Interactive Leaflet outbreak map"
    ],
    architecturePipeline: [
      "Upload Scan / Ingestion API",
      "Tesseract + Gemini OCR Parser",
      "Anonymized Pincode Extractor",
      "Leaflet Outbreak Map & Alerts"
    ],
    challenges: [
      {
        challenge: "Extracting highly structured medical data from diverse prescriptions and hand-written reports reliably.",
        solution: "Pipelined Tesseract.js for basic layout text extraction and chained it into a schema-conforming Gemini Vision prompt to compile a standardized FHIR JSON output."
      }
    ],
    learnings: [
      "Mastered multi-role authentication workflows and biometric client-side integrations (face-api.js).",
      "Implemented strict data privacy standards by developing an asynchronous data anonymization broker.",
      "Learned to implement and query geographic pincodes to map health anomalies via Leaflet."
    ],
    previewGradient: "from-emerald-500/8 via-white/[0.01] to-transparent"
  },
  {
    id: "multimodal-emotion-recognition",
    title: "Multimodal Speech & Text Emotion Recognition System",
    description: "A comprehensive multimodal emotion recognition system combining speech (CNN + BiLSTM + Attention on MFCC features) and text (DistilBERT with contextual prompting) on the TESS dataset.",
    category: "AI & NLP",
    featured: true,
    metrics: [
      { label: "Speech/Fusion Acc.", value: "100.00%" },
      { label: "Text Encoder", value: "DistilBERT" },
      { label: "Audio Processing", value: "Librosa (MFCC)" }
    ],
    techStack: ["Python", "PyTorch", "HuggingFace", "Librosa", "Streamlit", "Scikit-Learn"],
    trustSignals: [
      "IIIT Hyderabad Research Assistant Program",
      "Early Fusion Audio-Semantic Alignment",
      "CNN-BiLSTM Speech Encoder with Attention",
      "DistilBERT Text-Only Baselines"
    ],
    links: {
      github: "https://github.com/hemannayak/IIITH_RAP_Multimodal_Emotion_Recognition",
      live: "https://iiith-phase2-multimodal-emotion.streamlit.app/"
    },
    problem: "Emotion recognition models relying on single modalities often fail to capture the rich interplay of acoustic prosody and semantic context, especially when lexical meaning is sparse.",
    approach: "Implemented three pipelines (Speech CNN+BiLSTM+Attention, Text DistilBERT, and Early Fusion concatenating acoustic and semantic embeddings) using PyTorch and HuggingFace, deployed as a Streamlit dashboard.",
    outcome: "Achieved 100% accuracy on speech and fusion models, highlighting speech as the dominant emotional signal on the TESS dataset, and validated embeddings via t-SNE/PCA projections.",
    featuresGrid: [
      "Speech CNN + BiLSTM + Attention",
      "DistilBERT text-only model",
      "Acoustic/semantic early fusion",
      "Interactive Streamlit demo app",
      "t-SNE and PCA embedding plots",
      "Comprehensive metric evaluation"
    ],
    architecturePipeline: [
      "Acoustic/Semantic inputs",
      "MFCC/DistilBERT Encoders",
      "Feature Concatenation (384-dim)",
      "FC Layer Classification"
    ],
    challenges: [
      {
        challenge: "Text-only emotion recognition on isolated lexical tokens without semantic context collapses accuracy to the baseline majority class.",
        solution: "Implemented early-fusion model architectures where high-signal speech representations dominate prediction output to bypass weak semantic indicators."
      }
    ],
    learnings: [
      "Deepened expertise in configuring and building custom fusion models in PyTorch.",
      "Gained experience preprocessing and processing voice datasets with Librosa.",
      "Developed interactive Streamlit apps to demonstrate machine learning model inferences."
    ],
    previewGradient: "from-[#7C86FF]/8 via-white/[0.01] to-transparent"
  },
  {
    id: "voicescope-india",
    title: "VoiceScope India: AI Accent Classifier & Cuisine Recommender",
    description: "An AI system identifying native Indian language accents (6 classes) from English speech using MFCCs and HuBERT Layer 9 embeddings, featuring real-time Streamlit classification and culinary suggestions.",
    category: "Research Engineering",
    featured: true,
    metrics: [
      { label: "Adult Val Acc.", value: "99.87%" },
      { label: "Child Test Acc.", value: "91.91%" },
      { label: "Acoustic Features", value: "HuBERT + MFCC" }
    ],
    techStack: ["Python", "PyTorch", "Transformers", "Librosa", "Streamlit", "Scikit-Learn"],
    trustSignals: [
      "IIIT Hyderabad Research Assistant Program",
      "HuBERT Layer-Wise Embedding Extraction",
      "Cross-Age Generalization Test",
      "Real-time Streamlit Demonstration"
    ],
    links: {
      github: "https://github.com/hemannayak/IIITH_NLP_Internship",
      live: "https://iiithnlpinternshipfinal.streamlit.app/"
    },
    problem: "Speech-based AI models struggle with accent variations across age groups, causing performance drops when deployed on diverse Indian demographics (e.g. child speech).",
    approach: "Extracted HuBERT Layer 9 embeddings and MFCC features, constructed a 4-layer MLP classifier in PyTorch, evaluated cross-age generalization on adult/child splits, and built a Streamlit application.",
    outcome: "Achieved 99.87% adult validation and 91.91% child test accuracy, demonstrating strong generalization, and deployed a cuisine recommender mapped to detected accent regions.",
    featuresGrid: [
      "Six-class Indian accent classification",
      "HuBERT Layer 9 feature extractor",
      "4-layer MLP PyTorch network",
      "Adult-to-child generalization test",
      "Streamlit live voice classification",
      "Accent-aware cuisine recommendations"
    ],
    architecturePipeline: [
      "Acoustic Speech Input",
      "MFCC & HuBERT Embeddings",
      "Layer 9 Mean-Pooling",
      "MLP Accent & Cuisine Predictor"
    ],
    challenges: [
      {
        challenge: "Variability in vocal tract length and speech rates between adults (train) and children (test) leading to generalization gaps.",
        solution: "Combined high-level semantic representations from HuBERT with low-level spectral details from MFCC to capture age-invariant accent indicators."
      }
    ],
    learnings: [
      "Learned to extract intermediate layer representations from self-supervised speech models (HuBERT).",
      "Acquired understanding of structural accent variations and age-generalization challenges in speech systems.",
      "Built interactive full-stack Streamlit applications integrating real-time audio capture and predictions."
    ],
    previewGradient: "from-indigo-500/8 via-white/[0.01] to-transparent"
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
      github: "https://github.com/hemannayak/MoodMate",
      live: "https://moodmate1.vercel.app"
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
    title: "EV Adoption & Growth Forecasting Dashboard",
    description: "An interactive time-series forecasting web application built with Streamlit that predicts regional EV adoption growth over a 1-5 year horizon using optimized Random Forest Regressors.",
    category: "Machine Learning",
    featured: false,
    metrics: [
      { label: "Model Architecture", value: "Random Forest Regressor" },
      { label: "Test RMSE / R²", value: "0.06 / 1.00" },
      { label: "User Interface", value: "Streamlit Cloud" }
    ],
    techStack: ["Python", "Streamlit", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib"],
    trustSignals: [
      "AICTE Edunet Internship Week 3 Project",
      "Lag & Rolling Mean Feature Pipelines",
      "RandomizedSearchCV CV Tuning",
      "Cloud Deployment & Data Export"
    ],
    links: {
      github: "https://github.com/hemannayak/EV_Vehicle_Charge_Demand",
      live: "https://evvehiclechargedemand-ks6y7qnqpenjnvkp7apdpo.streamlit.app/"
    },
    problem: "Urban planners and policy makers lack interactive forecasting dashboards to predict regional EV adoption growth, hindering data-driven decisions on charging infrastructure deployment.",
    approach: "Engineered temporal lag features (lags 1-3) and rolling averages on vehicle registrations, trained an optimized Random Forest Regressor, and built a dynamic Streamlit UI with multi-county comparisons.",
    outcome: "Deployed a live, responsive forecasting web application featuring interactive growth plots, dynamic metric cards, and single-click CSV data export.",
    featuresGrid: [
      "1 to 5-year forecast horizons",
      "Multi-county side-by-side comparison",
      "Lag and growth rate feature engine",
      "Streamlit Cloud deployment",
      "Downloadable CSV reports",
      "Matplotlib trend visualizations"
    ],
    architecturePipeline: [
      "Raw Registration Data",
      "Lag & Rolling Features",
      "Random Forest Regressor",
      "Streamlit Dashboard"
    ],
    challenges: [
      {
        challenge: "Capturing growth acceleration while managing fluctuations in monthly registrations.",
        solution: "Implemented rolling means to smooth short-term variance alongside a growth slope computed via linear regression fit over preceding periods."
      }
    ],
    learnings: [
      "Strengthened time-series preprocessing, feature engineering, and modeling techniques in Python.",
      "Acquired hands-on experience designing user interfaces using Streamlit and deploying to Streamlit Cloud.",
      "Developed export integrations enabling stakeholders to download forecast models for local analytics."
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
    links: {
      github: "https://github.com/hemannayak/level-up-academy-hub"
    },
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
    links: {
      github: "https://github.com/hemannayak/SIH-Heritage-Site"
    },
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
    links: {
      github: "https://github.com/hemannayak/Django-E-Commerce"
    },
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
    links: {
      github: "https://github.com/hemannayak/Hospital-Management-System"
    },
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

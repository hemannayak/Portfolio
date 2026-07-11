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
    id: "nlp-research-iiith-onsite",
    role: "Research Intern (On-site)",
    company: "Language Technologies Research Centre (LTRC), IIITH",
    location: "Hyderabad, India (On-site)",
    duration: "Jun 2026 - Present",
    badge: "Current Research",
    description: "Selected for an on-site Research Assistant Program (RAP) internship at LTRC (Kohli Center on Intelligent Systems) focusing on advanced speech processing, feature extraction, and SpeechBrain models.",
    bullets: [
      "Studying acoustic signal processing fundamentals, focusing on Short-time Fourier Transform (STFT), Linear Prediction Analysis (LPA), speech excitation, and prosody parameters.",
      "Implementing acoustic feature extraction and classification algorithms using the SpeechBrain deep learning framework.",
      "Conducting empirical experiments on speech recognition, speaker identification, and emotion classification tasks within the LTRC laboratory."
    ],
    techStack: ["Python", "SpeechBrain", "PyTorch", "Librosa", "Signal Processing"],
    learning: "Gaining advanced hands-on competence in acoustic speech analysis, glottal excitation theory, and speech representation libraries in a state-of-the-art research environment."
  },
  {
    id: "callhealth-internship",
    role: "AI & Software Engineering Intern",
    company: "CallHealth Services Pvt. Ltd.",
    location: "Hybrid / Internship",
    duration: "Jan 2026 - Present",
    badge: "Current Pilot",
    description: "Collaborating on CallHealth's pilot project 'Prachtiz' (MVP 1) to develop AI-powered clinical documentation and consultation workflow automations in collaboration with HITAM.",
    bullets: [
      "Developed cross-platform client interfaces and page layouts using Flutter and Dart for the Prachtiz (MVP 1) application UI.",
      "Integrated Deepgram Nova-3 Medical (speech-to-text) and GPT-4o/Gemini 2.5 with a Python FastAPI backend to transcribe consultations into structured FHIR R4 medical notes.",
      "Designed and implemented AI-driven predictive modules including Doctor Delay Prediction (ETA), AI Doctor Brief context summarization, and AI Queue Optimization to streamline clinical throughput."
    ],
    techStack: ["Flutter", "Dart", "FastAPI", "Python", "Deepgram API", "GPT-4o", "FHIR R4"],
    learning: "Acquired hands-on experience in cross-platform mobile UI development using Flutter/Dart, healthcare standards (FHIR R4), and full-stack AI orchestration for active pilot deployments."
  },
  {
    id: "nlp-research-iiith",
    role: "Research Intern — NLP (Phase 1 & 2)",
    company: "IIIT Hyderabad",
    location: "Remote / Internship",
    duration: "Oct 2025 - May 2026",
    badge: "Research Intern",
    description: "Developed speech and multimodal NLP models under the Research Assistant Program, focusing on speech accent classification and multimodal emotion recognition systems.",
    bullets: [
      "Built 'VoiceScope India', an AI accent classifier mapping 6 major Indian accents using MFCC and HuBERT Layer 9 embeddings, achieving 99.87% adult validation and 91.91% cross-age child-speech generalization.",
      "Developed a Multimodal Emotion Recognition framework fusing speech (CNN + BiLSTM + Attention on MFCCs) and text (DistilBERT contextual embeddings) encoders, validating 100% early-fusion accuracy on the TESS dataset.",
      "Constructed interactive Streamlit demos featuring real-time inference pipelines, t-SNE / PCA clustering projections, and accent-aware recommendation engines."
    ],
    techStack: ["Python", "PyTorch", "HuggingFace", "Librosa", "Transformers", "Streamlit", "Scikit-Learn"],
    learning: "Gained deep academic experience in self-supervised audio representations (HuBERT), cross-modal fusion architectures (speech/text), and temporal attention mechanisms."
  },
  {
    id: "ml-internship-edunet",
    role: "Machine Learning Intern",
    company: "Shell x Edunet x AICTE",
    location: "Remote / Internship",
    duration: "Jul 2025 - Aug 2025",
    badge: "ML Intern",
    description: "Developed an interactive time-series forecasting web application using Streamlit to predict EV adoption growth over a 1–5 year horizon.",
    bullets: [
      "Engineered predictive time-series feature pipelines utilizing lag variables (lags 1-3), rolling means, growth rates, and regression slope trajectories on a 12.5K record dataset.",
      "Trained and optimized a Random Forest Regressor using cross-validation to achieve an R² coefficient of 1.00 and an RMSE of 0.06 on monthly vehicle registrations.",
      "Designed a modular Streamlit dashboard featuring multi-region comparisons, live trend visualizations, and downloadable CSV forecasting reports."
    ],
    techStack: ["Python", "Streamlit", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib"],
    learning: "Mastered time-series preprocessing, hyperparameter optimization, and cloud deployment on Streamlit Cloud to build data-driven decision tools for infrastructure planners."
  },
  {
    id: "nlp-internship-elevvo",
    role: "NLP Engineering Intern",
    company: "Elevvo Pathways",
    location: "Remote / Internship",
    duration: "Jul 2025 - Aug 2025",
    badge: "NLP Intern",
    description: "Developed a suite of Natural Language Processing models covering sentiment classification, multi-class topic modeling, fake news detection, and custom Named Entity Recognition (NER) taggers.",
    bullets: [
      "Trained machine learning models (Naive Bayes, Random Forest, Logistic Regression) and a deep MLP network to classify sentiments on IMDb and categorize news topics on the AG News dataset with up to 86.2% accuracy.",
      "Engineered a high-generalization Random Forest binary classifier for Fake News Detection, achieving 99.6% validation accuracy across a 44.8K article dataset using optimized TF-IDF vectorization.",
      "Constructed sequence-tagging models for Named Entity Recognition (NER) on news articles, comparing pre-trained SpaCy pipelines against a custom Bidirectional LSTM network built in Keras (achieving 96.8% token-level accuracy)."
    ],
    techStack: ["Python", "Keras", "SpaCy", "NLTK", "Scikit-Learn", "LightGBM", "TensorFlow"],
    learning: "Gained deep practical experience in text preprocessing (lemmatization, HTML cleansing), model architecture design (MLP, BiLSTM), and performance trade-offs between classical ML and deep neural networks."
  },
  {
    id: "data-trainee",
    role: "Data Visualization Trainee Intern",
    company: "Excelerate",
    location: "Remote / Internship",
    duration: "Jul 2025 - Aug 2025",
    badge: "Data Vis Intern",
    description: "Analyzed performance metrics for 33 digital ad campaigns for Globalshala's Superhero U initiative using Excel and Power BI to optimize marketing ROI.",
    bullets: [
      "Constructed interactive Power BI dashboards displaying CPC, CPR, and CTR trendlines, region-by-spend maps, and campaign filtering metrics (achieving an average CTR of 12.95%).",
      "Broke down campaign demographics to identify key high-converting age bands (18–24 with a CPC of ₹5.68) and geography clusters (India & Nepal).",
      "Flagged ₹5.9K in misaligned ad spend targeting out-of-boundary age segments (13–17 and 25–34), providing data-backed recommendations for budget reallocation."
    ],
    techStack: ["Power BI", "Excel", "Data Analysis", "Data Visualization"],
    learning: "Learned to translate raw advertising metrics into visual demographic strategy, discovering how clear data storytelling directly impacts marketing efficiency."
  }
];

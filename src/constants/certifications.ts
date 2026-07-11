// ─────────────────────────────────────────────────────────────────────────────
// Certifications — Single unified list, only real verified credentials
// ─────────────────────────────────────────────────────────────────────────────

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  type: "fellowship" | "job-simulation" | "certification" | "course" | "workshop";
  description: string;
  skills: string[];
  certificateUrl: string;
  letterUrl?: string;
}

export const certificates: Certificate[] = [
  {
    id: "aspire-leaders",
    title: "Aspire Leaders Program 2025",
    issuer: "Aspire Institute (Founded at Harvard University)",
    date: "Oct 2025",
    type: "fellowship",
    description:
      "Successfully completed a global leadership development program focused on leadership, communication, critical thinking, collaboration, and creating social impact through real-world learning experiences.",
    skills: ["Leadership", "Critical Thinking", "Communication", "Teamwork", "Global Collaboration", "Decision Making", "Social Impact", "Personal Development"],
    certificateUrl: "https://drive.google.com/file/d/1qyZpZ79jdthcECzcJAbmsLXrSgj708VS/view?usp=sharing",
    letterUrl: "https://drive.google.com/file/d/1qyZpZ79jdthcECzcJAbmsLXrSgj708VS/view?usp=sharing",
  },
  {
    id: "deloitte-data-analytics",
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte Australia × Forage",
    date: "Jun 2025",
    type: "job-simulation",
    description:
      "Completed a virtual job simulation involving practical business data analysis, forensic technology tasks, data interpretation, and insight generation to solve real-world business problems.",
    skills: ["Data Analytics", "Excel", "Data Cleaning", "Data Visualization", "Business Analysis", "Critical Thinking", "Forensic Technology"],
    certificateUrl: "https://drive.google.com/file/d/1kEcAPN2jIYztFtJXwg5QtwTLTLtrxUOR/view?usp=sharing",
  },
  {
    id: "accenture-tech-apprenticeship",
    title: "Introduction to Technology Apprenticeship Job Simulation",
    issuer: "Accenture × Forage",
    date: "Jun 2025",
    type: "job-simulation",
    description:
      "Completed a virtual technology apprenticeship simulation focused on consulting workflows, digital transformation, technology strategy, and business process improvement.",
    skills: ["Technology Consulting", "Digital Transformation", "Business Process Analysis", "Problem Solving", "Communication", "Stakeholder Management"],
    certificateUrl: "https://drive.google.com/file/d/1pga9TUe7z8UNoKxsZ3UmTW9zm4U7XX6R/view?usp=sharing",
  },
  {
    id: "pcap-python",
    title: "PCAP – Programming Essentials in Python",
    issuer: "Cisco Networking Academy × OpenEDG Python Institute",
    date: "Sep 2024",
    type: "certification",
    description:
      "Successfully completed an industry-recognized Python certification covering programming fundamentals, object-oriented programming, modules, exception handling, file processing, and algorithm implementation.",
    skills: ["Python", "OOP", "Functions", "Exception Handling", "Modules", "Packages", "File Handling", "Iterators", "Generators", "Algorithms"],
    certificateUrl: "https://drive.google.com/file/d/1gPuRErD3HHtUIkvz24fSB22lED48PqXr/view?usp=sharing",
  },
  {
    id: "be10x-ai-tools",
    title: "AI Tools Workshop",
    issuer: "be10x",
    date: "Mar 2024",
    type: "workshop",
    description:
      "Completed a hands-on AI workshop exploring Generative AI applications, prompt engineering, AI productivity tools, and workflow automation for professional use.",
    skills: ["Generative AI", "Prompt Engineering", "AI Tools", "Productivity Automation", "Workflow Optimization"],
    certificateUrl: "https://drive.google.com/file/d/1IntSOj7w4QtKZU7HZcvZaufG0O0FOkVH/view?usp=sharing",
  },
  {
    id: "css-fundamentals",
    title: "CSS Fundamentals: Unlock the Power of Web Styling",
    issuer: "LinkedIn Learning",
    date: "Feb 2025",
    type: "course",
    description:
      "Completed a CSS fundamentals course focused on responsive web design, modern layouts, typography, Flexbox, Grid, and professional web styling techniques.",
    skills: ["CSS3", "Flexbox", "CSS Grid", "Responsive Design", "Box Model", "Selectors", "Typography", "Layout Design"],
    certificateUrl: "https://drive.google.com/file/d/1QpV7ftaING8HKZJI5qdt5-ExurKFDcYI/view?usp=sharing",
  },
  {
    id: "programming-in-c",
    title: "Programming in C",
    issuer: "Infosys Springboard",
    date: "Jan 2024",
    type: "course",
    description:
      "Completed a foundational programming course covering procedural programming concepts, algorithms, functions, arrays, pointers, memory management, and debugging.",
    skills: ["C Programming", "Algorithms", "Arrays", "Pointers", "Functions", "Loops", "Memory Management", "Problem Solving"],
    certificateUrl: "https://drive.google.com/file/d/1gPuRErD3HHtUIkvz24fSB22lED48PqXr/view?usp=sharing",
  },
  {
    id: "html-essential-training",
    title: "HTML Essential Training (2020)",
    issuer: "LinkedIn Learning",
    date: "2020",
    type: "course",
    description:
      "Completed a comprehensive HTML fundamentals course covering semantic HTML5, page structure, forms, tables, hyperlinks, accessibility, and web development best practices.",
    skills: ["HTML5", "Semantic HTML", "Forms", "Tables", "Hyperlinks", "Web Page Structure", "Accessibility", "Web Development"],
    certificateUrl: "https://drive.google.com/file/d/16ZweTheVa31rC1JoI4uYJUkSiKojn7uY/view?usp=sharing",
  },
];

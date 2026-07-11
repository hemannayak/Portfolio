export interface LeadershipItem {
  id: string;
  role: string;
  organization: string;
  duration: string;
  description: string;
  responsibilities: string[];
  learning: string;
  progression?: { title: string; period: string }[];
}

export const leadershipData: LeadershipItem[] = [
  {
    id: "ssg-progression",
    role: "Student Governance — 3-Level Progression",
    organization: "Student Self Governance (SSG), HITAM",
    duration: "Aug 2024 – Present",
    description:
      "Progressed through three consecutive roles of increasing scope and responsibility across the student governance body — from peer coordinator to running freshmen onboarding operations for a 900-student department.",
    progression: [
      { title: "Student Dean Freshmen", period: "Apr 2026 – Present" },
      { title: "Student HOD", period: "May 2025 – Mar 2026" },
      { title: "Student Coordinator", period: "Aug 2024 – May 2025" },
    ],
    responsibilities: [
      "Freshmen Onboarding",
      "Peer Mentorship",
      "Strategic Planning",
      "Departmental Liaison",
      "Event Coordination",
      "Student Advocacy",
    ],
    learning:
      "Built institutional trust year-over-year. Each promotion brought wider scope — moving from event coordination to running department-wide operations and finally to owning the full freshmen experience pipeline.",
  },
  {
    id: "aspire-leaders",
    role: "Program Fellow",
    organization: "Aspire Leaders Program",
    duration: "2025",
    description:
      "Selected for the Aspire Leaders Program — a competitive, cohort-based leadership development fellowship for high-potential students from emerging-market universities. Focused on self-awareness, collaborative decision-making, and social impact leadership.",
    responsibilities: [
      "Leadership Development",
      "Cohort Collaboration",
      "Social Impact Design",
      "Self-Awareness Training",
      "Global Peer Network",
    ],
    learning:
      "An externally validated signal that goes beyond technical skills — reinforcing that real leadership is about influence, clarity under uncertainty, and sustained ownership.",
  },
];

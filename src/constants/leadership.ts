export interface LeadershipItem {
  id: string;
  role: string;
  organization: string;
  duration: string;
  description: string;
  responsibilities: string[];
  learning: string;
}

export const leadershipData: LeadershipItem[] = [
  {
    id: "student-dean-freshmen",
    role: "Student Dean Freshmen",
    organization: "Student Self Governance (SSG), HITAM",
    duration: "Apr 2026 - Present (2 mos)",
    description: "Appointed to coordinate freshmen onboarding, peer support, and academic transition workflows, leading student-dean operations to assist incoming engineering cohorts.",
    responsibilities: ["Student Governance", "Onboarding Coordination", "Academic Transition", "Peer Mentorship", "Administrative Liaison"],
    learning: "Strengthened institutional governance, communication, and planning skills while balancing technical and academic priorities at a leadership level."
  },
  {
    id: "ssg-student-hod",
    role: "Student HOD",
    organization: "Student Self Governance (SSG), HITAM",
    duration: "May 2025 - Mar 2026 (11 mos)",
    description: "Served as Student Head of Department, taking responsibility for peer coordination, planning department meetings, and facilitating key communication channels.",
    responsibilities: ["Strategic Planning", "Departmental Liaison", "Meeting Organization", "Conflict Resolution", "Open Communication"],
    learning: "Refined strategic planning and peer coordination, learning to balance departmental guidelines with group leadership responsibilities."
  },
  {
    id: "ssg-student-coordinator",
    role: "Student Coordinator",
    organization: "Student Self Governance (SSG), HITAM",
    duration: "Aug 2024 - May 2025 (10 mos)",
    description: "Contributed to peer communication, student coordination, and event planning, acting as a bridge between the student body and faculty advisor teams.",
    responsibilities: ["Open Communication", "Event Planning", "Feedback Loops", "Student Advocacy", "Cross-Functional Collaboration"],
    learning: "Refined operational skills by encouraging department-wide collaboration, coordinating meetings, and building structural feedback bridges."
  }
];

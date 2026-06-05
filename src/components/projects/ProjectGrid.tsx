"use client";

import { Project } from "@/constants/projects";
import { ProjectCard } from "./ProjectCard";
import { StaggerContainer, StaggerItem } from "@/components/animations/Reveal";

interface ProjectGridProps {
  projects: Project[];
  onOpenDetails?: (project: Project) => void;
}

export function ProjectGrid({ projects, onOpenDetails }: ProjectGridProps) {
  return (
    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project) => (
        <StaggerItem key={project.id}>
          <ProjectCard project={project} onOpenDetails={onOpenDetails} />
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}

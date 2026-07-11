"use client";

import { useState } from "react";
import { projectsData, Project } from "@/constants/projects";
import { FeaturedProjectCard } from "./FeaturedProjectCard";
import { ProjectGrid } from "./ProjectGrid";
import { ProjectModal } from "./ProjectModal";
import { FadeIn } from "@/components/animations/FadeIn";
import { cn } from "@/utils/cn";

const categories = [
  "All",
  "AI & NLP",
  "Machine Learning",
  "Full Stack Development",
  "Data Analytics",
  "Research Engineering",
  "Collaborative & Academic"
];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Apply high-fidelity filter logic
  const filteredProjects = projectsData.filter((project) => {
    if (activeCategory === "All") return true;
    return project.category === activeCategory;
  });

  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const secondaryProjects = filteredProjects.filter((p) => !p.featured);

  const handleOpenDetails = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  return (
    <section id="projects" className="py-16 md:py-28 px-4 md:px-6 relative border-b border-white/[0.06] bg-[#0B0B0F]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <FadeIn delay={0.1} className="mb-12 text-center md:text-left flex flex-col items-center md:items-start">
          <span className="text-xs font-mono tracking-widest text-[#7C86FF] uppercase block mb-3 font-semibold">
            04 / Code & Systems
          </span>
          
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#FAFAFA] mb-4">
            Academic, Internship & Hackathon Projects
          </h2>
          
          <p className="text-xs md:text-sm text-[#A1A1AA] max-w-2xl leading-relaxed">
            A showcase of deep learning research, full-stack systems, and data models engineered during professional internships (IIIT Hyderabad, CallHealth, Edunet, Excelerate), hackathons (SIH), and core academic coursework.
          </p>
        </FadeIn>

        {/* Elegant Premium Filter Chips */}
        <FadeIn delay={0.15} className="mb-16">
          <div className="flex flex-wrap items-center gap-2 pb-4 overflow-x-auto scrollbar-none border-b border-white/[0.03]">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "px-4 py-1.5 rounded-full text-[10px] md:text-xs font-medium font-mono transition-all duration-300 whitespace-nowrap cursor-pointer",
                    isActive
                      ? "bg-[#7C86FF] text-[#0B0B0F] shadow-md border border-[#7C86FF]/20"
                      : "text-[#A1A1AA] bg-white/[0.01] hover:bg-white/[0.04] border border-white/[0.06] hover:text-[#F5F5F5] hover:scale-[1.01]"
                  )}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </FadeIn>

        {/* Projects Render Area */}
        {activeCategory === "All" ? (
          <div className="space-y-16">
            {categories.slice(1).map((category) => {
              const categoryProjects = projectsData.filter((p) => p.category === category);
              if (categoryProjects.length === 0) return null;

              const featProjs = categoryProjects.filter((p) => p.featured);
              const secProjs = categoryProjects.filter((p) => !p.featured);

              return (
                <div key={category} className="space-y-8">
                  {/* Category Header */}
                  <FadeIn delay={0.1} className="flex items-center gap-2 border-b border-white/[0.04] pb-3">
                    <span className="w-1.5 h-1.5 bg-[#7C86FF] rounded-full shadow-[0_0_8px_#7C86FF]" />
                    <h3 className="text-xs font-mono tracking-widest text-[#FAFAFA] uppercase font-bold">
                      {category}
                    </h3>
                    <span className="text-[10px] font-mono text-[#A1A1AA] opacity-50 ml-auto">
                      {categoryProjects.length} {categoryProjects.length === 1 ? "Project" : "Projects"}
                    </span>
                  </FadeIn>

                  {/* Featured Category Projects Stack */}
                  {featProjs.length > 0 && (
                    <div className="space-y-8">
                      {featProjs.map((project, idx) => (
                        <FadeIn key={project.id} delay={0.15 + idx * 0.05}>
                          <FeaturedProjectCard project={project} onOpenDetails={handleOpenDetails} />
                        </FadeIn>
                      ))}
                    </div>
                  )}

                  {/* Secondary Category Projects Grid */}
                  {secProjs.length > 0 && (
                    <ProjectGrid projects={secProjs} onOpenDetails={handleOpenDetails} />
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="space-y-16">
            {/* Dynamic Empty State if filter yields no elements */}
            {filteredProjects.length === 0 && (
              <FadeIn delay={0.2} className="text-center py-12 border border-dashed border-white/10 rounded-2xl">
                <p className="text-xs text-[#A1A1AA] font-mono">
                  No matching diagnostic models compiled under this category yet.
                </p>
              </FadeIn>
            )}

            {/* Featured Projects Stack */}
            {featuredProjects.length > 0 && (
              <div className="space-y-8">
                {featuredProjects.map((project, idx) => (
                  <FadeIn key={project.id} delay={0.2 + idx * 0.05}>
                    <FeaturedProjectCard project={project} onOpenDetails={handleOpenDetails} />
                  </FadeIn>
                ))}
              </div>
            )}

            {/* Secondary Projects Grid */}
            {secondaryProjects.length > 0 && (
              <div className="pt-8 border-t border-white/5">
                <ProjectGrid projects={secondaryProjects} onOpenDetails={handleOpenDetails} />
              </div>
            )}
          </div>
        )}

        {/* Rich Case Study Deep Dive Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={modalOpen}
          onClose={() => {
            setModalOpen(false);
            setSelectedProject(null);
          }}
        />
      </div>
    </section>
  );
}

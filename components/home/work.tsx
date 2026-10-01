"use client";

import { useState } from "react";
import NextLink from "next/link";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

import { ProjectCard } from "@/components/project-card";
import { ProjectModal } from "@/components/project-modal";
import { SectionTitle } from "@/components/section-title";
import { Project } from "@/components/projects/types";
import { DATA } from "@/data";

export const WorkSection = () => {
  const { work, eyebrow, sectionTitle, sectionDescription } = DATA.projects;

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenModal = (project: Project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  return (
    <section className="py-24 bg-background" id="work-section">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle description={sectionDescription} eyebrow={eyebrow} title={sectionTitle} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6">
          {work.slice(0, 3).map((project, index) => (
            <motion.div
              key={project.id}
              className="w-full md:max-w-none"
              initial={{ opacity: 0, y: 20 }}
              transition={{
                delay: index * 0.2,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <ProjectCard
                project={project}
                onViewDetails={() => handleOpenModal(project)}
              />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <NextLink
            className="inline-flex items-center gap-2 text-primary-500 font-medium hover:gap-3 transition-all"
            href="/projects"
          >
            See all projects
            <Icon icon="lucide:arrow-right" />
          </NextLink>
        </div>

        <ProjectModal
          isOpen={!!selectedProject}
          project={selectedProject}
          onClose={handleCloseModal}
        />
      </div>
    </section>
  );
};

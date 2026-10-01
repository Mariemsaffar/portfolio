"use client";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

import { CompanyLogo } from "@/components/company-logo";
import { SectionHeader } from "@/components/about/section-header";
import { containerVariants, itemVariants } from "@/components/about/variants";
import { ExperienceItems } from "@/components/about/types";

interface ExperienceTimelineProps {
  experience: ExperienceItems;
}

export const ExperienceTimeline = ({ experience }: ExperienceTimelineProps) => (
  <div className="mb-20">
    <SectionHeader icon="mdi:briefcase-outline" title="Experience" />

    <motion.ol
      className="relative border-l border-divider ml-6 space-y-8"
      initial="hidden"
      variants={containerVariants}
      viewport={{ once: true, amount: 0.1 }}
      whileInView="visible"
    >
      {experience.map((job) => (
        <motion.li key={job.company} className="relative pl-10" variants={itemVariants}>
          <div className="absolute -left-6 top-0">
            <CompanyLogo alt={job.company} src={job.logo} />
          </div>

          <div
            className={`rounded-2xl border p-5 md:p-6 bg-white/80 dark:bg-black/50 backdrop-blur-md ${
              job.current ? "border-primary-500/40 shadow-lg shadow-primary-500/5" : "border-divider"
            }`}
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-1">
              <div>
                <h3 className="text-lg font-semibold flex flex-wrap items-center gap-2">
                  {job.role}
                  {job.current && (
                    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-success-500/15 text-success-500">
                      Current
                    </span>
                  )}
                </h3>
                <p className="text-primary-500 font-medium">{job.company}</p>
              </div>
              <div className="text-sm text-foreground-500 md:text-right shrink-0">
                <time className="block font-medium">{job.date}</time>
                <span>{job.location}</span>
              </div>
            </div>

            <p className="text-sm text-foreground-500 italic mb-4">{job.summary}</p>

            <ul className="space-y-2 mb-4">
              {job.highlights.map((h) => (
                <li key={h} className="flex gap-2 text-sm text-foreground-600 leading-relaxed">
                  <Icon className="w-4 h-4 mt-0.5 shrink-0 text-primary-500" icon="lucide:chevron-right" />
                  {h}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {job.tags.map((tag) => (
                <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-content2 text-foreground-600">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.li>
      ))}
    </motion.ol>
  </div>
);

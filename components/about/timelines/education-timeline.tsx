"use client";

import { motion } from "framer-motion";

import { SectionHeader } from "@/components/about/section-header";
import { containerVariants, itemVariants } from "@/components/about/variants";
import { EducationItems } from "@/components/about/types";

interface EducationTimelineProps {
  education: EducationItems;
}

export const EducationTimeline = ({ education }: EducationTimelineProps) => (
  <div className="mb-20">
    <SectionHeader icon="mdi:school-outline" title="Education" />

    <motion.ol
      className="grid md:grid-cols-3 gap-4"
      initial="hidden"
      variants={containerVariants}
      viewport={{ once: true, amount: 0.2 }}
      whileInView="visible"
    >
      {education.map((item) => (
        <motion.li
          key={item.title}
          className="rounded-2xl border border-divider bg-white/80 dark:bg-black/50 backdrop-blur-md p-5"
          variants={itemVariants}
        >
          <time className="text-xs font-semibold uppercase tracking-wider text-primary-500">
            {item.date}
          </time>
          <h3 className="font-semibold mt-2">{item.title}</h3>
          <p className="text-sm text-foreground-600 mb-2">{item.school}</p>
          <p className="text-sm text-foreground-500 leading-relaxed">{item.description}</p>
        </motion.li>
      ))}
    </motion.ol>
  </div>
);

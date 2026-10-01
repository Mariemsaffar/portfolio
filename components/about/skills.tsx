"use client";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

import { SectionHeader } from "@/components/about/section-header";
import { containerVariants, itemVariants } from "@/components/about/variants";
import { SkillCategories } from "@/components/about/types";

interface SkillsProps {
  skills: SkillCategories;
}

export const Skills = ({ skills }: SkillsProps) => (
  <div className="mb-20">
    <SectionHeader icon="mdi:tools" title="Skills" />

    <motion.div
      className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
      initial="hidden"
      variants={containerVariants}
      viewport={{ once: true, amount: 0.1 }}
      whileInView="visible"
    >
      {skills.map((category) => (
        <motion.div
          key={category.title}
          className="rounded-2xl border border-divider bg-white/80 dark:bg-black/50 backdrop-blur-md p-5"
          variants={itemVariants}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-lg bg-primary-500/10 text-primary-500 flex items-center justify-center">
              <Icon className="w-5 h-5" icon={category.icon} />
            </div>
            <h3 className="font-semibold">{category.title}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {category.items.map((item) => (
              <span key={item} className="text-xs px-2.5 py-1 rounded-md bg-content2 text-foreground-600">
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
);

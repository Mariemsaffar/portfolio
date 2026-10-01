"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}

export const SectionTitle = ({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionTitleProps) => (
  <motion.div
    className={`mb-14 ${align === "center" ? "text-center mx-auto" : ""} max-w-2xl`}
    initial={{ opacity: 0, y: 20 }}
    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    viewport={{ once: true }}
    whileInView={{ opacity: 1, y: 0 }}
  >
    {eyebrow && (
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-500 mb-3">
        {eyebrow}
      </p>
    )}
    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
      {title}
    </h2>
    {description && (
      <p className="mt-4 text-foreground-500 text-base md:text-lg leading-relaxed">
        {description}
      </p>
    )}
  </motion.div>
);

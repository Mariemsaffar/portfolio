"use client";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

import { SectionHeader } from "@/components/about/section-header";
import { DATA } from "@/data";

const cardClass =
  "rounded-2xl border border-divider bg-white/80 dark:bg-black/50 backdrop-blur-md p-5";

export const Credentials = () => {
  const { certifications, languages, achievements } = DATA.about;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <SectionHeader icon="mdi:certificate-outline" title="Certifications & Languages" />

      <div className="grid md:grid-cols-3 gap-4">
        <div className={cardClass}>
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <Icon className="text-primary-500" icon="lucide:badge-check" />
            Certifications
          </h3>
          <ul className="space-y-3">
            {certifications.map((c) => (
              <li key={c.name} className="text-sm">
                <p className="font-medium">{c.name}</p>
                <p className="text-foreground-500">
                  {c.issuer} · {c.year}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className={cardClass}>
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <Icon className="text-primary-500" icon="lucide:languages" />
            Languages
          </h3>
          <ul className="space-y-3">
            {languages.map((l) => (
              <li key={l.name} className="text-sm">
                <p className="font-medium">{l.name}</p>
                <p className="text-foreground-500">{l.level}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className={cardClass}>
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <Icon className="text-primary-500" icon="lucide:trophy" />
            Achievements
          </h3>
          <ul className="space-y-3">
            {achievements.map((a) => (
              <li key={a} className="text-sm text-foreground-600 leading-relaxed">
                {a}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

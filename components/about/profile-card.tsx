"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { Button, Link } from "@heroui/react";
import { Icon } from "@iconify/react";

import { ProfileCardProps } from "@/components/about/types";
import { DATA } from "@/data";

export const ProfileCard = memo(function ProfileCard({
  image,
  name,
  title,
  description,
  facts,
}: ProfileCardProps) {
  return (
    <motion.div
      className="w-full mb-20 rounded-2xl border border-divider overflow-hidden bg-white/90 dark:bg-black/60 backdrop-blur-md shadow-md"
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div className="flex flex-col md:flex-row">
        <div className="md:w-[280px] shrink-0 relative aspect-square md:aspect-auto">
          <img alt={name} className="absolute inset-0 w-full h-full object-cover" src={`/${image}`} />
        </div>

        <div className="flex-1 p-6 md:p-8">
          <h2 className="text-2xl font-bold">{name}</h2>
          <p className="text-primary-500 font-medium mb-5">{title}</p>

          <div className="space-y-3 text-sm md:text-base text-foreground-600 leading-relaxed mb-6">
            {description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <ul className="flex flex-col gap-2 mb-6">
            {facts.map((fact) => (
              <li key={fact.label} className="flex items-center gap-2 text-sm text-foreground-500">
                <Icon className="w-4 h-4 text-primary-500 shrink-0" icon={fact.icon} />
                {fact.label}
              </li>
            ))}
          </ul>

          <Button
            download
            as={Link}
            color="primary"
            endContent={<Icon icon="lucide:download" />}
            href={DATA.cv}
            variant="flat"
          >
            Download CV
          </Button>
        </div>
      </div>
    </motion.div>
  );
});

"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

import { SectionTitle } from "@/components/section-title";
import { DATA } from "@/data";

export const SkillsOverviewSection = () => {
  const { eyebrow, sectionTitle, sectionDescription, items } = DATA.home.expertise;

  return (
    <section className="py-24 bg-content1/40">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle description={sectionDescription} eyebrow={eyebrow} title={sectionTitle} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              className="group h-full rounded-2xl border border-divider bg-background/60 backdrop-blur-md p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary-500/50 hover:shadow-lg hover:shadow-primary-500/10"
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary-500/10 text-primary-500 flex items-center justify-center mb-5 transition-colors group-hover:bg-primary-500 group-hover:text-white">
                <Icon className="w-6 h-6" icon={item.icon} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-foreground-500 leading-relaxed mb-5">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-md bg-content2 text-foreground-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

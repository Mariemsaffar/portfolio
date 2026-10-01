"use client";

import NextLink from "next/link";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

import { CompanyLogo } from "@/components/company-logo";
import { SectionTitle } from "@/components/section-title";
import { DATA } from "@/data";

export const ExperienceSection = () => {
  const { eyebrow, sectionTitle, sectionDescription } = DATA.home.experience;
  const [featured, ...others] = DATA.about.experience;

  return (
    <section className="py-24 bg-content1/40">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle description={sectionDescription} eyebrow={eyebrow} title={sectionTitle} />

        {/* Current position, highlighted */}
        <motion.article
          className="relative rounded-2xl border border-primary-500/40 bg-background/70 backdrop-blur-md p-6 md:p-8 mb-6 shadow-lg shadow-primary-500/5"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="flex flex-col md:flex-row md:items-start gap-5">
            <CompanyLogo alt={featured.company} size="lg" src={featured.logo} />
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <h3 className="text-xl font-semibold">{featured.role}</h3>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-success-500/15 text-success-500">
                  Current
                </span>
              </div>
              <p className="text-primary-500 font-medium">{featured.company}</p>
              <p className="text-sm text-foreground-500 mb-4">
                {featured.date} · {featured.location}
              </p>
              <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2 mb-5">
                {featured.highlights.slice(0, 6).map((h) => (
                  <li key={h} className="flex gap-2 text-sm text-foreground-600 leading-relaxed">
                    <Icon className="w-4 h-4 mt-0.5 shrink-0 text-primary-500" icon="lucide:check" />
                    {h}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {featured.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-md bg-primary-500/10 text-primary-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.article>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {others.map((job, index) => (
            <motion.article
              key={job.company}
              className="rounded-2xl border border-divider bg-background/60 backdrop-blur-md p-5 flex flex-col gap-3"
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center gap-3">
                <CompanyLogo alt={job.company} src={job.logo} />
                <div className="min-w-0">
                  <p className="font-semibold truncate">{job.company}</p>
                  <p className="text-xs text-foreground-500">{job.date}</p>
                </div>
              </div>
              <p className="text-sm text-foreground-600">{job.role}</p>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-10">
          <NextLink
            className="inline-flex items-center gap-2 text-primary-500 font-medium hover:gap-3 transition-all"
            href="/about"
          >
            Full experience & education
            <Icon icon="lucide:arrow-right" />
          </NextLink>
        </div>
      </div>
    </section>
  );
};

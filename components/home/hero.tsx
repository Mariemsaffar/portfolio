"use client";

import type { PressEvent } from "@react-aria/interactions";

import { motion } from "framer-motion";
import { Button, Link } from "@heroui/react";
import { Icon } from "@iconify/react";

import { Hole } from "@/components/backgrounds/hole/hole";
import { CompanyLogo } from "@/components/company-logo";
import { DATA } from "@/data";

const ease = [0.16, 1, 0.3, 1];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.8, ease },
});

export const HeroSection = ({ showBackground = true }: { showBackground?: boolean }) => {
  const { name, title, subtitle, current, stats } = DATA.home.hero;

  const scrollToWork = (_e: PressEvent) => {
    document.getElementById("work-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-[calc(100vh-64px)] flex items-center justify-center relative overflow-hidden bg-background">
      {showBackground && <Hole />}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-500/10 via-background/40 to-background" />
      <div className="container mx-auto px-4 z-10 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            {...fadeUp(0)}
            className="inline-flex items-center gap-3 rounded-full border border-divider bg-content1/70 backdrop-blur-md pl-1.5 pr-4 py-1.5 mb-8"
          >
            <CompanyLogo alt={current.company} src={current.logo} />
            <span className="text-sm text-foreground-500 text-left">
              {current.label}{" "}
              <span className="font-semibold text-foreground">{current.company}</span>
            </span>
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-success-500" />
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.15)}
            className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-4"
          >
            {name}
          </motion.h1>

          <motion.p
            {...fadeUp(0.25)}
            className="text-xl md:text-3xl font-semibold mb-6 bg-gradient-to-r from-primary-400 to-cyan-400 bg-clip-text text-transparent"
          >
            {title}
          </motion.p>

          <motion.p
            {...fadeUp(0.35)}
            className="text-foreground-500 text-base md:text-lg mb-10 leading-relaxed max-w-3xl mx-auto"
          >
            {subtitle}
          </motion.p>

          <motion.div
            {...fadeUp(0.45)}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
          >
            <Button
              download
              as={Link}
              className="w-full sm:w-auto font-medium"
              color="primary"
              endContent={<Icon icon="lucide:download" />}
              href={DATA.cv}
              size="lg"
              variant="shadow"
            >
              Download CV
            </Button>
            <Button
              className="w-full sm:w-auto font-medium"
              endContent={<Icon icon="lucide:arrow-down" />}
              size="lg"
              variant="bordered"
              onPress={scrollToWork}
            >
              View Work
            </Button>
            <Button
              as={Link}
              className="w-full sm:w-auto font-medium"
              endContent={<Icon icon="lucide:mail" />}
              href="/contact"
              size="lg"
              variant="light"
            >
              Contact Me
            </Button>
          </motion.div>

          <motion.dl
            {...fadeUp(0.6)}
            className="mt-14 grid grid-cols-3 max-w-2xl mx-auto divide-x divide-divider rounded-2xl border border-divider bg-content1/60 backdrop-blur-md"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="px-3 py-5 flex flex-col-reverse">
                <dt className="text-xs md:text-sm text-foreground-500 mt-1">
                  {stat.label}
                </dt>
                <dd className="text-xl md:text-2xl font-bold text-foreground">{stat.value}</dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  );
};

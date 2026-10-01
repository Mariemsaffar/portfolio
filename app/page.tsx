import { HeroSection } from "@/components/home/hero";
import { SkillsOverviewSection } from "@/components/home/skills-overview";
import { ExperienceSection } from "@/components/home/experience";
import { WorkSection } from "@/components/home/work";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SkillsOverviewSection />
      <WorkSection />
      <ExperienceSection />
    </>
  );
}

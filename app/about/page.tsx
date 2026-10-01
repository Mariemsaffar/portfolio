import { ProfileCard } from "@/components/about/profile-card";
import { EducationTimeline } from "@/components/about/timelines/education-timeline";
import { ExperienceTimeline } from "@/components/about/timelines/experience-timeline";
import { Skills } from "@/components/about/skills";
import { Credentials } from "@/components/about/credentials";
import { PageHeader } from "@/components/page-header";
import { DATA } from "@/data";

export default function AboutPage() {
  const { education, experience, profile, skills } = DATA.about;

  return (
    <section className="py-20 px-6 md:px-12 max-w-5xl mx-auto text-foreground">
      <PageHeader texts={DATA.morphingTexts.about} />
      <ProfileCard
        description={profile.description}
        facts={profile.facts}
        image={profile.image}
        name={profile.name}
        title={profile.title}
      />

      <ExperienceTimeline experience={experience} />
      <EducationTimeline education={education} />
      <Skills skills={skills} />
      <Credentials />
    </section>
  );
}

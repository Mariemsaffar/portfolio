export interface ProfileFact {
  readonly icon: string;
  readonly label: string;
}

export interface ProfileCardProps {
  image: string;
  name: string;
  title: string;
  description: readonly string[];
  facts: readonly ProfileFact[];
}

export interface SectionHeaderProps {
  icon: string;
  title: string;
  className?: string;
}

export interface EducationItem {
  readonly title: string;
  readonly school: string;
  readonly date: string;
  readonly description: string;
}

export interface ExperienceItem {
  readonly role: string;
  readonly company: string;
  readonly logo: string;
  readonly location: string;
  readonly date: string;
  readonly current: boolean;
  readonly summary: string;
  readonly highlights: readonly string[];
  readonly tags: readonly string[];
}

export interface SkillCategory {
  readonly title: string;
  readonly icon: string;
  readonly items: readonly string[];
}

export type EducationItems = readonly EducationItem[];
export type ExperienceItems = readonly ExperienceItem[];
export type SkillCategories = readonly SkillCategory[];

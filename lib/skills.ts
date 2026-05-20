export type SkillCategory = {
  label: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    label: "LANGUAGES",
    skills: ["TypeScript", "Rust", "Go", "Python", "SQL"],
  },
  {
    label: "FRONTEND",
    skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Three.js"],
  },
  {
    label: "BACKEND",
    skills: ["Node.js", "PostgreSQL", "Redis", "GraphQL", "tRPC"],
  },
  {
    label: "TOOLING",
    skills: ["Docker", "Kubernetes", "Vercel", "AWS", "Figma"],
  },
];

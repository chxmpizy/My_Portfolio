export type SkillCategory = {
  label: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    label: "LANGUAGES",
    skills: ["TypeScript", "Python", "SQL", "JavaScript", "HTML", "CSS"],
  },
  {
    label: "FRAMEWORKS",
    skills: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Node.js(Express.js)",
      "Nest.js",
      "Elysia.js",
    ],
  },
  {
    label: "DATABASE",
    skills: ["PostgreSQL", "MongoDB", "Prisma ORM", "MySQL", "Drizzle ORM"],
  },
  {
    label: "DEVOPS TOOLS",
    skills: ["Docker", "AWS (Basic)", "Git", "Github", "Github Action"],
  },
  {
    label: "DATA ENGINEER TOOLS (Learning)",
    skills: ["Apache Airflow", "Apache Flink", "Apache Spark"],
  },
  {
    label: "TOOLS",
    skills: [
      "Postman",
      "VS Code",
      "Vercel",
      "Netlify",
      "Jupyter Notebook",
      "Neon",
      "Supabase",
    ],
  },
];

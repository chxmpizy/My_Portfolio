export type SkillCategory = {
  label: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    label: "LANGUAGES",
    skills: [
      "TypeScript",
      "Java",
      "Go",
      "Python",
      "SQL",
      "JavaScript",
      "HTML",
      "CSS",
    ],
  },
  {
    label: "FRAMEWORKS",
    skills: [
      "React",
      "React Native",
      "Next.js",
      "Tailwind CSS",
      "Node.js(Express.js)",
      "Nest.js",
      "Gin",
      "Elysia.js",
      "FastAPI",
    ],
  },
  {
    label: "DATABASE",
    skills: ["PostgreSQL", "MongoDB", "Prisma ORM", "MySQL"],
  },
  {
    label: "DEVOPS TOOLS",
    skills: ["Docker", "Kubernetes", "Vercel", "AWS", "Git", "Github"],
  },
  {
    label: "DATA ENGINEER TOOLS",
    skills: ["Apache Airflow", "Apache Flink", "Apache Spark"],
  },
  {
    label: "TOOLS",
    skills: ["Postman", "VS Code"],
  },
];

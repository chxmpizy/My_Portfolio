export type Project = {
  title: string;
  description: string;
  techStack: string[];
  link: string;
};

export const projects: Project[] = [
  {
    title: "Atlas",
    description:
      "A minimal note-taking app with bi-directional linking and a focus on writing flow. Built with local-first architecture.",
    techStack: ["TypeScript", "Rust", "Tauri"],
    link: "#",
  },
  {
    title: "Cadence",
    description:
      "Open-source CI/CD platform for monorepos. Smart caching, parallel execution, and a polished developer experience.",
    techStack: ["Go", "React", "PostgreSQL"],
    link: "#",
  },
  {
    title: "Prism",
    description:
      "Design tokens manager that syncs across Figma, codebases, and documentation. Used by 300+ design teams.",
    techStack: ["Next.js", "tRPC", "Prisma"],
    link: "#",
  },
  {
    title: "Quill Editor",
    description:
      "A rich text editor framework built on a custom CRDT. Real-time collaboration with offline support.",
    techStack: ["TypeScript", "WebSockets", "Yjs"],
    link: "#",
  },
];

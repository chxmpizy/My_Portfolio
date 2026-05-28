export type Project = {
  title: string;
  description: string;
  techStack: string[];
  link: string;
};

export const projects: Project[] = [
  {
    title: "Class schedule Optimization",
    description:
      "Improved timetable generation under predefined constraints using a metaheuristic algorithm for optimization",
    techStack: ["Jupyter Notebook", "Python"],
    link: "https://github.com/chxmpizy/Class_schedule",
  },
  {
    title: "WiGarn",
    description:
      "a Resturant Review Website with the ability to search restaurants by location, cuisine, and rating.",
    techStack: [
      "Next.js",
      "Elysia.js",
      "PostgreSQL (with Neon)",
      "Tailwind CSS",
      "Docker",
      "Github Actions",
    ],
    link: "https://github.com/chxmpizz/WiGarn",
  },
  {
    title: "Electric Shuttle Route Optimization (Demo)",
    description:
      "Designed and implemented a scalable distributed log analytics pipeline for real-time log ingestion, processing, and analysis.",
    techStack: [
      "Python",
      "Jupyter Notebook",
      "Genetic Algorithm",
      "Simulated Annealing",
      "Particle Swarm Optimization",
      "Ant Colony Optimization",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Git",
    ],
    link: "https://github.com/chxmpizy/Electric-Shuttle-Route-Optimization",
  },
];

export type Project = {
  title: string;
  description: string;
  techStack: string[];
  link: string;
};

export const projects: Project[] = [
  {
    title: "Class Schedule Optimization",
    description:
      "Improved timetable generation under predefined constraints using a metaheuristic algorithm for optimization",
    techStack: [
      "Jupyter Notebook",
      "Python",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Git",
    ],
    link: "https://github.com/chxmpizy/Class_schedule",
  },
  {
    title: "WiGarn",
    description:
      "Developed a restaurant review platform with search functionality based on location, cuisine, and ratings.",
    techStack: [
      "Next.js",
      "Elysia.js",
      "PostgreSQL (Neon)",
      "Tailwind CSS",
      "Docker",
      "Github Actions",
    ],
    link: "https://github.com/chxmpizz/WiGarn",
  },
  {
    title: "Electric Shuttle Route Optimization (Demo)",
    description:
      "Designed and evaluated metaheuristic algorithms to optimize electric shuttle routes and improve routing efficiency under predefined constraints.",
    techStack: [
      "Python",
      "Jupyter Notebook",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Git",
      "Networkx",
      "OSMNx",
      "SUMO",
    ],
    link: "https://github.com/chxmpizy/Electric-Shuttle-Route-Optimization",
  },
];

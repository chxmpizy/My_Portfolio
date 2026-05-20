export type Project = {
  title: string;
  description: string;
  techStack: string[];
  link: string;
};

export const projects: Project[] = [
  {
    title: "AroaiD (ON Going)",
    description:
      "A minimal Nutrition Tracker application with a modern user interface, which help user track their daily nutrition intake and provides personalized recommendations.",
    techStack: [
      "React Native",
      "Go",
      "Tailwind CSS",
      "AWS",
      "Python",
      "Docker",
    ],
    link: "https://github.com/chxmpizz/AroaiD",
  },
  {
    title: "WiGarn",
    description:
      "a Resturant Review Website with the ability to search restaurants by location, cuisine, and rating.",
    techStack: [
      "Next.js",
      "Elysia.js",
      "PostgreSQL",
      "Tailwind CSS",
      "Docker",
      "Github Actions",
    ],
    link: "https://github.com/chxmpizz/WiGarn",
  },
  {
    title: "Distributed Log Analytics Pipeline (Future Work)",
    description:
      "Designed and implemented a scalable distributed log analytics pipeline for real-time log ingestion, processing, and analysis.",
    techStack: ["Kafka", "Python", "Spark", "PostgreSQL", "Docker", "Grafana"],
    link: "#",
  },
];

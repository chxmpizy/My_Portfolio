import React from "react";
import { ExternalLink } from "lucide-react";
import { projects } from "@/lib/projects";

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="flex items-baseline gap-3 shrink-0">
            {/* <span className="text-sm font-medium text-primary">03</span> */}
            <h2 className="text-4xl font-extrabold tracking-tight text-muted-foreground">
              Projects
            </h2>
          </div>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-xl border border-border bg-card p-8 flex flex-col justify-between transition-shadow duration-300 hover:shadow-lg"
            >
              <div>
                <h3 className="text-2xl font-bold mb-4 text-primary/90">
                  {project.title}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm font-medium rounded-md border border-border bg-secondary/50 text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Project Link */}
                <a
                  href={project.link}
                  className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm hover:underline transition-colors"
                >
                  View project
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from "react";
import { skillCategories } from "@/lib/skills";

export const SkillSection = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="flex items-baseline gap-3 shrink-0">
            <span className="text-sm font-medium text-primary">05</span>
            <h2 className="text-4xl font-extrabold tracking-tight">
              Skills &amp; Tools
            </h2>
          </div>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {skillCategories.map((category) => (
            <div key={category.label}>
              <h3 className="text-xs font-semibold tracking-widest text-muted-foreground mb-5">
                {category.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm font-medium rounded-md border border-border bg-card text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

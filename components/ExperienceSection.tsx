"use client";
import React from "react";
import { MapPin } from "lucide-react";
import { experiences } from "@/lib/experiences";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="flex items-baseline gap-3 shrink-0">
            <span className="text-sm font-medium text-primary">04</span>
            <h2 className="text-4xl font-extrabold tracking-tight">
              Experience
            </h2>
          </div>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Timeline */}
        <div className="relative flex flex-col gap-8">
          {/* Vertical Line */}
          <div className="absolute left-[5px] top-0 bottom-0 w-px bg-border" />

          {experiences.map((exp, index) => (
            <div key={`${exp.role}-${exp.company}`} className="relative pl-8">
              {/* Timeline Dot */}
              <div className="absolute left-0 top-8 w-3 h-3 rounded-full bg-primary z-10" />
              {/* Card */}
              <Card className="rounded-xl border border-border bg-card p-8">
                {/* Top Row */}
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-4">
                  <h3 className="text-xl font-bold">
                    {exp.role}
                    <span className="font-normal text-muted-foreground">
                      {" "}
                      · {exp.company}
                    </span>
                  </h3>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground shrink-0">
                    <span>{exp.time}</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Description */}
                {exp.description && (
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                )}

                <div className="flex items-center justify-end gap-2">
                  <Button>
                    <Link href={exp.link}>View More</Link>
                  </Button>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

"use client";

import { MapPin } from "lucide-react";
import { experiences } from "@/lib/experiences";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const ExperienceSection = () => {
  const isMobile = useIsMobile();
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div
          className={`flex items-center gap-4 mb-6 md:mb-12 ${isMobile ? "justify-center" : "justify-start"}`}
        >
          <div className="flex items-baseline gap-3 shrink-0">
            {/* <span className="text-sm font-medium text-primary">04</span> */}
            <motion.h2
              initial={{ opacity: 0, x: -110 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.3,
                delay: 0.3,
                ease: [0.5, 1, 0.36, 1],
              }}
              className="text-4xl font-extrabold tracking-tight text-muted-foreground"
            >
              Experience
            </motion.h2>
          </div>
          {isMobile ? (
            <></>
          ) : (
            <motion.div
              initial={{ opacity: 0, x: -110 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: 0.3,
                ease: [0.5, 1, 0.36, 1],
              }}
              className="h-px flex-1 bg-border"
            />
          )}
        </div>

        {/* Timeline */}
        <div className="relative flex flex-col gap-8">
          {/* Vertical Line */}
          {isMobile ? (
            <></>
          ) : (
            <motion.div
              initial={{ opacity: 0, scaleY: 0 }}
              whileInView={{ opacity: 1, scaleY: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.3,
                ease: [0.5, 1, 0.36, 1],
              }}
              style={{ originY: 0 }}
              className="absolute left-[5px] top-0 bottom-0 w-px bg-border"
            />
          )}

          {experiences.map((exp, _) => (
            <div
              key={`${exp.role}-${exp.company}`}
              className={`relative ${isMobile ? "" : "pl-8"}`}
            >
              {/* Timeline Dot */}
              {isMobile ? (
                <></>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.35,
                    delay: 0.4,
                    ease: [0.5, 1, 0.36, 1],
                  }}
                  className="absolute left-0 top-8 w-3 h-3 rounded-full bg-primary z-10"
                />
              )}

              {/* Card */}
              <motion.div
                initial={{ opacity: 0, x: -110 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55 + experiences.indexOf(exp) * 0.1,
                  delay: 0.3,
                  ease: [0.5, 1, 0.36, 1],
                }}
              >
                <Card className="rounded-xl border border-border bg-card p-8">
                  {/* Top Row */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-4">
                    <h3 className="text-xl font-bold">
                      {exp.role}
                      <span className="font-normal text-muted-foreground">
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
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

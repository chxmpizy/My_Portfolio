"use client";
import { skillCategories } from "@/lib/skills";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

export const SkillSection = () => {
  const isMobile = useIsMobile();

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div
          className={`flex items-center gap-4 mb-6 md:mb-12 ${isMobile ? "justify-center" : "justify-start"}`}
        >
          <div className="flex items-baseline gap-3 shrink-0">
            {/* <span className="text-sm font-medium text-primary">05</span> */}
            <motion.h2
              initial={{ opacity: 0, x: 110 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.3,
                delay: 0.3,
                ease: [0.5, 1, 0.36, 1],
              }}
              className="text-4xl font-extrabold tracking-tight text-muted-foreground"
            >
              Skills &amp; Tools
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

        {/* Skills Grid */}
        <div
          className={`grid ${isMobile ? "grid-cols-1" : "grid-cols-2 md:grid-cols-4"} gap-12`}
        >
          {skillCategories.map((category) => (
            <div key={category.label}>
              <motion.h3
                initial={{ opacity: 0, x: 110 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45 + skillCategories.indexOf(category) * 0.1,
                  delay: 0.3,
                  ease: [0.5, 1, 0.36, 1],
                }}
                className="text-xs font-semibold tracking-widest text-muted-foreground mb-5"
              >
                {category.label}
              </motion.h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, x: 110 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.55 + skillCategories.indexOf(category) * 0.1,
                      delay: 0.3,
                      ease: [0.5, 1, 0.36, 1],
                    }}
                    className="px-3 py-1.5 text-sm font-medium rounded-md border border-border bg-card text-foreground"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

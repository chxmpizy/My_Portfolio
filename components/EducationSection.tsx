"use client";

import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const EducationSection = () => {
  const isMobile = useIsMobile();
  return (
    <section
      id="education"
      className="pt-12 px-4 md:pt-24 md:px-6 h-auto max-h-[70vh]"
    >
      <div className="max-w-5xl mx-auto w-full flex flex-col ">
        <div
          className={`flex items-center gap-4 mb-6 md:mb-12 ${isMobile ? "justify-center" : "justify-start"}`}
        >
          <div className={`flex items-baseline gap-3 shrink-0 `}>
            {/* <span className="text-sm font-medium text-primary">02</span> */}
            <motion.h2
              initial={{ opacity: 0, x: -110 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.3,
                delay: 0.3,
                ease: [0.5, 1, 0.36, 1],
              }}
              className={`text-4xl font-extrabold tracking-tighter text-muted-foreground ${
                isMobile ? "tracking-wide" : "tracking-tighter"
              }`}
            >
              Education
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
        {/* Content */}

        <div className="flex-1 flex items-center text-muted-foreground flex-col justify-center gap-2 md:gap-4">
          <motion.div
            initial={{ opacity: 0, y: 90 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.35,
              ease: [0.5, 1, 0.36, 1],
            }}
            className="backdrop-blur-md p-5 bg-primary/10 rounded-lg"
          >
            <GraduationCap width={40} height={40} className="text-primary" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 90 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.35,
              ease: [0.5, 1, 0.36, 1],
            }}
            className="text-xl md:text-3xl font-semibold text-primary text-center"
          >
            Thammasat University
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.55,
              delay: 0.35,
              ease: [0.5, 1, 0.36, 1],
            }}
            className="text-base md:text-xl font-medium text-center"
          >
            Bachelor of Science and Technology
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 110 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.35,
              ease: [0.5, 1, 0.36, 1],
            }}
            className="text-base md:text-xl font-medium text-center"
          >
            Computer Science Major
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 120 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.65,
              delay: 0.35,
              ease: [0.5, 1, 0.36, 1],
            }}
            className="text-base md:text-xl font-medium text-center"
          >
            GPA : 3.37
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

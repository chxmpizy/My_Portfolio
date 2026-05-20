import React from "react";
import { Navbar } from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import { ProjectSection } from "@/components/ProjectSection";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import { SkillSection } from "@/components/SkillSection";
import ContactMe from "@/components/ContactMe";

const page = () => {
  return (
    <div>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <HeroSection />
      <EducationSection />

      <ProjectSection />
      <ExperienceSection />
      <SkillSection />
      <ContactMe />
    </div>
  );
};

export default page;

import React from "react";
import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-5xl mx-auto w-full flex flex-col min-h-[70vh]">
        <div className="flex items-center gap-4 mb-12">
          <div className="flex items-baseline gap-3 shrink-0">
            {/* <span className="text-sm font-medium text-primary">02</span> */}
            <h2 className="text-4xl font-extrabold tracking-tight text-muted-foreground">
              Education
            </h2>
          </div>
          <div className="h-px flex-1 bg-border" />
        </div>
        {/* Content */}
        <div className="flex-1 flex items-center text-muted-foreground flex-col justify-center gap-4">
          <div className="backdrop-blur-md p-5 bg-primary/10 rounded-lg">
            <GraduationCap width={40} height={40} className="text-primary" />
          </div>
          <p className="text-3xl font-semibold text-primary">
            Thammasat University
          </p>
          <p className="text-xl font-medium">
            Bachelor of Science and Technology
          </p>
          <p className="text-xl font-medium">Computer Science Major</p>
          <p className="text-xl font-medium">GPA : 3.37</p>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

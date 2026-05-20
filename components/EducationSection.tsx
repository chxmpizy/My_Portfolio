import React from "react";
import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  return (
    <section id="education">
      <div className="h-auto">
        <div className="flex items-center justify-center pt-30">
          <h1 className="text-4xl font-extrabold">Education</h1>
        </div>
        <div className="flex items-center flex-col mt-10 justify-center gap-4">
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

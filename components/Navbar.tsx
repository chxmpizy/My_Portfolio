"use client";

import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Download } from "lucide-react";

const downloadResume = (url: string) => {
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "Rattasat_Resume.pdf");
  document.body.appendChild(link);
  link.click();
  link.parentNode?.removeChild(link);
};

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY >= 20);
    };

    window.addEventListener("scroll", handleScroll);
    // Check initial scroll position
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed w-full text-muted-foreground">
      <div
        className={`flex justify-around items-center mt-5 transition-all duration-300 ease-in-out ${
          scrolled
            ? "max-w-5xl mx-auto px-8 py-3 bg-card/20 backdrop-blur-lg rounded-full shadow-md border border-border"
            : "w-full px-4 py-2"
        }`}
      >
        <div>
          <a href="#" className="text-lg font-extrabold">
            Ch@mpizz.
          </a>
        </div>
        <nav>
          <div>
            <ul
              className={`gap-10 text-lg font-semibold flex items-center duration-300 ${scrolled ? "text-base" : ""}`}
            >
              <li>
                <a href="#education">Education</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="gap-4 flex-col items-center">
          <Button
            className="cursor-pointer font-bold text-lg p-5"
            onClick={() => downloadResume("/Rattasat_Resume.pdf")}
          >
            Resume <Download />
          </Button>
        </div>
      </div>
    </div>
  );
};

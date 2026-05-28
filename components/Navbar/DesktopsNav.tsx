"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Download } from "lucide-react";
import downloadResume from "@/hooks/downloadResume";

const DesktopsNav = ({ scrolled }: { scrolled: boolean }) => {
  return (
    <div className="fixed w-full text-muted-foreground">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.5, 1, 0.36, 1] }}
        style={{
          transition:
            "max-width 0.5s ease, padding 0.5s ease, background 0.5s ease, border-radius 0.5s ease, box-shadow 0.5s ease, border-color 0.5s ease",
        }}
        className={`flex justify-around items-center mt-5 ${
          scrolled
            ? "max-w-5xl mx-auto px-8 py-3 bg-card/20 backdrop-blur-lg rounded-full shadow-md border border-border"
            : "max-w-full mx-auto px-4 py-2 border border-transparent"
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
              className={`gap-10 text-lg font-semibold flex items-center transition-[font-size] duration-300 ${scrolled ? "text-base" : ""}`}
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
            onClick={() => downloadResume("/Resume.pdf")}
          >
            Resume <Download />
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default DesktopsNav;

"use client";
import { Button } from "../ui/button";
import { Download, Menu, X } from "lucide-react";
import downloadResume from "@/hooks/downloadResume";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed w-full text-muted-foreground z-50">
      <AnimatePresence mode="wait">
        {isOpen ? (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{
              duration: 0.4,
              ease: [0.32, 0.72, 0, 1],
            }}
            className="fixed inset-0 flex flex-col justify-center items-center bg-card/80 backdrop-blur-md"
          >
            <button
              className="absolute top-6 right-6 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              <X size={28} />
            </button>

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.3 }}
              className="absolute top-6 left-6"
            >
              <a href="#" className="text-lg font-extrabold">
                Ch@mpizz.
              </a>
            </motion.div>

            <nav className="flex flex-col items-center gap-8">
              {["education", "projects", "experience", "skills"].map(
                (item, i) => (
                  <motion.a
                    key={item}
                    href={`#${item}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.1 + i * 0.08,
                      duration: 0.35,
                      ease: [0.32, 0.72, 0, 1],
                    }}
                    className="text-2xl font-semibold capitalize"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </motion.a>
                ),
              )}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.1 + 4 * 0.08,
                  duration: 0.35,
                  ease: [0.32, 0.72, 0, 1],
                }}
              >
                <Button
                  className="cursor-pointer font-bold text-lg p-5"
                  onClick={() => downloadResume("/Rattasat_Resume.pdf")}
                >
                  Resume <Download />
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        ) : (
          <motion.div
            key="menu-button"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{
              duration: 0.5,
              ease: [0.32, 0.72, 0, 1],
            }}
            className="flex justify-end mx-4 items-center mt-5"
          >
            <Menu
              className="cursor-pointer bg-card/20 backdrop-blur-lg p-2 rounded-lg"
              width={45}
              height={45}
              onClick={() => setIsOpen(true)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;

"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const HeroSection = () => {
  const isMobile = useIsMobile();
  return (
    <section id="hero">
      <div
        className={`flex h-[90vh] ${isMobile ? "flex-col-reverse py-12" : "flex-row py-30"} items-center justify-around`}
      >
        <div
          className={`flex flex-col ${isMobile ? "max-w-[1000%] px-10" : "max-w-[40%]"}`}
        >
          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.5, 1, 0.36, 1] }}
              className={`font-extrabold text-muted-foreground ${isMobile ? "text-2xl mt-2 text-center" : "text-5xl"}`}
            >
              Hi , Everyone 👋
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -70 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: [0.5, 1, 0.36, 1],
              }}
              className={`font-semibold text-muted-foreground ${isMobile ? "text-center text-2xl" : "text-5xl"}`}
            >
              I&apos;m Rattasat Onnomdee
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -90 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.3,
                ease: [0.5, 1, 0.36, 1],
              }}
              className={`font-medium ${isMobile ? "text-center text-md " : "text-justify text-lg"} text-muted-foreground leading-[1.8]`}
            >
              I&apos;m a passionate about Data Engineering , AI/ML Engineer and
              Devops Engineer. <br />
              <motion.span
                initial={{ opacity: 0, x: -110 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.45,
                  ease: [0.5, 1, 0.36, 1],
                }}
              >
                I am also interested in Cloud Computing & MLOps, And always
                finding new things to learn.
              </motion.span>
            </motion.p>
          </div>
          <div
            className={`flex items-center gap-5 mt-4 ${isMobile ? "justify-center" : "justify-start"}`}
          >
            {/* <Button className="text-lg font-semibold p-5 rounded-xl cursor-pointer">
              Contact Me <ArrowUpRight />
            </Button> */}
            <motion.a
              initial={{ opacity: 0, x: -130 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.5,
                ease: [0.5, 1, 0.36, 1],
              }}
              href="https://github.com/chxmpizz"
            >
              <Image
                className="rounded-lg"
                src="/github.svg"
                alt="github"
                width={25}
                height={25}
              />
              {/* <ArrowUpRight className="h-4 w-4" /> */}
            </motion.a>
            <motion.a
              initial={{ opacity: 0, x: -110 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.5,
                ease: [0.5, 1, 0.36, 1],
              }}
              href="https://www.linkedin.com/in/rattasat-onnomdee-21726b2a0/"
            >
              <Image
                className="rounded-lg"
                src="/linkedin.svg"
                alt="linkedin"
                width={25}
                height={25}
              />
              {/* <ArrowUpRight className="h-4 w-4" /> */}
            </motion.a>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            ease: [0.5, 1, 0.36, 1],
          }}
        >
          <Image
            className="rounded-lg max-w-[300px]"
            src="/my_image.jpg"
            alt="profile"
            width={isMobile ? 200 : 300}
            height={isMobile ? 200 : 300}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="hero">
      <div className="flex h-[90vh] items-center justify-around pt-30">
        <div className="flex flex-col max-w-[40%]">
          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.5, 1, 0.36, 1] }}
              className="font-extrabold text-muted-foreground text-5xl"
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
              className="font-semibold text-5xl text-muted-foreground"
            >
              I'm Rattasat Onnomdee
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -90 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.3,
                ease: [0.5, 1, 0.36, 1],
              }}
              className="font-medium text-lg text-muted-foreground leading-[1.8]"
            >
              I'm a passionate about Data Engineering , AI/ML Engineer and
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
          <div className="flex items-center justify-start gap-5 mt-2">
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
            className="rounded-lg"
            src="/my_image.jpg"
            alt="profile"
            width={300}
            height={300}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

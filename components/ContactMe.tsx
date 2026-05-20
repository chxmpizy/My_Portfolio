"use client";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const ContactMe = () => {
  return (
    <section id="contactme" className=" py-24 px-6">
      <div className="max-w-5xl mx-auto  w-full flex items-center flex-col min-h-[50vh]">
        <div className="flex items-center gap-4 mb-12">
          <div className="flex items-baseline gap-3 shrink-0">
            {/* <h2 className="text-lg font-extrabold tracking-widest text-accent">
              06 - Contact Me
            </h2> */}
          </div>
        </div>
        <div className="flex flex-col items-center gap-5">
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: 0.2,
              ease: [0.5, 1, 0.36, 1],
            }}
            className="text-4xl text-center font-extrabold"
          >
            Let&apos;s talk about your project, idea, or just say hi.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.4,
              ease: [0.5, 1, 0.36, 1],
            }}
            className="text-lg text-muted-foreground"
          >
            I&apos;m currently open to new opportunities, whether in full-time
            roles or freelance collaborations. If you&apos;re looking for a
            dedicated and passionate developer to bring your ideas to life,
            I&apos;d love to connect!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.6,
              ease: [0.5, 1, 0.36, 1],
            }}
          >
            <Button className="text-lg font-semibold p-5 rounded-xl cursor-pointer">
              Contact Me <ArrowUpRight />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;

import React from "react";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";

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
          <p className="text-4xl text-center font-extrabold">
            Let's talk about your project, idea, or just say hi.
          </p>
          <p className="text-lg text-muted-foreground">
            I’m currently open to new opportunities, whether in full-time roles
            or freelance collaborations. If you’re looking for a dedicated and
            passionate developer to bring your ideas to life, I’d love to
            connect!
          </p>
          <Button className="text-lg font-semibold p-5 rounded-xl cursor-pointer">
            Contact Me <ArrowUpRight />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;

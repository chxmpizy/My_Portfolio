import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowUpRight, Mail, MapPin, ExternalLink } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero">
      <div className="flex h-[90vh] items-center justify-around pt-30">
        <div className="flex flex-col max-w-[40%]">
          <div className="space-y-4">
            <p className="font-extrabold text-muted-foreground text-5xl">
              Hi , Everyone 👋
            </p>
            <p className="font-semibold text-5xl text-muted-foreground">
              I'm Rattasat Onnomdee
            </p>
            <p className="font-medium text-lg text-muted-foreground leading-[1.8]">
              I'm a passionate about Data Engineering , AI/ML Engineer and
              Devops Engineer. <br />I am also interested in Cloud Computing &
              MLOps, And always finding new things to learn.
            </p>
          </div>
          <div className="flex items-center justify-start gap-5 mt-2">
            {/* <Button className="text-lg font-semibold p-5 rounded-xl cursor-pointer">
              Contact Me <ArrowUpRight />
            </Button> */}
            <a href="https://github.com/chxmpizz">
              <Image
                className="rounded-lg"
                src="/github.svg"
                alt="github"
                width={25}
                height={25}
              />
              {/* <ArrowUpRight className="h-4 w-4" /> */}
            </a>
            <a href="https://www.linkedin.com/in/rattasat-onnomdee-21726b2a0/">
              <Image
                className="rounded-lg"
                src="/linkedin.svg"
                alt="linkedin"
                width={25}
                height={25}
              />
              {/* <ArrowUpRight className="h-4 w-4" /> */}
            </a>
          </div>
        </div>
        <div>
          <Image
            className="rounded-lg"
            src="/my_image.jpg"
            alt="profile"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

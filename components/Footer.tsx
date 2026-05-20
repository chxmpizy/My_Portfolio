import React from "react";
import Image from "next/image";
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-accent/20">
      <div className="px-10 py-5 flex items-start flex-col gap-5">
        <div className="text-muted-foreground flex w-full justify-between">
          <p>
            © 2026 Chxmpizz. <br />
            <span className="text-primary/60 text-sm">
              build a digital with passion and fun.
            </span>
          </p>
          <p>All rights reserved.</p>
        </div>
        <div className="flex gap-5">
          <a href="https://github.com/chxmpizz">
            <Image
              className="rounded-lg"
              src="/github.svg"
              alt="github"
              width={25}
              height={25}
            />
          </a>
          <a href="https://www.linkedin.com/in/rattasat-onnomdee-21726b2a0/">
            <Image
              className="rounded-lg"
              src="/linkedin.svg"
              alt="linkedin"
              width={25}
              height={25}
            />
          </a>
          <a href="mailto:[EMAIL_ADDRESS]">
            <Mail
              className="rounded-lg"
              size={25}
              strokeWidth={1.5}
              color="black"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

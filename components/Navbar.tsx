"use client";

import React, { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import DesktopsNav from "./Navbar/DesktopsNav";
import MobileNav from "./Navbar/MobileNav";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();

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
    <div>{isMobile ? <MobileNav /> : <DesktopsNav scrolled={scrolled} />}</div>
  );
};

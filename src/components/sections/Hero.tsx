"use client";

// ============================================================
// src/components/sections/Hero.tsx
// ============================================================

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";
import { personal } from "@/data/portfolio";
import SignalField from "@/components/ui/SignalField";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const cyclingRoles = [
  "Creative Technologist",
  "Builder of Experiences",
  "Code · Visuals · Sound · Interactions",
  "Where Software Meets Expression",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("Creative Technologist");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(21);

  useEffect(() => {
    const current = cyclingRoles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;
    const pauseLength = 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < current.length) {
          setDisplayed(current.slice(0, charIndex + 1));
          setCharIndex((i) => i + 1);
        } else {
          setTimeout(() => setIsDeleting(true), pauseLength);
        }
      } else {
        if (charIndex > 0) {
          setDisplayed(current.slice(0, charIndex - 1));
          setCharIndex((i) => i - 1);
        } else {
          setIsDeleting(false);
          setRoleIndex((i) => (i + 1) % cyclingRoles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center bg-bg-primary overflow-hidden px-4 sm:px-6 lg:px-16"
    >
      {/* Signal field + grid */}
      <SignalField />
      <div className="absolute inset-0 bg-grid opacity-25" />

      {/* ── All content centered in one column ── */}
      <div className="relative z-10 flex flex-col items-start text-left gap-4 sm:gap-5 px-2 sm:px-6 lg:px-16 w-full pt-20 sm:pt-0 pb-20 sm:pb-0">
        {/* Availability badge */}
        <motion.div
          {...fadeUp(0.3)}
          className="inline-flex flex-wrap items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 rounded-full border border-accent-cyan/20 bg-accent-cyan/5 font-mono text-[9px] sm:text-xs text-accent-cyan tracking-wide sm:tracking-widest uppercase max-w-full"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse-slow" />
          Open to Collabs · Internships · Creative Projects
        </motion.div>

        {/* Brand byline — subtle, not dominant */}
        <motion.p
          {...fadeUp(0.4)}
          className="font-mono text-text-muted text-[10px] sm:text-xs tracking-[0.12em] sm:tracking-[0.25em] uppercase"
        >
          {personal.brandName} &nbsp;·&nbsp; by {personal.fullName}
        </motion.p>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.5)}
          className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-5xl leading-[0.95] sm:leading-tight tracking-tight text-text-primary"
        >
          Building experiences
          <br />
          <span className="text-gradient">at the edge of code.</span>
        </motion.h1>

        {/* Typing role */}
        <motion.div
          {...fadeUp(0.6)}
          className="h-6 sm:h-7 flex items-center justify-start w-full overflow-hidden"
        >
          <span className="font-mono text-accent-cyan text-xs sm:text-base tracking-normal sm:tracking-wide truncate">
            {displayed}
            <span className="animate-blink border-r-2 border-accent-cyan ml-0.5">
              &nbsp;
            </span>
          </span>
        </motion.div>

        {/* Bio */}
        <motion.p
          {...fadeUp(0.7)}
          className="font-body text-text-secondary text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl"
        >
          Using software as a medium to create interactive, human-centered
          experiences.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.8)}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto"
        >
          <Link
            href="/#projects"
            className="w-full sm:w-auto text-center px-4 sm:px-6 py-3 rounded-md font-mono text-xs sm:text-sm font-bold bg-accent-cyan text-bg-primary hover:shadow-glow-button hover:scale-105 transition-all duration-300"
          >
            Explore Work
          </Link>
          <Link
            href="/#contact"
            className="w-full sm:w-auto text-center px-4 sm:px-6 py-3 rounded-md font-mono text-xs sm:text-sm border border-border-accent text-accent-cyan hover:bg-accent-cyan/10 hover:shadow-glow-button transition-all duration-300"
          >
            Contact Me
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        {...fadeUp(1.0)}
        className="absolute bottom-6 left-0 right-0 flex justify-center z-10"
      >
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="group flex flex-col items-center gap-1 cursor-pointer text-text-muted hover:text-accent-cyan transition-colors duration-300 animate-float"
          aria-label="Scroll down"
        >
          <span className="mono-label text-xs">scroll</span>
          <FiArrowDown size={18} />
        </a>
      </motion.div>
    </section>
  );
}

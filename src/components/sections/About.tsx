"use client";

// ============================================================
// src/components/sections/About.tsx
// ============================================================

import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import DoubleSlash from "@/components/ui/DoubleSlash";
import { personal, resumeUrl } from "@/data/portfolio";

// Fun facts — icon filenames map to /public/icons/
const facts = [
  {
    icon: "/icons/music.png",
    text: "Music is always on, it sets the mood for everything I build",
  },
  {
    icon: "/icons/football.png",
    text: "I play Football as recreational but very competitive about it",
  },
  {
    icon: "/icons/film.png",
    text: "I watch alot of movies studying how stories are told visually",
  },
  {
    icon: "/icons/fitness.png",
    text: "Workout regularly — discipline off-screen carries into the work",
  },
];

const currently = [
  {
    icon: "/icons/rocket.png",
    text: "Building a public portfolio, project by project",
  },
  {
    icon: "/icons/books.png",
    text: "Deepening my Next.js & TypeScript skills",
  },
  {
    icon: "/icons/internet.png",
    text: "Learning system design fundamentals",
  },
  {
    icon: "/icons/requirements.png",
    text: "Applying for Internships",
  },
];

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="about"
      className="py-24 bg-bg-secondary relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div
        ref={ref}
        className={`
          relative z-10 max-w-6xl mx-auto px-8
          grid grid-cols-1 lg:grid-cols-2 gap-16 items-center
          transition-all duration-700
          ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        `}
      >
        {/* ── Left: text ───────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-6"
        >
          {/* Section label */}
          <span className="mono-label flex items-center gap-1">
            <DoubleSlash /> about me
          </span>

          <p className="font-body text-text-secondary leading-relaxed">
            Hello! My name is{" "}
            <strong className="text-text-primary">{personal.fullName}</strong>,
            and I create interactive experiences that blend code, visuals, and
            sound into something expressive and human.
          </p>

          <p className="font-body text-text-secondary leading-relaxed">
            I started in web development and currently in my second year at{" "}
            <strong className="text-text-primary">
              University of Prince Edward Island
            </strong>
            , but I&apos;ve become interested in more than just building
            software. My work sits between disciplines, connecting technology,
            media, and interaction to create experiences that people don&apos;t
            just use, but actually feel. I&apos;m not focused on mastering a
            single discipline. Instead, I approach software as a medium — a way
            to express ideas, shape atmosphere, and create meaning.
          </p>

          <p className="font-body text-text-secondary leading-relaxed">
            Currently targeting{" "}
            <strong className="text-text-primary">
              Internships and Creative Collaborations
            </strong>{" "}
            across software development and full-stack roles. Based in PEI, open
            to remote.
          </p>
        </motion.div>

        {/* ── Right: Beyond the code + currently ─────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-8"
        >
          {/* Beyond the code — plain list, Flaticon icons */}
          <div className="card-surface border-glow rounded-xl p-6 flex flex-col gap-4">
            <span className="mono-label flex items-center gap-2">
              <DoubleSlash /> beyond the code
            </span>
            <ul className="flex flex-col gap-3">
              {facts.map((fact) => (
                <li
                  key={fact.icon}
                  className="flex items-center gap-3 font-body text-text-secondary text-sm leading-relaxed"
                >
                  {/* Icon — falls back gracefully if file not yet added */}
                  <span className="shrink-0 w-5 h-5 relative">
                    <Image
                      src={fact.icon}
                      alt=""
                      width={20}
                      height={20}
                      className="object-contain brightness-0 invert opacity-60 hue-rotate-[175deg] saturate-[3]"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                  </span>
                  <span>{fact.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Currently */}
          <div className="card-surface border-glow rounded-xl p-6 flex flex-col gap-4">
            <span className="mono-label">
              <DoubleSlash /> currently
            </span>
            <ul className="flex flex-col gap-3">
              {currently.map((currently) => (
                <li
                  key={currently.icon}
                  className="flex items-center gap-3 font-body text-text-secondary text-sm leading-relaxed"
                >
                  {/* Icon — falls back gracefully if file not yet added */}
                  <span className="shrink-0 w-5 h-5 relative">
                    <Image
                      src={currently.icon}
                      alt=""
                      width={20}
                      height={20}
                      className="object-contain brightness-0 invert opacity-60 hue-rotate-[175deg] saturate-[3]"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                  </span>
                  <span>{currently.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

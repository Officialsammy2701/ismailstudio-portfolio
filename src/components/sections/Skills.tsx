"use client";

// ============================================================
// src/components/sections/Skills.tsx
// Skills data lives in src/data/portfolio.ts.
// ============================================================

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import DoubleSlash from "@/components/ui/DoubleSlash";
import { skills } from "@/data/portfolio";

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="skills"
      className="py-24 bg-bg-primary relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid opacity-40" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`
            text-center mb-16
            transition-all duration-700
            ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
        >
          <span className="mono-label flex items-center gap-2 justify-center mb-4">
            <DoubleSlash /> tools of the trade
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-text-primary">
            Skills &amp; <span className="text-gradient">Technologies</span>
          </h2>
        </motion.div>

        {/* Skill category grid */}
        <div className="grid grid-cols-5 gap-6">
          {skills.map((group, groupIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: groupIdx * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`
                card-surface border-glow rounded-xl p-6
                flex flex-col gap-4
                transition-all duration-700
                ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
              `}
              style={{ transitionDelay: `${groupIdx * 100}ms` }}
            >
              {/* Category label */}
              <span className="mono-label">{group.category}</span>

              {/* Skill pills */}
              <ul className="flex flex-col gap-2">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="font-body text-sm text-text-secondary hover:text-text-primary transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

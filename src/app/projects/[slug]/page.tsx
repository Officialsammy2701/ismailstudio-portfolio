"use client";

// ============================================================
// src/app/projects/[slug]/page.tsx
// Full-screen project viewer — Matt Gross style.
// Each project gets its own page. The project content fills
// the screen. Navigation sits at the bottom exactly like
// mattgross.io: title + tags left, date + nav links right.
// ============================================================

import { useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import DoubleSlash from "@/components/ui/DoubleSlash";
import { projects } from "@/data/portfolio";

function getProjectDate(project: { year?: string; month?: string }) {
  if (project.month && project.year) return `${project.month} ${project.year}`;
  if (project.year) return project.year;
  return "";
}

export default function ProjectViewer() {
  const router = useRouter();
  const params = useParams();
  const slug = params?.slug as string;

  const currentIndex = projects.findIndex((p) => p.id === slug);
  const project = projects[currentIndex];
  const prevProject = projects[currentIndex - 1] ?? null;
  const nextProject = projects[currentIndex + 1] ?? null;

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") router.push("/#projects");
      if (e.key === "ArrowLeft" && prevProject) {
        router.push(`/projects/${prevProject.id}`);
      }
      if (e.key === "ArrowRight" && nextProject) {
        router.push(`/projects/${nextProject.id}`);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [router, prevProject, nextProject]);

  if (!project) {
    router.push("/#projects");
    return null;
  }

  return (
    <motion.main
      key={project.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="min-h-screen bg-bg-primary relative overflow-hidden"
    >
      {/* subtle background */}

      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute inset-0 bg-black/20" />

      {/* centered project visual */}
      <motion.div
        key={project.id}
        initial={{
          scale: 1.25,
          opacity: 0,
          y: 40,
        }}
        animate={{
          scale: 1,
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute inset-0 flex items-center justify-center px-4 sm:px-8 lg:px-12 pt-4 pb-32"
      >
        <div className="relative w-[70vw] sm:w-[60vw] lg:w-[52vw] h-[52vh] sm:h-[60vh] lg:h-[66vh] flex items-center justify-center">
          <img
            src={project.image}
            alt={project.title}
            className="
              max-w-full max-h-full
              object-contain
              rounded-lg
              border border-white/10
              shadow-[0_0_120px_rgba(255,255,255,0.04)]
            "
          />
        </div>
      </motion.div>

      {/* bottom meta bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="absolute bottom-0 left-0 right-0 z-20"
      >
        <motion.div
          initial={{ backgroundColor: "rgba(10,10,15,0.8)" }}
          animate={{ backgroundColor: "rgba(10,10,15,0)" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="px-4 sm:px-6 py-3 sm:py-4 min-h-[80px] sm:min-h-[90px]"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 py-6 sm:py-7 min-h-[120px] sm:min-h-[132px]">
            {/* left */}
            <div className="flex flex-col items-center sm:items-start justify-center gap-2 text-center sm:text-left">
              <p className="font-mono text-base sm:text-lg text-text-primary">
                <span className="font-bold text-accent-cyan">
                  Exploration {String(currentIndex + 1).padStart(2, "0")}:
                </span>{" "}
                {project.title}
              </p>

              <p className="font-mono text-sm sm:text-base text-text-secondary">
                {project.tags.join(", ")}
              </p>
            </div>

            {/* right */}
            <div className="flex flex-col items-center sm:items-end justify-center gap-2 text-center sm:text-right">
              <p className="font-mono text-base sm:text-lg text-text-primary">
                {getProjectDate(project)}
              </p>

              <div className="flex flex-wrap items-center justify-center sm:justify-end gap-1.5 font-mono text-sm sm:text-base">
                {/* Main */}
                <Link
                  href="/#projects"
                  className="text-text-muted hover:text-accent-cyan transition-colors underline underline-offset-2 transition-all duration-300 hover:translate-y-[-1px]"
                >
                  ← Main
                </Link>

                <DoubleSlash />

                {/* Previous */}
                {prevProject && (
                  <>
                    <Link
                      href={`/projects/${prevProject.id}`}
                      className="text-text-muted hover:text-accent-cyan transition-colors underline underline-offset-2 transition-all duration-300 hover:translate-y-[-1px]"
                    >
                      ← {String(currentIndex).padStart(2, "0")}
                    </Link>
                  </>
                )}

                <span className="text-accent-cyan">/</span>

                {/* Current */}
                <span className="text-accent-cyan font-bold">
                  {String(currentIndex + 1).padStart(2, "0")}
                </span>

                {/* Next */}
                {nextProject && (
                  <>
                    <span className="text-accent-cyan">/</span>
                    <Link
                      href={`/projects/${nextProject.id}`}
                      className="text-text-muted hover:text-accent-cyan transition-colors underline underline-offset-2 transition-all duration-300 hover:translate-y-[-1px]"
                    >
                      {String(currentIndex + 2).padStart(2, "0")} →
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.main>
  );
}

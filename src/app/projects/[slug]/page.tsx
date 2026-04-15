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
import DoubleSlash from "@/components/ui/DoubleSlash";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { projects } from "@/data/portfolio";

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
    <main className="min-h-screen bg-bg-primary relative overflow-hidden">
      {/* subtle background */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute inset-0 bg-black/20" />

      {/* centered project visual */}
      <div className="absolute inset-0 flex items-center justify-center px-6 pt-10 pb-32 sm:px-10 sm:pb-28">
        <div className="relative flex items-center justify-center w-full h-full">
          <img
            src={project.image}
            alt={project.title}
            className="
              max-w-[88vw] sm:max-w-[82vw] lg:max-w-[70vw]
              max-h-[52vh] sm:max-h-[62vh] lg:max-h-[68vh]
              w-auto h-auto object-contain
              rounded-lg sm:rounded-xl
              border border-white/10
              shadow-[0_0_60px_rgba(255,255,255,0.06)]
            "
          />
        </div>
      </div>

      {/* bottom-left project info */}
      <div className="absolute left-0 right-0 bottom-20 sm:bottom-24 z-10 px-5 sm:px-6 pointer-events-none">
        <div className="max-w-[18rem] sm:max-w-md">
          <h1 className="font-display font-bold text-lg sm:text-xl lg:text-2xl text-text-primary leading-tight">
            {project.title}
          </h1>

          <p className="mt-2 font-body text-sm sm:text-base text-text-secondary leading-relaxed">
            {project.longDesc || project.description}
          </p>
        </div>
      </div>

      {/* bottom meta bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-border-subtle bg-bg-primary/75 backdrop-blur-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between px-4 sm:px-6 py-4">
          {/* left */}
          <div className="flex flex-col gap-1">
            <p className="font-mono text-xs sm:text-sm text-text-primary">
              <span className="font-bold">
                Exploration {String(currentIndex + 1).padStart(2, "0")}:
              </span>{" "}
              {project.title}
            </p>
            <p className="font-mono text-[11px] sm:text-xs text-text-muted">
              {project.year}
            </p>
          </div>

          {/* right */}
          <div className="flex flex-wrap items-center gap-1.5 font-mono text-[11px] sm:text-sm">
            <Link
              href="/#projects"
              className="text-text-muted hover:text-accent-cyan transition-colors underline underline-offset-2"
            >
              ← Main
            </Link>

            <DoubleSlash />

            {prevProject ? (
              <Link
                href={`/projects/${prevProject.id}`}
                className="text-text-muted hover:text-accent-cyan transition-colors"
              >
                {String(currentIndex).padStart(2, "0")}
              </Link>
            ) : (
              <span className="text-text-muted/25">--</span>
            )}

            <DoubleSlash />

            <span className="text-accent-cyan font-bold">
              {String(currentIndex + 1).padStart(2, "0")}
            </span>

            <DoubleSlash />

            {nextProject ? (
              <Link
                href={`/projects/${nextProject.id}`}
                className="text-text-muted hover:text-accent-cyan transition-colors"
              >
                {String(currentIndex + 2).padStart(2, "0")} →
              </Link>
            ) : (
              <span className="text-text-muted/25">--</span>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

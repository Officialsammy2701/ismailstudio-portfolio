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
    <main className="min-h-screen bg-bg-primary relative overflow-hidden">
      {/* subtle background */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute inset-0 bg-black/20" />

      {/* centered project visual */}
      <div className="absolute inset-0 flex items-center justify-center px-6 pt-4 pb-28 sm:px-10 sm:pt-6 sm:pb-24">
        <div className="relative flex items-center justify-center w-full h-full">
          <img
            src={project.image}
            alt={project.title}
            className="
              max-w-[92vw] sm:max-w-[84vw] lg:max-w-[76vw]
              max-h-[58vh] sm:max-h-[68vh] lg:max-h-[74vh]
              w-auto h-auto object-contain
              rounded-lg sm:rounded-xl
              border border-white/10
              shadow-[0_0_80px_rgba(255,255,255,0.04)]
            "
          />
        </div>
      </div>

      {/* bottom meta bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-border-subtle bg-bg-primary/75 backdrop-blur-sm">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between px-4 sm:px-6 py-5 sm:py-6 min-h-[108px] sm:min-h-[120px]">
          {/* left */}
          <div className="flex flex-col gap-1.5">
            <p className="font-mono text-xs sm:text-sm text-text-primary">
              <span className="font-bold">
                Exploration {String(currentIndex + 1).padStart(2, "0")}:
              </span>{" "}
              {project.title}
            </p>

            <p className="font-mono text-[11px] sm:text-xs text-text-muted">
              {project.tags.join(", ")}
            </p>
          </div>

          {/* right */}
          <div className="flex flex-col items-start sm:items-end gap-2">
            <p className="font-mono text-[11px] sm:text-xs text-text-muted">
              {getProjectDate(project)}
            </p>

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
      </div>
    </main>
  );
}
// ============================================================
// src/app/archive/page.tsx
// Full archive of every project — linked from the projects
// section "view the archive" link.
// ============================================================

import type { Metadata } from 'next'
import Link from 'next/link'
import { FiArrowLeft, FiExternalLink, FiGithub } from 'react-icons/fi'
import { projects, personal } from '@/data/portfolio'

export const metadata: Metadata = {
  title: 'Project Archive',
  description: `All projects ever built by ${personal.fullName}.`,
}

export default function ArchivePage() {
  return (
    <div className="min-h-screen bg-bg-primary pt-28 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Back link */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 mb-10 font-mono text-sm text-text-muted hover:text-accent-cyan transition-colors"
        >
          <FiArrowLeft size={14} /> Back to projects
        </Link>

        {/* Header */}
        <div className="mb-16">
          <p className="font-mono text-xs text-accent-cyan tracking-widest uppercase mb-2">
            {personal.brandName}
          </p>
          <h1 className="font-display font-bold text-5xl sm:text-6xl text-text-primary mb-4">
            All Projects
          </h1>
          <p className="font-body text-text-secondary">
            A complete archive of everything I&apos;ve built — {projects.length} projects and counting.
          </p>
        </div>

        {/* Table header */}
        <div className="grid grid-cols-[auto_1fr_auto] gap-6 pb-3 border-b border-border-subtle mb-2">
          <span className="mono-label text-xs w-10">Year</span>
          <span className="mono-label text-xs">Project</span>
          <span className="mono-label text-xs">Links</span>
        </div>

        {/* Project rows */}
        <div className="flex flex-col">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group grid grid-cols-[auto_1fr_auto] gap-6 py-5 border-b border-border-subtle hover:bg-bg-secondary/50 transition-colors duration-200 rounded-sm px-2 -mx-2"
            >
              {/* Year */}
              <span className="font-mono text-xs text-text-muted w-10 pt-1">
                {project.year}
              </span>

              {/* Title + description + tags */}
              <div className="flex flex-col gap-1.5">
                <h3 className="font-display font-bold text-base text-text-primary group-hover:text-accent-cyan transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="font-body text-text-secondary text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex items-center gap-2 flex-wrap pt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded font-mono text-xs bg-bg-tertiary border border-border-subtle text-text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex items-start gap-3 pt-1">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted hover:text-accent-cyan transition-colors"
                    aria-label="GitHub"
                  >
                    <FiGithub size={17} />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted hover:text-accent-cyan transition-colors"
                    aria-label="Live site"
                  >
                    <FiExternalLink size={17} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

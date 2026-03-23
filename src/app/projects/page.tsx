// ============================================================
// src/app/projects/page.tsx
// Full projects listing page — shows all projects from
// portfolio.ts, not just the featured ones.
// ============================================================

import type { Metadata } from 'next'
import Link from 'next/link'
import { FiGithub, FiExternalLink, FiArrowLeft } from 'react-icons/fi'
import { projects, personal } from '@/data/portfolio'

export const metadata: Metadata = {
  title:       'Projects',
  description: `All projects built by ${personal.fullName}.`,
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-bg-primary pt-28 pb-24 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Back link */}
        <Link
          href="/"
          className="
            inline-flex items-center gap-2 mb-10
            font-mono text-sm text-text-muted
            hover:text-accent-cyan transition-colors
          "
        >
          <FiArrowLeft size={14} /> Back home
        </Link>

        {/* Header */}
        <div className="mb-16">
          <span className="mono-label block mb-3">// all projects</span>
          <h1 className="font-display font-bold text-5xl sm:text-6xl text-text-primary">
            Everything I&apos;ve <span className="text-gradient">Built</span>
          </h1>
          <p className="font-body text-text-secondary mt-4 max-w-2xl">
            A collection of projects across web dev, data, and beyond.
            New ones ship regularly — check my{' '}
            <a
              href="https://github.com/yourusername"   // TODO: update
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-cyan hover:underline"
            >
              GitHub
            </a>{' '}
            for the latest commits.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.id}
              className="
                group card-surface border-glow rounded-xl overflow-hidden
                flex flex-col
                hover:border-accent-cyan/30 hover:shadow-glow-card
                transition-all duration-500
              "
            >
              {/* Placeholder image area */}
              <div className="
                h-40 bg-bg-tertiary border-b border-border-subtle
                flex items-center justify-center relative overflow-hidden
              ">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/10 via-accent-blue/5 to-accent-purple/10" />
                {project.featured && (
                  <span className="
                    absolute top-3 right-3
                    px-2 py-0.5 rounded text-xs font-mono
                    bg-accent-cyan/20 text-accent-cyan border border-accent-cyan/30
                  ">
                    Featured
                  </span>
                )}
                <span className="font-mono text-text-muted text-xs relative z-10">
                  // screenshot
                </span>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col gap-4 flex-1">
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="
                        px-2 py-0.5 rounded text-xs font-mono
                        bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col gap-2 flex-1">
                  <h2 className="
                    font-display font-bold text-xl text-text-primary
                    group-hover:text-accent-cyan transition-colors
                  ">
                    {project.title}
                  </h2>
                  <p className="font-body text-text-secondary text-sm leading-relaxed">
                    {project.longDesc || project.description}
                  </p>
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-2 border-t border-border-subtle">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex items-center gap-1.5
                        text-text-muted hover:text-accent-cyan
                        transition-colors text-sm font-mono
                      "
                    >
                      <FiGithub size={15} /> Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex items-center gap-1.5
                        text-text-muted hover:text-accent-cyan
                        transition-colors text-sm font-mono
                      "
                    >
                      <FiExternalLink size={15} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

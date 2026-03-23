'use client'

// ============================================================
// src/app/projects/[slug]/page.tsx
// Full-screen project viewer — Matt Gross style.
// Each project gets its own page. The project content fills
// the screen. Navigation sits at the bottom exactly like
// mattgross.io: title + tags left, date + nav links right.
// ============================================================

import { useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import Link from 'next/link'
import DoubleSlash from '@/components/ui/DoubleSlash'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { projects } from '@/data/portfolio'

export default function ProjectViewer() {
  const router       = useRouter()
  const params       = useParams()
  const slug         = params?.slug as string
  const currentIndex = projects.findIndex((p) => p.id === slug)
  const project      = projects[currentIndex]
  const prevProject  = projects[currentIndex - 1] ?? null
  const nextProject  = projects[currentIndex + 1] ?? null

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape')                        router.push('/#projects')
      if (e.key === 'ArrowLeft'  && prevProject)     router.push(`/projects/${prevProject.id}`)
      if (e.key === 'ArrowRight' && nextProject)     router.push(`/projects/${nextProject.id}`)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [router, prevProject, nextProject])

  if (!project) {
    router.push('/#projects')
    return null
  }

  return (
    <div className="fixed inset-0 bg-bg-primary z-50 flex flex-col overflow-hidden">

      {/* ── Main content area ──────────────────────────────── */}
      <div className="flex-1 flex items-center justify-center relative overflow-hidden">

        {/* Background grid + glow */}
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="
          absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-[700px] h-[400px] rounded-full
          bg-accent-cyan/5 blur-[120px] pointer-events-none
        " />

        {/* Project number — huge watermark */}
        <span className="
          absolute font-display font-extrabold
          text-[20rem] leading-none select-none pointer-events-none
          text-white/[0.03]
        ">
          {String(currentIndex + 1).padStart(2, '0')}
        </span>

        {/* Content card */}
        <div className="relative z-10 flex flex-col items-center gap-8 px-8 text-center max-w-2xl">

          {/* Tags */}
          <div className="flex items-center gap-2 flex-wrap justify-center">
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

          {/* Title */}
          <h1 className="font-display font-extrabold text-5xl sm:text-6xl text-gradient leading-tight">
            {project.title}
          </h1>

          {/* Description */}
          <p className="font-body text-text-secondary text-lg leading-relaxed">
            {project.longDesc || project.description}
          </p>

          {/* Action buttons */}
          <div className="flex items-center gap-4 flex-wrap justify-center">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center gap-2
                  px-6 py-3 rounded-md font-mono text-sm font-bold
                  bg-accent-cyan text-bg-primary
                  hover:shadow-glow-button hover:scale-105
                  transition-all duration-300
                "
              >
                Launch Project <FiExternalLink size={14} />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center gap-2
                  px-6 py-3 rounded-md font-mono text-sm
                  border border-border-accent text-accent-cyan
                  hover:bg-accent-cyan/10 hover:shadow-glow-button
                  transition-all duration-300
                "
              >
                View Code <FiGithub size={14} />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* ── Meta bar — bottom, exactly like mattgross.io ───── */}
      <div className="
        relative z-10 flex items-end justify-between
        px-6 py-5
        border-t border-border-subtle bg-bg-primary/80 backdrop-blur-sm
      ">
        {/* Left — project title + stack */}
        <div className="flex flex-col gap-1">
          <p className="font-mono text-sm text-text-primary">
            <strong className="text-accent-cyan">
              Project {String(currentIndex + 1).padStart(2, '0')}
            </strong>
            : {project.title}
          </p>
          <p className="font-mono text-xs text-text-muted">
            {project.tags.join(', ')}
          </p>
        </div>

        {/* Right — navigation exactly like Matt Gross */}
        <div className="flex items-center gap-1.5 font-mono text-sm">
          {/* ← Main */}
          <Link
            href="/#projects"
            className="text-text-muted hover:text-accent-cyan transition-colors underline underline-offset-2"
          >
            ← Main
          </Link>

          {/* // */}
          <DoubleSlash />

          {/* ← prev number */}
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.id}`}
              className="text-text-muted hover:text-accent-cyan transition-colors"
            >
              ← {String(currentIndex).padStart(2, '0')}
            </Link>
          ) : (
            <span className="text-text-muted/20">←</span>
          )}

          {/* current */}
          <span className="text-accent-cyan font-bold mx-1">
            {String(currentIndex + 1).padStart(2, '0')}
          </span>

          {/* next number → */}
          {nextProject ? (
            <Link
              href={`/projects/${nextProject.id}`}
              className="text-text-muted hover:text-accent-cyan transition-colors"
            >
              {String(currentIndex + 2).padStart(2, '0')} →
            </Link>
          ) : (
            <span className="text-text-muted/20">→</span>
          )}
        </div>
      </div>
    </div>
  )
}

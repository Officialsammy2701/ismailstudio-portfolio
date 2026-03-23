// ============================================================
// src/app/not-found.tsx
// Custom 404 page — shown when a route doesn't exist.
// ============================================================

import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="
      min-h-screen bg-bg-primary
      flex flex-col items-center justify-center
      text-center px-6 relative overflow-hidden
    ">
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Glow */}
      <div className="
        absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        w-[500px] h-[300px] bg-accent-cyan/5 blur-[100px] pointer-events-none
      " />

      <div className="relative z-10 flex flex-col items-center gap-6">
        <span className="mono-label">// error</span>
        <h1 className="font-display font-extrabold text-8xl text-gradient">404</h1>
        <p className="font-body text-text-secondary text-lg max-w-sm">
          Looks like this page doesn&apos;t exist. It might have moved, or you followed a broken link.
        </p>
        <Link
          href="/"
          className="
            px-6 py-3 rounded-md font-mono text-sm
            border border-border-accent text-accent-cyan
            hover:bg-accent-cyan/10 hover:shadow-glow-button
            transition-all duration-300
          "
        >
          ← Back home
        </Link>
      </div>
    </div>
  )
}

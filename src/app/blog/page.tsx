// ============================================================
// src/app/blog/page.tsx
// Blog listing page — renders posts from portfolio.ts.
// When you're ready to write real blog posts, you can migrate
// this to MDX files and use next-mdx-remote or Contentlayer.
// ============================================================

import type { Metadata } from 'next'
import Link from 'next/link'
import { FiArrowLeft, FiArrowRight, FiClock, FiTag } from 'react-icons/fi'
import { blogPosts, personal } from '@/data/portfolio'

export const metadata: Metadata = {
  title:       'Blog',
  description: `Thoughts, learnings, and writeups by ${personal.fullName}.`,
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-bg-primary pt-28 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
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
          <span className="mono-label block mb-3">// thoughts & learnings</span>
          <h1 className="font-display font-bold text-5xl sm:text-6xl text-text-primary">
            The <span className="text-gradient">Blog</span>
          </h1>
          <p className="font-body text-text-secondary mt-4 max-w-xl">
            Writing about what I build, what I learn, and what I figure out along the way.
          </p>
        </div>

        {/* Posts */}
        <div className="flex flex-col gap-6">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="
                group card-surface border-glow rounded-xl p-7
                hover:border-accent-cyan/30 hover:shadow-glow-card
                transition-all duration-300
              "
            >
              {/* Meta row */}
              <div className="flex items-center gap-4 mb-4 flex-wrap">
                <span className="mono-label text-xs text-text-muted">{post.date}</span>
                <span className="flex items-center gap-1 text-text-muted text-xs font-mono">
                  <FiClock size={11} /> {post.readTime}
                </span>
                <div className="flex items-center gap-1.5">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="
                        flex items-center gap-1 px-2 py-0.5 rounded text-xs font-mono
                        bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20
                      "
                    >
                      <FiTag size={9} /> {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Title */}
              <h2 className="
                font-display font-bold text-2xl text-text-primary
                group-hover:text-accent-cyan transition-colors mb-3
              ">
                {post.title}
              </h2>

              {/* Excerpt */}
              <p className="font-body text-text-secondary text-sm leading-relaxed mb-5">
                {post.excerpt}
              </p>

              {/* Read link — update href when real MDX posts exist */}
              <Link
                href={`/blog/${post.slug}`}
                className="
                  inline-flex items-center gap-2
                  font-mono text-sm text-accent-cyan
                  hover:gap-3 transition-all
                "
              >
                Read post <FiArrowRight size={14} />
              </Link>
            </article>
          ))}
        </div>

        {/* Coming soon nudge */}
        <div className="
          mt-12 card-surface border-glow rounded-xl p-7
          flex flex-col items-center text-center gap-3
        ">
          <span className="mono-label">// more coming soon</span>
          <p className="font-body text-text-secondary text-sm max-w-sm">
            I write when I build something worth writing about. Follow along on social
            to get notified when new posts drop.
          </p>
        </div>
      </div>
    </div>
  )
}

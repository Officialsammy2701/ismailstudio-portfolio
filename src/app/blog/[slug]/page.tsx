// ============================================================
// src/app/blog/[slug]/page.tsx
// Individual blog post page.
// Currently shows a "coming soon" placeholder for each slug.
// When you're ready to write real posts, replace the body
// with MDX rendering (e.g. next-mdx-remote or Contentlayer).
// ============================================================

import type { Metadata } from 'next'
import Link from 'next/link'
import { FiArrowLeft } from 'react-icons/fi'
import { blogPosts } from '@/data/portfolio'

type Props = { params: Promise<{ slug: string }> }

// Generate metadata per post
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  return {
    title:       post?.title ?? 'Post Not Found',
    description: post?.excerpt ?? '',
  }
}

// Pre-generate routes for known slugs at build time
export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <div className="min-h-screen bg-bg-primary pt-28 pb-24 flex items-center justify-center">
        <div className="text-center">
          <span className="mono-label block mb-4">// 404</span>
          <h1 className="font-display text-4xl text-text-primary mb-4">Post not found</h1>
          <Link href="/blog" className="text-accent-cyan font-mono text-sm hover:underline">
            ← Back to blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-bg-primary pt-28 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        {/* Back link */}
        <Link
          href="/blog"
          className="
            inline-flex items-center gap-2 mb-10
            font-mono text-sm text-text-muted
            hover:text-accent-cyan transition-colors
          "
        >
          <FiArrowLeft size={14} /> All posts
        </Link>

        {/* Post header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <span className="mono-label text-xs text-text-muted">{post.date}</span>
            <span className="text-text-muted font-mono text-xs">·</span>
            <span className="font-mono text-xs text-text-muted">{post.readTime}</span>
          </div>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-text-primary leading-tight mb-4">
            {post.title}
          </h1>
          <p className="font-body text-text-secondary text-lg leading-relaxed">
            {post.excerpt}
          </p>
        </header>

        {/* Placeholder body — replace with real MDX content */}
        <div className="card-surface border-glow rounded-xl p-8 text-center flex flex-col gap-4">
          <span className="mono-label text-2xl">✍️</span>
          <h2 className="font-display font-bold text-xl text-text-primary">
            Full post coming soon
          </h2>
          <p className="font-body text-text-secondary text-sm max-w-sm mx-auto">
            This post is drafted but not yet published. Check back soon, or follow
            along on social media for updates.
          </p>
          <Link
            href="/blog"
            className="
              self-center mt-2 px-5 py-2 rounded-md font-mono text-sm
              border border-border-accent text-accent-cyan
              hover:bg-accent-cyan/10 transition-all duration-300
            "
          >
            ← Back to blog
          </Link>
        </div>
      </div>
    </div>
  )
}

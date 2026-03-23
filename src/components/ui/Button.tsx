// ============================================================
// src/components/ui/Button.tsx
// Reusable button with two variants: solid (primary) and
// outline (secondary). Use across the site for consistency.
// ============================================================

import Link from 'next/link'

interface ButtonProps {
  children:  React.ReactNode
  href?:     string           // if provided, renders as a Link
  onClick?:  () => void
  variant?:  'solid' | 'outline'
  external?: boolean          // opens in new tab
  disabled?: boolean
  className?: string
}

export default function Button({
  children,
  href,
  onClick,
  variant   = 'solid',
  external  = false,
  disabled  = false,
  className = '',
}: ButtonProps) {
  const base = `
    inline-flex items-center justify-center gap-2
    px-6 py-3 rounded-md font-mono text-sm font-bold
    transition-all duration-300 cursor-pointer
    disabled:opacity-50 disabled:cursor-not-allowed
  `
  const variants = {
    solid: `
      bg-accent-cyan text-bg-primary
      hover:shadow-glow-button hover:scale-105
    `,
    outline: `
      border border-border-accent text-accent-cyan
      hover:bg-accent-cyan/10 hover:shadow-glow-button
    `,
  }

  const classes = `${base} ${variants[variant]} ${className}`

  // External link
  if (href && external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    )
  }

  // Internal link
  if (href) {
    return <Link href={href} className={classes}>{children}</Link>
  }

  // Button
  return (
    <button onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  )
}

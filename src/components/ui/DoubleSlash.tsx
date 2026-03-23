// ============================================================
// src/components/ui/DoubleSlash.tsx
// Branded double-slash separator — inspired by mattgross.io.
// Two "/" characters staggered vertically (or horizontally
// when inside a .sideways context) for a signature accent.
// Used in the project viewer nav bar and anywhere you see //.
// ============================================================

interface DoubleSlashProps {
  sideways?: boolean  // horizontal offset instead of vertical
}

export default function DoubleSlash({ sideways = false }: DoubleSlashProps) {
  return (
    <span
      className="inline-flex font-mono font-bold text-accent-cyan whitespace-nowrap"
      aria-hidden="true"
    >
      <span
        style={{
          display: 'inline-block',
          transform: sideways ? 'translateX(-0.25em)' : 'translateY(0.25em)',
        }}
      >
        /
      </span>
      <span
        style={{
          display: 'inline-block',
          transform: sideways ? 'translateX(0.25em)' : 'translateY(-0.25em)',
        }}
      >
        /
      </span>
    </span>
  )
}

// ============================================================
// src/components/ui/SectionHeader.tsx
// Reusable section header with mono label + gradient headline.
// ============================================================

interface SectionHeaderProps {
  label:    string   // mono label e.g. "// about me"
  title:    string   // plain part of heading
  highlight: string  // gradient part of heading
  subtitle?: string  // optional body text
  center?: boolean   // default true
}

export default function SectionHeader({
  label,
  title,
  highlight,
  subtitle,
  center = true,
}: SectionHeaderProps) {
  return (
    <div className={`mb-16 ${center ? 'text-center' : ''}`}>
      <span className="mono-label block mb-3">{label}</span>
      <h2 className="font-display font-bold text-4xl sm:text-5xl text-text-primary">
        {title} <span className="text-gradient">{highlight}</span>
      </h2>
      {subtitle && (
        <p className="font-body text-text-secondary mt-4 max-w-xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}

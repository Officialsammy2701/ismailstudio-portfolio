/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Display font — sharp, editorial, techy
        display: ['var(--font-display)', 'monospace'],
        // Body font — clean, readable
        body: ['var(--font-body)', 'sans-serif'],
        // Mono — for code snippets and accents
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        bg: {
          primary:   '#0a0a0f',   // near-black with blue undertone
          secondary: '#0f0f1a',   // cards / sections
          tertiary:  '#14141f',   // elevated surfaces
        },
        accent: {
          cyan:    '#00e5ff',     // primary accent
          blue:    '#3b82f6',     // secondary accent
          purple:  '#8b5cf6',     // tertiary/gradient
          glow:    'rgba(0,229,255,0.15)', // glow halos
        },
        text: {
          primary:   '#f0f4ff',   // headings
          secondary: '#9ca3c4',   // body / muted
          muted:     '#4b5280',   // placeholders
        },
        border: {
          subtle: 'rgba(255,255,255,0.06)',
          accent: 'rgba(0,229,255,0.25)',
        },
      },
      backgroundImage: {
        'grid-pattern': `linear-gradient(rgba(0,229,255,0.03) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(0,229,255,0.03) 1px, transparent 1px)`,
        'hero-gradient': 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,229,255,0.08) 0%, transparent 70%)',
        'card-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)',
        'accent-gradient': 'linear-gradient(135deg, #00e5ff 0%, #3b82f6 50%, #8b5cf6 100%)',
      },
      boxShadow: {
        'glow-cyan':   '0 0 30px rgba(0,229,255,0.15), 0 0 60px rgba(0,229,255,0.05)',
        'glow-card':   '0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
        'glow-button': '0 0 20px rgba(0,229,255,0.3)',
      },
      animation: {
        'float':        'float 6s ease-in-out infinite',
        'pulse-slow':   'pulse 4s ease-in-out infinite',
        'scan-line':    'scanLine 8s linear infinite',
        'fade-up':      'fadeUp 0.6s ease forwards',
        'blink':        'blink 1.2s step-end infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        scanLine: {
          '0%':   { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}

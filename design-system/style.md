---
name: Brand design system
description: Applies Ismail studio's official brand design assets to any sort of artifact. Use it when brand colors or style guidelines, visual formatting, or company design standards apply.
license: Complete terms in LICENSE.txt
---

# Ismail Studio Design System

To access Ismail's official brand identity and style resources, use this.

**Keywords**: branding, corporate identity, visual identity, post-processing, styling, brand colors, typography, Anthropic brand, visual formatting, visual design

## Brand Guidelines

### Typography

- **The Logo**: Geist Sans, Black (with Inter fallback)
- **Headings**: Geist Sans, Bold (with Inter fallback)
- **Body Text**: Geist, Regular (with Inter fallback)
- **Code/Technical**: Geist Mono, Regular (with Georgia fallback)
- **Note**: Fonts should be pre-installed in your environment for best results

### Colors

**Main Colors:**

- Dark: `#141413` - Primary text and dark backgrounds
- Light: `#faf9f5` - Light backgrounds and text on dark
- Mid Gray: `#b0aea5` - Secondary elements
- Light Gray: `#e8e6dc` - Subtle backgrounds

**Accent Colors:**

- Orange: `#d97757` - Primary accent
- Blue: `#6a9bcc` - Secondary accent
- Green: `#788c5d` - Tertiary accent

### Logo

- Primary Logo: `Full Color, Monochrome` - Main logo (~500px)
- Secondary Logo: `Full Color, Monochrome` - Alternative version of main logo (~100px)
- Simplified Logo: `Full Color, Monochrome, favicon` - Used in limited space available (favicon 32px)
- Sub-mark Logo: - Strip down graphics for social media.

### Iconography

- A set of icons (like your social links) that share the same stroke weight as your logo.

## Features

### Smart Font Application

- Applies Geist bold font to headings (24pt and larger)
- Applies Geist regular font to body text
- Automatically falls back to Inter/Georgia if custom fonts unavailable
- Preserves readability across all systems

### Text Styling

- Headings (24pt+): Geist font
- Body text: Geist font
- Smart color selection based on background
- Preserves text hierarchy and formatting

### Shape and Accent Colors

- Non-text shapes use accent colors
- Cycles through orange, blue, and green accents
- Maintains visual interest while staying on-brand

## Technical Details

### Font Management

- Uses system-installed Geist fonts when available
- Provides automatic fallback to Inter (headings) and Georgia (body)
- No font installation required - works with existing system fonts
- For best results, pre-install Poppins and Lora fonts in your environment

### Color Application

- Uses RGB color values for precise brand matching
- Applied via python-pptx's RGBColor class
- Maintains color fidelity across different systems

### Motion

- Animations for effects and micro-interactions.
- Motion library for React when available.
- Well orchestrated page load with staggered reveals(animation-delays).
- Scroll trigerring and hover states.

### Spatial Composition

- Unexpected layouts
- Asymmetry
- Overlap
- Diagonal flow
- Grid-breaking elements
- Controlled density

### Background & Visual Details

- Create an atmosphere and depth rather than defaulting to solid colors.
- Add contextual effects and textures matching overall asthetics.
- Apply creative form like gradient mashes, noise textures, geometric patterns, layered transperencies, dramatic shadows, decorative borders, custom cursors, and grain overlays.


// ============================================================
// src/app/page.tsx
// Homepage — assembles all sections in order.
// Each section is a self-contained component that handles
// its own animations and data fetching from portfolio.ts.
// ============================================================

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}

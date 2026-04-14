"use client";

// ============================================================
// src/components/layout/Navbar.tsx
// Sticky navigation bar with scroll-aware background,
// active link highlighting, and a mobile hamburger menu.
// ============================================================

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { personal, resumeUrl } from "@/data/portfolio";
import Image from "next/image";
import Link from "next/link";

// Nav links — update hrefs to match your section IDs / pages
const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-bg-primary/90 backdrop-blur-md border-b border-border-subtle shadow-lg"
            : "bg-transparent"
        }
      `}
    >
      <nav className="px-10 lg:px-14 w-full h-14 sm:h-16 flex items-center justify-between gap-4">
        {/* Logo — left */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/images/logo.png"
            alt="{`${personal.brandName} logo`}"
            width={120}
            height={40}
            priority
            className="object-contain"
          />
        </Link>

        {/* Nav links + Resume — grouped right */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <ul className="flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="font-body text-sm text-text-secondary hover:text-text-primary transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent-cyan group-hover:w-full transition-all duration-300" />
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-md text-sm font-mono border border-accent-cyan/40 text-accent-cyan hover:bg-accent-cyan/10 hover:shadow-glow-button transition-all duration-300 shrink-0"
          >
            Resume ↗
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 text-text-secondary hover:text-accent-cyan ml-auto"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-px bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-5 h-px bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-px bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-bg-secondary/95 backdrop-blur-md border-b border-border-subtle ${menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <ul className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block font-body text-text-secondary hover:text-accent-cyan transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mono-label hover:text-text-primary transition-colors"
            >
              Resume ↗
            </a>
          </li>
        </ul>
      </div>
    </motion.header>
  );
}

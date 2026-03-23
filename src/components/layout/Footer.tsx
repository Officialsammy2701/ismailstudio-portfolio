"use client";

// ============================================================
// src/components/layout/Footer.tsx
// Footer with brand name, all social icons, and copyright.
// Icons are hidden automatically when the URL is blank.
// ============================================================

import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiInstagram,
  FiYoutube,
  FiMail,
} from "react-icons/fi";
import { FaTiktok, FaCodepen, FaStackOverflow } from "react-icons/fa";
import { personal, socials } from "@/data/portfolio";

// All platforms — icons auto-hide when URL is left blank in portfolio.ts
const socialIcons = [
  { key: "github", icon: FiGithub, label: "GitHub" },
  { key: "linkedin", icon: FiLinkedin, label: "LinkedIn" },
  { key: "twitter", icon: FiTwitter, label: "Twitter/X" },
  { key: "instagram", icon: FiInstagram, label: "Instagram" },
  { key: "youtube", icon: FiYoutube, label: "YouTube" },
  { key: "tiktok", icon: FaTiktok, label: "TikTok" },
  { key: "codepen", icon: FaCodepen, label: "CodePen" },
  { key: "stackoverflow", icon: FaStackOverflow, label: "Stack Overflow" },
] as const;

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-bg-primary/80">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col items-center gap-6">
        {/* Brand name */}
        <p className="font-display font-bold text-lg tracking-tight">
          <span className="text-accent-cyan font-mono">&lt;</span>
          {personal.brandName}
          <span className="text-accent-cyan font-mono">/&gt;</span>
        </p>

        {/* Social icons row — wraps on mobile */}
        <div className="flex items-center gap-5 flex-wrap justify-center">
          <a
            href={`mailto:${personal.email}`}
            aria-label="Email"
            className="text-text-muted hover:text-accent-cyan transition-colors duration-200"
          >
            <FiMail size={20} />
          </a>

          {socialIcons.map(({ key, icon: Icon, label }) => {
            const url = socials[key as keyof typeof socials];
            if (!url) return null;
            return (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-text-muted hover:text-accent-cyan transition-colors duration-200"
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>

        <div className="w-16 h-px bg-border-subtle" />

        <p className="text-text-muted text-sm font-body text-center hover:text-accent-cyan transition-colors duration-200">
          Designed & Built by {personal.fullName}.
        </p>
      </div>
    </footer>
  );
}

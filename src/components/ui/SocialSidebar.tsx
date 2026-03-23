"use client";

// ============================================================
// src/components/ui/SocialSidebar.tsx
// Fixed left + right sidebars — social icons left, email right.
// Stays visible no matter where you scroll on the page.
// Inspired by brittanychiang.com
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

const socialIcons = [
  { key: "github", icon: FiGithub, label: "GitHub" },
  { key: "linkedin", icon: FiLinkedin, label: "LinkedIn" },
  { key: "twitter", icon: FiTwitter, label: "Twitter/X" },
  { key: "instagram", icon: FiInstagram, label: "Instagram" },
  { key: "codepen", icon: FaCodepen, label: "CodePen" },
] as const;

export default function SocialSidebar() {
  return (
    <>
      {/* ── Left sidebar — social icons ── */}
      <div
        className="
        fixed bottom-0 left-14 z-40
        hidden lg:flex flex-col items-center gap-5
        after:content-[''] after:block after:w-px after:h-24 after:bg-text-muted/40
      "
      >
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
              className="text-text-muted hover:text-accent-cyan hover:-translate-y-1 transition-all duration-200"
            >
              <Icon size={19} />
            </a>
          );
        })}
      </div>

      {/* ── Right sidebar — email ── */}
      <div
        className="
        fixed bottom-0 right-14 z-40
        hidden lg:flex flex-col items-center gap-5
        after:content-[''] after:block after:w-px after:h-24 after:bg-text-muted/40
      "
      >
        <a
          href={`mailto:${personal.email}`}
          className="
            font-mono text-xs text-text-muted tracking-widest
            hover:text-accent-cyan hover:-translate-y-1
            transition-all duration-200
            [writing-mode:vertical-rl]
          "
        >
          {personal.email}
        </a>
      </div>
    </>
  );
}

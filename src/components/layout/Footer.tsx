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
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
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
    <motion.footer
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden"
    >
      <motion.div
        initial={{ backgroundColor: "rgba(10,10,15,0.45)" }}
        whileInView={{ backgroundColor: "rgba(10,10,15,0)" }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-6xl mx-auto px-6 py-12 flex flex-col items-center gap-6"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/images/logo-with-background.png"
              alt={`${personal.brandName} logo`}
              width={120}
              height={120}
              priority
              className="h-12 w-auto object-contain sm:h-14"
            />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap"
        >
          <a
            href={`mailto:${personal.email}`}
            aria-label="Email"
            className="inline-flex h-10 w-10 items-center justify-center text-text-muted hover:text-accent-cyan transition-colors duration-200"
          >
            <FiMail size={20} />
          </a>

          {socialIcons.map(({ key, icon: Icon, label }) => {
            const social = socials[key as keyof typeof socials];
            if (!social?.url) return null;

            const isActive = social.active !== false;

            return (
              <div key={key} className="relative group">
                {isActive ? (
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    title={label}
                    className="inline-flex h-10 w-10 items-center justify-center text-text-muted hover:text-accent-cyan hover:scale-110 transition-all duration-200"
                  >
                    <Icon size={20} />
                  </a>
                ) : (
                  <span
                    aria-label={label}
                    title={label}
                    className="inline-flex h-10 w-10 items-center justify-center text-text-muted/30 cursor-not-allowed transition-colors duration-200"
                  >
                    <Icon size={20} />
                  </span>
                )}

                {!isActive && (
                  <span
                    className="
                      absolute -top-9 left-1/2 -translate-x-1/2
                      whitespace-nowrap rounded
                      px-2 py-1 text-xs font-mono
                      bg-bg-secondary text-text-primary
                      border border-border-subtle
                      opacity-0 group-hover:opacity-100
                      transition-opacity duration-200
                      pointer-events-none
                    "
                  >
                    Coming soon
                  </span>
                )}
              </div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0.6 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="w-16 h-px bg-white/5 origin-center"
        />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
          className="text-text-muted text-sm font-body text-center hover:text-accent-cyan transition-colors duration-200"
        >
          Designed & Built by {personal.fullName}.
        </motion.p>
      </motion.div>
    </motion.footer>
  );
}
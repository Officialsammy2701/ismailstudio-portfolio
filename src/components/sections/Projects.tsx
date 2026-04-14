"use client";

// ============================================================
// src/components/sections/Projects.tsx
// ============================================================

import { useRouter } from "next/navigation";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiArrowRight, FiExternalLink, FiGithub } from "react-icons/fi";
import DoubleSlash from "@/components/ui/DoubleSlash";
import { projects } from "@/data/portfolio";

const gradients = [
  "from-cyan-900/80 via-blue-900/60 to-bg-primary",
  "from-emerald-900/80 via-cyan-900/60 to-bg-primary",
  "from-purple-900/80 via-indigo-900/60 to-bg-primary",
];

const featured = projects.slice(0, 3);
const noteworthy = projects.slice(3);

export default function Projects() {
  const router = useRouter();
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section
      id="projects"
      className="py-24 bg-bg-secondary relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div
        ref={ref}
        className={`
          relative z-10 max-w-6xl mx-auto px-6
          transition-all duration-700
          ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        `}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <span className="mono-label flex items-center gap-2 mb-4">
            <DoubleSlash /> things i built
          </span>
        </motion.div>

        {/* ── Featured projects ── */}
        <div className="flex flex-col gap-32 mb-32">
          {featured.map((project, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: idx * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative grid grid-cols-1 lg:grid-cols-12 items-center"
              >
                {/* Image side */}
                <div
                  className={`relative lg:col-span-7 h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden border border-border-subtle shadow-2xl${isEven ? "lg:col-start-6 lg:row-start-1" : "lg:col-start-1 lg:row-start-1"}`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    priority={idx === 0}
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                  />

                  <div className="absolute inset-0 ring-1 ring-white/10 rounded-2xl" />

                  <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/35 via-transparent to-transparent" />

                  <button
                    onClick={() => router.push(`/projects/${project.id}`)}
                    className="absolute inset-0 cursor-pointer"
                    aria-label={`View ${project.title}`}
                  />

                  <span className="absolute bottom-4 right-6 font-display font-extrabold text-7xl sm:text-8xl text-white/5 select-none pointer-events-none">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Content side — pulled over image with negative margin */}
                <div
                  className={`
                    relative z-10 lg:col-span-5 flex flex-col gap-4
                    ${
                      isEven
                        ? "lg:col-start-1 lg:row-start-1 text-left items-start lg:-mr-12"
                        : "lg:col-start-8 lg:row-start-1 text-right items-end lg:-ml-12"
                    }
                  `}
                >
                  <p className="mono-label text-accent-cyan text-xs">
                    Featured Project
                  </p>

                  <h3
                    className="font-display font-bold text-2xl sm:text-3xl text-text-primary hover:text-accent-cyan transition-colors cursor-pointer"
                    onClick={() => router.push(`/projects/${project.id}`)}
                  >
                    {project.title}
                  </h3>

                  {/* Description card — sits on top of image */}
                  <div className="card-surface border-glow rounded-xl p-5 w-full max-w-xl bg-bg-secondary/75 backdrop-blur-md">
                    <p className="font-body text-text-secondary text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div
                    className={`flex items-center gap-4 flex-wrap font-mono text-xs text-text-muted ${isEven ? "" : "justify-end"}`}
                  >
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  {/* Icons */}
                  <div className="flex items-center gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-secondary hover:text-accent-cyan transition-colors"
                        aria-label="GitHub"
                      >
                        <FiGithub size={20} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-secondary hover:text-accent-cyan transition-colors"
                        aria-label="Live site"
                      >
                        <FiExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Noteworthy projects ── */}
        <div>
          <h3 className="font-display font-bold text-2xl text-center text-text-primary">
            Other <span className="text-gradient">Projects</span>
          </h3>
          <a
            href="/archive"
            className="font-mono text-sm text-accent-cyan hover:underline underline-offset-4 flex items-center justify-center gap-1 group w-full mb-12"
          >
            view the archive
            <FiArrowRight
              size={13}
              className="group-hover:translate-x-1 transition-transform duration-200"
            />
          </a>

          <div className="flex flex-col gap-10">
            {noteworthy.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + idx * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group flex flex-col gap-3 cursor-pointer"
                onClick={() => router.push(`/projects/${project.id}`)}
              >
                {/* Title + arrow */}
                <div className="flex items-center gap-2">
                  <h4 className="font-display font-bold text-xl text-text-primary group-hover:text-accent-cyan transition-colors duration-200">
                    {project.title}
                  </h4>
                  <FiArrowRight
                    size={16}
                    className="text-accent-cyan group-hover:translate-x-1 transition-transform duration-200"
                  />
                  {/* External links inline with title
                  <div className="flex items-center gap-2 ml-1">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-muted hover:text-accent-cyan transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FiGithub size={16} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-muted hover:text-accent-cyan transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FiExternalLink size={16} />
                      </a>
                    )}
                  </div> */}
                </div>

                {/* Description */}
                <p className="font-body text-text-secondary text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tags — pill badges */}
                <div className="flex items-center gap-2 flex-wrap">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-mono bg-bg-tertiary border border-border-subtle text-text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

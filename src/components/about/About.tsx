"use client";

import { motion } from "framer-motion";

interface AboutProps {
  dict: Dictionary;
}

const STACK = ["Next.js", "React", "TypeScript", "Node.js", "MongoDB", "Tailwind", "NextAuth"];

export default function About({ dict }: AboutProps) {
  const stats = [
    { number: "3+", label: dict.about.stats.yearsLabel },
    { number: "12+", label: dict.about.stats.projectsLabel },
    { number: "16+", label: dict.about.stats.technologiesLabel },
  ];

  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute -left-20 top-10 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl md:-left-4 md:top-5 md:h-60 md:w-60 md:bg-blue-500/4"
      />

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="font-heading text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight text-gray-100 text-center drop-shadow-[0_2px_10px_rgba(59,130,246,0.30)] mt-16 mb-10"
      >
        {dict.about.title}
      </motion.h2>

      <div className="mx-auto max-w-3xl px-4 flex flex-col gap-10">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-base md:text-lg text-gray-300 leading-relaxed text-center"
        >
          {dict.about.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-3 divide-x divide-white/10"
        >
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center gap-1 px-4 py-2">
              <span
                className="font-heading font-bold text-white leading-none"
                style={{ fontSize: `clamp(2rem, 5vw, 3.25rem)` }}
              >
                {stat.number}
              </span>
              <span className="text-xs sm:text-sm text-gray-400 text-center leading-snug">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap justify-center gap-2"
        >
          {STACK.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-gray-300"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <span className="text-sm text-green-400">{dict.about.cta}</span>
          <a
            href={`mailto:${dict.about.email}`}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-md
                       bg-blue-600 hover:bg-blue-500
                       text-white text-sm font-medium
                       transition-colors duration-200 active:opacity-80"
          >
            {dict.about.emailLabel}
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>

      </div>
    </div>
  );
}

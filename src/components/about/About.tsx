"use client";

import { motion } from "framer-motion";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

interface AboutProps {
  dict: Dictionary;
}

export default function About({ dict }: AboutProps) {
  const paragraphs = dict.about.description.split("\n\n").filter(Boolean);

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
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="font-heading text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight text-gray-100 text-center drop-shadow-[0_2px_10px_rgba(59,130,246,0.30)] mt-16 mb-8"
      >
        {dict.about.title}
      </motion.h2>

      <div className="mx-auto max-w-[65ch] px-4">
        {paragraphs.map((paragraph, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`text-left leading-relaxed ${
              index === 0
                ? "mb-6 text-base text-gray-200 md:text-lg"
                : "mb-6 text-base text-gray-300"
            }`}
          >
            {paragraph}
          </motion.p>
        ))}

        <motion.a
          href={`mailto:${dict.about.email}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.6,
            delay: paragraphs.length * 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="group mt-8 inline-flex items-center gap-3 text-gray-300 transition hover:text-blue-400"
        >
          <MailOutlineIcon
            sx={{
              fontSize: 20,
              color: "#60a5fa", 
              transition: "transform 0.2s",
            }}
            className="group-hover:scale-110"
          />

          <span className="underline-offset-4 group-hover:underline">
            {dict.about.emailLabel}
          </span>
        </motion.a>
      </div>
    </div>
  );
}

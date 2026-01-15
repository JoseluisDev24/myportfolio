"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface TechStackProps {
  dict: Dictionary;
}

interface Tech {
  name: string;
  icon: string;
}

export default function TechStack({ dict }: TechStackProps) {
  const technologies: Tech[] = [
    { name: "HTML5", icon: "/skills/html-min.png" },
    { name: "CSS", icon: "/skills/css-min.png" },
    { name: "JavaScript", icon: "/skills/js-min.png" },
    { name: "TypeScript", icon: "/skills/typescript.png" }, 
    { name: "React", icon: "/skills/react-min.png" },
    { name: "Next.js", icon: "/skills/nextJS-min.png" },
    { name: "Tailwind", icon: "/skills/tailwind-min.png" },
    { name: "Sass", icon: "/skills/sass-min.png" },

    { name: "Node.js", icon: "/skills/node-min.png" },
    { name: "Express", icon: "/skills/expressjs-min.jpg" },
    { name: "MongoDB", icon: "/skills/mongo.png" },

    { name: "Git", icon: "/skills/git-min.png" },
    { name: "GitHub", icon: "/skills/github-min.png" },
    { name: "Figma", icon: "/skills/figma.png" },
  ];

  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute -right-20 top-10 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl md:-right-4 md:top-5 md:h-60 md:w-60 md:bg-blue-500/4"
      />

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="font-heading text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight text-gray-100 text-center drop-shadow-[0_2px_10px_rgba(59,130,246,0.30)] mt-16 mb-12"
      >
        {dict.techStack.title}
      </motion.h2>

      <div className="mx-auto max-w-4xl px-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 md:gap-6">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              y: -8,
              transition: { duration: 0.2 },
            }}
            className="group relative flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-300"
          >
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 mb-3 transition-transform duration-300 group-hover:scale-110">
              <Image
                src={tech.icon}
                alt={tech.name}
                fill
                className="object-contain"
              />
            </div>

            <span className="text-sm font-medium text-gray-300 text-center transition-colors duration-300 group-hover:text-white">
              {tech.name}
            </span>

            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/0 to-purple-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-20 blur-xl -z-10" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

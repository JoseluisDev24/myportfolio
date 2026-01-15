"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

interface ProjectsProps {
  dict: Dictionary;
}

export default function Projects({ dict }: ProjectsProps) {
  const projects = [
    {
      title: dict.projects.items.reserva5.title,
      description: dict.projects.items.reserva5.description,
      imageSrc: "/projects/reserva5.png",
      tags: ["Next.js", "Framer Motion", "Tailwind", "Next Auth"],
      liveUrl: "https://reservation-system-beta-blond.vercel.app/",
      repoUrl: "https://github.com/JoseluisDev24/reservation-system.git",
    },
    {
      title: dict.projects.items.portfolio.title,
      description: dict.projects.items.portfolio.description,
      imageSrc: "/projects/portfolio.png",
      tags: ["Next.js", "Reactbits", "Tailwind"],
      liveUrl: "https://myportfolio-jlrc.vercel.app/",
      repoUrl: "https://github.com/JoseluisDev24/myportfolio.git",
    },
    {
      title: dict.projects.items.ecommerce.title,
      description: dict.projects.items.ecommerce.description,
      imageSrc: "/projects/ecommerce.jpg",
      tags: ["Next.js", "JWT", "MongoDB"],
      liveUrl: "https://e-commerce-next-js-red-omega.vercel.app/",
      repoUrl: "https://github.com/JoseluisDev24/e-commerceNextJS.git",
    },
    {
      title: dict.projects.items.weather.title,
      description: dict.projects.items.weather.description,
      imageSrc: "/projects/clima.jpg",
      tags: ["Next.js", "API", "Tailwind"],
      liveUrl: "https://weather-app-green-ten-93.vercel.app/",
      repoUrl: "https://github.com/JoseluisDev24/weather-app.git",
    },
    {
      title: dict.projects.items.website.title,
      description: dict.projects.items.website.description,
      imageSrc: "/projects/sarandifit.png",
      tags: ["Vite", "Sass"],
      liveUrl: "https://sarandifit-prueba.netlify.app/",
    },
    {
      title: dict.projects.items.todoList.title,
      description: dict.projects.items.todoList.description,
      imageSrc: "/projects/todolist.png",
      tags: ["Next.js", "MongoDB", "Tailwind"],
      liveUrl: "https://back-next-js.vercel.app/",
      repoUrl: "https://github.com/JoseluisDev24/backNextJS.git",
    },
    {
      title: dict.projects.items.todoListJS.title,
      description: dict.projects.items.todoListJS.description,
      imageSrc: "/projects/tododom.png",
      tags: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://todo-bios.netlify.app//",
    },
    {
      title: dict.projects.items.kinesiologyLanding.title,
      description: dict.projects.items.kinesiologyLanding.description,
      imageSrc: "/projects/kine.png",
      tags: ["Next.js", "Framer motion", "Tailwind"],
      liveUrl: "https://kine-page.vercel.app",
    },
    {
      title: dict.projects.items.gymLanding.title,
      description: dict.projects.items.gymLanding.description,
      imageSrc: "/projects/gym.png",
      tags: ["Next.js", "Framer motion", "Tailwind"],
      liveUrl: "https://gym-hub-eta.vercel.app",
    },
    {
      title: dict.projects.items.tradeUPclone.title,
      description: dict.projects.items.tradeUPclone.description,
      imageSrc: "/projects/tradeUp.png",
      tags: ["Next.js", "JSON", "MUI"],
      liveUrl: "https://card-trading-two.vercel.app",
    },
  ];

  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute -right-20 top-10 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl md:-right-4 md:top-5 md:h-60 md:w-60 md:bg-purple-500/4"
      />

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="font-heading text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight text-gray-100 text-center drop-shadow-[0_2px_10px_rgba(59,130,246,0.30)] mt-16 mb-4"
      >
        {dict.projects.title}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          duration: 0.6,
          delay: 0.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="text-center text-base text-gray-400 mb-12"
      >
        {dict.projects.subtitle}
      </motion.p>

      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

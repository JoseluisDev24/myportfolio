"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ProjectCard from "@/components/projects/ProjectCard";

interface AllProjectsClientProps {
  dict: Dictionary;
  locale: "es" | "en";
}

export default function AllProjectsClient({ dict, locale }: AllProjectsClientProps) {
  const projects = [
    {
      title: dict.projects.items.barberia.title,
      description: dict.projects.items.barberia.description,
      imageSrc: "/projects/barberia.png",
      tags: ["Next.js", "Framer Motion", "Tailwind", "Next Auth"],
      liveUrl: "https://barberia-frontend-seven.vercel.app/",
    },
    {
      title: dict.projects.items.elpreciado.title,
      description: dict.projects.items.elpreciado.description,
      imageSrc: "/projects/elpreciado.png",
      tags: ["Next.js", "Framer Motion", "Tailwind", "Next Auth"],
      liveUrl: "https://el-preciado-viajes.vercel.app/",
      repoUrl: "https://github.com/JoseluisDev24/el-preciado-viajes.git",
    },
    {
      title: dict.projects.items.reserva5.title,
      description: dict.projects.items.reserva5.description,
      imageSrc: "/projects/reserva5.png",
      tags: ["Next.js", "Framer Motion", "Tailwind", "Next Auth"],
      liveUrl: "https://reservation-system-beta-blond.vercel.app/",
      repoUrl: "https://github.com/JoseluisDev24/reservation-system.git",
    },
    {
      title: dict.projects.items.tradeUPclone.title,
      description: dict.projects.items.tradeUPclone.description,
      imageSrc: "/projects/tradeUp.png",
      tags: ["Next.js", "JSON", "MUI"],
      liveUrl: "https://card-trading-two.vercel.app",
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
      liveUrl: "https://todo-bios.netlify.app/",
    },
    {
      title: dict.projects.items.kinesiologyLanding.title,
      description: dict.projects.items.kinesiologyLanding.description,
      imageSrc: "/projects/kine.png",
      tags: ["Next.js", "Framer Motion", "Tailwind"],
      liveUrl: "https://kine-page.vercel.app",
    },
    {
      title: dict.projects.items.gymLanding.title,
      description: dict.projects.items.gymLanding.description,
      imageSrc: "/projects/gym.png",
      tags: ["Next.js", "Framer Motion", "Tailwind"],
      liveUrl: "https://gym-hub-eta.vercel.app",
    },
  ];

  return (
    <main className="w-full max-w-5xl mx-auto px-4 md:px-0 pb-24">
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="pt-8 pb-4"
      >
        <Link
          href={`/${locale}`}
          className="group inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            className="group-hover:-translate-x-0.5 transition-transform duration-200"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          {dict.projects.backHome}
        </Link>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="font-heading text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight text-gray-100 drop-shadow-[0_2px_10px_rgba(59,130,246,0.30)] mt-6 mb-3"
      >
        {dict.projects.allTitle}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="text-base text-gray-400 mb-12"
      >
        {dict.projects.subtitle}
      </motion.p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </main>
  );
}

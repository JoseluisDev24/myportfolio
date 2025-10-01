import SplitText from "@/components/text/SplitText";
import ProjectCard from "./ProjectCard";

interface ProjectsProps {
  dict: Dictionary;
}

export default function Projects({ dict }: ProjectsProps) {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  const projects = [
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
      tags: ["NextJS", "Framer motion", "Tailwind"],
      liveUrl: "https://kine-page.vercel.app",
    },
    {
      title: dict.projects.items.gymLanding.title,
      description: dict.projects.items.gymLanding.description,
      imageSrc: "/projects/gym.png",
      tags: ["NextJS", "Framer motion", "Tailwind"],
      liveUrl: "https://gym-hub-eta.vercel.app",
    },
    {
      title: dict.projects.items.tradeUPclone.title,
      description: dict.projects.items.tradeUPclone.description,
      imageSrc: "/projects/tradeUp.png",
      tags: ["NextJS", "JSON", "MUI"],
      liveUrl: "https://card-trading-two.vercel.app",
    },
  ];

  return (
    <div
      id="projects"
      className="flex flex-col items-center justify-center mt-16 mb-6"
    >
      <SplitText
        text={dict.projects.title}
        className="font-heading text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight text-gray-100 text-center py-6 drop-shadow-[0_2px_10px_rgba(59,130,246,0.30)]"
        delay={110}
        duration={3}
        ease="power3.out"
        splitType="lines"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
        onLetterAnimationComplete={handleAnimationComplete}
      />
      <p className="text-lg text-gray-400 mb-10">{dict.projects.subtitle}</p>
      <section className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 px-1">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </section>
    </div>
  );
}

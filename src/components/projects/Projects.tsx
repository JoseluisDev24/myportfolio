import SplitText from "@/components/text/SplitText";
import ProjectCard from "./ProjectCard";

export default function Projects() {

    const handleAnimationComplete = () => {
      console.log("All letters have animated!");
    };

    const projects = [
      {
        title: "Portfolio",
        description:
          "Next.js portfolio with glassmorphism, smooth scroll, and subtle animations.",
        imageSrc: "/projects/portfolio.png",
        tags: ["Next.js", "Reactbits", "Tailwind"],
        liveUrl: "https://myportfolio-jlrc.vercel.app/",
        repoUrl: "https://github.com/JoseluisDev24/myportfolio.git",
      },
      {
        title: "E-commerce",
        description:
          "Full-stack Next.js store with product catalog and cart; includes admin dashboard.",
        imageSrc: "/projects/ecommerce.jpg",
        tags: ["Next.js", "JWT", "MongoDB"],
        liveUrl: "https://e-commerce-next-js-red-omega.vercel.app/",
        repoUrl: "https://github.com/JoseluisDev24/e-commerceNextJS.git",
      },
      {
        title: "Weather App",
        description:
          "Real-time weather app using OpenWeatherMap API with location-based forecasts.",
        imageSrc: "/projects/clima.jpg",
        tags: ["Next.js", "API", "Tailwind"],
        liveUrl: "https://weather-app-green-ten-93.vercel.app/",
        repoUrl: "https://github.com/JoseluisDev24/weather-app.git",
      },
      {
        title: "Website",
        description:
          "Professional fitness website with responsive design and optimized performance.",
        imageSrc: "/projects/sarandifit.png",
        tags: ["Vite", "Sass"],
        liveUrl: "https://sarandifit-prueba.netlify.app/",
      },
      {
        title: "Todo List",
        description:
          "Full-stack task management app with React and MongoDB, featuring CRUD operations.",
        imageSrc: "/projects/todolist.png",
        tags: ["Next.js", "MongoDB", "Tailwind"],
        liveUrl: "https://back-next-js.vercel.app/",
        repoUrl: "https://github.com/JoseluisDev24/backNextJS.git",
      },
      {
        title: "Todo List JS",
        description:
          "Pure JavaScript todo application demonstrating DOM manipulation and vanilla JS skills.",
        imageSrc: "/projects/tododom.png",
        tags: ["HTML", "CSS", "JavaScript"],
        liveUrl: "https://todo-bios.netlify.app//",
      },
    ];

    return (
      <div id="projects" className="flex flex-col items-center justify-center mt-16 mb-6">
        <SplitText
          text="Projects"
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
        <p className="text-lg text-gray-400 mb-10">
          Here are some of my recent projects.
        </p>
        <section className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 px-1">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </section>
      </div>
    );
    }
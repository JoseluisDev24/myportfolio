import { Header } from "@/components/header/Header";
import Image from "next/image";
import Skills from "@/components/skills/Skills";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen px-6 md:px-10 max-w-7xl mx-auto">
      <Header />

      <main className="flex-1 max-w-5xl mx-auto">
        <section className="flex flex-col md:flex-row items-center justify-center gap-8 h-screen">
          <div className="order-1 md:order-2 relative flex justify-center md:justify-end">
            <div
              aria-hidden
              className="absolute -right-2 md:-right-4 top-3 md:top-4 h-46 w-46 md:h-64 md:w-64 rounded-full bg-blue-500/10 blur-3xl"
            />
            <div className="relative h-44 w-44 sm:h-52 sm:w-52 md:h-80 md:w-80 rounded-full p-[3px] bg-gradient-to-br from-blue-500/70 to-transparent">
              <div className="h-full w-full rounded-full bg-black/40 backdrop-blur-md border border-white/15 overflow-hidden">
                <Image
                  src="/perfil2-min.jpg"
                  alt="Foto de perfil de J Rosano"
                  fill
                  sizes="(max-width: 768px) 176px, (max-width: 1024px) 208px, 224px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="order-2 md:order-1 max-w-2xl text-center md:text-left py-4">
            <h1 className="text-3xl sm:text-6xl font-bold">
              Welcome to My Portfolio
            </h1>
            <p className="pt-3 sm:pt-4 text-xl sm:text-2xl text-gray-200">
              Hi, I&apos;m José Rosano, a passionate Fullstack Developer.
            </p>
            <p className="pt-3 text-gray-200">
              Explore my projects and learn more about me.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-8">
              <button className="px-6 py-2 rounded-md bg-white/8 border border-white/20 backdrop-blur-md text-white shadow-lg hover:bg-white/15 transition">
                View Projects
              </button>
              <button className="px-6 py-2 rounded-md bg-white/8 border border-white/20 backdrop-blur-md text-white shadow-lg hover:bg-white/15 transition">
                Contact Me
              </button>
            </div>
          </div>
        </section>

        <section className="text-center relative">
          <div
            aria-hidden
            className="absolute -left-20 md:-left-4 top-10 md:top-5 h-40 md:h-60 w-40 md:w-60 rounded-full bg-blue-500/10 md:bg-blue-500/4 blur-3xl"
          />
          <h2 className="text-4xl font-bold text-gray-300 py-10">About me</h2>
          <p className="bg-white/5 border border-white/20 backdrop-blur-md shadow-2xl rounded-lg p-6 mt-4 text-gray-200 max-w-3xl mx-auto">
            I&apos;m a full-stack developer. My strongest skills are HTML5,
            CSS3, and JavaScript. I'm also comfortable working with frameworks
            like NextJs. I'm constantly expanding my knowledge with new tools
            and technologies. My goal is to always learn, innovate, and add
            value with every line of code.
          </p>
        </section>
        <section className="text-center mt-12">
          <Skills />
        </section>
      </main>

      <footer className="mt-auto py-6 text-center text-gray-400">
        © {new Date().getFullYear()} J Rosano. All rights reserved.
      </footer>
    </div>
  );
}

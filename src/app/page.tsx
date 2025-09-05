"use client";

import Image from "next/image";
import TextType from "@/components/text/TextType";
import Particles from "@/components/particles/Particles";
import Projects from "@/components/projects/Projects";
import About from "@/components/about/About";
import Skills from "@/components/skills/Skills";
import Link from "next/link";
import LatestRepos from "@/components/latestRepos/LatestRepos";

export default function Home() {

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0">
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={150}
            particleSpread={6}
            speed={0.1}
            particleBaseSize={50}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
            className={undefined}
          />
        </div>
      </div>

      <div className="relative z-10 flex min-h-screen flex-col">
        <div className="flex-1 w-full max-w-5xl mx-auto">
          <main className="w-full px-4 md:px-0">
            <section className="flex min-h-[calc(100svh-64px)] flex-col items-center justify-center gap-8 md:flex-row">
              <div className="order-1 relative flex justify-center md:order-2 md:justify-end">
                <div
                  aria-hidden
                  className="absolute -right-2 top-3 h-46 w-46 rounded-full bg-blue-500/10 blur-3xl md:-right-4 md:top-4 md:h-64 md:w-64"
                />
                <div
                  className="
                    absolute
                    -bottom-14 -right-24 h-[100px] w-[100px] blur-[64px]
                    sm:h-[220px] sm:w-[220px] sm:blur-[80px]
                    md:-right-32 md:h-[200px] md:w-[200px] md:blur-[100px]
                    rounded-full bg-blue-400/10
                  "
                />
                <div className="relative h-48 w-48 rounded-full bg-gradient-to-br from-blue-500/70 to-transparent p-[3px] sm:h-52 sm:w-52 md:h-80 md:w-80">
                  <div className="h-full w-full overflow-hidden rounded-full border border-white/15 bg-black/40 backdrop-blur-md">
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

              <div className="order-2 max-w-2xl text-center md:order-1 md:text-left flex flex-col gap-3">
                <h1 className="text-4xl font-bold font-sans sm:text-6xl">
                  Welcome to My Portfolio
                </h1>

                <p className="pt-3 text-xl text-gray-200 sm:pt-4 sm:text-2xl">
                  Hi, I&apos;m José Rosano, a passionate{" "}
                  <span className="text-blue-500 font-semibold">
                    Fullstack Developer.
                  </span>
                </p>

                <TextType
                  text={[
                    "I love coding and creating innovative solutions",
                    "Explore my projects and learn more about me",
                  ]}
                  typingSpeed={80}
                  pauseDuration={1000}
                  showCursor
                  cursorCharacter="|"
                  variableSpeed={undefined}
                  onSentenceComplete={undefined}
                />

                <div className="pt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
                  <Link
                    href={"#projects"}
                    className="w-full sm:w-40 rounded-md border border-white/20 bg-white/5 px-6 py-2 cursor-pointer text-white shadow-lg backdrop-blur-md transition hover:bg-white/15 text-center"
                  >
                    View Projects
                  </Link>
                  <Link
                    href={"#footer"}
                    className="w-full sm:w-40 rounded-md border border-white/20 bg-white/5 px-6 py-2 cursor-pointer text-white shadow-lg backdrop-blur-md transition hover:bg-white/15 text-center"
                  >
                    Contact Me
                  </Link>
                </div>
              </div>
            </section>
            <section id="about">
              <About />
              <section id="projects">
                <Projects />
              </section>
            </section>
            <section>
              <Skills />
            </section>
            <section>
              <LatestRepos />
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

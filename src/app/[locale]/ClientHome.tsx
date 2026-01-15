"use client";

import Image from "next/image";
import TextType from "@/components/text/TextType";
import Particles from "@/components/particles/Particles";
import Projects from "@/components/projects/Projects";
import About from "@/components/about/About";
import Skills from "@/components/skills/Skills";
import Link from "next/link";
import LatestRepos from "@/components/latestRepos/LatestRepos";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

interface ClientHomeProps {
  dict: Dictionary;
}

export default function ClientHome({ dict }: ClientHomeProps) {
  return (
    <>
      <Header dict={dict} />

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
              <section className="flex min-h-[calc(100svh-64px)] flex-col items-center justify-center gap-12 md:flex-row md:gap-16">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="order-1 relative flex justify-center md:order-2"
                >
                  <div
                    aria-hidden
                    className="absolute -right-8 top-8 h-48 w-48 rounded-full bg-blue-500/20 blur-3xl animate-pulse md:-right-12 md:top-12 md:h-72 md:w-72"
                  />
                  <div
                    aria-hidden
                    className="absolute -bottom-8 -left-8 h-48 w-48 rounded-full bg-purple-500/10 blur-3xl animate-pulse md:-bottom-12 md:-left-12 md:h-64 md:w-64"
                    style={{ animationDelay: "1s" }}
                  />

                  <div className="relative h-56 w-56 sm:h-64 sm:w-64 md:h-80 md:w-80">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 p-[2px] animate-spin-slow">
                      <div className="h-full w-full rounded-full bg-black" />
                    </div>
                    <div className="absolute inset-[2px] overflow-hidden rounded-full">
                      <Image
                        src="/perfil2-min.jpg"
                        alt="Foto de perfil de J Rosano"
                        fill
                        sizes="(max-width: 768px) 224px, (max-width: 1024px) 256px, 320px"
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>
                </motion.div>

                <div className="order-2 max-w-2xl text-center md:order-1 md:text-left flex flex-col gap-4">
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.3,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="text-4xl font-bold font-sans sm:text-5xl md:text-6xl lg:text-7xl"
                  >
                    {dict.hero.welcome}
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="text-lg text-gray-300 sm:text-xl md:text-2xl"
                  >
                    {dict.hero.title}{" "}
                    <span className="font-semibold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                      {dict.hero.subtitle}
                    </span>
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.7,
                    }}
                  >
                    <TextType
                      text={dict.hero.typewriterTexts}
                      typingSpeed={80}
                      pauseDuration={1000}
                      showCursor
                      cursorCharacter="|"
                      variableSpeed={undefined}
                      onSentenceComplete={undefined}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.9,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="pt-4 flex flex-col gap-3 sm:flex-row sm:gap-4"
                  >
                    <Link
                      href={"#projects"}
                      className="group relative w-full sm:w-auto px-8 py-3 rounded-lg
                                 bg-blue-600 hover:bg-blue-700
                                 text-white font-medium text-center
                                 transition-all duration-300
                                 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50
                                 active:scale-95"
                    >
                      {dict.hero.viewProjects}
                    </Link>
                    <Link
                      href={"#footer"}
                      className="group relative w-full sm:w-auto px-8 py-3 rounded-lg
                                 border-2 border-white/20 hover:border-blue-500/50
                                 bg-white/5 hover:bg-white/10
                                 text-white font-medium text-center
                                 backdrop-blur-sm
                                 transition-all duration-300
                                 hover:scale-105
                                 active:scale-95"
                    >
                      {dict.hero.contactMe}
                    </Link>
                  </motion.div>
                </div>
              </section>

              <section id="about">
                <About dict={dict} />
                <section id="projects">
                  <Projects dict={dict} />
                </section>
              </section>
              <section>
                <Skills dict={dict} />
              </section>
              <section id="repos">
                <LatestRepos dict={dict} />
              </section>
            </main>
          </div>
        </div>
      </div>
      <Footer dict={dict} />
    </>
  );
}

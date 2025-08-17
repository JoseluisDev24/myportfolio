"use client";

import Image from "next/image";
import TextType from "@/components/text/TextType";
import SplitText from "@/components/text/SplitText";
import Particles from "@/components/particles/Particles";
import Skills from "@/components/skills/Skills";

export default function Home() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

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
            disableRotation={false} className={undefined}          />
        </div>
      </div>

      <div className="relative z-10 flex min-h-screen flex-col">
        <div className="flex-1 w-full max-w-5xl mx-auto">
          <main className="w-full px-6">
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
                <div className="relative h-44 w-44 rounded-full bg-gradient-to-br from-blue-500/70 to-transparent p-[3px] sm:h-52 sm:w-52 md:h-80 md:w-80">
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

              <div className="order-2 max-w-2xl py-4 text-center md:order-1 md:text-left flex flex-col gap-3">
                <h1 className="text-3xl font-bold sm:text-6xl">
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
                    "I love coding and creating innovative solutions.",
                    "Let's connect and build something amazing together!",
                  ]}
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor
                  cursorCharacter="|" variableSpeed={undefined} onSentenceComplete={undefined}                />

                <p className="text-gray-400 text-lg">
                  Explore my projects and learn more about me.
                </p>

                <div className="pt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
                  <button className="w-full sm:w-40 rounded-md border border-white/20 bg-white/5 px-6 py-2 cursor-pointer text-white shadow-lg backdrop-blur-md transition hover:bg-white/15">
                    View Projects
                  </button>
                  <button className="w-full sm:w-40 rounded-md border border-white/20 bg-white/5 px-6 py-2 cursor-pointer text-white shadow-lg backdrop-blur-md transition hover:bg-white/15">
                    Contact Me
                  </button>
                </div>
              </div>
            </section>

            <section className="relative text-center">
              <div
                aria-hidden
                className="absolute -left-20 top-10 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl md:-left-4 md:top-5 md:h-60 md:w-60 md:bg-blue-500/4"
              />
              <SplitText
                text="About me"
                className="text-4xl py-6 font-semibold text-center"
                delay={100}
                duration={1}
                ease="power3.out"
                splitType="lines"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
                onLetterAnimationComplete={handleAnimationComplete}
              />
              <p className="mx-auto mt-4 max-w-3xl rounded-lg border border-white/10 bg-white/5 p-8 text-gray-200 shadow-2xl backdrop-blur-md">
                I&apos;m a full-stack developer. My strongest skills are HTML5,
                CSS3, and JavaScript. I&apos;m also comfortable working with
                frameworks like NextJs. I&apos;m constantly expanding my
                knowledge with new tools and technologies. My goal is to always
                learn, innovate, and add value with every line of code.
              </p>
            </section>

            <section className="mt-12 text-center">
              <Skills />
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

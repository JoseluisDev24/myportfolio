import Image from "next/image";
import SplitText from "../text/SplitText";

export default function Skills() {
  const skills = [
    {
      name: "HTML5",
      icon: "/skills/html-min.png",
      neon: "shadow-[0_0_4px_#F97316]",
    },
    {
      name: "Css",
      icon: "/skills/css-min.png",
      neon: "shadow-[0_0_4px_#22D3EE]",
    },
    {
      name: "JavaScript",
      icon: "/skills/js-min.png",
      neon: "shadow-[0_0_4px_#FACC15]",
    },
    {
      name: "React",
      icon: "/skills/react-min.png",
      neon: "shadow-[0_0_4px_#22D3EE]",
    },
    {
      name: "Node.js",
      icon: "/skills/node-min.png",
      neon: "shadow-[0_0_4px_#22C55E]",
    },
    {
      name: "Sass",
      icon: "/skills/sass-min.png",
      neon: "shadow-[0_0_4px_#F472B6]",
    },
    {
      name: "Tailwind",
      icon: "/skills/tailwind-min.png",
      neon: "shadow-[0_0_4px_#38BDF8]",
    },
    {
      name: "Figma",
      icon: "/skills/figma.png",
      neon: "shadow-[0_0_4px_#EC4899]",
    },
    {
      name: "Mongo DB",
      icon: "/skills/mongo.png",
      neon: "shadow-[0_0_4px_#22C55E]",
    },
    {
      name: "Next.js",
      icon: "/skills/nextJS-min.png",
      neon: "shadow-[0_0_4px_#f0f0f0]",
    },
    {
      name: "Git",
      icon: "/skills/git-min.png",
      neon: "shadow-[0_0_4px_#F97316]",
    },
    {
      name: "GitHub",
      icon: "/skills/github-min.png",
      neon: "shadow-[0_0_4px_#A855F7]",
    },
  ];

  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <section className="text-center py-12">
      <SplitText
        text="My Skills"
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
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md max-w-3xl mx-auto">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className={`flex flex-col items-center justify-center gap-2 p-2 w-20 sm:w-22 rounded-md border border-transparent ${skill.neon} backdrop-blur-md hover:scale-105 transition-transform`}
          >
            <Image
              src={skill.icon}
              alt={skill.name}
              width={40}
              height={40}
              className="w-10 h-10 object-contain"
            />
            <p className="text-xs">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

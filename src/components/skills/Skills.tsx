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
      name: "CSS",
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
      name: "MongoDB",
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
    <div className="text-center mt-16 mb-6">
      <SplitText
        text="Tech Stack"
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
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 p-6 rounded-xl bg-white/4 border border-white/10 backdrop-blur-md max-w-3xl mx-auto">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className={`flex flex-col items-center justify-center gap-2 p-2 w-20 sm:w-22 rounded-md border border-transparent ${skill.neon} backdrop-blur-sm hover:scale-105 transition-transform`}
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
    </div>
  );
}

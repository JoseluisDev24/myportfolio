export default function Skills() {
  const skills = [
    {
      name: "HTML5",
      icon: "/skills/html-min.png",
      neon: "shadow-[0_0_4px_#00aaff]",
    },
    {
      name: "Css",
      icon: "/skills/css-min.png",
      neon: "shadow-[0_0_4px_#4F46E5]",
    },
    {
      name: "JavaScript",
      icon: "/skills/js-min.png",
      neon: "shadow-[0_0_4px_#FACC15]",
    },
    {
      name: "Sass",
      icon: "/skills/sass-min.png",
      neon: "shadow-[0_0_4px_#F472B6]",
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
      name: "Tailwind",
      icon: "/skills/tailwind-min.png",
      neon: "shadow-[0_0_4px_#38BDF8]",
    },
    {
      name: "Mongo DB",
      icon: "/skills/mongo.png",
      neon: "shadow-[0_0_4px_#F87171]",
    },
    {
      name: "Next.js",
      icon: "/skills/nextJS-min.png",
      neon: "shadow-[0_0_4px_#4ADE80]",
    },
    {
      name: "GitHub",
      icon: "/skills/github-min.png",
      neon: "shadow-[0_0_4px_#A855F7]",
    },
    {
      name: "Figma",
      icon: "/skills/figma.png",
      neon: "shadow-[0_0_4px_#EC4899]",
    },
  ];

  return (
    <section className="text-center py-12">
      <h2 className="text-4xl font-bold text-gray-300 pb-10">Skills</h2>
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md max-w-3xl mx-auto">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className={`flex flex-col items-center justify-center gap-2 p-2 w-20 sm:w-22 rounded-md border border-transparent ${skill.neon} backdrop-blur-md hover:scale-105 transition-transform`}
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-10 h-10 object-contain"
            />
            <p className="text-xs">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

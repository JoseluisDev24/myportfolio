import SplitText from "../text/SplitText";

type Repo = {
  name: string;
  description: string;
  language: "JavaScript" | "TypeScript" | string;
  stars: number;
  updatedAgo: string;
  url: string;
};

const REPOS: Repo[] = [
  {
    name: "nextjs-portfolio",
    description: "My personal portfolio website built with Next.js.",
    language: "JavaScript",
    stars: 120,
    updatedAgo: "3 days ago",
    url: "https://github.com/you/nextjs-portfolio",
  },
  {
    name: "ecommerce-app",
    description: "Full-stack e-commerce application with Stripe integration.",
    language: "TypeScript",
    stars: 95,
    updatedAgo: "2 days ago",
    url: "https://github.com/you/ecommerce-app",
  },
  {
    name: "weather-dashboard",
    description: "A weather dashboard using OpenWeatherMap API",
    language: "JavaScript",
    stars: 75,
    updatedAgo: "5 days ago",
    url: "https://github.com/you/weather-dashboard",
  },
  {
    name: "markdown-editor",
    description: "A Markdown editor with live preview feature",
    language: "TypeScript",
    stars: 43,
    updatedAgo: "1 day ago",
    url: "https://github.com/you/markdown-editor",
  },
];

export default function LatestRepos({
  subtitle = "A selection of public work on GitHub.",
  repos = REPOS,
}: {
  subtitle?: string;
  repos?: Repo[];
}) {

    const handleAnimationComplete = () => {
      console.log("All letters have animated!");
    };

  return (
    <section
      id="repos"
      className="mx-auto max-w-5xl md:px-10 scroll-mt-20 mt-16 mb-6 "
    >
      <div className="text-center">
        <SplitText
          text="Latest Repositories"
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
        <p className="text-gray-400 mb-10 text-lg">{subtitle}</p>
      </div>

      <div className="mt-8 grid gap-5 grid-cols-1 sm:grid-cols-2">
        {repos.map((repo) => (
          <article
            key={repo.name}
            className="
              rounded-2xl p-5
              bg-white/5 backdrop-blur-md
              border border-white/10 ring-1 ring-white/10
              shadow-[0_8px_30px_rgba(0,0,0,0.25)]
            "
          >
            <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">
              {repo.name}
            </h3>

            <p className="mt-2 text-sm sm:text-base text-gray-300/90">
              {repo.description}
            </p>

            <div className="mt-4 flex items-center justify-between text-sm text-gray-200">
              <span className="inline-flex items-center gap-2 font-medium">
                <span aria-hidden className={dotClassFor(repo.language)} />
                {repo.language}
              </span>
              <span className="tabular-nums">{repo.stars}</span>
            </div>

            <div className="mt-1 flex items-center justify-between text-sm text-gray-400">
              <span>{repo.updatedAgo}</span>
              <span>Updated</span>
            </div>

            <a
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm font-medium text-sky-400 hover:text-sky-300"
            >
              View on GitHub
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function dotClassFor(lang: string) {
  const base = "h-2.5 w-2.5 rounded-full inline-block";
  if (lang.toLowerCase() === "javascript") return `${base} bg-yellow-400`;
  if (lang.toLowerCase() === "typescript") return `${base} bg-blue-400`;
  return `${base} bg-gray-400`;
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { SVGProps } from "react";

type Size = "sm" | "md";

export type ProjectCardProps = {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  tags?: string[];
  liveUrl?: string;
  repoUrl?: string;
  className?: string;
  size?: Size;
};

export default function ProjectCard({
  title,
  description,
  imageSrc,
  imageAlt = `${title} preview`,
  tags = [],
  liveUrl,
  repoUrl,
  className = "",
  size = "sm",
}: ProjectCardProps) {
  const isSm = size === "sm";

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className={[
        "group relative h-full rounded-xl w-full overflow-hidden",
        "bg-white/[0.02] border border-white/10",
        "hover:bg-white/[0.05] hover:border-white/20",
        "transition-all duration-300",
        "flex flex-col",
        className,
      ].join(" ")}
    >
      <div className="relative overflow-hidden">
        <div
          className={
            isSm
              ? "w-full aspect-[21/9] md:aspect-[16/9]"
              : "w-full aspect-[16/9]"
          }
        >
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent" />
          )}
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <div className="flex-grow">
          <h3
            className={
              isSm
                ? "text-lg font-semibold text-white group-hover:text-blue-400 transition-colors"
                : "text-xl md:text-2xl font-semibold text-white group-hover:text-blue-400 transition-colors"
            }
          >
            {title}
          </h3>

          <p
            className={[
              isSm ? "mt-2 text-sm" : "mt-2 text-base",
              "text-gray-400 line-clamp-2 leading-relaxed",
            ].join(" ")}
          >
            {description}
          </p>
        </div>

        {tags.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {tags.map((t) => (
              <li
                key={t}
                className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-gray-300"
              >
                {t}
              </li>
            ))}
          </ul>
        )}

        {(liveUrl || repoUrl) && (
          <div className="mt-4 flex flex-wrap gap-2">
            {liveUrl && (
              <Link
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg
                           border border-white/10 bg-white/5
                           text-xs text-white font-medium
                           hover:bg-white/10 hover:border-blue-500/50
                           transition-all duration-200"
              >
                <span>Live</span>
                <ArrowIcon className="w-3.5 h-3.5" />
              </Link>
            )}
            {repoUrl && (
              <Link
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg
                           border border-white/10 bg-white/5
                           text-xs text-white font-medium
                           hover:bg-white/10 hover:border-blue-500/50
                           transition-all duration-200"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Repo</span>
              </Link>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}

type IconProps = SVGProps<SVGSVGElement>;

function ArrowIcon({ className = "", ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className={className}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 12h14m-7-7l7 7-7 7"
      />
    </svg>
  );
}

function GithubIcon({ className = "", ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      fill="currentColor"
      className={className}
      {...props}
    >
      <path d="M12 2a10 10 0 0 0-3.162 19.492c.5.093.682-.217.682-.483 0-.237-.009-.866-.013-1.7-2.776.603-3.362-1.339-3.362-1.339-.454-1.154-1.11-1.463-1.11-1.463-.908-.62.069-.607.069-.607 1.004.071 1.533 1.032 1.533 1.032.893 1.53 2.344 1.088 2.914.832.091-.647.35-1.088.636-1.339-2.216-.252-4.546-1.108-4.546-4.935 0-1.09.39-1.983 1.029-2.682-.103-.253-.446-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.56 9.56 0 0 1 12 6.844a9.56 9.56 0 0 1 2.506.337c1.91-1.294 2.748-1.025 2.748-1.025.545 1.376.202 2.393.1 2.646.64.699 1.028 1.592 1.028 2.682 0 3.835-2.334 4.68-4.557 4.928.359.31.679.918.679 1.852 0 1.336-.012 2.414-.012 2.741 0 .268.18.58.688.481A10.002 10.002 0 0 0 12 2z" />
    </svg>
  );
}

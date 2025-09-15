"use client";

import Link from "next/link";
import Image from "next/image";
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
    <article
      className={[
        "group relative h-full rounded-lg w-full md:max-w-none mx-auto",
        "bg-white/8 backdrop-blur-xl border border-white/15",
        "shadow-[0_8px_30px_rgba(0,0,0,0.25)]",
        "ring-1 ring-white/10 hover:ring-white/20 transition-all duration-300",

        "before:content-[''] before:pointer-events-none",
        "before:absolute before:-inset-[1px] before:-z-10 before:rounded-xl",
        "before:bg-gradient-to-br before:from-blue-500/20 before:via-cyan-400/10 before:to-transparent",
        "before:opacity-0 group-hover:before:opacity-100 before:transition-opacity",

        className,
      ].join(" ")}
    >
      <div className="relative overflow-hidden rounded-t-xl">
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
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 320px, 33vw"
            />
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-blue-500/15 via-indigo-500/10 to-transparent" />
          )}
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      </div>

      <div className="p-4">
        <h3
          className={
            isSm
              ? "text-base md:text-lg font-semibold text-white"
              : "text-xl md:text-2xl font-semibold text-white"
          }
        >
          {title}
        </h3>

        <p
          className={[
            isSm ? "mt-1 text-sm md:text-base" : "mt-2 text-base",
            "text-gray-300/90 overflow-hidden [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical] md:line-clamp-none",
          ].join(" ")}
        >
          {description}
        </p>

        {tags.length > 0 && (
          <ul className="mt-3 flex flex-wrap gap-2">
            {tags.map((t) => (
              <li
                key={t}
                className={
                  isSm
                    ? "rounded-full border border-white/15 bg-white/5 px-2 py-0.5 text-[10px] md:text-[11px] text-gray-200"
                    : "rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-gray-200"
                }
              >
                {t}
              </li>
            ))}
          </ul>
        )}

        {(liveUrl || repoUrl) && (
          <div className="mt-4 flex flex-wrap gap-2">
            {liveUrl && (
              <GlassButton
                as="a"
                href={liveUrl}
                ariaLabel={`${title} live`}
                size={size}
              >
                <span className="text-[11px] md:text-xs">Live</span>
                <ArrowIcon className="opacity-90" />
              </GlassButton>
            )}
            {repoUrl && (
              <GlassButton
                as="a"
                href={repoUrl}
                ariaLabel={`${title} repo`}
                size={size}
              >
                <GithubIcon className="opacity-90" />
                <span className="text-[11px] md:text-xs">Repo</span>
              </GlassButton>
            )}
          </div>
        )}
      </div>
    </article>
  );
}


type GlassButtonProps =
  | {
      as: "a";
      href: string;
      ariaLabel?: string;
      children: React.ReactNode;
      size?: Size;
    }
  | {
      as?: "button";
      href?: never;
      ariaLabel?: string;
      children: React.ReactNode;
      onClick?: () => void;
      size?: Size;
    };

function GlassButton(props: GlassButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/8 text-white " +
    "backdrop-blur-md shadow-[0_2px_12px_rgba(0,0,0,0.25)] hover:bg-white/15 hover:border-white/25 transition-colors";
  const sizeCls =
    props.size === "sm"
      ? "px-2.5 py-1 text-[11px] md:px-3 md:py-1.5 md:text-xs"
      : "px-4 py-2 text-sm";

  if (props.as === "a") {
    return (
      <Link
        href={props.href}
        aria-label={props.ariaLabel}
        className={`${base} ${sizeCls}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.children}
      </Link>
    );
  }
  return (
    <button aria-label={props.ariaLabel} className={`${base} ${sizeCls}`}>
      {props.children}
    </button>
  );
}


type IconProps = SVGProps<SVGSVGElement> & { size?: number | string };

function ArrowIcon({ size = 16, className = "", ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
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

function GithubIcon({ size = 16, className = "", ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      aria-hidden
      fill="currentColor"
      className={className}
      {...props}
    >
      <path d="M12 2a10 10 0 0 0-3.162 19.492c.5.093.682-.217.682-.483 0-.237-.009-.866-.013-1.7-2.776.603-3.362-1.339-3.362-1.339-.454-1.154-1.11-1.463-1.11-1.463-.908-.62.069-.607.069-.607 1.004.071 1.533 1.032 1.533 1.032.893 1.53 2.344 1.088 2.914.832.091-.647.35-1.088.636-1.339-2.216-.252-4.546-1.108-4.546-4.935 0-1.09.39-1.983 1.029-2.682-.103-.253-.446-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.56 9.56 0 0 1 12 6.844a9.56 9.56 0 0 1 2.506.337c1.91-1.294 2.748-1.025 2.748-1.025.545 1.376.202 2.393.1 2.646.64.699 1.028 1.592 1.028 2.682 0 3.835-2.334 4.68-4.557 4.928.359.31.679.918.679 1.852 0 1.336-.012 2.414-.012 2.741 0 .268.18.58.688.481A10.002 10.002 0 0 0 12 2z" />
    </svg>
  );
}

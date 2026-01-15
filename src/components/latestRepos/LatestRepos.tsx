"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

type Repo = {
  name: string;
  description: string;
  language: string;
  stars: number;
  updatedAgo: string;
  url: string;
};

type GitHubRepo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  fork: boolean;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
};

interface LatestReposProps {
  dict: Dictionary;
}

export default function LatestRepos({ dict }: LatestReposProps) {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  const getTimeAgo = (dateString: string): string => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    const intervals = [
      { label: "year", seconds: 31536000 },
      { label: "month", seconds: 2592000 },
      { label: "week", seconds: 604800 },
      { label: "day", seconds: 86400 },
      { label: "hour", seconds: 3600 },
      { label: "minute", seconds: 60 },
    ];

    for (const interval of intervals) {
      const count = Math.floor(diffInSeconds / interval.seconds);
      if (count > 0) {
        return `${count} ${interval.label}${count !== 1 ? "s" : ""} ago`;
      }
    }
    return "just now";
  };

  const fetchRepos = useCallback(async () => {
    try {
      const response = await fetch(
        "https://api.github.com/users/JoseluisDev24/repos?sort=updated&per_page=20"
      );
      const data: GitHubRepo[] = await response.json();

      const transformedRepos = data
        .filter((repo: GitHubRepo) => !repo.fork)
        .sort(
          (a: GitHubRepo, b: GitHubRepo) =>
            new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
        )
        .slice(0, 4)
        .map((repo: GitHubRepo) => ({
          name: repo.name,
          description: repo.description || "No description available",
          language: repo.language || "Unknown",
          stars: repo.stargazers_count,
          updatedAgo: getTimeAgo(repo.updated_at),
          url: repo.html_url,
        }));

      setRepos(transformedRepos);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRepos();
  }, [fetchRepos]);

  const dotClassFor = (lang: string) => {
    const base = "h-2.5 w-2.5 rounded-full inline-block";
    if (lang.toLowerCase() === "javascript") return `${base} bg-yellow-400`;
    if (lang.toLowerCase() === "typescript") return `${base} bg-blue-400`;
    if (lang.toLowerCase() === "python") return `${base} bg-green-400`;
    if (lang.toLowerCase() === "css") return `${base} bg-purple-400`;
    if (lang.toLowerCase() === "html") return `${base} bg-orange-400`;
    return `${base} bg-gray-400`;
  };

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-64 gap-6">
        <span>Loading repositories</span>
        <Box>
          <CircularProgress size="3rem" />
        </Box>
      </div>
    );
  }

  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute -left-20 top-10 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl md:-left-4 md:top-5 md:h-60 md:w-60 md:bg-blue-500/4"
      />

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="font-heading text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight text-gray-100 text-center drop-shadow-[0_2px_10px_rgba(59,130,246,0.30)] mt-16 mb-12"
      >
        {dict.repositories.title}
      </motion.h2>

      <div className="mx-auto max-w-4xl px-4">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
          {repos.map((repo, index) => (
            <motion.article
              key={repo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -4 }}
              className="group rounded-xl p-6 bg-white/[0.02] border border-white/10 
                         hover:bg-white/[0.05] hover:border-white/20
                         transition-all duration-300"
            >
              <h3 className="text-xl font-semibold tracking-tight text-white group-hover:text-blue-400 transition-colors">
                {repo.name}
              </h3>

              <p className="mt-3 text-sm text-gray-400 line-clamp-2 leading-relaxed">
                {repo.description}
              </p>

              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="inline-flex items-center gap-2 font-medium text-gray-300">
                  <span aria-hidden className={dotClassFor(repo.language)} />
                  {repo.language}
                </span>
                <span className="tabular-nums flex items-center gap-1.5 text-gray-400">
                  <StarIcon className="w-4 h-4" />
                  {repo.stars}
                </span>
              </div>

              <div className="mt-2 flex items-center justify-between text-xs text-gray-500">
                <span>Updated {repo.updatedAgo}</span>
              </div>

              <a
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-blue-400 
                           hover:text-blue-300 transition-colors group"
              >
                {dict.repositories.viewOnGitHub}
                <ExternalLinkIcon className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}

function StarIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function ExternalLinkIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  );
}

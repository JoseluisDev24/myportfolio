"use client";

import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";

type Language = "es" | "en";

interface ToggleLanguageProps {
  currentLocale: Language; 
}

export default function ToggleLanguage({ currentLocale }: ToggleLanguageProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const toggleLanguage = () => {
    const newLang: Language = currentLocale === "es" ? "en" : "es";

    startTransition(() => {
      const newPath = pathname.replace(`/${currentLocale}`, `/${newLang}`);
      router.push(newPath);
    });

    console.log("Idioma cambiado a:", newLang);
  };

  const languageConfig: Record<
    Language,
    { label: string; short: string; switchTo: string }
  > = {
    es: {
      label: "Español",
      short: "ES",
      switchTo: "Cambiar a Inglés",
    },
    en: {
      label: "English",
      short: "EN",
      switchTo: "Switch to Spanish",
    },
  };

  const currentLang = languageConfig[currentLocale]; 
  const nextLang = languageConfig[currentLocale === "es" ? "en" : "es"];

  return (
    <button
      onClick={toggleLanguage}
      disabled={isPending} 
      className={`flex items-center gap-2 px-2 py-2 rounded-md bg-white/10 hover:bg-white/20 
                 transition-all duration-200 ease-in-out backdrop-blur-sm border border-white/20
                 text-white hover:text-white active:scale-95 group cursor-pointer
                 ${isPending ? "opacity-50" : ""}`} 
      title={`${currentLang.switchTo}`}
    >
      <svg
        className={`w-4 h-4 group-hover:rotate-12 transition-transform duration-200 hidden sm:block
                   ${isPending ? "animate-spin" : ""}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="m12 2c-2.09 1.38-3.24 3.93-3.24 6.75 0 2.82 1.15 5.37 3.24 6.75 2.09-1.38 3.24-3.93 3.24-6.75 0-2.82-1.15-5.37-3.24-6.75z" />
      </svg>

      <span className="flex items-center gap-1 text-sm font-medium">
        <span>{currentLang.short}</span>
      </span>

      <svg
        className="w-3 h-3 opacity-70 group-hover:opacity-100 transition-opacity duration-200"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>
  );
}

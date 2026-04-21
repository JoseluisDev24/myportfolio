"use client";

import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";

type Language = "es" | "en";

interface ToggleLanguageProps {
  currentLocale: Language;
  size?: "sm" | "lg";
}

export default function ToggleLanguage({ currentLocale, size = "sm" }: ToggleLanguageProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const toggleLanguage = () => {
    const newLang: Language = currentLocale === "es" ? "en" : "es";
    startTransition(() => {
      router.push(pathname.replace(`/${currentLocale}`, `/${newLang}`));
    });
  };

  const textSize = size === "lg" ? "text-xl font-semibold" : "text-sm font-medium";

  return (
    <button
      onClick={toggleLanguage}
      disabled={isPending}
      className={`flex items-center gap-2 cursor-pointer transition-opacity duration-200
                 ${isPending ? "opacity-40" : ""}`}
    >
      <span className={`${textSize} tracking-wide transition-colors duration-200
                       ${currentLocale === "es" ? "text-white" : "text-gray-500 hover:text-gray-300"}`}>
        ES
      </span>
      <span className="text-gray-600 text-xs">/</span>
      <span className={`${textSize} tracking-wide transition-colors duration-200
                       ${currentLocale === "en" ? "text-white" : "text-gray-500 hover:text-gray-300"}`}>
        EN
      </span>
    </button>
  );
}

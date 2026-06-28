"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import Particles from "@/components/particles/Particles";
import ToggleLanguage from "@/components/language/buttonLanguage/ToggleLanguage";

interface HeaderClientProps {
  dict: Dictionary;
  locale: "es" | "en";
}

export default function HeaderClient({ dict, locale }: HeaderClientProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      name: dict.header.about,
      href: `/${locale}#about`,
      icon: <PersonOutlineIcon />,
    },
    {
      name: dict.header.projects,
      href: `/${locale}#projects`,
      icon: <WorkOutlineIcon />,
    },
    {
      name: dict.header.templates,
      href: `/${locale}/templates`,
      icon: <WidgetsOutlinedIcon />,
    },
    {
      name: dict.header.resume,
      href: "/JoseluisRosanoCV.pdf",
      target: "_blank",
      icon: <DescriptionOutlinedIcon />,
    },
  ];

  return (
    <header className="sticky top-0 z-20 w-full px-4 md:px-0">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 h-16
                   bg-black/30 backdrop-blur-sm md:backdrop-blur-xl
                   backdrop-saturate-150 border-b border-white/10"
      />

      <nav className="relative mx-auto flex h-16 max-w-5xl items-center justify-between animate-slideDown">
        <Link
          href="/"
          className="text-2xl tracking-normal hover:scale-110 transition-transform"
        >
          <span className="font-mono font-light text-gray-500">&lt;</span>
          <span className="font-mono font-light text-gray-300">JR</span>
          <span className="font-mono font-bold text-blue-500">Dev</span>
          <span className="font-mono font-light text-gray-500">/&gt;</span>
        </Link>

        <ul className="hidden md:flex items-center gap-6">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                target={item.target}
                className="underline decoration-transparent decoration-2 underline-offset-4
                           transition-colors duration-200 ease-out hover:decoration-blue-600"
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li className="pl-5 border-l border-white/15">
            <ToggleLanguage currentLocale={locale} />
          </li>
        </ul>

        <div className="flex items-center gap-3 md:hidden">
          <ToggleLanguage currentLocale={locale} />
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
            className="p-2 rounded-lg hover:bg-white/10 transition-all"
          >
            <MenuIcon fontSize="large" className="text-white" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 md:hidden bg-[#050508]"
          >
            <div className="absolute inset-0">
              <Particles
                particleColors={["#3b82f6", "#6366f1", "#8b5cf6"]}
                particleCount={90}
                particleSpread={7}
                speed={0.06}
                particleBaseSize={70}
                moveParticlesOnHover={false}
                alphaParticles={true}
                disableRotation={false}
                className={undefined}
              />
            </div>

            <div className="relative flex flex-col h-full">
              <div className="flex items-center justify-between px-5 h-16 border-b border-white/8">
                <Link
                  href="/"
                  className="text-2xl tracking-normal"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="font-mono font-light text-gray-500">&lt;</span>
                  <span className="font-mono font-light text-gray-300">JR</span>
                  <span className="font-mono font-bold text-blue-500">Dev</span>
                  <span className="font-mono font-light text-gray-500">/&gt;</span>
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                  className="p-2 text-gray-400 hover:text-white transition-colors"
                >
                  <CloseIcon />
                </button>
              </div>

              <nav className="flex-1 flex flex-col items-center justify-center gap-0">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.06 + 0.08,
                      duration: 0.3,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Link
                      href={item.href}
                      target={item.target}
                      onClick={() => setIsOpen(false)}
                      className="block px-8 py-3 text-white font-normal text-2xl font-display
                                 active:opacity-50 transition-opacity"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="px-5 py-5 text-center">
                <p className="text-xs text-white/20">JRDev · Fullstack Developer</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

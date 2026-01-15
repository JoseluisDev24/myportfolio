"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

interface HeaderClientProps {
  dict: Dictionary;
}

export default function HeaderClient({ dict }: HeaderClientProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      name: dict.header.about,
      href: "#about",
      icon: <PersonOutlineIcon />,
    },
    {
      name: dict.header.projects,
      href: "#projects",
      icon: <WorkOutlineIcon />,
    },
    {
      name: dict.header.resume,
      href: "/JoseluisRosano.pdf",
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
          className="text-3xl font-bold hover:scale-110 transition-transform"
        >
          JR<span className="text-blue-500">Dev</span>
        </Link>

        <ul className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                target={item.target}
                className="
                  underline decoration-transparent decoration-2 underline-offset-4
                  transition-colors duration-200 ease-out
                  hover:decoration-blue-600
                "
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          className="md:hidden relative z-50 p-2 rounded-lg
                     hover:bg-white/10 transition-all"
        >
          {isOpen ? (
            <CloseIcon fontSize="large" className="text-white" />
          ) : (
            <MenuIcon fontSize="large" className="text-white" />
          )}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-30 bg-black/80 backdrop-blur-sm md:hidden"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 40,
              }}
              className="fixed top-0 right-0 bottom-0 z-40 w-[280px] md:hidden
                         bg-gradient-to-b from-blue-950/10 via-slate-950 to-black
                         backdrop-blur-xl border-l border-blue-500/20
                         shadow-2xl shadow-black/80"
            >
              <div className="p-6 border-b border-white/10">
                <h2 className="text-2xl font-bold">
                  JR<span className="text-blue-500">Dev</span>
                </h2>
                <p className="text-xs text-gray-400 mt-1">Navigation</p>
              </div>

              <nav className="p-6">
                <ul className="space-y-2">
                  {menuItems.map((item, index) => (
                    <motion.li
                      key={item.name}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        delay: index * 0.1 + 0.2,
                        duration: 0.4,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <Link
                        href={item.href}
                        target={item.target}
                        onClick={() => setIsOpen(false)}
                        className="group flex items-center gap-4 px-4 py-3.5 rounded-xl
                                   text-gray-300 font-medium
                                   hover:bg-white/5 hover:text-white
                                   active:scale-95
                                   transition-all duration-200"
                      >
                        <div
                          className="w-10 h-10 flex items-center justify-center rounded-lg
                                        border border-white/10 text-blue-400
                                        group-hover:border-blue-500/50 group-hover:bg-blue-500/10 group-hover:scale-110
                                        transition-all duration-200"
                        >
                          {item.icon}
                        </div>
                        <span className="text-base">{item.name}</span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10"
              >
                <div className="text-center">
                  <p className="text-xs text-gray-500 mb-2">© 2025 JRDev</p>
                  <p className="text-xs text-gray-600">Fullstack Developer</p>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

"use client";
import { useState } from "react";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

interface HeaderClientProps {
  dict: Dictionary;
}

export default function HeaderClient({ dict }: HeaderClientProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: dict.header.about, href: "#about" },
    { name: dict.header.projects, href: "#projects" },
    { name: dict.header.resume, href: "/JoseluisRosano.pdf", target: "_blank" },
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

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-30 bg-black/80 backdrop-blur-sm
                       animate-fadeIn md:hidden"
            onClick={() => setIsOpen(false)}
            aria-hidden
          />

          <div
            className="fixed top-16 inset-x-0 z-40 md:hidden
                       animate-slideDown"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="mx-4 mt-4 rounded-2xl overflow-hidden
                           bg-white/5 backdrop-blur-xl
                           border border-white/10
                           shadow-2xl shadow-black/50"
            >
              <ul className="flex flex-col divide-y divide-white/5">
                {menuItems.map((item, index) => (
                  <li
                    key={item.name}
                    className="animate-slideUp"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <Link
                      href={item.href}
                      target={item.target}
                      className="block px-6 py-4 text-lg text-center
                                 text-white/90 font-medium
                                 hover:bg-white/10 hover:text-white
                                 active:bg-white/15
                                 transition-all duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="px-6 py-4 bg-white/5 border-t border-white/5">
                <p className="text-xs text-center text-white/60">
                  © 2024 JRDev
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}

"use client";
import { useState } from "react";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full px-6 md:px-0">
      <div className="absolute inset-0 h-16 bg-black/30 backdrop-blur-md border-b border-white/10" />

      <nav className="relative mx-auto flex h-16 max-w-5xl items-center justify-between">
        <Link href={"/"} className="text-3xl font-bold">
          JR<span className="text-blue-500">Dev</span>
        </Link>

        <ul className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="
    underline decoration-transparent decoration-2 underline-offset-4
    transition-colors duration-100 ease-out
    hover:decoration-blue-600
  "
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <MenuIcon fontSize="large" />
        </button>
      </nav>

      {isOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden bg-black/90 backdrop-blur-[2px]"
          onClick={() => setIsOpen(false)}
          aria-hidden
        >
          <div
            className="fixed top-16 inset-x-0 z-50 md:hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mx-auto max-w-5xl px-6 py-6">
              <ul className="flex flex-col items-center gap-4 text-center">
                {menuItems.map((item) => (
                  <li key={item.name} className="w-full">
                    <Link
                      href={item.href}
                      className="block py-2 hover:underline"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

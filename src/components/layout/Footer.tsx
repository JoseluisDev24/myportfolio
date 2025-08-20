"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer id="footer" className="relative w-full mt-16">
      <div
        aria-hidden
        className="absolute inset-0 -z-10
                   bg-black/30 backdrop-blur-md
                   border-t border-white/10"
      />

      <div className="mx-auto max-w-5xl px-4 md:px-0 py-10">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div className="max-w-sm">
            <Link href="/" className="text-2xl font-bold">
              JR<span className="text-blue-500">Dev</span>
            </Link>
            <p className="mt-2 text-sm text-gray-300/90">
              Full-stack developer. I build clean, fast, and accessible web
              experiences.
            </p>

            <div className="mt-4 flex items-center gap-3">
              <a
                href="https://github.com/youruser"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-white hover:bg-white/15"
                aria-label="GitHub"
              >
                <GitHubIcon className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/youruser"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-white hover:bg-white/15"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="h-5 w-5" />
              </a>
              <a
                href="mailto:you@mail.com"
                className="rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-white hover:bg-white/15"
                aria-label="Email"
              >
                <MailIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          <nav
            className="
    grid grid-cols-[auto_auto] justify-between gap-x-6 gap-y-8 text-sm
    md:[grid-template-columns:auto_auto_auto] md:justify-between md:gap-12
  "
          >
            <div>
              <h4 className="font-semibold text-gray-200">Site</h4>
              <ul className="mt-3 space-y-2 text-gray-300">
                <li>
                  <Link
                    href="#about"
                    className="underline decoration-transparent underline-offset-4 hover:decoration-blue-500"
                  >
                    About me
                  </Link>
                </li>
                <li>
                  <Link
                    href="#projects"
                    className="underline decoration-transparent underline-offset-4 hover:decoration-blue-500"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="underline decoration-transparent underline-offset-4 hover:decoration-blue-500"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-200">Resources</h4>
              <ul className="mt-3 space-y-2 text-gray-300">
                <li>
                  <Link
                    href="/resume"
                    className="underline decoration-transparent underline-offset-4 hover:decoration-blue-500"
                  >
                    Resume
                  </Link>
                </li>
                <li>
                  <Link
                    href="#repos"
                    className="underline decoration-transparent underline-offset-4 hover:decoration-blue-500"
                  >
                    Latest repos
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-start-1 md:col-start-auto">
              <h4 className="font-semibold text-gray-200">Elsewhere</h4>
              <ul className="mt-3 space-y-2 text-gray-300">
                <li>
                  <a
                    href="https://github.com/youruser"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-transparent underline-offset-4 hover:decoration-blue-500"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/youruser"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-transparent underline-offset-4 hover:decoration-blue-500"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="mt-8 border-t border-white/10 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Jose Rosano.
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-400">
            <span>Built with Next.js & Tailwind</span>
            <a
              href="#top"
              className="underline decoration-transparent underline-offset-4 hover:decoration-blue-500"
            >
              Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function GitHubIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden
      fill="currentColor"
    >
      <path d="M12 2a10 10 0 0 0-3.162 19.492c.5.093.682-.217.682-.483 0-.237-.009-.866-.013-1.7-2.776.603-3.362-1.339-3.362-1.339-.454-1.154-1.11-1.463-1.11-1.463-.908-.62.069-.607.069-.607 1.004.071 1.533 1.032 1.533 1.032.893 1.53 2.344 1.088 2.914.832.091-.647.35-1.088.636-1.339-2.216-.252-4.546-1.108-4.546-4.935 0-1.09.39-1.983 1.029-2.682-.103-.253-.446-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.56 9.56 0 0 1 12 6.844a9.56 9.56 0 0 1 2.506.337c1.91-1.294 2.748-1.025 2.748-1.025.545 1.376.202 2.393.1 2.646.64.699 1.028 1.592 1.028 2.682 0 3.835-2.334 4.68-4.557 4.928.359.31.679.918.679 1.852 0 1.336-.012 2.414-.012 2.741 0 .268.18.58.688.481A10.002 10.002 0 0 0 12 2z" />
    </svg>
  );
}
function LinkedInIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden
      fill="currentColor"
    >
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zM8 8h3.8v2.2h.1C12.6 9 14.3 8 16.7 8c4.3 0 5.1 2.8 5.1 6.4V24H18v-5.5c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V24H8V8z" />
    </svg>
  );
}
function MailIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />
      <path d="m22 7-10 6L2 7" />
    </svg>
  );
}

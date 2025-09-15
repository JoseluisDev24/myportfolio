"use client";

import Link from "next/link";

interface FooterProps {
  dict: Dictionary;
}

export default function Footer({ dict }: FooterProps) {
  return (
    <footer id="footer" className="relative w-full mt-16">
      <div
        aria-hidden
        className="absolute inset-0 -z-10
                   bg-black/30 backdrop-blur-md
                   border-t border-white/10"
      />

      <div className="mx-auto max-w-5xl px-4 md:px-0 py-8 border-b border-white/10">
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-white mb-3">
            {dict.footer.cta.title}
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            {dict.footer.cta.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:joseluis24dev@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-blue-500/15 hover:bg-blue-600/70 border border-white/20 text-white rounded-lg font-medium transition-colors min-w-[200px] justify-center"
            >
              <MailIcon className="h-5 w-5" />
              {dict.footer.cta.sendEmail}
            </a>
            <a
              href="https://wa.me/59892171503"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-green-600/70 hover:bg-green-600 border border-white/20 text-white rounded-lg font-medium transition-colors min-w-[200px] justify-center"
            >
              <WhatsAppIcon className="h-5 w-5" />
              {dict.footer.cta.whatsapp}
            </a>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span>📧</span>
              <span>joseluis24dev@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📱</span>
              <span>+598 92 171 503</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 md:px-0 py-10">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div className="max-w-sm">
            <Link href="/" className="text-2xl font-bold">
              JR<span className="text-blue-500">Dev</span>
            </Link>
            <p className="mt-2 text-sm text-gray-300/90">
              {dict.footer.brand.description}
            </p>

            <div className="mt-4 flex items-center gap-3">
              <a
                href="https://github.com/JoseluisDev24"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-white hover:bg-white/15"
                aria-label="GitHub"
              >
                <GitHubIcon className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/joseluisdev24"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-white hover:bg-white/15"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="h-5 w-5" />
              </a>
              <a
                href="mailto:joseluisrosano@gmail.com"
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
              <h4 className="font-semibold text-gray-200">
                {dict.footer.navigation.site.title}
              </h4>
              <ul className="mt-3 space-y-2 text-gray-300">
                <li>
                  <Link
                    href="#about"
                    className="underline decoration-transparent underline-offset-4 hover:decoration-blue-500"
                  >
                    {dict.footer.navigation.site.aboutMe}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#projects"
                    className="underline decoration-transparent underline-offset-4 hover:decoration-blue-500"
                  >
                    {dict.footer.navigation.site.projects}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#footer"
                    className="underline decoration-transparent underline-offset-4 hover:decoration-blue-500"
                  >
                    {dict.footer.navigation.site.contact}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-200">
                {dict.footer.navigation.resources.title}
              </h4>
              <ul className="mt-3 space-y-2 text-gray-300">
                <li>
                  <Link
                    href="/JoseluisRosano.pdf"
                    target="_blank"
                    download="JoseLuisRosanoCV.pdf"
                    className="underline decoration-transparent underline-offset-4 hover:decoration-blue-500"
                  >
                    {dict.footer.navigation.resources.resume}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#repos"
                    className="underline decoration-transparent underline-offset-4 hover:decoration-blue-500"
                  >
                    {dict.footer.navigation.resources.latestRepos}
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-start-1 md:col-start-auto">
              <h4 className="font-semibold text-gray-200">
                {dict.footer.navigation.contact.title}
              </h4>
              <ul className="mt-3 space-y-2 text-gray-300">
                <li>
                  <a
                    href="mailto:joseluis24dev@gmail.com"
                    className="underline decoration-transparent underline-offset-4 hover:decoration-blue-500"
                  >
                    {dict.footer.navigation.contact.email}
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/59892171503"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-transparent underline-offset-4 hover:decoration-green-500"
                  >
                    {dict.footer.navigation.contact.whatsapp}
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/joseluisdev24"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-transparent underline-offset-4 hover:decoration-blue-500"
                  >
                    {dict.footer.navigation.contact.linkedin}
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="mt-8 border-t border-white/10 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} {dict.footer.bottom.copyright}
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-400">
            <span>{dict.footer.bottom.builtWith}</span>
            <a
              href="#top"
              className="underline decoration-transparent underline-offset-4 hover:decoration-blue-500"
            >
              {dict.footer.bottom.backToTop}
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

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden
      fill="currentColor"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.051 3.488" />
    </svg>
  );
}

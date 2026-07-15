import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import "./globals.css";
import { Poppins, Manrope, Syne } from "next/font/google";
import Background from "@/components/layout/Background";
import { siteName, siteUrl } from "@/lib/seo";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const defaultDescription =
  "Portfolio of Jose Rosano, a full-stack developer specializing in Next.js, React and TypeScript.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Jose Rosano | Full-Stack Developer",
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  authors: [{ name: "Jose Rosano", url: siteUrl }],
  creator: "Jose Rosano",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    title: "Jose Rosano | Full-Stack Developer",
    description: defaultDescription,
    url: siteUrl,
    siteName,
    images: [
      {
        url: "/portfolio.png",
        width: 273,
        height: 554,
        alt: "Jose Rosano | Full-Stack Developer",
      },
    ],
    locale: "en_US",
    alternateLocale: ["es_UY"],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Jose Rosano | Full-Stack Developer",
    description: defaultDescription,
    images: ["/portfolio.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const headersList = await headers();
  const lang = headersList.get("x-locale") === "es" ? "es" : "en";

  return (
    <html
      lang={lang}
      className={`${poppins.variable} ${manrope.variable} ${syne.variable}`}
    >
      <body className="relative min-h-dvh bg-black text-white antialiased overflow-x-hidden">
        <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
          <Background />
        </div>

        <div id="content" className="relative z-10 w-full max-w-8xl mx-auto ">
          {children}
        </div>
      </body>
    </html>
  );
}

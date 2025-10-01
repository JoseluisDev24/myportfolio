import type { Metadata } from "next";
import "./globals.css";
import { Poppins, Manrope } from "next/font/google";
import Background from "@/components/Background";

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

export const metadata: Metadata = {
  title: "Portfolio | Jose Rosano",
  description:
    "portfolio of Jose Rosano, a full-stack developer specializing in modern web technologies.",
  openGraph: {
    title: "Portfolio | Jose Rosano",
    description:
      "portfolio of Jose Rosano, a full-stack developer specializing in modern web technologies.",
    url: "https://myportfolio-jlrc.vercel.app/",
    siteName: "Portfolio | Jose Rosano",
    images: [
      {
        url: "https://myportfolio-jlrc.vercel.app/portfolio.png",
        width: 1200,
        height: 630,
        alt: "Portfolio | Jose Rosano",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${poppins.variable} ${manrope.variable}`}>
      <body className="relative min-h-dvh bg-black text-white antialiased overflow-x-hidden">
        <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
          <Background />
        </div>

        <main id="content" className="relative z-10 w-full max-w-8xl mx-auto ">
          {children}
        </main>
      </body>
    </html>
  );
}

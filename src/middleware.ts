import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["es", "en"];
const defaultLocale = "en";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const staticExtensions = [
    ".jpg",
    ".jpeg",
    ".png",
    ".gif",
    ".svg",
    ".webp",
    ".avif",
    ".ico",
    ".pdf",
    ".css",
    ".js",
    ".woff",
    ".woff2",
    ".ttf",
    ".mp4",
    ".mp3",
    ".wav",
    ".json",
    ".xml",
    ".txt",
  ];

  const isStaticFile = staticExtensions.some((ext) =>
    pathname.toLowerCase().endsWith(ext)
  );

  if (isStaticFile) {
    return NextResponse.next();
  }

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (!pathnameHasLocale) {
    const locale = defaultLocale;
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
  }
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico).*)"],
};

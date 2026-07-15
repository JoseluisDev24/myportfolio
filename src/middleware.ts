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

  const matchedLocale = locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (!matchedLocale) {
    return NextResponse.redirect(
      new URL(`/${defaultLocale}${pathname}`, request.url)
    );
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-locale", matchedLocale);
  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico).*)"],
};

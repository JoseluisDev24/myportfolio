import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionaries";
import { siteUrl } from "@/lib/seo";
import ClientHome from "./ClientHome";

type LocaleParams = { params: Promise<{ locale: "es" | "en" }> };

export async function generateMetadata({
  params,
}: LocaleParams): Promise<Metadata> {
  const { locale } = await params;
  const url = `${siteUrl}/${locale}`;

  const title =
    locale === "es"
      ? "Jose Rosano | Desarrollador Full-Stack"
      : "Jose Rosano | Full-Stack Developer";
  const description =
    locale === "es"
      ? "Portafolio de Jose Rosano, desarrollador Full-Stack de Uruguay especializado en Next.js, React y TypeScript. Descubrí mis proyectos, servicios y contacto."
      : "Portfolio of Jose Rosano, a full-stack developer from Uruguay specializing in Next.js, React and TypeScript. Explore my projects, services and contact info.";

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: url,
      languages: {
        en: `${siteUrl}/en`,
        es: `${siteUrl}/es`,
        "x-default": `${siteUrl}/en`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      locale: locale === "es" ? "es_UY" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function Home({ params }: LocaleParams) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jose Rosano",
    url: `${siteUrl}/${locale}`,
    image: `${siteUrl}/perfil2-min.jpg`,
    jobTitle:
      locale === "es" ? "Desarrollador Full-Stack" : "Full-Stack Developer",
    description: dict.about.description,
    email: `mailto:${dict.about.email}`,
    sameAs: [
      "https://github.com/JoseluisDev24",
      "https://www.linkedin.com/in/joseluisdev24",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <ClientHome dict={dict} locale={locale} />
    </>
  );
}

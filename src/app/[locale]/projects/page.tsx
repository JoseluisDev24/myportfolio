import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionaries";
import { siteUrl } from "@/lib/seo";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/Footer";
import AllProjectsClient from "./AllProjectsClient";

type LocaleParams = { params: Promise<{ locale: "es" | "en" }> };

export async function generateMetadata({
  params,
}: LocaleParams): Promise<Metadata> {
  const { locale } = await params;
  const url = `${siteUrl}/${locale}/projects`;

  const title =
    locale === "es"
      ? "Proyectos | Jose Rosano"
      : "Projects | Jose Rosano";
  const description =
    locale === "es"
      ? "Explorá todos los proyectos de Jose Rosano: aplicaciones full-stack con Next.js, React, Tailwind CSS y más."
      : "Explore all of Jose Rosano's projects: full-stack applications built with Next.js, React, Tailwind CSS and more.";

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: url,
      languages: {
        en: `${siteUrl}/en/projects`,
        es: `${siteUrl}/es/projects`,
        "x-default": `${siteUrl}/en/projects`,
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

export default async function ProjectsPage({ params }: LocaleParams) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <>
      <Header dict={dict} locale={locale} />
      <AllProjectsClient dict={dict} locale={locale} />
      <Footer dict={dict} locale={locale} />
    </>
  );
}

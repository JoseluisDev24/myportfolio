import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionaries";
import { siteUrl } from "@/lib/seo";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/Footer";
import TemplatesClient from "./TemplatesClient";

type LocaleParams = { params: Promise<{ locale: "es" | "en" }> };

export async function generateMetadata({
  params,
}: LocaleParams): Promise<Metadata> {
  const { locale } = await params;
  const url = `${siteUrl}/${locale}/services`;

  const title =
    locale === "es"
      ? "Servicios | Jose Rosano"
      : "Services | Jose Rosano";
  const description =
    locale === "es"
      ? "Sitios web listos para tu negocio: landing de negocio, sitio web corporativo y tienda online. Elegí, personalizá y publicá."
      : "Ready-to-deploy websites for your business: business landing, corporate website and online store. Pick, customize, and go live.";

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: url,
      languages: {
        en: `${siteUrl}/en/services`,
        es: `${siteUrl}/es/services`,
        "x-default": `${siteUrl}/en/services`,
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

export default async function TemplatesPage({ params }: LocaleParams) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <>
      <Header dict={dict} locale={locale} />
      <TemplatesClient dict={dict} locale={locale} />
      <Footer dict={dict} locale={locale} />
    </>
  );
}

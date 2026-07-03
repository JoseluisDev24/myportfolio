import { getDictionary } from "@/lib/dictionaries";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/Footer";
import TemplatesClient from "./TemplatesClient";

export default async function TemplatesPage({
  params,
}: {
  params: Promise<{ locale: "es" | "en" }>;
}) {
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

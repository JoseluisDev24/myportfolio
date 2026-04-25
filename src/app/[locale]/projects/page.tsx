import { getDictionary } from "@/lib/dictionaries";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/Footer";
import AllProjectsClient from "./AllProjectsClient";

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: "es" | "en" }>;
}) {
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

import { getDictionary } from "@/lib/dictionaries";
import ClientHome from "./ClientHome";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: "es" | "en" }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return <ClientHome dict={dict} locale={locale} />;
}

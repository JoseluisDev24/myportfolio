import { getDictionary } from "@/lib/dictionaries";
import ClientHome from "./ClientHome";
import ToggleLanguage from "@/components/language/buttonLanguage/ToggleLanguage";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: "es" | "en" }>; 
}) {
  const { locale } = await params;

  const dict = await getDictionary(locale);

  return (
    <div>
      <div className="fixed top-16 right-4 z-[15] md:z-[25]">
        <ToggleLanguage currentLocale={locale} />
      </div>

      <ClientHome dict={dict} />
    </div>
  );
}
import HeaderClient from "./HeaderClient";

interface HeaderProps {
  dict: Dictionary;
  locale: "es" | "en";
}

export default function Header({ dict, locale }: HeaderProps) {
  return <HeaderClient dict={dict} locale={locale} />;
}
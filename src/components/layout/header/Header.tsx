import HeaderClient from "./HeaderClient";

interface HeaderProps {
  dict: Dictionary;
}

export default function Header( {dict}: HeaderProps ) {
  return <HeaderClient dict={dict} />;
}
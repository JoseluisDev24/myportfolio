import Link from "next/link";

export function Header() {
  return (
    <header className=" text-white py-4">
      <nav className="flex justify-between items-center">
        <div className="text-3xl font-bold">
          JR<span className="text-blue-500">Dev</span>
        </div>
        <ul className="flex space-x-4 justify-center">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:underline">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
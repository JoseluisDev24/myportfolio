export function Header() {
  return (
    <header className=" text-white py-4">
      <nav className="flex justify-between items-center">
        <div className="text-3xl font-bold">
          JR<span className="text-blue-500">Dev</span>
        </div>
        <ul className="flex space-x-4 justify-center">
          <li>
            <a href="/" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="/projects" className="hover:underline">
              Projects
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
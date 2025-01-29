import Link from "next/link";

const navItems = [
  { href: "/", title: "Home" },
  { href: "/research", title: "Research" },
];

export default function Header() {
  return (
    <header className="m-2 p-2">
      <div className="flex justify-center md:justify-between">
        <Link href="/" className="hidden md:block">
          RK
        </Link>
        <nav>
          <ul className="flex justify-end gap-5">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-lg hover:text-blue-600 transition-colors">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

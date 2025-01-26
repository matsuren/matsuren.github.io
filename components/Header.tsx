import Link from "next/link";

const navItems = [
  { href: "/", title: "Home" },
  { href: "/research", title: "Research" },
];

export default function Header() {
  return (
    <header className="">
      <div className="">
        <Link href="/" className="">
          RK
        </Link>
        <nav>
          <ul className="">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="">
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

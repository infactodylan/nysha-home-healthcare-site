import Link from "next/link";

const nav = [
  { href: "/services/personal-care", label: "Personal care" },
  { href: "/services/companion-care", label: "Companion care" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-base-300/80 bg-base-100/90 backdrop-blur-md">
      <div className="navbar mx-auto max-w-6xl px-4 py-2 lg:px-6">
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-square"
              aria-label="Open menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content menu-sm z-[60] mt-3 w-56 rounded-box border border-base-300 bg-base-100 p-2 shadow-lg"
            >
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <Link
            href="/"
            className="btn btn-ghost px-2 text-lg font-semibold tracking-tight text-primary sm:text-xl"
          >
            Rosie Personal Care
          </Link>
        </div>
        <nav
          className="navbar-center hidden lg:flex"
          aria-label="Primary"
        >
          <ul className="menu menu-horizontal gap-1 px-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-btn font-medium hover:bg-base-200"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="navbar-end">
          <Link href="/contact" className="btn btn-primary shadow-md">
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}

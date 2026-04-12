"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";


const links = [
  { href: "/", label: "Home" },
  { href: "/homelab/", label: "Homelab" },
  { href: "/archive/", label: "Archive" },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 bg-[var(--color-bg-deep)] border-b border-[var(--color-grey-1)]">
      <nav className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="font-mono text-xl font-bold text-[var(--color-green)] tracking-widest hover:opacity-80 transition-opacity"
        >
          tk
        </Link>

        <div className="flex items-center gap-6">
          <ul className="flex gap-6">
            {links.map(({ href, label }) => {
              const active = pathname === href || pathname === href.replace(/\/$/, "");
              return (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={active ? "page" : undefined}
                    className={`text-xs font-mono tracking-widest uppercase transition-colors ${
                      active
                        ? "text-[var(--color-green)]"
                        : "text-[var(--color-grey-3)] hover:text-[var(--color-grey-4)]"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

        </div>
      </nav>
    </header>
  );
}

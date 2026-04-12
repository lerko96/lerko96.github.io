"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "home" },
  { href: "/homelab/", label: "homelab" },
  { href: "/archive/", label: "archive" },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 bg-[var(--color-surface)] border-b border-[var(--color-border)]">
      <nav className="max-w-[740px] mx-auto px-8 h-11 flex items-center justify-between">
        <Link
          href="/"
          className="font-mono text-sm font-bold text-[var(--color-text)] tracking-widest hover:text-[var(--color-text-label)]"
        >
          tk
        </Link>

        <ul className="flex gap-6">
          {links.map(({ href, label }) => {
            const active =
              pathname === href || pathname === href.replace(/\/$/, "");
            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={`font-mono text-xs tracking-widest ${
                    active
                      ? "text-[var(--color-text)]"
                      : "text-[var(--color-text-label)] hover:text-[var(--color-text)]"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

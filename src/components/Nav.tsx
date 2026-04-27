"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/context/ThemeContext";

const links = [
  { href: "/", label: "tyler" },
  { href: "/homelab/", label: "homelab" },
  { href: "/projects/", label: "projects" },
];

export default function Nav() {
  const pathname = usePathname();
  const { isDark, toggle } = useTheme();
  return (
    <header className="sticky top-0 z-50 bg-[var(--color-surface)] border-b border-[var(--color-border)]">
      <nav className="max-w-[740px] mx-auto px-4ch h-11 flex items-center justify-between">
        <Link
          href="/"
          className="font-mono text-sm font-bold text-[var(--color-text)] hover:text-[var(--color-text-label)]"
        >
          ~/
        </Link>

        <ul className="flex items-center gap-2ch">
          {links.map(({ href, label }) => {
            const active =
              pathname === href || pathname === href.replace(/\/$/, "");
            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={`font-mono text-sm ${
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
          <li>
            <button
              onClick={toggle}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              className="font-mono text-sm text-[var(--color-text-label)] hover:text-[var(--color-text)] cursor-pointer"
            >
              {isDark ? "[light]" : "[dark]"}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-5 mt-8">
      <div className="px-8 flex items-center justify-between">
        <span className="font-mono text-xs text-[var(--color-text-dim)]">
          &copy; {new Date().getFullYear()} Tyler Koenig
        </span>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/lerko96"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="font-mono text-xs text-[var(--color-text-label)] hover:text-[var(--color-text)]"
          >
            <i className="fab fa-github mr-1.5" aria-hidden="true" />
            github
          </a>
          <a
            href="https://www.linkedin.com/in/tyler-koenig"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="font-mono text-xs text-[var(--color-text-label)] hover:text-[var(--color-text)]"
          >
            <i className="fab fa-linkedin mr-1.5" aria-hidden="true" />
            linkedin
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-1lh mt-2lh">
      <div className="px-4ch flex items-center justify-between">
        <span className="font-mono text-sm text-[var(--color-text-dim)]">
          &copy; {new Date().getFullYear()} Tyler Koenig
        </span>
        <div className="flex items-center gap-2ch">
          <a
            href="https://github.com/lerko96"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="font-mono text-sm text-[var(--color-text-label)] hover:text-[var(--color-text)]"
          >
            [github]
          </a>
          <a
            href="https://gitea.lerkolabs.com/lerko"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Gitea"
            className="font-mono text-sm text-[var(--color-text-label)] hover:text-[var(--color-text)]"
          >
            [gitea]
          </a>
          <a
            href="https://www.linkedin.com/in/tyler-koenig"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="font-mono text-sm text-[var(--color-text-label)] hover:text-[var(--color-text)]"
          >
            [linkedin]
          </a>
          <a
            href="mailto:tyler@lerkolabs.com"
            aria-label="Email"
            className="font-mono text-sm text-[var(--color-text-label)] hover:text-[var(--color-text)]"
          >
            [email]
          </a>
        </div>
      </div>
    </footer>
  );
}

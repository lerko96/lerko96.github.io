export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-grey-1)] py-8 mt-16">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-[var(--color-grey-2)] tracking-widest">
          &copy; {new Date().getFullYear()} Tyler Koenig
        </p>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/lerko96"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-[var(--color-grey-2)] hover:text-[var(--color-green)] transition-colors"
          >
            <i className="fab fa-github text-lg" aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/tyler-koenig"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-[var(--color-grey-2)] hover:text-[var(--color-green)] transition-colors"
          >
            <i className="fab fa-linkedin text-lg" aria-hidden="true" />
          </a>
          <a
            href="mailto:tylerkoenig96@gmail.com"
            aria-label="Email"
            className="text-[var(--color-grey-2)] hover:text-[var(--color-green)] transition-colors"
          >
            <i className="fas fa-envelope text-lg" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}

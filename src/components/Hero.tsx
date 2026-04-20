export default function Hero() {
  return (
    <section className="mb-16">
      <div className="flex flex-col gap-1ch">
        <div>
          <p className="font-mono text-sm font-bold text-[var(--color-text)]">
            <span
              className="text-[var(--color-accent-green)] select-none mr-1ch"
              aria-hidden="true"
            >
              ❯
            </span>
            tyler koenig
          </p>
          <p className="font-mono text-sm text-[var(--color-text-label)] mt-0.5">
            Security Operations · Self-Hosted Infrastructure
          </p>
        </div>

        <p className="font-mono text-sm text-[var(--color-text)] leading-relaxed opacity-70">
          Homelab runs 30+
          services across segmented VLANs — pfSense, Authentik SSO, full
          observability stack. Write software too: mobile apps, Go backends,
          open protocols. Daily drivers, all of it.{" "}
          <span
            className="animate-cursor text-[var(--color-accent-green)]"
            aria-hidden="true"
          >
            █
          </span>
        </p>

        <div className="flex flex-wrap items-center gap-x-1ch gap-y-half-lh">
          <span className="font-mono text-sm text-[var(--color-accent-green)]">
            ● available
          </span>
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
    </section>
  );
}

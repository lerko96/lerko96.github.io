export default function Hero() {
  return (
    <section className="mb-16">
      <div className="flex flex-col gap-3">
        <div>
          <p className="font-mono text-base font-bold text-[var(--color-text)]">
            <span className="text-[var(--color-accent-green)] select-none mr-2" aria-hidden="true">❯</span>
            tyler koenig
          </p>
          <p className="font-mono text-sm text-[var(--color-text-label)] mt-0.5">
            SOC Helpdesk I · Homelab Operator
          </p>
        </div>

        <p className="font-mono text-sm text-[var(--color-text)] leading-relaxed max-w-lg opacity-70">
          I write software and run infrastructure that goes well past what my
          job title implies. Games, AI tooling, mobile apps, and a homelab
          running 20+ self-hosted services on segmented VLANs. Continuously
          learning by building things that actually work.{' '}
          <span className="animate-cursor text-[var(--color-accent-green)]" aria-hidden="true">█</span>
        </p>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
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
            href="https://www.linkedin.com/in/tyler-koenig"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="font-mono text-sm text-[var(--color-text-label)] hover:text-[var(--color-text)]"
          >
            [linkedin]
          </a>
          <a
            href="mailto:tylerkoenig96@gmail.com"
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

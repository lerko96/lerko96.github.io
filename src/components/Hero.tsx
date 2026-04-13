import Image from "next/image";

export default function Hero() {
  return (
    <section className="mb-16">
      {/* Section header */}
      <div className="flex items-center gap-3 mb-6">
        <span className="font-mono text-xs text-[var(--color-text-label)] tracking-widest uppercase">
          identity
        </span>
        <div className="flex-1 h-px bg-[var(--color-border)]" aria-hidden="true" />
      </div>

      <div className="flex items-start gap-5">
        <Image
          src="/images/headshot-tyler_koenig.png"
          alt="Tyler Koenig"
          width={56}
          height={56}
          className="shrink-0 object-cover"
          priority
        />

        <div className="flex flex-col gap-3">
          <div>
            <p className="font-mono text-base font-bold text-[var(--color-text)]">
              Tyler Koenig
            </p>
            <p className="font-mono text-xs text-[var(--color-text-label)] mt-0.5">
              SOC Helpdesk I · Homelab Operator
            </p>
          </div>

          <p className="font-sans text-sm text-[var(--color-text)] leading-relaxed max-w-lg opacity-80">
            I write software and run infrastructure that goes well past what my
            job title implies. Games, AI tooling, mobile apps, and a homelab
            running 20+ self-hosted services on segmented VLANs. Continuously
            learning by building things that actually work.
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <span className="font-mono text-xs text-[var(--color-accent-green)]">
              ● online
            </span>
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
            <a
              href="mailto:tylerkoenig96@gmail.com"
              aria-label="Email"
              className="font-mono text-xs text-[var(--color-text-label)] hover:text-[var(--color-text)]"
            >
              @ email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

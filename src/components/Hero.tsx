import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col sm:flex-row items-center sm:items-start gap-8 mb-20">
      <div className="shrink-0">
        <Image
          src="/images/headshot-tyler_koenig.png"
          alt="Tyler Koenig"
          width={120}
          height={120}
          className="rounded-full border-2 border-[var(--color-green-darker)]"
          priority
        />
      </div>

      <div className="flex flex-col gap-4 text-center sm:text-left">
        <div>
          <h1 className="font-mono text-2xl font-bold text-[var(--color-text-light)] tracking-wide">
            Tyler Koenig
          </h1>
          <p className="font-mono text-sm text-[var(--color-green)] tracking-widest uppercase mt-1">
            SOC Helpdesk I by day, building beyond the title
          </p>
        </div>

        <p className="text-[var(--color-grey-3)] text-sm leading-relaxed max-w-lg">
          I write software and run infrastructure that goes well past what my job
          title implies. Games, AI tooling, mobile apps, and a homelab running
          20+ self-hosted services on segmented VLANs. Continuously learning
          by building things that actually work.
        </p>

        <div className="flex items-center gap-5 justify-center sm:justify-start">
          <a
            href="https://github.com/lerko96"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-[var(--color-grey-2)] hover:text-[var(--color-green)] transition-colors"
          >
            <i className="fab fa-github text-xl" aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/tyler-koenig"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-[var(--color-grey-2)] hover:text-[var(--color-green)] transition-colors"
          >
            <i className="fab fa-linkedin text-xl" aria-hidden="true" />
          </a>
          <a
            href="mailto:tylerkoenig96@gmail.com"
            aria-label="Email"
            className="text-[var(--color-grey-2)] hover:text-[var(--color-green)] transition-colors"
          >
            <i className="fas fa-envelope text-xl" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

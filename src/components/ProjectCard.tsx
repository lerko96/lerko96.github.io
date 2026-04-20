import type { Project } from "@/data/projects";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <article className="border border-[var(--color-border)] bg-[var(--color-surface)] flex flex-col gap-1lh p-2ch hover:bg-[var(--color-surface-raised)]">
      <div className="flex items-start justify-between gap-1ch">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-sm font-semibold text-[var(--color-text)] hover:text-[var(--color-accent-green)]"
        >
          {project.title}
        </a>
        <div className="flex items-center gap-1ch shrink-0">
          {project.stats && (
            <span className="font-mono text-sm text-[var(--color-text-dim)]">
              {project.stats}
            </span>
          )}
          {project.externalUrl && (
            <a
              href={project.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} externally`}
              className="font-mono text-sm text-[var(--color-text-label)] hover:text-[var(--color-text)]"
            >
              ↗
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} on GitHub`}
            className="font-mono text-sm text-[var(--color-text-label)] hover:text-[var(--color-text)]"
          >
            ↗
          </a>
        </div>
      </div>

      {project.statusBadge && (
        <span className="font-mono text-sm text-[var(--color-accent-amber,#d4a027)] border border-[var(--color-accent-amber,#d4a027)] px-1ch py-0.5 w-fit opacity-80">
          {project.statusBadge}
        </span>
      )}

      <p className="font-mono text-sm text-[var(--color-text)] leading-relaxed flex-1 opacity-70">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-x-1ch gap-y-half-lh mt-half-lh">
        {project.tags.map((tag) => (
          <span key={tag} className="font-mono text-sm text-[var(--color-text-dim)]">
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

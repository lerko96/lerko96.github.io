import type { Project } from "@/data/projects";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <article className="border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-border-bright)] flex flex-col gap-3 p-4">
      <div className="flex items-start justify-between gap-3">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-sm font-semibold text-[var(--color-text)] hover:text-[var(--color-accent-green)]"
        >
          {project.title}
        </a>
        <div className="flex items-center gap-3 shrink-0">
          {project.stats && (
            <span className="font-mono text-xs text-[var(--color-text-dim)]">
              {project.stats}
            </span>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} on GitHub`}
            className="font-mono text-xs text-[var(--color-text-label)] hover:text-[var(--color-text)]"
          >
            ↗
          </a>
        </div>
      </div>

      <p className="font-sans text-xs text-[var(--color-text-label)] leading-relaxed flex-1">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-x-3 gap-y-1 pt-2 border-t border-[var(--color-border)]">
        {project.tags.map((tag) => (
          <span key={tag} className="font-mono text-xs text-[var(--color-text-dim)]">
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

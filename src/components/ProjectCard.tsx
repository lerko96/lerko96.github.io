import type { Project } from "@/data/projects";

type Props = {
  project: Project;
  reversed?: boolean;
};

export default function ProjectCard({ project, reversed = false }: Props) {
  return (
    <article className={`group flex flex-col ${reversed ? "sm:flex-row-reverse" : "sm:flex-row"} gap-6 mb-16`}>
      {/* Gradient image tile */}
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0 sm:w-56 h-36 rounded-lg overflow-hidden"
        aria-label={`View ${project.title} on GitHub`}
        tabIndex={-1}
      >
        <div
          className={`w-full h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center transition-transform duration-300 group-hover:scale-105`}
        >
          <span className="font-mono text-xs text-[var(--color-green)] opacity-60 tracking-widest">
            {project.slug}
          </span>
        </div>
      </a>

      {/* Content */}
      <div className={`flex flex-col justify-center gap-3 ${reversed ? "sm:text-right sm:items-end" : ""}`}>
        {/* Animated accent bar */}
        <div
          className={`h-0.5 w-8 bg-[var(--color-grey-1)] rounded-full transition-all duration-300 group-hover:w-16 group-hover:bg-[var(--color-green-darker)] ${reversed ? "self-end" : ""}`}
        />

        <div>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-base font-semibold text-[var(--color-text-light)] hover:text-[var(--color-green)] transition-colors"
          >
            {project.title}
          </a>
          {project.stats && (
            <span className="font-mono text-xs text-[var(--color-green)] ml-3 opacity-70">
              {project.stats}
            </span>
          )}
        </div>

        <p className="text-sm text-[var(--color-grey-3)] leading-relaxed max-w-md">
          {project.description}
        </p>

        <div className={`flex flex-wrap gap-2 ${reversed ? "justify-end" : ""}`}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs px-2 py-0.5 border border-[var(--color-grey-1)] text-[var(--color-grey-2)] rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

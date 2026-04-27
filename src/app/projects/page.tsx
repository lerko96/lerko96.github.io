import type { Metadata } from "next";
import Widget from "@/components/Widget";
import ProjectCard from "@/components/ProjectCard";
import { featuredProjects, archiveProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects | Tyler Koenig",
  description:
    "Featured projects and earlier work — homelab, open-pact, helm, and bootcamp/experiment archive.",
};

export default function ProjectsPage() {
  return (
    <>
      <div className="mb-4lh">
        <p className="font-mono text-sm font-bold text-[var(--color-text)] mb-1lh">
          <span className="text-[var(--color-accent-green)] select-none mr-1ch" aria-hidden="true">❯</span>
          projects
        </p>
        <p className="font-mono text-sm text-[var(--color-text)] leading-relaxed max-w-xl opacity-80">
          Featured work first. Earlier experiments, browser extensions, and bootcamp projects below — kept for context.
        </p>
      </div>

      <Widget title="projects/featured" badge={featuredProjects.length} as="section">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1ch">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Widget>

      <Widget title="projects/archive" badge={archiveProjects.length} as="section">
        <div className="flex flex-col gap-px bg-[var(--color-border)]">
          {archiveProjects.map((project) => (
            <a
              key={project.slug}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--color-surface)] hover:bg-[var(--color-surface-raised)] flex items-start justify-between gap-2ch px-2ch py-1lh group"
            >
              <div className="flex flex-col gap-1ch flex-1 min-w-0">
                <div className="flex items-center gap-1ch">
                  {project.year && (
                    <span className="font-mono text-sm text-[var(--color-text-dim)] shrink-0">
                      {project.year}
                    </span>
                  )}
                  <span className="font-mono text-sm text-[var(--color-text)] group-hover:text-[var(--color-accent-green)] truncate">
                    {project.title}
                  </span>
                </div>
                <p className="font-mono text-sm text-[var(--color-text)] leading-relaxed opacity-75">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-x-1ch gap-y-0.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="font-mono text-sm text-[var(--color-text-dim)]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <span
                className="font-mono text-sm text-[var(--color-text-label)] group-hover:text-[var(--color-text)] shrink-0 mt-0.5"
                aria-hidden="true"
              >
                ↗
              </span>
            </a>
          ))}
        </div>
      </Widget>
    </>
  );
}

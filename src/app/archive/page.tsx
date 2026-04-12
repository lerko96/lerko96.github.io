import type { Metadata } from "next";
import { archiveProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Archive | Tyler Koenig",
  description: "Earlier projects and experiments — browser extensions, canvas apps, and bootcamp work.",
};

export default function ArchivePage() {
  return (
    <>
      <div className="mb-14">
        <p className="font-mono text-xs text-[var(--color-green)] tracking-widest uppercase mb-2">
          Archive
        </p>
        <h1 className="font-mono text-2xl font-bold text-[var(--color-text-light)] mb-4">
          Earlier Work
        </h1>
        <p className="text-[var(--color-grey-3)] text-sm leading-relaxed max-w-xl">
          Experiments, browser extensions, and bootcamp projects. Kept here for context — not representative of current work.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {archiveProjects.map((project) => (
          <a
            key={project.slug}
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-[var(--color-grey-1)] rounded-lg p-6 bg-[var(--color-bg)] hover:border-[var(--color-green-darker)] transition-colors flex flex-col gap-4"
          >
            <div className="flex items-start justify-between gap-2">
              <h2 className="font-mono text-sm font-semibold text-[var(--color-text-light)] group-hover:text-[var(--color-green)] transition-colors">
                {project.title}
              </h2>
              <i className="fas fa-arrow-up-right-from-square text-xs text-[var(--color-grey-2)] shrink-0 mt-0.5 group-hover:text-[var(--color-green)] transition-colors" aria-hidden="true" />
            </div>

            <p className="text-xs text-[var(--color-grey-3)] leading-relaxed flex-1">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs px-2 py-0.5 border border-[var(--color-grey-1)] text-[var(--color-grey-2)] rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </>
  );
}

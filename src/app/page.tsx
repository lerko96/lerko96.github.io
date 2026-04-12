import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import ProjectCard from "@/components/ProjectCard";
import { featuredProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Tyler Koenig | Portfolio",
  description:
    "SOC Helpdesk I by day, building beyond the title. Projects in AI tooling, mobile apps, infrastructure, and more.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />

      <section aria-labelledby="projects-heading">
        <h2
          id="projects-heading"
          className="font-mono text-xs text-[var(--color-green)] tracking-widest uppercase mb-10"
        >
          Projects
        </h2>
        {featuredProjects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} reversed={i % 2 !== 0} />
        ))}
      </section>
    </>
  );
}

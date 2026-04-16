import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import ProjectCard from "@/components/ProjectCard";
import Widget from "@/components/Widget";
import { featuredProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Tyler Koenig",
  description:
    "SOC Helpdesk I by day, building beyond the title. Projects in AI tooling, mobile apps, infrastructure, and more.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Widget title="tyler/projects" badge={featuredProjects.length}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Widget>
      <Skills />
      <Timeline />
    </>
  );
}

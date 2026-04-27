import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";

export const metadata: Metadata = {
  title: "Tyler Koenig",
  description:
    "SOC Helpdesk I by day, building beyond the title. Projects in AI tooling, mobile apps, infrastructure, and more.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Timeline />
    </>
  );
}

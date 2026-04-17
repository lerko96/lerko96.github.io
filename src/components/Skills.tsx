import Widget from "@/components/Widget";

const skillGroups = [
  {
    label: "Languages",
    skills: ["Go", "JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    label: "Frontend",
    skills: ["React", "React Native", "Expo", "Next.js", "Three.js"],
  },
  {
    label: "Desktop & Tools",
    skills: ["Electron", "Node.js", "REST APIs", "Git", "Docker", "TDD"],
  },
  {
    label: "Infrastructure",
    skills: ["Proxmox", "pfSense", "VLANs", "WireGuard", "Linux", "Caddy"],
  },
  {
    label: "Practices",
    skills: ["Agile / Scrum", "Relational Databases", "Self-hosting"],
  },
];

const totalCount = skillGroups.reduce((n, g) => n + g.skills.length, 0);

export default function Skills() {
  return (
    <Widget title="tyler/skills" badge={totalCount} as="section">
      <div className="flex flex-col">
        {skillGroups.map(({ label, skills }) => (
          <div
            key={label}
            className="flex flex-col xs:flex-row gap-1 xs:gap-6 py-3"
          >
            <span className="font-mono text-sm text-[var(--color-text-dim)] w-28 shrink-0">
              {label}
            </span>
            <span className="font-mono text-sm text-[var(--color-text)]">
              {skills.join(" · ")}
            </span>
          </div>
        ))}
      </div>
    </Widget>
  );
}

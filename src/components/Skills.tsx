import Widget from "@/components/Widget";

const skillGroups = [
  {
    label: "Infrastructure",
    skills: ["Proxmox", "pfSense", "VLANs", "WireGuard", "Linux", "Caddy"],
  },
  {
    label: "Desktop & Tools",
    skills: ["Git", "Docker", "TDD", "Node.js", "REST APIs", ],
  },
  {
    label: "Practices",
    skills: ["Agile / Scrum", "Relational Databases", "Self-hosting"],
  },
  {
    label: "Languages",
    skills: ["Go", "JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    label: "Frontend",
    skills: ["React", "React Native", "Expo", "Next.js", "Three.js"],
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
            className="flex flex-col xs:flex-row gap-1ch xs:gap-2ch py-half-lh"
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

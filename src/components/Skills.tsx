import Widget from "@/components/Widget";

const skillGroups = [
  {
    label: "Languages",
    skills: ["JavaScript", "TypeScript", "HTML", "CSS"],
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
    <Widget title="skills" badge={totalCount} as="section">
      <div className="flex flex-col">
        {skillGroups.map(({ label, skills }, i) => (
          <div
            key={label}
            className={`flex flex-col xs:flex-row gap-1 xs:gap-6 py-3 ${
              i < skillGroups.length - 1 ? "border-b border-[var(--color-border)]" : ""
            }`}
          >
            <span className="font-mono text-xs text-[var(--color-text-dim)] w-28 shrink-0 uppercase tracking-wider">
              {label}
            </span>
            <span className="font-mono text-xs text-[var(--color-text)]">
              {skills.join(" · ")}
            </span>
          </div>
        ))}
      </div>
    </Widget>
  );
}

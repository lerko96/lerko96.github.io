const skillGroups = [
  {
    label: "Languages",
    skills: ["JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    label: "Frontend & Mobile",
    skills: ["React", "React Native", "Expo", "Next.js", "Three.js", "Responsive Design"],
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

export default function Skills() {
  return (
    <section className="mb-20" aria-labelledby="skills-heading">
      <h2
        id="skills-heading"
        className="font-mono text-xs text-[var(--color-green)] tracking-widest uppercase mb-8"
      >
        Skills
      </h2>
      <div className="flex flex-col gap-5">
        {skillGroups.map(({ label, skills }) => (
          <div key={label} className="flex flex-col xs:flex-row gap-2 xs:items-start">
            <span className="font-mono text-xs text-[var(--color-grey-2)] w-36 shrink-0 pt-0.5">
              {label}
            </span>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs font-mono px-3 py-1 border border-[var(--color-grey-1)] text-[var(--color-grey-3)] rounded hover:border-[var(--color-green-darker)] hover:text-[var(--color-grey-4)] transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

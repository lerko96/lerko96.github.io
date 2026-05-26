export type TimelineType =
  | "career"
  | "cert"
  | "project"
  | "homelab"
  | "education";

export interface TimelineEntry {
  date: string;
  title: string;
  type: TimelineType;
  description: string;
  tags?: string[];
}

export const timeline: TimelineEntry[] = [
  {
    date: "WIP",
    title: "CompTIA Network+ — in progress",
    type: "cert",
    description:
      "Studying for Network+ to formalize networking knowledge built through the homelab.",
    tags: ["networking", "certification"],
  },
  {
    date: "2025",
    title: "Proxmox Backup Server",
    type: "homelab",
    description: "Deployed PBS on used desktop hardware for disaster recovery.",
    tags: ["backup", "recovery", "retention"],
  },
  {
    date: "2025",
    title: "Proxmox Cluster",
    type: "homelab",
    description:
      "Proxmox installed on dedicated server and the fun begins. VMs/LXCs, SSO via Authentik, full monitoring stack (VictoriaMetrics + Grafana + Beszel + ntfy).",
    tags: ["proxmox", "containers", "VMs", "linux"],
  },
  {
    date: "2024-06",
    title: "CompTIA A+",
    type: "cert",
    description:
      "Earned A+ certification, formalizing hardware and OS fundamentals.",
    tags: ["certification"],
  },
  {
    date: "2024-03",
    title: "pfSense",
    type: "homelab",
    description:
      "Netgate 1100 (Marvell ARMADA 3720) picked up on eBay — hands-on networking configuration, VLANs, firewall rules, and troubleshooting.",
    tags: ["network", "firewall", "vlan", "dhcp"],
  },
  {
    date: "2023-10",
    title: "SOC Analyst I — Fortress SRM",
    type: "career",
    description:
      "Threat monitoring, incident triage, and client-facing security operations in a managed SOC.",
    tags: ["soc", "security"],
  },
  {
    date: "2023-03",
    title: "Config Tech II — MCPc",
    type: "career",
    description:
      "Promoted to Config Tech II. Led imaging workflows and expanded into scripting for endpoint provisioning.",
    tags: ["sysadmin", "scripting"],
  },
  {
    date: "2022-05",
    title: "Config Tech I — MCPc",
    type: "career",
    description:
      "Hardware configuration, OS imaging, and deployment at scale for enterprise clients.",
    tags: ["sysadmin", "hardware"],
  },
  {
    date: "2021-01",
    title: "We Can Code IT — Java Bootcamp",
    type: "education",
    description:
      "9-month intensive bootcamp covering Java, OOP, SQL, REST APIs, and Agile development practices.",
    tags: ["java", "sql", "agile"],
  },
];

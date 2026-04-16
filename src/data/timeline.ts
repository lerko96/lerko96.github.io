export type TimelineType = 'career' | 'cert' | 'project' | 'homelab' | 'education'

export interface TimelineEntry {
  date: string
  title: string
  type: TimelineType
  description: string
  tags?: string[]
}

export const timeline: TimelineEntry[] = [
  {
    date: '2026',
    title: 'CompTIA Network+ — in progress',
    type: 'cert',
    description: 'Studying for Network+ to formalize networking knowledge built through the homelab.',
    tags: ['networking', 'certification'],
  },
  {
    date: '2025',
    title: 'Portfolio Site v2',
    type: 'project',
    description: 'Next.js 16 static site, self-hosted in a DMZ LXC behind Nginx, deployed via Gitea Actions CI.',
    tags: ['next.js', 'tailwind', 'self-hosted'],
  },
  {
    date: '2024',
    title: 'CompTIA A+',
    type: 'cert',
    description: 'Earned A+ certification, formalizing hardware and OS fundamentals.',
    tags: ['certification'],
  },
  {
    date: '2024',
    title: 'Project Helm',
    type: 'project',
    description: 'Full-stack task and project management tool built in Go + React.',
    tags: ['go', 'react', 'typescript'],
  },
  {
    date: 'ongoing',
    title: 'Homelab — Proxmox Cluster',
    type: 'homelab',
    description: '8-VLAN segmented network, Proxmox VMs/LXCs, SSO via Authentik, full monitoring stack (Grafana + Prometheus + Loki).',
    tags: ['proxmox', 'networking', 'monitoring', 'sso'],
  },
  {
    date: '2023-10',
    title: 'SOC Analyst I — Fortress SRM',
    type: 'career',
    description: 'Threat monitoring, incident triage, and client-facing security operations in a managed SOC.',
    tags: ['soc', 'security'],
  },
  {
    date: '2023-03',
    title: 'Config Tech II — MCPc',
    type: 'career',
    description: 'Promoted to Config Tech II. Led imaging workflows and expanded into scripting for endpoint provisioning.',
    tags: ['sysadmin', 'scripting'],
  },
  {
    date: '2022-07',
    title: 'Config Tech I — MCPc',
    type: 'career',
    description: 'Hardware configuration, OS imaging, and deployment at scale for enterprise clients.',
    tags: ['sysadmin', 'hardware'],
  },
  {
    date: '2021',
    title: 'We Can Code IT — Java Bootcamp',
    type: 'education',
    description: '9-month intensive bootcamp covering Java, OOP, SQL, REST APIs, and Agile development practices.',
    tags: ['java', 'sql', 'agile'],
  },
]

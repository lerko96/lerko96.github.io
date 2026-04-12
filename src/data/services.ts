export type Service = {
  name: string;
  description: string;
  category: "infrastructure" | "security" | "monitoring" | "productivity" | "media";
  icon: string; // Font Awesome class
};

export const services: Service[] = [
  // Infrastructure
  { name: "pfSense", description: "Firewall, DHCP, routing, WireGuard VPN", category: "infrastructure", icon: "fas fa-shield-halved" },
  { name: "Caddy", description: "Reverse proxy with automatic wildcard TLS via Cloudflare DNS-01", category: "infrastructure", icon: "fas fa-globe" },
  { name: "Pi-hole", description: "Network-wide DNS + ad blocking", category: "infrastructure", icon: "fas fa-filter" },
  { name: "WireGuard", description: "VPN — 600–900 Mbps on N100, full LAN access for clients", category: "infrastructure", icon: "fas fa-lock" },

  // Security / Auth
  { name: "Authentik", description: "SSO provider — OIDC + forward auth across all services", category: "security", icon: "fas fa-id-badge" },
  { name: "Vaultwarden", description: "Self-hosted password manager, isolated in its own LXC", category: "security", icon: "fas fa-vault" },

  // Monitoring
  { name: "Victoria Metrics", description: "Long-term metrics storage and querying", category: "monitoring", icon: "fas fa-chart-line" },
  { name: "Grafana", description: "Dashboards and alerting across all hosts and services", category: "monitoring", icon: "fas fa-chart-bar" },
  { name: "Beszel", description: "Lightweight container and host monitoring", category: "monitoring", icon: "fas fa-server" },
  { name: "ntfy", description: "Self-hosted push notifications", category: "monitoring", icon: "fas fa-bell" },

  // Productivity
  { name: "Gitea", description: "Personal Git server", category: "productivity", icon: "fas fa-code-branch" },
  { name: "Outline", description: "Team wiki and knowledge base", category: "productivity", icon: "fas fa-book" },
  { name: "Vikunja", description: "Task management", category: "productivity", icon: "fas fa-list-check" },
  { name: "Actual Budget", description: "Personal budgeting", category: "productivity", icon: "fas fa-wallet" },
  { name: "Ghostfolio", description: "Investment portfolio tracking", category: "productivity", icon: "fas fa-coins" },
  { name: "Hoarder", description: "Bookmark manager with tagging", category: "productivity", icon: "fas fa-bookmark" },
  { name: "FreshRSS", description: "RSS reader", category: "productivity", icon: "fas fa-rss" },
  { name: "Memos", description: "Quick notes and journal", category: "productivity", icon: "fas fa-note-sticky" },
  { name: "Traggo", description: "Time tracking", category: "productivity", icon: "fas fa-clock" },
  { name: "Baikal", description: "CalDAV / CardDAV server", category: "productivity", icon: "fas fa-calendar" },
  { name: "Grist", description: "Spreadsheets and structured data", category: "productivity", icon: "fas fa-table" },

  // Media
  { name: "Plex + Jellyfin", description: "Media streaming", category: "media", icon: "fas fa-film" },
  { name: "Sonarr / Radarr / Lidarr", description: "Automated media management", category: "media", icon: "fas fa-download" },
  { name: "Calibre-Web", description: "Book library with auto-ingest", category: "media", icon: "fas fa-book-open" },
];

export const categoryOrder: Service["category"][] = [
  "infrastructure",
  "security",
  "monitoring",
  "productivity",
  "media",
];

export const categoryLabels: Record<Service["category"], string> = {
  infrastructure: "Core Infrastructure",
  security: "Security & Auth",
  monitoring: "Monitoring",
  productivity: "Productivity",
  media: "Media",
};

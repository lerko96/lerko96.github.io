export type Service = {
  name: string;
  description: string;
  category: "infrastructure" | "security" | "monitoring" | "productivity" | "media";
};

export const services: Service[] = [
  // Infrastructure
  { name: "pfSense", description: "Firewall, DHCP, routing gateway on Netgate 1100", category: "infrastructure" },
  { name: "Caddy", description: "Reverse proxy with automatic wildcard TLS via Cloudflare DNS-01", category: "infrastructure" },
  { name: "Pi-hole", description: "Network-wide DNS + ad blocking", category: "infrastructure" },
  { name: "WireGuard", description: "VPN — full LAN access for remote clients", category: "infrastructure" },
  { name: "mail relay", description: "Outbound SMTP relay for self-hosted service notifications", category: "infrastructure" },
  { name: "gluetun", description: "VPN container routing download client traffic", category: "infrastructure" },
  { name: "Home Assistant", description: "Smart home automation and device management", category: "infrastructure" },

  // Security / Auth
  { name: "Authentik", description: "SSO provider — OIDC + forward auth across all services", category: "security" },
  { name: "Vaultwarden", description: "Self-hosted password manager, isolated in its own LXC", category: "security" },

  // Monitoring
  { name: "Victoria Metrics", description: "Long-term metrics storage and querying", category: "monitoring" },
  { name: "Grafana", description: "Dashboards and alerting across all hosts and services", category: "monitoring" },
  { name: "Beszel", description: "Lightweight container and host monitoring", category: "monitoring" },
  { name: "ntfy", description: "Self-hosted push notifications", category: "monitoring" },

  // Productivity
  { name: "Gitea", description: "Personal Git server", category: "productivity" },
  { name: "Outline", description: "Team wiki and knowledge base", category: "productivity" },
  { name: "Vikunja", description: "Task management", category: "productivity" },
  { name: "Actual Budget", description: "Personal budgeting", category: "productivity" },
  { name: "Ghostfolio", description: "Investment portfolio tracking", category: "productivity" },
  { name: "Hoarder", description: "Bookmark manager with tagging", category: "productivity" },
  { name: "FreshRSS", description: "RSS reader", category: "productivity" },
  { name: "Memos", description: "Quick notes and journal", category: "productivity" },
  { name: "Traggo", description: "Time tracking", category: "productivity" },
  { name: "Baikal", description: "CalDAV / CardDAV server", category: "productivity" },
  { name: "Grist", description: "Spreadsheets and structured data", category: "productivity" },
  { name: "Glance", description: "Self-hosted start page with feeds and service status", category: "productivity" },
  { name: "Filebrowser", description: "Web-based file manager", category: "productivity" },

  // Media
  { name: "Plex", description: "Media streaming — movies, TV, music", category: "media" },
  { name: "Jellyfin", description: "Open-source media streaming", category: "media" },
  { name: "Sonarr", description: "Automated TV show management", category: "media" },
  { name: "Radarr", description: "Automated movie management", category: "media" },
  { name: "Lidarr", description: "Automated music management", category: "media" },
  { name: "Prowlarr", description: "Indexer manager and proxy for the *arr stack", category: "media" },
  { name: "Bazarr", description: "Automatic subtitle download and management", category: "media" },
  { name: "nzbget", description: "Usenet downloader", category: "media" },
  { name: "qBittorrent", description: "Torrent client with web UI", category: "media" },
  { name: "Kavita", description: "Self-hosted manga and book reader", category: "media" },
  { name: "Openshelf", description: "Book library with auto-ingest", category: "media" },
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

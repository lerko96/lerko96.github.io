export type Service = {
  name: string;
  description: string;
  category: "infrastructure" | "security" | "monitoring" | "productivity" | "media";
  icon: string; // Font Awesome class
};

export const services: Service[] = [
  // Infrastructure
  { name: "pfSense", description: "Firewall, DHCP, routing gateway on N100", category: "infrastructure", icon: "fas fa-shield-halved" },
  { name: "Caddy", description: "Reverse proxy with automatic wildcard TLS via Cloudflare DNS-01", category: "infrastructure", icon: "fas fa-globe" },
  { name: "Pi-hole", description: "Network-wide DNS + ad blocking", category: "infrastructure", icon: "fas fa-filter" },
  { name: "WireGuard", description: "VPN — full LAN access for remote clients", category: "infrastructure", icon: "fas fa-lock" },
  { name: "mail relay", description: "Outbound SMTP relay for self-hosted service notifications", category: "infrastructure", icon: "fas fa-envelope" },
  { name: "gluetun", description: "VPN container routing download client traffic", category: "infrastructure", icon: "fas fa-shield" },
  { name: "Home Assistant", description: "Smart home automation and device management", category: "infrastructure", icon: "fas fa-house" },

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
  { name: "Glance", description: "Self-hosted start page with feeds and service status", category: "productivity", icon: "fas fa-gauge" },
  { name: "Filebrowser", description: "Web-based file manager", category: "productivity", icon: "fas fa-folder-open" },

  // Media
  { name: "Plex", description: "Media streaming — movies, TV, music", category: "media", icon: "fas fa-film" },
  { name: "Jellyfin", description: "Open-source media streaming", category: "media", icon: "fas fa-play" },
  { name: "Sonarr", description: "Automated TV show management", category: "media", icon: "fas fa-tv" },
  { name: "Radarr", description: "Automated movie management", category: "media", icon: "fas fa-video" },
  { name: "Lidarr", description: "Automated music management", category: "media", icon: "fas fa-music" },
  { name: "Prowlarr", description: "Indexer manager and proxy for the *arr stack", category: "media", icon: "fas fa-magnifying-glass" },
  { name: "Bazarr", description: "Automatic subtitle download and management", category: "media", icon: "fas fa-closed-captioning" },
  { name: "nzbget", description: "Usenet downloader", category: "media", icon: "fas fa-download" },
  { name: "qBittorrent", description: "Torrent client with web UI", category: "media", icon: "fas fa-magnet" },
  { name: "Kavita", description: "Self-hosted manga and book reader", category: "media", icon: "fas fa-book-open" },
  { name: "Openshelf", description: "Book library with auto-ingest", category: "media", icon: "fas fa-book-open" },
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

export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  tier: "featured" | "archive";
  stats?: string;
  year?: number;
  statusBadge?: string;
  externalUrl?: string;
};

export const projects: Project[] = [
  // --- Featured ---
  {
    slug: "golf-book-mobile",
    title: "golf-book-mobile",
    description:
      "Offline-first mobile app for tracking golf rounds, managing your 14-club bag, and getting AI-powered club recommendations from a Smart Caddie. Covers 7 shot types per hole with full scorecard history.",
    tags: ["React Native", "Expo", "Zustand", "AI", "Mobile"],
    githubUrl: "https://github.com/lerko96/golf-book-mobile",
    tier: "featured",
    stats: "211 commits",
    statusBadge: "Pending App Store Approval",
    externalUrl: "#",
  },
  {
    slug: "plaiground",
    title: "plAIground",
    description:
      "Cross-platform desktop AI chat app for developers. Supports OpenAI, Anthropic Claude, and Google Gemini in a single interface with real-time cost tracking, conversation export, and automatic code explanation.",
    tags: ["Electron", "Node.js", "OpenAI", "Claude", "Gemini"],
    githubUrl: "https://github.com/lerko96/plaiground",
    tier: "archive",
    year: 2025,
  },
  {
    slug: "service-monitor",
    title: "service-monitor",
    description:
      "Web dashboard for tracking uptime across multiple services with 30-second polling, status history visualization, JWT-authenticated API, and Docker + nginx deployment.",
    tags: ["React 18", "Vite", "Express", "SQLite", "Docker", "JWT"],
    githubUrl: "https://github.com/lerko96/service-monitor",
    tier: "archive",
    year: 2025,
  },
  {
    slug: "tht-1.2",
    title: "ThoughtSpace",
    description:
      "3D visualization platform for exploring and organizing thoughts using a radio-tuning metaphor. Filter ideas by frequency and bandwidth in an instanced Three.js scene with persistent local storage.",
    tags: ["React", "TypeScript", "Three.js", "React Three Fiber", "Zustand"],
    githubUrl: "https://github.com/lerko96/tht-1.2",
    tier: "archive",
    year: 2025,
  },

  {
    slug: "open-pact",
    title: "open-pact",
    description:
      "Open protocol for AI agent identity, delegation, and portable memory. Ed25519 keypair identity, signed delegation warrants, portable signed memory facts. No central registry.",
    tags: ["TypeScript", "Ed25519", "DID", "npm", "CC0"],
    githubUrl: "https://github.com/lerko96/open-pact",
    tier: "featured",
  },
  {
    slug: "helm",
    title: "helm",
    description:
      "Full-stack personal productivity dashboard. Go backend with chi router and SQLite, React + TypeScript frontend. Notes, todos, calendar (CalDAV), clipboard, bookmarks, memos. Self-hosted, single-user, daily use.",
    tags: ["Go", "React", "TypeScript", "SQLite", "CalDAV"],
    githubUrl: "https://github.com/lerko96/helm",
    tier: "featured",
  },

  // --- Archive ---
  {
    slug: "risk-ops",
    title: "risk-ops",
    description:
      "Browser-based strategy dashboard for Risk: Global Domination (SMG Studio). Open one HTML file — no install needed.",
    tags: ["HTML", "JavaScript"],
    githubUrl: "#",
    tier: "archive",
    year: 2026,
  },
  {
    slug: "twitter-thread-ext",
    title: "twitter-thread-ext",
    description:
      "Chrome extension (Manifest V3) that captures entire Twitter/X threads and exports them as HTML, Markdown, PDF, or image — with metadata preservation and preview before export.",
    tags: ["Chrome Extension", "Manifest V3", "JavaScript", "jsPDF"],
    githubUrl: "https://github.com/lerko96/twitter-thread-ext",
    tier: "archive",
    year: 2023,
  },
  {
    slug: "notes-app-1.0",
    title: "notes-app-1.0",
    description:
      "Lightweight canvas drawing app with color picker, adjustable brush size, and PNG export. Runs in the browser, no dependencies.",
    tags: ["HTML5 Canvas", "JavaScript", "CSS"],
    githubUrl: "https://github.com/lerko96/notes-app-1.0",
    tier: "archive",
    year: 2022,
  },
  {
    slug: "were-hooked",
    title: "We're Hooked",
    description:
      "Fishing location discovery app built as a team of 5 during bootcamp. Java/Spring MVC backend with Thymeleaf templates.",
    tags: ["Java", "Spring", "Thymeleaf", "HTML", "CSS"],
    githubUrl: "https://github.com/lerko96/were-hooked-repo",
    tier: "archive",
    year: 2022,
  },
  {
    slug: "mystery-educator",
    title: "Mystery Educator",
    description:
      "Single-page app mashup of the MET Museum and NASA public APIs. Built as a team of 4 during bootcamp.",
    tags: ["JavaScript", "REST APIs", "HTML", "CSS"],
    githubUrl: "https://github.com/lerko96/mystery-educator",
    tier: "archive",
    year: 2022,
  },
];

export const featuredProjects = projects.filter((p) => p.tier === "featured");
export const archiveProjects = projects.filter((p) => p.tier === "archive");

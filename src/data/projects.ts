export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  gradient: string; // Tailwind gradient classes for placeholder image tile
  tier: "featured" | "archive";
  stats?: string;
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
    gradient: "from-[var(--color-green-darkest)] via-[var(--color-bg)] to-[var(--color-bg-deep)]",
    tier: "featured",
    stats: "211 commits",
  },
  {
    slug: "plaiground",
    title: "plAIground",
    description:
      "Cross-platform desktop AI chat app for developers. Supports OpenAI, Anthropic Claude, and Google Gemini in a single interface with real-time cost tracking, conversation export, and automatic code explanation.",
    tags: ["Electron", "Node.js", "OpenAI", "Claude", "Gemini"],
    githubUrl: "https://github.com/lerko96/plaiground",
    gradient: "from-[var(--color-green-darker)] via-[var(--color-surface)] to-[var(--color-bg-deep)]",
    tier: "featured",
  },
  {
    slug: "service-monitor",
    title: "service-monitor",
    description:
      "Web dashboard for tracking uptime across multiple services with 30-second polling, status history visualization, JWT-authenticated API, and Docker + nginx deployment.",
    tags: ["React 18", "Vite", "Express", "SQLite", "Docker", "JWT"],
    githubUrl: "https://github.com/lerko96/service-monitor",
    gradient: "from-[var(--color-bg)] via-[var(--color-green-darkest)] to-[var(--color-bg-deep)]",
    tier: "featured",
  },
  {
    slug: "tht-1.2",
    title: "ThoughtSpace",
    description:
      "3D visualization platform for exploring and organizing thoughts using a radio-tuning metaphor. Filter ideas by frequency and bandwidth in an instanced Three.js scene with persistent local storage.",
    tags: ["React", "TypeScript", "Three.js", "React Three Fiber", "Zustand"],
    githubUrl: "https://github.com/lerko96/tht-1.2",
    gradient: "from-[var(--color-surface)] via-[var(--color-green-darkest)] to-[var(--color-bg-deep)]",
    tier: "featured",
  },

  // --- Archive ---
  {
    slug: "twitter-thread-ext",
    title: "twitter-thread-ext",
    description:
      "Chrome extension (Manifest V3) that captures entire Twitter/X threads and exports them as HTML, Markdown, PDF, or image — with metadata preservation and preview before export.",
    tags: ["Chrome Extension", "Manifest V3", "JavaScript", "jsPDF"],
    githubUrl: "https://github.com/lerko96/twitter-thread-ext",
    gradient: "from-[var(--color-bg)] to-[var(--color-bg-deep)]",
    tier: "archive",
  },
  {
    slug: "notes-app-1.0",
    title: "notes-app-1.0",
    description:
      "Lightweight canvas drawing app with color picker, adjustable brush size, and PNG export. Runs in the browser, no dependencies.",
    tags: ["HTML5 Canvas", "JavaScript", "CSS"],
    githubUrl: "https://github.com/lerko96/notes-app-1.0",
    gradient: "from-[var(--color-bg)] to-[var(--color-bg-deep)]",
    tier: "archive",
  },
  {
    slug: "were-hooked",
    title: "We're Hooked",
    description:
      "Fishing location discovery app built as a team of 5 during bootcamp. Java/Spring MVC backend with Thymeleaf templates.",
    tags: ["Java", "Spring", "Thymeleaf", "HTML", "CSS"],
    githubUrl: "https://github.com/lerko96/were-hooked-repo",
    gradient: "from-[var(--color-bg)] to-[var(--color-bg-deep)]",
    tier: "archive",
  },
  {
    slug: "mystery-educator",
    title: "Mystery Educator",
    description:
      "Single-page app mashup of the MET Museum and NASA public APIs. Built as a team of 4 during bootcamp.",
    tags: ["JavaScript", "REST APIs", "HTML", "CSS"],
    githubUrl: "https://github.com/lerko96/mystery-educator",
    gradient: "from-[var(--color-bg)] to-[var(--color-bg-deep)]",
    tier: "archive",
  },
];

export const featuredProjects = projects.filter((p) => p.tier === "featured");
export const archiveProjects = projects.filter((p) => p.tier === "archive");

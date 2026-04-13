# Tyler Koenig portfolio

Personal portfolio site. Live at [lerkolabs.com](https://lerkolabs.com) — self-hosted.

Source: [gitea.lerkolabs.com/lerko/lerkolabs.com](https://gitea.lerkolabs.com/lerko/lerkolabs.com)

**Stack:** Next.js 16 · React 19 · TypeScript · Tailwind v4

---

## Branches

- `dev` — source code; pushing here updates lerkolabs.com
- `master` — reserved for future GitHub mirror; don't touch manually

---

## Commands

```bash
npm run dev      # dev server at localhost:3000
npm run build    # static export into out/
```

---

## Deploy

```bash
git checkout dev && git merge <branch> && git push gitea dev
```

Push to `dev` triggers Gitea Actions (`.gitea/workflows/deploy.yml`):
1. Builds the static site (`npm run build`)
2. rsyncs `out/` to the portfolio LXC
3. Rebuilds and restarts the Docker container serving lerkolabs.com

---

## Project layout

```
src/
  app/
    layout.tsx          # root layout, fonts, ThemeProvider
    page.tsx            # home: hero, skills, project cards
    homelab/page.tsx    # homelab page: VLANs, services, ADRs
    archive/page.tsx    # older projects grid
    globals.css         # full design system (Tailwind v4 CSS-first, all tokens here)
  components/           # Nav, Footer, Hero, ThemeScript, etc.
  context/
    ThemeContext.tsx     # dark mode provider + useTheme hook
  data/
    projects.ts         # all projects, featured + archive split
    services.ts         # homelab services with categories
public/                 # static assets copied into out/ on build
```

> Tailwind v4 is CSS-first — no `tailwind.config.ts`. All custom tokens live in `globals.css` under `@theme {}`.

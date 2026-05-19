# Tyler Koenig portfolio

Personal portfolio site. Live at [lerkolabs.com](https://lerkolabs.com) — self-hosted.

Source: [gitea.lerkolabs.com/lerko/portfolio](https://gitea.lerkolabs.com/lerko/portfolio)

**Stack:** Astro 5 · TypeScript · Tailwind v4

---

## Branches

- `dev` — source code; pushing here updates lerkolabs.com
- `master` — reserved for future GitHub mirror; don't touch manually

---

## Commands

```bash
npm run dev      # dev server at localhost:4321
npm run build    # static export into out/
npm run preview  # preview production build
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
  layouts/
    Base.astro            # root layout, fonts, theme script, nav/footer
  pages/
    index.astro           # home: hero, timeline
    projects.astro        # featured + archive projects
    homelab.astro         # VLANs, services, ADRs
    archive.astro         # redirect to /projects/
  components/             # Nav, Footer, Hero, Timeline, Widget, ProjectCard, Skills
  data/
    projects.ts           # all projects, featured + archive split
    services.ts           # homelab services with categories
    timeline.ts           # career/project timeline
  styles/
    globals.css           # full design system (Tailwind v4 CSS-first, all tokens here)
public/
  fonts/                  # self-hosted Source Code Pro woff2
```

> Tailwind v4 is CSS-first — no `tailwind.config.ts`. All custom tokens live in `globals.css` under `@theme {}`.

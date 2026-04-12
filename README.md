# lerko96 portfolio

Personal portfolio site. Live at [lerkolabs.com](https://lerkolabs.com) — self-hosted, deployed and maintained through my own operation.

Source lives on my Gitea at [gitea.lerkolabs.com](https://gitea.lerkolabs.com). GitHub is a backup mirror, not the primary.

**Stack:** Next.js 16 · React 19 · TypeScript · Tailwind v4

---

## Branches

- `dev` — source code, all work happens here
- `master` — built output only; what GitHub Pages serves for the backup mirror. don't touch this manually.

---

## Commands

```bash
npm run dev      # dev server at localhost:3000
npm run build    # static export into out/
npm run deploy   # build + push out/ to master (GitHub mirror)
```

---

## How it deploys

`npm run deploy` runs `predeploy` (build) then pushes the `out/` directory to `master` via `gh-pages`. That's what feeds the GitHub Pages backup at lerko96.com.

`postbuild` drops `out/.nojekyll` so GitHub Pages doesn't ignore `_next/` assets.

Custom domain is in `public/CNAME` — gets copied into `out/` on build.

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
public/
  CNAME                 # www.lerko96.com
```

> Tailwind v4 is CSS-first — no `tailwind.config.ts`. All custom tokens live in `globals.css` under `@theme {}`.

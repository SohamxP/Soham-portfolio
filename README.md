# Soham Panchal — Portfolio

Personal portfolio built with React, Vite, and CSS. A minimal, responsive site highlighting my experience, education, projects, and technical stack.

## Features

- Responsive layout with light and dark themes
- Searchable command palette (`Cmd+K` / `Ctrl+K`)
- Expandable experience and project sections
- Technology and AI-tool icons
- GitHub contributions calendar with grayscale activity levels and daily contribution details
- Education, including my Mathematics minor and relevant coursework
- Public repositories for PlySense, CampusAI, Hotel Management Platform, and RideWise
- Live demos where available, along with my résumé and contact links

## Run locally

```bash
npm ci
npm run dev
```

Production checks:

```bash
npm run build
npm run lint
```

The site is a static Vite app. Deploy it to a Vite-compatible static host with build command `npm run build` and publish directory `dist`.

Portfolio content lives in `src/data.js`; layout and interactions are in `src/App.jsx`; styles are in `src/index.css`.

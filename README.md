# Soham Panchal — portfolio

A personal portfolio built with React, Vite, and CSS, redesigned independently from scratch in a minimal résumé-style layout inspired by [krishpinto.co.in](https://www.krishpinto.co.in/). No source code, text, or image assets were copied from the reference site.

## Features

- Mobile-friendly compact portfolio layout and light/dark themes
- Searchable command palette (`Cmd+K` / `Ctrl+K`)
- Updated internship, education, and project summaries
- Links to the verified public PlySense and RideWise repositories and the live chess project
- GitHub contributions display via a third-party image service (subject to that service's availability)
- Project source links only when verified; CampusAI and Hotel Management Platform have no public repository link
- Existing portrait photo and a résumé link

## Run locally

```bash
npm ci
npm run dev
```

Production build:

```bash
npm run build
npm run lint
```

The site is a static Vite app. Deploy the repository to a Vite-compatible static host with build command `npm run build` and publish directory `dist`.

Portfolio content is maintained in `src/data.js`, layout and interactions in `src/App.jsx`, and theme/responsive styling in `src/index.css`.

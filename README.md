# MAHI — THE SERIES

A cinematic, streaming-inspired portfolio for **Mahi**: Software Engineer pursuing MCA at National Institute of Technology Raipur.
Every section is an episode, every project is an Original, and the whole site plays like a series.

> A personal portfolio with a fictional streaming-platform look. It is not affiliated with Netflix or any other streaming service and uses none of their logos.

## Quick Desktop Launch (No Installation Required)

Open **`standalone-desktop-preview.html`** directly in Chrome, Edge, Brave, or Safari by double-clicking it on your desktop! It runs the entire interactive portfolio immediately without needing Node.js.

## Run with Vite Development Server

Requires **Node.js 18+**.

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

Production build:

```bash
npm run build
npm run preview
```

The static site is written to `dist/` and can be deployed as-is to Vercel, Render, Netlify, or GitHub Pages.

## Updating the content

**All content lives in one file: [`src/data/portfolio.ts`](src/data/portfolio.ts).** It was generated strictly from Mahi's resume, and every component reads from it.

**Resume:** `public/assets/Mahi_Resume.pdf`

**Photo:** `pic1.jpeg` and `pic.png` (and responsive WebP portraits in `public/assets/`).

# Portfolio

Personal portfolio of Aditya Ayushman Sahoo: an AI/ML engineer's showcase of projects, experience and research, with an "Ask me" assistant.

**Live site:** https://pf-eight-xi.vercel.app

## Features

- **Scroll-driven hero** with a canvas sequence and animated neural-network background.
- **Sections** for featured projects, experience, achievements, research, journey timeline, tech stack and contact.
- **Ask-me assistant** that answers questions about the portfolio owner. It uses the Anthropic API when a key is set, and falls back to a built-in keyword responder (no key, no cost) when it is not.
- **Live stats**: GitHub repo count and LeetCode stats, fetched server-side and cached for one hour, with graceful fallback.
- **Case study page** for the Road Guardian project at `/work/road-guardian`.
- **SEO**: generated sitemap, `robots.txt` and Open Graph images.

## Tech stack

| Area | Tools |
|---|---|
| Framework | Next.js (App Router), React, TypeScript |
| Styling and motion | Tailwind CSS 4, Framer Motion |
| AI | Anthropic SDK (`@anthropic-ai/sdk`) |
| Hosting | Vercel |

## Project structure

```
src/app/            routes, API routes (/api/ask, /api/stats), sitemap, OG images
src/components/     page sections and UI components
src/lib/            keyless assistant responder
public/             images, project media, resume
```

## Getting started

Requires Node.js 20 or later.

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build
npm run start    # serve the production build
npm run lint
```

## Environment variables

| Variable | Required | Purpose |
|---|---|---|
| `ANTHROPIC_API_KEY` | No | Enables the LLM-backed Ask-me assistant. Without it, the site uses the built-in responder |

Create a `.env.local` file in the project root to set it. Never commit it.

## Deployment

Deploy to Vercel by importing the repository. Add `ANTHROPIC_API_KEY` under the project's environment variables if you want the LLM assistant.

## Contact

Reach out via [LinkedIn](https://www.linkedin.com/in/aditya-ayushman-sahoo-243b81287/) or the contact section of the live site.

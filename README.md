# Index Business School — IBS

Arabic-first (RTL) admissions landing page for Index Business School (IBS). Built with Next.js and Tailwind CSS.

## Overview

A single-page marketing and admissions site that walks prospective students through the IBS offering and converts them to an interview booking. Sections include the hero, the IBS journey, program bundles, shared benefits, why IBS, a booking form, FAQ, and footer.

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript, React
- **Styling:** Tailwind CSS
- **Fonts:** El Messiri (display), Readex Pro (body), Barlow (Latin labels)

## Getting Started

The application lives in the [`web/`](web/) directory.

```bash
cd web
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

Run these from inside `web/`:

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the local development server |
| `npm run build` | Create a production build |
| `npm run start` | Run the production build locally |
| `npm run lint` | Lint the codebase |

## Project Structure

```
web/
  app/                 Next.js App Router (layout, page, global styles, icons)
  components/
    layout/            Header, Footer
    sections/          Hero, Journey, Programs, Features, WhyIBS, BookingForm, FAQ
  public/              Static assets and images
Images/                Brand source assets
```

## Deployment

The site is deployed on [Vercel](https://vercel.com). The Vercel project's **Root Directory** is set to `web` so that pushes to `main` trigger automatic production deployments.

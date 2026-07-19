# Sajit Maharjan — Portfolio

A modern, secure, and SEO-optimized portfolio website built with Next.js App Router, Tailwind CSS, and JavaScript.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS + @tailwindcss/typography
- **Icons:** Lucide React
- **MDX:** next-mdx-remote (server components)
- **Language:** JavaScript (JSX)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Adding Blog Posts

Create `.mdx` files in `content/blogs/` with frontmatter:

```mdx
---
title: "Your Post Title"
description: "A brief description"
date: "2025-01-15"
tags: ["Kubernetes", "DevOps"]
---

Your content here...
```

## Production Build

```bash
npm run build
npm start
```

## Security Features

- Content Security Policy (CSP) headers
- Strict Transport Security (HSTS)
- X-Content-Type-Options: nosniff
- X-Frame-Options: SAMEORIGIN
- Permissions Policy
- Form action restrictions

## SEO Features

- Dynamic metadata per page
- Open Graph tags
- Dynamic sitemap.xml
- robots.txt
- Semantic HTML structure
- Structured content headings

# Apex Digital Agency

![Apex Digital Agency](https://imgix.cosmicjs.com/ecc0f290-0324-11f1-9dfe-db6d46dd5f02-photo-1460925895917-afdab827c52f-1770359254982.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern, fully responsive digital agency website built with Next.js 16, Tailwind CSS, and Cosmic CMS. Features a mobile hamburger navigation, dynamic project case studies, service pages, and team profiles — all powered by your Cosmic content.

## Features

- 🚀 **Next.js 16 App Router** — Server components for blazing-fast page loads
- 📱 **Responsive Mobile Navigation** — Animated hamburger menu with slide-in drawer
- 💼 **Dynamic Project Portfolio** — Case studies with image galleries and markdown content
- 🏢 **Services Showcase** — Individual service pages with related projects
- 👥 **Team Profiles** — Team member pages with bios, photos, and contact links
- 🎨 **Tailwind CSS** — Utility-first styling with custom design tokens
- 🖼️ **Image Optimization** — imgix-powered responsive images with auto-format
- 🔍 **SEO Optimized** — Dynamic metadata and Open Graph tags on every page
- ☁️ **Cosmic CMS** — All content managed through Cosmic's headless CMS

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6985896dc8c4b2550dccdc73&clone_repository=69858ba1c8c4b2550dccde34)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a complete content model for: A digital agency website
>
> Use the install_content_model action to create ALL object types AND demo content in one step. Include:
> 1. All necessary object types with appropriate metafields
> 2. 2-3 demo objects for each type with realistic content
> 3. Unsplash image URLs for thumbnails and file metafields (use real URLs like https://images.unsplash.com/photo-...)
>
> Remember to create types that are referenced by others FIRST (e.g., categories and authors before blog posts)."

### Code Generation Prompt

> "Build me an app: A Next.js website, tailwind CSS, responsive, mobile nav. Generate the complete application code."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- [Next.js 16](https://nextjs.org/) — React framework with App Router
- [React 19](https://react.dev/) — UI component library
- [Tailwind CSS 3](https://tailwindcss.com/) — Utility-first CSS framework
- [Cosmic](https://www.cosmicjs.com/docs) — Headless CMS for content management
- [TypeScript 5](https://www.typescriptlang.org/) — Type-safe JavaScript
- [react-markdown](https://github.com/remarkjs/react-markdown) — Markdown rendering

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (recommended) or Node.js 18+
- A [Cosmic](https://www.cosmicjs.com) account with the digital agency content model installed

### Installation

1. Clone the repository
2. Install dependencies:

```bash
bun install
```

3. Set up environment variables:

Create a `.env.local` file with your Cosmic credentials:

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Start the development server:

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Cosmic SDK Examples

### Fetching all services

```typescript
import { cosmic } from '@/lib/cosmic'

const { objects: services } = await cosmic.objects
  .find({ type: 'services' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching a single project with relationships

```typescript
const { object: project } = await cosmic.objects
  .findOne({ type: 'projects', slug: 'my-project' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

// Access related service and team lead
const service = project.metadata.service
const teamLead = project.metadata.team_lead
```

## Cosmic CMS Integration

This app uses three content types from Cosmic:

| Content Type | Fields | Description |
|---|---|---|
| **Services** | title, description, content, icon, featured_image | Agency service offerings |
| **Team Members** | role, bio, photo, linkedin_url, email | Team member profiles |
| **Projects** | client, description, content, featured_image, gallery, service, team_lead, website_url | Portfolio case studies |

All data is fetched server-side using Next.js Server Components for optimal performance and SEO.

## Deployment Options

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository on [Vercel](https://vercel.com)
3. Add your environment variables (COSMIC_BUCKET_SLUG, COSMIC_READ_KEY, COSMIC_WRITE_KEY)
4. Deploy!

### Netlify

1. Push your code to GitHub
2. Import the repository on [Netlify](https://netlify.com)
3. Set the build command to `bun run build`
4. Add your environment variables
5. Deploy!

<!-- README_END -->
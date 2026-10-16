# Charfoos Reiter Hébert PC — website

Next.js 16 (App Router) + Tailwind CSS 4. Every page is statically prerendered, so it's fast and cheap to host on Vercel.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build check
```

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. In Vercel: **Add New → Project**, import the repo. Framework preset auto-detects as Next.js; no build settings to change.
3. Add the environment variables below (Project → Settings → Environment Variables), then deploy.
4. Point `michigancompdefense.com` at the project under **Settings → Domains**.

### Environment variables (contact form)

The contact form sends email through [Resend](https://resend.com) using a plain HTTP call (no SDK).

| Variable | Example |
| --- | --- |
| `RESEND_API_KEY` | `re_xxxxxxxx` |
| `CONTACT_TO_EMAIL` | `intake@crh-law.com` (comma-separate for several) |
| `CONTACT_FROM_EMAIL` | `Website <website@crh-law.com>` — must be on a domain verified in Resend |

Without them, the form validates but tells visitors to call the office instead of silently dropping messages.

## Where things live

| What | File |
| --- | --- |
| Phone, address, nav, logo URL | `lib/site.ts` |
| Attorney bios & CVs | `lib/team.ts` |
| FAQs | `lib/faqs.ts` |
| Blog posts | `content/posts/*.md` (frontmatter + paragraphs, `## ` for headings) |
| Brand colors & type scale | `app/globals.css` (`@theme`) |
| Fonts (self-hosted IBM Plex) | `app/fonts.ts` |
| Old-URL redirects | `next.config.ts` |

**New blog post:** add a `.md` file to `content/posts/` with `title`, `date` (YYYY-MM-DD), `excerpt`, and optional `image`, then redeploy.

## Notes

- **Fonts** are IBM Plex Serif and IBM Plex Sans Devanagari, self-hosted from `@fontsource` via `next/font/local` — no request to Google at runtime. Plex Sans Devanagari's tall Devanagari line metrics are overridden so Latin text centers properly.
- **Images** (logo, attorney photos, blog images) currently load from the existing hibu CDN. Before cutting over DNS, download them into `/public` and update the URLs in `lib/site.ts`, `lib/team.ts` and the post frontmatter, since the hibu CDN may go away with that account. An SVG logo would be ideal.
- **Brand gray `#919191`** is used for rules and accents only. Body/secondary text uses `#1f1f1f` / `#555` to keep WCAG AA contrast.
- **SEO:** per-page titles/descriptions/canonicals, `sitemap.xml`, `robots.txt`, JSON-LD (`LegalService`, `Person`, `BlogPosting`, `FAQPage`), and 308 redirects from the old hibu URLs (`/team`, `/national-workers-compensation-defense-network-nwcdn`, root-level blog slugs).

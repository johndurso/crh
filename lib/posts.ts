import fs from "node:fs";
import path from "node:path";

export type Block = { type: "h2" | "p"; text: string };

export type Post = {
  slug: string;
  title: string;
  date: string; // ISO yyyy-mm-dd
  excerpt: string;
  image?: string;
  blocks: Block[];
  readingMinutes: number;
};

const dir = path.join(process.cwd(), "content", "posts");

/**
 * Posts live in /content/posts as Markdown with a tiny frontmatter block.
 * Supported body syntax: paragraphs separated by blank lines and "## " headings.
 * To publish a new post, drop a new .md file in that folder and redeploy.
 */
function parse(slug: string, raw: string): Post {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) throw new Error(`Post "${slug}" is missing frontmatter`);
  const meta: Record<string, string> = {};
  for (const line of match[1].split("\n")) {
    const i = line.indexOf(":");
    if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim();
  }
  const blocks: Block[] = match[2]
    .split(/\n\s*\n/)
    .map((chunk) => chunk.trim())
    .filter(Boolean)
    .map((chunk) =>
      chunk.startsWith("## ")
        ? { type: "h2" as const, text: chunk.slice(3).trim() }
        : { type: "p" as const, text: chunk.replace(/\n/g, " ") },
    );
  const words = blocks.reduce((n, b) => n + b.text.split(/\s+/).length, 0);
  return {
    slug,
    title: meta.title,
    date: meta.date,
    excerpt: meta.excerpt,
    image: meta.image || undefined,
    blocks,
    readingMinutes: Math.max(1, Math.round(words / 230)),
  };
}

let cache: Post[] | null = null;

export function getAllPosts(): Post[] {
  if (cache) return cache;
  cache = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => parse(f.replace(/\.md$/, ""), fs.readFileSync(path.join(dir, f), "utf8")))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
  return cache;
}

export const getPost = (slug: string) => getAllPosts().find((p) => p.slug === slug);

export const formatDate = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

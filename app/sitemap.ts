import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";
import { site } from "@/lib/site";
import { team } from "@/lib/team";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/national-workers-compensation-defense-network",
    "/workers-compensation-lawyer",
    "/about",
    "/about/our-team",
    "/blog",
    "/faqs",
    "/contact",
  ].map((p) => ({ url: `${site.url}${p}`, changeFrequency: "monthly" as const, priority: p === "" ? 1 : 0.8 }));
  const people = team.map((a) => ({ url: `${site.url}/about/our-team/${a.slug}`, priority: 0.6 }));
  const posts = getAllPosts().map((p) => ({ url: `${site.url}/blog/${p.slug}`, lastModified: p.date, priority: 0.6 }));
  return [...pages, ...people, ...posts];
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PostCard } from "@/components/cards";
import { ArrowRight } from "@/components/icons";
import { CtaBand, PageHero } from "@/components/ui";
import { formatDate, getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights on Michigan workers' compensation defense for employers, self-insureds, and insurance carriers.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const [featured, ...rest] = getAllPosts();

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Blog"
        intro={<p>Perspective on workers&rsquo; compensation defense, claims strategy, and managing exposure in Michigan.</p>}
        crumbs={[{ label: "Blog" }]}
      />

      <section className="py-16 md:py-24">
        <div className="container-x">
          {featured && (
            <article className="group relative grid overflow-hidden border border-black/10 transition-shadow hover:shadow-xl hover:shadow-black/5 lg:grid-cols-2">
              {featured.image && (
                <div className="relative aspect-[16/10] bg-light lg:aspect-auto lg:min-h-[24rem]">
                  <Image
                    src={featured.image}
                    alt=""
                    fill
                    priority
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              )}
              <div className="flex flex-col justify-center p-8 md:p-12">
                <p className="text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-muted">
                  Latest &middot; <time dateTime={featured.date}>{formatDate(featured.date)}</time>
                </p>
                <h2 className="mt-4 text-3xl font-medium leading-tight md:text-[2.25rem]">
                  <Link href={`/blog/${featured.slug}`} className="after:absolute after:inset-0 group-hover:text-navy">
                    {featured.title}
                  </Link>
                </h2>
                <p className="mt-5 text-lg text-muted">{featured.excerpt}</p>
                <span className="mt-8 inline-flex items-center gap-2 font-semibold text-navy">
                  Read article <ArrowRight width={18} height={18} className="transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </article>
          )}

          {rest.length > 0 && (
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          )}
        </div>
      </section>

      <CtaBand />
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PostCard } from "@/components/cards";
import { ArrowRight, PhoneIcon } from "@/components/icons";
import { CtaBand } from "@/components/ui";
import { formatDate, getAllPosts, getPost } from "@/lib/posts";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { type: "article", publishedTime: post.date, images: post.image ? [post.image] : undefined },
  };
}

export default async function PostPage({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post) notFound();
  const all = getAllPosts();
  const more = all.filter((p) => p.slug !== post.slug).slice(0, 2);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    image: post.image,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
  };

  return (
    <>
      <article>
        <header className="on-dark bg-navy text-white">
          <div className="container-x max-w-4xl! py-14 md:py-20">
            <nav aria-label="Breadcrumb" className="mb-8 text-[0.82rem] text-white/75">
              <ol className="flex flex-wrap items-center gap-2">
                <li><Link href="/" className="hover:text-white hover:underline underline-offset-4">Home</Link></li>
                <li aria-hidden>/</li>
                <li><Link href="/blog" className="hover:text-white hover:underline underline-offset-4">Blog</Link></li>
              </ol>
            </nav>
            <p className="text-[0.82rem] font-semibold uppercase tracking-[0.14em] text-white/75">
              <time dateTime={post.date}>{formatDate(post.date)}</time> &middot; {post.readingMinutes} min read
            </p>
            <h1 className="mt-4 text-[2.1rem] font-medium leading-tight text-white sm:text-[2.75rem] md:text-5xl">{post.title}</h1>
            <p className="mt-6 text-lg text-white/85">{post.excerpt}</p>
          </div>
        </header>

        {post.image && (
          <div className="container-x max-w-5xl! -mb-4 pt-10 md:pt-14">
            <div className="relative aspect-[16/8] overflow-hidden bg-light">
              <Image src={post.image} alt="" fill priority sizes="(min-width: 1024px) 64rem, 100vw" className="object-cover" />
            </div>
          </div>
        )}

        <div className="container-x max-w-3xl! py-14 md:py-20">
          <div className="prose-crh text-[1.1rem] leading-[1.8]">
            {post.blocks.map((b, i) =>
              b.type === "h2" ? (
                <h2 key={i} className="font-medium">{b.text}</h2>
              ) : (
                <p key={i} className={i === 0 ? "text-[1.22rem] leading-relaxed text-black" : undefined}>
                  {b.text}
                </p>
              ),
            )}
          </div>

          <aside className="mt-14 flex flex-col gap-6 border-l-4 border-navy bg-light p-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-serif text-xl font-medium text-black">Questions about a claim?</p>
              <p className="mt-1 text-muted">Talk with a Michigan workers&rsquo; compensation defense attorney.</p>
            </div>
            <a href={site.phoneHref} className="btn-primary shrink-0">
              <PhoneIcon width={18} height={18} /> {site.phone}
            </a>
          </aside>
        </div>
      </article>

      {more.length > 0 && (
        <section className="border-t border-black/10 bg-light py-16 md:py-24">
          <div className="container-x">
            <div className="flex items-end justify-between gap-6">
              <h2 className="text-3xl font-medium">More articles</h2>
              <Link href="/blog" className="inline-flex items-center gap-2 font-semibold text-navy">
                All articles <ArrowRight width={18} height={18} />
              </Link>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {more.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import type { Faq } from "@/lib/faqs";
import { formatDate, type Post } from "@/lib/posts";
import type { Attorney } from "@/lib/team";
import { ArrowRight, ChevronDown } from "./icons";

export function TeamCard({ a, priority = false }: { a: Attorney; priority?: boolean }) {
  return (
    <Link href={`/about/our-team/${a.slug}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden bg-light">
        <Image
          src={a.photo}
          alt={`Portrait of ${a.name}`}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-navy transition-transform duration-300 group-hover:scale-x-100" />
      </div>
      <h3 className="mt-5 text-xl font-medium group-hover:text-navy">{a.name}</h3>
      <p className="mt-1 text-[0.82rem] font-semibold uppercase tracking-[0.14em] text-muted">{a.title}</p>
    </Link>
  );
}

export function PostCard({ post }: { post: Post }) {
  return (
    <article className="group relative flex h-full flex-col border border-black/10 bg-white transition-shadow hover:shadow-xl hover:shadow-black/5">
      {post.image && (
        <div className="relative aspect-[16/10] overflow-hidden bg-light">
          <Image
            src={post.image}
            alt=""
            fill
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6 md:p-7">
        <p className="text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-muted">
          <time dateTime={post.date}>{formatDate(post.date)}</time> &middot; {post.readingMinutes} min read
        </p>
        <h3 className="mt-3 text-xl font-medium leading-snug">
          <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0 group-hover:text-navy">
            {post.title}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-[0.97rem] text-muted">{post.excerpt}</p>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy">
          Read article <ArrowRight width={16} height={16} className="transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </article>
  );
}

/** Native <details> accordion: accessible, works without JavaScript. */
export function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className="divide-y divide-black/10 border-y border-black/10">
      {items.map((f, i) => (
        <details key={f.q} className="group" open={i === 0}>
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
            <h3 className="font-serif text-lg font-medium md:text-xl group-open:text-navy">{f.q}</h3>
            <span className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-full border border-black/15 transition-transform group-open:rotate-180 group-open:border-navy group-open:bg-navy group-open:text-white">
              <ChevronDown width={16} height={16} />
            </span>
          </summary>
          <div className="space-y-4 pb-7 pr-12 text-ink">
            {f.a.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>
        </details>
      ))}
    </div>
  );
}

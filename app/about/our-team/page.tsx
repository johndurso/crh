import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import { CtaBand, PageHero } from "@/components/ui";
import { team } from "@/lib/team";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the workers' compensation defense attorneys of Charfoos Reiter Hébert PC in Farmington Hills, Michigan.",
  alternates: { canonical: "/about/our-team" },
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Our team"
        title="Experienced defense attorneys."
        intro={
          <p>
            Fellows of the College of Workers&rsquo; Compensation Lawyers, NWCDN founders, published authors, and
            seasoned trial and appellate advocates.
          </p>
        }
        crumbs={[{ label: "About CRH", href: "/about" }, { label: "Our Team" }]}
      />

      <section className="py-16 md:py-24">
        <div className="container-x space-y-6">
          {team.map((a, i) => (
            <article
              key={a.slug}
              className="group grid overflow-hidden border border-black/10 transition-colors hover:border-navy md:grid-cols-12"
            >
              <div className="relative aspect-[4/5] bg-light md:col-span-4 md:aspect-auto md:min-h-[26rem] lg:col-span-3">
                <Image
                  src={a.photo}
                  alt={`Portrait of ${a.name}`}
                  fill
                  priority={i < 2}
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 100vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="flex flex-col p-8 md:col-span-8 md:p-10 lg:col-span-9 lg:p-12">
                <p className="text-[0.8rem] font-semibold uppercase tracking-[0.16em] text-muted">{a.title}</p>
                <h2 className="mt-2 text-3xl font-medium md:text-4xl">
                  <Link href={`/about/our-team/${a.slug}`} className="hover:text-navy">
                    {a.name}
                  </Link>
                </h2>
                <p className="mt-5 max-w-3xl text-lg text-ink/90">{a.summary}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {a.highlights.map((h) => (
                    <li key={h} className="bg-light px-3 py-1.5 text-sm font-medium text-black">
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-8">
                  <Link
                    href={`/about/our-team/${a.slug}`}
                    className="inline-flex items-center gap-2 font-semibold text-navy"
                    aria-label={`Read ${a.name}'s full profile`}
                  >
                    Full profile <ArrowRight width={18} height={18} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}

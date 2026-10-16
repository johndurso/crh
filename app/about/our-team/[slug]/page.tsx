import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, LinkedInIcon, MailIcon, PhoneIcon } from "@/components/icons";
import { CtaBand } from "@/components/ui";
import { site } from "@/lib/site";
import { getAttorney, team } from "@/lib/team";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return team.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const a = getAttorney((await params).slug);
  if (!a) return {};
  return {
    title: `${a.name} — ${a.title}`,
    description: a.summary,
    alternates: { canonical: `/about/our-team/${a.slug}` },
    openGraph: { images: [a.photo] },
  };
}

export default async function AttorneyPage({ params }: Props) {
  const a = getAttorney((await params).slug);
  if (!a) notFound();
  const others = team.filter((t) => t.slug !== a.slug);
  const tel = `tel:+1${a.directDial.replace(/\D/g, "")}`;

  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: a.name,
    jobTitle: a.title,
    email: `mailto:${a.email}`,
    telephone: a.directDial,
    image: a.photo,
    worksFor: { "@type": "LegalService", name: site.name, url: site.url },
    ...(a.linkedin ? { sameAs: [a.linkedin] } : {}),
  };

  return (
    <>
      <section className="on-dark bg-navy text-white">
        <div className="container-x grid gap-10 pt-12 md:grid-cols-12 md:items-end md:pt-16">
          <div className="pb-12 md:col-span-7 md:pb-16 lg:col-span-8">
            <nav aria-label="Breadcrumb" className="mb-8 text-[0.82rem] text-white/75">
              <ol className="flex flex-wrap items-center gap-2">
                <li><Link href="/" className="hover:text-white hover:underline underline-offset-4">Home</Link></li>
                <li aria-hidden>/</li>
                <li><Link href="/about" className="hover:text-white hover:underline underline-offset-4">About CRH</Link></li>
                <li aria-hidden>/</li>
                <li><Link href="/about/our-team" className="hover:text-white hover:underline underline-offset-4">Our Team</Link></li>
                <li aria-hidden>/</li>
                <li aria-current="page" className="text-white">{a.name}</li>
              </ol>
            </nav>
            <p className="eyebrow mb-4 text-white/85">{a.title}</p>
            <h1 className="text-[2.4rem] font-medium text-white sm:text-5xl md:text-6xl">{a.name}</h1>
            <p className="mt-6 max-w-2xl text-lg text-white/85">{a.summary}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href={tel} className="btn-light">
                <PhoneIcon width={18} height={18} /> {a.directDial}
              </a>
              <a href={`mailto:${a.email}`} className="btn-outline-light">
                <MailIcon width={18} height={18} /> Email {a.name.split(" ")[0]}
              </a>
            </div>
          </div>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm self-end bg-navy-700 md:col-span-5 md:max-w-none lg:col-span-4">
            <Image
              src={a.photo}
              alt={`Portrait of ${a.name}`}
              fill
              priority
              sizes="(min-width: 1024px) 30vw, (min-width: 768px) 40vw, 90vw"
              className="object-cover object-top"
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h2 className="text-3xl font-medium">Biography</h2>
            <div className="mt-6 space-y-5 text-[1.08rem]">
              {a.bio.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>

            {a.cv.length > 0 && (
              <div className="mt-14 grid gap-x-10 gap-y-10 border-t border-black/10 pt-12 md:grid-cols-2">
                {a.cv.map((sec) => (
                  <section key={sec.heading} className={sec.items.length > 6 ? "md:col-span-2" : ""}>
                    <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-navy">{sec.heading}</h3>
                    <ul className={`mt-4 space-y-2.5 text-[0.98rem] ${sec.items.length > 6 ? "md:columns-2 md:gap-10" : ""}`}>
                      {sec.items.map((it) => (
                        <li key={it} className="break-inside-avoid border-l-2 border-light pl-4">
                          {it}
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            )}
          </div>

          <aside className="lg:col-span-4">
            <div className="space-y-6 lg:sticky lg:top-28">
              <div className="border border-black/10 p-7">
                <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-muted">Contact</h2>
                <ul className="mt-5 space-y-4 text-[0.97rem]">
                  <li>
                    <a href={`mailto:${a.email}`} className="flex items-center gap-3 break-all text-navy hover:underline underline-offset-4">
                      <MailIcon className="shrink-0" width={18} height={18} /> {a.email}
                    </a>
                  </li>
                  <li>
                    <a href={tel} className="flex items-center gap-3 hover:text-navy">
                      <PhoneIcon className="shrink-0" width={18} height={18} /> Direct: {a.directDial}
                    </a>
                  </li>
                  <li>
                    <a href={site.phoneHref} className="flex items-center gap-3 hover:text-navy">
                      <PhoneIcon className="shrink-0" width={18} height={18} /> Office: {site.phone}
                    </a>
                  </li>
                  {a.linkedin && (
                    <li>
                      <a href={a.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-navy">
                        <LinkedInIcon className="shrink-0" width={18} height={18} /> LinkedIn profile
                      </a>
                    </li>
                  )}
                </ul>
              </div>
              <div className="bg-light p-7">
                <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-muted">Also on our team</h2>
                <ul className="mt-4 divide-y divide-black/10">
                  {others.map((o) => (
                    <li key={o.slug}>
                      <Link href={`/about/our-team/${o.slug}`} className="group flex items-center justify-between gap-4 py-3">
                        <span>
                          <span className="block font-serif text-lg font-medium text-black group-hover:text-navy">{o.name}</span>
                          <span className="text-sm text-muted">{o.title}</span>
                        </span>
                        <ArrowRight width={16} height={16} className="shrink-0 text-navy transition-transform group-hover:translate-x-1" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <CtaBand />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }} />
    </>
  );
}

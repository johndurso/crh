import type { Metadata } from "next";
import Link from "next/link";
import { FaqList, PostCard, TeamCard } from "@/components/cards";
import { ArrowRight, NetworkIcon, PhoneIcon, ScaleIcon, ShieldIcon } from "@/components/icons";
import NetworkGraphic from "@/components/NetworkGraphic";
import { CheckList, CtaBand, HeroTexture, SectionHeading, TextLink } from "@/components/ui";
import { faqs } from "@/lib/faqs";
import { getAllPosts } from "@/lib/posts";
import { site } from "@/lib/site";
import { team } from "@/lib/team";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const stats = [
  { value: "1977", label: "Founded" },
  { value: "100+", label: "Years of combined experience" },
  { value: "Statewide", label: "Coverage across all of Michigan" },
  { value: "NWCDN", label: "National network member firm" },
];

const reasons = [
  { title: "Founded in 1977", text: "Nearly five decades devoted to workers' compensation law in Michigan." },
  { title: "100+ years of combined experience", text: "Attorneys who have tried, appealed and resolved claims at every level." },
  { title: "Reasonable and fair billing", text: "Efficient, predictable representation without unnecessary expense." },
  { title: "Locally owned", text: "A Michigan firm with Michigan relationships and Michigan perspective." },
  { title: "Aggressive and efficient representation", text: "Firm advocacy focused on timely, cost-conscious outcomes." },
  { title: "We cover the whole state", text: "Representation wherever in Michigan a claim arises." },
];

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="on-dark relative overflow-hidden bg-navy text-white">
        <HeroTexture />
        <div className="container-x relative grid gap-12 py-16 md:py-24 lg:grid-cols-12 lg:items-center lg:gap-16 lg:py-28">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-6 text-white/85">Workers&rsquo; Compensation Defense &middot; Farmington Hills, MI</p>
            <h1 className="text-[2.5rem] font-medium leading-[1.08] text-white sm:text-6xl lg:text-[4.1rem]">
              Strategic defense for Michigan <em className="font-normal italic text-white/90">employers &amp; insurers.</em>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/85 md:text-xl">
              Charfoos Reiter Hébert PC has defended workers&rsquo; compensation claims since 1977 &mdash; with focused,
              efficient representation backed by a national network of defense counsel.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href={site.phoneHref} className="btn-light">
                <PhoneIcon width={18} height={18} /> Call {site.phone}
              </a>
              <Link href="/contact" className="btn-outline-light">
                Discuss your claim <ArrowRight width={18} height={18} />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative bg-white p-8 text-ink shadow-2xl shadow-black/30 md:p-10">
              <div className="absolute inset-x-0 top-0 h-1 bg-gray" />
              <ShieldIcon className="text-navy" width={40} height={40} strokeWidth={1.2} />
              <p className="mt-5 font-serif text-2xl font-medium leading-snug text-black">
                Our attorneys helped found the National Workers&rsquo; Compensation Defense Network.
              </p>
              <p className="mt-4 text-[0.98rem] text-muted">
                Multi-state employers get one point of contact and vetted, consistent defense counsel in every
                jurisdiction where a claim arises.
              </p>
              <div className="mt-6 border-t border-black/10 pt-6">
                <TextLink href="/national-workers-compensation-defense-network">How the NWCDN works for you</TextLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section aria-label="Firm at a glance" className="border-b border-black/10 bg-light">
        <div className="container-x">
          <dl className="grid grid-cols-2 gap-px bg-black/10 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-light px-4 py-8 first:pl-0 md:px-8 md:py-10 [&:nth-child(3)]:pl-0 lg:[&:nth-child(3)]:pl-8">
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="block font-serif text-3xl font-medium text-navy md:text-4xl">{s.value}</span>
                  <span className="mt-1 block text-sm text-muted">{s.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Who we are"
              title="A trusted name in Michigan workers' compensation law."
            />
          </div>
          <div className="space-y-5 text-lg lg:col-span-7">
            <p>
              Charfoos Reiter Hébert PC has been a trusted name in workers&rsquo; compensation law since 1977. With over a
              century of combined experience, our attorneys deliver focused, efficient defense representation for
              employers and insurance carriers across Michigan.
            </p>
            <p className="text-ink/85">
              Our practice is grounded in a thorough command of Michigan&rsquo;s Workers&rsquo; Disability Compensation
              Act and a commitment to fair, transparent claim handling. We provide cost-effective legal services without
              sacrificing quality or results &mdash; and we manage even the most challenging cases with precision and
              professionalism.
            </p>
            <div className="pt-3">
              <TextLink href="/about">More about the firm</TextLink>
            </div>
          </div>
        </div>
      </section>

      {/* Practice */}
      <section className="pb-20 md:pb-28">
        <div className="container-x grid gap-6 md:grid-cols-2">
          {[
            {
              href: "/national-workers-compensation-defense-network",
              icon: <NetworkIcon width={30} height={30} strokeWidth={1.3} />,
              kicker: "National reach",
              title: "National Workers' Compensation Defense Network",
              text: "Direct access to skilled defense counsel across multiple jurisdictions — no need to research and vet attorneys in unfamiliar states.",
            },
            {
              href: "/workers-compensation-lawyer",
              icon: <ScaleIcon width={30} height={30} strokeWidth={1.3} />,
              kicker: "Michigan defense",
              title: "Workers' Compensation Lawyer",
              text: "We manage communications with claimants, insurers and employers, and handle claims efficiently, fairly and in compliance with Michigan law.",
            },
          ].map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="group relative flex flex-col border border-black/10 p-8 transition-colors hover:border-navy md:p-10"
            >
              <span className="flex size-14 items-center justify-center bg-light text-navy transition-colors group-hover:bg-navy group-hover:text-white">
                {c.icon}
              </span>
              <p className="mt-8 text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-muted">{c.kicker}</p>
              <h3 className="mt-2 text-2xl font-medium md:text-[1.75rem]">{c.title}</h3>
              <p className="mt-4 flex-1 text-ink/85">{c.text}</p>
              <span className="mt-8 inline-flex items-center gap-2 font-semibold text-navy">
                Learn more <ArrowRight width={18} height={18} className="transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* NWCDN band */}
      <section className="on-dark relative overflow-hidden bg-navy-900 py-20 text-white md:py-28">
        <div className="container-x relative grid items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-5 text-white/80">National Workers&rsquo; Compensation Defense Network</p>
            <h2 className="text-3xl font-medium text-white md:text-[2.6rem]">
              Local experience, backed by national strength.
            </h2>
            <p className="mt-6 text-lg text-white/80">
              Through the NWCDN, we connect clients with experienced workers&rsquo; compensation defense attorneys who
              understand the nuances of local law &mdash; ensuring consistent, high-quality representation wherever a
              case arises.
            </p>
            <div className="mt-8 text-white/90">
              <CheckList
                dark
                items={[
                  "Vetted defense counsel across jurisdictions",
                  "Consistent strategy for multi-state employers",
                  "Shared knowledge on legislation and case law",
                  "Efficient case management that controls cost",
                ]}
              />
            </div>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link href="/national-workers-compensation-defense-network" className="btn-light">
                About our NWCDN affiliation <ArrowRight width={18} height={18} />
              </Link>
              <a href={site.nwcdnUrl} target="_blank" rel="noopener noreferrer" className="btn-outline-light">
                Visit NWCDN.com
              </a>
            </div>
          </div>
          <NetworkGraphic className="mx-auto w-full max-w-xl text-white" />
        </div>
      </section>

      {/* Why us */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <SectionHeading eyebrow="Why choose CRH" title="What sets our defense practice apart." />
          <ol className="mt-14 grid gap-px overflow-hidden border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r, i) => (
              <li key={r.title} className="bg-white p-8 md:p-10">
                <span aria-hidden className="font-serif text-sm font-semibold text-gray">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 text-xl font-medium">{r.title}</h3>
                <p className="mt-3 text-muted">{r.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Team */}
      <section className="bg-light py-20 md:py-28">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow="Our team" title="Attorneys who know Michigan workers' comp." />
            <TextLink href="/about/our-team">Meet the full team</TextLink>
          </div>
          <div className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((a) => (
              <TeamCard key={a.slug} a={a} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ preview */}
      <section className="py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="FAQs" title="Frequently asked questions." />
            <div className="mt-8">
              <TextLink href="/faqs">See all FAQs</TextLink>
            </div>
          </div>
          <div className="lg:col-span-8">
            <FaqList items={faqs.slice(0, 4)} />
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="border-t border-black/10 bg-light py-20 md:py-28">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow="Insights" title="Recent from the blog." />
            <TextLink href="/blog">View all articles</TextLink>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

import type { Metadata } from "next";
import { TeamCard } from "@/components/cards";
import { CtaBand, PageHero, SectionHeading, TextLink } from "@/components/ui";
import { site } from "@/lib/site";
import { team } from "@/lib/team";

export const metadata: Metadata = {
  title: "About CRH",
  description:
    "Since 1977, Charfoos Reiter Hébert PC has focused on defending employers and insurers in Michigan workers' compensation matters. Learn about our firm and our approach.",
  alternates: { canonical: "/about" },
};

const facts: [string, string][] = [
  ["Established", "1977"],
  ["Practice", "Workers' compensation defense and related actions"],
  ["Clients", "Employers, self-insured employers, and insurance carriers"],
  ["Coverage", "Statewide — all of Michigan"],
  ["Affiliation", "National Workers' Compensation Defense Network (NWCDN)"],
  ["Office", `${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}`],
];

const principles = [
  {
    title: "Focused",
    text: "We concentrate on workers' compensation defense. That depth shows up in how we evaluate exposure, build evidence, and try cases.",
  },
  {
    title: "Efficient",
    text: "We work to resolve claims promptly and predictably, with reasonable and fair billing that respects your budget.",
  },
  {
    title: "Connected",
    text: "Through the NWCDN, our clients have a single point of contact for consistent defense across jurisdictions.",
  },
];

const leadership = [
  "Founding Chair and founding members of the National Workers' Compensation Defense Network",
  "Authors of the CRH Michigan Workers' Compensation Desk Reference for adjusters and self-insured employers",
  "Authors of the Michigan section of the LexisNexis Larson Series Emerging Issues Analysis",
  "Argued before the Michigan Supreme Court in Smitter v Thornapple Township (2013)",
  "Fellows of the College of Workers' Compensation Lawyers",
  "Frequent lecturers for the ABA, NWCDN, and Michigan self-insurer and risk-management associations",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About CRH"
        title="Defending Michigan employers since 1977."
        intro={
          <p>
            Charfoos Reiter Hébert PC specializes in the defense of workers&rsquo; compensation and related actions. We are
            locally owned, cover the whole state, and bring more than a century of combined experience to every claim.
          </p>
        }
        crumbs={[{ label: "About CRH" }]}
      />

      <section className="py-20 md:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="space-y-5 text-lg lg:col-span-7">
            <SectionHeading eyebrow="Our firm" title="A practice built on depth, not breadth." className="mb-10" />
            <p>
              For nearly five decades, Charfoos Reiter Hébert PC has represented employers and insurance carriers in
              workers&rsquo; compensation matters across Michigan. Our attorneys understand the Workers&rsquo; Disability
              Compensation Act in detail &mdash; and the practical realities of managing claims while keeping a business
              running.
            </p>
            <p>
              We handle claims from first report through hearing and appeal, managing communications with claimants,
              insurers, and employers so our clients can focus on their operations. Our goal is always the same: a fair,
              efficient, and cost-conscious result.
            </p>
            <p>
              Members of our firm helped establish the National Workers&rsquo; Compensation Defense Network, which gives
              our clients access to carefully selected defense firms across the country when claims cross state lines.
            </p>
          </div>
          <aside className="lg:col-span-5">
            <div className="border border-black/10">
              <h2 className="border-b border-black/10 bg-light px-6 py-4 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                At a glance
              </h2>
              <dl className="divide-y divide-black/10">
                {facts.map(([k, v]) => (
                  <div key={k} className="grid grid-cols-[7.5rem_1fr] gap-4 px-6 py-4">
                    <dt className="text-sm font-semibold text-black">{k}</dt>
                    <dd className="text-[0.97rem] text-ink">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-light py-20 md:py-28">
        <div className="container-x">
          <SectionHeading eyebrow="Our approach" title="How we work with clients." />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {principles.map((p) => (
              <div key={p.title} className="border-t-2 border-navy bg-white p-8 md:p-10">
                <h3 className="text-2xl font-medium">{p.title}</h3>
                <p className="mt-4 text-muted">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Leadership in the profession"
              title="Shaping workers' compensation defense, in Michigan and nationally."
            />
          </div>
          <ul className="divide-y divide-black/10 border-y border-black/10 lg:col-span-7">
            {leadership.map((l, i) => (
              <li key={l} className="flex gap-6 py-5">
                <span aria-hidden className="font-serif text-sm font-semibold text-gray">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-[1.05rem]">{l}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-black/10 bg-light py-20 md:py-28">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow="Our team" title="Meet our attorneys." />
            <TextLink href="/about/our-team">View team profiles</TextLink>
          </div>
          <div className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((a) => (
              <TeamCard key={a.slug} a={a} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, PhoneIcon, NetworkIcon } from "@/components/icons";
import NetworkGraphic from "@/components/NetworkGraphic";
import { ServiceBody, type ServiceSection } from "@/components/ServiceLayout";
import { CtaBand, PageHero } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "National Workers' Compensation Defense Network (NWCDN)",
  description:
    "Charfoos Reiter Hébert PC is a member of the National Workers' Compensation Defense Network (NWCDN), giving Michigan employers and insurers access to vetted defense counsel nationwide.",
  alternates: { canonical: "/national-workers-compensation-defense-network" },
};

const sections: ServiceSection[] = [
  {
    id: "secure-your-defense",
    title: "Secure your workers' compensation defense with NWCDN",
    lead: (
      <>
        <p>
          Navigating the complexities of workers&rsquo; compensation defense requires experience, coordination, and
          reliable resources. As a trusted member of the National Workers&rsquo; Compensation Defense Network (NWCDN),
          Charfoos Reiter Hébert PC serves as a strategic partner for employers and insurers throughout Michigan.
        </p>
        <p>
          Our statewide practice, combined with the strength of the NWCDN, allows us to deliver comprehensive and
          consistent defense representation on every case we handle. Our professional services include:
        </p>
      </>
    ),
    items: [
      "Aggressive representation in workers' compensation claims",
      "Efficient case management and resolution",
      "Cost-effective legal strategies",
      "Statewide coverage for Michigan businesses",
      "Access to a national network of defense attorneys",
    ],
    outro: (
      <p>
        Workers&rsquo; compensation challenges can be complex and costly. Partner with a defense firm backed by a
        national network for dependable, results-driven representation.
      </p>
    ),
  },
  {
    id: "signs-you-need-nwcdn",
    title: "Signs you need NWCDN-affiliated defense",
    lead: (
      <p>
        Knowing when to engage an NWCDN-affiliated firm like Charfoos Reiter Hébert PC can be critical to protecting
        your business interests. Indicators include:
      </p>
    ),
    items: [
      "An increase in workers' compensation claims",
      "Complex cases involving multiple jurisdictions",
      "Need for consistent defense strategies across states",
      "Desire for access to nationwide best practices",
      "Concerns about rising workers' compensation costs",
      "Requirements for specialized knowledge in niche industries",
    ],
    outro: (
      <p>
        If any of these apply to your organization, working with an NWCDN member firm can provide the strategic
        support and consistency your business requires.
      </p>
    ),
  },
  {
    id: "why-nwcdn",
    title: "Why your business needs NWCDN representation",
    lead: (
      <p>
        The NWCDN offers advantages that strengthen a company&rsquo;s overall defense strategy. As a member, Charfoos
        Reiter Hébert PC delivers these benefits directly to Michigan employers and insurers:
      </p>
    ),
    items: [
      "Access to a nationwide network of defense attorneys",
      "Shared knowledge and resources across jurisdictions",
      "Consistent defense strategies for multi-state employers",
      "Up-to-date information on legislative changes and case law",
      "Reduced overall legal costs through efficient case management",
      "Improved outcomes through collaborative proficiency",
    ],
    outro: <p>With NWCDN support, your local defense counsel is backed by national strength.</p>,
  },
  {
    id: "why-crh",
    title: "Why choose Charfoos Reiter Hébert PC",
    lead: (
      <p>
        Choosing CRH means partnering with a defense firm that combines Michigan-based experience with nationwide
        resources. Our NWCDN membership enhances our ability to deliver effective, reliable representation:
      </p>
    ),
    items: [
      "Founded in 1977 with over 100 years of combined experience",
      "Cost-effective representation without compromising quality",
      "Aggressive and efficient case management",
      "Comprehensive coverage across the entire state of Michigan",
      "Reasonable and fair billing practices",
      "Access to nationwide resources through NWCDN",
    ],
    outro: <p>We are committed to delivering results-driven defense for businesses facing workers&rsquo; compensation exposure.</p>,
  },
  {
    id: "contact",
    title: "Contact us",
    lead: (
      <>
        <p>
          When workers&rsquo; compensation issues arise, experienced defense counsel can make a measurable difference.
          Charfoos Reiter Hébert PC, supported by the National Workers&rsquo; Compensation Defense Network, is prepared
          to provide the strong, efficient defense your business deserves.
        </p>
        <p>
          Protect your bottom line with a defense strategy backed by national resources and local experience.{" "}
          <Link href="/contact" className="font-semibold text-navy underline underline-offset-4">
            Contact us today
          </Link>{" "}
          to learn how our NWCDN affiliation can support your workers&rsquo; compensation defense, or{" "}
          <a href={site.nwcdnUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-navy underline underline-offset-4">
            learn more about NWCDN
          </a>
          .
        </p>
      </>
    ),
  },
];

export default function NwcdnPage() {
  return (
    <>
      <PageHero
        eyebrow="Our national affiliation"
        title={<>National Workers&rsquo; Compensation Defense Network</>}
        intro={
          <p>
            Our attorneys helped found the NWCDN. Today it gives our clients direct access to skilled workers&rsquo;
            compensation defense counsel across multiple jurisdictions &mdash; without having to research and vet
            attorneys in unfamiliar states.
          </p>
        }
        crumbs={[{ label: "NWCDN" }]}
      >
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a href={site.phoneHref} className="btn-light">
            <PhoneIcon width={18} height={18} /> {site.phone}
          </a>
          <a href={site.nwcdnUrl} target="_blank" rel="noopener noreferrer" className="btn-outline-light">
            Visit NWCDN.com <ArrowRight width={18} height={18} />
          </a>
        </div>
      </PageHero>

      {/* Founders strip */}
      <section className="border-b border-black/10 bg-light">
        <div className="container-x grid items-center gap-10 py-14 md:grid-cols-12 md:py-16">
          <div className="md:col-span-7">
            <p className="eyebrow mb-4 text-navy">Founding leadership</p>
            <p className="font-serif text-2xl font-medium leading-snug text-black md:text-[1.9rem]">
              James A. Reiter served as the NWCDN&rsquo;s Founding Chair, and Danial J. Hébert is a founding member and
              former Chair of its Program Advisory Committee.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
              <Link href="/about/our-team/james-a-reiter" className="inline-flex items-center gap-2 font-semibold text-navy hover:underline underline-offset-4">
                James A. Reiter <ArrowRight width={16} height={16} />
              </Link>
              <Link href="/about/our-team/danial-j-hebert" className="inline-flex items-center gap-2 font-semibold text-navy hover:underline underline-offset-4">
                Danial J. Hébert <ArrowRight width={16} height={16} />
              </Link>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="bg-navy p-6 text-white">
              <NetworkGraphic className="w-full text-white" />
              <p className="mt-2 flex items-center gap-2 text-sm text-white/80">
                <NetworkIcon width={16} height={16} /> One call coordinates counsel across jurisdictions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ServiceBody sections={sections} />
      <CtaBand title="Defending claims in more than one state?" text="One call connects you with CRH in Michigan and vetted NWCDN defense counsel wherever your business operates." />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { PhoneIcon, ArrowRight } from "@/components/icons";
import { ServiceBody, type ServiceSection } from "@/components/ServiceLayout";
import { CtaBand, PageHero } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Workers' Compensation Defense Lawyer in Michigan",
  description:
    "Experienced Michigan workers' compensation defense lawyers protecting employers and insurance carriers since 1977. Aggressive, efficient, cost-effective representation statewide.",
  alternates: { canonical: "/workers-compensation-lawyer" },
};

const sections: ServiceSection[] = [
  {
    id: "secure-your-defense",
    title: "Secure your workers' compensation defense",
    lead: (
      <>
        <p>
          When workplace injury claims arise, Charfoos Reiter Hébert PC provides experienced guidance through the
          complexities of workers&rsquo; compensation law. Serving clients throughout Michigan, our firm focuses on
          protecting the interests of employers and insurers in workers&rsquo; compensation matters.
        </p>
        <p>
          Founded in 1977, with more than 100 years of combined experience, we deliver aggressive and efficient defense
          representation tailored to the specific needs of each case. Our services include:
        </p>
      </>
    ),
    items: [
      "Workers' compensation defense",
      "Aggressive claim representation",
      "Efficient case management",
      "Statewide coverage",
      "Cost-effective legal solutions",
    ],
    outro: (
      <p>
        Workers&rsquo; compensation claims can pose significant operational and financial challenges. Partner with
        experienced defense counsel focused on protecting your interests.
      </p>
    ),
  },
  {
    id: "when-you-need-counsel",
    title: "Recognizing when you need a defense lawyer",
    lead: (
      <p>
        Managing workers&rsquo; compensation exposure requires careful legal oversight. Consider engaging defense counsel
        when your organization is facing:
      </p>
    ),
    items: [
      "A claim you believe is not work-related or is overstated",
      "Disputes over the nature or extent of a claimed injury",
      "Questions about ongoing wage-loss or medical benefits",
      "Return-to-work and favored-work disputes",
      "Allegations of retaliation connected to a claim",
      "Complex cases involving multiple parties or carriers",
      "Contested disability or wage-earning-capacity findings",
    ],
    outro: (
      <p>
        Timely legal guidance limits risk and ensures claims are handled appropriately. Our team is prepared to evaluate
        your situation and develop a sound defense strategy.
      </p>
    ),
  },
  {
    id: "importance-of-representation",
    title: "The importance of experienced defense counsel",
    lead: (
      <p>
        Experienced legal representation plays a critical role in the effective defense of workers&rsquo; compensation
        claims. Defense counsel provides value through:
      </p>
    ),
    items: [
      "Specialized knowledge of Michigan workers' compensation law",
      "Accurate evaluation of claim exposure",
      "Careful scrutiny of claimant evidence and tactics",
      "Management of complex paperwork and deadlines",
      "Representation at hearings and on appeal",
      "Negotiation of fair, cost-effective resolutions",
      "Access to independent medical and vocational expertise",
    ],
    outro: (
      <p>
        Effective defense helps control costs, manage risk, and achieve timely outcomes. Let Charfoos Reiter Hébert PC
        put our experience to work protecting your organization.
      </p>
    ),
  },
  {
    id: "why-crh",
    title: "Why choose Charfoos Reiter Hébert PC",
    lead: (
      <p>
        Charfoos Reiter Hébert PC is a trusted choice for workers&rsquo; compensation defense in Michigan. Our commitment
        to clients is reflected in every aspect of our practice:
      </p>
    ),
    items: [
      "Over four decades of legal experience",
      "Comprehensive statewide coverage",
      "Cost-effective representation",
      "Aggressive and efficient case handling",
      "Fair and transparent billing practices",
      "Personalized attention to each case",
      "Proven track record of successful outcomes",
    ],
    outro: <p>We are dedicated to protecting our clients&rsquo; business interests through skilled, strategic advocacy.</p>,
  },
  {
    id: "contact",
    title: "Contact us",
    lead: (
      <>
        <p>
          Workers&rsquo; compensation claims can have a lasting impact on your business. Our attorneys are ready to
          assess your case and develop a defense strategy aligned with your goals.
        </p>
        <p>
          Take the next step toward protecting your organization.{" "}
          <Link href="/contact" className="font-semibold text-navy underline underline-offset-4">
            Contact us today
          </Link>{" "}
          to learn how we can support your workers&rsquo; compensation defense needs.
        </p>
      </>
    ),
  },
];

export default function WorkersCompLawyerPage() {
  return (
    <>
      <PageHero
        eyebrow="Michigan workers' compensation defense"
        title={<>Workers&rsquo; Compensation Lawyer</>}
        intro={
          <p>
            We manage communications with claimants, insurers, and employers, and work to ensure claims are handled
            efficiently, fairly, and in compliance with Michigan law.
          </p>
        }
        crumbs={[{ label: "Workers' Compensation Lawyer" }]}
      >
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a href={site.phoneHref} className="btn-light">
            <PhoneIcon width={18} height={18} /> {site.phone}
          </a>
          <Link href="/contact" className="btn-outline-light">
            Discuss your claim <ArrowRight width={18} height={18} />
          </Link>
        </div>
      </PageHero>
      <ServiceBody sections={sections} />
      <CtaBand />
    </>
  );
}

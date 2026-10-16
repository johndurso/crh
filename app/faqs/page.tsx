import type { Metadata } from "next";
import { FaqList } from "@/components/cards";
import { PhoneIcon } from "@/components/icons";
import { CtaBand, PageHero, TextLink } from "@/components/ui";
import { faqs } from "@/lib/faqs";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Answers to common questions about working with Charfoos Reiter Hébert PC on Michigan and multi-state workers' compensation defense.",
  alternates: { canonical: "/faqs" },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a.join(" ") },
  })),
};

export default function FaqsPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQs"
        title="Frequently asked questions"
        intro={<p>How we work, who we represent, and how our NWCDN affiliation supports multi-state employers.</p>}
        crumbs={[{ label: "FAQs" }]}
      />
      <section className="py-16 md:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <FaqList items={faqs} />
          </div>
          <aside className="lg:col-span-4">
            <div className="bg-light p-8 lg:sticky lg:top-28">
              <h2 className="font-serif text-2xl font-medium">Have a question that isn&rsquo;t answered here?</h2>
              <p className="mt-3 text-muted">Our attorneys are available by phone and email.</p>
              <a href={site.phoneHref} className="btn-primary mt-6 w-full">
                <PhoneIcon width={18} height={18} /> {site.phone}
              </a>
              <div className="mt-5">
                <TextLink href="/contact">Send us a message</TextLink>
              </div>
            </div>
          </aside>
        </div>
      </section>
      <CtaBand />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </>
  );
}

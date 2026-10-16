import type { Metadata } from "next";
import { MapPin, PhoneIcon, ShieldIcon } from "@/components/icons";
import { PageHero } from "@/components/ui";
import { site } from "@/lib/site";
import { team } from "@/lib/team";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Charfoos Reiter Hébert PC in Farmington Hills, MI about workers' compensation defense. Call (248) 626-7300 or send a message.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    `${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}`,
  )}&z=15&output=embed`;

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your claim."
        intro={<p>Call our Farmington Hills office or send a message, and an attorney will respond promptly.</p>}
        crumbs={[{ label: "Contact" }]}
      />

      <section className="py-16 md:py-24">
        <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-medium">Send a message</h2>
            <p className="mt-3 mb-10 text-muted">Fields marked * are required.</p>
            <ContactForm />
          </div>

          <aside className="space-y-6 lg:col-span-5">
            <div className="on-dark bg-navy p-8 text-white md:p-10">
              <h2 className="font-serif text-2xl font-medium text-white">{site.name}</h2>
              <address className="mt-6 space-y-5 not-italic">
                <a href={site.phoneHref} className="flex items-center gap-4 text-xl font-semibold hover:underline underline-offset-4">
                  <PhoneIcon className="shrink-0" /> {site.phone}
                </a>
                <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex gap-4 text-white/90 hover:text-white">
                  <MapPin className="mt-1 shrink-0" />
                  <span>
                    {site.address.street}
                    <br />
                    {site.address.city}, {site.address.state} {site.address.zip}
                    <span className="mt-1 block text-sm font-semibold underline underline-offset-4">Get directions</span>
                  </span>
                </a>
              </address>
              <p className="mt-6 border-t border-white/15 pt-6 text-sm text-white/75">
                Serving employers and insurers throughout Michigan, with NWCDN counsel available nationwide.
              </p>
            </div>

            <div className="border border-black/10 p-8">
              <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-muted">Attorney direct lines</h2>
              <ul className="mt-5 divide-y divide-black/10">
                {team.map((a) => (
                  <li key={a.slug} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-3">
                    <span className="font-serif text-lg font-medium text-black">{a.name}</span>
                    <a href={`tel:+1${a.directDial.replace(/\D/g, "")}`} className="text-[0.95rem] text-navy hover:underline underline-offset-4">
                      {a.directDial}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-4 bg-light p-6 text-[0.95rem]">
              <ShieldIcon className="shrink-0 text-navy" width={28} height={28} strokeWidth={1.3} />
              <p>
                <strong className="text-black">Claim in another state?</strong> Ask about coordinated counsel through the
                National Workers&rsquo; Compensation Defense Network.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section aria-label="Office location map" className="h-[22rem] bg-light md:h-[28rem]">
        <iframe
          title="Map to Charfoos Reiter Hébert PC"
          src={mapSrc}
          className="size-full border-0 grayscale-[30%]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}

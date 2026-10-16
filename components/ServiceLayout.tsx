import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/lib/site";
import { ArrowRight, MapPin, PhoneIcon, ShieldIcon } from "./icons";
import { CheckList } from "./ui";

export type ServiceSection = {
  id: string;
  title: string;
  lead?: ReactNode;
  items?: string[];
  outro?: ReactNode;
};

export function ServiceBody({ sections, aside }: { sections: ServiceSection[]; aside?: ReactNode }) {
  return (
    <div className="container-x grid gap-14 py-16 md:py-24 lg:grid-cols-12 lg:gap-16">
      <div className="lg:col-span-8">
        {/* In-page nav */}
        <nav aria-label="On this page" className="mb-12 border-l-2 border-navy bg-light p-6">
          <p className="mb-3 text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-muted">On this page</p>
          <ol className="grid gap-2 sm:grid-cols-2">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="text-[0.95rem] font-medium text-navy hover:underline underline-offset-4">
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="space-y-16">
          {sections.map((s) => (
            <section key={s.id} id={s.id} aria-labelledby={`${s.id}-h`}>
              <h2 id={`${s.id}-h`} className="text-[1.75rem] font-medium md:text-[2.1rem]">
                {s.title}
              </h2>
              {s.lead && <div className="mt-5 space-y-4 text-[1.06rem]">{s.lead}</div>}
              {s.items && (
                <div className="mt-7 border border-black/10 p-6 md:p-8">
                  <CheckList items={s.items} columns={s.items.length > 5 ? 2 : 1} />
                </div>
              )}
              {s.outro && <div className="mt-6 space-y-4 text-[1.06rem]">{s.outro}</div>}
            </section>
          ))}
        </div>
      </div>

      <aside className="lg:col-span-4">
        <div className="space-y-6 lg:sticky lg:top-28">
          <div className="bg-navy p-8 text-white on-dark">
            <h2 className="font-serif text-2xl font-medium text-white">Speak with a defense attorney</h2>
            <p className="mt-3 text-white/80">Call our Farmington Hills office or send a message about your claim.</p>
            <a href={site.phoneHref} className="btn-light mt-6 w-full">
              <PhoneIcon width={18} height={18} /> {site.phone}
            </a>
            <Link href="/contact" className="btn-outline-light mt-3 w-full">
              Send a message <ArrowRight width={18} height={18} />
            </Link>
            <p className="mt-6 flex gap-2 text-sm text-white/70">
              <MapPin className="mt-0.5 shrink-0" width={16} height={16} />
              {site.address.street}, {site.address.city}, {site.address.state} {site.address.zip}
            </p>
          </div>
          {aside ?? (
            <Link
              href="/national-workers-compensation-defense-network"
              className="group flex gap-4 border border-black/10 p-6 transition-colors hover:border-navy"
            >
              <ShieldIcon className="shrink-0 text-navy" width={32} height={32} strokeWidth={1.3} />
              <span>
                <strong className="block font-serif text-lg font-medium text-black group-hover:text-navy">NWCDN member firm</strong>
                <span className="text-[0.95rem] text-muted">Vetted defense counsel for claims outside Michigan.</span>
              </span>
            </Link>
          )}
        </div>
      </aside>
    </div>
  );
}

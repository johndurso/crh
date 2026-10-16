import Image from "next/image";
import Link from "next/link";
import { logoUrl, nav, site } from "@/lib/site";
import { MapPin, PhoneIcon, ShieldIcon } from "./icons";

export default function Footer() {
  const year = new Date().getFullYear();
  const linkList = nav.flatMap((n) =>
    n.children ? [{ label: n.label, href: n.href }, ...n.children.filter((c) => c.href !== n.href)] : [n],
  );

  return (
    <footer className="on-dark bg-black text-white/80">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Link href="/" className="inline-block rounded-sm bg-white p-3">
            <Image src={logoUrl} alt={site.name} width={240} height={96} className="h-12 w-auto" sizes="160px" />
          </Link>
          <p className="mt-6 max-w-sm text-[0.95rem] leading-relaxed">
            Workers&rsquo; compensation defense for Michigan employers, self-insureds, and insurance carriers since {site.founded}.
          </p>
        </div>

        <div className="lg:col-span-3">
          <h2 className="mb-5 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-white">Visit</h2>
          <address className="not-italic">
            <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex gap-3 hover:text-white">
              <MapPin className="mt-1 shrink-0" width={18} height={18} />
              <span>
                {site.address.street}
                <br />
                {site.address.city}, {site.address.state} {site.address.zip}
              </span>
            </a>
            <a href={site.phoneHref} className="mt-4 flex items-center gap-3 font-semibold text-white hover:underline underline-offset-4">
              <PhoneIcon width={18} height={18} />
              {site.phone}
            </a>
          </address>
          <p className="mt-4 text-sm text-white/60">Serving employers throughout Michigan.</p>
        </div>

        <nav aria-label="Footer" className="lg:col-span-2">
          <h2 className="mb-5 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-white">Explore</h2>
          <ul className="space-y-2 text-[0.95rem]">
            {linkList.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white hover:underline underline-offset-4">{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <h2 className="mb-5 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-white">Affiliation</h2>
          <a
            href={site.nwcdnUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-4 rounded-sm border border-white/15 p-5 transition-colors hover:border-white/40"
          >
            <ShieldIcon className="shrink-0 text-white" width={32} height={32} strokeWidth={1.3} />
            <span className="text-[0.92rem] leading-relaxed">
              <strong className="block font-serif text-base font-medium text-white">
                National Workers&rsquo; Compensation Defense Network
              </strong>
              Member firm. Access to vetted defense counsel nationwide.
            </span>
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-3 py-6 text-[0.8rem] text-white/60 md:flex-row md:items-center md:justify-between">
          <p>&copy; {year} {site.name}. All rights reserved.</p>
          <p className="max-w-2xl md:text-right">
            Attorney advertising. The information on this website is for general information purposes only and does not
            create an attorney-client relationship.
          </p>
        </div>
      </div>
    </footer>
  );
}

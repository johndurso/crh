import Image from "next/image";
import Link from "next/link";
import { logoUrl, site } from "@/lib/site";
import { ArrowRight, PhoneIcon, ShieldIcon } from "./icons";
import SiteNav from "./SiteNav";

/** Site-wide NWCDN affiliation bar — first thing on every page, per client request. */
function NwcdnBar() {
  return (
    <div className="on-dark bg-navy-900 text-white">
      <div className="container-x flex min-h-11 items-center justify-between gap-4 py-2 text-[0.84rem] leading-snug">
        <Link
          href="/national-workers-compensation-defense-network"
          className="group flex items-center gap-3"
        >
          <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-white/40 bg-white/10">
            <ShieldIcon width={16} height={16} />
          </span>
          <span>
            <span className="font-semibold tracking-wide">NWCDN Member Firm</span>
            <span className="hidden text-white/80 sm:inline">
              {" "}
              &middot; Our attorneys helped found the National Workers&rsquo; Compensation Defense Network
            </span>
            <span className="ml-1.5 inline-flex translate-y-[2px] items-center text-white/80 transition-transform group-hover:translate-x-0.5 sm:hidden">
              <ArrowRight width={14} height={14} />
            </span>
          </span>
        </Link>
        <a
          href={site.nwcdnUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden shrink-0 items-center gap-1.5 font-medium text-white/90 underline-offset-4 hover:text-white hover:underline md:inline-flex"
        >
          Defense counsel in every state
          <ArrowRight width={14} height={14} />
        </a>
      </div>
    </div>
  );
}

export default function Header() {
  return (
    <>
      <NwcdnBar />
      <header className="sticky top-0 z-40 border-b border-black/10 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
        <div className="container-x flex h-20 items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <Link href="/" className="shrink-0" aria-label={`${site.name} — home`}>
              <Image
                src={logoUrl}
                alt={site.name}
                width={240}
                height={96}
                priority
                className="h-12 w-auto md:h-14"
                sizes="200px"
              />
            </Link>
            <Link
              href="/national-workers-compensation-defense-network"
              className="hidden items-center gap-2.5 border-l border-black/15 pl-5 text-navy 2xl:flex"
            >
              <ShieldIcon width={28} height={28} strokeWidth={1.4} />
              <span className="text-[0.72rem] font-semibold uppercase leading-tight tracking-[0.14em]">
                Member
                <br />
                <span className="text-black">NWCDN</span>
              </span>
            </Link>
          </div>
          <SiteNav />
          <a href={site.phoneHref} className="btn-primary hidden min-h-11! px-5! xl:inline-flex">
            <PhoneIcon width={17} height={17} />
            {site.phone}
          </a>
        </div>
      </header>
    </>
  );
}

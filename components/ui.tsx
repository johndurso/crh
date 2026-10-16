import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/lib/site";
import { ArrowRight, CheckIcon, PhoneIcon } from "./icons";

export type Crumb = { label: string; href?: string };

export function PageHero({
  eyebrow,
  title,
  intro,
  crumbs,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  crumbs: Crumb[];
  children?: ReactNode;
}) {
  return (
    <section className="on-dark relative overflow-hidden bg-navy text-white">
      <HeroTexture />
      <div className="container-x relative py-14 md:py-20">
        <nav aria-label="Breadcrumb" className="mb-8 text-[0.82rem] text-white/75">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <li>
              <Link href="/" className="hover:text-white hover:underline underline-offset-4">Home</Link>
            </li>
            {crumbs.map((c) => (
              <li key={c.label} className="flex items-center gap-2">
                <span aria-hidden>/</span>
                {c.href ? (
                  <Link href={c.href} className="hover:text-white hover:underline underline-offset-4">{c.label}</Link>
                ) : (
                  <span aria-current="page" className="text-white">{c.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        {eyebrow && <p className="eyebrow mb-5 text-white/85">{eyebrow}</p>}
        <h1 className="max-w-4xl text-[2.25rem] font-medium text-white sm:text-5xl md:text-[3.5rem]">{title}</h1>
        {intro && <div className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">{intro}</div>}
        {children}
      </div>
    </section>
  );
}

/** Fine-line architectural texture for navy bands — pure CSS/SVG, zero image weight. */
export function HeroTexture() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse at 85% 30%, #000 0%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at 85% 30%, #000 0%, transparent 70%)",
        }}
      />
      <div className="absolute -right-40 -top-40 size-[34rem] rounded-full border border-white/10" />
      <div className="absolute -right-24 -top-24 size-[26rem] rounded-full border border-white/10" />
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={`${align === "center" ? "mx-auto text-center" : ""} max-w-3xl ${className}`}>
      {eyebrow && <p className={`eyebrow mb-4 text-navy ${align === "center" ? "justify-center" : ""}`}>{eyebrow}</p>}
      <h2 className="text-3xl font-medium md:text-[2.6rem]">{title}</h2>
      {intro && <p className="mt-5 text-lg text-muted">{intro}</p>}
    </div>
  );
}

export function CheckList({ items, columns = 1, dark = false }: { items: string[]; columns?: 1 | 2; dark?: boolean }) {
  return (
    <ul className={`grid gap-x-8 gap-y-3 ${columns === 2 ? "sm:grid-cols-2" : ""}`}>
      {items.map((i) => (
        <li key={i} className="flex gap-3">
          <span
            className={`mt-[0.3rem] flex size-5 shrink-0 items-center justify-center rounded-full ${
              dark ? "bg-white text-navy" : "bg-navy text-white"
            }`}
          >
            <CheckIcon width={12} height={12} strokeWidth={2.4} />
          </span>
          <span>{i}</span>
        </li>
      ))}
    </ul>
  );
}

export function CtaBand({
  title = "Facing a workers' compensation claim?",
  text = "Talk with an experienced Michigan defense attorney about your claim, your exposure, and the most efficient path to resolution.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="on-dark relative overflow-hidden bg-navy-900 text-white">
      <HeroTexture />
      <div className="container-x relative flex flex-col gap-10 py-16 md:py-20 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-medium text-white md:text-4xl">{title}</h2>
          <p className="mt-4 text-lg text-white/80">{text}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
          <a href={site.phoneHref} className="btn-light">
            <PhoneIcon width={18} height={18} /> {site.phone}
          </a>
          <Link href="/contact" className="btn-outline-light">
            Send a message <ArrowRight width={18} height={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function TextLink({ href, children, external }: { href: string; children: ReactNode; external?: boolean }) {
  const cls = "group inline-flex items-center gap-2 font-semibold text-navy";
  const inner = (
    <>
      <span className="underline decoration-navy/30 underline-offset-[6px] transition-colors group-hover:decoration-navy">{children}</span>
      <ArrowRight width={16} height={16} className="transition-transform group-hover:translate-x-1" />
    </>
  );
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{inner}</a>
  ) : (
    <Link href={href} className={cls}>{inner}</Link>
  );
}

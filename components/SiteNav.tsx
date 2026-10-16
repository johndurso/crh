"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site, type NavItem } from "@/lib/site";
import { ArrowRight, ChevronDown, CloseIcon, MenuIcon, PhoneIcon, ShieldIcon } from "./icons";

function isActive(pathname: string, item: NavItem) {
  if (item.href === "/") return pathname === "/";
  return pathname === item.href || pathname.startsWith(`${item.href}/`);
}

export default function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu on navigation.
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Desktop */}
      <nav aria-label="Main" className="hidden xl:block">
        <ul className="flex items-center gap-1">
          {nav.map((item) => {
            const active = isActive(pathname, item);
            const linkCls = `relative flex items-center gap-1 px-3 py-2 text-[0.92rem] font-medium transition-colors hover:text-navy ${
              active ? "text-navy" : "text-black"
            }`;
            const underline = (
              <span
                aria-hidden
                className={`absolute inset-x-3 -bottom-0.5 h-0.5 origin-left bg-navy transition-transform duration-200 ${
                  active ? "scale-x-100" : "scale-x-0 group-hover/link:scale-x-100"
                }`}
              />
            );
            if (!item.children) {
              return (
                <li key={item.href}>
                  <Link href={item.href} className={`group/link ${linkCls}`} aria-current={pathname === item.href ? "page" : undefined}>
                    {item.label}
                    {underline}
                  </Link>
                </li>
              );
            }
            return (
              <li key={item.href} className="group relative">
                <Link href={item.href} className={`group/link ${linkCls}`} aria-haspopup="true">
                  {item.label}
                  <ChevronDown width={14} height={14} className="transition-transform group-hover:rotate-180 group-focus-within:rotate-180" />
                  {underline}
                </Link>
                <div className="invisible absolute left-0 top-full pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <ul className="min-w-52 border border-black/10 border-t-2 border-t-navy bg-white py-2 shadow-xl shadow-black/10">
                    {item.children.map((c) => (
                      <li key={c.href}>
                        <Link
                          href={c.href}
                          aria-current={pathname === c.href ? "page" : undefined}
                          className={`block px-5 py-2.5 text-[0.92rem] hover:bg-light hover:text-navy ${
                            pathname === c.href ? "font-semibold text-navy" : ""
                          }`}
                        >
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Mobile / tablet controls */}
      <div className="flex items-center gap-2 xl:hidden">
        <a
          href={site.phoneHref}
          className="flex size-11 items-center justify-center rounded-sm border border-navy/25 text-navy hover:bg-light"
          aria-label={`Call ${site.phone}`}
        >
          <PhoneIcon />
        </a>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="flex size-11 items-center justify-center rounded-sm bg-navy text-white"
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="absolute inset-x-0 top-full z-50 h-[calc(100dvh-5rem)] overflow-y-auto border-t border-black/10 bg-white pb-16 xl:hidden"
      >
        <nav aria-label="Mobile" className="container-x py-6">
          <ul className="divide-y divide-black/10 border-y border-black/10">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center justify-between py-4 font-serif text-xl ${
                    isActive(pathname, item) ? "text-navy" : "text-black"
                  }`}
                >
                  {item.label}
                  <ArrowRight width={18} height={18} className="text-gray" />
                </Link>
                {item.children && (
                  <ul className="-mt-1 pb-4 pl-4">
                    {item.children
                      .filter((c) => c.href !== item.href)
                      .map((c) => (
                        <li key={c.href}>
                          <Link href={c.href} className="block py-2 text-[1rem] text-ink hover:text-navy">
                            &mdash;&ensp;{c.label}
                          </Link>
                        </li>
                      ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <a href={site.phoneHref} className="btn-primary mt-8 w-full">
            <PhoneIcon width={18} height={18} /> Call {site.phone}
          </a>
          <Link
            href="/national-workers-compensation-defense-network"
            className="mt-4 flex items-center gap-3 rounded-sm bg-light p-4 text-sm"
          >
            <ShieldIcon className="shrink-0 text-navy" />
            <span>
              <strong className="block text-black">NWCDN Member Firm</strong>
              Coordinated defense counsel nationwide
            </span>
          </Link>
        </nav>
      </div>
    </>
  );
}

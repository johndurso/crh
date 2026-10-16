import Link from "next/link";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="container-x py-24 md:py-32">
      <p className="eyebrow mb-5 text-navy">Error 404</p>
      <h1 className="max-w-2xl text-4xl font-medium md:text-5xl">We couldn&rsquo;t find that page.</h1>
      <p className="mt-5 max-w-xl text-lg text-muted">
        It may have moved during our website update. Try one of the links below, or call us at {site.phone}.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/" className="btn-primary">Back to home</Link>
        <Link href="/contact" className="btn-outline">Contact us</Link>
      </div>
    </section>
  );
}

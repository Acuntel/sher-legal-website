import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-emerald-950 text-canvas">
      <div className="container-x grid gap-10 py-16 sm:gap-12 md:grid-cols-12 md:gap-16 md:py-24">
        <div className="md:col-span-5">
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-3xl font-light tracking-tight">
              Sher
            </span>
            <span className="text-xs font-medium uppercase tracking-eyebrow text-emerald-300">
              LLP
            </span>
          </div>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-canvas/65">
            {site.description}
          </p>
          <div className="mt-10 text-xs uppercase tracking-eyebrow text-emerald-300">
            Established {site.founded}
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="text-xs font-medium uppercase tracking-eyebrow text-emerald-300">
            Office
          </div>
          <address className="mt-5 not-italic text-sm leading-relaxed text-canvas/85">
            {site.address.line1}
            <br />
            {site.address.line2}
            <br />
            {site.address.city}, {site.address.state} {site.address.zip}
          </address>
          <ul className="mt-6 space-y-2 text-sm text-canvas/85">
            <li>
              <a
                className="transition hover:text-canvas"
                href={`tel:${site.phoneTel}`}
              >
                {site.phone}
              </a>
            </li>
            <li>
              <a
                className="transition hover:text-canvas"
                href={`mailto:${site.email}`}
              >
                {site.email}
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <div className="text-xs font-medium uppercase tracking-eyebrow text-emerald-300">
            Firm
          </div>
          <ul className="mt-5 space-y-3 text-sm text-canvas/85">
            <li>
              <Link href="/about" className="transition hover:text-canvas">
                About
              </Link>
            </li>
            <li>
              <Link href="/people" className="transition hover:text-canvas">
                People
              </Link>
            </li>
            <li>
              <Link
                href="/practice-areas"
                className="transition hover:text-canvas"
              >
                Practice Areas
              </Link>
            </li>
            <li>
              <Link href="/contact" className="transition hover:text-canvas">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-canvas/10">
        <div className="container-x flex flex-col items-start justify-between gap-4 py-6 text-xs text-canvas/45 md:flex-row md:items-center">
          <div>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </div>
          <div className="max-w-2xl text-canvas/40">
            Attorney advertising. Prior results do not guarantee a similar
            outcome. The information on this site is not legal advice.
          </div>
        </div>
      </div>
    </footer>
  );
}

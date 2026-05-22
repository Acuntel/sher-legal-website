import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="container-x grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="font-serif text-2xl tracking-tight">
            Sher<span className="text-gold-500">,</span> LLP
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
            {site.description}
          </p>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-400">
            Office
          </div>
          <address className="mt-4 not-italic text-sm leading-relaxed text-white/80">
            {site.address.line1}
            <br />
            {site.address.line2}
            <br />
            {site.address.city}, {site.address.state} {site.address.zip}
          </address>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-400">
            Contact
          </div>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>
              <a className="hover:text-gold-300" href={`tel:${site.phoneTel}`}>
                {site.phone}
              </a>
            </li>
            <li>
              <a className="hover:text-gold-300" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </li>
            <li className="pt-2 text-white/60">{site.hours}</li>
          </ul>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-400">
            Firm
          </div>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>
              <Link href="/about" className="hover:text-gold-300">
                About
              </Link>
            </li>
            <li>
              <Link href="/people" className="hover:text-gold-300">
                People
              </Link>
            </li>
            <li>
              <Link href="/practice-areas" className="hover:text-gold-300">
                Practice Areas
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gold-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-start justify-between gap-4 py-6 text-xs text-white/50 md:flex-row md:items-center">
          <div>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </div>
          <div className="max-w-xl text-white/40">
            Attorney advertising. Prior results do not guarantee a similar
            outcome. The information on this site is not, nor is it intended to
            be, legal advice.
          </div>
        </div>
      </div>
    </footer>
  );
}

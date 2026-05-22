import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import Reveal from "@/components/Reveal";
import { attorneys } from "@/lib/site";

export const metadata: Metadata = {
  title: "People",
  description:
    "Meet the attorneys and staff of Sher, LLP — a senior-led boutique transactional team focused on healthcare facility transactions, HUD loans, and commercial real estate.",
};

const partners = attorneys.filter((a) => a.isPartner || a.title === "Founder");
const associates = attorneys.filter(
  (a) => a.title.includes("Associate") || a.title === "Of Counsel",
);
const staff = attorneys.filter((a) => a.title.includes("Paralegal"));

function Card({
  a,
  large = false,
}: {
  a: (typeof attorneys)[number];
  large?: boolean;
}) {
  return (
    <article className="group h-full border border-navy-100 bg-white transition hover:border-gold-400 hover:shadow-xl">
      <div
        className={`relative w-full bg-gradient-to-br from-navy-100 to-navy-50 ${
          large ? "aspect-[4/5]" : "aspect-[3/4]"
        }`}
      >
        <div className="absolute inset-0 flex items-center justify-center font-serif text-5xl text-navy-300/60">
          {a.name
            .split(" ")
            .map((s) => s[0])
            .join("")
            .slice(0, 3)}
        </div>
      </div>
      <div className="p-8">
        <h3 className="font-serif text-2xl text-navy-950">{a.name}</h3>
        <div className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-gold-600">
          {a.title}
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {a.focus.slice(0, 3).map((f) => (
            <span
              key={f}
              className="rounded-sm bg-navy-50 px-3 py-1 text-[11px] uppercase tracking-wider text-navy-700"
            >
              {f}
            </span>
          ))}
        </div>
        <div className="mt-6 space-y-2 text-sm text-navy-700">
          <a
            href={`tel:${a.phoneTel}`}
            className="flex items-center gap-2 transition hover:text-gold-600"
          >
            <Phone className="h-3.5 w-3.5" strokeWidth={1.6} /> {a.phone}
          </a>
          <a
            href={`mailto:${a.email}`}
            className="flex items-center gap-2 transition hover:text-gold-600"
          >
            <Mail className="h-3.5 w-3.5" strokeWidth={1.6} /> {a.email}
          </a>
        </div>
      </div>
    </article>
  );
}

export default function PeoplePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy-950 pb-24 pt-44 text-white">
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800"
          aria-hidden
        />
        <div
          className="absolute -right-32 top-1/3 -z-10 h-[480px] w-[480px] rounded-full bg-gold-500/10 blur-[120px]"
          aria-hidden
        />
        <div className="container-x">
          <Reveal>
            <div className="eyebrow text-gold-400">Our People</div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.05] tracking-tight md:text-6xl">
              The team you'll actually work with.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-white/80">
              Sher, LLP is intentionally senior-heavy. Every engagement is
              partner-led, and our attorneys and staff have been working
              together on closings for years.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="attorneys" className="bg-white py-28">
        <div className="container-x">
          <Reveal>
            <div className="flex items-baseline justify-between border-b border-navy-100 pb-6">
              <h2 className="heading-section">Partners</h2>
              <div className="text-xs uppercase tracking-[0.2em] text-navy-600">
                {partners.length} attorneys
              </div>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {partners.map((a, i) => (
              <Reveal key={a.slug} delay={i * 0.06}>
                <Card a={a} />
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-24 flex items-baseline justify-between border-b border-navy-100 pb-6">
              <h2 className="heading-section">Counsel & Associates</h2>
              <div className="text-xs uppercase tracking-[0.2em] text-navy-600">
                {associates.length} attorneys
              </div>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {associates.map((a, i) => (
              <Reveal key={a.slug} delay={i * 0.06}>
                <Card a={a} />
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div
              id="staff"
              className="mt-24 flex items-baseline justify-between border-b border-navy-100 pb-6"
            >
              <h2 className="heading-section">Staff</h2>
              <div className="text-xs uppercase tracking-[0.2em] text-navy-600">
                {staff.length} member
              </div>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {staff.map((a, i) => (
              <Reveal key={a.slug} delay={i * 0.06}>
                <Card a={a} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-50/40 py-24">
        <div className="container-x">
          <Reveal>
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <div className="eyebrow">Talk to a partner</div>
                <h2 className="heading-section mt-4">
                  Every engagement starts with a partner on the phone.
                </h2>
              </div>
              <div className="flex flex-wrap gap-4 lg:justify-end">
                <Link href="/contact" className="btn-primary">
                  Inquire about a deal
                </Link>
                <Link href="/practice-areas" className="btn-secondary">
                  Practice areas
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

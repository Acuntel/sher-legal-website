import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import Reveal from "@/components/Reveal";
import HeroBackground from "@/components/HeroBackground";
import { attorneys, imagery, type Attorney } from "@/lib/site";

export const metadata: Metadata = {
  title: "People",
  description:
    "Meet the attorneys and staff of Sher, LLP, a senior-led boutique transactional team focused on healthcare facility transactions, HUD loans, and commercial real estate.",
};

const partners = attorneys.filter((a) => a.isPartner || a.title === "Founder");
const associates = attorneys.filter(
  (a) => a.title.includes("Associate") || a.title === "Of Counsel",
);
const staff = attorneys.filter((a) => a.title.includes("Paralegal"));

function PersonCard({ a }: { a: Attorney }) {
  return (
    <article className="group">
      <div className="relative aspect-[4/5] overflow-hidden bg-emerald-100">
        <Image
          src={a.imageSrc}
          alt={a.name}
          fill
          sizes="(min-width: 1024px) 24vw, (min-width: 640px) 45vw, 90vw"
          className="object-cover grayscale transition duration-700 group-hover:grayscale-0"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-emerald-950/35 to-transparent opacity-0 transition group-hover:opacity-100" />
      </div>
      <div className="mt-5 sm:mt-7">
        <h3 className="font-serif text-lg font-light leading-tight text-ink-900 sm:text-xl md:text-2xl">
          {a.name}
        </h3>
        <div className="mt-1.5 text-[10px] font-medium uppercase tracking-eyebrow text-emerald-700 sm:text-[11px]">
          {a.title}
        </div>
        <div className="mt-4 space-y-1 text-[12px] text-ink-700 sm:mt-6 sm:space-y-1.5 sm:text-[13px]">
          {a.focus.slice(0, 3).map((f) => (
            <div key={f}>{f}</div>
          ))}
        </div>
        <div className="mt-5 flex flex-col gap-2 text-[12px] text-ink-700 sm:mt-7 sm:text-[13px]">
          <a
            href={`tel:${a.phoneTel}`}
            className="inline-flex min-h-[28px] items-center gap-3 transition hover:text-emerald-800"
          >
            <Phone className="h-3.5 w-3.5 flex-shrink-0" strokeWidth={1.6} />
            <span className="truncate">{a.phone}</span>
          </a>
          <a
            href={`mailto:${a.email}`}
            className="inline-flex min-h-[28px] items-center gap-3 transition hover:text-emerald-800"
          >
            <Mail className="h-3.5 w-3.5 flex-shrink-0" strokeWidth={1.6} />
            <span className="truncate">{a.email}</span>
          </a>
        </div>
      </div>
    </article>
  );
}

function Section({
  title,
  count,
  people,
  id,
}: {
  title: string;
  count: number;
  people: Attorney[];
  id?: string;
}) {
  if (people.length === 0) return null;
  return (
    <div id={id} className="scroll-mt-32">
      <Reveal>
        <div className="flex items-baseline justify-between gap-4 border-b border-ink-900/15 pb-5">
          <h2 className="font-serif text-xl font-light text-ink-900 sm:text-2xl md:text-[2rem]">
            {title}
          </h2>
          <div className="text-[11px] uppercase tracking-eyebrow text-ink-500">
            {count} {count === 1 ? "person" : "people"}
          </div>
        </div>
      </Reveal>
      <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 sm:gap-y-14 md:mt-14 lg:grid-cols-4 lg:gap-y-16">
        {people.map((a, i) => (
          <Reveal key={a.slug} delay={i * 0.05}>
            <PersonCard a={a} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export default function PeoplePage() {
  return (
    <>
      <section className="hero-y relative isolate overflow-hidden bg-emerald-950 text-canvas">
        <HeroBackground src={imagery.peopleHero} intensity="heavy" />
        <div className="container-x">
          <Reveal>
            <div className="eyebrow text-emerald-300">People</div>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="heading-hero mt-6 max-w-5xl sm:mt-8">
              The team{" "}
              <span className="italic text-emerald-300">
                you'll actually work with.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-8 max-w-2xl text-[15px] leading-[1.7] text-canvas/75 sm:mt-10 sm:text-base md:text-[1.0625rem]">
              Sher, LLP is intentionally senior-heavy. Every engagement is
              partner-led, and our attorneys and staff have been working
              together on closings for years.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="attorneys" className="bg-canvas section-y">
        <div className="container-x space-y-20 md:space-y-28">
          <Section title="Partners" count={partners.length} people={partners} />
          <Section
            title="Counsel & Associates"
            count={associates.length}
            people={associates}
          />
          <Section
            title="Staff"
            id="staff"
            count={staff.length}
            people={staff}
          />
        </div>
      </section>

      <section className="border-t border-ink-900/10 bg-sand-50/40 section-y-sm">
        <div className="container-x">
          <Reveal>
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <h2 className="font-serif text-3xl font-light leading-tight tracking-[-0.015em] md:text-[2.5rem]">
                Every engagement starts with a partner on the phone.
              </h2>
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

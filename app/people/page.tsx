import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import Reveal from "@/components/Reveal";
import { attorneys, type Attorney } from "@/lib/site";

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
      <div className="mt-7">
        <h3 className="font-serif text-2xl font-light text-ink-900">
          {a.name}
        </h3>
        <div className="mt-1.5 text-[11px] font-medium uppercase tracking-eyebrow text-emerald-700">
          {a.title}
        </div>
        <div className="mt-6 space-y-1.5 text-[13px] text-ink-700">
          {a.focus.slice(0, 3).map((f) => (
            <div key={f}>{f}</div>
          ))}
        </div>
        <div className="mt-7 flex flex-col gap-2 text-[13px] text-ink-700">
          <a
            href={`tel:${a.phoneTel}`}
            className="inline-flex items-center gap-3 transition hover:text-emerald-800"
          >
            <Phone className="h-3.5 w-3.5" strokeWidth={1.6} />
            {a.phone}
          </a>
          <a
            href={`mailto:${a.email}`}
            className="inline-flex items-center gap-3 transition hover:text-emerald-800"
          >
            <Mail className="h-3.5 w-3.5" strokeWidth={1.6} />
            {a.email}
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
        <div className="flex items-baseline justify-between border-b border-ink-900/15 pb-5">
          <h2 className="font-serif text-2xl font-light text-ink-900 md:text-[2rem]">
            {title}
          </h2>
          <div className="text-[11px] uppercase tracking-eyebrow text-ink-500">
            {count} {count === 1 ? "person" : "people"}
          </div>
        </div>
      </Reveal>
      <div className="mt-14 grid gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
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
      <section className="relative bg-emerald-950 pb-32 pt-44 text-canvas">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_20%,rgba(89,165,127,0.15),transparent_55%)]" />
        <div className="container-x">
          <Reveal>
            <div className="eyebrow text-emerald-300">People</div>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-8 max-w-5xl font-serif text-[2.6rem] font-light leading-[1.05] tracking-[-0.022em] md:text-6xl lg:text-[5rem]">
              The team{" "}
              <span className="italic text-emerald-300">
                you'll actually work with.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-10 max-w-2xl text-base leading-[1.75] text-canvas/75 md:text-[1.0625rem]">
              Sher, LLP is intentionally senior-heavy. Every engagement is
              partner-led, and our attorneys and staff have been working
              together on closings for years.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="attorneys" className="bg-canvas py-32">
        <div className="container-x space-y-28">
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

      <section className="border-t border-ink-900/10 bg-sand-50/40 py-24">
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

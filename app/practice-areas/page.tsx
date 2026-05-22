import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import Reveal from "@/components/Reveal";
import { practiceAreas } from "@/lib/site";

export const metadata: Metadata = {
  title: "Practice Areas",
  description:
    "Healthcare facility transactions, commercial real estate financing, HUD-insured lending, joint ventures, and corporate work — the practice areas of Sher, LLP.",
};

export default function PracticeAreasPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy-950 pb-24 pt-44 text-white">
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800"
          aria-hidden
        />
        <div
          className="absolute -left-24 bottom-0 -z-10 h-[480px] w-[480px] rounded-full bg-gold-500/10 blur-[120px]"
          aria-hidden
        />
        <div className="container-x">
          <Reveal>
            <div className="eyebrow text-gold-400">Practice Areas</div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.05] tracking-tight md:text-6xl">
              Where we work — and where we close.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-white/80">
              Sher, LLP is a focused transactional practice. We don't try to be
              everywhere. We are deep in healthcare real estate, commercial
              financing, and HUD-insured lending — and that depth shows up at
              the closing table.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <nav className="mt-14 flex flex-wrap gap-3">
              {practiceAreas.map((p) => (
                <Link
                  key={p.slug}
                  href={`#${p.slug}`}
                  className="rounded-sm border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/80 transition hover:border-gold-400 hover:text-gold-300"
                >
                  {p.title}
                </Link>
              ))}
            </nav>
          </Reveal>
        </div>
      </section>

      {practiceAreas.map((area, idx) => (
        <section
          key={area.slug}
          id={area.slug}
          className={`scroll-mt-28 py-28 ${idx % 2 === 0 ? "bg-white" : "bg-navy-50/40"}`}
        >
          <div className="container-x grid gap-16 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <div className="eyebrow">0{idx + 1} · Practice Area</div>
              <h2 className="heading-section mt-4">{area.title}</h2>
              <p className="mt-6 text-lg leading-relaxed text-navy-700">
                {area.short}
              </p>
              <Link
                href="/contact"
                className="mt-10 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-navy-900 transition hover:text-gold-600"
              >
                Discuss a transaction <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-7">
              <div className="space-y-5 prose-body">
                {area.long.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <ul className="mt-10 grid gap-3 sm:grid-cols-2">
                {area.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 text-sm text-navy-800"
                  >
                    <Check
                      className="mt-1 h-4 w-4 flex-shrink-0 text-gold-600"
                      strokeWidth={2.5}
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>
      ))}

      <section className="bg-navy-950 py-24 text-white">
        <div className="container-x">
          <Reveal>
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <h2 className="font-serif text-3xl leading-tight tracking-tight md:text-4xl">
                A deal in any of these areas? Let's talk.
              </h2>
              <div className="flex flex-wrap gap-4 lg:justify-end">
                <Link href="/contact" className="btn-primary">
                  Inquire <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link href="/people" className="btn-ghost-light">
                  Meet the team
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { practiceAreas } from "@/lib/site";

export const metadata: Metadata = {
  title: "Practice Areas",
  description:
    "Healthcare facility transactions, commercial real estate financing, HUD-insured lending, and joint ventures. The practice areas of Sher, LLP.",
};

export default function PracticeAreasPage() {
  return (
    <>
      <section className="hero-y relative bg-emerald-950 text-canvas">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_30%,rgba(89,165,127,0.15),transparent_55%)]" />
        <div className="container-x">
          <Reveal>
            <div className="eyebrow text-emerald-300">Practice</div>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="heading-hero mt-6 max-w-5xl sm:mt-8">
              Where we work,{" "}
              <span className="italic text-emerald-300">
                and where we close.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-8 max-w-2xl text-[15px] leading-[1.7] text-canvas/75 sm:mt-10 sm:text-base md:text-[1.0625rem]">
              Sher, LLP is a focused transactional practice. We are deep in
              healthcare real estate, commercial financing, and HUD-insured
              lending, and that depth shows up at the closing table.
            </p>
          </Reveal>

          <Reveal delay={0.28}>
            <nav className="mt-10 flex flex-wrap gap-2 sm:mt-16 sm:gap-3">
              {practiceAreas.map((p) => (
                <Link
                  key={p.slug}
                  href={`#${p.slug}`}
                  className="rounded-full border border-canvas/25 px-4 py-2 text-[11px] font-medium uppercase tracking-wide text-canvas/85 transition hover:border-emerald-300 hover:text-emerald-300 sm:px-5 sm:py-2.5 sm:text-[12px]"
                >
                  {p.title}
                </Link>
              ))}
            </nav>
          </Reveal>
        </div>
      </section>

      <section className="bg-canvas">
        {practiceAreas.map((area, idx) => (
          <div
            key={area.slug}
            id={area.slug}
            className={`scroll-mt-24 border-b border-ink-900/10 py-16 md:py-24 lg:py-28 ${
              idx % 2 === 1 ? "bg-sand-50/40" : ""
            }`}
          >
            <div className="container-x grid gap-10 lg:grid-cols-12 lg:gap-16">
              <Reveal className="lg:col-span-5">
                <div className="font-serif text-4xl font-light text-emerald-700/60 md:text-5xl">
                  {area.number}
                </div>
                <div className="rule mt-6" />
                <h2 className="heading-section mt-10">{area.title}</h2>
                <p className="prose-body mt-8">{area.short}</p>
                <Link
                  href="/contact"
                  className="mt-12 inline-flex items-center gap-3 text-[12px] font-medium uppercase tracking-eyebrow text-emerald-800 transition hover:text-emerald-700"
                >
                  <span className="h-px w-8 bg-emerald-800" />
                  Discuss a matter
                </Link>
              </Reveal>

              <Reveal delay={0.1} className="lg:col-span-7">
                <div className="space-y-6 prose-body">
                  {area.long.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
                <ul className="mt-12 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                  {area.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 border-t border-ink-900/10 pt-4 text-[14px] text-ink-800"
                    >
                      <span className="mt-2 block h-[3px] w-[3px] rounded-full bg-emerald-700" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-emerald-950 section-y-sm text-canvas">
        <div className="container-x">
          <Reveal>
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <h2 className="font-serif text-3xl font-light leading-tight tracking-[-0.015em] md:text-[2.5rem]">
                A deal in any of these areas? Let's talk.
              </h2>
              <div className="flex flex-wrap gap-4 lg:justify-end">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-canvas px-7 py-3.5 text-sm font-medium text-emerald-900 transition hover:bg-sand-100"
                >
                  Inquire
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

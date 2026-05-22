import Link from "next/link";
import {
  ArrowUpRight,
  Building2,
  HandCoins,
  Scale,
  Landmark,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import { site, attorneys, practiceAreas, stats } from "@/lib/site";

const valueProps = [
  {
    icon: Scale,
    title: "Senior attention, every deal",
    body: "You work directly with partners — not a rotating cast of associates. Boutique by design.",
  },
  {
    icon: HandCoins,
    title: "We close deals",
    body: "Hundreds of closings nationwide. We know what gets a deal funded — and what gets it stuck.",
  },
  {
    icon: Building2,
    title: "Healthcare is our home",
    body: "Skilled nursing, assisted living, CCRCs, home health. We've seen every wrinkle.",
  },
  {
    icon: Landmark,
    title: "HUD playbook, memorized",
    body: "232, 223(f), Third Party Agreements. Hundreds of HUD closings inform every move.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-navy-950 text-white">
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2400&q=80')] bg-cover bg-center opacity-30"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-950/85 to-navy-900/60"
            aria-hidden
          />
          <div
            className="absolute -bottom-32 -left-32 h-[480px] w-[480px] rounded-full bg-gold-500/10 blur-[120px]"
            aria-hidden
          />
        </div>

        <div className="container-x relative py-32">
          <Reveal>
            <div className="eyebrow text-gold-400">
              Healthcare Transactions · Commercial Real Estate · HUD
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              We know what we are doing,{" "}
              <span className="text-gold-400">
                and we do what it takes to close.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
              Sher, LLP is a boutique transactional firm representing healthcare
              facility owners, REITs, private equity, and lenders on the deals
              that move the industry — from single-asset acquisitions to
              nine-figure HUD-financed portfolios.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <Link href="/contact" className="btn-primary">
                Connect with us <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link href="/people" className="btn-ghost-light">
                Meet your team
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.45}>
            <div className="mt-24 grid grid-cols-2 gap-8 border-t border-white/10 pt-10 md:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-serif text-3xl text-gold-400 md:text-4xl">
                    {s.value}
                  </div>
                  <div className="mt-2 text-xs uppercase tracking-[0.18em] text-white/60">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-28">
        <div className="container-x grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="eyebrow">Welcome to Sher, LLP</div>
            <h2 className="heading-section mt-4">
              A boutique built for the deal — not the org chart.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="space-y-6 prose-body">
              <p>
                Most healthcare transactions don't fail at the negotiation
                table. They fail at the diligence checklist, the lender's credit
                committee, and the HUD Third Party Agreement nobody remembered
                to chase.
              </p>
              <p>
                We built Sher, LLP to fix that. A senior-led team. Direct
                partner attention. A practice that lives entirely inside
                healthcare and commercial real estate so we already know what's
                about to come up — and what it'll cost you if it slips.
              </p>
              <p>
                Whether you're acquiring a single skilled nursing facility or
                refinancing a multi-state portfolio under HUD, we move the deal
                from term sheet to funding with the smallest possible distance
                between the two.
              </p>
            </div>
            <Link
              href="/about"
              className="mt-10 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-navy-900 transition hover:text-gold-600"
            >
              About the firm <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy-50/40 py-28">
        <div className="container-x">
          <Reveal>
            <div className="eyebrow">Practice</div>
            <h2 className="heading-section mt-4 max-w-3xl">
              Healthcare transactions, commercial real estate, and HUD-insured
              lending — closed nationwide.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {practiceAreas.map((area, i) => (
              <Reveal key={area.slug} delay={i * 0.08}>
                <Link
                  href={`/practice-areas#${area.slug}`}
                  className="group block h-full border border-navy-100 bg-white p-10 transition hover:-translate-y-1 hover:border-gold-400 hover:shadow-xl"
                >
                  <div className="font-serif text-2xl text-navy-950 transition group-hover:text-gold-700">
                    {area.title}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-navy-700">
                    {area.short}
                  </p>
                  <div className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold-600">
                    Learn more <ArrowUpRight className="h-3.5 w-3.5" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-28">
        <div className="container-x">
          <Reveal>
            <div className="eyebrow">Why Sher, LLP</div>
            <h2 className="heading-section mt-4 max-w-2xl">
              The boutique advantage, with national reach.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {valueProps.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="border-t-2 border-gold-500 pt-6">
                  <v.icon className="h-8 w-8 text-navy-900" strokeWidth={1.4} />
                  <div className="mt-6 font-serif text-xl text-navy-950">
                    {v.title}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-navy-700">
                    {v.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-50/40 py-28">
        <div className="container-x">
          <Reveal>
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="eyebrow">The team</div>
                <h2 className="heading-section mt-4 max-w-2xl">
                  Senior attorneys you'll actually work with.
                </h2>
              </div>
              <Link
                href="/people"
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-navy-900 transition hover:text-gold-600"
              >
                Meet everyone <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {attorneys
              .filter((a) => a.isPartner)
              .map((a, i) => (
                <Reveal key={a.slug} delay={i * 0.08}>
                  <div className="group h-full border border-navy-100 bg-white p-8 transition hover:border-gold-400 hover:shadow-xl">
                    <div className="aspect-[3/4] w-full bg-gradient-to-br from-navy-100 to-navy-50" />
                    <div className="mt-6 font-serif text-xl text-navy-950">
                      {a.name}
                    </div>
                    <div className="mt-1 text-xs uppercase tracking-[0.18em] text-gold-600">
                      {a.title}
                    </div>
                    <div className="mt-4 text-xs leading-relaxed text-navy-600">
                      {a.focus.slice(0, 2).join(" · ")}
                    </div>
                  </div>
                </Reveal>
              ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-navy-950 py-28 text-white">
        <div
          className="absolute -right-24 top-1/2 -z-10 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-gold-500/10 blur-[140px]"
          aria-hidden
        />
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="eyebrow text-gold-400">Start a conversation</div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight md:text-5xl">
                Have a deal in motion — or one you want to put in motion?
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
                Tell us about the transaction. We'll respond the same business
                day with a short read on fit, timing, and how we'd staff it.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <div className="flex flex-col gap-4">
                <Link href="/contact" className="btn-primary justify-between">
                  <span>Inquire about a transaction</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <a
                  href={`tel:${site.phoneTel}`}
                  className="btn-ghost-light justify-between"
                >
                  <span>{site.phone}</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="btn-ghost-light justify-between"
                >
                  <span>{site.email}</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

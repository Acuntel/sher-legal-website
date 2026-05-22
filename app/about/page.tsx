import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { stats } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Sher, LLP is a boutique transactional law firm focused on healthcare facility acquisitions, financings, HUD loans, and commercial real estate — with 25+ years of senior partner experience.",
};

const pillars = [
  {
    title: "Boutique by choice",
    body: "We deliberately stayed small so partners could stay on every deal. The result is faster decisions, fewer hand-offs, and a level of judgment most clients haven't seen since making their first deal.",
  },
  {
    title: "Healthcare-native",
    body: "Our practice lives inside healthcare real estate — skilled nursing, assisted living, CCRCs, home health, and the lenders who finance them. We don't translate from a general corporate practice; this is our home.",
  },
  {
    title: "Deal-makers, not deal-blockers",
    body: "We get retained to close. That means knowing when to fight a point, when to paper around it, and when to call the other side's counsel directly. Documents serve the deal — not the other way around.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy-950 pb-24 pt-44 text-white">
        <div
          className="absolute inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=80')] bg-cover bg-center opacity-25"
          aria-hidden
        />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-br from-navy-950 via-navy-950/90 to-navy-900/60"
          aria-hidden
        />
        <div className="container-x">
          <Reveal>
            <div className="eyebrow text-gold-400">About the firm</div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.05] tracking-tight md:text-6xl">
              A boutique transactional practice built around the way deals
              actually close.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-white/80">
              Sher, LLP was founded to serve owners, operators, and lenders in
              the healthcare real estate industry with senior attention, deep
              institutional knowledge, and a deal-first mindset.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-28">
        <div className="container-x grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="eyebrow">Our story</div>
            <h2 className="heading-section mt-4">
              Twenty-five years of closing the deal.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="space-y-6 prose-body">
              <p>
                Sher, LLP grew out of founder Stephen N. Sher's conviction that
                healthcare facility owners deserve a boutique counterpart to the
                national firms — same caliber of partner, same depth of
                experience, with none of the leverage model that pushes the real
                work down to junior associates.
              </p>
              <p>
                Over more than two decades, our attorneys have closed hundreds
                of acquisitions, sales, financings, leases, and joint ventures
                for skilled nursing, assisted living, CCRC, and home health
                operators across the country. We've represented entrepreneurs on
                their first acquisition and institutional capital on nine-figure
                portfolio refinancings — and we approach both with the same
                hands-on partner involvement.
              </p>
              <p>
                We chose to stay boutique on purpose. Clients return to us
                because they get the partner on the phone, the deal moves, and
                the documents serve the transaction.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy-50/40 py-28">
        <div className="container-x">
          <Reveal>
            <div className="eyebrow">What sets us apart</div>
            <h2 className="heading-section mt-4 max-w-3xl">
              Three principles run through every engagement.
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="h-full border-t-2 border-gold-500 bg-white p-10 shadow-sm">
                  <div className="font-serif text-2xl text-navy-950">
                    {p.title}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-navy-700">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-28">
        <div className="container-x">
          <Reveal>
            <div className="grid grid-cols-2 gap-10 border-y border-navy-100 py-12 md:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-serif text-4xl text-gold-600 md:text-5xl">
                    {s.value}
                  </div>
                  <div className="mt-3 text-xs uppercase tracking-[0.18em] text-navy-700">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-16 flex flex-wrap items-center gap-4">
              <Link href="/contact" className="btn-primary">
                Start a conversation <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link href="/people" className="btn-secondary">
                Meet the team
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

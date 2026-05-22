import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import HeroBackground from "@/components/HeroBackground";
import { imagery } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Sher, LLP is a boutique transactional law firm focused on healthcare facility acquisitions, financings, HUD loans, and commercial real estate.",
};

const principles = [
  {
    number: "01",
    title: "Senior attention",
    body: "Every engagement is led by a partner. Our model is built so that the attorney negotiating your transaction is the attorney drafting the documents.",
  },
  {
    number: "02",
    title: "Healthcare focus",
    body: "Our practice lives inside healthcare real estate. Skilled nursing, assisted living, CCRCs, and home health. We do not translate from a general corporate practice.",
  },
  {
    number: "03",
    title: "Closing oriented",
    body: "The firm is retained to close. Documents serve the transaction. We know when to fight a point, when to paper around it, and when to call opposing counsel directly.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="hero-y relative isolate overflow-hidden bg-emerald-950 text-canvas">
        <HeroBackground src={imagery.aboutHero} intensity="default" />
        <div className="container-x">
          <Reveal>
            <div className="eyebrow text-emerald-300">About</div>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="heading-hero mt-6 max-w-5xl sm:mt-8">
              A boutique transactional practice built around{" "}
              <span className="italic text-emerald-300">
                the way deals close.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-8 max-w-2xl text-[15px] leading-[1.7] text-canvas/75 sm:mt-10 sm:text-base md:text-[1.0625rem]">
              Sher, LLP serves owners, operators, and lenders in the healthcare
              real estate industry with senior attention and a deal-first
              mindset.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-canvas section-y">
        <div className="container-x grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="eyebrow">Our story</div>
            <div className="rule mt-4" />
            <h2 className="heading-section mt-10">
              Twenty-five years of closing the deal.
            </h2>
            <div className="mt-10 hidden aspect-[4/5] overflow-hidden lg:block">
              <img
                src={imagery.aboutStory}
                alt=""
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="space-y-7 prose-body">
              <p>
                Sher, LLP grew out of founder Stephen N. Sher's conviction that
                healthcare facility owners deserve a boutique counterpart to the
                national firms. The same caliber of partner, the same depth of
                experience, without the leverage model that pushes the real work
                down to junior associates.
              </p>
              <p>
                Over more than two decades, our attorneys have closed hundreds
                of acquisitions, sales, financings, leases, and joint ventures
                for skilled nursing, assisted living, CCRC, and home health
                operators across the country. The firm has represented
                entrepreneurs on their first acquisition and institutional
                capital on nine-figure portfolio refinancings, with the same
                hands-on partner involvement on each.
              </p>
              <p>
                We chose to stay boutique on purpose. Clients return because
                they get the partner on the phone, the deal moves, and the
                documents serve the transaction.
              </p>
            </div>
            <div className="mt-10 aspect-[16/10] overflow-hidden lg:hidden">
              <img
                src={imagery.aboutStory}
                alt=""
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-ink-900/10 bg-sand-50/40 section-y">
        <div className="container-x">
          <Reveal>
            <div className="eyebrow">Principles</div>
            <div className="rule mt-4" />
            <h2 className="heading-section mt-10 max-w-3xl">
              Three principles run through every engagement.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-10 sm:grid-cols-2 md:mt-20 md:grid-cols-3 md:gap-12">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="flex h-full flex-col border-t border-emerald-800 pt-8">
                  <div className="font-serif text-xl font-light text-emerald-700">
                    {p.number}
                  </div>
                  <h3 className="mt-6 font-serif text-2xl font-light text-ink-900">
                    {p.title}
                  </h3>
                  <p className="mt-5 text-[15px] leading-[1.75] text-ink-700">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-canvas section-y">
        <div className="container-x">
          <Reveal>
            <div className="grid items-center gap-12 border-t border-ink-900/10 pt-16 lg:grid-cols-2">
              <h2 className="font-serif text-3xl font-light leading-tight tracking-[-0.015em] md:text-[2.5rem]">
                Talk to a partner.
              </h2>
              <div className="flex flex-wrap gap-4 lg:justify-end">
                <Link href="/contact" className="btn-primary">
                  Start a conversation
                </Link>
                <Link href="/people" className="btn-secondary">
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

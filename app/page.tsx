import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import {
  attorneys,
  practiceAreas,
  representativeMatters,
  site,
} from "@/lib/site";

const heroStats = [
  { value: "25+", label: "Years of transactional practice" },
  { value: "500+", label: "Closings nationwide" },
  { value: "All 50", label: "States served" },
  { value: "Partner-led", label: "On every engagement" },
];

const teamOnHome = attorneys.slice(0, 8);

export default function HomePage() {
  return (
    <>
      <section className="relative isolate min-h-[100svh] overflow-hidden bg-emerald-950 text-canvas">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(89,165,127,0.20),transparent_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(5,29,20,0.55),rgba(5,29,20,0.94))]" />
          <div
            className="absolute inset-0 opacity-[0.04] mix-blend-screen"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            }}
          />
        </div>

        <div className="container-x relative flex min-h-[100svh] flex-col justify-between pb-12 pt-36">
          <Reveal>
            <div className="flex items-center gap-4 text-[11px] uppercase tracking-eyebrow text-emerald-300">
              <span className="block h-px w-10 bg-emerald-300/60" />
              Healthcare · Real Estate · HUD-Insured Finance
            </div>
          </Reveal>

          <div className="grid items-end gap-16 lg:grid-cols-12">
            <Reveal delay={0.08} className="lg:col-span-8">
              <h1 className="font-serif text-[3rem] font-light leading-[1.02] tracking-[-0.022em] md:text-[5rem] lg:text-[6.25rem]">
                Counsel built
                <br />
                <span className="italic text-emerald-300">
                  around the close.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.18} className="lg:col-span-4">
              <p className="max-w-md text-base leading-[1.7] text-canvas/75 md:text-[1.0625rem]">
                Sher, LLP is a boutique transactional firm representing
                healthcare facility owners, lenders, and capital partners on the
                deals that move the industry.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-5">
                <Link href="/contact" className="btn-primary">
                  Inquire
                </Link>
                <Link
                  href="/practice-areas"
                  className="text-[13px] font-medium uppercase tracking-[0.22em] text-canvas/80 transition hover:text-emerald-300"
                >
                  Practice areas
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.3}>
            <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-canvas/10 pt-10 md:grid-cols-4">
              {heroStats.map((s) => (
                <div key={s.label}>
                  <div className="font-serif text-3xl font-light text-emerald-300 md:text-[2.25rem]">
                    {s.value}
                  </div>
                  <div className="mt-2 text-[11px] uppercase tracking-eyebrow text-canvas/60">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-canvas py-32">
        <div className="container-x">
          <div className="grid gap-20 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <div className="eyebrow">Welcome</div>
              <div className="rule mt-4" />
              <h2 className="heading-section mt-10">
                A practice built for{" "}
                <span className="italic text-emerald-800">
                  the way deals close.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-7">
              <div className="space-y-7 prose-body">
                <p>
                  Sher, LLP is a senior-led firm. Clients work directly with
                  partners on every matter. Our practice is contained inside
                  healthcare real estate, commercial financing, and HUD-insured
                  lending, and that focus produces faster judgment at the
                  closing table.
                </p>
                <p>
                  Whether the matter is a single skilled nursing facility
                  acquisition or a multi-state HUD-insured refinance, the same
                  attorneys carry the deal from term sheet to funding.
                </p>
              </div>
              <Link
                href="/about"
                className="mt-12 inline-flex items-center gap-3 text-[12px] font-medium uppercase tracking-eyebrow text-emerald-800 transition hover:text-emerald-700"
              >
                <span className="h-px w-8 bg-emerald-800" />
                About the firm
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-ink-900/10 bg-sand-50/40 py-32">
        <div className="container-x">
          <Reveal>
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="eyebrow">Practice</div>
                <div className="rule mt-4" />
                <h2 className="heading-section mt-10 max-w-2xl">
                  Four areas. One closing table.
                </h2>
              </div>
              <Link
                href="/practice-areas"
                className="text-[12px] font-medium uppercase tracking-eyebrow text-emerald-800 transition hover:text-emerald-700"
              >
                View all practice areas
              </Link>
            </div>
          </Reveal>

          <div className="mt-20 divide-y divide-ink-900/10 border-y border-ink-900/10">
            {practiceAreas.map((area, i) => (
              <Reveal key={area.slug} delay={i * 0.06}>
                <Link
                  href={`/practice-areas#${area.slug}`}
                  className="group grid items-center gap-8 py-10 transition md:grid-cols-12"
                >
                  <div className="font-serif text-xl font-light text-emerald-700 md:col-span-1">
                    {area.number}
                  </div>
                  <div className="md:col-span-5">
                    <div className="font-serif text-2xl font-light text-ink-900 transition group-hover:text-emerald-800 md:text-3xl">
                      {area.title}
                    </div>
                  </div>
                  <div className="text-sm leading-relaxed text-ink-700 md:col-span-5">
                    {area.short}
                  </div>
                  <div className="md:col-span-1 md:text-right">
                    <span className="text-[12px] uppercase tracking-eyebrow text-emerald-800">
                      Read
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-canvas py-32">
        <div className="container-x">
          <Reveal>
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="eyebrow">People</div>
                <div className="rule mt-4" />
                <h2 className="heading-section mt-10 max-w-2xl">
                  The team you'll{" "}
                  <span className="italic text-emerald-800">
                    actually work with.
                  </span>
                </h2>
              </div>
              <Link
                href="/people"
                className="text-[12px] font-medium uppercase tracking-eyebrow text-emerald-800 transition hover:text-emerald-700"
              >
                Read bios
              </Link>
            </div>
          </Reveal>

          <div className="mt-20 grid gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
            {teamOnHome.map((a, i) => (
              <Reveal key={a.slug} delay={i * 0.04}>
                <Link href={`/people#${a.slug}`} className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden bg-emerald-100">
                    <Image
                      src={a.imageSrc}
                      alt={a.name}
                      fill
                      sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
                      className="object-cover grayscale transition duration-700 group-hover:grayscale-0"
                    />
                  </div>
                  <h3 className="mt-6 font-serif text-xl font-light text-ink-900 transition group-hover:text-emerald-800">
                    {a.name}
                  </h3>
                  <div className="mt-1 text-[11px] font-medium uppercase tracking-eyebrow text-emerald-700">
                    {a.title}
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-emerald-950 py-32 text-canvas">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_60%,rgba(89,165,127,0.16),transparent_55%)]" />
        <div className="container-x grid gap-16 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/people/stephen-n-sher.jpg"
                alt="Stephen N. Sher, Founder"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-emerald-950/30 via-transparent to-transparent" />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="eyebrow text-emerald-300">From the founder</div>
            <div className="mt-4 h-px w-12 bg-emerald-300/70" />
            <blockquote className="mt-10 font-serif text-[1.6rem] font-light leading-[1.3] tracking-[-0.01em] text-canvas md:text-[2.25rem]">
              <span className="text-emerald-300">"</span>We built Sher, LLP so
              healthcare owners would get the partner on the phone, the deal
              moving, and the documents serving the transaction.
              <span className="text-emerald-300">"</span>
            </blockquote>
            <div className="mt-10 flex items-baseline gap-4">
              <span className="font-serif text-lg font-light italic">
                Stephen N. Sher
              </span>
              <span className="text-[11px] uppercase tracking-eyebrow text-emerald-300">
                Founder
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-canvas py-32">
        <div className="container-x">
          <Reveal>
            <div className="eyebrow">Representative matters</div>
            <div className="rule mt-4" />
            <h2 className="heading-section mt-10 max-w-2xl">
              A small selection of recent work.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-px overflow-hidden border border-ink-900/10 bg-ink-900/10 md:grid-cols-2">
            {representativeMatters.map((m, i) => (
              <Reveal key={m.headline} delay={i * 0.05}>
                <div className="h-full bg-canvas p-10">
                  <div className="text-[11px] font-medium uppercase tracking-eyebrow text-emerald-700">
                    {m.category}
                  </div>
                  <p className="mt-6 font-serif text-xl font-light leading-snug text-ink-900 md:text-[1.625rem]">
                    {m.headline}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <p className="mt-10 max-w-2xl text-sm text-ink-500">
              Illustrative. Some matters are summarized for client
              confidentiality.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-ink-900/10 bg-sand-50/40 py-32">
        <div className="container-x">
          <div className="grid items-center gap-16 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <div className="eyebrow">Start a conversation</div>
              <div className="rule mt-4" />
              <h2 className="heading-section mt-10 max-w-2xl">
                A deal in motion, or one you want to put in motion.
              </h2>
              <p className="prose-body mt-8 max-w-xl">
                Tell us about the transaction. We respond the same business day
                with a short read on fit, timing, and how we would staff the
                matter.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-5">
              <div className="flex flex-col gap-4">
                <Link
                  href="/contact"
                  className="group flex items-center justify-between border-b border-ink-900/15 py-6 transition hover:border-emerald-800"
                >
                  <span className="font-serif text-xl font-light italic text-ink-900 group-hover:text-emerald-800">
                    Inquire about a transaction
                  </span>
                  <span className="text-[11px] uppercase tracking-eyebrow text-emerald-800">
                    Form
                  </span>
                </Link>
                <a
                  href={`tel:${site.phoneTel}`}
                  className="group flex items-center justify-between border-b border-ink-900/15 py-6 transition hover:border-emerald-800"
                >
                  <span className="font-serif text-xl font-light text-ink-900 group-hover:text-emerald-800">
                    {site.phone}
                  </span>
                  <span className="text-[11px] uppercase tracking-eyebrow text-emerald-800">
                    Call
                  </span>
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="group flex items-center justify-between border-b border-ink-900/15 py-6 transition hover:border-emerald-800"
                >
                  <span className="font-serif text-xl font-light text-ink-900 group-hover:text-emerald-800">
                    {site.email}
                  </span>
                  <span className="text-[11px] uppercase tracking-eyebrow text-emerald-800">
                    Email
                  </span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

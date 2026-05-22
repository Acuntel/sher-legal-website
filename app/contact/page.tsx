import type { Metadata } from "next";
import { Mail, MapPin, Phone, type LucideIcon } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import HeroBackground from "@/components/HeroBackground";
import { imagery, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Sher, LLP. Boutique healthcare and commercial real estate counsel based in Skokie, IL. Same business day response.",
};

const mapSrc =
  "https://www.google.com/maps?q=5750+Old+Orchard+Rd,+Skokie,+IL+60077&output=embed";

export default function ContactPage() {
  return (
    <>
      <section className="hero-y relative isolate overflow-hidden bg-emerald-950 text-canvas">
        <HeroBackground src={imagery.contactHero} intensity="heavy" />
        <div className="container-x">
          <Reveal>
            <div className="eyebrow text-emerald-300">Connect</div>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="heading-hero mt-6 max-w-5xl sm:mt-8">
              Let's talk about{" "}
              <span className="italic text-emerald-300">your transaction.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-8 max-w-2xl text-[15px] leading-[1.7] text-canvas/75 sm:mt-10 sm:text-base md:text-[1.0625rem]">
              Tell us about the deal. We respond the same business day with a
              short read on fit, timing, and how we would staff it.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-canvas section-y">
        <div className="container-x grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="eyebrow">Direct lines</div>
            <div className="rule mt-4" />
            <h2 className="heading-section mt-10">The fastest way in.</h2>

            <div className="mt-10 space-y-8 md:mt-12 md:space-y-10">
              <InfoRow icon={Phone} label="Main line">
                <a
                  href={`tel:${site.phoneTel}`}
                  className="hover:text-emerald-800"
                >
                  {site.phone}
                </a>
              </InfoRow>
              <InfoRow icon={Mail} label="Email">
                <a
                  href={`mailto:${site.email}`}
                  className="hover:text-emerald-800"
                >
                  {site.email}
                </a>
              </InfoRow>
              <InfoRow icon={MapPin} label="Office">
                {site.address.line1}
                <br />
                {site.address.line2}
                <br />
                {site.address.city}, {site.address.state} {site.address.zip}
              </InfoRow>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="border border-ink-900/10 bg-sand-50/40 p-6 sm:p-8 md:p-12">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-ink-900/10 bg-canvas pb-20 md:pb-32">
        <div className="container-x">
          <Reveal>
            <div className="overflow-hidden border border-ink-900/10">
              <iframe
                src={mapSrc}
                title="Sher, LLP office location"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block aspect-[4/3] w-full grayscale md:aspect-[16/7]"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function InfoRow({
  icon: Icon,
  label,
  children,
}: {
  icon: LucideIcon;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-5 border-t border-ink-900/10 pt-6">
      <Icon
        className="mt-1 h-4 w-4 flex-shrink-0 text-emerald-800"
        strokeWidth={1.5}
      />
      <div>
        <div className="text-[11px] font-medium uppercase tracking-eyebrow text-ink-500">
          {label}
        </div>
        <div className="mt-2 break-words font-serif text-lg font-light leading-snug text-ink-900 sm:text-xl">
          {children}
        </div>
      </div>
    </div>
  );
}

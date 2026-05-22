import type { Metadata } from "next";
import { Mail, MapPin, Phone, Clock, type LucideIcon } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Sher, LLP — boutique healthcare and commercial real estate counsel based in Skokie, IL. Same-business-day response.",
};

const mapSrc =
  "https://www.google.com/maps?q=5750+Old+Orchard+Rd,+Skokie,+IL+60077&output=embed";

export default function ContactPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy-950 pb-24 pt-44 text-white">
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800"
          aria-hidden
        />
        <div className="container-x">
          <Reveal>
            <div className="eyebrow text-gold-400">Connect</div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.05] tracking-tight md:text-6xl">
              Let's talk about your transaction.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-white/80">
              Tell us about the deal. We respond the same business day with a
              short read on fit, timing, and how we'd staff it.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-28">
        <div className="container-x grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="eyebrow">Reach us directly</div>
            <h2 className="heading-section mt-4">The fastest way in.</h2>

            <div className="mt-10 space-y-8">
              <InfoRow icon={Phone} label="Main line">
                <a
                  href={`tel:${site.phoneTel}`}
                  className="hover:text-gold-600"
                >
                  {site.phone}
                </a>
              </InfoRow>
              <InfoRow icon={Mail} label="Email">
                <a
                  href={`mailto:${site.email}`}
                  className="hover:text-gold-600"
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
              <InfoRow icon={Clock} label="Hours">
                {site.hours}
              </InfoRow>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="border border-navy-100 bg-navy-50/30 p-8 md:p-12">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy-50/40 pb-28">
        <div className="container-x">
          <Reveal>
            <div className="overflow-hidden border border-navy-100">
              <iframe
                src={mapSrc}
                title="Sher, LLP office location"
                width="100%"
                height="450"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full"
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
    <div className="flex items-start gap-5">
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center border border-navy-200">
        <Icon className="h-5 w-5 text-gold-600" strokeWidth={1.5} />
      </div>
      <div>
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-navy-700">
          {label}
        </div>
        <div className="mt-2 text-base leading-relaxed text-navy-900">
          {children}
        </div>
      </div>
    </div>
  );
}

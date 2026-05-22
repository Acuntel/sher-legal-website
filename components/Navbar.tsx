"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/lib/site";

const navItems = [
  { label: "About", href: "/about" },
  { label: "People", href: "/people" },
  { label: "Practice", href: "/practice-areas" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-ink-900/10 bg-canvas/95 backdrop-blur"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <Link href="/" className="flex items-baseline gap-2">
          <span
            className={`font-serif text-2xl font-light tracking-tight transition ${
              scrolled ? "text-ink-900" : "text-canvas"
            }`}
          >
            Sher
          </span>
          <span
            className={`text-xs font-medium uppercase tracking-eyebrow transition ${
              scrolled ? "text-emerald-700" : "text-emerald-300"
            }`}
          >
            LLP
          </span>
        </Link>

        <nav className="hidden items-center gap-10 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`text-[13px] font-medium tracking-wide transition ${
                scrolled
                  ? "text-ink-700 hover:text-emerald-800"
                  : "text-canvas/85 hover:text-canvas"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <a
            href={`tel:${site.phoneTel}`}
            className={`text-[13px] font-medium tracking-wide transition ${
              scrolled
                ? "text-ink-700 hover:text-emerald-800"
                : "text-canvas/85 hover:text-canvas"
            }`}
          >
            {site.phone}
          </a>
          <Link
            href="/contact"
            className={`rounded-full px-5 py-2.5 text-[12px] font-medium tracking-wide transition ${
              scrolled
                ? "bg-emerald-800 text-canvas hover:bg-emerald-700"
                : "bg-canvas text-emerald-900 hover:bg-sand-100"
            }`}
          >
            Inquire
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((v) => !v)}
          className={`lg:hidden ${scrolled ? "text-ink-900" : "text-canvas"}`}
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-ink-900/10 bg-canvas lg:hidden">
          <div className="container-x flex flex-col py-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="border-b border-ink-900/10 py-4 text-base font-medium text-ink-900"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-8 inline-flex items-center justify-center rounded-full bg-emerald-800 px-6 py-3.5 text-sm font-medium text-canvas"
            >
              Inquire
            </Link>
            <a
              href={`tel:${site.phoneTel}`}
              className="mt-4 text-center text-sm text-ink-700"
            >
              {site.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { site } from "@/lib/site";

const navItems = [
  { label: "About", href: "/about" },
  {
    label: "People",
    href: "/people",
    children: [
      { label: "Attorneys", href: "/people#attorneys" },
      { label: "Staff", href: "/people#staff" },
    ],
  },
  {
    label: "Practice Areas",
    href: "/practice-areas",
    children: [
      {
        label: "Healthcare Transactions",
        href: "/practice-areas#healthcare-transactions",
      },
      {
        label: "Commercial Real Estate Financing",
        href: "/practice-areas#commercial-real-estate-financing",
      },
      { label: "HUD-Insured Lending", href: "/practice-areas#hud-loans" },
      {
        label: "Joint Ventures & Corporate",
        href: "/practice-areas#joint-ventures-corporate",
      },
    ],
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-[0_1px_0_rgba(15,28,46,0.08)] backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <Link href="/" className="group flex items-center gap-3">
          <span
            className={`font-serif text-2xl tracking-tight transition ${
              scrolled ? "text-navy-950" : "text-white"
            }`}
          >
            Sher<span className="text-gold-500">,</span> LLP
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                className={`flex items-center gap-1 px-4 py-2 text-sm font-medium uppercase tracking-[0.14em] transition ${
                  scrolled
                    ? "text-navy-900 hover:text-gold-600"
                    : "text-white/90 hover:text-gold-300"
                }`}
              >
                {item.label}
                {item.children && (
                  <ChevronDown className="h-3.5 w-3.5 opacity-70" />
                )}
              </Link>
              {item.children && openDropdown === item.label && (
                <div className="absolute left-0 top-full min-w-[280px] border-t-2 border-gold-500 bg-white shadow-xl">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-5 py-3 text-sm text-navy-800 transition hover:bg-navy-50 hover:text-gold-600"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:${site.phoneTel}`}
            className={`text-sm font-medium tracking-wide transition ${
              scrolled
                ? "text-navy-700 hover:text-gold-600"
                : "text-white/80 hover:text-gold-300"
            }`}
          >
            {site.phone}
          </a>
          <Link
            href="/contact"
            className="rounded-sm bg-gold-500 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-navy-950 transition hover:bg-gold-400"
          >
            Inquire
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((v) => !v)}
          className={`lg:hidden ${scrolled ? "text-navy-900" : "text-white"}`}
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-navy-100 bg-white lg:hidden">
          <div className="container-x flex flex-col py-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="border-b border-navy-100 py-4 text-sm font-medium uppercase tracking-[0.14em] text-navy-900"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-6 inline-flex items-center justify-center rounded-sm bg-gold-500 px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-navy-950"
            >
              Inquire
            </Link>
            <a
              href={`tel:${site.phoneTel}`}
              className="mt-3 text-center text-sm text-navy-700"
            >
              {site.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

"use client";

import { ArrowDownRight, Diamond } from "lucide-react";
import { useCheckout } from "./CheckoutContext";

const navLinks = [
  { label: "Inside the Vault", href: "#inside" },
  { label: "How it works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  const { open } = useCheckout();

  return (
    <header className="sticky top-0 z-40 border-b border-navy/10 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-coral">
            <Diamond className="h-4 w-4 text-navy" strokeWidth={2.5} />
          </span>
          <span className="text-lg font-semibold">Creator Vault</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs uppercase tracking-wide text-coral hover:opacity-70"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          onClick={open}
          className="flex items-center gap-1.5 rounded-lg bg-navy px-4 py-2.5 font-mono text-xs uppercase tracking-wide text-cream hover:opacity-90"
        >
          Get instant access
          <ArrowDownRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </header>
  );
}

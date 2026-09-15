"use client";

import { ArrowRight, Check } from "lucide-react";
import { useCheckout } from "./CheckoutContext";

const included = [
  "Notion Creator Vault workspace",
  "120 hook prompts",
  "6 edit recipes + PDF guide",
  "24 reusable editing assets",
  "14-day content sprint board",
  "30-minute edit room bonus",
];

export function Pricing() {
  const { open } = useCheckout();

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="rounded-3xl border-2 border-navy bg-lime p-8 shadow-[8px_8px_0_0_theme(colors.navy)] md:p-12">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr] md:items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-wide text-navy/70">
              04 / Your new default
            </p>
            <h2 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
              Make the next post the easy one.
            </h2>

            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {included.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 shrink-0 text-coral" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border-2 border-navy bg-cream p-8">
            <p className="font-mono text-xs uppercase tracking-wide text-navy/60">
              The complete vault
            </p>
            <p className="mt-3 flex items-baseline gap-2">
              <span className="text-5xl font-extrabold">$49</span>
              <span className="font-mono text-xs uppercase text-navy/50">
                one time
              </span>
            </p>
            <div className="mt-4 border-t border-navy/15 pt-4">
              <p className="text-sm text-navy/70">
                Instant access. Lifetime updates. 14-day, no-questions-asked
                refund window.
              </p>
            </div>

            <button
              onClick={open}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg border-2 border-navy bg-coral px-6 py-3.5 font-mono text-sm uppercase tracking-wide text-navy shadow-[4px_4px_0_0_theme(colors.navy)] transition-transform hover:-translate-y-0.5"
            >
              Get instant access
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

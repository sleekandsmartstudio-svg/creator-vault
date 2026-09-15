"use client";

import { ArrowRight, Diamond } from "lucide-react";
import { useCheckout } from "./CheckoutContext";

export function Footer() {
  const { open } = useCheckout();

  return (
    <footer className="bg-navy py-16 text-cream">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-coral">
              <Diamond className="h-4 w-4 text-navy" strokeWidth={2.5} />
            </span>
            <span className="text-lg font-semibold">Creator Vault</span>
          </div>
          <p className="mt-4 max-w-xs text-cream/60">
            A sharper starting point for your next short-form post.
          </p>
        </div>

        <div className="flex flex-col items-start gap-4 md:items-end">
          <button
            onClick={open}
            className="flex items-center gap-2 rounded-lg bg-lime px-6 py-3.5 font-mono text-sm uppercase tracking-wide text-navy hover:opacity-90"
          >
            Get instant access
            <ArrowRight className="h-4 w-4" />
          </button>
          <p className="font-mono text-xs uppercase tracking-wide text-cream/40">
            © 2026 Creator Vault · Made for making
          </p>
        </div>
      </div>
    </footer>
  );
}

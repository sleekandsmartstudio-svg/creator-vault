"use client";

import { ArrowRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useCheckout } from "./CheckoutContext";

export function CheckoutModal() {
  const { isOpen, close } = useCheckout();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Close on Escape, and stop the page from scrolling behind the modal.
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, close]);

  if (!isOpen) return null;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // This is a demo form — swap this out for a real API call once
    // the backend exists (see the "next steps" in the chat).
    setSubmitted(true);
  }

  function handleClose() {
    close();
    setSubmitted(false);
    setEmail("");
  }

  return (
    <div
      className="animate-fade-in fixed inset-0 z-50 flex items-center justify-center bg-navy/70 px-6"
      onClick={handleClose}
    >
      <div
        className="animate-scale-in relative w-full max-w-md shadow-[8px_8px_0_0_theme(colors.lime)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="rounded-2xl border-2 border-navy bg-cream p-8">
          <button
            onClick={handleClose}
            aria-label="Close"
            className="absolute -top-3 right-0 flex h-9 w-9 items-center justify-center rounded-lg border-2 border-navy bg-coral focus:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
          >
            <X className="h-4 w-4 text-navy" />
          </button>

          {submitted ? (
            <div className="py-6 text-center">
              <p className="text-2xl font-bold">Check your inbox.</p>
              <p className="mt-3 text-navy/70">
                We sent the access link to {email}.
              </p>
            </div>
          ) : (
            <>
              <p className="font-mono text-xs uppercase tracking-wide text-coral">
                The Creator Vault / Checkout
              </p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight">
                Your next post starts here.
              </h2>
              <p className="mt-3 text-navy/70">
                Enter your email and we&apos;ll send your instant access
                link. This demo checkout does not charge you.
              </p>

              <form onSubmit={handleSubmit} className="mt-6">
                <label
                  htmlFor="email"
                  className="font-mono text-xs uppercase tracking-wide"
                >
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@yourstudio.com"
                  className="mt-2 w-full rounded-lg border-2 border-navy bg-cream/60 px-4 py-3 outline-none focus:bg-white"
                />

                <button
                  type="submit"
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg border-2 border-navy bg-coral px-6 py-3.5 font-mono text-sm uppercase tracking-wide text-navy shadow-[4px_4px_0_0_theme(colors.navy)] transition-transform hover:-translate-y-0.5"
                >
                  Continue to access
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>

              <p className="mt-4 text-center font-mono text-[11px] uppercase tracking-wide text-navy/50">
                14-day refund window · Lifetime access
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

"use client";

import { ArrowDownRight, ArrowRight } from "lucide-react";
import { useCheckout } from "./CheckoutContext";

const avatarInitials = ["AM", "JR", "SK"];
const avatarColors = ["bg-lime", "bg-coral", "bg-lavender"];

export function Hero() {
  const { open } = useCheckout();

  return (
    <section id="top" className="mx-auto max-w-6xl px-6 pb-24 pt-16 md:pt-24">
      <div className="grid items-center gap-16 md:grid-cols-2">
        {/* Left: headline and CTA */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-lime px-4 py-1.5 font-mono text-xs uppercase tracking-wide">
            <span className="h-1.5 w-1.5 rounded-full bg-coral" />
            The short-form creator toolkit
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
            Stop editing
            <br />
            <span className="text-coral">from scratch.</span>
          </h1>

          <p className="mt-6 max-w-md text-lg text-navy/70">
            A repeatable system for turning half-formed ideas into
            scroll-stopping short-form — without staring at a blank
            timeline.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <button
              onClick={open}
              className="flex items-center gap-2 rounded-lg border-2 border-navy bg-coral px-6 py-3.5 font-mono text-sm uppercase tracking-wide text-navy shadow-[4px_4px_0_0_theme(colors.navy)] transition-transform hover:-translate-y-0.5"
            >
              Get instant access
              <ArrowRight className="h-4 w-4" />
            </button>

            <a
              href="#inside"
              className="flex items-center gap-1.5 font-mono text-sm uppercase tracking-wide underline underline-offset-4"
            >
              See what&apos;s inside
              <ArrowDownRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 flex items-center gap-3">
            <div className="flex -space-x-2">
              {avatarInitials.map((initials, i) => (
                <span
                  key={initials}
                  className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-cream text-[10px] font-semibold ${avatarColors[i]}`}
                >
                  {initials}
                </span>
              ))}
            </div>
            <p className="text-sm text-navy/60">
              Built for the messy middle — from idea to upload.
            </p>
          </div>
        </div>

        {/* Right: layered card collage */}
        <div className="relative hidden h-[420px] md:block">
          <div className="absolute left-0 top-0 h-[340px] w-[280px] rotate-[-6deg] rounded-2xl border-2 border-navy bg-lime p-6">
            <p className="font-mono text-xs">CV / 001</p>
            <div className="mt-3 h-px w-full bg-navy/30" />
            <p className="mt-4 text-2xl font-bold leading-tight">
              Better first cuts
            </p>
            <p className="mt-3 font-mono text-xs text-navy/70">
              A working library for the moment you hit record.
            </p>
            <p className="absolute bottom-6 right-6 font-mono text-xs">
              The system
            </p>
          </div>

          <div className="absolute right-0 top-14 w-[300px] rounded-2xl border-2 border-navy bg-cream p-6 shadow-[6px_6px_0_0_theme(colors.navy)]">
            <div className="flex items-center gap-2 font-mono text-xs text-coral">
              <span className="h-1.5 w-1.5 rounded-full bg-coral" />
              Hook library / 120
            </div>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-wide text-navy/50">
              Pick a starting point
            </p>

            <ul className="mt-3 space-y-2">
              {[
                ["The counter-intuitive take", "01"],
                ["The specific mistake", "02"],
                ["The honest before / after", "03"],
              ].map(([label, num]) => (
                <li
                  key={label}
                  className="flex items-center justify-between rounded-md border border-navy/15 px-3 py-2 text-sm"
                >
                  {label}
                  <span className="font-mono text-xs text-navy/40">
                    {num}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-3 flex items-center justify-between rounded-md bg-navy px-3 py-2.5 text-sm text-cream">
              Start here
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>

          <span className="absolute bottom-0 left-8 flex h-20 w-20 items-center justify-center rounded-full bg-tan text-center font-mono text-[10px] uppercase leading-tight">
            Make less
            <br />
            guesswork
          </span>
          <span className="absolute -bottom-2 -left-2 h-6 w-6 rounded-full border-2 border-navy bg-lavender" />
        </div>
      </div>
    </section>
  );
}

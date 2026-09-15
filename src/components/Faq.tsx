"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What exactly do I get?",
    answer:
      "Instantly after checkout, you get the Creator Vault workspace in Notion, the Edit Recipes PDF, and a folder of 24 reusable editing assets. Nothing is drip-fed and there is no app to learn.",
  },
  {
    question: "Is this for beginners or experienced creators?",
    answer:
      "Both. Beginners get a clear starting recipe instead of a blank page. Experienced creators get a faster way to skip the parts of the process they already know by heart.",
  },
  {
    question: "What formats are included?",
    answer:
      "Six edit recipes covering talking-head, b-roll essay, tutorial, and three hybrid short-form formats — plus the hook and caption libraries, which work with any of them.",
  },
  {
    question: "What is your refund policy?",
    answer:
      "You have 14 days to try the Vault. If it is not a fit, email us for a full refund, no questions asked.",
  },
  {
    question: "Do I need a paid Notion account?",
    answer:
      "No. A free Notion account is all you need. The Vault is designed to duplicate cleanly into your own workspace and works with the free plan.",
  },
];

export function Faq() {
  // Track which question is open. Start with the last one open,
  // matching the original design.
  const [openIndex, setOpenIndex] = useState<number | null>(faqs.length - 1);

  return (
    <section id="faq" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <p className="font-mono text-xs uppercase tracking-wide text-coral">
            05 / Questions
          </p>
          <h2 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
            Before you press play.
          </h2>
          <p className="mt-5 max-w-sm text-navy/70">
            Still wondering if it fits your setup? Here is the useful stuff.
          </p>
        </div>

        <div>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className="border-t border-navy/20">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 rounded-md py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-coral"
                >
                  <span className="text-lg font-bold">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-coral transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Grid-rows trick: animating 0fr -> 1fr gives a smooth
                    height transition without measuring pixels in JS. */}
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 text-navy/70">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="border-t border-navy/20" />
        </div>
      </div>
    </section>
  );
}

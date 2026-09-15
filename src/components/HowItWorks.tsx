import { ArrowDownRight, Clock } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Pick your angle",
    description:
      "Start with a hook that already has tension. The library gives you a clean first move, so your idea can get moving.",
  },
  {
    number: "02",
    title: "Build the cut",
    description:
      "Follow a recipe instead of guessing. Match your footage to a proven rhythm and make the rough cut feel obvious.",
    showArrow: true,
  },
  {
    number: "03",
    title: "Make it yours",
    description:
      "Use the templates as a launchpad, then bend the language, timing, and point of view until it sounds like you.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <p className="font-mono text-xs uppercase tracking-wide text-coral">
            03 / The rhythm
          </p>
          <h2 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
            Less improvising.
            <br />
            More making.
          </h2>
          <p className="mt-5 max-w-sm text-navy/70">
            The Vault is designed to sit beside your editor, not become
            another thing you have to keep up with.
          </p>

          <span className="mt-6 inline-flex items-center gap-2 rounded-lg bg-tan px-4 py-2 font-mono text-xs uppercase tracking-wide">
            <Clock className="h-3.5 w-3.5" />
            Made for 20-minute sessions
          </span>
        </div>

        <div>
          {steps.map((step) => (
            <div key={step.number} className="border-t border-navy/20 py-6">
              <div className="flex items-start gap-6">
                <span className="pt-1 font-mono text-xs text-coral">
                  {step.number}
                </span>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-xl font-bold">{step.title}</p>
                    {step.showArrow && (
                      <ArrowDownRight className="h-4 w-4 text-navy/50" />
                    )}
                  </div>
                  <p className="mt-2 text-navy/70">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="border-t border-navy/20" />
        </div>
      </div>
    </section>
  );
}

const frictionPoints = [
  {
    number: "01",
    title: "You have the idea",
    description: "But not the first line that makes someone stop.",
  },
  {
    number: "02",
    title: "You open your editor",
    description:
      "Then lose 40 minutes choosing between 14 nearly identical clips.",
  },
  {
    number: "03",
    title: "You write a caption",
    description: "It says what happened, but not why anyone should care.",
  },
  {
    number: "04",
    title: "You post it anyway",
    description: "And promise yourself next week will be more strategic.",
  },
];

export function Friction() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <p className="font-mono text-xs uppercase tracking-wide text-coral">
            01 / The friction
          </p>
          <h2 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
            The blank timeline is expensive.
          </h2>
          <p className="mt-5 max-w-sm text-navy/70">
            Not in money. In momentum. Every fresh post starts with the same
            tiny decisions that quietly drain your best ideas.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {frictionPoints.map((point) => (
            <div
              key={point.number}
              className="rounded-2xl border-2 border-navy bg-tan p-6"
            >
              <p className="font-mono text-xs text-navy/60">
                {point.number}
              </p>
              <p className="mt-4 text-xl font-bold">{point.title}</p>
              <p className="mt-2 text-sm text-navy/70">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

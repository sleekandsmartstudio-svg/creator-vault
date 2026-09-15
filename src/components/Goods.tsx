import { FileText, Layers, Scissors, Zap } from "lucide-react";

const goods = [
  {
    number: "01",
    icon: Zap,
    iconBg: "bg-lime",
    title: "The Hook Library",
    description:
      "120 opening lines engineered to earn the next three seconds — sorted by format, feeling, and intent.",
    tag: "120 prompts · Notion",
  },
  {
    number: "02",
    icon: Scissors,
    iconBg: "bg-coral",
    title: "Edit Recipes",
    description:
      "Shot-by-shot blueprints for six repeatable short-form formats, from talking head to b-roll essay.",
    tag: "06 systems · PDF",
  },
  {
    number: "03",
    icon: FileText,
    iconBg: "bg-lavender",
    title: "Caption & CTA Kit",
    description:
      "Fill-in-the-blank captions that sound like you, plus soft-sell endings that do not feel like a pitch.",
    tag: "80 templates · Notion",
  },
  {
    number: "04",
    icon: Layers,
    iconBg: "bg-tan",
    title: "The Content Sprint",
    description:
      "A 14-day planning board that turns one good idea into a reliable run of publish-ready posts.",
    tag: "14-day board · Notion",
  },
];

export function Goods() {
  return (
    <section id="inside" className="scroll-mt-20 bg-navy py-20 text-cream">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-wide text-lime">
              02 / The goods
            </p>
            <h2 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
              Everything you need.
              <br />
              <span className="text-coral">Nothing to babysit.</span>
            </h2>
          </div>
          <p className="max-w-xs text-cream/60">
            A small, sharp kit for creators who want a system — not another
            47-tab masterclass.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {goods.map((item) => (
            <div
              key={item.number}
              className="flex flex-col rounded-2xl border border-cream/15 p-6"
            >
              <div className="flex items-start justify-between">
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-full ${item.iconBg}`}
                >
                  <item.icon className="h-5 w-5 text-navy" />
                </span>
                <span className="font-mono text-xs text-cream/40">
                  {item.number}
                </span>
              </div>

              <p className="mt-6 text-xl font-bold">{item.title}</p>
              <p className="mt-3 flex-1 text-sm text-cream/60">
                {item.description}
              </p>

              <p className="mt-6 border-t border-cream/15 pt-4 font-mono text-xs uppercase tracking-wide text-cream/50">
                {item.tag}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { MousePointer2, Star } from "lucide-react";

export function Testimonial() {
  return (
    <section className="bg-coral py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2 md:items-center">
        <div>
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-navy text-navy" />
            ))}
          </div>
          <p className="mt-6 text-3xl font-bold leading-snug md:text-4xl">
            &ldquo;I stopped asking what should I post? and started asking
            which one am I making today?&rdquo;
          </p>
          <p className="mt-5 font-mono text-xs uppercase tracking-wide text-navy/70">
            Maya R. / Lifestyle + design creator
          </p>
        </div>

        <div className="rounded-2xl border-2 border-navy bg-tan p-8">
          <div className="flex items-start justify-between">
            <p className="font-mono text-xs uppercase tracking-wide text-navy/60">
              A useful question
            </p>
            <MousePointer2 className="h-5 w-5 -rotate-12" />
          </div>
          <p className="mt-6 text-2xl font-bold leading-snug">
            What would you make if the first cut was already waiting?
          </p>
        </div>
      </div>
    </section>
  );
}

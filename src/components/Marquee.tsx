// Repeat the phrase enough times that the loop never shows a gap,
// then duplicate the whole strip so the CSS animation can scroll
// from 0% to -50% seamlessly.
const phrase = "idea → hook → cut → post";
const strip = Array.from({ length: 6 }, () => phrase);

export function Marquee() {
  return (
    <div className="overflow-hidden border-y-2 border-navy bg-lime py-4">
      <div className="flex w-max animate-marquee gap-8">
        {[...strip, ...strip].map((text, i) => (
          <span
            key={i}
            className="flex items-center gap-8 text-xl font-bold whitespace-nowrap"
          >
            {text}
            <span className="text-coral">+</span>
          </span>
        ))}
      </div>
    </div>
  );
}

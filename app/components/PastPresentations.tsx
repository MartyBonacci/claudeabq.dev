import { getPresentations } from "~/data/presentations";
import { PresentationCard } from "~/components/PresentationCard";

export function PastPresentations() {
  const presentations = getPresentations();

  return (
    <section id="presentations" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center font-serif text-3xl font-bold text-dark md:text-4xl">
          Past Presentations
        </h2>
        <p className="mt-4 text-center text-dark/60">
          Talks and demos from previous meetups
        </p>

        <div className="mt-12 space-y-8">
          {presentations.map((presentation) => (
            <PresentationCard
              key={presentation.slug}
              presentation={presentation}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

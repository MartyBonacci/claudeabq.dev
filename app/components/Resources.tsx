import { ExternalLink } from "lucide-react";
import { resources } from "~/data/resources";

export function Resources() {
  return (
    <section id="resources" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center font-serif text-3xl font-bold text-dark md:text-4xl">
          Resources
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <a
              key={resource.title}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl border border-light-gray bg-light p-6 transition-colors hover:border-orange focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-serif text-lg font-bold text-dark group-hover:text-orange">
                  {resource.title}
                </h3>
                <ExternalLink
                  size={16}
                  className="mt-1 shrink-0 text-dark/40 group-hover:text-orange"
                />
              </div>
              <p className="mt-2 text-sm text-dark/60">
                {resource.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

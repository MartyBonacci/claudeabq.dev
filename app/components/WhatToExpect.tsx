import { Presentation, Laptop, Scale, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Feature {
  readonly icon: LucideIcon;
  readonly title: string;
  readonly description: string;
}

const features: readonly Feature[] = [
  {
    icon: Presentation,
    title: "Show & Tell",
    description:
      "People demo what they've been building with AI coding tools. Real projects, real workflows, honest results.",
  },
  {
    icon: Laptop,
    title: "Hands-On Time",
    description:
      "Bring your laptop and try it yourself with guidance from fellow developers.",
  },
  {
    icon: Scale,
    title: "Honest Comparisons",
    description:
      "We experiment with different AI coding tools and share what we find. No tool loyalty — just honest results.",
  },
  {
    icon: Users,
    title: "All Levels Welcome",
    description:
      "Whether you're learning to code or shipping production apps, there's a seat for you.",
  },
];

export function WhatToExpect() {
  return (
    <section id="what-to-expect" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center font-serif text-3xl font-bold text-dark md:text-4xl">
          What to Expect
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-light-gray bg-offwhite p-6"
            >
              <feature.icon size={32} className="text-orange" />
              <h3 className="mt-4 font-serif text-xl font-bold text-dark">
                {feature.title}
              </h3>
              <p className="mt-2 text-mid-gray">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const rules = [
  {
    title: "Be respectful.",
    description:
      "Treat everyone with kindness regardless of skill level, background, or experience.",
  },
  {
    title: "No recruiting spam.",
    description:
      "This is a learning community, not a hiring event. Casual networking is great; aggressive recruiting is not.",
  },
  {
    title: "Come to learn and share.",
    description: "Ask questions, show your work, help others.",
  },
  {
    title: "Keep it legal and ethical.",
    description:
      "Don't share proprietary code or use AI tools in ways that violate terms of service.",
  },
  {
    title: "Harassment-free zone.",
    description:
      "We follow a zero-tolerance policy. If someone makes you uncomfortable, reach out to the organizer.",
  },
] as const;

export function CodeOfConduct() {
  return (
    <section id="code-of-conduct" className="bg-offwhite px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-serif text-3xl font-bold text-dark md:text-4xl">
          Code of Conduct
        </h2>

        <ul className="mt-8 space-y-4" role="list">
          {rules.map((rule) => (
            <li
              key={rule.title}
              className="rounded-lg border border-light-gray bg-light p-5"
            >
              <p className="text-dark">
                <strong>{rule.title}</strong> {rule.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

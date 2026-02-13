import { ExternalLink } from "lucide-react";

export function CallForSpeakers() {
  return (
    <section id="present" className="bg-offwhite px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-serif text-3xl font-bold text-dark md:text-4xl">
          Show Us What&apos;s Working
        </h2>

        <div className="mt-8 space-y-5 text-dark">
          <p>
            Got something cool you&apos;ve built with AI coding tools? We want
            to see it. Presentations don&apos;t need to be polished — we&apos;d
            rather see a real workflow than a rehearsed pitch.
          </p>
          <p>
            We&apos;re especially interested in live builds, tool comparisons,
            MCP server demos, prompt engineering war stories, and anything where
            you can show us your actual process. Ten minutes is plenty. Thirty
            minutes is great if you&apos;ve got the material.
          </p>
          <p>
            Whether you&apos;re a bootcamp student who just shipped your first
            AI-assisted project or a senior engineer who&apos;s integrated
            Claude Code into a production pipeline — your perspective matters.
            The best talks come from people sharing honestly about what worked
            and what didn&apos;t.
          </p>
          <p>
            Reach out to Marty at a meetup or through{" "}
            <a
              href="https://luma.com/fvxse8v8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-baseline gap-1 text-orange underline decoration-orange/30 underline-offset-2 hover:decoration-orange focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2 rounded"
            >
              Lu.ma
              <ExternalLink size={12} />
            </a>{" "}
            to get on the schedule.
          </p>
        </div>
      </div>
    </section>
  );
}

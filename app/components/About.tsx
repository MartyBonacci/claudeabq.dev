export function About() {
  return (
    <section id="about" className="bg-offwhite px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-serif text-3xl font-bold text-dark md:text-4xl">
          What is Claude Code ABQ?
        </h2>

        <div className="mt-8 space-y-5 text-dark">
          <p>
            We&apos;re a community of developers who build with AI coding
            tools — and we&apos;re honest about what works and what doesn&apos;t.
            Claude Code is our primary tool right now, but we&apos;re not married
            to anything. We experiment, we compare, and we share what we find. If
            something else starts outperforming, we&apos;ll be the first to say
            so.
          </p>
          <p>
            Every month, we get together and show each other what we&apos;re
            building, what&apos;s working, and what isn&apos;t. Live demos,
            hands-on exploration, real talk. No slides full of hype — just
            developers sharing notes from the trenches.
          </p>
          <p>
            Open to all skill levels — from bootcamp students writing their first
            app to senior engineers shipping production systems. Based at the CNM
            STEMulus Center in downtown Albuquerque, hosted by{" "}
            <a
              href="https://deepdivecoding.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange underline decoration-orange/30 underline-offset-2 hover:decoration-orange focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2 rounded"
            >
              Deep Dive Coding
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

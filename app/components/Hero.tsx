import { ArrowRight, ArrowDown } from "lucide-react";
import { getUpcomingMeetup } from "~/data/meetups";

export function Hero() {
  const upcoming = getUpcomingMeetup();

  return (
    <section className="bg-gradient-to-b from-light to-offwhite px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="font-serif text-5xl font-bold tracking-tight text-dark md:text-6xl">
          Claude Code ABQ
        </h1>
        <p className="mt-4 text-xl text-mid-gray md:text-2xl">
          Albuquerque&apos;s AI-assisted development community
        </p>
        <p className="mt-6 text-lg text-mid-gray">
          Monthly meetups exploring AI-assisted development workflows. Bring
          your laptop, bring your curiosity, bring your honest opinions.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          {upcoming && (
            <a
              href={upcoming.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-orange px-6 py-3 text-lg font-semibold text-light transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2"
            >
              Register for Next Meetup
              <ArrowRight size={20} />
            </a>
          )}
          <a
            href="#about"
            className="inline-flex items-center gap-1 text-mid-gray transition-colors hover:text-orange focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2 rounded"
          >
            Learn more
            <ArrowDown size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

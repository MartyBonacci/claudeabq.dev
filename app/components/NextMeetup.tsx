import { Calendar, Clock, MapPin, ExternalLink } from "lucide-react";
import { getUpcomingMeetup } from "~/data/meetups";

export function NextMeetup() {
  const meetup = getUpcomingMeetup();

  return (
    <section id="next-meetup" className="px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-serif text-3xl font-bold text-dark md:text-4xl">
          Next Meetup
        </h2>

        {meetup ? (
          <div className="mt-8 rounded-xl border border-light-gray bg-offwhite p-8">
            <h3 className="font-serif text-2xl font-bold text-dark">
              {meetup.title}
            </h3>

            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-3 text-dark">
                <Calendar size={20} className="mt-0.5 shrink-0 text-orange" />
                <span>{meetup.date}</span>
              </div>
              <div className="flex items-start gap-3 text-dark">
                <Clock size={20} className="mt-0.5 shrink-0 text-orange" />
                <span>{meetup.time}</span>
              </div>
              <div className="flex items-start gap-3 text-dark">
                <MapPin size={20} className="mt-0.5 shrink-0 text-orange" />
                <span>{meetup.location}</span>
              </div>
            </div>

            <p className="mt-6 text-mid-gray">{meetup.description}</p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={meetup.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-orange px-6 py-3 font-semibold text-light transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2"
              >
                Register
                <ExternalLink size={16} />
              </a>
              <a
                href={meetup.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-light-gray px-6 py-3 font-semibold text-dark transition-colors hover:border-orange hover:text-orange focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2"
              >
                <Calendar size={16} />
                Add to Calendar
              </a>
            </div>
          </div>
        ) : (
          <div className="mt-8 rounded-xl border border-light-gray bg-offwhite p-8 text-center">
            <p className="text-lg text-mid-gray">
              Next meetup TBA — follow us to get notified
            </p>
            <a
              href="https://luma.com/fvxse8v8"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-orange hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2 rounded"
            >
              Follow on Lu.ma
              <ExternalLink size={16} />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

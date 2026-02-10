import { Youtube, ExternalLink } from "lucide-react";
import { recordings } from "~/data/recordings";

export function Recordings() {
  return (
    <section id="recordings" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center font-serif text-3xl font-bold text-dark md:text-4xl">
          Past Meetups
        </h2>

        {recordings.length > 0 ? (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recordings.map((recording) => (
              <a
                key={recording.id}
                href={recording.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-light-gray bg-offwhite overflow-hidden transition-colors hover:border-orange focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2"
              >
                <div className="aspect-video bg-light-gray" />
                <div className="p-4">
                  <h3 className="font-serif font-bold text-dark group-hover:text-orange">
                    {recording.title}
                  </h3>
                  <p className="mt-1 text-sm text-dark/60">
                    {recording.date}
                  </p>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="mt-12 rounded-xl border border-light-gray bg-offwhite p-12 text-center">
            <Youtube size={48} className="mx-auto text-dark/40" />
            <p className="mt-4 text-lg text-dark/60">
              Recordings coming soon after our first meetup!
            </p>
          </div>
        )}

        <div className="mt-8 text-center">
          <a
            href="https://youtube.com/@claudecodeabq"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-orange hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2 rounded"
          >
            <Youtube size={20} />
            Subscribe on YouTube
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}

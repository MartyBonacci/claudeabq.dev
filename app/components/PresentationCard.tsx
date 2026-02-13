import {
  Video,
  Github,
  ExternalLink,
  ChevronDown,
  Clock,
  Globe,
  CalendarDays,
} from "lucide-react";
import type { Presentation } from "~/data/presentations";

interface PresentationCardProps {
  readonly presentation: Presentation;
}

export function PresentationCard({ presentation }: PresentationCardProps) {
  const {
    meetupNumber,
    date,
    title,
    presenter,
    summary,
    highlights,
    videoUrl,
    sourceUrl,
    demoUrl,
    eventUrl,
    resources,
    tags,
  } = presentation;

  return (
    <article className="rounded-xl border border-light-gray bg-offwhite overflow-hidden">
      {/* Header */}
      <div className="border-b border-light-gray bg-light px-6 py-4">
        <p className="text-sm font-medium text-dark/50">
          Meetup #{meetupNumber} &middot; {date}
        </p>
        <h3 className="mt-1 font-serif text-xl font-bold text-dark md:text-2xl">
          {title}
        </h3>
        <p className="mt-1 text-sm text-dark/60">
          {presenter.name}
          {presenter.title && (
            <span className="text-dark/40"> &mdash; {presenter.title}</span>
          )}
        </p>
      </div>

      <div className="px-6 py-5 space-y-5">
        {/* Summary */}
        <p className="text-dark/80 leading-relaxed">{summary}</p>

        {/* Collapsible highlights */}
        {highlights.length > 0 && (
          <details className="group">
            <summary className="inline-flex cursor-pointer items-center gap-1.5 text-sm font-medium text-orange hover:opacity-80 list-none [&::-webkit-details-marker]:hidden">
              <ChevronDown
                size={16}
                className="transition-transform group-open:rotate-180"
              />
              Highlights
            </summary>
            <ul className="mt-3 space-y-2 pl-1">
              {highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex gap-2 text-sm text-dark/70"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange/60" />
                  {highlight}
                </li>
              ))}
            </ul>
          </details>
        )}

        {/* Action links */}
        <div className="flex flex-wrap gap-3">
          {videoUrl ? (
            <a
              href={videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-orange px-4 py-2 text-sm font-semibold text-light transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2"
            >
              <Video size={16} />
              Watch Recording
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 rounded-lg border border-light-gray px-4 py-2 text-sm text-dark/40">
              <Clock size={16} />
              Recording coming soon
            </span>
          )}

          {sourceUrl && (
            <a
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-light-gray px-4 py-2 text-sm font-medium text-dark/70 transition-colors hover:border-orange hover:text-orange focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2"
            >
              <Github size={16} />
              Source Code
            </a>
          )}

          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-light-gray px-4 py-2 text-sm font-medium text-dark/70 transition-colors hover:border-orange hover:text-orange focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2"
            >
              <Globe size={16} />
              Live Demo
            </a>
          )}

          {eventUrl && (
            <a
              href={eventUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-light-gray px-4 py-2 text-sm font-medium text-dark/70 transition-colors hover:border-orange hover:text-orange focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2"
            >
              <CalendarDays size={16} />
              Event Page
            </a>
          )}
        </div>

        {/* Resource pills */}
        {resources.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {resources.map((resource) => (
              <a
                key={resource.url}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-full border border-light-gray bg-light px-3 py-1 text-xs font-medium text-dark/60 transition-colors hover:border-orange hover:text-orange focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2"
              >
                {resource.label}
                <ExternalLink size={10} />
              </a>
            ))}
          </div>
        )}

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-blue/10 px-3 py-1 text-xs font-medium text-blue"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

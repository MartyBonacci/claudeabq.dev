export interface Meetup {
  readonly id: string;
  readonly title: string;
  readonly date: string;
  readonly time: string;
  readonly location: string;
  readonly description: string;
  readonly registrationUrl: string;
  readonly isUpcoming: boolean;
  readonly presenter?: { readonly name: string; readonly title?: string };
  readonly highlights?: readonly string[];
}

export const meetups: readonly Meetup[] = [
  {
    id: "2026-02-12",
    title: "Claude Code ABQ — First Meetup!",
    date: "Thursday, February 12, 2026",
    time: "6:00 PM – 8:00 PM MST",
    location: "Deep Dive Coding Classrooms, CNM STEMulus Center, Downtown Albuquerque",
    description:
      "First meetup! Live demo of Claude Code in action — see AI-assisted development workflows, hands-on exploration, and Q&A. Bring your laptop.",
    registrationUrl: "https://luma.com/fvxse8v8",
    isUpcoming: false,
  },
  {
    id: "2026-03-12",
    title:
      "The Most Valuable Developer on Your Team — Building AI Workflows That Scale",
    date: "Thursday, March 12, 2026",
    time: "6:00 PM – 8:00 PM MST",
    location: "Deep Dive Coding Classrooms, CNM STEMulus Center, Downtown Albuquerque",
    presenter: { name: "Marty Bonacci", title: "Organizer, Claude Code ABQ" },
    description:
      "The biggest AI advantage isn't one developer prompting better — it's one developer building the systems that make the entire team better. Marty breaks down how to design shareable AI workflow tools that give every developer on your team consistent, high-quality results from AI coding agents.",
    highlights: [
      "Why the most valuable hire right now is a developer who can systemize AI workflows for a team",
      "How to design tools that give your whole team access to repeatable, high-quality AI results",
      "Turning your best practices into shareable, reusable AI workflow systems",
    ],
    registrationUrl: "https://luma.com/eal0lrdd",
    isUpcoming: false,
  },
  {
    id: "2026-04-09",
    title: "Claude Code ABQ — April Meetup",
    date: "Thursday, April 9, 2026",
    time: "6:00 PM – 8:00 PM MST",
    location:
      "Deep Dive Coding Classrooms, CNM STEMulus Center, Downtown Albuquerque",
    description:
      "Topic and presenter TBA. Join us for our monthly meetup exploring AI-assisted development.",
    registrationUrl: "https://luma.com/opi8awvh",
    isUpcoming: true,
  },
];

export function getUpcomingMeetup(): Meetup | undefined {
  return meetups.find((m) => m.isUpcoming);
}

export function getPastMeetups(): readonly Meetup[] {
  return meetups.filter((m) => !m.isUpcoming);
}

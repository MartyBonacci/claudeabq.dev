export interface Meetup {
  readonly id: string;
  readonly title: string;
  readonly date: string;
  readonly time: string;
  readonly location: string;
  readonly description: string;
  readonly registrationUrl: string;
  readonly isUpcoming: boolean;
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
    isUpcoming: true,
  },
];

export function getUpcomingMeetup(): Meetup | undefined {
  return meetups.find((m) => m.isUpcoming);
}

export function getPastMeetups(): readonly Meetup[] {
  return meetups.filter((m) => !m.isUpcoming);
}

export interface PresentationResource {
  readonly label: string;
  readonly url: string;
}

export interface Presenter {
  readonly name: string;
  readonly title?: string;
}

export interface Presentation {
  readonly slug: string;
  readonly meetupNumber: number;
  readonly date: string;
  readonly title: string;
  readonly presenter: Presenter;
  readonly summary: string;
  readonly highlights: readonly string[];
  readonly videoUrl?: string;
  readonly sourceUrl?: string;
  readonly demoUrl?: string;
  readonly eventUrl?: string;
  readonly resources: readonly PresentationResource[];
  readonly tags: readonly string[];
}

export const presentations: readonly Presentation[] = [
  {
    slug: "2026-02-12-claude-code-live",
    meetupNumber: 1,
    date: "February 12, 2026",
    title: "Claude Code Live — Building a Tweeter App from Scratch",
    presenter: {
      name: "Marty Bonacci",
      title: "Organizer, Claude Code ABQ",
    },
    summary:
      "Live demo of Claude Code building tweeter-abq-2 (a Twitter-like app) in real time. Covered agentic workflows, spec-driven development with SpecSwarm, and how to guide an AI coding agent through a full project — from initial scaffold to working app.",
    highlights: [
      "Scaffolded a React Router v7 project from a single prompt",
      "Used SpecSwarm to generate specs, plans, and tasks automatically",
      "Showed how CLAUDE.md files steer agent behavior across sessions",
      "Demonstrated iterative design refinement with live feedback loops",
      "Deployed to production during the demo",
    ],
    sourceUrl: "https://github.com/MartyBonacci/tweeter-abq-2",
    eventUrl: "https://luma.com/fvxse8v8",
    resources: [
      {
        label: "Claude Code Docs",
        url: "https://docs.anthropic.com/en/docs/claude-code",
      },
      {
        label: "SpecSwarm",
        url: "https://github.com/MartyBonacci/specswarm",
      },
      {
        label: "Four Minds Pattern",
        url: "https://github.com/MartyBonacci/four-minds-pattern",
      },
    ],
    tags: ["Claude Code", "SpecSwarm", "React Router", "Live Build"],
  },
];

export function getPresentations(): readonly Presentation[] {
  return presentations;
}

export function getPresentationBySlug(
  slug: string,
): Presentation | undefined {
  return presentations.find((p) => p.slug === slug);
}

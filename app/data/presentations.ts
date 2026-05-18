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
  readonly noRecording?: boolean;
  readonly videoUrl?: string;
  readonly sourceUrl?: string;
  readonly demoUrl?: string;
  readonly eventUrl?: string;
  readonly resources: readonly PresentationResource[];
  readonly tags: readonly string[];
}

export const presentations: readonly Presentation[] = [
  {
    slug: "2026-05-14-inside-my-claude-code-setup",
    meetupNumber: 4,
    date: "May 14, 2026",
    title:
      "Inside My Claude Code Setup — Plugins, Skills, Agents, and Mobile Workflow",
    presenter: {
      name: "Marty Bonacci",
      title: "Organizer, Claude Code ABQ",
    },
    summary:
      "Marty walked through his full Claude Code configuration — status line, all 28 active plugins, skills, agents, slash commands, and a multi-device tmux workflow that runs Claude Code across phone, laptop, and desktop over SSH + Tailscale. The session capped off with a live plugin build (power-pages-liquid-js-plugin) created on the spot for an attendee.",
    highlights: [
      "Status line setup and the parts of the Claude Code config that actually matter day-to-day",
      "All 28 active plugins, organized by what they do — with install commands",
      "Multi-device workflow: tmux + Claude Code over SSH and Tailscale across phone, laptop, and desktop",
      "Live plugin build during the meetup: power-pages-liquid-js-plugin",
    ],
    noRecording: true,
    sourceUrl: "https://github.com/MartyBonacci/claude-code-abq-5-14-26",
    eventUrl: "https://luma.com/4mwcngo0",
    resources: [
      {
        label: "tmux-dangerclaude-config",
        url: "https://github.com/MartyBonacci/tmux-dangerclaude-config",
      },
      {
        label: "tmux-auto-claude-config",
        url: "https://github.com/MartyBonacci/tmux-auto-claude-config",
      },
      {
        label: "power-pages-liquid-js-plugin",
        url: "https://github.com/MartyBonacci/power-pages-liquid-js-plugin",
      },
    ],
    tags: ["Claude Code", "Plugins", "Mobile Workflow", "Tmux", "Live Build"],
  },
  {
    slug: "2026-04-09-unblocking-your-vision",
    meetupNumber: 3,
    date: "April 9, 2026",
    title: "Unblocking Your Vision: Entrepreneurship in the Agentic Age",
    presenter: { name: "Tim Farkas" },
    summary:
      "Explored how agentic AI is changing the math on what one person can build. Tim walked through how founders can validate faster, iterate continuously, and scale lean — with a real-world ed-tech platform as the case study.",
    highlights: [
      "How agentic AI is lowering the barrier to turning ideas into products",
      "Validating ideas faster and iterating continuously with smaller teams",
      "Real-world example: an ed-tech platform built with multiple AI technologies",
    ],
    noRecording: true,
    eventUrl: "https://luma.com/opi8awvh",
    resources: [],
    tags: ["Agentic AI", "Entrepreneurship", "Ed-Tech", "Founders"],
  },
  {
    slug: "2026-04-09-openclaw",
    meetupNumber: 3,
    date: "April 9, 2026",
    title: "OpenClaw: The Open-Source AI Agent That Actually Does Things",
    presenter: { name: "Michael Noyes-Smith" },
    summary:
      "Michael broke down OpenClaw — the open-source AI agent with 250K+ GitHub stars in four months. Covered what it is, why it matters, and how he uses it in his own workflow.",
    highlights: [
      "What OpenClaw is and how we got here",
      "Why it matters for developers and non-developers alike",
      "How Michael actually uses it day-to-day and resources to get started",
    ],
    noRecording: true,
    eventUrl: "https://luma.com/opi8awvh",
    resources: [],
    tags: ["OpenClaw", "AI Agents", "Open Source"],
  },
  {
    slug: "2026-03-12-most-valuable-developer",
    meetupNumber: 2,
    date: "March 12, 2026",
    title:
      "The Most Valuable Developer on Your Team — Building AI Workflows That Scale",
    presenter: {
      name: "Marty Bonacci",
      title: "Organizer, Claude Code ABQ",
    },
    summary:
      "Explored how the biggest AI advantage isn't one developer prompting better — it's one developer building systems that make the entire team better. Covered how to design shareable AI workflow tools that give every developer on your team consistent, high-quality results from AI coding agents.",
    highlights: [
      "Why the most valuable hire right now is a developer who can systemize AI workflows for a team",
      "How to design tools that give your whole team access to repeatable, high-quality AI results",
      "Turning your best practices into shareable, reusable AI workflow systems",
    ],
    noRecording: true,
    sourceUrl: "https://github.com/MartyBonacci/claude-abq-3-12-26",
    eventUrl: "https://luma.com/eal0lrdd",
    resources: [],
    tags: ["AI Workflows", "Team Scaling", "Claude Code", "Developer Tools"],
  },
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

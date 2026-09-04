export interface MeetupTalk {
  readonly title: string;
  readonly presenter: { readonly name: string; readonly title?: string };
  readonly description: string;
  readonly duration?: string;
  readonly highlights?: readonly string[];
  readonly sourceUrl?: string;
}

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
  readonly talks?: readonly MeetupTalk[];
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
      "Two talks this month — agentic entrepreneurship and an open-source AI agent with 250K+ GitHub stars.",
    registrationUrl: "https://luma.com/opi8awvh",
    isUpcoming: false,
    talks: [
      {
        title: "Unblocking Your Vision: Entrepreneurship in the Agentic Age",
        presenter: { name: "Tim Farkas" },
        description:
          "Agentic AI is changing the math on what one person can build. Tim walks through how founders can validate faster, iterate continuously, and scale lean — with a real-world ed-tech platform as the case study.",
        duration: "~45 min with Q&A",
        highlights: [
          "How agentic AI is lowering the barrier to turning ideas into products",
          "Validating ideas faster and iterating continuously with smaller teams",
          "Real-world example: an ed-tech platform built with multiple AI technologies",
        ],
      },
      {
        title:
          "OpenClaw: The Open-Source AI Agent That Actually Does Things",
        presenter: { name: "Michael Noyes-Smith" },
        description:
          "250K+ GitHub stars in four months. Michael breaks down what OpenClaw actually is, why it matters, and how he uses this open-source AI agent in his own workflow.",
        duration: "~30 min with Q&A",
        highlights: [
          "What OpenClaw is and how we got here",
          "Why it matters for developers and non-developers alike",
          "How Michael actually uses it day-to-day and resources to get started",
        ],
      },
    ],
  },
  {
    id: "2026-05-14",
    title:
      "Inside My Claude Code Setup — Plugins, Skills, Agents, and Mobile Workflow",
    date: "Thursday, May 14, 2026",
    time: "6:00 PM – 8:00 PM MST",
    location:
      "Deep Dive Coding Classrooms, CNM STEMulus Center, Downtown Albuquerque",
    presenter: { name: "Marty Bonacci", title: "Organizer, Claude Code ABQ" },
    description:
      "Marty walks through his full Claude Code configuration — status line, plugins, skills, commands, agents, and remote/mobile workflow. Stick around after for hands-on help getting your own Claude Code configured. Bring your laptop.",
    highlights: [
      "Claude Code configuration tour — status line, settings, and the pieces that matter",
      "Plugins, skills, commands, and agents: what they do and how they fit together",
      "Remote and mobile workflow — running Claude Code from anywhere",
      "Hands-on help after the talk — leave with a working config",
    ],
    registrationUrl: "https://luma.com/4mwcngo0",
    isUpcoming: false,
  },
  {
    id: "2026-06-11",
    title: "Claude Code ABQ — June Meetup",
    date: "Thursday, June 11, 2026",
    time: "6:00 PM – 8:00 PM MST",
    location:
      "Deep Dive Coding Classrooms, CNM STEMulus Center, Downtown Albuquerque",
    description:
      "Two talks this month — parallel Claude Code sessions with git worktrees, and an inside look at a working Claude Code workflow.",
    registrationUrl: "https://luma.com/j5dwo0un",
    isUpcoming: false,
    talks: [
      {
        title: "Parallel Claude Code: Working with Git Worktrees",
        presenter: { name: "Tim Farkas" },
        description:
          "Running one Claude Code session at a time? You're leaving speed on the table. Tim shows how he uses git worktrees to run multiple Claude Code sessions in parallel, each on its own branch, without them stepping on each other — build a feature in one worktree while Claude fixes a bug in another. No more waiting, no more context-switching headaches, no more merge chaos. Bring your laptop; you'll leave able to do this yourself.",
        highlights: [
          "What git worktrees are and why they pair perfectly with Claude Code",
          "Running multiple Claude Code sessions in parallel without conflicts",
          "A real workflow you can set up the same night",
          "Tips for keeping branches, sessions, and your sanity organized",
        ],
        sourceUrl: "https://github.com/farkastime/claude-abq-worktrees",
      },
      {
        title: "Inside My Claude Code Workflow",
        presenter: { name: "George Kephart" },
        description:
          "George opens up his Claude Code workflow and shows us how he actually works — a live look at the day-to-day habits, setup, and process behind his AI-assisted development.",
        sourceUrl: "https://github.com/GKephart/grill-me-slides",
      },
    ],
  },
  {
    id: "2026-07-09",
    title: "Your First Build with Claude Code — Live",
    date: "Thursday, July 9, 2026",
    time: "6:00 PM – 8:00 PM MST",
    location:
      "Deep Dive Coding Classrooms, CNM STEMulus Center, Downtown Albuquerque",
    description:
      "Bring your laptops. Someone will be guided through their first build with Claude Code — maybe you. If you've been watching from the sidelines, this is the month to raise your hand. We'll guide the volunteer through building a project, and they'll leave with a free week of Claude Pro to keep going. Everyone else: bring what you're working on, ask questions, help your neighbor, share what's working.",
    highlights: [
      "We'll guide one volunteer through building their first project, live",
      "The volunteer leaves with a free week of Claude Pro to keep going",
      "Never used Claude Code? This is the month to raise your hand",
      "Everyone else: bring your work, ask questions, help your neighbor",
    ],
    registrationUrl: "https://luma.com/3a0ndkvt",
    isUpcoming: false,
  },
  {
    id: "2026-08-13",
    title: "Beyond ChatGPT: Engineering Sovereign, On-Prem AI for Public Sector",
    date: "Thursday, August 13, 2026",
    time: "6:00 PM – 8:00 PM MST",
    location:
      "Deep Dive Coding Classrooms, CNM STEMulus Center, Downtown Albuquerque",
    presenter: {
      name: "Jacob Hall",
      title: "CISSP, Cybersecurity Engineer, Bernalillo County",
    },
    description:
      "Jacob manages security efforts at Bernalillo County. He'll take us beyond the chatbot subscription and into AI infrastructure at enterprise scale — what it takes to engineer sovereign, on-prem AI for the public sector.",
    registrationUrl: "https://luma.com/wevlihat",
    isUpcoming: false,
  },
  {
    id: "2026-09-10",
    title: "Five Months of Quiet Building — A Production App Made with Claude Code",
    date: "Thursday, September 10, 2026",
    time: "6:00 PM – 8:00 PM MST",
    location:
      "Deep Dive Coding Classrooms, CNM STEMulus Center, Downtown Albuquerque",
    presenter: { name: "Marty Bonacci", title: "Organizer, Claude Code ABQ" },
    description:
      "Marty unveils what he's been quietly building for the last 5 months: a real production web app built almost entirely with Claude Code. He'll show the agentic technique behind it — running separate mentor and builder instances of Claude Code that work together. Been building something yourself? Bring it. We're opening the floor for short demos of what you've made and the agentic techniques you used. Free. All skill levels. Bring your laptop.",
    highlights: [
      "A real production web app, built almost entirely with Claude Code over 5 months",
      "The mentor/builder technique — separate Claude Code instances working together",
      "Open floor for short demos: bring what you've built and the agentic techniques behind it",
      "Free, all skill levels, bring your laptop",
    ],
    registrationUrl: "https://luma.com/inp6mrc2",
    isUpcoming: true,
  },
];

export function getUpcomingMeetup(): Meetup | undefined {
  return meetups.find((m) => m.isUpcoming);
}

export function getPastMeetups(): readonly Meetup[] {
  return meetups.filter((m) => !m.isUpcoming);
}

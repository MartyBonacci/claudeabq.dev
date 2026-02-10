export interface Resource {
  readonly title: string;
  readonly description: string;
  readonly url: string;
}

export const resources: readonly Resource[] = [
  {
    title: "Claude Code",
    description: "Anthropic's AI coding agent that lives in your terminal",
    url: "https://docs.anthropic.com/en/docs/claude-code",
  },
  {
    title: "Install Claude Code",
    description: "Get started in 5 minutes",
    url: "https://docs.anthropic.com/en/docs/claude-code/getting-started",
  },
  {
    title: "Anthropic",
    description: "The company behind Claude",
    url: "https://anthropic.com",
  },
  {
    title: "SpecSwarm",
    description: "Specification-driven development plugin for Claude Code",
    url: "https://specswarm.com",
  },
  {
    title: "Deep Dive Coding",
    description: "Full-stack web development bootcamp at CNM Ingenuity",
    url: "https://deepdivecoding.com",
  },
  {
    title: "Claude.ai",
    description: "Try Claude in your browser",
    url: "https://claude.ai",
  },
];

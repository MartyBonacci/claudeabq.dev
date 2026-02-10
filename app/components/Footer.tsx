import { Github, Youtube, ExternalLink } from "lucide-react";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/claudecodeabq",
    icon: Github,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@claudecodeabq",
    icon: Youtube,
  },
  {
    label: "Lu.ma",
    href: "https://luma.com/fvxse8v8",
    icon: ExternalLink,
  },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-light-gray bg-dark px-6 py-12 text-light/80">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div>
            <p className="font-serif text-xl font-bold text-light">
              Claude Code ABQ
            </p>
            <p className="mt-1 text-sm">
              Albuquerque&apos;s AI-assisted development community
            </p>
            <p className="mt-4 text-sm">
              Hosted by{" "}
              <a
                href="https://deepdivecoding.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange hover:underline focus:outline-none focus:ring-2 focus:ring-orange rounded"
              >
                Deep Dive Coding
              </a>{" "}
              at CNM Ingenuity STEMulus Center
            </p>
            <p className="mt-1 text-sm">Organized by Marty Bonacci</p>
          </div>

          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-light/60 transition-colors hover:text-orange focus:outline-none focus:ring-2 focus:ring-orange rounded"
              >
                <link.icon size={24} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-light/10 pt-8 text-sm text-light/40">
          <p>
            Claude Code ABQ is a community group. Not affiliated with or
            endorsed by Anthropic.
          </p>
          <p className="mt-1">&copy; {year} Claude Code ABQ</p>
        </div>
      </div>
    </footer>
  );
}

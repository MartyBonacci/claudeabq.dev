import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Next Meetup", href: "#next-meetup" },
  { label: "About", href: "#about" },
  { label: "What to Expect", href: "#what-to-expect" },
  { label: "Code of Conduct", href: "#code-of-conduct" },
  { label: "Presentations", href: "#presentations" },
  { label: "Present", href: "#present" },
  { label: "Resources", href: "#resources" },
] as const;

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 border-b border-light-gray bg-light/95 backdrop-blur-sm"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="font-serif text-xl font-bold text-dark"
          aria-label="Claude Code ABQ home"
        >
          Claude Code ABQ
        </a>

        {/* Desktop nav */}
        <ul className="hidden gap-6 md:flex" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-dark/60 transition-colors hover:text-orange focus:text-orange focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2 rounded"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="text-dark md:hidden focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2 rounded"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <ul
          id="mobile-nav"
          className="border-t border-light-gray px-6 pb-4 md:hidden"
          role="list"
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block py-2 text-dark/60 transition-colors hover:text-orange focus:text-orange focus:outline-none focus:ring-2 focus:ring-orange rounded"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

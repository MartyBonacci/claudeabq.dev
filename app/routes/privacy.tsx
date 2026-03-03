import { Link } from "react-router";

import type { Route } from "./+types/privacy";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Privacy Policy — Claude Code ABQ" },
    {
      name: "description",
      content:
        "Privacy policy for Claude Code ABQ, Albuquerque's AI-assisted development community.",
    },
  ];
}

export default function Privacy() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-serif text-4xl font-bold text-dark">
          Privacy Policy
        </h1>

        <div className="mt-10 space-y-8 text-lg text-dark/80">
          <div>
            <h2 className="font-serif text-2xl font-bold text-dark">
              What we collect
            </h2>
            <p className="mt-3">
              When you sign up for a meetup through Lu.ma, that platform collects
              your name and email. If you reach out to us directly, we may
              collect whatever contact info you voluntarily provide.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-dark">
              What we don&apos;t do
            </h2>
            <p className="mt-3">
              We don&apos;t sell or share your information with third parties.
              Your data is used only to communicate about Claude Code ABQ
              meetups.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-dark">
              Third-party services
            </h2>
            <p className="mt-3">
              We use third-party platforms like Lu.ma for event registration.
              These services have their own privacy policies that govern how they
              handle your data.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-dark">
              Data deletion
            </h2>
            <p className="mt-3">
              Want your data removed? Just ask. Email us and we&apos;ll take
              care of it.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-dark">
              Contact
            </h2>
            <p className="mt-3">
              Questions about this policy? Reach out at{" "}
              <a
                href="mailto:marty@customcult.com"
                className="text-orange hover:underline"
              >
                marty@customcult.com
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-dark">
              Operated by
            </h2>
            <p className="mt-3">
              Claude Code ABQ is operated by Custom Cult LLC.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <Link
            to="/"
            className="text-orange hover:underline focus:outline-none focus:ring-2 focus:ring-orange rounded"
          >
            &larr; Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}

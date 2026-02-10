import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import { Nav } from "~/components/Nav";
import { Footer } from "~/components/Footer";
import "./app.css";

export const links: Route.LinksFunction = () => [
  { rel: "canonical", href: "https://claudeabq.dev" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Claude Code ABQ — Albuquerque's AI-Assisted Development Community"
        />
        <meta
          property="og:description"
          content="Monthly meetups for developers exploring AI-assisted development. We build with Claude Code, we experiment with everything else, and we share honest results. Hosted at CNM STEMulus Center in downtown Albuquerque."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://claudeabq.dev" />
        <Meta />
        <Links />
      </head>
      <body>
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <Nav />
        <main id="main-content">{children}</main>
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 text-center">
      <h1 className="font-serif text-4xl font-bold text-dark">{message}</h1>
      <p className="mt-4 text-mid-gray">{details}</p>
      {stack && (
        <pre className="mt-8 overflow-x-auto rounded-lg bg-dark p-4 text-left text-sm text-light">
          <code>{stack}</code>
        </pre>
      )}
    </div>
  );
}

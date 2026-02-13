import type { Route } from "./+types/home";
import { Hero } from "~/components/Hero";
import { NextMeetup } from "~/components/NextMeetup";
import { About } from "~/components/About";
import { WhatToExpect } from "~/components/WhatToExpect";
import { CodeOfConduct } from "~/components/CodeOfConduct";
import { PastPresentations } from "~/components/PastPresentations";
import { CallForSpeakers } from "~/components/CallForSpeakers";
import { Resources } from "~/components/Resources";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title:
        "Claude Code ABQ — Albuquerque's AI-Assisted Development Community",
    },
    {
      name: "description",
      content:
        "Monthly meetups for developers exploring AI-assisted development. We build with Claude Code, we experiment with everything else, and we share honest results. Hosted at CNM STEMulus Center in downtown Albuquerque.",
    },
  ];
}

export default function Home() {
  return (
    <>
      <Hero />
      <NextMeetup />
      <About />
      <WhatToExpect />
      <CodeOfConduct />
      <PastPresentations />
      <CallForSpeakers />
      <Resources />
    </>
  );
}

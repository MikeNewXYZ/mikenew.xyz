"use client";
import { WelcomeHero } from "@/blocks/WelcomeHero";

export default function HomePage() {
  return (
    <>
      <WelcomeHero
        topText="hello there"
        title="i'm mike"
        subtitle="Experienced British Web Developer & Hobbyist Game Developer"
        linkButton={{
          label: "check out my blog",
          href: "/blog",
          target: "_blank",
        }}
      />
    </>
  );
}

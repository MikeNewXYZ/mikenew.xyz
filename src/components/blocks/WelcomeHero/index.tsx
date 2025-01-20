import type { LinkObjectSchema } from "@/components/blocks/types";
import { DottedBackground } from "@/components/DottedBackground";
import { ButtonLink } from "@/components/ui/Button";
import { ViewProjectsButton } from "./ViewProjectsButton";

type WelcomeHeroProps = {
  topText: string;
  title: string;
  subtitle: string;
  linkButton: LinkObjectSchema;
};

function WelcomeHero({ topText, title, subtitle, linkButton }: WelcomeHeroProps) {
  return (
    <section className="w-full h-dvh overflow-hidden relative">
      <div className="container relative mx-auto flex flex-col text-center h-full items-center justify-center p-2 landscape:pb-2 lg:landscape:pb-16">
        <h2 className="text-3xl font-black uppercase sm:text-5xl">{topText}</h2>
        <h1 className="text-6xl font-black uppercase sm:text-9xl">{title}</h1>
        <p className="mx-auto mt-1 max-w-96 text-balance text-base normal-case sm:text-xl">
          {subtitle}
        </p>
        <ButtonLink
          className="mt-4 md:mt-6 text-sm md:text-base"
          href={linkButton.href}
          target={linkButton.target}
        >
          {linkButton.label}
        </ButtonLink>
      </div>

      <ViewProjectsButton />

      <DottedBackground />
    </section>
  );
}

export { WelcomeHero };

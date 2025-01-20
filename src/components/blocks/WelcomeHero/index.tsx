import type { NavigationLink } from "@/types";
import { DottedBackground } from "@/components/DottedBackground";
import { ButtonLink } from "@/components/ui/Button";
import { ViewProjectsButton } from "./ViewProjectsButton";
import cn from "@/utils/cn";

type WelcomeHeroProps = {
  topText: string;
  title: string;
  subtitle: string;
  linkButton: NavigationLink;
};

function WelcomeHero({ topText, title, subtitle, linkButton }: WelcomeHeroProps) {
  return (
    <section className="w-full h-dvh overflow-hidden relative">
      <div
        className={cn(
          "container relative mx-auto flex flex-col text-center h-full items-center justify-center landscape:pb-2 lg:landscape:pb-16",
          "h-600:landscape:text-left h-600:landscape:items-start h-600:landscape:pb-0 h-600:landscape:justify-start h-600:landscape:pt-6"
        )}
      >
        <h2 className="text-3xl font-black uppercase sm:text-5xl">{topText}</h2>
        <h1 className="text-6xl font-black uppercase sm:text-9xl">{title}</h1>
        <p className="mt-1 max-w-96 text-balance text-base normal-case sm:text-xl">{subtitle}</p>
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
export type { WelcomeHeroProps };

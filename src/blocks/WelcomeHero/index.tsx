import type { PagesBlocksWelcomeHero } from "@tina/__generated__/types";
import { DottedBackground } from "@/components/DottedBackground";
import { ButtonLink } from "@/components/ui/Button";
import { HiddenHeader } from "@/partials/Header";
import { ViewProjectsButton } from "./ViewProjectsButton";
import cn from "@/utils/cn";

function WelcomeHero({ topText, title, subtitle, link }: PagesBlocksWelcomeHero) {
	return (
		<section className="relative h-dvh w-full overflow-hidden">
			<div
				className={cn(
					"container relative mx-auto flex h-full flex-col items-center justify-center text-center landscape:pb-2 lg:landscape:pb-16",
					"h-600:landscape:items-start h-600:landscape:justify-start h-600:landscape:pb-0 h-600:landscape:text-left",
				)}
			>
				<HiddenHeader className="hidden h-600:landscape:block" />

				{topText && <h2 className="text-3xl font-black uppercase sm:text-5xl">{topText}</h2>}
				{title && <h1 className="text-6xl font-black uppercase sm:text-9xl">{title}</h1>}
				{subtitle && (
					<p className="mt-1 max-w-96 text-balance text-base normal-case sm:text-xl">{subtitle}</p>
				)}

				{link && (
					<ButtonLink
						className="mt-4 text-sm md:mt-6 md:text-base"
						href={link.url}
						isExternal={link.isExternal as boolean}
					>
						{link.label}
					</ButtonLink>
				)}
			</div>

			<ViewProjectsButton />
			<DottedBackground />
		</section>
	);
}

export { WelcomeHero };

import { DottedBackground } from "@/components/DottedBackground";
import { ButtonLink } from "@/components/ui/Button";
import { HouseLine } from "@phosphor-icons/react/dist/ssr";

export default function NotFound() {
	return (
		<section className="relative h-dvh w-full overflow-hidden">
			<div className="flex h-full w-full flex-col items-center justify-center text-center lg:pb-10">
				<h2 className="text-5xl font-bold uppercase">Not Found</h2>
				<p className="text-xl">Could not find requested resource.</p>
				<ButtonLink className="mt-6" href="/">
					<HouseLine className="mb-0.5" />
					<span>go back home</span>
				</ButtonLink>
			</div>

			<DottedBackground />
		</section>
	);
}

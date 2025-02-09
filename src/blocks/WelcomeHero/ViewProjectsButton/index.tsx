"use client";
import { Button } from "@/components/ui/Button";
import cn from "@/utils/cn";
import { ArrowCircleDown } from "@phosphor-icons/react";

function ViewProjectsButton() {
	const scrollTo = () => {
		const element = document.getElementById("projects-section");

		element?.scrollIntoView({
			behavior: "smooth",
		});
	};

	return (
		<div
			className={cn(
				"container absolute bottom-5 left-1/2 flex -translate-x-1/2 animate-pulse flex-col items-center justify-center text-center",
				"h-600:landscape:items-end h-600:landscape:text-right",
			)}
		>
			<div className="text-sm uppercase sm:text-base">view projects</div>

			<Button
				className="text-5xl sm:text-6xl"
				variant="icon"
				aria-label="view projects"
				onPress={scrollTo}
			>
				<ArrowCircleDown />
			</Button>
		</div>
	);
}

export { ViewProjectsButton };

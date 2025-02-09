"use client";
import type { NavigationLink } from "@/types";
import { Button, ButtonLink } from "@/components/ui/Button";
import { ArrowFatRight, GithubLogo, LinkedinLogo, List } from "@phosphor-icons/react";
import {
	DialogTrigger,
	DialogOverlay,
	DialogContent,
	DialogHeader,
	DialogMain,
	DialogFooter,
} from "@/components/ui/Dialog";
import cn from "@/utils/cn";

// TODO add social links prop

const HEADER_HEIGHT = "60px";

type HeaderProps = {
	menuLinks: NavigationLink[];
};

function Header({ menuLinks }: HeaderProps) {
	return (
		<header className="absolute inset-0 z-10 w-full" style={{ height: HEADER_HEIGHT }}>
			<nav className="container flex h-full items-center">
				<ButtonLink className="p-0 font-bold" variant="ghost" href="/">
					MikeNew.XYZ
				</ButtonLink>

				{/* ANCHOR Desktop Menu */}
				<ul className="hidden w-full flex-1 justify-end gap-2 md:flex">
					{menuLinks.map(({ label, href, target }, index) => (
						<li key={index} className="flex">
							<ButtonLink href={href} target={target}>
								{label}
							</ButtonLink>
						</li>
					))}
				</ul>

				{/* ANCHOR Mobile Menu */}
				<div className="flex flex-1 justify-end md:hidden">
					<DialogTrigger>
						<Button className="text-3xl" variant="icon" aria-label="menu button">
							<List />
						</Button>

						<DialogOverlay>
							<DialogContent side="bottom">
								<DialogHeader className="font-bold uppercase">menu</DialogHeader>

								<DialogMain>
									<ul className="flex h-full flex-col gap-4 overflow-y-auto overflow-x-hidden">
										{menuLinks.map(({ label, href, target }, index) => (
											<li key={index} className="flex">
												<ButtonLink
													className="w-full py-2 text-2xl"
													href={href}
													target={target}
													autoFocus={index === 0}
												>
													<ArrowFatRight />
													<span>{label}</span>
												</ButtonLink>
											</li>
										))}
									</ul>
								</DialogMain>

								<DialogFooter className="flex items-center justify-between">
									<ButtonLink className="text-base font-bold uppercase" variant="ghost" href="/">
										MIKENEW.XYZ
									</ButtonLink>

									<ul className="flex gap-1">
										<li className="flex">
											<ButtonLink
												className="text-xl"
												variant="icon"
												href="https://github.com/MikeNewXYZ"
												target="_blank"
												aria-label="github"
											>
												<GithubLogo />
											</ButtonLink>
										</li>
										<li className="flex">
											<ButtonLink
												className="text-xl"
												variant="icon"
												href="https://www.linkedin.com/in/mikenewxyz/"
												target="_blank"
												aria-label="linkedin"
											>
												<LinkedinLogo />
											</ButtonLink>
										</li>
									</ul>
								</DialogFooter>
							</DialogContent>
						</DialogOverlay>
					</DialogTrigger>
				</div>
			</nav>
		</header>
	);
}

type HiddenHeaderProps = {
	className?: string;
};

function HiddenHeader({ className }: HiddenHeaderProps) {
	return <div className={cn("invisible", className)} style={{ height: HEADER_HEIGHT }}></div>;
}

export { Header, HiddenHeader, HEADER_HEIGHT };
export type { HeaderProps, HiddenHeaderProps };

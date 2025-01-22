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
    <header className="w-full absolute inset-0 z-10" style={{ height: HEADER_HEIGHT }}>
      <nav className="flex items-center container h-full">
        <ButtonLink className="font-bold" variant="ghost" href="/">
          MikeNew.XYZ
        </ButtonLink>

        {/* ANCHOR Desktop Menu */}
        <ul className="flex-1 md:flex justify-end w-full gap-2 hidden">
          {menuLinks.map(({ label, href, target }, index) => (
            <li key={index} className="flex">
              <ButtonLink href={href} target={target}>
                {label}
              </ButtonLink>
            </li>
          ))}
        </ul>

        {/* ANCHOR Mobile Menu */}
        <div className="flex-1 flex md:hidden justify-end">
          <DialogTrigger>
            <Button className="text-3xl" variant="icon" aria-label="menu button">
              <List />
            </Button>

            <DialogOverlay>
              <DialogContent side="bottom">
                <DialogHeader className="uppercase font-bold">menu</DialogHeader>

                <DialogMain>
                  <ul className="flex flex-col gap-4 h-full overflow-x-hidden overflow-y-auto">
                    {menuLinks.map(({ label, href, target }, index) => (
                      <li key={index} className="flex">
                        <ButtonLink
                          className="w-full text-2xl py-2"
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
                  <ButtonLink className="uppercase font-bold text-base" variant="ghost" href="/">
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

import type { ReactNode } from "react";
import { Header } from "@/partials/Header";

type PortfolioLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function PortfolioLayout({ children }: PortfolioLayoutProps) {
  return (
    <>
      <Header
        menuLinks={[
          { label: "Resume", href: "/resume", target: "_self" },
          { label: "Contact", href: "/contact", target: "_self" },
        ]}
      />
      <main className="flex-1 flex flex-col w-full overflow-x-hidden">{children}</main>
      <footer>test footer</footer>
    </>
  );
}

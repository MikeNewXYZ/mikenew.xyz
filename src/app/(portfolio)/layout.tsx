import type { ReactNode } from "react";

type PortfolioLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function PortfolioLayout({ children }: PortfolioLayoutProps) {
  return (
    <>
      <main className="flex flex-col w-full overflow-x-hidden">{children}</main>
    </>
  );
}

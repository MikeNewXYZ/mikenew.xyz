import { DottedBackground } from "@/components/DottedBackground";
import { ButtonLink } from "@/components/ui/Button";
import { HouseLine } from "@phosphor-icons/react/dist/ssr";

export default function BlogPage() {
  return (
    <section className="w-full h-dvh overflow-hidden relative">
      <div className="container max-w-[30rem] text-balance h-full flex flex-col justify-center items-center text-center lg:pb-10">
        <h2 className="text-5xl font-bold uppercase">Page Not Found</h2>
        <p className="text-xl">
          This blog is currently under construction. We appreciate your patience!
        </p>
        <ButtonLink className="mt-6" href="/">
          <HouseLine className="mb-0.5" />
          <span>Return to Home</span>
        </ButtonLink>
      </div>

      <DottedBackground />
    </section>
  );
}

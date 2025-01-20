import { DottedBackground } from "@/components/DottedBackground";
import { ButtonLink } from "@/components/ui/Button";
import { HouseLine } from "@phosphor-icons/react/dist/ssr";

export default function NotFound() {
  return (
    <section className="w-full h-dvh overflow-hidden relative">
      <div className="w-full h-full flex flex-col justify-center items-center text-center lg:pb-10">
        <h2 className="text-5xl font-bold uppercase ">Not Found</h2>
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

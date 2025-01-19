"use client";
import type { LinkProps as LinkAriaProps } from "react-aria-components";
import type { VariantProps } from "class-variance-authority";
import { Link as LinkAria, composeRenderProps } from "react-aria-components";
import { buttonVariants } from "@/components/ui/Button";
import cn from "@/utils/cn";

type ButtonLinkProps = LinkAriaProps & VariantProps<typeof buttonVariants>;

function ButtonLink({ variant, className, ...props }: ButtonLinkProps) {
  return (
    <LinkAria
      className={composeRenderProps(className, (className) =>
        cn(
          buttonVariants({
            variant,
            className,
          })
        )
      )}
      {...props}
    />
  );
}

export { ButtonLink };
export type { ButtonLinkProps };

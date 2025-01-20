"use client";
import type {
  ButtonProps as ButtonAriaProps,
  LinkProps as LinkAriaProps,
} from "react-aria-components";
import type { VariantProps } from "class-variance-authority";
import { Button as ButtonAria, Link as LinkAria, composeRenderProps } from "react-aria-components";
import { cva } from "class-variance-authority";
import cn from "@/utils/cn";

const buttonVariants = cva(
  [
    "inline-flex items-center gap-2 text-primary border-2 border-primary w-fit py-0.5 px-2.5 text-base uppercase transition-transform duration-700",
    "focus:scale-95 focus:outline-none focus:transition-transform focus:duration-700",
    "hover:scale-95 hover:transition-transform hover:duration-700",
    "pressed:scale-90 pressed:duration-200",
    "disabled:opacity-50 disabled:line-through transition-opacity",
  ],
  {
    variants: {
      variant: {
        default: "bg-secondary focus:border-dashed hover:border-dashed",
        ghost: "border-none focus-visible:border-dashed",
        icon: "border-none p-0.5 focus-visible:border-dashed",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

type ButtonProps = ButtonAriaProps & VariantProps<typeof buttonVariants>;

function Button({ variant, className, ...props }: ButtonProps) {
  return (
    <ButtonAria
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

export { Button, ButtonLink, buttonVariants };
export type { ButtonProps, ButtonLinkProps };

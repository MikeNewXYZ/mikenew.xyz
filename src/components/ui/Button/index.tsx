"use client";
import type { ButtonProps as ButtonAriaProps } from "react-aria-components";
import type { VariantProps } from "class-variance-authority";
import { Button as ButtonAria, composeRenderProps } from "react-aria-components";
import { cva } from "class-variance-authority";
import cn from "@/utils/cn";

const buttonVariants = cva(
  [
    "inline-block text-primary border-2 border-primary w-fit py-0.5 px-2.5 text-base uppercase",
    "focus:animate-wiggle focus:outline-none",
    "hover:animate-wiggle",
    "pressed:animate-jump pressed:animate-duration-600",
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

export { Button, buttonVariants };
export type { ButtonProps };

"use client";
import type {
  ButtonProps as ButtonAriaProps,
  LinkProps as LinkAriaProps,
} from "react-aria-components";
import type { VariantProps } from "class-variance-authority";
import { Button as ButtonAria, Link as LinkAria, composeRenderProps } from "react-aria-components";
import { cva } from "class-variance-authority";
import cn from "@/utils/cn";

const outlineFocusClasses = "focus-visible:outline-dashed focus-visible:outline-primary";

const buttonVariants = cva(
  [
    "inline-flex items-center gap-2 text-primary border-2 border-primary w-fit py-0.5 px-2.5 text-base uppercase",
    "disabled:opacity-50 disabled:line-through transition-opacity",
    "pressed:bg-primary pressed:text-secondary",
    "outline-primary focus:outline-none",
  ],
  {
    variants: {
      variant: {
        default: "bg-secondary focus:border-dashed hover:border-dashed",
        ghost: `border-none focus-visible:outline-2 ${outlineFocusClasses}`,
        icon: `border-none p-0.5 focus-visible:outline-2 ${outlineFocusClasses}`,
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

type ButtonLinkProps = LinkAriaProps & VariantProps<typeof buttonVariants> & {
  isExternal?: boolean;
};

function ButtonLink({ variant, className, isExternal, ...props }: ButtonLinkProps) {
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
      target={isExternal ? "_blank" : "_self"}
      {...props}
    />
  );
}

export { Button, ButtonLink, buttonVariants };
export type { ButtonProps, ButtonLinkProps };

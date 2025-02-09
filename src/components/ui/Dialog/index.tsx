"use client";
import type { ComponentProps, HTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";
import type {
	DialogProps as DialogAriaProps,
	ModalOverlayProps as ModalOverlayAriaProps,
} from "react-aria-components";
import {
	Dialog as DialogAria,
	DialogTrigger as DialogTriggerAria,
	Modal as ModalAria,
	ModalOverlay as ModalOverlayAria,
	composeRenderProps,
} from "react-aria-components";
import { cva } from "class-variance-authority";
import { X } from "@phosphor-icons/react";
import { Button } from "@/components/ui/Button";
import cn from "@/utils/cn";

const sheetVariants = cva(["fixed z-50 gap-4 bg-secondary border-primary text-primary shadow-lg"], {
	variants: {
		side: {
			top: `
        h-[calc(100dvh-3rem)] top-0 inset-x-0 border-b-2
        entering:animate-fade-down exiting:animate-fade-down exiting:animate-reverse
      `,
			bottom: `
        h-[calc(100dvh-3rem)] bottom-0 inset-x-0 border-t-2
        entering:animate-fade-up exiting:animate-fade-up exiting:animate-reverse
      `,
			left: `
        inset-y-0 left-0 w-3/4 border-r-2 sm:max-w-sm
        entering:animate-fade-right exiting:animate-fade-right exiting:animate-reverse
      `,
			right: `
        inset-y-0 right-0 w-3/4 border-l-2 sm:max-w-sm
        entering:animate-fade-left exiting:animate-fade-left exiting:animate-reverse
      `,
		},
	},
});

const DialogTrigger = DialogTriggerAria;

function DialogOverlay({ className, isDismissable = true, ...props }: ModalOverlayAriaProps) {
	return (
		<ModalOverlayAria
			className={composeRenderProps(className, (className) =>
				cn(
					`fixed inset-0 z-50 bg-secondary/80 entering:animate-fade entering:animate-duration-300 exiting:animate-fade exiting:animate-reverse exiting:animate-duration-200`,
					className,
				),
			)}
			isDismissable={isDismissable}
			{...props}
		/>
	);
}

type DialogContentProps = Omit<ComponentProps<typeof ModalAria>, "children"> &
	VariantProps<typeof sheetVariants> & {
		children?: DialogAriaProps["children"];
		role?: DialogAriaProps["role"];
		closeButton?: boolean;
	};

function DialogContent({
	className,
	children,
	side,
	role,
	closeButton = true,
	...props
}: DialogContentProps) {
	return (
		<ModalAria
			className={composeRenderProps(className, (className) =>
				cn(
					side
						? sheetVariants({ side })
						: `sm:max-w-m fixed left-1/2 top-1/2 max-h-96 min-h-60 w-full max-w-[90%] -translate-x-1/2 -translate-y-1/2 border-2 border-primary bg-secondary text-primary shadow-lg entering:animate-fade exiting:animate-fade exiting:animate-reverse lg:max-w-xl h-600:max-h-[80dvh]`,
					"entering:animate-duration-400 flex exiting:animate-duration-200",
					className,
				),
			)}
			{...props}
		>
			<DialogAria className="flex flex-1 flex-col overflow-hidden outline-none" role={role}>
				{composeRenderProps(children, (children, renderProps) => (
					<>
						{closeButton && (
							<Button
								className="absolute right-0.5 top-0.5"
								variant="icon"
								onPress={renderProps.close}
							>
								<X className="text-2xl" />
								<span className="sr-only">Close</span>
							</Button>
						)}

						{children}
					</>
				))}
			</DialogAria>
		</ModalAria>
	);
}

function DialogHeader({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
	return <div className={cn("text-xlw-full border-b border-primary p-2", className)} {...props} />;
}

function DialogMain({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			className={cn("flex w-full flex-1 flex-col overflow-y-auto overflow-x-hidden p-2", className)}
			{...props}
		/>
	);
}

function DialogFooter({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
	return <div className={cn("w-full border-t border-primary p-2", className)} {...props} />;
}

export { DialogTrigger, DialogOverlay, DialogContent, DialogHeader, DialogMain, DialogFooter };
export type { DialogContentProps };

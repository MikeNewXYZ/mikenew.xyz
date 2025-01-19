"use client";
import type {
  InputProps as InputAriaProps,
  TextFieldProps as TextFieldAriaProps,
  TextAreaProps as TextAreaAriaProps,
} from "react-aria-components";
import {
  TextField as TextFieldAria,
  TextArea as TextAreaAria,
  Input as InputAria,
  Label,
  FieldError,
  Text,
  composeRenderProps,
} from "react-aria-components";
import cn from "@/utils/cn";

const COMMON_INPUT_CLASSNAMES = `
  flex w-full h-9 bg-secondary text-primary border-2 px-1.5
  focus:outline-none focus:border-dashed
  disabled:opacity-50 disabled:cursor-not-allowed
`;

function Input({ className, ...props }: InputAriaProps) {
  return (
    <InputAria
      className={composeRenderProps(className, (className) =>
        cn(COMMON_INPUT_CLASSNAMES, className)
      )}
      {...props}
    />
  );
}

function TextArea({ className, ...props }: TextAreaAriaProps) {
  return (
    <TextAreaAria
      className={composeRenderProps(className, (className) =>
        cn(COMMON_INPUT_CLASSNAMES, "min-h-48 p-1.5 h-auto", className)
      )}
      {...props}
    />
  );
}

type TextFieldProps = TextFieldAriaProps & {
  label?: string;
  description?: string;
  textArea?: boolean;
};

function TextField({ label, description, textArea, className, ...props }: TextFieldProps) {
  return (
    <TextFieldAria
      className={composeRenderProps(className, (className) =>
        cn("group flex flex-col gap-0.5", className)
      )}
      {...props}
    >
      <Label className="text-md">{label}</Label>
      {textArea ? <TextArea /> : <Input />}
      {description && (
        <Text className="text-sm opacity-70" slot="description">
          {description}
        </Text>
      )}
      <FieldError className="italic text-sm">
        {({ defaultChildren }) =>
          (defaultChildren = (
            <>
              <span className="font-bold">Error: </span>
              <span>{defaultChildren}</span>
            </>
          ))
        }
      </FieldError>
    </TextFieldAria>
  );
}

export { TextField, Input, TextArea };
export type { TextFieldProps };

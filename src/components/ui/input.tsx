"use client";

import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { useState, useRef } from "react";

import { cn } from "@/lib/utils/";

const inputVariants = cva("input", {
  variants: {
    variant: {
      outlined: "input--outlined",
      underlined: "input--underlined",
    },
    disabled: {
      false: "",
      true: "is-disabled",
    },
    isInvalid: {
      false: "",
      true: "is-invalid",
    },
  },
  defaultVariants: {
    variant: "outlined",
    disabled: false,
  },
});

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "disabled">, VariantProps<typeof inputVariants> {
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  inputWrapperClassname?: string;
  isInvalid?: boolean;
  error?: string;
  label?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, inputWrapperClassname, type, startContent, endContent, placeholder, isInvalid = false, variant, disabled = false, error, onChange, onFocus, onBlur, value, defaultValue, ...props }, ref) => {
  // Initialize filled state based on defaultValue or value prop
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(() => {
    const initialValue = value ?? defaultValue;
    return initialValue !== undefined && initialValue !== null && initialValue !== "";
  });

  const internalInputRef = useRef<HTMLInputElement>(null);

  const inputRef = React.useCallback(
    (node: HTMLInputElement) => {
      internalInputRef.current = node;
      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
      // Check if input has value after ref is set
      if (node) {
        const inputValue = node.value;
        setIsFilled(inputValue !== "" && inputValue !== undefined && inputValue !== null);
      }
    },
    [ref]
  );

  const checkInputValue = () => {
    if (internalInputRef.current) {
      const inputValue = internalInputRef.current.value;
      setIsFilled(inputValue !== "" && inputValue !== undefined && inputValue !== null);
    }
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    checkInputValue();
    onChange?.(e);
  };

  const hasPlaceholder = Boolean(placeholder);

  return (
    <div className={cn("input-group", inputWrapperClassname)}>
      <div
        className={cn(inputVariants({ variant, disabled, isInvalid }), className, {
          "has-placeholder": hasPlaceholder,
          "is-focused": isFocused,
          "is-filled": isFilled,
        })}
        data-placeholder={placeholder}>
        {startContent && <div className='input-addon input-addon-start'>{startContent}</div>}

        <input ref={inputRef} disabled={disabled as boolean} type={type} className='input-field' onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} {...props} />

        {endContent && <div className='input-addon input-addon-end'>{endContent}</div>}
      </div>

      {error && <p className='input-error'>{error}</p>}
    </div>
  );
});

Input.displayName = "Input";

export default Input;

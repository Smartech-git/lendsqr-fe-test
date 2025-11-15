"use client";

import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { Icon } from "@/components/icons";
import { cn } from "@/lib/utils/";

const buttonVariants = cva("btn", {
  variants: {
    variant: {
      filled: "btn--filled",
      outlined: "btn--outlined",
      flat: "btn--flat",
      link: "btn--link",
    },
    size: {
      default: "btn--size-default",
      md: "btn--size-md",
      sm: "btn--size-sm",
      fit: "btn--size-fit",
      icon: "btn--size-icon",
    },
  },
  defaultVariants: {
    variant: "filled",
    size: "default",
  },
});

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "disabled">, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  isLoading?: boolean;
  disabled?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, startContent, endContent, disabled = false, isLoading = false, children, ...props }, ref) => {
  return (
    <button className={cn(buttonVariants({ variant, size }), className)} ref={ref} disabled={disabled as boolean} {...props}>
      {isLoading ? (
        <Icon name='icon-spinner' width={20} height={20} className='btn-spinner' />
      ) : (
        <>
          {startContent && startContent}
          {children}
          {endContent && endContent}
        </>
      )}
    </button>
  );
});
Button.displayName = "Button";

export default Button;

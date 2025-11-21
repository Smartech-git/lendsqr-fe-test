"use client";

import * as SelectPrimitive from "@radix-ui/react-select";
import { cva, VariantProps } from "class-variance-authority";
import * as React from "react";

import { Icon } from "@/components/icons";
import { cn } from "@/lib/utils/";

interface SelectProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Root> {
  triggerProps?: SelectTriggerProps;
  contentProps?: SelectContentProps;
  options?: Options;
  error?: string;
  label?: string;
  isInvalid?: boolean;
  children?: React.ReactNode;
  placeHolder?: SelectTriggerProps["placeholder"];
  size?: VariantProps<typeof selectTriggerVariants>["size"];
}

const Select = ({ children, triggerProps, contentProps, options, isInvalid, placeHolder, error, label, size, ...rootProps }: SelectProps) => {
  return (
    <SelectPrimitive.Root {...rootProps}>
      {children ? (
        children
      ) : (
        <>
          <SelectTrigger placeholder={placeHolder} isInvalid={isInvalid} size={size} error={error} label={label} {...triggerProps} />
          <SelectContent options={options} {...contentProps} />
        </>
      )}
    </SelectPrimitive.Root>
  );
};
Select.displayName = "Select";

const SelectGroup = SelectPrimitive.Group;
const SelectValue = SelectPrimitive.Value;

const selectTriggerVariants = cva("input select-trigger", {
  variants: {
    size: {
      default: "input--size-default",
      md: "input--size-md",
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
    disabled: false,
    size: "default",
  },
});

type NativeSelectProps = Omit<React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>, "disabled" | "size">;

interface SelectTriggerProps extends NativeSelectProps, VariantProps<typeof selectTriggerVariants> {
  error?: string;
  label?: string;
  placeholder?: string;
}
const SelectTrigger = React.forwardRef<React.ComponentRef<typeof SelectPrimitive.Trigger>, SelectTriggerProps>(({ className, placeholder, children, error, label, value, isInvalid, disabled, size, ...props }, ref) => (
  <div className='input-group'>
    {label && <p className='element-label'>{label}</p>}
    <SelectPrimitive.Trigger
      ref={ref}
      className={cn(
        selectTriggerVariants({
          disabled: disabled ? true : false,
          isInvalid: isInvalid ? true : false,
          size,
        }),
        className
      )}
      {...props}>
      <SelectValue placeholder={placeholder}>{value}</SelectValue>
      <SelectPrimitive.Icon asChild>
        <Icon name='icon-arrow-down' width={14} height={14} className='select-icon' />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
    {error && <p className='element-error'>{error}</p>}
  </div>
));
SelectTrigger.displayName = "SelectTrigger";

const SelectScrollUpButton = React.forwardRef<React.ComponentRef<typeof SelectPrimitive.ScrollUpButton>, React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton ref={ref} className={cn("select-scroll-button", className)} {...props}>
    <Icon name='icon-arrow-up' width={16} height={16} />
  </SelectPrimitive.ScrollUpButton>
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const SelectScrollDownButton = React.forwardRef<React.ComponentRef<typeof SelectPrimitive.ScrollDownButton>, React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton ref={ref} className={cn("select-scroll-button", className)} {...props}>
    <Icon name='icon-arrow-down' width={16} height={16} />
  </SelectPrimitive.ScrollDownButton>
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;

interface SelectContentProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content> {
  options?: Options;
}
const SelectContent = React.forwardRef<React.ComponentRef<typeof SelectPrimitive.Content>, SelectContentProps>(({ className, hidden, options, position = "popper", children, ...props }, ref) =>
  hidden ? null : (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content ref={ref} className={cn("element-content", className)} position={position} {...props}>
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport className={cn("select-viewport")}>
          {options
            ? options.map((option) => (
                <SelectItem key={option.value || option.id} value={option.value || option.id || ""}>
                  {option.label || option.name}
                </SelectItem>
              ))
            : children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
);
SelectContent.displayName = "SelectContent";

const SelectLabel = React.forwardRef<React.ComponentRef<typeof SelectPrimitive.Label>, React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>>(({ className, ...props }, ref) => <SelectPrimitive.Label ref={ref} className={cn("select-label", className)} {...props} />);
SelectLabel.displayName = SelectPrimitive.Label.displayName;

interface SelectItemProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item> {
  showIndicator?: boolean;
}
const SelectItem = React.forwardRef<React.ComponentRef<typeof SelectPrimitive.Item>, SelectItemProps>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item ref={ref} className={cn("select-item element-item", className)} {...props}>
    <SelectPrimitive.ItemIndicator className='select-item-indicator' asChild>
      <Icon name='icon-check-mark' width={14} height={14} />
    </SelectPrimitive.ItemIndicator>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<React.ComponentRef<typeof SelectPrimitive.Separator>, React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>>(({ className, ...props }, ref) => <SelectPrimitive.Separator ref={ref} className={cn("select-separator", className)} {...props} />);
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export { Select, SelectGroup, SelectValue, SelectTrigger, SelectContent, SelectLabel, SelectItem, SelectSeparator, SelectScrollUpButton, SelectScrollDownButton };

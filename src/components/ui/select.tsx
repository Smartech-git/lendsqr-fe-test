"use client";

import * as SelectPrimitive from "@radix-ui/react-select";
import * as React from "react";

import { Icon } from "@/components/icons";
import { cn } from "@/lib/utils/";

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

interface SelectTriggerProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> {
  isInvalid?: boolean;
  error?: string;
  label?: string;
}

const SelectTrigger = React.forwardRef<React.ComponentRef<typeof SelectPrimitive.Trigger>, SelectTriggerProps>(({ className, children, error, label, isInvalid, ...props }, ref) => (
  <div className='input-group'>
    {label && <p className='input-label'>{label}</p>}
    <SelectPrimitive.Trigger
      ref={ref}
      className={cn("input select-trigger", className, {
        "is-invalid": isInvalid,
      })}
      {...props}>
      {children}
      <SelectPrimitive.Icon asChild>
        <Icon name='icon-arrow-down' width={14} height={14} className='select-icon' />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
    {error && <p className='input-error'>{error}</p>}
  </div>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

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
const SelectContent = React.forwardRef<React.ComponentRef<typeof SelectPrimitive.Content>, SelectContentProps>(({ className, hidden, options, position = "popper", ...props }, ref) =>
  hidden ? null : (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content ref={ref} className={cn("element-content", className)} position={position} {...props}>
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport className={cn("select-viewport")}>
          {options?.map((option) => (
            <SelectItem key={option.value || option.id} value={option.value || option.id || ""}>
              {option.label || option.name}
            </SelectItem>
          ))}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
);
SelectContent.displayName = SelectPrimitive.Content.displayName;

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

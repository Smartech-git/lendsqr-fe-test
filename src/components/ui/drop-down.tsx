"use client";

import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import * as React from "react";

import Button, { ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils/";

const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuGroup = DropdownMenuPrimitive.Group;
const DropdownMenuSub = DropdownMenuPrimitive.Sub;
const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

interface DropdownMenuTriggerProps extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Trigger>, Omit<ButtonProps, "disabled"> {}
const DropdownMenuTrigger = React.forwardRef<React.ComponentRef<typeof DropdownMenuPrimitive.Trigger>, DropdownMenuTriggerProps>(({ className, children, size, variant, asChild = true, ...props }, ref) => (
  <DropdownMenuPrimitive.Trigger ref={ref} asChild={asChild}>
    <Button variant={variant} size={size} className={cn(className)} {...props}>
      {children}
    </Button>
  </DropdownMenuPrimitive.Trigger>
));
DropdownMenuTrigger.displayName = DropdownMenuPrimitive.Trigger.displayName;

const DropdownMenuSubTrigger = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger ref={ref} className={cn("dropdown-menu-sub-trigger element-item", inset && "inset", className)} {...props}>
    {children}
  </DropdownMenuPrimitive.SubTrigger>
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;

const DropdownMenuSubContent = React.forwardRef<React.ComponentRef<typeof DropdownMenuPrimitive.SubContent>, React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>>(({ className, ...props }, ref) => <DropdownMenuPrimitive.SubContent ref={ref} className={cn("dropdown-menu-sub-content element-content", className)} {...props} />);
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;

interface DropdownContentProps extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content> {
  contentInnerClassName?: string;
}
const DropdownMenuContent = React.forwardRef<React.ComponentRef<typeof DropdownMenuPrimitive.Content>, DropdownContentProps>(({ className, sideOffset = 4, children, contentInnerClassName, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content ref={ref} sideOffset={sideOffset} className={cn("dropdown-menu-content element-content", className)} {...props}>
      <div role='menu-inner' className={cn("dropdown-menu-content-inner", contentInnerClassName)}>
        {children}
      </div>
    </DropdownMenuPrimitive.Content>
  </DropdownMenuPrimitive.Portal>
));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

const DropdownMenuItem = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => <DropdownMenuPrimitive.Item ref={ref} className={cn("dropdown-menu-item element-item", inset && "inset", className)} {...props} />);
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

const DropdownMenuCheckboxItem = React.forwardRef<React.ComponentRef<typeof DropdownMenuPrimitive.CheckboxItem>, React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem ref={ref} className={cn("dropdown-menu-checkbox-item element-item", className)} checked={checked} {...props}>
    <span className='dropdown-menu-item-indicator'>
      <DropdownMenuPrimitive.ItemIndicator />
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;

const DropdownMenuRadioItem = React.forwardRef<React.ComponentRef<typeof DropdownMenuPrimitive.RadioItem>, React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem ref={ref} className={cn("dropdown-menu-radio-item element-item", className)} {...props}>
    <span className='dropdown-menu-item-indicator'>
      <DropdownMenuPrimitive.ItemIndicator />
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

const DropdownMenuLabel = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => <DropdownMenuPrimitive.Label ref={ref} className={cn("dropdown-menu-label", inset && "inset", className)} {...props} />);
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

const DropdownMenuSeparator = React.forwardRef<React.ComponentRef<typeof DropdownMenuPrimitive.Separator>, React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>>(({ className, ...props }, ref) => <DropdownMenuPrimitive.Separator ref={ref} className={cn("dropdown-menu-separator", className)} {...props} />);
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

const DropdownMenuShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return <span className={cn("dropdown-menu-shortcut", className)} {...props} />;
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

export { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuCheckboxItem, DropdownMenuRadioItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuGroup, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuRadioGroup };

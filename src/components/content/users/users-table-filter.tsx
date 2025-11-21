"use client";

import { useState } from "react";

import { organization, status } from "@/app/app/users/variables";
import { Icon } from "@/components/icons";
import Button from "@/components/ui/button";
import DatePicker from "@/components/ui/date-picker";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/drop-down";
import Input from "@/components/ui/input";
import { Select } from "@/components/ui/select";

interface Props {
  label: string;
  className?: string;
}
export default function UsersTableFilter({ label, className }: Props) {
  const [open, setOpen] = useState(false);

  const handleReset = () => {
    setOpen(false);
  };

  const handleFilter = () => {
    setOpen(false);
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger className={className} endContent={<Icon width={16} height={16} name='icon-filter' />} variant='flat' asChild>
        {label}
      </DropdownMenuTrigger>
      <DropdownMenuContent className='users-table-filter'>
        <Select options={organization} label='Organisations' size='md' placeHolder='Select' />
        <Input label='Username' animatePlaceholder={false} size='md' placeholder='User' />
        <Input label='Email' animatePlaceholder={false} size='md' placeholder='Email' />
        <Input label='Phone number' type='tel' animatePlaceholder={false} size='md' placeholder='Phone number' />
        <DatePicker size='md' label='Date' placeholder='Date' />
        <Select options={status} label='Status' size='md' placeHolder='Select' />

        <div className='users-table-filter-bottom-content'>
          <Button onClick={handleReset} size='md' variant='outlined'>
            Reset
          </Button>
          <Button onClick={handleFilter} size='md'>
            Filter
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

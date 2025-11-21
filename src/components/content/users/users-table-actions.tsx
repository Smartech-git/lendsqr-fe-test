"use client";

import Link from "next/link";

import { Icon } from "@/components/icons";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/drop-down";

interface Props {
  userId: string | number;
}
export default function UsersTableActions({ userId }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger variant='flat' asChild>
        <Icon width={20} height={20} name='icon-more' />
      </DropdownMenuTrigger>
      <DropdownMenuContent side='left'>
        <Link href={`users/${userId}`}>
          <DropdownMenuItem>
            <Icon name='icon-eye-open' />
            <span>View detials</span>
          </DropdownMenuItem>
        </Link>
        <DropdownMenuItem>
          <Icon name='icon-delete-friend' />
          <span>Blacklist user</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Icon name='icon-user-np-check' />
          <span>Activate user</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

"use client";

import { useMemo } from "react";

import { cn } from "@/lib/utils/";

export type ChipStatus = "Inactive" | "Pending" | "Blacklisted" | "Active";

interface Props {
  children?: string;
  status: ChipStatus;
}

export default function Chip({ children, status = "Inactive" }: Props) {
  const statusClassMap = useMemo(() => {
    return {
      Inactive: "chip--inactive",
      Pending: "chip--pending",
      Blacklisted: "chip--blacklisted",
      Active: "chip--active",
    };
  }, [status]);

  return <div className={cn("chip", statusClassMap[status])}>{children ?? status}</div>;
}

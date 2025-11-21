"use client";

import { format } from "date-fns";
import { useCallback } from "react";

import { ColumeKey, users, UsersData, usersTableCol } from "@/app/app/users/variables";
import UsersTableActions from "@/components/content/users/users-table-actions";
import Chip from "@/components/ui/chip";
import Pagination from "@/components/ui/pagination";
import Table, { Column } from "@/components/ui/table";
import { cn } from "@/lib/utils";

import UsersTableFilter from "./users-table-filter";
import UsersTablePerPage from "./users-table-per-page";

export default function UsersTable() {
  const renderColumn = useCallback((column: Column) => {
    return <UsersTableFilter label={column.label} className={cn(column.hidden && "hidden")} />;
  }, []);

  const renderCell = useCallback((item: UsersData, columnKey: string) => {
    switch (columnKey as ColumeKey) {
      case "organization":
        return <span>{item.organization}</span>;
      case "username":
        return <span>{item.username}</span>;
      case "email":
        return <span>{item.email}</span>;
      case "phoneNumber":
        return <span>{item.phoneNumber}</span>;
      case "dateJoined":
        return <span className='text-nowrap'>{format(item.dateJoined, "PP p")}</span>;
      case "status":
        return <Chip status={item.status} />;
      case "action":
        return <UsersTableActions userId={item.id} />;
      default:
        return null;
    }
  }, []);

  return <Table data={users} renderCell={renderCell} columns={usersTableCol} renderColumn={renderColumn} bottomContent={<UsersTableBottomContent />} />;
}

const UsersTableBottomContent = () => {
  const handleOnPageSelect = (page: number) => {};
  return (
    <div className='users-table-bottom-content'>
      <div className='users-table-bottom-content-per-page'>
        <span>Showing</span>
        <UsersTablePerPage />
        <span>{`out of 500`}</span>
      </div>
      <Pagination total={12} onChange={handleOnPageSelect} />
    </div>
  );
};

"use client";

import { ReactNode } from "react";

import { cn } from "@/lib/utils";

export type Column = {
  key: string;
  label: string;
  sortable?: boolean;
  hidden?: boolean;
  hiddenOnMobile?: boolean;
};

interface Props<T extends { key?: string | number; id?: string | number }> {
  data?: T[];
  columns: Column[];
  renderCell?: (item: T, columnKey: string) => React.ReactNode;
  renderColumn?: (column: Column) => React.ReactNode;
  bottomContent?: ReactNode;
}

export default function Table<T extends { key?: string | number; id?: string | number }>({ data, renderColumn, columns, renderCell, bottomContent }: Props<T>) {
  return (
    <div className='table-base'>
      <div className='table-wrapper card'>
        <table className='table'>
          <thead>
            <tr className='table-thead-tr'>
              {columns.map((column) => (
                <th className={cn("table-thead-th", column.hiddenOnMobile && "table-thead-th--hidden-mobile")} key={column.key} data-hover={column.sortable ? "true" : undefined}>
                  {renderColumn?.(column) ?? column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className='table-tbody'>
            {data?.map((item) => (
              <tr key={item.id || item.key} className='table-tbody-tr'>
                {columns.map((column) => (
                  <td key={column.key} className={cn("table-tbody-td", column.hiddenOnMobile && "table-tbody-td--hidden-mobile")}>
                    {renderCell?.(item, column.key)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {bottomContent && bottomContent}
    </div>
  );
}

import * as React from "react";

type TSortDirection = "asc" | "desc" | null;

interface ITableColumn<T = any> {
  name: keyof T;
  title: React.ReactNode;
  render?: (row: T) => React.ReactNode;
  sortable?: boolean;
  filterable?: boolean;
  isFilterActive?: boolean;
  renderFilter?: () => React.ReactNode;
}

interface ITableRow {
  id: string;
}

export type { ITableColumn, ITableRow, TSortDirection };

import * as React from "react";

type TSortDirection = "asc" | "desc" | null;

interface ITableColumn<T = any> {
  name: keyof T;
  title: React.ReactNode;
  sortable?: boolean;
  isFilterActive?: boolean;
  renderFilter?: () => React.ReactNode;
}

type TRowId = string | number;

interface ITableRow {
  id: TRowId;
}

export type { ITableColumn, ITableRow, TRowId, TSortDirection };

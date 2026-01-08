import * as React from "react";

interface ITableColumn {
  name: string;
  title: React.ReactNode;

  sortable?: boolean;
  sort?: "asc" | "desc";

  isFilterActive?: boolean;
  renderFilter?: () => React.ReactNode;
}

type RowId = string | number;

interface ITableRow {
  id: RowId;
}

export type { ITableColumn, ITableRow, RowId };

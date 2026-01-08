import { type ReactNode } from "react";
import type { ITableColumn, ITableRow } from "shared/ui/table";

interface IUserListWidgetRowModel extends ITableRow {
  userId?: ReactNode;
  name?: ReactNode;
  email?: ReactNode;
  role?: ReactNode;
}

interface IUserListWidgetColumnModel<T extends ITableRow> extends Omit<ITableColumn, "name"> {
  name: keyof T;
}

export type { IUserListWidgetRowModel, IUserListWidgetColumnModel };

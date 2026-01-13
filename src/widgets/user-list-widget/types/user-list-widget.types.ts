import type { ITableColumn, ITableRow } from "shared/ui/table";
import { EUserRole } from "entities/user/model";
import React from "react";

interface IUserListWidgetRowModel extends ITableRow {
  name: string;
  email: string;
  role: EUserRole;
  actions?: React.ReactNode;
}

interface IUserListWidgetColumnModel<T extends ITableRow> extends Omit<ITableColumn, "name"> {
  name: keyof T;
}

interface IUserTableFilters {
  id: string;
  name: string;
  email: string;
  roles: EUserRole[];
}

export type { IUserListWidgetRowModel, IUserListWidgetColumnModel, IUserTableFilters };

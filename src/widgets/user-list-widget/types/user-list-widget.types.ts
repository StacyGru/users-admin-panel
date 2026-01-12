import type { ITableColumn, ITableRow } from "shared/ui/table";
import { EUserRole } from "entities/user/model";

interface IUserListWidgetRowModel extends ITableRow {
  name: string;
  email: string;
  role: EUserRole;
}

interface IUserListWidgetColumnModel<T extends ITableRow> extends Omit<ITableColumn, "name"> {
  name: keyof T | "actions";
}

interface IUserTableFilters {
  id: string;
  name: string;
  email: string;
  roles: EUserRole[];
}

export type { IUserListWidgetRowModel, IUserListWidgetColumnModel, IUserTableFilters };

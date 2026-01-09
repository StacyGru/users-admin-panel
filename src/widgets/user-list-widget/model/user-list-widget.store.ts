import { makeAutoObservable } from "mobx";
import type { IUserListWidgetRowModel } from "../types";
import type { TSortDirection } from "shared/ui/table";
import { sortTable } from "shared/lib/table-sort";

class UserTableStore {
  sortColumn: keyof IUserListWidgetRowModel | null = null;
  sortDirection: TSortDirection | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setSort = (column: keyof IUserListWidgetRowModel, direction: "asc" | "desc" | null) => {
    this.sortColumn = direction ? column : null;
    this.sortDirection = direction;
  };

  getSortedRows(rows: IUserListWidgetRowModel[]) {
    if (!this.sortColumn || !this.sortDirection) return rows;

    return sortTable(rows, this.sortColumn, this.sortDirection);
  }
}

export const userTableStore = new UserTableStore();

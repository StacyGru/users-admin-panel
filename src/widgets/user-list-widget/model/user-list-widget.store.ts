import { makeAutoObservable } from "mobx";
import type { IUserListWidgetRowModel, IUserTableFilters } from "../types";
import type { TSortDirection } from "shared/ui/table";
import { sortTable } from "shared/lib/table-sort";
import { EUserRole } from "entities/user/model";

class UserListStore {
  sortColumn: keyof IUserListWidgetRowModel | null = null;
  sortDirection: TSortDirection | null = null;

  filters: IUserTableFilters = {
    id: "",
    name: "",
    email: "",
    roles: []
  };

  deletingUserId: string | null = null;
  editingUserId: string | null = null;
  creatingUser: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setSort = (column: keyof IUserListWidgetRowModel, direction: "asc" | "desc" | null) => {
    this.sortColumn = direction ? column : null;
    this.sortDirection = direction;
  };

  setFilter<K extends keyof IUserTableFilters>(key: K, value: IUserTableFilters[K]) {
    this.filters[key] = value;
  }

  getFilteredRows(rows: IUserListWidgetRowModel[]) {
    return rows.filter((row) => {
      const idMatch =
        !this.filters.id || String(row.id).toLowerCase().startsWith(this.filters.id.toLowerCase());

      const nameMatch =
        !this.filters.name ||
        String(row.name)
          .toLowerCase()
          .split(" ")
          .some((part) => part.startsWith(this.filters.name.toLowerCase()));

      const emailMatch =
        !this.filters.email ||
        String(row.email).toLowerCase().startsWith(this.filters.email.toLowerCase());

      const roleMatch =
        this.filters.roles.length === 0 || this.filters.roles.includes(row.role as EUserRole);

      return idMatch && nameMatch && emailMatch && roleMatch;
    });
  }

  getSortedRows(rows: IUserListWidgetRowModel[]) {
    if (!this.sortColumn || !this.sortDirection) return rows;
    return sortTable(rows, this.sortColumn, this.sortDirection);
  }

  getProcessedRows(rows: IUserListWidgetRowModel[]) {
    const filtered = this.getFilteredRows(rows);
    return this.getSortedRows(filtered);
  }

  openDelete = (id: string) => {
    this.deletingUserId = id;
  };

  closeDelete = () => {
    this.deletingUserId = null;
  };

  openEdit = (id: string) => {
    this.editingUserId = id;
  };

  closeEdit = () => {
    this.editingUserId = null;
  };

  // TODO: подумать как оптимизировать логику открытия/закрытия модалок, возможно вынести отдельно
  openCreate = () => {
    this.creatingUser = true;
  };

  closeCreate = () => {
    this.creatingUser = false;
  };
}

export const userListStore = new UserListStore();

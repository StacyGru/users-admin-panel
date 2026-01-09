import type { TSortDirection } from "shared/ui/table";

function sortTable<T>(rows: T[], column: keyof T, direction: TSortDirection): T[] {
  return [...rows].sort((a, b) => {
    const aValue = a[column];
    const bValue = b[column];

    if (aValue == null || bValue == null) return 0;

    if (typeof aValue === "number" && typeof bValue === "number") {
      return direction === "asc" ? aValue - bValue : bValue - aValue;
    }

    return direction === "asc"
      ? String(aValue).localeCompare(String(bValue))
      : String(bValue).localeCompare(String(aValue));
  });
}

export { sortTable };

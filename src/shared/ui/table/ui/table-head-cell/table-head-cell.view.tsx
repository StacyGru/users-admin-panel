import TableCell from "@mui/material/TableCell";
import IconButton from "@mui/material/IconButton";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import type { ITableColumn, TSortDirection } from "shared/ui/table";

interface TableHeadCellProps<T> {
  column: ITableColumn<T>;
  sortDirection: TSortDirection;
  onSortChange?: (column: keyof T, direction: TSortDirection) => void;
}

const TableHeadCell = <T,>({ column, sortDirection, onSortChange }: TableHeadCellProps<T>) => {
  const toggleSort = () => {
    if (!onSortChange) return;

    let nextSort: TSortDirection = null;

    if (sortDirection === null) {
      nextSort = "asc";
    } else if (sortDirection === "asc") {
      nextSort = "desc";
    } else {
      nextSort = null;
    }

    onSortChange(column.name, nextSort);
  };

  const isActive = sortDirection !== null;

  return (
    <TableCell
      sx={{
        position: "relative",
        fontWeight: "bold",

        "&:hover .sort-button": {
          opacity: 1
        }
      }}
    >
      {column.title}

      {column.sortable && (
        <IconButton
          className="sort-button"
          size="small"
          onClick={toggleSort}
          sx={{
            ml: 0.5,
            opacity: isActive ? 1 : 0,
            transition: "opacity 0.2s",
            color: isActive ? "primary.main" : "inherit"
          }}
        >
          {sortDirection === "desc" ? (
            <ArrowDownwardIcon fontSize="small" />
          ) : (
            <ArrowUpwardIcon fontSize="small" />
          )}
        </IconButton>
      )}
    </TableCell>
  );
};

export { TableHeadCell };

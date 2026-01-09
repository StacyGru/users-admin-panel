import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import type { ITableColumn, ITableRow, TSortDirection } from "shared/ui/table";
import { TableHeadCell } from "shared/ui/table/ui";

interface CustomTableProps<T extends ITableRow> {
  columnList: Array<ITableColumn<T>>;
  rowList: T[];
  sortColumn?: keyof T | null;
  sortDirection?: TSortDirection;
  onSortChange?: (column: keyof T, direction: TSortDirection) => void;
}

const CustomTable = <T extends ITableRow>({
  columnList,
  rowList,
  sortColumn,
  sortDirection,
  onSortChange
}: CustomTableProps<T>) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {columnList.map((column) => (
              <TableHeadCell<T>
                key={String(column.name)}
                column={column}
                sortDirection={sortColumn === column.name ? (sortDirection ?? null) : null}
                onSortChange={onSortChange}
              />
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {rowList.map((row) => (
            <TableRow key={row.id}>
              {columnList.map((column) => (
                <TableCell key={String(column.name)}>{String(row[column.name])}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export { CustomTable };

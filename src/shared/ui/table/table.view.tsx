import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import type { ITableColumn, ITableRow, TSortDirection } from "shared/ui/table";
import { TableHeadCell } from "shared/ui/table/ui";
import Stack from "@mui/material/Stack";
import { blue } from "@mui/material/colors";

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
    <TableContainer
      component={Paper}
      sx={{
        borderRadius: 2,
        overflow: "hidden"
      }}
    >
      <Table
        sx={{
          "& thead": {
            backgroundColor: blue[100]
          },

          "& tbody tr:hover": {
            backgroundColor: blue[50]
          }
        }}
      >
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
          {rowList.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={columnList.length}
                sx={{
                  height: "100px",
                  textAlign: "center",
                  color: "text.secondary",
                  fontStyle: "italic",
                  borderBottom: "none"
                }}
              >
                <Stack alignItems="center" justifyContent="center">
                  Записи не найдены. Проверьте параметры фильтрации или убедитесь, что в таблице
                  есть данные
                </Stack>
              </TableCell>
            </TableRow>
          ) : (
            rowList.map((row) => (
              <TableRow key={row.id}>
                {columnList.map((column) => (
                  <TableCell key={String(column.name)}>
                    {column.render ? column.render(row) : String(row[column.name])}
                  </TableCell>
                ))}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export { CustomTable };

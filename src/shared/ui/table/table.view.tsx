import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import type { FC } from "react";
import type { ITableColumn, ITableRow } from "shared/ui/table";

interface IProps {
  columnList: ITableColumn[];
  rowList: ITableRow[];
}

const CustomTable: FC<IProps> = (props) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            {props.columnList.map((row) => (
              <TableCell>{row.title}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rowList.map((row) => (
            <TableRow key={row.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              {props.columnList.map((column) => (
                <TableCell key={column.name}>{row[column.name as keyof typeof row]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export { CustomTable };
